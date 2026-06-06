import React, { useState } from 'react';
import { BookOpen, ChevronDown, ChevronUp, Download } from 'lucide-react';

interface Module {
  title: string;
  description: string;
  topics: string[];
  weeks: string;
}

const Curriculum: React.FC = () => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const modules: Module[] = [
    {
      title: "Module 1: AI/ML Fundamentals",
      weeks: "Weeks 1-2",
      description: "Introduce artificial neural networks: perceptrons, activation functions, MLPs, and basic CNN/RNN architectures.",
      topics: ["Perceptrons & Activation Functions", "Multi-layer Perceptron & Backprop", "CNN & RNN Basics", "Simple NN implementation in PyTorch/TensorFlow"]
    },
    {
      title: "Module 2: NLP Basics",
      weeks: "Week 2",
      description: "Introduce natural language processing: tokenization, text preprocessing, and embeddings.",
      topics: ["Tokenization & Preprocessing", "Word2Vec & GloVe", "BERT Embeddings", "Text Classification & Sentiment Analysis"]
    },
    {
      title: "Module 3: Transformer Architectures",
      weeks: "Week 3",
      description: "Study the Transformer model. Understand self-attention, multi-head attention, and positional encoding.",
      topics: ["Self-attention Mechanism", "Multi-head Attention", "Q/K/V Process", "Positional Encoding Generation"]
    },
    {
      title: "Module 4: Large vs. Small Language Models",
      weeks: "Week 4",
      description: "Compare large pretrained LLMs with SLMs. Learn to build and fine-tune a small language model.",
      topics: ["GPT/BERT vs SLMs", "LoRA/Q-LoRA Fine-tuning", "Domain/Persona adaptation", "Fine-tuning an open 7B model"]
    },
    {
      title: "Module 5: Prompt Engineering & Cost Optimization",
      weeks: "Week 5",
      description: "Craft effective prompts and optimize token usage securely.",
      topics: ["Zero-shot & Few-shot Prompting", "Chain-of-thought Techniques", "Token Counting (tiktoken)", "Prompt Compression for Cost Reduction"]
    },
    {
      title: "Module 6: Context Engineering & Data Prep",
      weeks: "Week 6",
      description: "Build robust RAG pipelines: data engineering, document chunking, and metadata tagging.",
      topics: ["RAG Architecture", "Token-based & Page-level Chunking", "Sentence vs Paragraph Embeddings", "Nearest-neighbor Retrieval"]
    },
    {
      title: "Module 7: Evaluation & Metrics",
      weeks: "Week 7",
      description: "Evaluate RAG and chatbot performance using automatic metrics and LLM-as-judge.",
      topics: ["BLEU & ROUGE Metrics", "BERTScore for Semantic Similarity", "LLM-as-judge Methods", "Contextual Relevancy & Answer Accuracy"]
    },
    {
      title: "Module 8: Inference Engineering & Streaming",
      weeks: "Week 8",
      description: "Deploy models efficiently optimizing latency, throughput, and using token streaming.",
      topics: ["Latency/Throughput Tradeoffs", "Model Quantization & Batching", "SSE vs WebSocket Streaming", "Time-To-First-Token (TTFT) Improvement"]
    },
    {
      title: "Module 9: AI Tools for Content & Code",
      weeks: "Week 9",
      description: "Hands-on use of Google AI Studio (Gemini), GitHub Copilot, and Google Antigravity.",
      topics: ["Generative Text/Image APIs", "Copilot for Coding Assistance", "Antigravity for Agentic Tasks", "Tool Trade-offs and Workflow Integration"]
    },
    {
      title: "Module 10: Agentic AI & Automation",
      weeks: "Week 10",
      description: "Design autonomous AI agents using LLMs, APIs, and multi-step workflows.",
      topics: ["Agent Planner Components", "Tool APIs (Search, Calculators)", "LangChain & ReACT Frameworks", "Agent Evaluation on Task Completion"]
    },
    {
      title: "Module 11: Responsible AI & Red-Teaming",
      weeks: "Week 11",
      description: "Address AI ethics, prompt injection, hallucinations, and privacy in deployment.",
      topics: ["Bias Mitigation & Fairness", "Data Privacy & GDPR", "Hallucination Flow Checks", "Red-Teaming & Adversarial Constraints"]
    },
    {
      title: "Module 12: Capstone Projects & Review",
      weeks: "Week 12",
      description: "Design, build, and deploy an industry-style Capstone project showcasing your mastery in AI.",
      topics: ["Domain-specific RAG Chatbot", "Content Generation Pipeline", "Code Assistant Agent", "System Presentations & Peer Review"]
    }
  ];

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide bg-purple-50 px-3 py-1 rounded-full">Syllabus</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
            Comprehensive AIGA Curriculum
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our 8-week intensive syllabus starts from AI basics and scales up to advanced topic areas like LLM Evaluation, SLM Fine-tuning, and Agentic Workflows.
          </p>
          <div className="mt-6 flex justify-center">
            <a 
              href="https://drive.google.com/uc?export=download&id=10g3ULLedmZKvpht7MNHGgSApelyb477V" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <Download size={20} className="mr-2" />
              Download Full Syllabus
            </a>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            {modules.map((module, index) => (
              <div 
                key={index} 
                className={`border-b border-gray-100 last:border-b-0 transition-colors duration-300 ${
                  openModule === index ? 'bg-purple-50/30' : 'hover:bg-gray-50'
                }`}
              >
                <button
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                  onClick={() => setOpenModule(openModule === index ? null : index)}
                >
                  <div className="flex items-center space-x-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors duration-300 ${
                      openModule === index ? 'bg-purple-600 text-white shadow-md' : 'bg-gray-100 text-gray-500'
                    }`}>
                      <BookOpen size={20} />
                    </div>
                    <div>
                      <h3 className={`font-semibold text-lg transition-colors duration-300 ${
                        openModule === index ? 'text-purple-700' : 'text-gray-900'
                      }`}>
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1">{module.weeks}</p>
                    </div>
                  </div>
                  <div className={`text-gray-400 transition-transform duration-300 ${
                    openModule === index ? 'rotate-180 text-purple-600' : ''
                  }`}>
                    <ChevronDown size={24} />
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openModule === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-6 pt-2 pl-20">
                    <p className="text-gray-600 mb-4">{module.description}</p>
                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-gray-900 uppercase tracking-wider">Key Topics:</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {module.topics.map((topic, topicIdx) => (
                          <li key={topicIdx} className="flex items-start text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 mr-2 shrink-0"></span>
                            <span className="text-sm">{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
