import React, { useState } from 'react';
import { BookOpen, ChevronDown, Code, Zap, BrainCircuit, Globe, Sparkles, CheckCircle, Terminal } from 'lucide-react';

interface Module {
  title: string;
  duration: string;
  description: string;
  topics: string[];
  tools: string[];
}

const HybridCurriculum: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<'mern' | 'ai_fullstack' | 'ai_python' | 'digital'>('mern');
  const [openModule, setOpenModule] = useState<number | null>(0);

  const mernModules: Module[] = [
    {
      title: "Module 1: Modern Frontend Architecture with React & TypeScript",
      duration: "Weeks 1 - 3",
      description: "Master component design patterns, custom hooks, context state management, and high-performance UI workflows.",
      topics: [
        "Advanced React architecture & Component lifecycle",
        "TypeScript integration, interfaces, and strict type safety",
        "Tailwind CSS styling and responsive dashboard design",
        "State management with Redux Toolkit and React Query"
      ],
      tools: ["React 18", "TypeScript", "TailwindCSS", "Redux Toolkit"]
    },
    {
      title: "Module 2: Scalable Backend Services with Node.js & Express",
      duration: "Weeks 4 - 6",
      description: "Build robust REST APIs with asynchronous micro-patterns, security layers, JWT auth, and middleware architectures.",
      topics: [
        "Event loop, asynchronous patterns, and streams in Node.js",
        "Express router design, custom middleware, and error handling",
        "JWT authentication, role-based access control (RBAC), and bcrypt",
        "API rate limiting, CORS configuration, and security headers"
      ],
      tools: ["Node.js", "Express.js", "JWT", "Postman"]
    },
    {
      title: "Module 3: Database Engineering with MongoDB & Mongoose",
      duration: "Weeks 7 - 9",
      description: "Design production-ready data schemas, index strategies, transaction rollbacks, and aggregation pipelines.",
      topics: [
        "Schema design, validation, and relationships in NoSQL",
        "Complex aggregation pipelines ($lookup, $facet, $group)",
        "Database indexing, query profiling, and optimization",
        "Connection pooling and distributed cluster configuration"
      ],
      tools: ["MongoDB Atlas", "Mongoose ODM", "Compass"]
    },
    {
      title: "Module 4: Full Stack Integration, Testing & Cloud Deployment",
      duration: "Weeks 10 - 12",
      description: "Connect frontend and backend into an enterprise SaaS application, write unit tests, and deploy using Docker on AWS/Vercel.",
      topics: [
        "End-to-end API integration and optimistic UI updates",
        "Unit testing with Vitest and integration testing",
        "Docker containerization (multi-stage builds)",
        "CI/CD workflows and deployment on Vercel and Render"
      ],
      tools: ["Docker", "Vercel", "GitHub Actions", "Vitest"]
    }
  ];

  const aiFullStackModules: Module[] = [
    {
      title: "Module 1: Full Stack Foundations with Modern Web Frameworks",
      duration: "Weeks 1 - 3",
      description: "Build modern web applications with React, Next.js, and server-side components ready for AI integration.",
      topics: [
        "Next.js App Router and server-rendered components",
        "Modern API routing and streaming response endpoints",
        "Component libraries and interactive AI playground UI",
        "Authentication and user workspace management"
      ],
      tools: ["Next.js", "React", "TailwindCSS", "TypeScript"]
    },
    {
      title: "Module 2: LLM API Integration & Prompt Engineering",
      duration: "Weeks 4 - 6",
      description: "Integrate top-tier commercial LLMs (OpenAI, Gemini, Claude) into web backends with streaming responses.",
      topics: [
        "OpenAI API, Google Gemini Pro & Claude 3.5 API integration",
        "Streaming responses using Server-Sent Events (SSE)",
        "Structured outputs with JSON schema enforcement and Pydantic",
        "Prompt engineering patterns (Chain-of-Thought, Few-Shot)"
      ],
      tools: ["OpenAI API", "Google AI Studio", "Anthropic Claude"]
    },
    {
      title: "Module 3: Retrieval-Augmented Generation (RAG) Architecture",
      duration: "Weeks 7 - 9",
      description: "Build enterprise RAG pipelines that allow users to upload private PDFs/documents and chat with them in real time.",
      topics: [
        "Document ingestion, chunking algorithms, and tokenization",
        "Dense vector embeddings and semantic search mechanics",
        "Vector databases: ChromaDB and Pinecone integration",
        "Re-ranking algorithms and hallucination mitigation"
      ],
      tools: ["LangChain", "ChromaDB", "Pinecone", "Sentence-Transformers"]
    },
    {
      title: "Module 4: Autonomous Agents & Production Deployment",
      duration: "Weeks 10 - 12",
      description: "Develop multi-step autonomous agents with function calling and tool invocation, fully containerized and cloud-deployed.",
      topics: [
        "Agent architectures with CrewAI and LangGraph",
        "Tool invocation, web search integration, and Python code execution",
        "Production observability and latency monitoring",
        "Deploying AI web apps to AWS and Vercel"
      ],
      tools: ["CrewAI", "LangGraph", "Docker", "AWS"]
    }
  ];

  const aiPythonModules: Module[] = [
    {
      title: "Module 1: Advanced Python & High-Performance Data Analysis",
      duration: "Weeks 1 - 3",
      description: "Deep dive into OOP in Python, vectorized numerical computing, data wrangling, and exploratory analytics.",
      topics: [
        "Python generators, decorators, memory management & OOP",
        "High-performance vectorized math with NumPy",
        "Data cleaning, reshaping, and feature engineering with Pandas",
        "Interactive exploratory visualizations with Seaborn and Plotly"
      ],
      tools: ["Python 3.11", "NumPy", "Pandas", "Plotly"]
    },
    {
      title: "Module 2: Classical Machine Learning & Predictive Modeling",
      duration: "Weeks 4 - 6",
      description: "Implement supervised and unsupervised machine learning algorithms for real-world enterprise predictions.",
      topics: [
        "Regression models, Regularization (Lasso/Ridge), and Feature Selection",
        "Classification: Random Forests, Gradient Boosted Trees (XGBoost, LightGBM)",
        "Unsupervised clustering (K-Means, DBSCAN) and PCA dimension reduction",
        "Model evaluation metrics (ROC-AUC, Precision-Recall, F1-Score)"
      ],
      tools: ["Scikit-Learn", "XGBoost", "LightGBM", "JupyterLab"]
    },
    {
      title: "Module 3: Deep Learning Architectures with PyTorch",
      duration: "Weeks 7 - 9",
      description: "Design artificial neural networks, convolutional networks for computer vision, and sequence models.",
      topics: [
        "PyTorch computational graphs, autograd, and backpropagation",
        "Convolutional Neural Networks (CNNs) for image classification",
        "Recurrent networks (LSTMs, GRUs) and sequence modeling",
        "Transfer learning with pre-trained ResNet and EfficientNet"
      ],
      tools: ["PyTorch", "TorchVision", "Google Colab GPU"]
    },
    {
      title: "Module 4: Generative AI, Transformers & Model Deployment",
      duration: "Weeks 10 - 12",
      description: "Master modern Transformer mechanics, Hugging Face transformers, fine-tuning, and FastAPI deployment.",
      topics: [
        "Self-attention mechanism and Transformer encoder-decoder architecture",
        "Hugging Face models for NLP: BERT, RoBERTa, and LLaMA",
        "Parameter-efficient fine-tuning (PEFT/LoRA)",
        "Packaging ML models into REST endpoints using FastAPI and Docker"
      ],
      tools: ["Hugging Face", "FastAPI", "Docker", "PyTorch"]
    }
  ];

  const digitalModules: Module[] = [
    {
      title: "Module 1: Search Engine Optimization (SEO) & Web Architecture",
      duration: "Weeks 1 - 3",
      description: "Technical SEO audits, keyword research, on-page optimization, and organic traffic growth tactics.",
      topics: [
        "On-page, Off-page, and Technical SEO foundations",
        "Keyword research, competitor analysis, and search intent mapping",
        "Core Web Vitals, site speed optimization, and structured schema",
        "Google Search Console, Google Analytics 4 (GA4) configuration"
      ],
      tools: ["GA4", "Search Console", "SEMrush", "Ahrefs"]
    },
    {
      title: "Module 2: Performance Marketing & Paid Advertising",
      duration: "Weeks 4 - 6",
      description: "Run ROI-positive ad campaigns across Google Ads, Meta Ads (Instagram/Facebook), and LinkedIn Ads.",
      topics: [
        "Google Search, Display & Video (YouTube) advertising campaigns",
        "Meta Ads Manager: Audience targeting, lookalikes, and pixel setup",
        "LinkedIn B2B lead generation funnels",
        "A/B testing ad creatives, copy, and landing page conversions"
      ],
      tools: ["Google Ads", "Meta Ads Manager", "LinkedIn Ads", "Canva Pro"]
    },
    {
      title: "Module 3: AI-Powered Content Marketing & Automation",
      duration: "Weeks 7 - 9",
      description: "Leverage Generative AI tools to scale high-converting content, copy, video scripts, and marketing workflows.",
      topics: [
        "AI copywriting workflows using ChatGPT, Claude, and Jasper",
        "AI graphic and video creation with Midjourney and RunwayML",
        "Automated marketing funnels with Make.com and Zapier",
        "Social media scheduling and viral distribution algorithms"
      ],
      tools: ["ChatGPT Plus", "Midjourney", "Make.com", "Zapier"]
    },
    {
      title: "Module 4: Growth Hacking, Email Automation & Analytics",
      duration: "Weeks 10 - 12",
      description: "Master conversion rate optimization (CRO), automated email nurture sequences, and executive reporting.",
      topics: [
        "Email marketing automation sequences and list segmentation",
        "Conversion rate optimization (CRO) and heatmaps with Hotjar",
        "Multi-touch attribution modeling and CAC vs LTV analytics",
        "Presenting data-driven digital marketing audits to stakeholders"
      ],
      tools: ["Mailchimp", "Hotjar", "Looker Studio", "GA4"]
    }
  ];

  const getCurrentModules = () => {
    switch (activeTrack) {
      case 'mern': return mernModules;
      case 'ai_fullstack': return aiFullStackModules;
      case 'ai_python': return aiPythonModules;
      case 'digital': return digitalModules;
      default: return mernModules;
    }
  };

  const tracks = [
    { id: 'mern', name: 'MERN Full Stack', icon: <Code size={18} /> },
    { id: 'ai_fullstack', name: 'Full Stack with AI', icon: <Zap size={18} /> },
    { id: 'ai_python', name: 'AI & Data Science (Python)', icon: <BrainCircuit size={18} /> },
    { id: 'digital', name: 'Digital Marketing with AI', icon: <Globe size={18} /> },
  ];

  const currentModules = getCurrentModules();

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center bg-teal-50 text-teal-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border border-teal-100">
            <BookOpen size={14} className="mr-1.5" />
            Structured 3-Month Syllabus
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Hybrid Internship Curriculum
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Engineered by industry practitioners combining practical engineering standards with flexible learning.
          </p>
        </div>

        {/* Track Switcher Tabs */}
        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto mb-12">
          {tracks.map((track) => (
            <button
              key={track.id}
              onClick={() => {
                setActiveTrack(track.id as any);
                setOpenModule(0);
              }}
              className={`flex items-center gap-2 px-5 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                activeTrack === track.id
                  ? 'bg-gradient-to-r from-teal-700 to-emerald-700 text-white shadow-lg shadow-teal-700/20 scale-105'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-200'
              }`}
            >
              {track.icon}
              {track.name}
            </button>
          ))}
        </div>

        {/* Modules Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {currentModules.map((module, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm hover:border-teal-300 transition-all duration-200"
            >
              <button
                onClick={() => setOpenModule(openModule === idx ? null : idx)}
                className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-none"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 font-bold flex items-center justify-center flex-shrink-0 text-sm border border-teal-100">
                    0{idx + 1}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-teal-700 uppercase tracking-wider mb-1">
                      {module.duration}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-snug">
                      {module.title}
                    </h3>
                  </div>
                </div>
                <ChevronDown
                  size={20}
                  className={`text-gray-400 transition-transform duration-300 flex-shrink-0 ${
                    openModule === idx ? 'rotate-180 text-teal-600' : ''
                  }`}
                />
              </button>

              {openModule === idx && (
                <div className="px-6 pb-6 pt-2 border-t border-gray-100 bg-gray-50/50">
                  <p className="text-gray-600 text-sm mb-5 leading-relaxed">{module.description}</p>
                  
                  <div className="mb-5">
                    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-3">Key Topics Covered:</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                      {module.topics.map((topic, tidx) => (
                        <div key={tidx} className="flex items-start gap-2 text-xs md:text-sm text-gray-700">
                          <CheckCircle size={15} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-bold text-gray-700 uppercase tracking-wider mb-2">Technologies & Libraries:</h4>
                    <div className="flex flex-wrap gap-2">
                      {module.tools.map((tool, toolIdx) => (
                        <span
                          key={toolIdx}
                          className="bg-white border border-gray-200 text-teal-800 text-xs font-semibold px-3 py-1 rounded-lg"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Syllabus Download Banner */}
        <div className="mt-12 text-center">
          <a
            href="https://rzp.io/rzp/8KPMtnd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-700 to-emerald-700 hover:from-teal-800 hover:to-emerald-800 text-white font-bold px-8 py-3.5 rounded-xl shadow-lg transition duration-300 text-sm"
          >
            <Terminal size={18} />
            Enroll in This Hybrid Curriculum @ ₹6,000
          </a>
        </div>
      </div>
    </section>
  );
};

export default HybridCurriculum;
