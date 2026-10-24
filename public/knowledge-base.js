window.PORTFOLIO_KB = {
  name: "Sairam Kumar Reddy Veereddy",
  shortName: "Sairam Veereddy",
  initials: "SV",
  role: "AI/ML Engineer | Applied AI Researcher | Hackathon Winner | AI Educator",
  headline:
    "AI/ML Engineer | Applied AI Researcher | Hackathon Winner (Miro × n8n) | AI Educator (16.9k+ Community)",
  location: "Alpharetta, Georgia",
  email: "vsairamkumarreddy@gmail.com",
  phone: "(217) 862-4693",
  linkedin: "https://www.linkedin.com/in/sairam-kumar-365232192/",
  website: "https://sairamveereddy.com",
  github: "https://github.com/sairamveereddy",
  medium: "https://medium.com/@vsairamkumarreddy",
  instagram: "https://www.instagram.com/first.ninja_/",
  summary:
    "I am an AI/ML Engineer with 4+ years translating cutting-edge research, foundation models, and emerging AI tools into robust production systems. I design quantitative evaluations, build multi-agent and RAG workflows, publish independent AI research on Zenodo, won the Miro × n8n hackathon with team Strangers, and educate a community of 16,900+ engineers on Instagram and Medium.",
  voice:
    "Answer in first person as Sairam. Be confident, concise, practical, and specific. Ground every answer in Sairam's verified engineering experience, research publications, hackathon wins, and community education.",
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
      id: "nyc-pulse",
      name: "NYC PULSE — Evidence-Driven Urban Intelligence Agent",
      label: "NYC Mistral × Elastic Hackathon Prototype",
      summary:
        "Evidence-driven urban disruption intelligence prototype built at the NYC Mistral × Elastic Hackathon (October 2026).",
      details:
        "Investigates second- and third-order effects of city disruptions by replacing naive LLM guessing with an autonomous Evidence Loop. Documented implementation details: integrates 1,488 NYC subway-stop records, 20,000 NYC 311 service request records, and 2,000 semantically indexed 311 records using Mistral Large, Elasticsearch geospatial/semantic retrieval, Python, and Streamlit.",
      stack: ["Mistral AI", "Elasticsearch", "Python", "Streamlit", "Geospatial Search", "Vector Embeddings", "AI Agent Tool Calling"]
    },
    {
      id: "crosswise",
      name: "CrossWise — AI Curb Crossing Copilot for Food Delivery Robots",
      label: "NYC VAST Builders Challenge Prototype",
      summary:
        "Vision-language AI crossing copilot designed to prevent delivery robot stall and pedestrian collisions at urban intersections.",
      details:
        "Built for the VAST Builders Challenge (team-48) in NYC (October 2026). Evaluated on recorded multi-camera curb footage in NYC and SF with a multi-model pipeline: NVIDIA Cosmos Reason + YOLO11 pedestrian tracking + Llama 3.3 70B + Gemma 4 31B vision on VastDB/CoreWeave GPUs. Achieved 0 illegal starts against DON'T WALK signals in frame-level policy replay.",
      stack: ["VAST DataEngine", "VastDB", "NVIDIA Cosmos Reason", "YOLO11", "Llama 3.3 70B", "Gemma 4 31B", "W&B Weave", "CoreWeave"]
    },
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
        "I built a conversational AI portfolio where visitors interact with an LLM agent in real time via WebRTC.",
      details:
        "The system combines OpenAI Realtime API, browser WebRTC audio streaming, dynamic DOM manipulation via function calling, and factual resume grounding.",
      stack: ["OpenAI Realtime API", "WebRTC", "Node.js", "FastAPI", "Streaming", "Tool Calling"]
    },
    {
      id: "miro-n8n-hackathon-proj",
      name: "Miro × n8n Autonomous Bridge",
      label: "Hackathon Winning Solution",
      summary:
        "First-place winning project from Miro × n8n Hackathon built with team 'Strangers'.",
      details:
        "Bi-directional pipeline translating visual whiteboard logic on Miro into active n8n agentic workflows and posting structured outputs back to the live canvas in real time.",
      stack: ["n8n", "Miro REST API", "Webhooks", "AI Agents", "Function Calling", "JavaScript"]
    },
    {
      id: "pharmacy-genai-copilot",
      name: "Pharmacy GenAI Copilot",
      label: "Clinical RAG Assistant",
      summary:
        "I built a RAG-based clinical assistant integrating OpenAI and AWS Bedrock for pharmacy workflows.",
      details:
        "The copilot is deployed on SageMaker with evaluation frameworks and HIPAA-compliant data handling for responsible clinical use cases, measuring 28% extraction accuracy gains.",
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
      name: "Open Source Ecosystem",
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
    "Microsoft Azure AZ-900 - Microsoft Azure",
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
      slug: "the-invisible-singularity",
      title: "The Invisible Singularity: Artificial Intelligence as Convergent Infrastructure and the Reorganization of Global Work, 2027–2035",
      label: "Zenodo DOI: 10.5281/zenodo.21348229",
      url: "/research/the-invisible-singularity",
      zenodoUrl: "https://zenodo.org/doi/10.5281/zenodo.21348229",
      pdfUrl: "/papers/The_Invisible_Singularity_Veereddy_2026.pdf",
      summary: "Three-phase model of AI capability acceleration and infrastructural convergence, proposing that AI will recede into ubiquitous invisibility while task reinstatement drives net labor growth."
    },
    {
      id: "research-paper-2",
      slug: "from-detection-to-proficiency",
      title: "From Detection to Proficiency: The Coming Inversion of Academic AI Policy and a Framework for Assessing Student AI Utilization in Higher Education (2026–2035)",
      label: "Zenodo DOI: 10.5281/zenodo.21367111",
      url: "/research/from-detection-to-proficiency",
      zenodoUrl: "https://zenodo.org/doi/10.5281/zenodo.21367111",
      pdfUrl: "/papers/From_Detection_to_Proficiency_Veereddy_2026.pdf",
      summary: "Proposes AI Utilization Proficiency (AUP) and Baseline Differential Analysis (BDA) to invert university AI policies from unworkable detection to rigorous literacy assessment."
    }
  ],
  externalLinks: [
    {
      id: "github-profile",
      label: "GitHub",
      title: "sairamveereddy",
      url: "https://github.com/sairamveereddy",
      summary: "27+ public repositories spanning AI automation, agent architectures, full-stack applications, and data systems."
    },
    {
      id: "linkedin-profile",
      label: "LinkedIn",
      title: "Sairam Kumar Reddy Veereddy",
      url: "https://www.linkedin.com/in/sairam-kumar-365232192/",
      summary: "Professional background, verified career progression, and technical network."
    },
    {
      id: "instagram-profile",
      label: "Instagram AI Hub",
      title: "@first.ninja_ (16.9k+ followers)",
      url: "https://www.instagram.com/first.ninja_/",
      summary: "Daily AI engineering tutorials, open-source model reviews, and automation architecture walkthroughs."
    },
    {
      id: "medium-profile",
      label: "Medium",
      title: "Sairam Kumar Reddy Veereddy (@vsairamkumarreddy)",
      url: "https://medium.com/@vsairamkumarreddy",
      summary: "Technical articles on agentic AI, production RAG, mobile AI decompilation, and open-source models."
    }
  ],
  routing: {
    walkthrough: ["summary", "voice", "research-engineering", "experience", "projects", "publications", "skills", "contact"],
    research: "research",
    "research papers": "research",
    "paper 1": "research-paper-1",
    "invisible singularity": "research-paper-1",
    "paper 2": "research-paper-2",
    "detection to proficiency": "research-paper-2",
    zenodo: "research",
    hackathon: "achievements",
    achievements: "achievements",
    "miro hackathon": "miro-n8n-hackathon",
    "n8n hackathon": "miro-n8n-hackathon",
    strangers: "miro-n8n-hackathon",
    "nyc pulse": "nyc-pulse",
    pulse: "nyc-pulse",
    mistral: "nyc-pulse",
    elasticsearch: "nyc-pulse",
    crosswise: "crosswise",
    robot: "crosswise",
    "food delivery": "crosswise",
    "delivery robot": "crosswise",
    jobninjas: "jobninjas",
    "talking portfolio": "ai-talking-portfolio",
    blog: "blog",
    articles: "blog",
    writing: "blog",
    medium: "speaking-and-community",
    "medium articles": "blog",
    instagram: "speaking-and-community",
    community: "speaking-and-community",
    followers: "speaking-and-community",
    speaking: "speaking-and-community",
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
    github: "publications",
    linkedin: "publications",
    skills: "skills",
    education: "education",
    certifications: "education",
    contact: "contact",
    email: "contact",
    phone: "contact"
  }
};
