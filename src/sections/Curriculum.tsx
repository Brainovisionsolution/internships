import React, { useState } from 'react';
import { BookOpen, ChevronDown, Bot, Code, Sparkles, CheckCircle, Terminal } from 'lucide-react';

interface Module {
  title: string;
  description: string;
  topics: string[];
  duration: string;
  tools: string[];
}

const Curriculum: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<'agentic_ai' | 'python_fullstack'>('agentic_ai');
  const [openModule, setOpenModule] = useState<number | null>(0);

  const agenticAiModules: Module[] = [
    {
      title: "Module 1: Foundations of Generative AI, LLMs & Prompt Engineering",
      duration: "Week 1 - 2",
      description: "Understand Transformer architecture, Attention mechanisms, tokenization, temperature parameters, and enterprise prompt engineering strategies for production.",
      topics: [
        "Transformers & Self-Attention mechanics in modern LLMs",
        "Few-shot, Chain-of-Thought (CoT), and ReAct prompting",
        "OpenAI API, Google Gemini API & Anthropic Claude integrations",
        "Cost optimization, context window management, and rate limiting"
      ],
      tools: ["Gemini 1.5 Pro", "GPT-4o", "Claude 3.5 Sonnet", "Tiktoken"]
    },
    {
      title: "Module 2: Enterprise RAG Pipelines & Vector Databases",
      duration: "Week 3 - 4",
      description: "Build robust Retrieval-Augmented Generation architectures. Learn document chunking strategies, embedding generation, semantic similarity search, and hybrid retrieval.",
      topics: [
        "Document ingestion, chunking algorithms & metadata tagging",
        "Dense vs sparse embeddings (Sentence-BERT, BGE, BM25)",
        "Vector databases: FAISS, ChromaDB, and Pinecone",
        "Re-ranking models & mitigating LLM hallucinations"
      ],
      tools: ["LangChain", "FAISS", "ChromaDB", "Sentence-Transformers"]
    },
    {
      title: "Module 3: Autonomous AI Agent Architectures & Tool Calling",
      duration: "Week 5 - 6",
      description: "Design autonomous single-agent systems capable of reasoning, planning multi-step tasks, invoking external APIs, and persisting memory across conversation turns.",
      topics: [
        "ReAct loop: Thought, Action, Observation, and Reflection",
        "Function calling & structured JSON outputs from LLMs",
        "Integrating web search, database querying, and code execution tools",
        "Short-term buffer memory vs persistent vector memory"
      ],
      tools: ["LangChain Agents", "Function Calling", "DuckDuckGo API", "Python REPL"]
    },
    {
      title: "Module 4: Multi-Agent Orchestration with CrewAI & LangGraph",
      duration: "Week 7 - 8",
      description: "Assemble coordinated teams of autonomous specialized agents with distinct personas, delegating tasks, reviewing code, and resolving conflicts automatically.",
      topics: [
        "CrewAI framework: Agents, Tasks, Tools, and Process flows",
        "Graph-based stateful agent workflows using LangGraph",
        "Hierarchical vs sequential agent collaboration patterns",
        "Human-in-the-loop validation and error recovery loops"
      ],
      tools: ["CrewAI", "LangGraph", "AutoGen", "Pydantic"]
    },
    {
      title: "Module 5: SLM Fine-Tuning, Evaluation & Production Deployment",
      duration: "Week 9 - 12 (3-Month Track)",
      description: "Fine-tune open-source Small Language Models using LoRA/QLoRA on specialized datasets, benchmark with BLEU/ROUGE/BERTScore, and deploy production endpoints.",
      topics: [
        "Parameter-Efficient Fine-Tuning (PEFT) with LoRA & QLoRA",
        "Fine-tuning Llama-3 / Phi-3 / Mistral on custom datasets",
        "Quantitative LLM evaluation with Ragas, ROUGE & BERTScore",
        "Deploying scalable agent endpoints using FastAPI and Docker"
      ],
      tools: ["HuggingFace", "PyTorch", "LoRA/QLoRA", "Ragas", "FastAPI"]
    }
  ];

  const pythonFullstackModules: Module[] = [
    {
      title: "Module 1: Advanced Python, OOP & Algorithm Architecture",
      duration: "Week 1 - 2",
      description: "Master modern Python idioms, object-oriented design patterns, functional programming, memory management, and data structures essential for scalable systems.",
      topics: [
        "Advanced OOP: Inheritance, Polymorphism, Abstract Base Classes",
        "Generators, Iterators, Decorators, and Context Managers",
        "Concurrency: Asyncio, Multithreading vs Multiprocessing",
        "Clean code standards, Type hinting, and Pytest unit testing"
      ],
      tools: ["Python 3.12", "Pytest", "Asyncio", "Pylint"]
    },
    {
      title: "Module 2: High-Performance Backend APIs with Django & FastAPI",
      duration: "Week 3 - 4",
      description: "Build robust, secure, and production-ready RESTful microservices and API gateways using Django REST Framework and asynchronous FastAPI.",
      topics: [
        "Django MVC/MVT architecture, migrations & middleware",
        "Django REST Framework (DRF) serializers & viewsets",
        "FastAPI asynchronous routes, Pydantic data validation",
        "JWT authentication, role-based access control (RBAC), CORS"
      ],
      tools: ["Django", "FastAPI", "DRF", "Pydantic", "JWT"]
    },
    {
      title: "Module 3: Modern Interactive Frontend with React.js & Tailwind",
      duration: "Week 5 - 6",
      description: "Craft sleek, responsive user interfaces and single-page applications (SPAs) integrated seamlessly with backend REST APIs.",
      topics: [
        "React hooks (useState, useEffect, useMemo, custom hooks)",
        "Component architecture, state management & React Router",
        "Tailwind CSS responsive design and glassmorphic styling",
        "Axios API client, error boundaries, and form handling"
      ],
      tools: ["React.js", "TypeScript", "Tailwind CSS", "Axios", "Vite"]
    },
    {
      title: "Module 4: Relational Databases, PostgreSQL & Query Optimization",
      duration: "Week 7 - 8",
      description: "Design normalized database schemas, handle complex transactions with ACID guarantees, optimize indexing, and integrate Redis caching.",
      topics: [
        "PostgreSQL relational modeling, foreign keys, and indexes",
        "Django ORM / SQLAlchemy advanced queries and aggregations",
        "Preventing N+1 queries, database connection pooling",
        "In-memory Redis caching for high-traffic endpoints"
      ],
      tools: ["PostgreSQL", "SQLAlchemy", "Redis", "pgAdmin"]
    },
    {
      title: "Module 5: Docker Containerization, CI/CD & Cloud Deployment",
      duration: "Week 9 - 12 (3-Month Track)",
      description: "Containerize the full stack application, write GitHub Actions CI/CD automation pipelines, and deploy live production workloads on AWS cloud infrastructure.",
      topics: [
        "Multi-stage Docker builds for React and Python backend",
        "Docker Compose orchestration for frontend, backend & database",
        "Automated testing & linting with GitHub Actions CI/CD",
        "Deploying to AWS EC2, S3, Nginx reverse proxy & SSL setup"
      ],
      tools: ["Docker", "Docker Compose", "GitHub Actions", "AWS EC2", "Nginx"]
    }
  ];

  const currentModules = activeTrack === 'agentic_ai' ? agenticAiModules : pythonFullstackModules;

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center mb-3">
            <span className="text-xs font-bold text-purple-700 uppercase tracking-wider bg-purple-50 border border-purple-100 px-3.5 py-1 rounded-full">
              Internship Syllabus
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
            Offline Internship Curriculum
          </h2>
          <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive <strong>2 Months & 3 Months</strong> project-driven curriculum designed for deep engineering mastery and corporate readiness.
          </p>

          {/* Track Switcher */}
          <div className="mt-8 flex justify-center">
            <div className="bg-gray-100 p-1.5 rounded-2xl inline-flex space-x-2">
              <button
                onClick={() => {
                  setActiveTrack('agentic_ai');
                  setOpenModule(0);
                }}
                className={`flex items-center px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTrack === 'agentic_ai'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <Bot size={18} className="mr-2" />
                Agentic AI (2 & 3 Months)
              </button>
              <button
                onClick={() => {
                  setActiveTrack('python_fullstack');
                  setOpenModule(0);
                }}
                className={`flex items-center px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 ${
                  activeTrack === 'python_fullstack'
                    ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white shadow-md'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                <Code size={18} className="mr-2" />
                Python Full Stack (2 & 3 Months)
              </button>
            </div>
          </div>
        </div>

        {/* Modules Accordion */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {currentModules.map((module, index) => (
              <div 
                key={index} 
                className={`border-b border-gray-100 last:border-b-0 transition-colors duration-300 ${
                  openModule === index ? 'bg-purple-50/20' : 'hover:bg-gray-50'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenModule(openModule === index ? null : index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      openModule === index 
                        ? activeTrack === 'agentic_ai' ? 'bg-purple-600 text-white shadow-md' : 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {activeTrack === 'agentic_ai' ? <Bot size={18} /> : <Code size={18} />}
                    </div>
                    <div>
                      <h3 className={`font-bold text-base md:text-lg transition-colors duration-300 ${
                        openModule === index 
                          ? activeTrack === 'agentic_ai' ? 'text-purple-700' : 'text-blue-700'
                          : 'text-gray-900'
                      }`}>
                        {module.title}
                      </h3>
                      <p className="text-xs text-gray-500 mt-0.5 font-medium">{module.duration}</p>
                    </div>
                  </div>
                  <div className={`text-gray-400 transition-transform duration-300 ${
                    openModule === index ? 'rotate-180 text-purple-600' : ''
                  }`}>
                    <ChevronDown size={22} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openModule === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-1 pl-16 md:pl-20">
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{module.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-bold text-xs text-gray-900 uppercase tracking-wider mb-2">Hands-on Topics:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="flex items-start text-xs md:text-sm text-gray-700">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 mr-2 shrink-0"></span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-gray-100">
                      <span className="text-[11px] font-bold text-gray-500 uppercase">Tools & Tech:</span>
                      {module.tools.map((tool, toolIdx) => (
                        <span
                          key={toolIdx}
                          className="bg-purple-50 text-purple-700 text-xs font-semibold px-2.5 py-0.5 rounded-md border border-purple-100"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <a
              href="#technologies"
              className="inline-flex items-center text-purple-700 hover:text-purple-900 font-bold text-sm bg-purple-50 px-6 py-3 rounded-xl border border-purple-200 transition-colors shadow-sm"
            >
              <Sparkles size={16} className="mr-2 text-purple-600" />
              Enroll for 2 Months or 3 Months Track @ ₹7,500
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
