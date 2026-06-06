import React, { useState } from 'react';
import { BrainCircuit, Sparkles, PenTool, Code2, ImageIcon, Server, Cloud, Database, Terminal, Layers, Shield, Zap, Globe, Cpu, Briefcase, Rocket, ChevronLeft, ChevronRight, Palette, Music, Wand2, Bot, MessageSquare, Search, Workflow, LineChart, BookOpen, Award, Target, TrendingUp } from 'lucide-react';

interface AboutAIProps {
  isHybrid?: boolean;
}

const AboutAI: React.FC<AboutAIProps> = ({ isHybrid = false }) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'technologies' | 'career'>('overview');

  const tabs = [
    { id: 'overview', label: 'What is AIGA?', icon: <BrainCircuit size={20} /> },
    { id: 'technologies', label: 'Technologies', icon: <Code2 size={20} /> },
    { id: 'career', label: 'Career Path', icon: <Briefcase size={20} /> },
  ];

  // What is AIGA - Detailed Overview
  const overviewFeatures = [
    { name: "Generative AI", icon: <Sparkles className="text-purple-500" />, desc: "Create original content - text, images, code" },
    { name: "LLM Engineering", icon: <BrainCircuit className="text-pink-500" />, desc: "Master Large Language Models & Transformers" },
    { name: "RAG Pipelines", icon: <Search className="text-indigo-500" />, desc: "Build retrieval-augmented generation systems" },
    { name: "AI Agents", icon: <Bot className="text-blue-500" />, desc: "Create autonomous AI systems with tools" },
    { name: "Prompt Engineering", icon: <PenTool className="text-orange-500" />, desc: "Craft effective prompts & optimize costs" },
    { name: "SLM Fine-tuning", icon: <Cpu className="text-purple-500" />, desc: "Fine-tune Small Language Models with LoRA" }
  ];

  // Technologies You'll Master - Detailed
  const technologiesList = [
    { name: "LangChain", icon: <Workflow className="text-green-500" />, desc: "Agent frameworks & LLM orchestration" },
    { name: "HuggingFace", icon: <BrainCircuit className="text-yellow-500" />, desc: "Transformers & pre-trained models" },
    { name: "FAISS / Vector DB", icon: <Database className="text-purple-500" />, desc: "Vector search & similarity retrieval" },
    { name: "PyTorch / TensorFlow", icon: <Terminal className="text-blue-500" />, desc: "Deep learning frameworks for AI models" },
    { name: "Gemini API", icon: <Cloud className="text-indigo-500" />, desc: "Google's LLM platform for text/image/video" },
    { name: "LoRA/QLoRA", icon: <Cpu className="text-pink-500" />, desc: "Efficient parameter fine-tuning techniques" },
    { name: "GitHub Copilot", icon: <Code2 className="text-green-500" />, desc: "AI-powered code assistance" },
    { name: "Google Antigravity", icon: <Rocket className="text-blue-500" />, desc: "Agentic development platform" }
  ];

  // Career Opportunities - Detailed
  const careerOpportunities = [
    {
      icon: <Briefcase className="h-10 w-10 text-purple-500 mb-3" />,
      title: "AI/ML Engineer",
      description: "Design and deploy machine learning models and LLM-based solutions for enterprises. Average salary: ₹12-25 LPA"
    },
    {
      icon: <Rocket className="h-10 w-10 text-purple-500 mb-3" />,
      title: "Prompt Engineer",
      description: "Specialize in crafting effective prompts and optimizing LLM interactions. Average salary: ₹10-20 LPA"
    },
    {
      icon: <Globe className="h-10 w-10 text-purple-500 mb-3" />,
      title: "RAG Specialist",
      description: "Build retrieval-augmented generation systems for domain-specific applications. Average salary: ₹15-30 LPA"
    },
    {
      icon: <Cpu className="h-10 w-10 text-purple-500 mb-3" />,
      title: "AI Agent Developer",
      description: "Create autonomous AI systems that can use tools and perform complex tasks. Average salary: ₹12-22 LPA"
    },
    {
      icon: <Shield className="h-10 w-10 text-purple-500 mb-3" />,
      title: "LLM Evaluation Specialist",
      description: "Evaluate LLM outputs using BLEU/ROUGE/BERTScore and implement responsible AI practices."
    },
    {
      icon: <TrendingUp className="h-10 w-10 text-purple-500 mb-3" />,
      title: "AI Solutions Architect",
      description: "Design end-to-end AI solutions for enterprises integrating multiple AI technologies."
    }
  ];

  const getActiveContent = () => {
    switch (activeTab) {
      case 'technologies':
        return {
          title: "Technologies You'll Master",
          description: "Our AIGA program covers the most in-demand Generative AI tools, frameworks, and platforms used by industry leaders like Google, OpenAI, Microsoft, and Anthropic.",
          items: technologiesList,
          color: "purple",
          image: "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
          ctaText: "Join AIGA to gain hands-on experience with LangChain, HuggingFace, Vector Databases, and cutting-edge LLM frameworks."
        };
      case 'career':
        return {
          title: "Career Opportunities After AIGA",
          description: "The Generative AI field is experiencing explosive growth with 40% YoY job growth. Graduates of our program are prepared for high-demand roles in AI engineering, LLM development, and automation.",
          items: careerOpportunities,
          color: "purple",
          image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
          ctaText: "Start your journey toward an exciting career in Generative AI and LLM Engineering with salaries ranging from ₹10-30 LPA."
        };
      default:
        return {
          title: "What is AIGA?",
          description: `AIGA (AI for Generation & Automation) is a 8-week intensive internship program approved by AICTE & APSCHE that prepares B.Tech students for industry roles in Generative AI and automation. The program covers 12 comprehensive modules over ${isHybrid ? '50-60 hours offline and 30-40 hours online' : '90+ hours of hands-on training'}.`,
          items: overviewFeatures,
          color: "purple",
          image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
          ctaText: "Join AIGA to master Transformers, LLMs, RAG pipelines, prompt engineering, SLM fine-tuning, AI agents, and responsible AI practices."
        };
    }
  };

  const content = getActiveContent();

  const handlePrevious = () => {
    const tabsOrder = ['overview', 'technologies', 'career'];
    const currentIndex = tabsOrder.indexOf(activeTab);
    const previousIndex = (currentIndex - 1 + tabsOrder.length) % tabsOrder.length;
    setActiveTab(tabsOrder[previousIndex] as 'overview' | 'technologies' | 'career');
  };

  const handleNext = () => {
    const tabsOrder = ['overview', 'technologies', 'career'];
    const currentIndex = tabsOrder.indexOf(activeTab);
    const nextIndex = (currentIndex + 1) % tabsOrder.length;
    setActiveTab(tabsOrder[nextIndex] as 'overview' | 'technologies' | 'career');
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl mb-4">
            <BrainCircuit size={28} className="text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AIGA: AI for Generation & Automation
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            8-week AICTE-approved intensive internship program mastering Generative AI, LLMs, RAG pipelines, and Agentic AI 
            <br/><span className="mt-2 inline-block font-semibold text-purple-700 bg-purple-100 px-3 py-1 rounded-full">{isHybrid ? 'Hybrid Format: 50-60h Offline + 30-40h Online' : 'Complete 90 Hours Offline'}</span>
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex rounded-lg bg-gray-100 p-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center px-6 py-3 rounded-md font-medium transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white shadow-sm text-purple-600'
                    : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {tab.icon}
                <span className="ml-2">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-20">
          {/* Left: Content */}
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">{content.title}</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">{content.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {content.items.map((item, index) => (
                <div key={index} className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100">
                  {'icon' in item && !('name' in item) ? (
                    // For career opportunities
                    <>
                      {item.icon}
                      <h4 className="text-base font-semibold text-gray-900 mb-1">{item.title}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                    </>
                  ) : (
                    // For overview and technologies
                    <>
                      <div className="mb-2">{item.icon}</div>
                      <h4 className="text-base font-semibold text-gray-900 mb-1">{item.name}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-10 blur-xl"></div>
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-lg">
              <img
                src={content.image}
                alt={content.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  AIGA Program
                </h3>
                <p className="text-gray-200 text-sm max-w-xs">
                  90+ hours • 12 weeks • 8+ Industry Projects
                </p>
                <div className="flex flex-wrap gap-2 mt-3">
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs text-white">AICTE Approved</span>
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-0.5 text-xs text-white">APSCHE Approved</span>
                </div>
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex justify-center mt-6 space-x-4">
              <button
                onClick={handlePrevious}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <ChevronLeft className="text-gray-700" size={20} />
              </button>
              <div className="flex items-center">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`mx-1 h-2 rounded-full transition-all ${
                      activeTab === tab.id
                        ? 'bg-purple-600 w-6'
                        : 'bg-gray-400 w-2'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={handleNext}
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-200"
              >
                <ChevronRight className="text-gray-700" size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Program Stats Bar */}
        <div className="mb-12 grid grid-cols-2 md:grid-cols-5 gap-4">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 text-center border border-purple-100">
            <div className="text-2xl font-bold text-purple-600">{isHybrid ? '50/40' : '90+'}</div>
            <div className="text-sm text-gray-600">{isHybrid ? 'Offline/Online Hrs' : 'Hours of Training'}</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 text-center border border-purple-100">
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-600">Weeks Program</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 text-center border border-purple-100">
            <div className="text-2xl font-bold text-purple-600">8+</div>
            <div className="text-sm text-gray-600">Industry Projects</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 text-center border border-purple-100">
            <div className="text-2xl font-bold text-purple-600">35</div>
            <div className="text-sm text-gray-600">Seats per Batch</div>
          </div>
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 text-center border border-purple-100">
            <div className="text-2xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-600">Learning Modules</div>
          </div>
        </div>

        {/* Curriculum Highlights */}
        <div className="mb-12 bg-white rounded-2xl p-6 shadow-md border border-gray-100">
          <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">12 Comprehensive Modules</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>AI/ML Fundamentals</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>NLP & Embeddings</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Transformers & Attention</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>LLMs vs SLMs</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Prompt Engineering</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>RAG Pipelines</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Evaluation Metrics</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Inference & Streaming</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>AI Tools (Gemini/Copilot)</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Agentic AI</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Responsible AI & Red-Teaming</div>
            <div className="flex items-center gap-2 text-sm text-gray-700"><div className="w-2 h-2 bg-purple-500 rounded-full"></div>Capstone Project</div>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-10 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold text-white mb-3">
                Ready to Master Generative AI?
              </h3>
              <p className="text-purple-100 max-w-xl">
                {content.ctaText}
              </p>
            </div>
            <a
              href="https://rzp.io/rzp/8KPMtnd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white hover:bg-gray-100 rounded-lg px-8 py-3 font-medium transition-colors duration-300 text-purple-600"
            >
              Enroll Now @ ₹999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAI;