import { createReadStream, existsSync, statSync } from "node:fs";
import { createServer } from "node:http";
import { extname, join, normalize } from "node:path";

const staticRoot = join(process.cwd(), "public");
const root = existsSync(staticRoot) ? staticRoot : process.cwd();
const port = Number(process.env.PORT || 4173);
const apiKey = process.env.OPENAI_API_KEY;

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".pdf": "application/pdf",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".bib": "text/plain; charset=utf-8"
};

const siteTargets = [
  "top",
  "research-engineering",
  "voice-demo",
  "experience",
  "cvs",
  "nationwide",
  "gm",
  "tech-mahindra",
  "projects",
  "nyc-pulse",
  "jobninjas",
  "ai-talking-portfolio",
  "miro-n8n-hackathon",
  "pharmacy-genai-copilot",
  "insurance-fraud",
  "open-source",
  "publications",
  "research",
  "the-invisible-singularity",
  "from-detection-to-proficiency",
  "achievements",
  "blog",
  "speaking-and-community",
  "github-profile",
  "linkedin-profile",
  "substack-profile",
  "instagram-profile",
  "skills",
  "certifications",
  "claude-certified-architect",
  "education",
  "contact"
];

const resumeKnowledge = `
Sairam Kumar Reddy Veereddy is an AI/ML Engineer, Applied AI Researcher, Hackathon Winner, and AI Educator based in Alpharetta, Georgia.
Contact: vsairamkumarreddy@gmail.com, (217) 862-4693.
Links: https://www.linkedin.com/in/sairam-kumar-365232192/, https://sairamveereddy.com,
https://github.com/sairamveereddy, https://substack.com/@firstninja, https://www.instagram.com/first.ninja_/.

Professional summary:
AI/ML Engineer with 4+ years translating cutting-edge research and emerging AI technologies
into functional prototypes, evaluation frameworks, and production systems across healthcare,
insurance, finance, and enterprise automation. Hackathon winner (Miro × n8n), independent researcher
with citable publications on Zenodo, and creator educating 16,900+ engineers on practical AI development.
Expertise in quantitative evaluation of foundation models, generative AI systems, and multimodal experiences.
Proven ability to rapidly prototype novel ideas, build evaluation frameworks and benchmarks,
fine-tune and validate models against real-world datasets, and assess technology adoption potential.

Experience:
CVS Pharmacy, AI/ML Engineer, Feb 2026 - Present. Designed and evaluated a GenAI-powered
pharmacy assistant integrating OpenAI GPT-4 and AWS Bedrock with structured clinical data
using LangChain, LlamaIndex, and RAG pipelines. Built evaluation benchmarks and testing
datasets for fine-tuning transformer models on drug entity recognition and medication review
extraction, measuring 28% extraction accuracy gains. Architected SageMaker MLOps monitoring
for drift detection, data quality SLAs, and responsible AI governance. Deployed HIPAA-compliant
ML pipelines with Docker and Kubernetes.

Nationwide Insurance, AI/ML Engineer, Mar 2025 - Feb 2026. Designed and validated
AI-powered fraud detection models with XGBoost and Scikit-learn, defining evaluation metrics,
A/B testing protocols, and bias mitigation, achieving 92% precision on flagged claims. Built
Airflow experimentation workflows and Kafka-to-Spark CDC feeds that reduced data latency from
batch-daily to sub-5-minute refresh for continuous model monitoring. Created governed
Snowflake and BigQuery AI data products with dashboards to track model behavior.

GM Financial, AI/ML Data Engineer, Jul 2024 - Mar 2025. Built AI-augmented Power BI analytics
for financial datasets, developed Python and SQL ETL pipelines that reduced manual processing
effort by 40%, created MS Visio system designs for AI-augmented workflows, and delivered
three production data features per sprint with Docker, Git, and CI/CD.

Tech Mahindra, Associate Software Engineer, Aug 2020 - Jul 2022. Developed full-stack data
processing microservices for telecom workflows supporting 1M+ daily transactions with Python,
SQL, and Hansen Catalog. Designed containerized services with Docker and Git and automated
pipeline validation/reporting to reduce QA effort by 25%.

Hackathon Achievements:
Miro × n8n Hackathon — Winning Team: Strangers. Built a bi-directional event-driven bridge
connecting collaborative visual whiteboard logic in Miro with multi-agent automation in n8n.
Real-time webhooks parse visual changes, execute AI tool pipelines, and generate structured
sticky notes, connected nodes, and status badges directly back onto the live Miro board.

Research Publications:
1. The Invisible Singularity: Artificial Intelligence as Convergent Infrastructure and the Reorganization of Global Work, 2027–2035.
   DOI: 10.5281/zenodo.21348229. Zenodo Citable Research Archive. Analyzes general-purpose AI convergence, capability acceleration, and employment reorganization.
2. From Detection to Proficiency: The Coming Inversion of Academic AI Policy and a Framework for Assessing Student AI Utilization in Higher Education (2026–2035).
   DOI: 10.5281/zenodo.21367111. Zenodo Citable Research Archive. Proposes AI Utilization Proficiency (AUP) and Baseline Differential Analysis (BDA) for AI literacy assessment.

Selected Projects:
NYC Pulse: AI-powered urban disruption intelligence using Mistral Large and Elasticsearch. Features the Evidence Loop verifying ripple-effect hypotheses against historical 311 data and GTFS transit schedules.
JobNinjas.ai: Full-stack AI platform built solo using AWS (Cognito, RDS, S3, SES), FastAPI, LangChain RAG agent, 8 n8n automation workflows, Vapi voice AI, Faster-Whisper, and WebRTC.
AI Talking Portfolio: Full-stack conversational AI where visitors interact with an LLM agent in real time using WebRTC, OpenAI Realtime API, RAG, and dynamic DOM control.
Pharmacy GenAI Copilot: Clinical RAG assistant on AWS SageMaker with Bedrock and OpenAI.
Insurance Fraud Detection System: XGBoost pipeline with Kafka CDC and Airflow (92% precision).

Speaking and Community:
Instagram AI Content Creator (@first.ninja_) with ~16,900 followers (as of October 2026).
Publishes daily AI tool explainers, multi-agent tutorials, open-source breakdowns, and research summaries.
Technical blog on sairamveereddy.com/blog covering agent reliability, RAG architecture, and n8n workflows.
Substack writer at firstninja. Substack and GitHub contributor with 27+ public repositories.

Technical skills:
Foundation models & GenAI: OpenAI GPT-4, Anthropic Claude, AWS Bedrock, Azure OpenAI, Google Gemini, Vertex AI, Hugging Face, multimodal models.
Agentic & multi-agent systems: LangGraph, AutoGen, orchestration, agent workflows, tool-use design, function calling.
Evaluation & experimentation: Benchmarks, A/B testing, metrics design, bias assessment, drift detection, quantitative evaluation, fine-tuning validation.
Rapid prototyping: Research paper implementation, POC development, Cursor, LangChain, LlamaIndex, ChromaDB.
MLOps: MLflow, SageMaker, model monitoring, DVC, CI/CD.
Core stack: Python, SQL, FastAPI, REST APIs, Git, Docker, Kubernetes, TensorFlow, PyTorch, Scikit-learn, XGBoost, Spark, Kafka, Airflow, Snowflake, BigQuery, Databricks.

Education:
MS Management Information Systems, University of Illinois at Springfield, 2024.
BTech Electronics & Communication Engineering, ACE Engineering College, Hyderabad, 2020.

Certifications:
Claude Certified Architect (Anthropic). Microsoft Azure AZ-900. Google Cloud Generative AI. LangChain & LangGraph. HIPAA Compliance.
`;

