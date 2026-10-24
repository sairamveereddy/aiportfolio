import http from "node:http";
import { spawn } from "node:child_process";

async function runTests() {
  const server = spawn("node", ["server.mjs"], {
    env: { ...process.env, PORT: "4199" },
    stdio: "inherit"
  });

  await new Promise((resolve) => setTimeout(resolve, 1500));

  const endpoints = [
    "/",
    "/research",
    "/research/the-invisible-singularity",
    "/research/from-detection-to-proficiency",
    "/papers/The_Invisible_Singularity_Veereddy_2026.pdf",
    "/papers/From_Detection_to_Proficiency_Veereddy_2026.pdf",
    "/achievements",
    "/achievements/miro-n8n-hackathon",
    "/projects",
    "/speaking-and-community",
    "/blog",
    "/blog/inside-miro-n8n-hackathon",
    "/blog/nyc-pulse-mistral-elasticsearch",
    "/blog/building-jobninjas-ai-platform",
    "/blog/evaluating-ai-agent-reliability",
    "/blog/building-production-rag-systems",
    "/blog/rag-vs-finetuning-enterprise-ai",
    "/blog/engineering-reliable-n8n-workflows",
    "/blog/benchmarking-ai-agent-performance",
    "/sitemap.xml",
    "/robots.txt",
    "/feed.xml",
    "/styles.css",
    "/knowledge-base.js",
    "/portfolio-client.js",
    "/app-helpers.js",
    "/data/site-data.js",
    "/health"
  ];

  let failed = 0;
  for (const ep of endpoints) {
    try {
      const res = await fetch("http://localhost:4199" + ep);
      if (res.status === 200) {
        console.log(`PASS [${res.status}] (${res.headers.get("content-type")}) -> ${ep}`);
        if (res.headers.get("content-type")?.includes("text/html")) {
          const text = await res.text();
          if (ep.includes("/research/")) {
            if (!text.includes('name="citation_title"')) {
              console.error(`FAIL: Missing citation_title on ${ep}`);
              failed++;
            }
          }
          if (!text.includes("application/ld+json")) {
            console.error(`FAIL: Missing JSON-LD on ${ep}`);
            failed++;
          }
        }
      } else {
        console.error(`FAIL [${res.status}] -> ${ep}`);
        failed++;
      }
    } catch (e) {
      console.error(`ERROR on ${ep}: ${e.message}`);
      failed++;
    }
  }

  server.kill();
  if (failed > 0) {
    console.error(`Total failures: ${failed}`);
    process.exit(1);
  } else {
    console.log(`\nALL ${endpoints.length} ENDPOINTS PASSED VERIFICATION!`);
    process.exit(0);
  }
}

runTests();
