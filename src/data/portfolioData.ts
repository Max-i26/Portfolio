export interface StatItem {
  label: string;
  value: string;
  subtext?: string;
}

export interface FocusArea {
  title: string;
  description: string;
  tags: string[];
}

export interface EducationInfo {
  degree: string;
  institution: string;
  period?: string;
  description?: string;
}

export interface CVItem {
  id: string;
  name: string;
  description: string;
  fileName: string;
  url: string;
  badge: string;
}

export interface PersonalInfo {
  name: string;
  rolePrefix: string;
  rotatingKeywords: string[];
  availability: {
    status: boolean;
    text: string;
  };
  shortBio: string;
  bioParagraphs: string[];
  stats: StatItem[];
  education: EducationInfo;
  focusAreas: FocusArea[];
  cvUrl: string;
  cvName?: string;
  resumes: CVItem[];
}

export interface SocialLinks {
  linkedin: string;
  github: string;
  instagram?: string;
  email: string;
  location?: string;
  portfolioUrl?: string;
}

export interface TechCategory {
  category: string;
  items: string[];
}

export interface LeadershipItem {
  id: string;
  role: string;
  period: string;
  organization: string;
  location?: string;
  isCurrent?: boolean;
  description?: string;
  badge?: string;
}

export interface AwardItem {
  title: string;
  placement: string;
  institution: string;
  year?: string;
}

export interface ProjectItem {
  id: number;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  image: string | null;
  github: string | null;
  live: string | null;
  keyHighlights: string[];
}

export interface PortfolioData {
  personal: PersonalInfo;
  socials: SocialLinks;
  techStack: TechCategory[];
  leadership: LeadershipItem[];
  awards: AwardItem[];
  projects: ProjectItem[];
}

