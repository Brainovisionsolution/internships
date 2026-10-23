import React, { useState } from 'react';
import { 
  Code, 
  Database, 
  Cloud, 
  Rocket, 
  ChevronLeft, 
  ChevronRight, 
  Zap, 
  BrainCircuit, 
  Globe, 
  LineChart, 
  Lock, 
  Sparkles,
  ExternalLink
} from 'lucide-react';

const HybridProjects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const hybridProjects = [
    {
      title: "Multi-Tenant Enterprise SaaS Platform (MERN)",
      category: "Full Stack Web Development",
      description: "Build a production-grade multi-tenant web application featuring role-based access control (RBAC), subscription billing, and real-time dashboard analytics with full Docker and cloud deployment.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1260",
      skills: ["React 18", "Node.js", "Express", "MongoDB Atlas", "Docker", "JWT", "TailwindCSS"],
      icon: <Code className="text-white" size={30} />,
      scope: "Full Stack SaaS Architecture",
      duration: "4 Weeks",
      impact: "Production Deployment on AWS / Vercel"
    },
    {
      title: "AI-Powered Document RAG Assistant",
      category: "Full Stack with AI",
      description: "Architect a Retrieval-Augmented Generation platform where users upload PDFs, documents, or knowledge bases and query them with semantic similarity search and streaming generative answers.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1260",
      skills: ["Next.js", "LangChain", "OpenAI / Gemini API", "ChromaDB", "Python FastAPI", "Embeddings"],
      icon: <Zap className="text-white" size={30} />,
      scope: "RAG & Vector Search",
      duration: "4 Weeks",
      impact: "Zero-Hallucination Document Q&A"
    },
    {
      title: "Customer Churn & Lifetime Value Machine Learning Pipeline",
      category: "Data Science & AI",
      description: "Perform end-to-end exploratory data analysis, feature engineering, and train ensemble models (XGBoost & LightGBM) to forecast customer churn and calculate lifetime value with interactive dashboards.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1260",
      skills: ["Python", "Pandas", "Scikit-Learn", "XGBoost", "FastAPI", "Streamlit", "Plotly"],
      icon: <BrainCircuit className="text-white" size={30} />,
      scope: "Predictive Analytics",
      duration: "3 Weeks",
      impact: "94.2% ROC-AUC Prediction Accuracy"
    },
    {
      title: "AI-Automated Omnichannel Growth & Marketing Engine",
      category: "Digital Marketing with AI",
      description: "Build high-converting growth funnels utilizing Generative AI copywriting, programmatic SEO landing pages, GA4 multi-touch attribution, and automated email lead nurture workflows.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1260",
      skills: ["Google Analytics 4", "SEMrush", "Make.com Automation", "Meta Ads", "A/B Testing", "AI Copy"],
      icon: <Globe className="text-white" size={30} />,
      scope: "Growth Marketing Funnel",
      duration: "3 Weeks",
      impact: "3.8x Conversion Rate Lift"
    },
    {
      title: "Real-Time Collaborative Workspace (WebSockets)",
      category: "Full Stack Web Development",
      description: "Develop a live collaborative workspace application with real-time cursor tracking, document synchronization, and instant messaging powered by Socket.io and Redis caching.",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1260",
      skills: ["React", "Node.js", "Socket.io", "Redis", "MongoDB", "Express"],
      icon: <Cloud className="text-white" size={30} />,
      scope: "Real-Time Systems",
      duration: "3 Weeks",
      impact: "<50ms Low-Latency Sync"
    },
    {
      title: "Deep Learning Medical Imaging Diagnostic Classifier",
      category: "Artificial Intelligence (Python)",
      description: "Train a Convolutional Neural Network with PyTorch using transfer learning on medical imaging datasets. Expose REST endpoints via FastAPI for real-time inference with Grad-CAM heatmaps.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1260",
      skills: ["PyTorch", "TorchVision", "FastAPI", "Docker", "Grad-CAM", "NumPy"],
      icon: <LineChart className="text-white" size={30} />,
      scope: "Deep Learning Computer Vision",
      duration: "4 Weeks",
      impact: "Published GitHub Portfolio Code"
    }
  ];

  const nextProject = () => {
    setActiveIndex((prev) => (prev === hybridProjects.length - 1 ? 0 : prev + 1));
  };

  const prevProject = () => {
    setActiveIndex((prev) => (prev === 0 ? hybridProjects.length - 1 : prev - 1));
  };

  const project = hybridProjects[activeIndex];

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/40 via-gray-900 to-black z-0"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center bg-teal-500/20 text-teal-300 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border border-teal-500/30">
            <Rocket size={14} className="mr-1.5" />
            Hybrid Capstone Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            Real-World Hybrid Capstone Projects
          </h2>
          <p className="text-base md:text-lg text-gray-300">
            Every hybrid intern builds and deploys production-grade systems ready to showcase on GitHub and in technical interviews.
          </p>
        </div>

        {/* Featured Project Carousel Card */}
        <div className="max-w-5xl mx-auto bg-gray-800/80 rounded-3xl border border-gray-700/60 overflow-hidden shadow-2xl backdrop-blur-sm mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Panel */}
            <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              
              <div className="absolute top-4 left-4">
                <span className="bg-teal-600 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
                  {project.category}
                </span>
              </div>

              <div className="absolute bottom-6 left-6 right-6">
                <div className="w-12 h-12 rounded-xl bg-teal-500/90 flex items-center justify-center mb-3 shadow-lg">
                  {project.icon}
                </div>
                <div className="text-xs text-teal-300 font-semibold tracking-wide uppercase">
                  {project.scope} • {project.duration}
                </div>
              </div>
            </div>

            {/* Content Panel */}
            <div className="lg:col-span-7 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest">
                    Project 0{activeIndex + 1} of 0{hybridProjects.length}
                  </span>
                  <span className="text-xs font-semibold bg-emerald-500/20 text-emerald-400 px-3 py-1 rounded-full border border-emerald-500/30">
                    {project.impact}
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white leading-tight">
                  {project.title}
                </h3>

                <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">
                    Technologies Mastered:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="bg-gray-700/60 text-teal-300 border border-teal-500/30 text-xs font-medium px-3 py-1 rounded-lg"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Navigation Controls */}
              <div className="flex items-center justify-between pt-6 border-t border-gray-700/60">
                <div className="flex items-center gap-2">
                  {hybridProjects.map((_, dotIdx) => (
                    <button
                      key={dotIdx}
                      onClick={() => setActiveIndex(dotIdx)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeIndex === dotIdx ? 'w-8 bg-teal-400' : 'w-2.5 bg-gray-600 hover:bg-gray-500'
                      }`}
                      aria-label={`Go to slide ${dotIdx + 1}`}
                    />
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={prevProject}
                    className="w-10 h-10 rounded-xl bg-gray-700 hover:bg-gray-600 flex items-center justify-center transition duration-200"
                    aria-label="Previous project"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextProject}
                    className="w-10 h-10 rounded-xl bg-teal-600 hover:bg-teal-500 flex items-center justify-center transition duration-200"
                    aria-label="Next project"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href="https://rzp.io/rzp/8KPMtnd"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-emerald-500 hover:from-teal-400 hover:to-emerald-400 text-gray-950 font-bold px-8 py-3.5 rounded-xl shadow-lg transition duration-300 text-sm"
          >
            Build These Projects in Hybrid Internship @ ₹6,000
          </a>
        </div>
      </div>
    </section>
  );
};

export default HybridProjects;
