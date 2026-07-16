window.PORTFOLIO_KB = {
  name: "Sairam Veereddy",
  initials: "SV",
  role: "AI/ML Engineer",
  headline:
    "AI/ML Engineer | Foundation Models & GenAI | Experimentation & Model Evaluation | Rapid Prototyping",
  location: "Alpharetta, Georgia",
  email: "vsairamkumarreddy@gmail.com",
  phone: "(217) 862-4693",
  linkedin: "https://www.linkedin.com/in/sairam-kumar-365232192/",
  website: "sairamveereddy.com",
  github: "https://github.com/sairamveereddy",
  substack: "https://substack.com/@firstninja",
  summary:
    "I am an AI/ML Engineer with 4+ years translating cutting-edge research and emerging AI technologies into prototypes, experiments, and production systems. I design quantitative evaluations for foundation models, GenAI systems, and multimodal experiences, then validate whether those technologies deserve broader investment.",
  voice:
    "Answer in first person as Sairam. Be confident, concise, practical, and specific. Ground every answer in the Microsoft AI Engineer resume.",
  experience: [
    {
      id: "cvs",
      company: "CVS Pharmacy",
      location: "Alpharetta, GA",
      title: "AI/ML Engineer",
      period: "Feb 2026 - Present",
      summary:
        "I design and evaluate GenAI and ML systems for pharmacy workflows, clinical data extraction, model governance, and rapid validation of emerging healthcare AI use cases.",
      highlights: [
        "Designed and evaluated a GenAI pharmacy assistant integrating OpenAI GPT-4 and AWS Bedrock with structured clinical data through LangChain, LlamaIndex, and RAG pipelines.",
        "Built evaluation benchmarks and testing datasets for fine-tuning transformer models on drug entity recognition and medication review extraction, measuring a 28% gain in extraction accuracy.",
        "Architected SageMaker MLOps monitoring to detect drift, enforce data quality SLAs, and assess model bias for responsible AI governance.",
        "Deployed HIPAA-compliant ML pipelines with Docker and Kubernetes while using GitHub Copilot and Cursor for rapid experimentation utilities."
      ],
      stack: [
        "Python",
        "LangChain",
        "LlamaIndex",
        "ChromaDB",
        "OpenAI APIs",
        "AWS Bedrock",
        "FastAPI",
        "Docker",
        "Kubernetes",
        "AWS SageMaker",
        "TensorFlow",
        "PyTorch",
        "MLflow"
      ]
    },
    {
      id: "nationwide",
      company: "Nationwide Insurance",
      location: "Columbus, OH",
      title: "AI/ML Engineer",
      period: "Mar 2025 - Feb 2026",
      summary:
        "I built fraud detection, experimentation, and governed AI data products across GCP, Azure, Snowflake, BigQuery, and Databricks.",
      highlights: [
        "Designed and validated AI-powered fraud detection models with XGBoost and Scikit-learn, achieving 92% precision on flagged claims.",
        "Built an Airflow experimentation platform for multi-step ML workflows, quantitative evaluation pipelines, and SLA enforcement.",
        "Implemented Kafka-to-Spark CDC feeds that reduced data latency from batch-daily to sub-5-minute refresh for model monitoring.",
        "Created governed Snowflake and BigQuery AI data products with dashboards tracking model behavior across business contexts."
      ],
      stack: [
        "Python",
        "Spark",
        "Airflow",
        "Kafka",
        "Snowflake",
        "BigQuery",
        "Databricks",
        "GCP",
        "Azure",
        "Docker",
        "Kubernetes",
        "CI/CD",
        "Power BI",
        "Scikit-learn",
        "XGBoost"
      ]
    },
    {
      id: "gm",
      company: "GM Financial",
      location: "Fort Worth, TX",
      title: "AI/ML Data Engineer",
      period: "Jul 2024 - Mar 2025",
      summary:
        "I delivered AI-augmented analytics and data engineering work for financial datasets, risk workflows, and stakeholder reporting.",
      highlights: [
        "Built Power BI dashboards that translated complex financial datasets into business intelligence for 5+ cross-functional teams.",
        "Developed Python and SQL ETL pipelines that automated ingestion and transformation, reducing manual processing effort by 40%.",
        "Created MS Visio system designs for AI-augmented workflows to accelerate design review and stakeholder sign-off.",
        "Delivered three production data features per sprint using Docker, Git, and CI/CD."
      ],
      stack: ["Python", "SQL", "Power BI", "MS Visio", "REST APIs", "Git", "Docker", "Agile/SDLC"]
    },
    {
      id: "tech-mahindra",
      company: "Tech Mahindra",
      location: "Hyderabad, India",
      title: "Associate Software Engineer",
      period: "Aug 2020 - Jul 2022",
      summary:
        "I built data processing services, validation automation, and telecom workflow integrations for enterprise-scale operations.",
      highlights: [
        "Developed full-stack data processing microservices supporting 1M+ daily telecom transactions with Python, SQL, and Hansen Catalog.",
        "Designed containerized services with Docker and Git across cross-functional Agile teams.",
        "Automated data pipeline validation and reporting, reducing QA effort by 25% and improving data quality scores."
      ],
      stack: ["Python", "SQL", "Power BI", "Git", "Docker", "REST APIs", "Agile/SDLC"]
    }
  ],
  projects: [
    {
      id: "jobninjas",
      name: "JobNinjas.ai",
      label: "Full-Stack AI Platform",
      summary:
        "I designed and shipped a full-stack AI platform solo, connecting AWS infrastructure, FastAPI, LangChain RAG, workflow automation, and voice AI.",
      details:
        "The platform uses AWS Cognito, RDS, S3, SES, a FastAPI backend, a LangChain-powered RAG agent, 8 n8n automation workflows, Vapi voice AI, Faster-Whisper, Coqui/StyleTTS2, and WebRTC.",
      stack: ["AWS", "FastAPI", "LangChain", "RAG", "n8n", "Vapi", "WebRTC", "Faster-Whisper"]
    },
    {
      id: "ai-talking-portfolio",
      name: "AI Talking Portfolio",
      label: "Realtime Conversational Portfolio",
      summary:
        "I built a conversational AI portfolio where visitors can interact with an LLM agent in real time.",
      details:
        "The system combines a RAG pipeline, ChromaDB, a FastAPI backend, OpenAI GPT-4, semantic search over structured data, and a React front end with streaming.",
      stack: ["OpenAI GPT-4", "RAG", "ChromaDB", "FastAPI", "React", "Semantic Search", "Streaming"]
    },
    {
      id: "pharmacy-genai-copilot",
      name: "Pharmacy GenAI Copilot",
      label: "Clinical RAG Assistant",
      summary:
        "I built a RAG-based clinical assistant integrating OpenAI and AWS Bedrock for pharmacy workflows.",
      details:
        "The copilot is deployed on SageMaker with evaluation frameworks and HIPAA-compliant data handling for responsible clinical use cases.",
      stack: ["OpenAI", "AWS Bedrock", "RAG", "SageMaker", "Evaluation", "HIPAA"]
    },
    {
      id: "insurance-fraud",
      name: "Insurance Fraud Detection System",
      label: "XGBoost + Realtime Feeds",
      summary:
        "I delivered an end-to-end fraud detection pipeline with evaluation, orchestration, and near-real-time data feeds.",
      details:
        "The system used XGBoost, Scikit-learn, Airflow, real-time Kafka feeds, A/B testing, and achieved 92% fraud detection precision on flagged claims.",
      stack: ["XGBoost", "Scikit-learn", "Airflow", "Kafka", "A/B Testing", "Model Evaluation"]
    },
    {
      id: "open-source",
      name: "Open Source & Side Projects",
      label: "27+ Public Repositories",
      summary:
        "I maintain a shipping habit across AI automation tools, full-stack applications, and data engineering experiments.",
      details:
        "The projects on github.com/sairamveereddy show consistent iteration across practical AI tooling, application development, and data systems.",
      stack: ["AI Automation", "Full-Stack Apps", "Data Engineering", "Prototyping", "GitHub"]
    }
  ],
  skills: [
    {
      group: "Foundation Models & Generative AI",
      items: ["OpenAI GPT-4", "Anthropic Claude", "AWS Bedrock", "Azure OpenAI", "Google Gemini", "Vertex AI", "Hugging Face", "Multimodal Models"]
    },
    {
      group: "Agentic & Multi-Agent Systems",
      items: ["LangGraph", "AutoGen", "Multi-step Orchestration", "Agent Workflows", "Tool-use Design", "Function Calling"]
    },
    {
      group: "Model Evaluation & Experimentation",
      items: ["Evaluation Frameworks", "Benchmarks", "A/B Testing", "Metrics Design", "Bias Assessment", "Drift Detection", "Fine-tuning Validation"]
    },
    {
      group: "Rapid Prototyping & Research Translation",
      items: ["Research Paper Implementation", "POC Development", "Iterative Experimentation", "GitHub Copilot", "Cursor", "LangChain", "LlamaIndex", "ChromaDB"]
    },
    {
      group: "MLOps & Model Lifecycle",
      items: ["MLflow", "AWS SageMaker", "Model Monitoring", "DVC", "CI/CD for ML", "Reproducible Experimentation"]
    },
    {
      group: "Programming, APIs & Data",
      items: ["Python", "SQL", "FastAPI", "REST APIs", "Git", "Docker", "Kubernetes", "OOP", "Agile", "Spark", "Kafka", "Airflow"]
    },
    {
      group: "ML Libraries & Cloud",
      items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Pandas", "NumPy", "AWS", "GCP", "Azure", "Snowflake", "Databricks", "Power BI"]
    },
    {
      group: "Vector Databases & RAG",
      items: ["ChromaDB", "FAISS", "Pinecone", "Retrieval-Augmented Generation", "Semantic Search"]
    }
  ],
  certifications: [
    "Claude Certified Architect (Anthropic) - Agentic architecture, tool design, prompt engineering, structured output, context management",
    "Anthropic Specialty - in progress / target 2026",
    "Google Professional Machine Learning Engineer - in progress / target 2026",
    "LangChain & LangGraph Agentic AI Development - hands-on production deployments",
    "HIPAA Compliance for Healthcare Data Engineering - applied in production"
  ],
  education: [
    "MS, Management Information Systems - University of Illinois at Springfield, 2024",
    "BTech, Electronics & Communication Engineering - ACE Engineering College, Hyderabad, 2020"
  ],
  publications: [
    {
      id: "research-paper-1",
      title: "Research Paper 1",
      label: "Zenodo Record",
      url: "https://zenodo.org/records/21348229",
      summary: "Research publication hosted on Zenodo."
    },
    {
      id: "research-paper-2",
      title: "Research Paper 2",
      label: "Zenodo Record",
      url: "https://zenodo.org/records/21367111",
      summary: "Research publication hosted on Zenodo."
    }
  ],
  externalLinks: [
    {
      id: "github-profile",
      label: "GitHub",
      title: "sairamveereddy",
      url: "https://github.com/sairamveereddy",
      summary: "Public repositories spanning AI automation, full-stack applications, and data engineering experiments."
    },
    {
      id: "linkedin-profile",
      label: "LinkedIn",
      title: "Sairam Kumar",
      url: "https://www.linkedin.com/in/sairam-kumar-365232192/",
      summary: "Professional profile, experience, and networking link."
    },
    {
      id: "substack-profile",
      label: "Substack",
      title: "First Ninja",
      url: "https://substack.com/@firstninja",
      summary: "Writing and AI content hub."
    }
  ],
  routing: {
    walkthrough: ["summary", "voice", "experience", "projects", "publications", "skills", "contact"],
    genai: "projects",
    "foundation models": "skills",
    evaluation: "skills",
    experimentation: "skills",
    rag: "projects",
    langchain: "projects",
    claude: "education",
    anthropic: "education",
    badge: "top",
    cvs: "cvs",
    pharmacy: "cvs",
    nationwide: "nationwide",
    insurance: "nationwide",
    fraud: "insurance-fraud",
    "gm financial": "gm",
    finance: "gm",
    "tech mahindra": "tech-mahindra",
    telecom: "tech-mahindra",
    jobninjas: "jobninjas",
    "talking portfolio": "ai-talking-portfolio",
    github: "publications",
    linkedin: "publications",
    substack: "publications",
    "research paper": "publications",
    "research paper 1": "research-paper-1",
    "research paper 2": "research-paper-2",
    zenodo: "publications",
    skills: "skills",
    education: "education",
    certifications: "education",
    contact: "contact",
    email: "contact",
    phone: "contact"
  }
};
