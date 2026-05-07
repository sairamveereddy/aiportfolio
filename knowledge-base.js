window.PORTFOLIO_KB = {
  name: "Sairam Veereddy",
  initials: "SV",
  role: "AI Engineer",
  location: "Alpharetta, Georgia",
  email: "vsairamkumarreddy@gmail.com",
  phone: "(217) 862-4693",
  summary:
    "I am an AI Engineer with 5+ years of experience designing and delivering intelligent data and AI solutions across pharmacy, insurance, finance, and talent technology sectors. I build end-to-end machine learning pipelines, GenAI applications, scalable backend systems, and data products that turn complex requirements into measurable outcomes.",
  personal:
    "Outside engineering, I am a DJ by hobby and a content creator who explains different AI tools to people every day. I enjoy making technical ideas easier to understand and more practical for real users.",
  voice:
    "Answer in first person as Sairam. Be confident, practical, warm, and specific. Keep answers grounded in the resume.",
  experience: [
    {
      id: "cvs",
      company: "CVS Pharmacy",
      location: "Alpharetta, Georgia",
      title: "AI / ML Engineer",
      period: "Feb 2026 - Present",
      summary:
        "I build AI/ML and data engineering systems for pharmacy operations, personalized patient health journeys, pharmacy demand forecasting, medication adherence prediction, and GenAI pharmacy assistance.",
      highlights: [
        "Lead AI/ML models for demand forecasting, adherence prediction, and personalized health recommendations using Python, Scikit-learn, and XGBoost.",
        "Deploy HIPAA-compliant ML pipelines on AWS SageMaker and Databricks across pharmacy transaction, claims, patient, and prescription data.",
        "Build a GenAI pharmacy assistant and customer health copilot using LangChain, LlamaIndex, RAG, OpenAI APIs, AWS Bedrock, and ChromaDB.",
        "Implement monitoring for model output quality, drift detection, data quality, and regulatory compliance."
      ],
      stack: ["Python", "LangChain", "LlamaIndex", "ChromaDB", "OpenAI APIs", "AWS Bedrock", "FastAPI", "Docker", "Kubernetes", "Spark", "Airflow", "Snowflake", "SageMaker"]
    },
    {
      id: "nationwide",
      company: "Nationwide Insurance",
      location: "Columbus, Ohio",
      title: "AI Engineer",
      period: "Mar 2025 - Feb 2026",
      summary:
        "I delivered scalable AI and data pipelines across claims, underwriting, finance, and operations, including fraud detection, near-real-time feeds, and governed analytics marts.",
      highlights: [
        "Built batch and incremental ETL/ELT pipelines using Spark and Python for claims and policy data.",
        "Developed AI-powered fraud detection models with XGBoost and Scikit-learn.",
        "Orchestrated Airflow DAGs with SLAs, retries, and CI/CD-backed environment deployments.",
        "Implemented CDC feeds with GoldenGate, Kafka, and Spark to reduce latency for AI model inputs.",
        "Built observability dashboards for job success, SLA breaches, backlog depth, and data freshness."
      ],
      stack: ["Python", "Spark", "Scala", "Airflow", "Kafka", "GoldenGate", "Snowflake", "BigQuery", "Databricks", "GCP Dataproc", "Azure", "Power BI"]
    },
    {
      id: "gm",
      company: "GM Financial",
      location: "Fort Worth, Texas",
      title: "Data Analyst",
      period: "Jul 2024 - Mar 2025",
      summary:
        "I worked across auto lending and risk analytics, translating stakeholder requirements into Python, SQL, Power BI, REST API, and database solutions.",
      highlights: [
        "Translated business requirements into technical solutions across auto lending and risk domains.",
        "Developed workflow charts, data flow diagrams, and logical process sequences for loan origination and servicing systems.",
        "Designed and maintained applications and databases to improve reporting accuracy."
      ],
      stack: ["Python", "SQL", "Power BI", "MS Visio", "REST APIs", "Git", "Docker", "Agile"]
    },
    {
      id: "tech-mahindra",
      company: "Tech Mahindra",
      location: "India",
      title: "Associate Software Engineer",
      period: "Aug 2020 - Jul 2022",
      summary:
        "I contributed to the Telefonica Germany telecom project, working on data engineering, API development, visualization, and process automation.",
      highlights: [
        "Built and maintained Python, SQL, Power BI, and Visio-based data engineering and visualization workflows.",
        "Developed RESTful APIs and web services for seamless data exchange.",
        "Debugged configuration, logs, and code issues to improve reliability of data pipelines."
      ],
      stack: ["Python", "SQL", "Power BI", "Visio", "Git", "Docker", "REST APIs", "Hansen Catalog"]
    }
  ],
  projects: [
    {
      id: "agentic-rag-research",
      name: "Agentic RAG Research",
      label: "Current Research",
      summary:
        "I am currently researching Agentic RAGs: retrieval systems where agents can plan, call tools, validate evidence, and decide when to retrieve, reason, or ask for clarification.",
      details:
        "This is active research. If someone wants deeper details, they should talk to me directly so I can explain the direction, assumptions, and current thinking.",
      stack: ["Agentic RAG", "Retrieval", "Planning", "Tool Use", "Evidence Validation", "LLM Systems"]
    },
    {
      id: "patent-rag",
      name: "Enterprise Patent & Research Assistant",
      label: "LLM RAG Virtual Assistant",
      summary:
        "I designed an end-to-end RAG pipeline for intelligent patent and research document retrieval at enterprise scale.",
      details:
        "The system used LangChain, LlamaIndex, ChromaDB, Azure OpenAI, AWS Bedrock, hybrid retrieval, re-ranking, Llama 3 fallback through Ollama, citation verification agents, and scalable FastAPI serverless deployment.",
      stack: ["LangChain", "LlamaIndex", "ChromaDB", "Azure OpenAI", "AWS Bedrock", "FastAPI", "Ollama"]
    },
    {
      id: "text-to-sql",
      name: "Text-to-SQL Analytics Copilot",
      label: "Agentic LLM + Guarded SQL",
      summary:
        "I built a conversational analytics copilot that converts natural language questions into guarded SQL for non-technical users.",
      details:
        "The system used LangChain agents, ChromaDB, FastAPI APIs, AWS Lambda, Azure Functions, Power BI integration, guardrails, and an automated evaluation harness for output quality.",
      stack: ["LangChain", "ChromaDB", "FastAPI", "AWS Lambda", "Azure Functions", "Power BI"]
    },
    {
      id: "job-copilot",
      name: "AI Job Application Copilot",
      label: "RAG + Agentic Workflow",
      summary:
        "I built an agentic job application assistant that generates tailored resume bullets, cover letters, and recruiter outreach emails.",
      details:
        "The system used LangChain, LangGraph, LlamaIndex, ChromaDB, OpenAI embeddings, evidence-based validation, ATS-style formatting checks, FastAPI, Docker, and CI/CD.",
      stack: ["LangChain", "LangGraph", "LlamaIndex", "ChromaDB", "OpenAI", "FastAPI", "Docker"]
    }
  ],
  skills: [
    {
      group: "AI / ML",
      items: ["Machine Learning", "Predictive Modeling", "Feature Engineering", "NLP", "Model Fine-tuning", "Scikit-learn", "XGBoost"]
    },
    {
      group: "GenAI & LLMs",
      items: ["LangChain", "LangGraph", "LlamaIndex", "OpenAI APIs", "AWS Bedrock", "Azure OpenAI", "Prompt Engineering", "RAG Pipelines"]
    },
    {
      group: "Vector Databases",
      items: ["ChromaDB", "FAISS", "Pinecone", "Embedding Search", "Semantic Retrieval"]
    },
    {
      group: "Deep Learning",
      items: ["TensorFlow", "Keras", "PyTorch", "Training", "Fine-tuning", "Deployment"]
    },
    {
      group: "Languages & Frameworks",
      items: ["Python", "SQL", "Scala", "PySpark", "FastAPI", "Flask", "REST APIs"]
    },
    {
      group: "Data & Pipelines",
      items: ["Apache Spark", "Airflow", "Kafka", "GoldenGate", "ETL/ELT", "CDC", "Dimensional Modeling"]
    },
    {
      group: "Cloud & MLOps",
      items: ["AWS SageMaker", "AWS Lambda", "GCP Dataproc", "BigQuery", "Azure", "Databricks", "Docker", "Kubernetes", "CI/CD"]
    },
    {
      group: "Databases & Visualization",
      items: ["Snowflake", "BigQuery", "MySQL", "SQL Server", "Oracle DB", "Power BI", "Git", "Postman"]
    }
  ],
  certifications: [
    "Microsoft Azure AZ-900",
    "Generative AI with the Gemini API in Vertex AI",
    "AI Fluency Framework & Foundations - Anthropic",
    "Robotic Enterprise Framework Overview - UiPath",
    "Orchestrator for RPA Developers - UiPath"
  ],
  routing: {
    walkthrough: ["summary", "voice", "experience", "projects", "skills", "contact"],
    genai: "projects",
    rag: "projects",
    langchain: "projects",
    cvs: "cvs",
    pharmacy: "cvs",
    "agentic rag": "agentic-rag-research",
    "agentic rags": "agentic-rag-research",
    research: "agentic-rag-research",
    dj: "beyond-engineering",
    djing: "beyond-engineering",
    hobbies: "beyond-engineering",
    "content creator": "beyond-engineering",
    creator: "beyond-engineering",
    nationwide: "nationwide",
    insurance: "nationwide",
    "gm financial": "gm",
    finance: "gm",
    "tech mahindra": "tech-mahindra",
    telecom: "tech-mahindra",
    skills: "skills",
    education: "education",
    contact: "contact",
    email: "contact",
    phone: "contact"
  }
};
