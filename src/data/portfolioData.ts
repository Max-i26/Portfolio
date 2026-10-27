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
    rolePrefix: "AI/ML Engineer & Data Scientist Pioneering",
    rotatingKeywords: [
      "Machine Learning",
      "Deep Learning & NLP",
      "Data Pipelines & ETL",
      "Computer Vision",
      "Predictive Analytics",
    ],
    availability: {
      status: true,
      text: "Available for AI / ML & Data Engineering Internships",
    },
    shortBio:
      "Data Science undergraduate at Sabaragamuwa University of Sri Lanka specializing in Machine Learning, Deep Learning, Computer Vision, and scalable Data Engineering pipelines.",
    bioParagraphs: [
      "I'm Harol Maxilan (Maxi), an AI/ML Engineer, Data Scientist, and aspiring Data Engineer currently pursuing a B.Sc. (Hons) in Data Science at Sabaragamuwa University of Sri Lanka (Expected Graduation: 2028).",
      "My technical work focuses on developing end-to-end data pipelines, building transformer architectures for text classification, training computer vision emotion recognition models, and optimizing telemetry batch-processing workflows.",
      "Beyond technical engineering, I actively contribute as AWS Logistics and Operations Lead, IEEE INSL Ambassador, and student mentor, bringing leadership, collaboration, and high execution standards to every team."
    ],
    stats: [
      { value: "6+", label: "Hackathon Honors", subtext: "Winner & Finalist across Sri Lanka" },
      { value: "24+", label: "F1 Grand Prix Rounds", subtext: "Telemetry Audited & Precomputed" },
      { value: "56+", label: "Automated Tests", subtext: "Pytest Suite for Data Integrity" },
      { value: "2028", label: "Graduation Year", subtext: "BSc (Hons) Data Science @ SUSL" },
    ],
    education: {
      degree: "B.Sc. (Hons) in Data Science",
      institution: "Sabaragamuwa University of Sri Lanka (SUSL)",
      period: "Expected Graduation: 2028",
      description: "Comprehensive curriculum in Machine Learning, Deep Learning, Computer Vision, Big Data Architecture, Database Management, and Statistical Computing."
    },
    focusAreas: [
      {
        title: "Artificial Intelligence & Machine Learning",
        description: "Training and evaluating deep learning models, transformer NLP architectures (BERT, DistilBERT), and computer vision pipelines with PyTorch and Scikit-learn.",
        tags: ["PyTorch", "Hugging Face", "BERT / DistilBERT", "Scikit-learn", "Deep Learning"]
      },
      {
        title: "Data Science & Telemetry Analytics",
        description: "Designing statistical processing workflows, exploratory data analysis, and interactive Plotly visualizations to analyze driver pace, telemetry deltas, and consistency.",
        tags: ["Pandas", "Plotly", "Statistical Workflows", "EDA", "Data Auditing"]
      },
      {
        title: "Data Engineering & Batch Pipelines",
        description: "Developing robust batch-processing pipelines to aggregate, audit, and cache high-volume datasets with Pytest suites and FastAPI model endpoints.",
        tags: ["FastAPI", "Batch Processing", "Pytest (56 tests)", "ETL / Caching", "Data Integrity"]
      }
    ],
    cvUrl: "/Harol_Maxilan_CV.pdf",
    cvName: "Harol_Maxilan_CV.pdf",
    resumes: [
      {
        id: "harol-maxilan-cv",
        name: "Harol Maxilan — Comprehensive CV",
        description: "Unified technical CV combining Machine Learning, Deep Learning, Transformer NLP, Computer Vision, Data Engineering pipelines, and Academic Research.",
        fileName: "Harol_Maxilan_CV.pdf",
        url: "/Harol_Maxilan_CV.pdf",
        badge: "AI / ML & Data Science"
      }
    ],
  },

  socials: {
    linkedin: "https://www.linkedin.com/in/harol-maxilan-6b2b16253",
    github: "https://github.com/Max-i26",
    portfolioUrl: "https://max-i26.github.io/Portfolio",
    email: "maxilanharrol@gmail.com",
    location: "Sabaragamuwa / Vavuniya, Sri Lanka",
  },

  techStack: [
    {
      category: "Programming & Databases",
      items: ["Python", "SQL", "PHP", "TypeScript", "JavaScript", "MySQL", "PostgreSQL", "h5py"]
    },
    {
      category: "Machine Learning & Deep Learning",
      items: ["Scikit-learn", "PyTorch", "Deep Learning", "WeightedTrainer", "Label Smoothing", "Hyperparameter Tuning"]
    },
    {
      category: "NLP & Generative AI",
      items: ["Hugging Face", "Transformers", "BERT", "DistilBERT", "TF-IDF + Logistic Regression", "Google Generative AI"]
    },
    {
      category: "Computer Vision & Sensing",
      items: ["OpenCV", "Facial Image Processing", "Deep Learning Emotion Models", "HDF5 Model Weights"]
    },
    {
      category: "Data Science & Visualizations",
      items: ["Pandas", "NumPy", "Plotly", "Matplotlib", "Seaborn", "Statistical Workflows", "Telemetry Analytics"]
    },
    {
      category: "Data Engineering, Testing & Tools",
      items: ["FastAPI", "Batch Processing", "Data Auditing", "Pytest", "Streamlit", "Git / GitHub", "VS Code", "Jupyter"]
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
      role: "Pentathalon 2.0 Logistics Lead",
      period: "12/2023",
      organization: "AUSDAV, Vavuniya",
      location: "Vavuniya, Sri Lanka",
      isCurrent: false,
      description: "Managed end-to-end logistics, schedule synchronization, resource allocation, and team coordination for Pentathalon 2.0.",
      badge: "Logistics Lead"
    }
  ],

  awards: [
    {
      title: "Nexora Ideathon",
      placement: "3rd Place",
      institution: "Sabaragamuwa University of Sri Lanka"
    },
    {
      title: "Cipher Hackathon",
      placement: "Finalist",
      institution: "Informatics Institute of Technology (IIT)"
    },
    {
      title: "J'PuraXtreme 3.0 Hackathon",
      placement: "Finalist",
      institution: "University of Sri Jayewardenepura"
    },
    {
      title: "CodeRally 7.0 Hackathon",
      placement: "Finalist",
      institution: "Informatics Institute of Technology (IIT)"
    },
    {
      title: "Code Arena",
      placement: "Finalist",
      institution: "General Sir John Kotelawala Defence University (KDU)"
    },
    {
      title: "Lead Spring",
      placement: "Finalist",
      institution: "SLIIT"
    }
  ],

  projects: [
    {
      id: 1,
      name: "CareerCompass AI",
      tagline: "Multi-Agent AI Career Coaching & Skill Gap Analysis System",
      description: "Developed an autonomous multi-agent career navigation platform utilizing LLMs and NLP to analyze resumes, identify industry skill gaps, conduct interactive mock interviews, and dynamically generate personalized learning roadmaps.",
      stack: ["Python", "FastAPI", "React", "LangChain", "Groq API", "Tailwind CSS"],
      image: "/images/Craeer-Compass-AI.png",
      github: "https://github.com/Max-i26",
      live: null,
      keyHighlights: [
        "Orchestrated multi-agent pipeline integrating resume parsing, taxonomy-based skill gap detection, and job matching",
        "Adaptive feedback loop that recalibrates learning roadmaps based on real-time mock interview answer evaluation",
        "Modern full-stack web application featuring a FastAPI REST backend, SQLite session store, and a responsive React interface"
      ]
    },
    {
      id: 2,
      name: "NEXLAB",
      tagline: "Intelligent University Resource Allocation & Predictive Analytics",
      description: "Developed a smart university resource management system that automates lab and equipment bookings using priority-based allocation, conflict resolution, and predictive demand analytics.",
      stack: ["PHP", "MySQL", "JavaScript", "HTML/CSS", "Predictive Analytics", "Data Visualization"],
      image: "/images/Nex-Lab.jpg",
      github: "https://github.com/sankajithdjinasena/NEXLAB",
      live: null,
      keyHighlights: [
        "Priority-based booking engine with automated conflict resolution, fair resource allocation, and waitlist management",
        "Intelligence dashboard featuring 7-day resource demand forecasting and behavioral activity monitoring",
        "Role-based access control, booking analytics, and automated email notifications for streamlined resource management"
      ]
    },
    {
      id: 3,
      name: "F1 Super Intelligence System",
      tagline: "Data Analytics & Precomputation Pipeline",
      description: "Developed a batch-processing pipeline to aggregate and cache Formula 1 telemetry datasets, supporting sub-second rendering for interactive analytical dashboards.",
      stack: ["Python", "Pandas", "Plotly", "Pytest", "Batch Processing", "Data Auditing"],
      image: "/images/Portfolio.png",
      github: "https://github.com/Max-i26/F1-Super-Intelligence-System",
      live: null,
      keyHighlights: [
        "Batch-processing pipeline aggregating & caching F1 telemetry for sub-second dashboard rendering",
        "Dataset completeness auditing across 24 rounds with a 56-test Pytest suite covering anomalies & race strategies",
        "Statistical processing workflows to analyze driver pace, telemetry deltas, and consistency via interactive Plotly charts"
      ]
    },
    {
      id: 4,
      name: "Image-Based Emotion Detection",
      tagline: "Computer Vision & Deep Learning Emotion Recognition",
      description: "Developed a computer vision-based emotion recognition system utilizing OpenCV for facial image processing and deep learning models to recognize multiple human emotional expressions.",
      stack: ["Python", "OpenCV", "Deep Learning", "Streamlit", "h5py"],
      image: "/images/Emotion-Detection.png",
      github: "https://github.com/Max-i26/emotion_detection",
      live: null,
      keyHighlights: [
        "Computer vision facial image processing pipeline built with OpenCV",
        "Deep learning model trained to recognize multiple facial expressions with weights stored in HDF5 format",
        "Interactive web application deployed with Streamlit facilitating real-time and image-based emotion inference"
      ]
    },
    {
      id: 5,
      name: "BEE — Hand Gesture-Controlled System Interface",
      tagline: "Touchless Human-Computer Interaction & Real-Time Computer Vision",
      description: "Built a touchless human-computer interaction (HCI) interface using MediaPipe Hands and OpenCV, tracking 21 3D hand landmarks from live webcam streams at 30+ FPS with <20ms latency to control desktop navigation and application workflows.",
      stack: ["Python", "MediaPipe", "OpenCV", "PyAutoGUI", "Real-Time Computer Vision", "HCI"],
      image: "/images/bee-gesture.png",
      github: "https://github.com/Max-i26/Bee",
      live: null,
      keyHighlights: [
        "Touchless HCI interface using MediaPipe Hands & OpenCV tracking 21 3D hand landmarks at 30+ FPS with <20ms latency",
        "Geometric coordinate classifier achieving 96% recognition accuracy across 7 discrete multi-finger gestures (browser navigation, tab switching, media playback)",
        "Asynchronous action dispatch engine using PyAutoGUI and system-level APIs for cross-platform desktop automation"
      ]
    },
    {
      id: 6,
      name: "Friday",
      tagline: "Automated Machine Learning Pipeline",
      description: "Developed an automated machine learning pipeline with a FastAPI backend to support data-driven predictive modelling, automated preprocessing, and generative insights.",
      stack: ["Python", "Pandas", "Scikit-learn", "FastAPI", "Google Generative AI"],
      image: "/images/food-picker.png",
      github: "https://github.com/Max-i26/Friday",
      live: null,
      keyHighlights: [
        "Automated ML pipeline with high-throughput FastAPI backend for predictive modeling",
        "Data-processing workflows using Pandas and Scikit-learn transforming raw data into statistical analyses",
        "Integrated Google Generative AI to generate structured analytical reports from processed data"
      ]
    },
    {
      id: 7,
      name: "NLP-Based Emotion Detection Pipeline",
      tagline: "Transformer Architectures & Imbalance Handling",
      description: "Developed an end-to-end NLP pipeline for text classification, implementing a baseline TF-IDF + Logistic Regression model alongside advanced transformer architectures (BERT, DistilBERT).",
      stack: ["Python", "Scikit-learn", "Hugging Face", "Transformers", "BERT", "DistilBERT"],
      image: "/images/NLP.png",
      github: "https://github.com/Max-i26/NLP-Emotion-Detection",
      live: null,
      keyHighlights: [
        "End-to-end NLP pipeline comparing TF-IDF + Logistic Regression with fine-tuned BERT and DistilBERT",
        "Advanced class imbalance mitigation with custom WeightedTrainer, class weights, and label smoothing",
        "Rigorous unseen test evaluation with Precision, Recall, Macro F1, and Weighted F1 metrics"
      ]
    }
  ]
};
