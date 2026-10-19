import { PortfolioData } from '../types';

export const portfolioData: PortfolioData = {
  personal: {
    name: "Khushi Nayak",
    wordmark: "Khushi Nayak",
    title: "AI Engineer",
    subtitle: "Building intelligent applications at the intersection of AI, machine learning, and software engineering.",
    heroHeadline: "Building Intelligence, Beautifully.",
    heroSupporting: "I'm an AI Engineer working at the intersection of artificial intelligence and software engineering, building intelligent applications that turn ideas into practical solutions.",
    heroCta: "Explore My Work →",
    portraitUrl: "/images/portrait_khushi.jpg",
    portraitLabel: "AI ENGINEER &bull; EDITORIAL FOLIO &bull; 2026",
    bioHeading: "A Little About Me",
    bioIntroduction: "I am an AI Engineer passionate about designing practical, reliable, and beautifully engineered intelligent applications. With a foundation in Machine Learning and Software Engineering, I build systems that bridge theoretical algorithms and real-world utility.",
    bioNarrative: [
      "I hold a Bachelor of Technology in Artificial Intelligence & Machine Learning from the University School of Automation & Robotics, Delhi. My journey spans generative AI architectures, retrieval-augmented generation (RAG) pipelines, and high-performance backend microservices.",
      "Currently, I serve as a Trainee AI & Machine Learning Engineer at Tedekstra, developing containerized AI microservices, automated reasoning engines, and production inference pipelines.",
      "Beyond machine learning models, I have a deep appreciation for refined aesthetics and user experience — having served as the Graphics Design Vice Lead for ACM-W. I believe engineering excellence is complete only when complex mathematical architectures are rendered intuitive, accessible, and elegant."
    ],
    education: {
      degree: "Bachelor of Technology (B.Tech) in Artificial Intelligence & Machine Learning",
      institution: "University School of Automation & Robotics, Delhi",
      period: "2021 – 2025",
      focus: "Neural Networks, Deep Learning, Data Structures & Algorithms, Systems Engineering"
    },
    currentRole: {
      title: "Trainee AI & Machine Learning Engineer",
      company: "Tedekstra",
      period: "June 2026 – Present",
      focus: "AI-driven backend microservices, containerized REST APIs, model inference pipelines"
    },
    technicalInterests: [
      "Autonomous Agentic Workflows",
      "Retrieval-Augmented Generation (RAG)",
      "High-Performance Traffic Classification (C++17)",
      "Deep Learning for Biomedical Signals",
      "Self-Healing Software Automation"
    ],
    email: "khushinayak701@gmail.com",
    phoneDisplay: "+91 9911212878",
    phoneLink: "+919911212878",
    location: "Delhi, India",
    githubUrl: "https://github.com/khushi741",
    linkedinUrl: "https://linkedin.com/in/khushi-nayak-a36a7b251",
    leetcodeStats: "250+ LeetCode Problems Solved (100+ Medium / Hard)",
    resumeUrl: "/khushi_Resume.pdf"
  },

  projects: [
    {
      id: "deep-research-ai",
      title: "Deep Research AI",
      category: "genai",
      categoryLabel: "Generative AI & Agentic Systems",
      indexNumber: "01",
      tagline: "Autonomous Multi-Step Web Research Agent",
      shortDescription: "An autonomous agentic pipeline powered by Google Gemini 2.5 Flash and dual search providers that decomposes complex queries, validates source credibility, and synthesizes publication-grade research reports with verifiable inline citations.",
      problem: "Traditional LLMs hallucinate, lack access to real-time information, and fail at recursive multi-vector investigations across diverse web sources.",
      solution: "Engineered a modular 6-stage autonomous pipeline: query decomposition -> web research -> content extraction -> source credibility rating -> evidence synthesis -> PDF/Markdown report generation with strict SSRF defense.",
      myContribution: [
        "Architected the 6-stage autonomous agent pipeline coordinating query decomposition and recursive web investigation.",
        "Engineered strict SSRF validation rejecting private subnets, loopback addresses, and cloud hypervisor metadata endpoints.",
        "Built asynchronous FastAPI REST endpoints and an interactive dashboard with real-time research telemetry.",
        "Implemented inline citation verification ensuring every factual finding maps directly to indexed primary sources."
      ],
      technologies: ["Python", "Google Gemini 2.5 Flash", "FastAPI", "Streamlit", "Tavily API", "DuckDuckGo", "Pydantic v2", "SQLite"],
      metrics: [
        { label: "Pipeline Stages", value: "6 Modular Phases" },
        { label: "Citations", value: "100% Inline Verified" },
        { label: "Security", value: "Hardened SSRF Defense" }
      ],
      githubUrl: "https://github.com/khushi741/deep-research-ai",
      image: "/images/deep_research_tome.jpg",
      layoutVariant: "large-feature"
    },
    {
      id: "ai-testing-platform",
      title: "AI Self-Healing Test Agent",
      category: "fullstack",
      categoryLabel: "Full-Stack AI & Intelligent Automation",
      indexNumber: "02",
      tagline: "Natural Language Browser Testing with Vector Recovery",
      shortDescription: "A full-stack AI automation platform that converts plain English test scenarios into Playwright browser suites, utilizing vector embeddings to automatically repair broken UI locators at runtime without pipeline interruption.",
      problem: "Browser automation tests frequently break due to routine frontend updates, altered CSS classnames, or dynamically rendered DOM identifiers, resulting in costly maintenance overhead.",
      solution: "Developed an intelligent test runner that parses natural language into executable Playwright tests. If a selector fails, a runtime vector embedding engine matches candidate DOM elements by semantic similarity, heals the locator, and resumes execution seamlessly.",
      myContribution: [
        "Engineered the natural language translation engine converting plain English prompts into executable Playwright browser tests.",
        "Implemented runtime vector embedding matching to calculate semantic similarity across DOM candidates when locators fail.",
        "Constructed a responsive React management dashboard for inspecting execution traces, screenshots, and healed elements.",
        "Built the FastAPI backend managing asynchronous browser orchestration and test telemetry."
      ],
      technologies: ["React.js", "FastAPI", "Python", "Playwright", "Vector Embeddings", "Docker", "TailwindCSS"],
      metrics: [
        { label: "Test Translation", value: "Plain English to Code" },
        { label: "Locator Recovery", value: "Runtime Vector Healing" },
        { label: "Execution", value: "Headless Playwright Runner" }
      ],
      githubUrl: "https://github.com/khushi741/automation_testing_agent",
      image: "/images/test_healing_tome.jpg",
      layoutVariant: "split-editorial"
    },
    {
      id: "packet-analyzer",
      title: "Packet Analyzer",
      category: "systems",
      categoryLabel: "C++ & Machine Learning Traffic Classifier",
      indexNumber: "03",
      tagline: "Hybrid DPI & Machine Learning Flow Classification",
      shortDescription: "A high-performance network monitoring system coupling a C++17 Deep Packet Inspection engine with a Random Forest machine learning classifier to achieve 98.3% classification accuracy on encrypted TLS 1.3 / QUIC traffic.",
      problem: "Widespread protocol encryption prevents legacy signature-based packet inspectors from classifying network flows without costly payload decryption.",
      solution: "Engineered a hybrid architecture: C++17 parses packet headers and statistical flow features at microsecond latency, feeding a Random Forest classifier that identifies application protocols purely by packet sizes, inter-arrival times, and directional bursts.",
      myContribution: [
        "Designed the hybrid C++17 packet parsing pipeline and Scikit-learn Random Forest model achieving 98.3% accuracy on encrypted traffic.",
        "Extracted statistical flow features (packet size distributions, inter-arrival jitter, window sizes) without payload decryption.",
        "Deployed a containerized FastAPI monitoring service and web dashboard using Docker for real-time flow telemetry."
      ],
      technologies: ["C++17", "Python", "FastAPI", "Scikit-learn", "Docker", "PCAP", "REST APIs"],
      metrics: [
        { label: "Classification Accuracy", value: "98.3% Encrypted Flows" },
        { label: "Core Parser", value: "C++17 Engine" },
        { label: "Deployment", value: "Docker Microservice" }
      ],
      githubUrl: "https://github.com/khushi741/Packet_analyzer",
      image: "/images/packet_analyzer_tome.jpg",
      layoutVariant: "split-editorial"
    },
    {
      id: "seizure-prediction",
      title: "Seizure Prediction Suite",
      category: "deeplearning",
      categoryLabel: "Deep Learning & Biomedical Signal Processing",
      indexNumber: "04",
      tagline: "Dual-Branch SBM-MSTM EEG Neural Framework",
      shortDescription: "A clinical-grade deep learning model uniting spatial Synchronization-Based Attention (SBAM) and temporal Multi-Scale Convolutions (MSTM) to achieve 98% prediction accuracy on multi-channel EEG datasets.",
      problem: "Epileptic seizures occur with sudden onset; detecting pre-ictal bio-signals in noisy, multi-channel EEG signals requires modeling both temporal frequencies and spatial synchrony across brain regions.",
      solution: "Constructed a dual-branch neural architecture: the SBAM branch calculates inter-electrode phase synchrony matrices while the MSTM branch captures temporal wave patterns across varying time scales, converging into a predictive classification head.",
      myContribution: [
        "Designed the dual-branch SBM-MSTM deep learning architecture achieving 98% accuracy on complex clinical EEG datasets.",
        "Engineered pre-processing pipelines for artifact removal, bandpass filtering, and sliding-window spectral decomposition.",
        "Developed a clinical decision-support interface to visualize pre-ictal risk probabilities for medical monitoring."
      ],
      technologies: ["PyTorch", "Python", "EEG Signal Processing", "NumPy", "SciPy", "Matplotlib", "Scikit-learn"],
      metrics: [
        { label: "Model Accuracy", value: "98% on EEG Datasets" },
        { label: "Architecture", value: "Dual-Branch SBAM-MSTM" },
        { label: "Domain", value: "Biomedical Decision Support" }
      ],
      githubUrl: "https://github.com/khushi741/Seizure-Prediction",
      image: "/images/seizure_prediction_tome.jpg",
      layoutVariant: "compact-card"
    }
  ],

  experiences: [
    {
      id: "tedekstra",
      role: "Trainee AI & Machine Learning Engineer",
      company: "Tedekstra",
      period: "June 2026 – Present",
      location: "Delhi, India",
      type: "Full-Time",
      summary: "Developing intelligent backend microservices, generative AI features, and containerized model inference pipelines.",
      contributions: [
        "Develop AI-powered features for web applications utilizing Python, modern machine learning, and Generative AI workflows.",
        "Build AI-driven backend services and containerized REST APIs for model inference, data processing, and intelligent automation.",
        "Integrate and optimize AI solutions to enhance application reliability, inference throughput, and deployment scalability."
      ],
      technologies: ["Python", "FastAPI", "Generative AI", "Docker", "REST APIs", "Model Serving"]
    },
    {
      id: "prodigal-ai",
      role: "Generative AI Intern",
      company: "Prodigal AI Pvt. Ltd",
      period: "September 2024 – December 2024",
      location: "India",
      type: "Internship",
      summary: "Engineered conversational NLP architectures and retrieval-augmented generation (RAG) systems.",
      contributions: [
        "Built a Natural Language Processing (NLP) chatbot incorporating intent classification, entity extraction, and context-aware responses.",
        "Implemented a Retrieval-Augmented Generation (RAG) architecture with optimized vector embeddings to elevate retrieval accuracy and response relevance."
      ],
      technologies: ["Python", "NLP", "RAG", "Embeddings", "Vector Databases", "LLMs"]
    },
    {
      id: "ibm",
      role: "Data Analyst Intern",
      company: "International Business Machines (IBM)",
      period: "June 2024 – August 2024",
      location: "India",
      type: "Internship",
      summary: "Exploratory data analysis and predictive modeling across environmental datasets.",
      contributions: [
        "Performed comprehensive Exploratory Data Analysis (EDA) and machine learning modeling on water quality datasets, achieving 92% prediction accuracy.",
        "Benchmarked Logistic Regression, Support Vector Machines (SVM), and Random Forest models; selected optimal architectures using precision and recall metrics."
      ],
      technologies: ["Python", "Scikit-learn", "Pandas", "EDA", "Random Forest", "SVM"]
    },
    {
      id: "education-usar",
      role: "B.Tech in Artificial Intelligence & Machine Learning",
      company: "University School of Automation & Robotics, Delhi",
      period: "2021 – 2025",
      location: "Delhi, India",
      type: "Education",
      summary: "Comprehensive academic foundation in AI/ML, algorithmic problem solving (250+ LeetCode), and systems design.",
      contributions: [
        "Specialized in deep learning architectures, statistical machine learning, and scalable systems.",
        "Solved 250+ LeetCode problems (100+ Medium/Hard) with focus on dynamic programming, graphs, and system design.",
        "Served as Graphics Design Vice Lead for the Association for Computing Machinery – Women (ACM-W)."
      ],
      technologies: ["Algorithms", "Data Structures", "Deep Learning", "Mathematics", "C++", "Python"]
    }
  ],

  skillCategories: [
    {
      id: "programming",
      title: "Programming Languages",
      subtitle: "Core engineering and algorithmic foundations",
      skills: ["Python", "SQL", "C++", "JavaScript", "TypeScript"]
    },
    {
      id: "genai",
      title: "Generative AI & LLMs",
      subtitle: "Agentic systems, neural synthesis, and cognitive pipelines",
      skills: [
        "Large Language Models (LLMs)",
        "Retrieval-Augmented Generation (RAG)",
        "Autonomous Agents",
        "Google Gemini API",
        "LlamaIndex",
        "Pinecone Vector DB",
        "Vector Embeddings",
        "Natural Language Processing (NLP)",
        "Prompt Engineering"
      ]
    },
    {
      id: "mlops",
      title: "Machine Learning & Deep Learning",
      subtitle: "Model architectures, evaluation, and signal processing",
      skills: [
        "Supervised & Unsupervised Learning",
        "Convolutional Neural Networks (CNN)",
        "LSTM & Recurrent Architectures",
        "Feature Engineering",
        "Model Serving & Inference",
        "EEG Signal Processing",
        "Exploratory Data Analysis (EDA)"
      ]
    },
    {
      id: "deployment",
      title: "Backend, Cloud & MLOps",
      subtitle: "Production deployment, containerization, and APIs",
      skills: [
        "FastAPI (Model Serving)",
        "Docker",
        "REST APIs",
        "Git & GitHub",
        "Streamlit",
        "Azure Databricks (Foundations)",
        "CI/CD Workflows"
      ]
    },
    {
      id: "libraries",
      title: "Frameworks & Frontend",
      subtitle: "Scientific libraries and intuitive user interfaces",
      skills: [
        "TensorFlow",
        "PyTorch",
        "Scikit-learn",
        "Pandas",
        "NumPy",
        "OpenCV",
        "React.js",
        "Next.js",
        "HTML5 & Vanilla CSS"
      ]
    }
  ]
};