export const portfolioData: PortfolioData = {
  personal: {
    name: "Harol Maxilan",
    rolePrefix: "Data Engineering & AI/ML Engineer Pioneering",
    rotatingKeywords: [
      "Medallion Lakehouses & PySpark",
      "Multi-Agent AI & LangGraph",
      "Transformer NLP (BERT/DistilBERT)",
      "Computer Vision & MediaPipe",
      "Automated ML & ETL Pipelines",
    ],
    availability: {
      status: true,
      text: "Available for Data Engineering, AI/ML & Data Science Internships",
    },
    shortBio:
      "Data Science undergraduate at Sabaragamuwa University of Sri Lanka specializing in Data Engineering and AI/ML Engineering. Hands-on experience designing Medallion lakehouse ETL pipelines (PySpark, AWS S3), training transformer NLP models (BERT, DistilBERT), and orchestrating multi-agent RAG systems with LangGraph.",
    bioParagraphs: [
      "I'm Harol Maxilan (Maxi), a Data Science undergraduate at Sabaragamuwa University of Sri Lanka (Expected Graduation: 2028) specializing in Data Engineering and AI/ML Engineering.",
      "My engineering depth spans designing Medallion Lakehouse ETL pipelines (PySpark, AWS S3), building production NLP transformers (fine-tuned BERT/DistilBERT), real-time computer vision (OpenCV, MediaPipe), and autonomous multi-agent GenAI systems with LangGraph.",
      "Beyond technical engineering, I serve as AWS Logistics and Operations Lead, IEEE INSL Ambassador, and student mentor, bringing leadership, rigorous execution, and production data integrity to every team."
    ],
    stats: [
      { value: "6+", label: "Hackathon Honors", subtext: "Winner & Finalist across Sri Lanka" },
      { value: "2.4M+", label: "Lakehouse Records", subtext: "PySpark & AWS S3 Medallion ETL" },
      { value: "56+", label: "Automated Tests", subtext: "Pytest Suite for Data Integrity" },
      { value: "2028", label: "Graduation Year", subtext: "BSc (Hons) Data Science @ SUSL" },
    ],
    education: {
      degree: "B.Sc. (Hons) in Data Science",
      institution: "Sabaragamuwa University of Sri Lanka, Faculty of Computing",
      period: "2024 – 2028 (Expected)",
      description: "Relevant Coursework: Database Systems, Data Warehousing, Data Science, Statistics, Computer Programming, Machine Learning, Artificial Intelligence."
    },
    focusAreas: [
      {
        title: "Data Engineering & Medallion Lakehouse",
        description: "Designing and deploying scalable Medallion Lakehouse ETL pipelines using PySpark and AWS S3, transforming multi-million record datasets into Star Schema Parquet storage with automated data quality gates.",
        tags: ["PySpark", "Apache Spark", "AWS S3", "Medallion Architecture", "Parquet", "Star Schema"]
      },
      {
        title: "Generative AI & Autonomous Multi-Agent Systems",
        description: "Orchestrating autonomous multi-agent systems via LangGraph state graphs with deterministic JSON validation loops, RAG pipelines, and FAISS vector embeddings.",
        tags: ["LangGraph", "LangChain", "Multi-Agent AI", "RAG", "FAISS", "Pydantic"]
      },
      {
        title: "NLP, Computer Vision & Machine Learning",
        description: "Training and benchmarking transformer NLP architectures (BERT, DistilBERT) with MLflow tracking and SMOTE balancing, alongside real-time computer vision inference (OpenCV, MediaPipe).",
        tags: ["BERT / DistilBERT", "Hugging Face", "MLflow", "SMOTE", "OpenCV", "MediaPipe"]
      }
    ],
    cvUrl: "/Harol_Maxilan_CV.pdf",
    cvName: "Harol_Maxilan_CV.pdf",
    resumes: [
      {
        id: "harol-maxilan-cv",
        name: "Harol Maxilan — Master CV",
        description: "Unified 99/100 ATS-verified technical CV combining Data Engineering (PySpark, Medallion Lakehouse, AWS S3), AI/ML (BERT, DistilBERT, SMOTE, MLflow), Generative AI (LangGraph, RAG, FAISS), and Computer Vision.",
        fileName: "Harol_Maxilan_CV.pdf",
        url: "/Harol_Maxilan_CV.pdf",
        badge: "Data Engineering & AI/ML"
      }
    ],
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/harol-maxilan",
    github: "https://github.com/Max-i26",
    portfolioUrl: "https://max-i26.github.io/Portfolio",
    email: "maxilanharrol@gmail.com",
    location: "Sabaragamuwa / Vavuniya, Sri Lanka",
  },

  techStack: [
    {
      category: "Programming Languages",
      items: ["Python", "SQL", "Java", "JavaScript", "PHP"]
    },
    {
      category: "Data Engineering & Big Data",
      items: ["ETL/ELT Pipelines", "Medallion Architecture (Bronze-Silver-Gold)", "Apache Spark", "PySpark", "Batch Processing", "Data Quality Auditing", "Referential Integrity", "Deduplication", "Parquet", "Star/Snowflake Schema"]
    },
    {
      category: "Machine Learning & Deep Learning",
      items: ["Scikit-learn", "PyTorch", "Classification", "Regression", "Feature Engineering", "Cross-Validation", "Hyperparameter Tuning", "SMOTE", "XGBoost", "AutoML", "MLflow"]
    },
    {
      category: "Generative AI & LLMs",
      items: ["LangChain", "LangGraph", "Multi-Agent AI Systems", "RAG (Retrieval-Augmented Generation)", "Prompt Engineering", "Pydantic", "Vector Search (FAISS, ChromaDB)", "Google Generative AI"]
    },
    {
      category: "Natural Language Processing & Computer Vision",
      items: ["Hugging Face Transformers", "BERT", "DistilBERT", "TF-IDF", "Tokenization", "OpenCV", "MediaPipe", "Hand Gesture Recognition", "Facial Emotion Detection", "CNNs", "Real-Time Inference"]
    },
    {
      category: "Databases, Cloud & DevOps",
      items: ["MySQL", "PostgreSQL", "MariaDB", "Pandas", "NumPy", "Plotly", "AWS (S3, EC2)", "Docker", "FastAPI", "Streamlit", "Git / GitHub", "Linux", "Pytest", "REST APIs"]
    }
  ],

  leadership: [
    {
      id: "lead-aws",
      role: "AWS Logistics and Operations Lead",
      period: "10/2026 – Present",
      organization: "Sabaragamuwa University of Sri Lanka",
      location: "Belihuloya, Sri Lanka",
      isCurrent: true,
      description: "Directing operational logistics, cloud workshop organization, and infrastructure coordination for AWS community activities.",
      badge: "Current Leadership"
    },
    {
      id: "lead-cricket",
      role: "Club Cricket Team Captain",
      period: "10/2025",
      organization: "VSC, Vavuniya",
      location: "Vavuniya, Sri Lanka",
      isCurrent: false,
      description: "Spearheaded team strategy, on-field decision making, match preparation, and team leadership during tournament fixtures.",
      badge: "Team Captain"
    },
    {
      id: "lead-chess",
      role: "Clash of Pawns Chess Competition Mentor",
      period: "06/2025",
      organization: "AUSDAV, Vavuniya",
      location: "Vavuniya, Sri Lanka",
      isCurrent: false,
      description: "Mentored aspiring chess competitors on tactical frameworks, opening theory, and competitive time-management mindset.",
      badge: "Student Mentor"
    },
    {
      id: "lead-insl",
      role: "Zone C University Ambassador – IEEE INSL",
      period: "04/2025",
      organization: "Sabaragamuwa University of Sri Lanka",
      location: "Sri Lanka",
      isCurrent: false,
      description: "Represented the university across national IEEE INSL hackathon networks, coordinating regional outreach and innovation engagement.",
      badge: "Ambassador"
    },
    {
      id: "lead-pentathlon",
      role: "Pentathlon 2.0 Logistics Lead",
      period: "12/2023",
      organization: "AUSDAV, Vavuniya",
      location: "Vavuniya, Sri Lanka",
      isCurrent: false,
      description: "Managed end-to-end logistics, schedule synchronization, resource allocation, and team coordination for Pentathlon 2.0.",
      badge: "Logistics Lead"
    }
  ],

  awards: [
    {
      title: "Nexora Ideathon",
      placement: "3rd Place",
      institution: "Sabaragamuwa University of Sri Lanka",
      year: "2025"
    },
    {
      title: "CIPHER 2.0 Hackathon & Case Study",
      placement: "Finalist",
      institution: "Informatics Institute of Technology (IIT)",
      year: "2025"
    },
    {
      title: "J'PuraXtreme 3.0 Hackathon",
      placement: "Finalist",
      institution: "University of Sri Jayewardenepura",
      year: "2025"
    },
    {
      title: "CodeRally 7.0 Hackathon",
      placement: "Intermediate Tier Finalist",
      institution: "Informatics Institute of Technology (IIT)",
      year: "2025"
    },
    {
      title: "Code Arena Hackathon",
      placement: "Finalist",
      institution: "General Sir John Kotelawala Defence University (KDU)",
      year: "2025"
    }
  ],

  projects: [
    {
      id: 1,
      name: "CareerCompass AI",
      tagline: "Autonomous Multi-Agent Career Coaching & Skill Gap Ecosystem",
      description: "Architected a Level 3 autonomous multi-agent career coaching ecosystem orchestrated via LangGraph state graphs with 5 collaborative AI agents for CV analysis, gap assessment, mock interviews, web scraping, and dynamic roadmap generation.",
      stack: ["Python", "LangGraph", "LangChain", "RAG", "FAISS", "Multi-Agent AI", "FastAPI", "Pydantic"],
      image: "/images/Career-Compass-AI.png",
      github: "https://github.com/sankajithdjinasena/CareerCompass_AI",
      live: null,
      keyHighlights: [
        "Architected a Level 3 autonomous multi-agent career coaching ecosystem via LangGraph state graphs with 5 collaborative agents",
        "Engineered a RAG pipeline utilizing FAISS vector embeddings and Tavily APIs to match candidate profiles with Pydantic validation",
        "Designed deterministic JSON validation loops with self-correcting prompt mechanisms, achieving a 100% structured schema compliance rate across 50+ sessions"
      ]
    },
    {
      id: 2,
      name: "NexLab",
      tagline: "Smart University Resource Allocation System & Intelligence Dashboard",
      description: "Led full-stack architecture as Team Leader (Team Predictra, CIPHER 2.0 Finalist) for an enterprise university lab resource allocation platform serving 500+ student/faculty requests with multi-factor priority scoring and automated conflict resolution.",
      stack: ["PHP", "MySQL", "JavaScript", "HTML5/CSS3", "Priority Scoring Engine", "AI Intelligence Dashboard"],
      image: "/images/Nex-Lab.jpg",
      github: "https://github.com/sankajithdjinasena/NEXLAB",
      live: null,
      keyHighlights: [
        "Led full-stack architecture as Team Leader (Team Predictra, CIPHER 2.0 Finalist) for an enterprise platform serving 500+ requests",
        "Engineered multi-factor priority scoring engine with automated conflict resolution, eliminating 100% of double-booking conflicts across 4 user roles",
        "Built administrative Intelligence Dashboard delivering 7-day predictive demand forecasting, utilization heatmaps, and behavioral anomaly detection"
      ]
    },
    {
      id: 3,
      name: "Syndicate DataStorm",
      tagline: "Medallion Lakehouse Pipeline & Retail Demand Prediction",
      description: "Designed and deployed a Medallion Lakehouse ETL pipeline using PySpark and AWS S3, transforming 2.4M+ transaction records into a Star Schema with Parquet storage across 20,000+ retail outlets.",
      stack: ["PySpark", "Apache Spark", "AWS S3", "Medallion Architecture", "Star Schema", "Parquet", "OpenStreetMap API"],
      image: "/images/datastrom-lakehouse-archi.svg",
      github: "https://github.com/Max-i26/Syndicate_DataStrom",
      live: null,
      keyHighlights: [
        "Designed and deployed Medallion Lakehouse ETL pipeline using PySpark and AWS S3, transforming 2.4M+ records into Star Schema Parquet storage",
        "Built automated data quality gates enforcing referential integrity, deduplication, and schema validation, quarantining ~4.8% invalid records into Silver dead-letter tables",
        "Extracted geospatial Point-of-Interest (POI) data via OpenStreetMap API, generating spatial density features improving downstream retail demand forecasting RMSE by 18%"
      ]
    },
    {
      id: 4,
      name: "NLP-Based Emotion Detection Pipeline",
      tagline: "Transformer Classification Benchmarking & Imbalance Mitigation",
      description: "Engineered an end-to-end NLP classification pipeline benchmarking a TF-IDF baseline (0.76 F1) against fine-tuned BERT and DistilBERT transformer models, achieving a 0.88 Macro F1 on held-out test data.",
      stack: ["Python", "BERT", "DistilBERT", "MLflow", "SMOTE", "Scikit-learn", "Hugging Face Transformers", "PyTorch"],
      image: "/images/NLP.png",
      github: "https://github.com/Max-i26/NLP-Emotion-Detection",
      live: null,
      keyHighlights: [
        "Engineered end-to-end NLP classification pipeline benchmarking TF-IDF baseline (0.76 F1) against fine-tuned BERT and DistilBERT",
        "Tracked experiments and model versioning in MLflow; mitigated severe class imbalance across 20,000+ text samples using SMOTE to boost minority-class Recall by 24%",
        "Achieved a 0.88 Macro F1-score and 91.2% Weighted F1 on held-out test data, outperforming baseline models by 15.8% in multi-class classification"
      ]
    },
    {
      id: 5,
      name: "Friday",
      tagline: "Automated Machine Learning (AutoML) Pipeline & Diagnostic Agent",
      description: "Architected an automated machine learning (AutoML) pipeline containerized with Docker and powered by a FastAPI backend for autonomous data ingestion, dynamic feature encoding, and benchmark model selection.",
      stack: ["Python", "Scikit-learn", "XGBoost", "Docker", "FastAPI", "Google Generative AI", "Pandas"],
      image: "/images/food-picker.png",
      github: "https://github.com/Max-i26/Friday",
      live: null,
      keyHighlights: [
        "Architected AutoML pipeline containerized with Docker and powered by FastAPI backend for autonomous ingestion and dynamic encoding",
        "Built automated model benchmarking across XGBoost, LightGBM, and Random Forest models over 15+ benchmark datasets, cutting model selection time by 70%",
        "Integrated Google Generative AI (Gemini API) to automatically synthesize diagnostic analytical reports and performance interpretations in <3 seconds"
      ]
    },
    {
      id: 6,
      name: "Image-Based Emotion Detection",
      tagline: "Real-Time Facial Emotion Recognition & CNN Inference",
      description: "Engineered a real-time facial emotion recognition pipeline using OpenCV Haar Cascades for facial detection and a deep Convolutional Neural Network (CNN) across 35,000+ images (FER-2013), achieving 87.4% validation accuracy.",
      stack: ["Python", "OpenCV", "Deep Learning", "CNN", "Streamlit", "h5py"],
      image: "/images/Emotion-Detection.png",
      github: "https://github.com/Max-i26/emotion_detection",
      live: null,
      keyHighlights: [
        "Engineered real-time facial emotion recognition pipeline using OpenCV Haar Cascades for bounding-box localization and frame-level preprocessing",
        "Trained and optimized deep CNN across 35,000+ images (FER-2013), achieving 87.4% validation accuracy across 7 discrete emotional classes",
        "Built interactive Streamlit application supporting batch image analysis and live webcam streaming with <25ms real-time inference latency"
      ]
    },
    {
      id: 7,
      name: "BEE",
      tagline: "Hand Gesture-Controlled System Interface & Desktop Automation",
      description: "Built a touchless human-computer interaction (HCI) interface using MediaPipe Hands and OpenCV, tracking 21 3D hand landmarks from live webcam streams at 30+ FPS with <20ms latency and 96% recognition accuracy.",
      stack: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI", "Real-Time Computer Vision", "HCI"],
      image: "/images/Emotion-Detection.png",
      github: "https://github.com/Max-i26/Bee",
      live: null,
      keyHighlights: [
        "Built touchless HCI interface using MediaPipe Hands and OpenCV, tracking 21 3D hand landmarks from live webcam streams at 30+ FPS with <20ms latency",
        "Designed geometric coordinate classifier achieving 96% recognition accuracy across 7 discrete multi-finger gestures (browser navigation, media playback, sleep mode)",
        "Engineered asynchronous action dispatch engine using PyAutoGUI and system-level APIs for cross-platform desktop automation"
      ]
    },
    {
      id: 8,
      name: "F1 Super Intelligence System",
      tagline: "High-Performance Telemetry Precomputation & Batch ETL Pipeline",
      description: "Constructed a high-performance batch ETL pipeline aggregating and precomputing 1.2M+ Formula 1 telemetry data points across 24 Grand Prix rounds for sub-second dashboard rendering.",
      stack: ["Python", "Pandas", "Plotly", "Pytest", "Batch Processing", "Data Quality Auditing"],
      image: "/images/Portfolio.png",
      github: "https://github.com/Max-i26/F1-Super-Intelligence-System",
      live: null,
      keyHighlights: [
        "Constructed high-performance batch ETL pipeline aggregating and precomputing 1.2M+ F1 telemetry data points across 24 Grand Prix rounds",
        "Developed 56-test Pytest data auditing suite verifying sensor completeness, race strategies, and lap timing anomalies with 100% telemetry integrity coverage",
        "Built pace degradation and tire telemetry models rendering interactive Plotly dashboards, reducing analytical query response latency from 4.2s to <350ms"
      ]
    }
  ]
};
