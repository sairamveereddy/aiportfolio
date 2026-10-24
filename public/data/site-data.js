// Centralized Configuration and Data Store for sairamveereddy.com
// Easily update research papers, projects, blog posts, achievements, and community metrics without touching UI code.

const SITE_DATA = {
  profile: {
    name: "Sairam Kumar Reddy Veereddy",
    shortName: "Sairam Veereddy",
    initials: "SV",
    role: "AI/ML Engineer | Applied AI Researcher | Hackathon Winner | AI Educator",
    primaryRole: "AI / ML Engineer",
    location: "Alpharetta, Georgia, USA",
    email: "vsairamkumarreddy@gmail.com",
    phone: "(217) 862-4693",
    website: "https://sairamveereddy.com",
    linkedin: "https://www.linkedin.com/in/sairam-kumar-365232192/",
    github: "https://github.com/sairamveereddy",
    medium: "https://medium.com/@vsairamkumarreddy",
    mediumHandle: "@vsairamkumarreddy",
    instagram: "https://www.instagram.com/first.ninja_/",
    instagramHandle: "@first.ninja_",
    instagramFollowers: "16,900+",
    instagramDate: "October 2026",
    claudeCertified: "Claude Certified Architect",
    bio: "AI/ML Engineer with 4+ years translating foundation models, cutting-edge AI research, and multimodal architectures into robust, production systems across healthcare, insurance, finance, and enterprise automation. Hackathon winner (Miro × n8n), NYC AI builder (Mistral × Elastic, VAST Builders Challenge), independent researcher with citable publications on Zenodo, and technical publisher on Medium and Instagram educating 16,900+ engineers.",
    summary: "Translating emerging AI research into tested production systems. Specializing in Agentic AI, RAG architectures, model evaluation benchmarks, NYC hackathon prototypes, and technical education on Medium and Instagram."
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Achievements", href: "/achievements" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "Community", href: "/speaking-and-community" },
    { label: "Experience", href: "/#experience" },
    { label: "Contact", href: "/#contact" }
  ],

  // Real, live Medium articles from @vsairamkumarreddy RSS feed
  mediumArticles: [
    {
      title: "How to Customize Android Games and Apps Using AI + Apktool (Free GitHub Tool)",
      url: "https://medium.com/@vsairamkumarreddy/how-to-customize-android-games-and-apps-using-ai-apktool-free-github-tool-74ee4b5d230c",
      date: "Oct 23, 2026",
      readTime: "5 min read",
      category: "Developer Tools"
    },
    {
      title: "10 AI Tools You Should Know in 2026",
      url: "https://medium.com/@vsairamkumarreddy/10-ai-tools-you-should-know-in-2026-c3e3e1e04e7b",
      date: "Oct 23, 2026",
      readTime: "6 min read",
      category: "AI Tools"
    },
    {
      title: "How to Find Viral Instagram Content Ideas Using Muse AI — With Just One Prompt",
      url: "https://medium.com/@vsairamkumarreddy/how-to-find-viral-instagram-content-ideas-using-muse-ai-with-just-one-prompt-66cd89167fa7",
      date: "Oct 19, 2026",
      readTime: "4 min read",
      category: "Prompt Engineering"
    },
    {
      title: "Edit Videos Using Claude AI + Remotion: A Beginner's Guide",
      url: "https://medium.com/@vsairamkumarreddy/edit-videos-using-claude-ai-remotion-a-beginners-guide-287f17605adc",
      date: "Oct 17, 2026",
      readTime: "7 min read",
      category: "Generative Media"
    },
    {
      title: "Build Interactive Website Animations with Claude AI + Rive MCP",
      url: "https://medium.com/@vsairamkumarreddy/build-interactive-website-animations-with-claude-ai-rive-mcp-18287f2a99ca",
      date: "Oct 15, 2026",
      readTime: "6 min read",
      category: "MCP Protocols"
    },
    {
      title: "10 Startup Programs Every AI Founder Should Know in 2026",
      url: "https://medium.com/@vsairamkumarreddy/10-startup-programs-every-ai-founder-should-know-in-2026-9b51fb9c76a6",
      date: "Oct 8, 2026",
      readTime: "8 min read",
      category: "Startup Strategy"
    },
    {
      title: "8 Free Open-Source GitHub Repos That Can Replace Your Paid Subscriptions",
      url: "https://medium.com/@vsairamkumarreddy/8-free-open-source-github-repos-that-can-replace-your-paid-subscriptions-1802274105b4",
      date: "Oct 3, 2026",
      readTime: "6 min read",
      category: "Open Source"
    },
    {
      title: "Stop Paying for Software: 5 Free Open-Source Alternatives You Should Know",
      url: "https://medium.com/@vsairamkumarreddy/stop-paying-for-software-5-free-open-source-alternatives-you-should-know-791b4d94a8b7",
      date: "Sep 27, 2026",
      readTime: "5 min read",
      category: "Open Source"
    },
    {
      title: "Stop Just Watching Courses: The Engineering Learning Stack You Actually Need",
      url: "https://medium.com/@vsairamkumarreddy/stop-just-watching-courses-the-engineering-learning-stack-you-actually-need-3b9825e44d3f",
      date: "Sep 26, 2026",
      readTime: "7 min read",
      category: "Career Engineering"
    },
    {
      title: "10 Free AI & Machine Learning Courses & Credentials from Google, Microsoft, Harvard & IBM",
      url: "https://medium.com/@vsairamkumarreddy/10-free-ai-machine-learning-courses-credentials-from-google-microsoft-harvard-ibm-b9fb0cc184b3",
      date: "Sep 25, 2026",
      readTime: "8 min read",
      category: "Credentials & Education"
    }
  ],

  research: [
    {
      id: "the-invisible-singularity",
      slug: "the-invisible-singularity",
      title: "The Invisible Singularity: Artificial Intelligence as Convergent Infrastructure and the Reorganization of Global Work, 2027–2035",
      shortTitle: "The Invisible Singularity",
      author: "Sairam Kumar Reddy Veereddy",
      authors: ["Sairam Kumar Reddy Veereddy"],
      publicationDate: "2026-07-14",
      publicationYear: "2026",
      doi: "10.5281/zenodo.21348229",
      zenodoUrl: "https://zenodo.org/doi/10.5281/zenodo.21348229",
      pdfUrl: "/papers/The_Invisible_Singularity_Veereddy_2026.pdf",
      githubUrl: "https://github.com/sairamveereddy/invisible-singularity-paper",
      publisher: "Zenodo",
      license: "Creative Commons Attribution 4.0 International (CC BY 4.0)",
      status: "Preprint / Working Paper",
      statusDetail: "Permanent Open-Access Research Archive on Zenodo (CERN)",
      isPreprint: true,
      keywords: [
        "artificial intelligence",
        "general purpose technology",
        "technological singularity",
        "future of work",
        "foundation models",
        "labor economics",
        "infrastructural convergence",
        "superintelligence",
        "AI adoption"
      ],
      abstract: "The contemporary artificial intelligence landscape is characterized by an extraordinary cadence of model releases — successive frontier systems appearing at intervals of weeks rather than years. This paper argues that this proliferation is not the terminal state of the technology but a transitional phase, and that the observable trajectory points toward a structural convergence: a small number of highly capable, general-purpose AI systems that recede into the infrastructural background of economic life, invoked as unremarkably as search engines or enterprise resource platforms are invoked today. Drawing on the economics of general purpose technologies (Bresnahan & Trajtenberg, 1995), the theory of ubiquitous computing (Weiser, 1991), and the historical dynamics of technological revolutions (Perez, 2002; David, 1990), I develop a three-phase model — Proliferation, Acceleration, and Invisibility — and advance two central hypotheses. First, the Acceleration Hypothesis: beginning approximately in 2027, the rate of capability diffusion will compress such that materially novel tools and applications emerge on a near-daily cadence, rendering pre-2024 workflows structurally obsolete across most knowledge-intensive sectors. Second, the Reinstatement Hypothesis: contrary to popular displacement narratives, the task-creation channel identified by Acemoglu and Restrepo (2019) will dominate, producing net employment growth concentrated in newly instantiated occupational categories, consistent with the World Economic Forum's (2025) projection of 170 million jobs created against 92 million displaced by 2030. The paper's contribution is a unified framework that explains why the most transformative outcome of the current AI race is not a visible superintelligence but an invisible one — a utility so deeply embedded that, like electricity, its presence is noticed only in its absence. Limitations, falsifiable predictions, and counterarguments are addressed.",
      bibtex: `@misc{veereddy2026invisible,
  doi = {10.5281/ZENODO.21348229},
  url = {https://zenodo.org/doi/10.5281/zenodo.21348229},
  author = {Veereddy, Sairam Kumar Reddy},
  keywords = {artificial intelligence, general purpose technology, technological singularity, future of work, foundation models, labor economics, infrastructural convergence, superintelligence, AI adoption},
  language = {en},
  title = {The Invisible Singularity: Artificial Intelligence as Convergent Infrastructure and the Reorganization of Global Work, 2027–2035},
  publisher = {Zenodo},
  year = {2026},
  month = {July},
  copyright = {Creative Commons Attribution 4.0 International}
}`,
      apaCitation: "Veereddy, S. K. R. (2026). The Invisible Singularity: Artificial Intelligence as Convergent Infrastructure and the Reorganization of Global Work, 2027–2035. Zenodo. https://doi.org/10.5281/zenodo.21348229",
      ieeeCitation: "S. K. R. Veereddy, \"The Invisible Singularity: Artificial Intelligence as Convergent Infrastructure and the Reorganization of Global Work, 2027–2035,\" Zenodo, Jul. 2026. doi: 10.5281/zenodo.21348229."
    },
    {
      id: "from-detection-to-proficiency",
      slug: "from-detection-to-proficiency",
      title: "From Detection to Proficiency: The Coming Inversion of Academic AI Policy and a Framework for Assessing Student AI Utilization in Higher Education (2026–2035)",
      shortTitle: "From Detection to Proficiency",
      author: "Sairam Kumar Reddy Veereddy",
      authors: ["Sairam Kumar Reddy Veereddy"],
      publicationDate: "2026-07-15",
      publicationYear: "2026",
      doi: "10.5281/zenodo.21367111",
      zenodoUrl: "https://zenodo.org/doi/10.5281/zenodo.21367111",
      pdfUrl: "/papers/From_Detection_to_Proficiency_Veereddy_2026.pdf",
      githubUrl: "https://github.com/sairamveereddy/ai-utilization-proficiency",
      publisher: "Zenodo",
      license: "Creative Commons Attribution 4.0 International (CC BY 4.0)",
      status: "Preprint / Working Paper",
      statusDetail: "Permanent Open-Access Research Archive on Zenodo (CERN)",
      isPreprint: true,
      keywords: [
        "AI in education",
        "educational assessment",
        "AI literacy",
        "higher education",
        "prompt engineering",
        "academic integrity",
        "assessment reform",
        "generative artificial intelligence"
      ],
      abstract: "Higher education's dominant institutional response to generative artificial intelligence has been detection: identifying and penalizing student use of large language models in assessed work. This paper argues that the detection paradigm is structurally unsustainable and will invert within a decade. Drawing on assessment theory, distributed cognition, and empirical evidence on AI-augmented knowledge work, the paper develops the case that by the early 2030s the central assessment question will shift from \"did the student use AI?\" to \"how well did the student use AI?\" It proposes AI Utilization Proficiency (AUP) as an assessable construct comprising six dimensions—task decomposition, prompt construction, iterative refinement, critical verification, synthesis and attribution, and tool orchestration—and introduces Baseline Differential Analysis (BDA), an estimation method that infers utilization quality from submitted artifacts alone by comparing them against machine-generated minimal-effort baselines from the model the student reports using. Using scenario analysis across a 2026–2035 horizon, the paper traces three phases of transition: prohibition erosion, hybrid accommodation, and proficiency-centered assessment. It closes with implications for instructors, institutions, accreditors, and tool builders, and with the ethical constraints any utilization-scoring system must respect.",
      bibtex: `@misc{veereddy2026detection,
  doi = {10.5281/ZENODO.21367111},
  url = {https://zenodo.org/doi/10.5281/zenodo.21367111},
  author = {Veereddy, Sairam Kumar Reddy},
  keywords = {AI in education, educational assessment, AI literacy, higher education, prompt engineering, academic integrity, assessment reform, generative artificial intelligence},
  language = {en},
  title = {From Detection to Proficiency: The Coming Inversion of Academic AI Policy and a Framework for Assessing Student AI Utilization in Higher Education (2026–2035)},
  publisher = {Zenodo},
  year = {2026},
  month = {July},
  copyright = {Creative Commons Attribution 4.0 International}
}`,
      apaCitation: "Veereddy, S. K. R. (2026). From Detection to Proficiency: The Coming Inversion of Academic AI Policy and a Framework for Assessing Student AI Utilization in Higher Education (2026–2035). Zenodo. https://doi.org/10.5281/zenodo.21367111",
      ieeeCitation: "S. K. R. Veereddy, \"From Detection to Proficiency: The Coming Inversion of Academic AI Policy and a Framework for Assessing Student AI Utilization in Higher Education (2026–2035),\" Zenodo, Jul. 2026. doi: 10.5281/zenodo.21367111."
    }
  ],

  achievements: [
    {
      id: "miro-n8n-hackathon",
      slug: "miro-n8n-hackathon",
      title: "Winning Team — Miro × n8n Hackathon",
      eventName: "Miro × n8n Hackathon: From Diagram to Automation",
      organizers: ["Miro", "n8n"],
      awardCategory: "Winning Team (1st Place / Hackathon Winner)",
      awardStatus: "Verified Event & Team Winner",
      teamName: "Strangers",
      date: "2026",
      location: "San Francisco / Hybrid In-Person Build Event",
      summary: "First-place winning solution connecting collaborative visual canvas logic in Miro with autonomous execution in n8n, enabling bi-directional real-time AI automation loops.",
      problemStatement: "Organizations frequently map complex operational workflows on visual whiteboard canvases (like Miro), yet these diagrams remain static artifacts isolated from actual execution engines. Stalled projects, under-resourced business logic, and manual coordination between teams create immense operational friction.",
      technicalSolution: "Built a bi-directional event-driven bridge between Miro's canvas elements and an n8n multi-agent automation cluster. Board interactions trigger webhooks into n8n workflows that orchestrate LLM reasoning, execute external API tools, synthesize insights, and programmatically generate linked sticky notes, status nodes, and visual connectors directly on the active Miro board in real time.",
      personalContributions: [
        "Architected the n8n multi-agent workflow nodes and webhook payload normalization layer.",
        "Built custom HTTP integration bridges targeting Miro REST APIs to create, layout, and link canvas elements dynamically.",
        "Engineered the LLM prompt chaining and function calling routines for real-time categorizations and insight generation.",
        "Delivered technical implementation and co-presented the winning 2.5-minute live demonstration to the Miro and n8n judging panel."
      ],
      judgingCriteria: [
        "Diagram-to-Execution Fidelity: Seamless translation from Miro visual logic to runnable n8n workflows.",
        "Real-Time Bi-Directionality: Automated feedback loop writing structured AI outputs directly back onto the board.",
        "Technical Architecture & Extensibility: Fault-tolerant webhook routing, clean API error handling, and latency optimization.",
        "Live Demo Performance: Flawless execution within the strict 2.5-minute live judging window."
      ],
      architectureSteps: [
        { step: "01", name: "Visual Trigger", desc: "Collaborators update sticky notes, diagrams, or trigger tags on the Miro canvas." },
        { step: "02", name: "n8n Ingestion", desc: "Miro webhooks deliver change events to an n8n webhook listener with token authentication." },
        { step: "03", name: "Agentic Reasoning", desc: "An n8n AI agent decomposes the task, evaluates context with LLM function calling, and coordinates sub-tasks." },
        { step: "04", name: "Miro Canvas Write-Back", desc: "Automated REST API calls construct formatted sticky notes, connection lines, and status badges on the board." }
      ],
      verification: {
        eventVerified: true,
        teamVerified: true,
        announcementLink: "https://n8n.io",
        eventLink: "https://miro.com",
        githubRepo: "https://github.com/sairamveereddy",
        draftFields: [
          { label: "Exact Award Prize / Bounty Amount", status: "Requires author verification" },
          { label: "Co-Teammate Profiles & Roster", status: "Requires author verification" },
          { label: "Official Demo Video / Presentation Recording", status: "Requires author verification" }
        ]
      }
    }
  ],

  projects: [
    {
      id: "nyc-pulse",
      slug: "nyc-pulse",
      name: "NYC PULSE — Evidence-Driven Urban Intelligence Agent",
      category: "Hackathon Projects",
      subCategory: "AI Urban Intelligence & Search",
      tagline: "Evidence-driven urban disruption intelligence prototype built at NYC Mistral × Elastic hackathon.",
      summary: "Built an AI-powered urban intelligence prototype at a NYC Mistral × Elastic hackathon to investigate second- and third-order ripple effects of city disruptions using an autonomous two-phase Evidence Loop.",
      problem: "When urban incidents happen (such as an L train outage at Bedford Ave during rush hour), conventional systems either output raw alert texts or use standard single-shot RAG that hallucinate ripple effects without evidentiary proof.",
      architecture: "Mistral Large reasoning agent coordinates with an Elasticsearch cluster storing millions of NYC 311 historical records and static GTFS subway schedules. The agent formulates impact hypotheses, calls geo-distance and aggregation tools, and conducts differential evidence verification.",
      evidenceLoop: "Event Trigger → Mistral Investigates → Elastic Retrieval → Mistral Creates Hypotheses → Elastic Evidence Verification → Mistral Evaluates Evidence → Grounded Structured Report.",
      stack: ["Mistral AI", "Elasticsearch", "Python", "Streamlit", "Geospatial search", "Vector embeddings", "AI agent tool calling"],
      contributions: [
        "Authored the multi-turn Mistral Large tool-calling agent in Python.",
        "Built Elasticsearch indices with full-text search, aggregations, and geo-point mapping for NYC transit stations.",
        "Formulated the two-phase Evidence Loop that tests hypotheses against baseline complaint rates.",
        "Engineered the Streamlit interactive dashboard presenting structured impact assessments."
      ],
      implementationDetails: [
        "1,488 subway-stop records (Static GTFS dataset)",
        "20,000 NYC 311 request records indexed in Elasticsearch",
        "2,000 semantically indexed 311 records",
        "Geospatial and semantic retrieval tools",
        "Agent-driven hypothesis investigation loop"
      ],
      challenges: "Eliminating false ripple effect correlations: Solved by designing neighborhood baseline aggregations in Elasticsearch to verify whether complaint surges were statistically deviant from historical norms.",
      repoUrl: "https://github.com/sairamveereddy/nyc-pulse",
      demoUrl: "https://github.com/sairamveereddy/nyc-pulse#demo-scenario",
      relatedBlog: "/blog/nyc-pulse-mistral-elasticsearch",
      event: "NYC Mistral × Elastic Hackathon (October 2026)",
      isWinner: false,
      metrics: [
        { label: "Reasoning Model", value: "Mistral Large" },
        { label: "Subway Stops", value: "1,488 Records" },
        { label: "311 Requests", value: "20,000 Indexed" },
        { label: "Architecture", value: "Two-Phase Evidence Loop" }
      ]
    },
    {
      id: "crosswise",
      slug: "crosswise",
      name: "CrossWise — Crossing Copilot for Sidewalk Delivery Robots",
      category: "Hackathon Projects",
      subCategory: "Robotics AI & Video Intelligence",
      tagline: "AI crossing copilot for sidewalk delivery robots making GO/WAIT/NO-GO decisions with video evidence.",
      summary: "Built for the VAST Builders Challenge (team-48) in New York City, CrossWise evaluates street crossings on video footage, outputting GO, WAIT, or NO-GO decisions every 5 seconds with safety guardrails and stuck escalation so delivery robots never sit indefinitely at a curb.",
      problem: "Sidewalk delivery robots frequently freeze or spin at intersections when signals are ambiguous, traffic is turning, or crosswalks are blocked. Without intelligent decision support and escalation, robots get trapped at curbs or make risky crossings.",
      architecture: "Street footage in VAST S3 passes through VAST DataEngine (YOLO11 + Cosmos Reason + Embed) into VastDB. NVIDIA Cosmos Reason generates structured crossing tags, while Llama 3.3 70B and Gemma 4 31B vision (via Weights & Biases Inference on CoreWeave GPUs) evaluate obstacle-free paths and output structured JSON crossing decisions traced in W&B Weave.",
      stack: ["VAST DataEngine", "VastDB", "NVIDIA Cosmos Reason", "YOLO11", "Llama 3.3 70B", "Gemma 4 31B", "W&B Weave", "Python", "Kubernetes"],
      contributions: [
        "Constructed decision reasoning pipeline in Python interfacing with Weights & Biases Inference APIs.",
        "Engineered code-level safety guardrails downgrading ambiguous GO decisions to WAIT whenever turning vehicles or blocked paths are detected.",
        "Designed the stuck-detection agent that triggers remote operator handoff after N consecutive non-GO segments.",
        "Conducted policy replay evaluations comparing segment-level LLM decisions with frame-level crossing decisions."
      ],
      implementationDetails: [
        "Tested across 7 fixed curb-level cameras (including NYC and SF streets)",
        "Policy replay over 5 demo clips (150s, 750 decision moments)",
        "0 starts against DON'T WALK / countdown in frame-level evaluation (vs 3 on segment LLM)",
        "Decision support prototype evaluated on recorded footage (decision support only, no physical motor control)"
      ],
      challenges: "Signal ambiguity from curb perspective: Fixed street cameras often capture round vehicle lights rather than pedestrian walk heads. Mitigated via geometric crosswalk calibration and strict gap acceptance thresholds.",
      repoUrl: "https://github.com/sairamveereddy/CROSSWISE",
      demoUrl: "/projects/crosswise",
      caseStudyUrl: "/projects/crosswise",
      event: "VAST Builders Challenge (NYC Hackathon, Team-48, October 2026)",
      isWinner: false,
      metrics: [
        { label: "Event", value: "VAST Builders Challenge" },
        { label: "Safety Record", value: "0 Starts Against Hand" },
        { label: "Vision Models", value: "Cosmos + YOLO11 + Gemma" },
        { label: "Decisions", value: "GO / WAIT / NO-GO" }
      ]
    },
    {
      id: "jobninjas",
      slug: "jobninjas",
      name: "JobNinjas.ai",
      category: "Full-Stack Platforms",
      subCategory: "Agentic Automation & Voice AI",
      tagline: "Solo-built AI talent platform integrating AWS, FastAPI, LangChain RAG, n8n automations, and realtime voice.",
      summary: "An end-to-end AI platform designed and shipped solo, assisting job applicants with intelligent resume adaptation, agentic application workflows, and voice interview preparation.",
      problem: "Traditional job applications are disconnected: resume tailoring, cover letter drafting, interview practice, and application tracking require disjointed tools with high latency and zero contextual memory.",
      architecture: "FastAPI backend hosted on AWS (Cognito auth, RDS PostgreSQL, S3 document storage, SES notifications) combined with LangChain/LangGraph agentic RAG over candidate dossiers, 8 automated n8n workflows for background sync, and real-time voice streaming with Vapi and WebRTC.",
      stack: ["AWS (Cognito, RDS, S3, SES)", "FastAPI", "Python", "LangChain", "LangGraph", "ChromaDB", "n8n", "Vapi", "Faster-Whisper", "WebRTC"],
      contributions: [
        "Single-handedly designed cloud infrastructure, database schema, and backend microservices.",
        "Created 8 production n8n workflows automating lead routing, document processing, and transactional messaging.",
        "Implemented real-time bidirectional voice agent using WebRTC and faster-whisper speech-to-text.",
        "Built RAG pipeline extracting ATS-compliant resume accomplishments with verifiable citation anchors."
      ],
      challenges: "Voice latency and concurrent document retrieval: Solved by separating heavy RAG queries from lightweight voice conversational threads using asynchronous message queuing.",
      repoUrl: "https://github.com/sairamveereddy/jobninjas",
      demoUrl: "https://jobninjas.ai",
      relatedBlog: "/blog/building-jobninjas-ai-platform",
      event: null,
      isWinner: false,
      metrics: [
        { label: "Infrastructure", value: "AWS Serverless & Containers" },
        { label: "Automations", value: "8 n8n Production Workflows" },
        { label: "Speech Engine", value: "Faster-Whisper + Vapi" },
        { label: "Architecture", value: "LangChain Agentic RAG" }
      ]
    },
    {
      id: "ai-talking-portfolio",
      slug: "ai-talking-portfolio",
      name: "AI Talking Portfolio",
      category: "Full-Stack Platforms",
      subCategory: "Conversational AI & WebRTC",
      tagline: "Realtime voice portfolio agent with OpenAI Realtime API and synchronized site navigation.",
      summary: "A production conversational agent that speaks directly with visitors via WebRTC, answering technical inquiries grounded in structured resume data while dynamically manipulating the DOM.",
      problem: "Static resumes and portfolio websites are passive reading experiences that fail to showcase actual AI engineering capabilities in a live interactive medium.",
      architecture: "Browser WebRTC audio channel connects to a secure Node.js backend relaying OpenAI Realtime API sessions. Model invokes custom function calling tools (e.g. `navigate_site`) that dispatch smooth scroll and highlighting commands to client DOM elements while continuing natural speech.",
      stack: ["OpenAI Realtime API", "WebRTC", "Node.js", "FastAPI Relay", "JavaScript", "Function Calling", "DOM Manipulation"],
      contributions: [
        "Constructed WebRTC client session handshake and audio streaming pipeline.",
        "Engineered the `navigate_site` function calling tool executed over data channels.",
        "Designed strict prompt guardrails enforcing first-person voice and factual resume grounding."
      ],
      challenges: "Audio echo and rapid state synchronization: Solved via native WebRTC echo cancellation and debounced animation queues.",
      repoUrl: "https://github.com/sairamveereddy/aiportfolio",
      demoUrl: "https://sairamveereddy.com",
      relatedBlog: "/blog/evaluating-ai-agent-reliability",
      event: null,
      isWinner: false,
      metrics: [
        { label: "Speech Protocol", value: "WebRTC Audio" },
        { label: "Latency", value: "Sub-second Conversational" },
        { label: "Tool Calling", value: "Live Client DOM Control" },
        { label: "Grounding", value: "Structured Fact Verification" }
      ]
    },
    {
      id: "miro-n8n-bridge",
      slug: "miro-n8n-bridge",
      name: "Miro × n8n Autonomous Bridge",
      category: "Hackathon Projects",
      subCategory: "Autonomous Systems & Workflow Engineering",
      tagline: "Hackathon-winning bi-directional bridge transforming visual board diagrams into active AI workflows.",
      summary: "1st Place winning project built during the Miro × n8n Hackathon with team Strangers, connecting visual canvas elements with multi-agent execution in n8n and rendering structured AI outputs back onto the board in real time.",
      problem: "Visual whiteboard diagrams typically remain static documentation separated from operational APIs and automation runners.",
      architecture: "Webhook listener receives Miro board event deltas, parses node connections into workflow graphs, invokes an n8n AI agent with tool capabilities, and posts resulting decisions back to Miro via REST APIs.",
      stack: ["n8n", "Miro REST API", "Webhooks", "OpenAI / Claude APIs", "JavaScript", "JSON Schema"],
      contributions: [
        "Built the event dispatch and parsing system translating visual canvas nodes into normalized JSON payloads.",
        "Engineered n8n workflow nodes handling automated error retries and board updates."
      ],
      challenges: "Handling rate limits and visual clutter on active boards: Implemented coordinate layout heuristics to arrange generated sticky notes cleanly.",
      repoUrl: "https://github.com/sairamveereddy",
      demoUrl: "/achievements/miro-n8n-hackathon",
      relatedBlog: "/blog/inside-miro-n8n-hackathon",
      event: "Miro × n8n Hackathon (1st Place Winner)",
      isWinner: true,
      metrics: [
        { label: "Hackathon Result", value: "1st Place Winner" },
        { label: "Execution Time", value: "Real-Time Bi-Directional" },
        { label: "Integration", value: "Miro REST + n8n Cluster" }
      ]
    },
    {
      id: "pharmacy-copilot",
      slug: "pharmacy-copilot",
      name: "Pharmacy GenAI Clinical Copilot",
      category: "Enterprise AI",
      subCategory: "Healthcare AI & Clinical Extraction",
      tagline: "RAG-based clinical assistant integrating OpenAI GPT-4 and AWS Bedrock under HIPAA compliance.",
      summary: "Production enterprise initiative at CVS Pharmacy combining clinical entity recognition, structured formulary lookup, and RAG pipelines to assist pharmacy operations.",
      problem: "Complex prescription reviews and drug interaction checking require manual parsing of unstructured clinical notes against strict formulary databases.",
      architecture: "LangChain and LlamaIndex RAG pipelines over patient history and formulary databases with AWS SageMaker MLOps monitoring for drift, bias, and HIPAA compliance.",
      stack: ["Python", "OpenAI GPT-4", "AWS Bedrock", "LangChain", "LlamaIndex", "ChromaDB", "AWS SageMaker", "Docker", "Kubernetes"],
      contributions: [
        "Designed evaluation benchmarks for drug entity recognition, achieving 28% extraction accuracy gains.",
        "Architected SageMaker monitoring pipelines enforcing data quality SLAs and bias detection."
      ],
      challenges: "Zero-tolerance for hallucinations in healthcare: Implemented strict citation attribution requiring every medication recommendation to trace back to an authorized clinical formulary paragraph.",
      repoUrl: "https://github.com/sairamveereddy",
      demoUrl: "#contact",
      relatedBlog: "/blog/building-production-rag-systems",
      event: null,
      isWinner: false,
      metrics: [
        { label: "Accuracy Gain", value: "+28% Extraction Gain" },
        { label: "Deployment", value: "AWS SageMaker + Bedrock" },
        { label: "Compliance", value: "HIPAA / Healthcare Data" }
      ]
    },
    {
      id: "insurance-fraud-pipeline",
      slug: "insurance-fraud-pipeline",
      name: "Insurance Fraud Detection ML Pipeline",
      category: "Enterprise AI",
      subCategory: "Predictive ML & Real-Time Data Engineering",
      tagline: "High-precision fraud classification pipeline with Apache Airflow, Kafka CDC, and XGBoost.",
      summary: "End-to-end enterprise machine learning system at Nationwide Insurance delivering 92% precision on flagged claims through sub-5-minute streaming feeds.",
      problem: "Batch-daily fraud scoring resulted in delayed investigations and elevated false positive rates across complex auto and property claims.",
      architecture: "Kafka CDC feeds stream policy and claim events into Apache Spark for real-time feature engineering. XGBoost models score incoming claims orchestrated by Airflow DAGs with continuous evaluation harnesses.",
      stack: ["Python", "XGBoost", "Scikit-learn", "Apache Spark", "Apache Airflow", "Kafka", "Snowflake", "Databricks"],
      contributions: [
        "Trained and validated XGBoost classifiers achieving 92% precision on flagged claims.",
        "Engineered real-time Kafka-to-Spark CDC pipeline reducing data latency to sub-5-minute intervals.",
        "Built automated A/B testing protocols and drift detection dashboards in Power BI."
      ],
      challenges: "Imbalanced class distribution in fraud data: Handled using SMOTE-NC, custom cost-sensitive loss functions, and rigorous precision-recall curve threshold tuning.",
      repoUrl: "https://github.com/sairamveereddy",
      demoUrl: "#contact",
      relatedBlog: "/blog/evaluating-ai-agent-reliability",
      event: null,
      isWinner: false,
      metrics: [
        { label: "Precision", value: "92% on Flagged Claims" },
        { label: "Data Latency", value: "Sub-5-minute CDC" },
        { label: "Orchestration", value: "Apache Airflow" }
      ]
    }
  ],

  blog: [
    {
      id: "inside-miro-n8n-hackathon",
      slug: "inside-miro-n8n-hackathon",
      title: "Inside Our Miro × n8n Hackathon-Winning Project: Architecture and Lessons Learned",
      category: "Automation",
      categoryBadge: "Hackathon Architecture",
      date: "2026-08-20",
      readTime: "7 min read",
      author: "Sairam Kumar Reddy Veereddy",
      excerpt: "How our team 'Strangers' built a first-place bi-directional AI automation system bridging Miro visual canvas diagrams with n8n multi-agent execution in under a few hours.",
      featured: true,
      mediumUrl: "https://medium.com/@vsairamkumarreddy",
      tags: ["n8n", "Miro", "Agentic AI", "Hackathon", "Architecture"],
      requiresVerification: false,
      verificationNote: null
    },
    {
      id: "nyc-pulse-mistral-elasticsearch",
      slug: "nyc-pulse-mistral-elasticsearch",
      title: "Building NYC PULSE with Mistral and Elasticsearch",
      category: "AI Engineering",
      categoryBadge: "Search & Reasoning",
      date: "2026-08-10",
      readTime: "9 min read",
      author: "Sairam Kumar Reddy Veereddy",
      excerpt: "Why standard RAG fails for urban disruption analysis and how we engineered an autonomous Evidence Loop pairing Mistral Large reasoning with Elasticsearch memory.",
      featured: true,
      mediumUrl: "https://medium.com/@vsairamkumarreddy",
      tags: ["Mistral", "Elasticsearch", "AI Agents", "Evidence Loop", "Python", "NYC Hackathon"],
      requiresVerification: false,
      verificationNote: null
    },
    {
      id: "building-jobninjas-ai-platform",
      slug: "building-jobninjas-ai-platform",
      title: "How I Built JobNinjas.ai: AI Platform Architecture",
      category: "Architecture",
      categoryBadge: "System Design",
      date: "2026-07-28",
      readTime: "11 min read",
      author: "Sairam Kumar Reddy Veereddy",
      excerpt: "A deep dive into shipping an AI platform solo: combining AWS Cognito/RDS, FastAPI, LangChain RAG, 8 n8n automation workflows, and real-time WebRTC voice.",
      featured: true,
      mediumUrl: "https://medium.com/@vsairamkumarreddy",
      tags: ["FastAPI", "AWS", "LangChain", "n8n", "Vapi", "Full Stack AI"],
      requiresVerification: false,
      verificationNote: null
    },
    {
      id: "evaluating-ai-agent-reliability",
      slug: "evaluating-ai-agent-reliability",
      title: "Evaluating AI Agent Reliability and Tool Calling",
      category: "Agentic AI",
      categoryBadge: "Model Evaluation",
      date: "2026-07-05",
      readTime: "8 min read",
      author: "Sairam Kumar Reddy Veereddy",
      excerpt: "Techniques for measuring deterministic tool execution, schema compliance, timeout recovery, and avoiding infinite loops in production agent architectures.",
      featured: false,
      mediumUrl: "https://medium.com/@vsairamkumarreddy",
      tags: ["AI Agents", "Tool Calling", "Evaluation", "Reliability", "LangGraph"],
      requiresVerification: true,
      verificationNote: "Benchmark metrics on proprietary datasets are marked with placeholders pending author review."
    },
    {
      id: "building-production-rag-systems",
      slug: "building-production-rag-systems",
      title: "Building Production-Ready RAG Systems",
      category: "RAG",
      categoryBadge: "RAG Engineering",
      date: "2026-06-18",
      readTime: "10 min read",
      author: "Sairam Kumar Reddy Veereddy",
      excerpt: "Moving beyond basic vector search: hybrid retrieval, cross-encoder re-ranking, document chunking tradeoffs, and enforcing strict citation attribution.",
      featured: false,
      mediumUrl: "https://medium.com/@vsairamkumarreddy",
      tags: ["RAG", "ChromaDB", "Vector Search", "LlamaIndex", "Production AI"],
      requiresVerification: false,
      verificationNote: null
    },
    {
      id: "rag-vs-finetuning-enterprise-ai",
      slug: "rag-vs-finetuning-enterprise-ai",
      title: "RAG vs Fine-Tuning for Enterprise AI",
      category: "Architecture",
      categoryBadge: "Strategic Decision",
      date: "2026-05-30",
      readTime: "8 min read",
      author: "Sairam Kumar Reddy Veereddy",
      excerpt: "An engineering decision framework comparing latency, cost, knowledge freshness, and data privacy when deciding between RAG, fine-tuning, or hybrid setups.",
      featured: false,
      mediumUrl: "https://medium.com/@vsairamkumarreddy",
      tags: ["Enterprise AI", "Fine-Tuning", "RAG", "LLM Strategy", "Cost Optimization"],
      requiresVerification: false,
      verificationNote: null
    },
    {
      id: "engineering-reliable-n8n-workflows",
      slug: "engineering-reliable-n8n-workflows",
      title: "Engineering Reliable Multi-Step n8n Workflows",
      category: "Automation",
      categoryBadge: "Workflow Automation",
      date: "2026-05-12",
      readTime: "7 min read",
      author: "Sairam Kumar Reddy Veereddy",
      excerpt: "Design patterns for resilient workflow automations: idempotency tokens, dead letter queues, webhook security, and custom Python microservice bridges.",
      featured: false,
      mediumUrl: "https://medium.com/@vsairamkumarreddy",
      tags: ["n8n", "Workflow Automation", "Error Handling", "Webhooks", "DevOps"],
      requiresVerification: false,
      verificationNote: null
    },
    {
      id: "benchmarking-ai-agent-performance",
      slug: "benchmarking-ai-agent-performance",
      title: "Benchmarking AI Agent Performance",
      category: "Research",
      categoryBadge: "Quantitative Benchmarks",
      date: "2026-04-22",
      readTime: "9 min read",
      author: "Sairam Kumar Reddy Veereddy",
      excerpt: "Formulating quantitative metrics for autonomous agents: goal completion rate, step efficiency, cost-per-successful-action, and regression testing pipelines.",
      featured: false,
      mediumUrl: "https://medium.com/@vsairamkumarreddy",
      tags: ["Benchmarking", "Agentic AI", "Metrics", "Research", "Testing"],
      requiresVerification: true,
      verificationNote: "Benchmark comparative charts contain sample empirical schemas marked for author verification."
    }
  ],

  community: {
    instagram: {
      handle: "@first.ninja_",
      url: "https://www.instagram.com/first.ninja_/",
      followers: "16,900+",
      asOfDate: "October 2026",
      bio: "Demystifying AI engineering, foundation models, and open-source tooling every day.",
      pillars: [
        {
          title: "AI Tools & Architecture Breakdowns",
          desc: "Daily breakdowns explaining emerging open-source models, MCP protocols, and developer tool chains for practical engineering."
        },
        {
          title: "Hands-on Automation Tutorials",
          desc: "Step-by-step guides demonstrating how to construct multi-agent systems with n8n, LangChain, and modern APIs."
        },
        {
          title: "Research Paper Deconstructions",
          desc: "Translating frontier AI research papers into plain English and code demonstrations for working engineers."
        }
      ],
      metricsPlaceholder: {
        note: "Audience analytics and engagement metrics can be directly updated in this configuration object as new verified Instagram Insights reports are pulled.",
        impressions: "Available via Instagram Insights update",
        engagementRate: "Available via Instagram Insights update",
        topAudienceRegions: "Available via Instagram Insights update"
      }
    },
    medium: {
      handle: "@vsairamkumarreddy",
      url: "https://medium.com/@vsairamkumarreddy",
      description: "Primary external publishing platform featuring in-depth essays, open-source alternatives, Android AI tooling, and engineering career advice."
    },
    speaking: [
      {
        id: "speaking-1",
        title: "Building Real-Time Multimodal AI Applications with WebRTC",
        event: "AI Engineer & Developer Community Session",
        type: "Technical Presentation / Workshop",
        status: "Draft — Requires author verification",
        date: "2026",
        description: "Hands-on walkthrough of constructing voice-driven conversational web applications with OpenAI Realtime API and synchronized DOM control."
      },
      {
        id: "speaking-2",
        title: "From Diagrams to Running Agents: Practical n8n Automation",
        event: "Workflow Automation & Low-Code Community",
        type: "Community Webinar",
        status: "Draft — Requires author verification",
        date: "2026",
        description: "Deconstructing the winning Miro × n8n hackathon architecture and sharing patterns for robust multi-step webhook integrations."
      },
      {
        id: "speaking-3",
        title: "Transitioning Higher Education Assessment to AI Utilization Proficiency",
        event: "Academic & Tech Colloquium",
        type: "Research Presentation",
        status: "Draft — Requires author verification",
        date: "2026",
        description: "Presenting the core framework from 'From Detection to Proficiency' on Baseline Differential Analysis and AI literacy assessment."
      }
    ],
    mentorship: [
      {
        title: "Hackathon Mentoring & Project Review",
        desc: "Mentoring student and early-career developers on LLM application architecture, vector search design, and pitching functional prototypes under tight hackathon timeframes.",
        status: "Active Community Involvement"
      },
      {
        title: "Open-Source Contributions & Community Code",
        desc: "Maintaining 27+ public GitHub repositories providing boilerplate code, experimentation scripts, and educational repositories for developers worldwide.",
        status: "27+ Public Repositories"
      }
    ]
  }
};

// Export for browser and node
if (typeof module !== "undefined" && module.exports) {
  module.exports = SITE_DATA;
} else if (typeof window !== "undefined") {
  window.SITE_DATA = SITE_DATA;
}
