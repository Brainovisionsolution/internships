import React from 'react';
import { MessageSquare, Search, Github, FileText, Bot, Sparkles } from 'lucide-react';

const RealTimeProjects: React.FC = () => {
  const projects = [
    {
      title: "Conversational AI Platform",
      example: "Ex: ChatGPT",
      icon: <MessageSquare className="text-purple-600" size={36} />,
      titleColor: "text-purple-700",
      builtWith: "LLM + Prompt Engineering + Streaming + RLHF"
    },
    {
      title: "AI Search Engine",
      example: "Ex: Perplexity AI",
      icon: <Search className="text-purple-600" size={36} />,
      titleColor: "text-purple-700",
      builtWith: "RAG + LLM + Web Retrieval + Citations"
    },
    {
      title: "AI Coding Assistant",
      example: "Ex: GitHub Copilot",
      icon: <Github className="text-purple-600" size={36} />,
      titleColor: "text-purple-700",
      builtWith: "LLM + Code Dataset + IDE Integration"
    },
    {
      title: "Productivity Automation",
      example: "Ex: Notion AI",
      icon: <FileText className="text-purple-600" size={36} />,
      titleColor: "text-purple-700",
      builtWith: "LLM + Workflow Automation + Context Awareness"
    },
    {
      title: "Autonomous AI",
      example: "Ex: AutoGPT / Agent Systems",
      icon: <Bot className="text-purple-600" size={36} />,
      titleColor: "text-purple-700",
      builtWith: "Agents + LLM + Tools + Memory"
    },
    {
      title: "Multimodal AI",
      example: "Ex: Google Gemini / AI Studio",
      icon: <Sparkles className="text-purple-600" size={36} />,
      titleColor: "text-purple-700",
      builtWith: "Multimodal LLM + APIs + Tooling"
    }
  ];

  return (
    <section className="py-16 bg-white w-full">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <div className="bg-gradient-to-br from-purple-50 via-white to-pink-50 border border-purple-100 rounded-[2rem] p-8 md:p-12 shadow-md">
          <h2 className="text-2xl md:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 text-center mb-12 tracking-tight">
            Build Any Real-Time Project Like Below
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {projects.map((project, index) => (
              <div key={index} className="flex items-start group">
                <div className="mr-5 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300 drop-shadow-sm bg-white p-3 rounded-xl border border-purple-50 shadow-sm">
                  {project.icon}
                </div>
                <div>
                  <h3 className={`text-[1.35rem] font-bold ${project.titleColor} mb-2 leading-tight`}>
                    {project.title} <span className="text-pink-500 font-medium tracking-wide text-lg">({project.example})</span>
                  </h3>
                  <p className="text-black text-[0.95rem]">
                    <span className="font-extrabold mr-1">Built With:</span>
                    <span className="font-semibold text-gray-700">{project.builtWith}</span>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeProjects;