function buildSessionConfig() {
  return {
    type: "realtime",
    model: "gpt-realtime",
    instructions: `
You are Sairam Veereddy's realtime portfolio voice agent.

Your job:
- Speak in first person as Sairam.
- Sound natural, confident, concise, and helpful.
- Answer only from the resume and portfolio knowledge below.
- If the visitor asks about something not in the knowledge base, say you do not have that
  detail yet and offer to talk about relevant resume evidence.
- While answering, control the website using the navigate_site tool.
- Call navigate_site before explaining a specific section, role, project, skill group,
  education, or contact detail.
- Do not say "I am calling a tool" or expose implementation details.
- Keep most spoken answers under 25 seconds unless the user asks for a deep walkthrough.

Website control rules:
- For general intro, navigate to "top" or "research-engineering".
- For how the voice website works, navigate to "voice-demo".
- For CVS/pharmacy/healthcare, navigate to "cvs".
- For Nationwide/insurance/fraud/claims/underwriting, navigate to "nationwide".
- For GM Financial/finance/auto lending/risk analytics, navigate to "gm".
- For Tech Mahindra/telecom/Telefonica, navigate to "tech-mahindra".
- For GenAI/RAG/LangChain/LlamaIndex/projects, navigate to "projects" or the exact project.
- For NYC Pulse, navigate to "nyc-pulse".
- For JobNinjas.ai, navigate to "jobninjas".
- For AI Talking Portfolio, navigate to "ai-talking-portfolio".
- For Miro × n8n Hackathon or team Strangers, navigate to "miro-n8n-hackathon" or "achievements".
- For research papers, Zenodo, publications, navigate to "research", "the-invisible-singularity", or "from-detection-to-proficiency".
- For achievements and hackathon wins, navigate to "achievements".
- For technical blog posts and articles, navigate to "blog".
- For Instagram, community, speaking, navigate to "speaking-and-community" or "instagram-profile".
- For Claude Certified Architect, Anthropic, certifications, navigate to "certifications" or "claude-certified-architect".
- For skills/tools/stack, navigate to "skills".
- For education, navigate to "education".
- For email/phone/contact/hiring, navigate to "contact".

Resume knowledge:
${resumeKnowledge}
    `.trim(),
    audio: {
      output: {
        voice: "marin"
      }
    },
    tools: [
      {
        type: "function",
        name: "navigate_site",
        description:
          "Scroll the portfolio to a specific section and visually highlight it while the agent explains it.",
        parameters: {
          type: "object",
          properties: {
            target: {
              type: "string",
              enum: siteTargets,
              description: "The section or card id to scroll to."
            },
            reason: {
              type: "string",
              description: "Short human-readable reason for the navigation."
            }
          },
          required: ["target"]
        }
      }
    ],
    tool_choice: "auto"
  };
}

