import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Clock, Trophy, Users, Zap } from 'lucide-react';

interface HeroSectionProps {
  isHybrid?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isHybrid = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(white 2px, transparent 0)',
            backgroundSize: '40px 40px',
            backgroundPosition: '-19px -19px',
          }}
        ></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="inline-block bg-purple-500 bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-purple-400 border-opacity-30">
              <span className="text-sm font-medium">🚀 AIGA {isHybrid ? 'Hybrid' : 'Offline'} Internship Program 2026</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            AIGA – AI for Generation & Automation
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
               
              </span>
            </h1>

            <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-xl">
              8-week intensive program mastering Transformers, RAG pipelines, LLMs, and Agentic AI. 
              {isHybrid ? " (50-60 Hours Offline + 30-40 Hours Online)" : " (90 Hours complete Offline)"}
              <br />Build production-ready AI systems with hands-on industry projects.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://rzp.io/rzp/8KPMtnd"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium rounded-lg px-6 py-3 transition-all duration-300 flex items-center justify-center shadow-lg"
              >
                Enroll Now - ₹999 Only
                <ChevronRight size={20} className="ml-2" />
              </a>
              <a
                href="#technologies"
                className="bg-transparent hover:bg-white/10 border border-purple-400 text-white font-medium rounded-lg px-6 py-3 transition-all duration-300 flex items-center justify-center"
              >
                View Full Syllabus
              </a>
            </div>

            {/* Stats Row */}
            <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-300">90+</div>
                <div className="text-sm text-purple-200">Hours of Training</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-300">8</div>
                <div className="text-sm text-purple-200">Weeks Program</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-purple-700"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-300">
                  {isHybrid ? '50/40' : '90'}
                </div>
                <div className="text-sm text-purple-200">
                  {isHybrid ? 'Offline/Online Hrs' : 'Hours Offline'}
                </div>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-6 items-center">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                  <img src="/logos/aicte.png" alt="AICTE" className="h-8 w-auto" />
                </div>
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center -ml-2">
                  <img src="/logos/apsche.png" alt="APSCHE" className="h-8 w-auto" />
                </div>
                <span className="ml-3 text-purple-200 text-sm">AICTE & APSCHE Approved</span>
              </div>
              <a
                href="https://www.google.com/search?gs_ssp=eJzj4tVP1zc0TKnMzctLKzIyYLRSNagwTkpOsjROMTMysEw1SDNIsTKoMDcyNLJINDQ1MzI1NEszT_PiSSpKzMzLL8sszszPAwCiDxRO&q=brainovision&rlz=1C1CHBF_enIN1140IN1140&oq=brainovision&gs_lcrp=EgZjaHJvbWUqFQgBEC4YJxivARjHARiABBiKBRiOBTIGCAAQRRg8MhUIARAuGCcYrwEYxwEYgAQYigUYjgUyBwgCEAAYgAQyBggDEEUYPDIGCAQQRRg8MgYIBRBFGDwyBggGEEUYPDIGCAcQRRg90gEINzAyOWowajeoAgiwAgHxBT7mvW8zJTtx8QU-5r1vMyU7cQ&sourceid=chrome&ie=UTF-8#lrd=0x3bcb93d6209e0f0d:0x72128a1562516f7f,1,,,,"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span className="text-yellow-300 text-lg font-medium">★★★★★</span>
                <span className="ml-2 text-purple-200 text-sm">
                  Rated 4.7/5 by 2140+ students
                </span>
              </a>
            </div>
          </div>

          {/* Program Highlights Card */}
          <div
            className={`flex justify-center transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-75 blur-xl animate-pulse"></div>
              <div className="relative bg-white/10 backdrop-blur-md border border-purple-200 border-opacity-20 rounded-2xl p-6 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full absolute right-6 top-6">
                  🔥 Limited to 35 Seats
                </div>

                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Sparkles size={20} className="mr-2 text-purple-300" />
                  Program Highlights
                </h3>

                <ul className="space-y-3 text-sm text-purple-100">
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    Transformers & Self-Attention Architecture
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    RAG Pipelines & Vector Databases
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    Fine-tune SLMs with LoRA/QLoRA
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    Prompt Engineering & Cost Optimization
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    AI Agents & Agentic Workflows
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    LLM Evaluation (BLEU/ROUGE/BERTScore)
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    Responsible AI & Red-Teaming
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    Industry Tools: Gemini API, LangChain, HuggingFace
                  </li>
                </ul>

                <div className="mt-6 pt-6 border-t border-purple-200 border-opacity-20">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm text-purple-200">Program Fee</div>
                    <div className="bg-green-500 text-white text-xs px-2 py-1 rounded-full">50% OFF</div>
                  </div>
                  <div className="flex items-baseline">
                    <div className="flex flex-col">
                      <div className="flex items-baseline mb-1">
                        <span className="text-xl font-medium opacity-90 mr-2">Madhapur:</span>
                        <span className="text-2xl font-bold">₹7,499</span>
                        <span className="ml-2 text-xs line-through opacity-70">₹14,999</span>
                      </div>
                      <div className="flex items-baseline">
                        <span className="text-xl font-medium opacity-90 mr-2">Kondapur:</span>
                        <span className="text-2xl font-bold">₹8,499</span>
                        <span className="ml-2 text-xs line-through opacity-70">₹16,999</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-xs text-purple-200 mt-1">Pay ₹999 now to book (included in total fee)</div>
                  
                  <div className="mt-4 bg-purple-800/30 rounded-lg p-3">
                    <div className="flex items-center text-sm">
                      <Clock size={14} className="mr-2 text-purple-300" />
                      <span>Next Batch: 20th April 2026</span>
                    </div>
                    <div className="flex items-center text-sm mt-2">
                      <Users size={14} className="mr-2 text-purple-300" />
                      <span>Only 35 seats per batch</span>
                    </div>
                  </div>

                  <a
                    href="https://rzp.io/rzp/8KPMtnd"
                    className="mt-4 block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center font-bold rounded-lg px-6 py-3 transition-all duration-300 hover:from-purple-600 hover:to-pink-600 shadow-lg flex items-center justify-center"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Zap size={18} className="mr-2" />
                    Book Your Seat @ ₹999
                  </a>
                  
                  <p className="text-center text-xs text-purple-300 mt-3">
                    ✓ Instant confirmation ✓ Certificate on completion
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,42.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;