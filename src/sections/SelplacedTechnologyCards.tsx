import React from 'react';
import { Clock, Users, FileText, Timer, Code2, BrainCircuit, Sparkles, Cpu, Zap, BookOpen, Network, Shield, LineChart, PlayCircle, Globe, Smartphone, Award, Video, Headphones, Infinity, CheckCircle, ClipboardCheck, FileQuestion, Briefcase, GraduationCap, Layers, Target, ThumbsUp, ChevronDown, ChevronUp } from 'lucide-react';

const SelfPlacedTechnologyCards: React.FC = () => {
  const [openModules, setOpenModules] = React.useState<number[]>([]);

  const toggleModule = (index: number) => {
    setOpenModules(prev => 
      prev.includes(index) ? prev.filter(i => i !== index) : [...prev, index]
    );
  };

  const aigaCourse = {
    title: "AIGA – AI for Generation & Automation",
    subtitle: "Generative AI • LLMs • RAG • AI Agents • Self-Paced Learning",
    fee: "₹1,999/-",
    actualFee: "₹14,999",
    discount: "87% OFF",
    gradient: "from-purple-600 to-pink-500",
    icon: <BrainCircuit size={28} className="text-white" />,
    syllabus: "https://docs.google.com/document/d/1nNYcpPA1_7j-0dQgtYHA5ae-tUEDsBp_i_eOsAxEm_A/edit?usp=sharing",
    duration: "8 Weeks Access",
    features: [
      "Transformers & LLMs",
      "RAG Pipelines",
      "Prompt Engineering",
      "SLM Fine-tuning",
      "AI Agents",
      "Agentic Workflows"
    ],
    modules: [
      {
        title: "Module 1: AI/ML Foundations",
        topics: [
          "Neurons, perceptrons, and activation functions - Perceptron model, neuron computation, activation functions, forward pass intuition, and the role of nonlinearity in neural networks",
          "Feedforward networks and backpropagation - Multi-layer perceptrons, forward propagation, loss intuition, backpropagation, and basic training workflow in PyTorch/TensorFlow",
          "CNN/RNN basics and first neural-net lab - Convolution and pooling intuition, simple RNN cell behavior, and coding a small neural network on a toy dataset"
        ],
        assignments: "Implement a sigmoid neuron for AND/OR logic, Hand-trace a 2-layer network, Build a 1D CNN for text classification"
      },
      {
        title: "Module 2: NLP Basics and Embeddings",
        topics: [
          "Text preprocessing and classical NLP features - Tokenization, text normalization, bag-of-words, TF-IDF, and basic NLP pipeline setup",
          "Word embeddings - Word2Vec, GloVe, vector semantics, and how distributed word representations capture meaning",
          "Contextual embeddings and sequence tasks - BERT embeddings, sentence embeddings, text classification, sentiment analysis, QA, translation examples, and NER pipeline concepts"
        ],
        assignments: "Preprocess a text corpus, Generate 2D plot of word vectors, Fine-tune a small transformer for sentiment analysis"
      },
      {
        title: "Module 3: Transformers and LLM Overview",
        topics: [
          "Transformer architecture - Self-attention, query/key/value flow, multi-head attention, positional encoding, and the embedding-plus-attention pipeline",
          "Attention visualization and transformer block implementation - Attention heads, heatmaps, and the mechanics of a simple transformer block",
          "Pretraining, fine-tuning, and LLM capabilities - GPT vs. BERT paradigms, pretraining versus fine-tuning, few-shot behavior"
        ],
        assignments: "Visualize attention weights and explain context capture, Code a simple transformer block, Generate text completions with a pretrained transformer"
      },
      {
        title: "Module 4: Small Language Models (SLM)",
        topics: [
          "SLM concepts and use cases - Small versus large language models, personalization, domain adaptation, and when custom models are useful",
          "Model selection and LoRA/QLoRA fine-tuning - Choosing open models such as Phi-2, Mistral, or TinyLlama, local versus cloud training",
          "Fine-tuning workflow and inference demo - Running the fine-tuning process, monitoring training progress, generating outputs"
        ],
        assignments: "Describe a realistic use case for a custom SLM, Collect 100-200 text examples for fine-tuning, Fine-tune the selected SLM"
      },
      {
        title: "Module 5: Prompt Engineering and Cost Optimization",
        topics: [
          "Prompt fundamentals - Zero-shot, few-shot, and chain-of-thought prompting; system/user roles; instruction formatting",
          "Context limits and token economics - Prompt as context, context-length constraints, token billing, and how token usage affects cost",
          "Token counting and prompt optimization - Using token-counting tools such as tiktoken, estimating API cost, and shortening prompts"
        ],
        assignments: "Craft a summarization prompt and test different styles, Try chain-of-thought for a reasoning task, Count tokens and iteratively compress a long prompt"
      },
      {
        title: "Module 6: Context Engineering and Data Prep for RAG",
        topics: [
          "RAG pipeline architecture - Retriever plus LLM workflow, vector search, and the role of context in retrieval-augmented generation",
          "Chunking strategies - Document splitting strategies, token-based versus page-level splitting, overlap strategy, and chunk-size selection",
          "Metadata, cleaning, and embeddings - Metadata tagging, source tracking, cleaning boilerplate, filtering irrelevant sections"
        ],
        assignments: "Sketch a complete RAG system flowchart, Split documents into chunks and build an index with FAISS, Implement a retriever that returns top-3 chunks for a query"
      },
      {
        title: "Module 7: Evaluation and Metrics",
        topics: [
          "BLEU and ROUGE - BLEU precision, ROUGE-N, ROUGE-L, overlap-based evaluation, and their limitations",
          "BERTScore and semantic similarity - Semantic evaluation using embeddings, comparison with surface-overlap metrics",
          "LLM-as-judge and RAG-specific metrics - G-Eval style judging, GPTScore-like evaluation, contextual relevancy, and answer accuracy"
        ],
        assignments: "Compute unigram BLEU by hand, Compare BLEU and BERTScore on paraphrased sentences, Run all metrics on model outputs and choose final metric set"
      },
      {
        title: "Module 8: Inference Engineering and Streaming",
        topics: [
          "Deployment basics and performance tradeoffs - Model serving options, GPU versus CPU, latency versus throughput, autoscaling",
          "Quantization and batching - Quantization for faster inference, request batching, and speed/quality tradeoffs",
          "Streaming tokens - SSE versus WebSockets, token streaming UX, and abortable generation to save tokens"
        ],
        assignments: "Estimate time to generate 200 tokens on CPU vs GPU, Quantize a small model and compare inference speed, Implement a simple SSE endpoint that streams tokens"
      },
      {
        title: "Module 9: AI Tools for Content and Code",
        topics: [
          "Google AI Studio and Gemini - Multimodal generation, text/image/video workflows, API usage, and practical Gemini use cases",
          "Generative content workflows and tool fit - Content creation workflows, output quality, style evaluation",
          "GitHub Copilot and Google Antigravity - Copilot code assistance, Antigravity agentic coding, agent planning, and auto-fix workflows"
        ],
        assignments: "Call Gemini API to generate image and text, Generate a marketing blurb and compare Gemini vs GPT, Use Copilot to implement a coding task"
      },
      {
        title: "Module 10: Agentic AI and Automation",
        topics: [
          "Agent theory - LLM agents, planner-plus-tools design, feedback loops, and autonomous task execution",
          "Multi-agent scenarios - Orchestration of multiple agents and division of responsibilities across steps or tools",
          "LangChain and tool-using workflows - LangChain chains and agents, search tools, calculator tools, JSON/function tools"
        ],
        assignments: "Sketch an agent workflow for a real task, Design a travel-booking agent using flight and hotel APIs, Build a multi-step agent with search tool"
      },
      {
        title: "Module 11: Responsible AI and Red-Teaming",
        topics: [
          "Bias, fairness, and privacy - Demographic bias, fairness risks, privacy concerns, and handling sensitive data in prompts",
          "Hallucinations and factuality checking - Why hallucinations occur, factuality-checking approaches, and cross-reference validation",
          "Red-teaming and mitigation - Adversarial prompting, prompt injection testing, toxic-query probing, content filters"
        ],
        assignments: "Run an LLM on biased prompts and analyze outputs, Check answer for factual consistency, Conduct a red-teaming exercise and submit mitigation suggestions"
      },
      {
        title: "Module 12: Capstone and Wrap-Up",
        topics: [
          "Final project work and testing - Capstone integration, debugging, final coding, and validation of the chosen solution",
          "Documentation and presentation preparation - Final report writing, presentation structure, and demo preparation",
          "Presentations, feedback, and next steps - Team demos, peer review, course recap, feedback, certification guidance"
        ],
        assignments: "Complete the final prototype and finish testing, Finalize reports and prepare presentation deck, Present the project and complete peer review"
      }
    ],
    capstoneProjects: [
      "Smart Document Q&A System using RAG",
      "Custom Chatbot with Fine-tuned SLM",
      "AI Agent for Automated Research Assistant",
      "Multimodal Content Generator"
    ]
  };

  const selfPacedBenefits = [
    {
      icon: <FileQuestion size={24} />,
      title: "Module-wise Quizzes",
      description: "Test your knowledge with comprehensive assessments",
      color: "from-purple-100 to-purple-50",
      iconColor: "text-purple-600"
    },
    {
      icon: <ClipboardCheck size={24} />,
      title: "Hands-on Assignments",
      description: "Practical coding assignments after each module",
      color: "from-pink-100 to-pink-50",
      iconColor: "text-pink-600"
    },
    {
      icon: <Briefcase size={24} />,
      title: "4 Capstone Projects",
      description: "Real-world projects to build your portfolio",
      color: "from-indigo-100 to-indigo-50",
      iconColor: "text-indigo-600"
    },
    {
      icon: <GraduationCap size={24} />,
      title: "Completion Certificate",
      description: "Industry-recognized certificate on finishing",
      color: "from-green-100 to-green-50",
      iconColor: "text-green-600"
    }
  ];

  return (
    <section id="technologies" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-5 py-2.5 mb-4 border border-purple-100">
            <PlayCircle size={22} className="text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">Self-Paced Internship Program</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AIGA – AI for Generation & Automation
          </h2>
          <p className="text-lg text-gray-700">
            Complete learning journey with video content, quizzes, assignments, and real-world capstone projects
          </p>
        </div>

        {/* Main Course Card */}
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100">
            {/* Header */}
            <div className={`bg-gradient-to-r ${aigaCourse.gradient} p-8 relative`}>
              <div className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-xs font-semibold text-white">Self-Paced</span>
              </div>
              
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                  {aigaCourse.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">{aigaCourse.title}</h3>
                  <p className="text-white/80 text-sm mt-1">{aigaCourse.subtitle}</p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
                <div className="bg-white/10 rounded-lg p-2 text-center backdrop-blur-sm">
                  <div className="text-white font-bold text-lg">12</div>
                  <div className="text-white/70 text-xs">Comprehensive Modules</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2 text-center backdrop-blur-sm">
                  <div className="text-white font-bold text-lg">40+</div>
                  <div className="text-white/70 text-xs">Topics Covered</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2 text-center backdrop-blur-sm">
                  <div className="text-white font-bold text-lg">30+</div>
                  <div className="text-white/70 text-xs">Hands-on Assignments</div>
                </div>
                <div className="bg-white/10 rounded-lg p-2 text-center backdrop-blur-sm">
                  <div className="text-white font-bold text-lg">4</div>
                  <div className="text-white/70 text-xs">Capstone Projects</div>
                </div>
              </div>
            </div>

            <div className="p-8">
              {/* Features */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <Sparkles size={16} className="mr-2 text-purple-600" />
                  What You'll Learn:
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {aigaCourse.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg flex items-center justify-center mr-2">
                        <CheckCircle size={14} className="text-purple-600" />
                      </div>
                      <span className="text-sm font-medium text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Additional Program Info */}
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  <div className="flex items-center text-gray-700">
                    <Network size={14} className="mr-2 text-purple-600" />
                    <span className="text-xs font-medium">RAG Pipelines</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Shield size={14} className="mr-2 text-purple-600" />
                    <span className="text-xs font-medium">Responsible AI</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <LineChart size={14} className="mr-2 text-purple-600" />
                    <span className="text-xs font-medium">LLM Evaluation</span>
                  </div>
                  <div className="flex items-center text-gray-700">
                    <Code2 size={14} className="mr-2 text-purple-600" />
                    <span className="text-xs font-medium">Agentic Workflows</span>
                  </div>
                </div>
              </div>

              {/* Course Modules - Accordion Style */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <Layers size={16} className="mr-2 text-purple-600" />
                  12 Comprehensive Modules:
                </div>
                <div className="space-y-3">
                  {aigaCourse.modules.map((module, idx) => (
                    <div key={idx} className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 overflow-hidden">
                      <button
                        onClick={() => toggleModule(idx)}
                        className="w-full p-4 text-left flex items-center justify-between hover:bg-purple-50/30 transition-all duration-200"
                      >
                        <div className="flex items-center">
                          <div className="w-8 h-8 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mr-3">
                            <span className="text-xs font-bold text-gray-700">{idx + 1}</span>
                          </div>
                          <span className="text-sm font-semibold text-gray-900">{module.title}</span>
                        </div>
                        {openModules.includes(idx) ? <ChevronUp size={18} className="text-purple-600" /> : <ChevronDown size={18} className="text-purple-600" />}
                      </button>
                      
                      {openModules.includes(idx) && (
                        <div className="p-4 pt-0 border-t border-gray-100 mt-2">
                          <div className="mb-3">
                            <div className="text-xs font-semibold text-purple-600 mb-2 flex items-center">
                              <PlayCircle size={12} className="mr-1" />
                              Topics Covered:
                            </div>
                            <ul className="space-y-1">
                              {module.topics.map((topic, topicIdx) => (
                                <li key={topicIdx} className="text-xs text-gray-600 flex items-start">
                                  <span className="text-purple-600 mr-2">•</span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <div className="text-xs font-semibold text-pink-600 mb-2 flex items-center">
                              <ClipboardCheck size={12} className="mr-1" />
                              Assignments:
                            </div>
                            <p className="text-xs text-gray-600">{module.assignments}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Capstone Projects */}
              <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <Target size={16} className="mr-2 text-purple-600" />
                  Capstone Projects:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {aigaCourse.capstoneProjects.map((project, idx) => (
                    <div key={idx} className="flex items-center">
                      <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center mr-2">
                        <span className="text-xs font-bold text-purple-600">{idx + 1}</span>
                      </div>
                      <span className="text-sm text-gray-700">{project}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Learning Journey */}
              <div className="mb-6">
                <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                  <Target size={16} className="mr-2 text-purple-600" />
                  Your Learning Journey:
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <PlayCircle size={20} className="text-purple-600 mx-auto mb-1" />
                    <div className="text-xs font-medium text-gray-700"></div>
                    <div className="text-xs text-gray-500">Learn concepts</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <FileQuestion size={20} className="text-pink-600 mx-auto mb-1" />
                    <div className="text-xs font-medium text-gray-700">Take Quizzes</div>
                    <div className="text-xs text-gray-500">Test knowledge</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <ClipboardCheck size={20} className="text-indigo-600 mx-auto mb-1" />
                    <div className="text-xs font-medium text-gray-700">Submit Assignments</div>
                    <div className="text-xs text-gray-500">Practice coding</div>
                  </div>
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <Briefcase size={20} className="text-green-600 mx-auto mb-1" />
                    <div className="text-xs font-medium text-gray-700">Build Projects</div>
                    <div className="text-xs text-gray-500">Create portfolio</div>
                  </div>
                </div>
              </div>

              {/* Pricing Section */}
              <div className="mb-8 p-6 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100 shadow-sm">
                <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
                  <div>
                    <div className="text-3xl font-bold text-gray-900">{aigaCourse.fee}</div>
                    <div className="text-sm text-gray-500 line-through mt-1">{aigaCourse.actualFee}</div>
                  </div>
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-sm">
                    {aigaCourse.discount}
                  </div>
                </div>
                <div className="flex items-center text-gray-600 text-sm mt-3">
                  <Users size={16} className="mr-2" />
                  <span>Unlimited Access • Start Anytime</span>
                </div>
                <div className="flex items-center text-gray-600 text-sm mt-2">
                  <Timer size={16} className="mr-2" />
                  <span>{aigaCourse.duration} • Lifetime Content Access</span>
                </div>
                <div className="flex items-center text-green-600 text-sm mt-2">
                  <CheckCircle size={16} className="mr-2" />
                  <span>Includes 12 modules, quizzes, assignments & 4 capstone projects</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-4">
                <a
                  href={aigaCourse.syllabus}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-3.5 rounded-xl transition-all duration-300 font-medium border border-gray-200 hover:border-gray-300"
                >
                  <FileText size={18} className="mr-3" />
                  Download Full Syllabus (12 Modules)
                </a>
                <a
                  href="https://rzp.io/rzp/JCoC0fof"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full bg-gradient-to-r ${aigaCourse.gradient} hover:opacity-90 text-white py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center font-bold shadow-lg hover:shadow-xl`}
                >
                  <PlayCircle size={18} className="mr-3" />
                  Start Learning at ₹1,999
                </a>
                <div className="text-center pt-2">
                  <a
                    href="tel:+919063651119"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 inline-flex items-center font-medium"
                  >
                    <Cpu size={14} className="mr-2" />
                    Need help? Talk to Expert – 9063651119
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Self-Paced Section */}
        <div className="mt-20 max-w-5xl mx-auto">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center bg-white rounded-full w-16 h-16 mb-4 shadow-sm">
                <Globe size={28} className="text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Complete Learning Ecosystem</h3>
              <p className="text-gray-700">Everything you need to master Generative AI in one place</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {selfPacedBenefits.map((benefit, idx) => (
                <div 
                  key={idx} 
                  className={`bg-gradient-to-br ${benefit.color} rounded-xl p-6 text-center shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1`}
                >
                  <div className={`inline-flex items-center justify-center bg-white rounded-full w-12 h-12 mb-4 ${benefit.iconColor}`}>
                    {benefit.icon}
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-sm text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <a
                href="https://rzp.io/rzp/JCoC0fof"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-bold hover:opacity-90 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <PlayCircle size={20} className="mr-2" />
                Start Your AIGA Self-Paced Journey Today
              </a>
              <p className="text-xs text-gray-500 mt-4">
                ✓ Instant access • ✓ Learn from anywhere • ✓ Lifetime support • ✓ Certificate on completion
              </p>
            </div>
          </div>
        </div>

        {/* FAQ Section for Self-Paced */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Frequently Asked Questions</h3>
            <p className="text-gray-600 text-sm">Everything you need to know about self-paced learning</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <PlayCircle size={16} className="mr-2 text-purple-600" />
                When can I start?
              </h4>
              <p className="text-sm text-gray-600">You can start immediately after enrollment. Get instant access to all course materials.</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Clock size={16} className="mr-2 text-purple-600" />
                How long do I have access?
              </h4>
              <p className="text-sm text-gray-600">You get 8 weeks of structured access with lifetime access to all recorded content.</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <FileQuestion size={16} className="mr-2 text-pink-600" />
                Are quizzes and assignments graded?
              </h4>
              <p className="text-sm text-gray-600">Yes, all quizzes and assignments are auto-graded with instant feedback provided.</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Award size={16} className="mr-2 text-purple-600" />
                Will I get a certificate?
              </h4>
              <p className="text-sm text-gray-600">Yes, you'll receive an industry-recognized certificate upon completing all modules and projects.</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Briefcase size={16} className="mr-2 text-green-600" />
                Do I need to submit capstone projects?
              </h4>
              <p className="text-sm text-gray-600">Yes, 4 capstone projects are mandatory for certificate completion.</p>
            </div>
            <div className="bg-white rounded-xl p-4 border border-gray-100 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <Users size={16} className="mr-2 text-purple-600" />
                Is there support available?
              </h4>
              <p className="text-sm text-gray-600">Yes, you get access to our community forum and dedicated support team.</p>
            </div>
          </div>
          
          <div className="text-center mt-6">
            <ThumbsUp size={20} className="text-purple-600 mx-auto mb-2" />
            <p className="text-xs text-gray-500">94% of our students complete the program and build production-ready AI applications</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfPlacedTechnologyCards;