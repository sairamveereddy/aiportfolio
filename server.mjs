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
  "patent-rag",
  "text-to-sql",
  "job-copilot",
  "skills",
  "education",
  "contact"
];

const resumeKnowledge = `
Sairam Veereddy is an AI Engineer in Alpharetta, Georgia.
Contact: vsairamkumarreddy@gmail.com, (217) 862-4693.

Professional summary:
AI Engineer with 5+ years of experience designing and delivering intelligent data and AI
solutions across pharmacy, insurance, finance, and talent technology. Experienced in Python,
Spark, SQL, GCP, Azure, AWS, AWS SageMaker, Databricks, Docker, Kubernetes, LangChain,
LangGraph, LlamaIndex, OpenAI APIs, RAG, agentic workflows, ChromaDB, Airflow, Kafka,
GoldenGate, Snowflake, BigQuery, Power BI, FastAPI, Flask, and REST APIs.

Experience:
CVS Pharmacy, AI / ML Engineer, Feb 2026 - Present. Builds AI/ML models for pharmacy demand
forecasting, medication adherence prediction, personalized health recommendations, GenAI
pharmacy assistant and health copilot using LangChain, LlamaIndex, RAG, ChromaDB, OpenAI APIs,
AWS Bedrock, FastAPI, SageMaker, Databricks, Spark, Airflow, Snowflake, Docker, Kubernetes.

Nationwide Insurance, AI Engineer, Mar 2025 - Feb 2026. Built Spark/Python ETL and ELT
pipelines, AI fraud detection models using XGBoost and Scikit-learn, Airflow DAGs with SLAs,
CDC feeds with Kafka and GoldenGate, observability dashboards, dimensional/data-vault marts,
GCP Dataproc, Azure, Databricks, Snowflake, BigQuery, Power BI.

GM Financial, Data Analyst, Jul 2024 - Mar 2025. Translated auto lending and risk analytics
requirements into Python, SQL, Power BI, REST API, workflow, data flow, and database solutions.

Tech Mahindra, Associate Software Engineer, Aug 2020 - Jul 2022. Worked on Telefonica Germany
telecom project with Python, SQL, Power BI, Visio, REST APIs, Git, Docker, Hansen Catalog,
data engineering, visualization, API development, and process automation.

Projects:
Enterprise Patent & Research Assistant: LLM RAG virtual assistant using LangChain, LlamaIndex,
ChromaDB, Azure OpenAI, AWS Bedrock, FastAPI, hybrid retrieval, re-ranking, Llama 3 fallback
via Ollama, citation verification agents, and scalable deployment.

Text-to-SQL Analytics Copilot: agentic LLM and guarded SQL system using LangChain agents,
ChromaDB, FastAPI, AWS Lambda, Azure Functions, Power BI, guardrails, and evaluation harness.

AI Job Application Copilot: RAG and agentic workflow using LangChain, LangGraph, LlamaIndex,
ChromaDB, OpenAI embeddings, FastAPI, Docker, CI/CD, evidence validation, ATS formatting.

Education:
MS Management Information Systems, University of Illinois at Springfield, 2024.
BTech Electronics & Communication Engineering, ACE Engineering College, Hyderabad, 2020.

Certifications:
Microsoft Azure AZ-900; Generative AI with Gemini API in Vertex AI; AI Fluency Framework &
Foundations from Anthropic; UiPath Robotic Enterprise Framework Overview; UiPath Orchestrator
for RPA Developers.
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