async function readRequestBody(request) {
  const chunks = [];
  for await (const chunk of request) chunks.push(chunk);
  return Buffer.concat(chunks).toString("utf8");
}

async function handleRealtimeSession(request, response) {
  if (!apiKey) {
    sendJson(response, 500, {
      error: "Missing OPENAI_API_KEY. Add it to your PowerShell session before running the server."
    });
    return;
  }

  const sdp = await readRequestBody(request);
  const formData = new FormData();
  formData.set("sdp", sdp);
  formData.set("session", JSON.stringify(buildSessionConfig()));

  const realtimeResponse = await fetch("https://api.openai.com/v1/realtime/calls", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`
    },
    body: formData
  });

  const answerSdp = await realtimeResponse.text();
  response.writeHead(realtimeResponse.status, {
    "content-type": realtimeResponse.headers.get("content-type") || "application/sdp"
  });
  response.end(answerSdp);
}

function sendJson(response, status, payload) {
  const body = JSON.stringify(payload);
  response.writeHead(status, {
    "content-type": "application/json; charset=utf-8",
    "content-length": Buffer.byteLength(body)
  });
  response.end(body);
}

function resolveFilePath(pathname) {
  let cleanPath = pathname;
  if (cleanPath.endsWith("/") && cleanPath.length > 1) {
    cleanPath = cleanPath.slice(0, -1);
  }

  const relativePath = normalize(cleanPath === "/" ? "index.html" : cleanPath.slice(1));
  const candidate = join(root, relativePath);

  if (existsSync(candidate)) {
    if (statSync(candidate).isDirectory()) {
      const indexCandidate = join(candidate, "index.html");
      if (existsSync(indexCandidate) && statSync(indexCandidate).isFile()) {
        return indexCandidate;
      }
    } else if (statSync(candidate).isFile()) {
      return candidate;
    }
  }

  const htmlCandidate = candidate + ".html";
  if (existsSync(htmlCandidate) && statSync(htmlCandidate).isFile()) {
    return htmlCandidate;
  }

  const indexCandidate = join(candidate, "index.html");
  if (existsSync(indexCandidate) && statSync(indexCandidate).isFile()) {
    return indexCandidate;
  }

  return null;
}

function serveStatic(request, response) {
  const requestedPath = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const filePath = resolveFilePath(requestedPath);

  if (!filePath || !filePath.startsWith(root)) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found: " + requestedPath);
    return;
  }

  response.writeHead(200, {
    "content-type": contentTypes[extname(filePath)] || "application/octet-stream"
  });
  createReadStream(filePath).pipe(response);
}

createServer(async (request, response) => {
  try {
    if (request.method === "POST" && request.url === "/session") {
      await handleRealtimeSession(request, response);
      return;
    }

    if (request.method === "GET" && request.url === "/health") {
      sendJson(response, 200, { ok: true, realtimeConfigured: Boolean(apiKey) });
      return;
    }

    serveStatic(request, response);
  } catch (error) {
    console.error(error);
    sendJson(response, 500, { error: "Server error", detail: error.message });
  }
}).listen(port, () => {
  console.log(`Sairam voice portfolio running at http://localhost:${port}`);
  console.log(apiKey ? "Realtime voice is configured." : "Set OPENAI_API_KEY to enable realtime voice.");
});
