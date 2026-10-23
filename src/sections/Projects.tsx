import React, { useState } from 'react';
import { Cpu, ChevronLeft, ChevronRight, Rocket, Globe, Brain, Database, Cloud, Shield, Code, LineChart, Zap, Bot, MessageSquare, Search, FileText, Sparkles, Workflow, Film } from 'lucide-react';

interface ProjectsProps {
  isOnline: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isOnline }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Generic Online Projects
  const onlineProjects = [
    {
      title: "End-to-End Applications",
      description: "Build full-fledged applications from scratch in your chosen technology stack (MERN, Java, etc.). Understand frontend-backend integration, database design, and API connections.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1260",
      skills: ["Full Stack Development", "API Design", "Database Modeling", "Deployment"],
      icon: <Code className="text-white" size={32} />,
      scope: "Full Application Stack",
      duration: "4 Weeks",
      impact: "Production Grade Deployment"
    },
    {
      title: "Data Analysis & ML Models",
      description: "Extract, process, and perform predictive analytics on large datasets using Python, ML algorithms, or Deep Learning frameworks. Built on real-world datasets.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1260",
      skills: ["Python", "Pandas", "Scikit-Learn", "TensorFlow", "Data Visualization"],
      icon: <LineChart className="text-white" size={32} />,
      scope: "Data Science & ML",
      duration: "3 Weeks",
      impact: "High Accuracy Prediction"
    },
    {
      title: "Cloud Infrastructure Setup",
      description: "Architect and deploy scalable infrastructure on AWS leveraging containerization and orchestration. Build Jenkins CI/CD pipelines to fully automate testing and deployment.",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1260",
      skills: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
      icon: <Cloud className="text-white" size={32} />,
      scope: "DevOps Pipeline",
      duration: "3 Weeks",
      impact: "100% Automated Deployments"
    },
    {
      title: "Penetration Testing & Security Audit",
      description: "Perform comprehensive ethical hacking and vulnerability analysis on web applications and networks. Create professional patch management and remediation reports.",
      image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff0f?auto=format&fit=crop&w=1260",
      skills: ["Ethical Hacking", "Kali Linux", "Vulnerability Scanning", "Network Sec"],
      icon: <Shield className="text-white" size={32} />,
      scope: "Cyber Security",
      duration: "3 Weeks",
      impact: "Zero-Day Hardening"
    },
    {
      title: "IoT Sensor Dashboard",
      description: "Connect Arduino/Raspberry Pi sensors to cloud platforms. Display real-time analytics on a web dashboard and perform automated device control protocols.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1260",
      skills: ["Arduino", "Raspberry Pi", "IoT Protocols", "Data Streaming"],
      icon: <Cpu className="text-white" size={32} />,
      scope: "IoT Architecture",
      duration: "4 Weeks",
      impact: "Real-time Device Control"
    }
  ];

  const offlineProjects = [
    {
      title: "Autonomous Multi-Agent Research System",
      description: "Assemble a coordinated team of autonomous specialized AI agents using CrewAI and LangGraph. The agents autonomously research topics, formulate hypotheses, browse live web tools, verify facts, and produce publication-ready technical reports.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1260",
      skills: ["CrewAI", "LangGraph", "Multi-Agent Systems", "Tool Calling", "Memory Architecture"],
      icon: <Bot className="text-white" size={32} />,
      scope: "Agentic AI Capstone",
      duration: "2 & 3 Months",
      impact: "Automated multi-step task execution"
    },
    {
      title: "Domain-Specific Enterprise RAG Assistant",
      description: "Build a production-ready RAG (Retrieval-Augmented Generation) chatbot for enterprise documentation. Implement document chunking, embedding generation, vector search using FAISS, and streaming LLM responses with zero hallucination.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=1260",
      skills: ["RAG Pipelines", "LangChain", "FAISS", "Sentence-BERT", "LLM APIs", "Evaluation Metrics"],
      icon: <MessageSquare className="text-white" size={32} />,
      scope: "Agentic AI Capstone",
      duration: "2 & 3 Months",
      impact: "95% context retrieval precision"
    },
    {
      title: "Small Language Model (SLM) Fine-Tuning",
      description: "Fine-tune an open-source SLM (Phi-3, Mistral, or Llama) using LoRA/QLoRA techniques on domain-specific datasets. Train the model to adopt a specialized persona and evaluate inference speed on edge devices.",
      image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1260",
      skills: ["LoRA/QLoRA", "HuggingFace", "PyTorch", "Model Fine-tuning", "GPU Optimization"],
      icon: <Brain className="text-white" size={32} />,
      scope: "Agentic AI Capstone",
      duration: "2 & 3 Months",
      impact: "40% better domain accuracy"
    },
    {
      title: "Full-Stack Enterprise SaaS Platform with Python & React",
      description: "Develop a full-featured multi-tenant SaaS application from scratch. Build robust RESTful APIs with FastAPI/Django, modern interactive dashboard with React.js & Tailwind, and deploy via Docker containers.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1260",
      skills: ["Python", "FastAPI", "React.js", "PostgreSQL", "Docker", "Tailwind CSS"],
      icon: <Code className="text-white" size={32} />,
      scope: "Python Full Stack Capstone",
      duration: "2 & 3 Months",
      impact: "Scalable microservices architecture"
    },
    {
      title: "Automated AI Code Reviewer & Bug-Fixing Agent",
      description: "Build a developer assistant agent in Python that parses abstract syntax trees (AST), reviews pull requests, detects vulnerabilities, suggests optimizations, and generates automated unit tests.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1260",
      skills: ["Python AST", "Django REST", "LLM Code Agent", "GitHub Actions CI/CD"],
      icon: <Workflow className="text-white" size={32} />,
      scope: "Python & AI Integration",
      duration: "2 & 3 Months",
      impact: "Automated test & code security audits"
    },
    {
      title: "E-Commerce Microservices Engine with PostgreSQL & Redis",
      description: "Architect high-performance backend microservices with Django REST Framework, relational data modeling in PostgreSQL, in-memory caching with Redis, and payment gateway webhooks.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1260",
      skills: ["Django", "PostgreSQL", "Redis Caching", "Payment Gateway", "Docker Compose"],
      icon: <Database className="text-white" size={32} />,
      scope: "Python Full Stack Capstone",
      duration: "2 & 3 Months",
      impact: "Handles 10,000+ simulated requests/sec"
    }
  ];

  const projects = isOnline ? onlineProjects : offlineProjects;
  const themeColor = isOnline ? 'purple' : 'purple';

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl mb-6 shadow-lg">
            <Rocket size={32} className="text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              {isOnline ? 'Industry Capstone Projects' : 'Offline Internship Capstone Projects'}
            </span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            {isOnline 
              ? 'Build full-fledged, real-world portfolio projects focused on your chosen technology track to prepare for modern careers.' 
              : 'Build tangible, production-grade applications in Agentic AI and Python Full Stack to prove your capability to top employers.'}
          </p>
        </div>
        
        <div className="relative max-w-6xl mx-auto">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            <div 
              className="flex transition-transform duration-700 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-3 gap-0 bg-gradient-to-br from-gray-900 to-black">
                    {/* Left Column - Image */}
                    <div className="lg:col-span-2 relative min-h-[500px]">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover absolute inset-0"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent flex flex-col justify-end p-6 md:p-8">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`p-3 rounded-lg bg-gradient-to-br ${isOnline ? 'from-blue-500 to-indigo-600' : 'from-purple-500 to-pink-600'} shadow-lg`}>
                            {project.icon}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 mb-4">
                          <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2">
                            <div className="text-xs text-gray-300">Scope</div>
                            <div className="text-white font-bold">{project.scope}</div>
                          </div>
                          <div className="bg-black/60 backdrop-blur-sm rounded-xl px-4 py-2">
                            <div className="text-xs text-gray-300">Duration</div>
                            <span className="text-sm font-medium text-white">{project.duration}</span>
                          </div>
                          <div className="flex items-center text-white/80 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm border border-white/10">
                            <Rocket size={18} className={`mr-2 ${isOnline ? 'text-indigo-400' : 'text-pink-400'}`} />
                            <span className="text-sm font-medium">{project.impact}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Column - Content */}
                    <div className="bg-gradient-to-b from-gray-900 to-black p-8 lg:p-10">
                      <div className="mb-6">
                        <span className={`inline-block px-3 py-1 bg-gradient-to-r ${isOnline ? 'from-blue-500 to-blue-600' : 'from-purple-500 to-purple-600'} text-xs font-semibold rounded-full shadow-sm text-white`}>
                          Industry Project
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold text-white mt-1 mb-4 leading-tight">
                          {project.title}
                        </h3>
                        <p className="text-gray-300 text-sm md:text-base mb-6 max-w-2xl leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      <div className="mt-auto">
                        <h4 className="text-sm font-medium text-gray-400 mb-4 tracking-wide uppercase">Technologies & Techniques:</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className="px-4 py-2 border border-gray-700 bg-gray-800 text-gray-200 text-sm font-medium rounded-lg hover:shadow-md hover:border-purple-500 hover:text-white transition-all cursor-default"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                        
                        <div className="mt-10 pt-8 border-t border-gray-800">
                          <div className="flex items-center justify-between">
                            <div className="text-gray-400">
                              Project {index + 1} of {projects.length}
                            </div>
                            <div className="flex items-center space-x-4">
                              <button 
                                onClick={prevProject}
                                className="h-12 w-12 bg-black/40 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-black/60 transition-all duration-300 border border-gray-800"
                              >
                                <ChevronLeft size={20} className="text-white" />
                              </button>
                              <button 
                                onClick={nextProject}
                                className="h-12 w-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg"
                              >
                                <ChevronRight size={20} className="text-white" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Bottom Navigation */}
          <div className="mt-8 flex flex-col items-center">
            <div className="flex space-x-3 mb-4">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-3 rounded-full transition-all duration-500 ${
                    activeIndex === index 
                      ? 'w-10 bg-gradient-to-r from-purple-600 to-pink-600' 
                      : 'w-3 bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
            <div className="text-gray-600 text-sm">
              <span className="font-medium">{projects.length}</span> Major Capstone Projects • Industry-Ready Portfolio
            </div>
          </div>
        </div>
        
        {/* Project Highlights */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-4 gap-6">
          {isOnline ? (
            <>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-blue-600 mb-4">
                  <Code size={32} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Modern Stacks</h4>
                <p className="text-gray-600 text-sm">Build full-stack architectures combining deep backend frameworks and modern frontend libraries.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-green-600 mb-4">
                  <LineChart size={32} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Data Intelligence</h4>
                <p className="text-gray-600 text-sm">Extract, clean, and run predictive machine learning algorithms over real-world datasets.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-orange-600 mb-4">
                  <Cloud size={32} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Cloud DevOps</h4>
                <p className="text-gray-600 text-sm">Leverage AWS orchestration and fully automated CI/CD pipelines to deploy scale applications.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-gray-800 mb-4">
                  <Shield size={32} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Maximum Security</h4>
                <p className="text-gray-600 text-sm">Conduct enterprise-grade penetration testing and adhere to best cyber security architecture principles.</p>
              </div>
            </>
          ) : (
            <>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-purple-600 mb-4">
                  <MessageSquare size={32} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">RAG Pipelines</h4>
                <p className="text-gray-600 text-sm">Build production-ready retrieval-augmented generation systems with vector search.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-pink-600 mb-4">
                  <Brain size={32} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">SLM Fine-tuning</h4>
                <p className="text-gray-600 text-sm">Fine-tune small language models with LoRA/QLoRA on domain data.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-purple-600 mb-4">
                  <Bot size={32} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">AI Agents</h4>
                <p className="text-gray-600 text-sm">Create autonomous agents with tool integration and multi-step planning.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="text-pink-600 mb-4">
                  <Shield size={32} />
                </div>
                <h4 className="text-lg font-bold text-gray-900 mb-2">Responsible AI</h4>
                <p className="text-gray-600 text-sm">Implement evaluation metrics, red-teaming, and safety guardrails.</p>
              </div>
            </>
          )}
        </div>

        {/* Additional Info */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg px-6 py-3 border border-purple-100">
            <Workflow size={18} className="text-purple-600" />
            <span className="text-sm text-gray-700">All projects follow industry best practices: version control, documentation, and deployment-ready code</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;