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
  ".txt": "text/plain; charset=utf-8"
};

const siteTargets = [
  "top",
  "voice-demo",
  "experience",
  "cvs",
  "nationwide",
  "gm",
  "tech-mahindra",
  "projects",
  "jobninjas",
  "ai-talking-portfolio",
  "pharmacy-genai-copilot",
  "insurance-fraud",
  "open-source",
  "publications",
  "research-paper-1",
  "research-paper-2",
  "github-profile",
  "linkedin-profile",
  "substack-profile",
  "skills",
  "certifications",
  "claude-certified-architect",
  "education",
  "contact"
];

const resumeKnowledge = `
Sairam Veereddy is an AI Engineer in Alpharetta, Georgia.
Contact: vsairamkumarreddy@gmail.com, (217) 862-4693.
Links: https://www.linkedin.com/in/sairam-kumar-365232192/, sairamveereddy.com,
https://github.com/sairamveereddy, https://substack.com/@firstninja.

Professional summary:
AI/ML Engineer with 4+ years translating cutting-edge research and emerging AI technologies
into functional prototypes, experiments, and production systems. Expertise in quantitative
evaluation of foundation models, generative AI systems, and multimodal experiences. Proven
ability to rapidly prototype novel ideas, build evaluation frameworks and benchmarks,
fine-tune and validate models against real-world datasets, and assess technology adoption
potential. Comfortable moving between research papers, datasets, prototype code, and
production-scale systems.

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

Technical skills:
Foundation models and GenAI: OpenAI GPT-4, Anthropic Claude, AWS Bedrock, Azure OpenAI,
Google Gemini, Vertex AI, Hugging Face, multimodal models. Agentic and multi-agent systems:
LangGraph, AutoGen, orchestration, agent workflows, tool-use design, function calling.
Evaluation and experimentation: benchmarks, A/B testing, metrics design, bias assessment,
drift detection, qualitative and quantitative evaluation, fine-tuning validation. Rapid
prototyping: research paper implementation, proof-of-concepts, GitHub Copilot, Cursor,
LangChain, LlamaIndex, ChromaDB. MLOps: MLflow, SageMaker, model monitoring, DVC, CI/CD.
Core stack: Python, SQL, FastAPI, REST APIs, Git, Docker, Kubernetes, TensorFlow, PyTorch,
Scikit-learn, XGBoost, Pandas, NumPy, Spark, Kafka, Airflow, Snowflake, BigQuery, Databricks,
Power BI, ChromaDB, FAISS, Pinecone, RAG, semantic search.

Projects:
JobNinjas.ai: full-stack AI platform designed and shipped solo using AWS Cognito, RDS, S3,
SES, FastAPI, LangChain RAG agent, 8 n8n automation workflows, Vapi voice AI, Faster-Whisper,
Coqui/StyleTTS2, and WebRTC.

AI Talking Portfolio: full-stack conversational AI where visitors interact with an LLM agent
in real time using RAG, ChromaDB, FastAPI, OpenAI GPT-4, semantic search over structured data,
React front end, and streaming.

Pharmacy GenAI Copilot: RAG-based clinical assistant integrating OpenAI and AWS Bedrock,
deployed on SageMaker with evaluation frameworks and HIPAA compliance.

Insurance Fraud Detection System: end-to-end XGBoost and Scikit-learn ML pipeline with Airflow
orchestration, real-time Kafka feeds, A/B testing, and 92% fraud detection precision.

Open Source & Side Projects: 27+ public repositories spanning AI automation tools, full-stack
applications, and data engineering experiments.

Publications and links:
Research Paper 1: https://zenodo.org/records/21348229.
Research Paper 2: https://zenodo.org/records/21367111.
GitHub: https://github.com/sairamveereddy.
LinkedIn: https://www.linkedin.com/in/sairam-kumar-365232192/.
Substack: https://substack.com/@firstninja.

Education:
MS Management Information Systems, University of Illinois at Springfield, 2024.
BTech Electronics & Communication Engineering, ACE Engineering College, Hyderabad, 2020.

Certifications and training:
Claude Certified Architect (Anthropic): agentic architecture, tool design, prompt engineering,
structured output, and context management. Anthropic Specialty in progress / target 2026.
Google Professional Machine Learning Engineer in progress / target 2026. LangChain & LangGraph
Agentic AI Development. HIPAA Compliance for Healthcare Data Engineering.
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
- Answer only from the resume knowledge below.
- If the visitor asks about something not in the knowledge base, say you do not have that
  detail yet and offer to talk about relevant resume evidence.
- While answering, control the website using the navigate_site tool.
- Call navigate_site before explaining a specific section, role, project, skill group,
  education, or contact detail.
- Do not say "I am calling a tool" or expose implementation details.
- Keep most spoken answers under 25 seconds unless the user asks for a deep walkthrough.

Website control rules:
- For general intro, navigate to "top".
- For how the voice website works, navigate to "voice-demo".
- For CVS/pharmacy/healthcare, navigate to "cvs".
- For Nationwide/insurance/fraud/claims/underwriting, navigate to "nationwide".
- For GM Financial/finance/auto lending/risk analytics, navigate to "gm".
- For Tech Mahindra/telecom/Telefonica, navigate to "tech-mahindra".
- For GenAI/RAG/LangChain/LlamaIndex/projects, navigate to "projects" or the exact project.
- For JobNinjas.ai, navigate to "jobninjas".
- For AI Talking Portfolio, navigate to "ai-talking-portfolio".
- For Pharmacy GenAI Copilot, navigate to "pharmacy-genai-copilot".
- For fraud detection, navigate to "insurance-fraud".
- For open source or GitHub projects, navigate to "open-source".
- For research papers, Zenodo, publications, GitHub, LinkedIn, or Substack, navigate to "publications" or the exact link card.
- For Claude Certified Architect, Anthropic, certifications, or credentials, navigate to "certifications" or "claude-certified-architect".
- For skills/tools/stack, navigate to "skills".
- For education/certifications, navigate to "education".
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

function serveStatic(request, response) {
  const requestedPath = decodeURIComponent(new URL(request.url, "http://localhost").pathname);
  const relativePath = normalize(requestedPath === "/" ? "index.html" : requestedPath.slice(1));
  const filePath = join(root, relativePath);

  if (!filePath.startsWith(root) || !existsSync(filePath) || !statSync(filePath).isFile()) {
    response.writeHead(404, { "content-type": "text/plain; charset=utf-8" });
    response.end("Not found");
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
