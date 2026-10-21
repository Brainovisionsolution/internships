import React, { useState, useEffect } from 'react';
import { ChevronRight, Sparkles, Clock, Trophy, Users, Zap, Bot, Video, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HeroSectionProps {
  isHybrid?: boolean;
}

const HeroSection: React.FC<HeroSectionProps> = ({ isHybrid = false }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative bg-gradient-to-r from-purple-950 via-indigo-950 to-purple-950 text-white pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
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
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-pink-600 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse delay-1000"></div>

      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Section */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="inline-block bg-purple-500/20 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-purple-400/30">
              <span className="text-xs md:text-sm font-semibold text-purple-200">
                🚀 Offline Practical Workshops • Hyderabad
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
              OFFLINE HANDS-ON
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-cyan-300">
                WORKSHOPS
              </span>
            </h1>

            <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-xl leading-relaxed">
              Master next-generation technologies with full hands-on immersion in Hyderabad: 
              <br className="hidden sm:block" />
              <strong>• 2 Days for AI Film Making</strong> (Runway Gen-3, Midjourney, AI Editing)
              <br />
              <strong>• 1 Day for Robotics</strong> (Complete Hardware Kit, Autonomous Bots)
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#technologies"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold rounded-xl px-7 py-3.5 transition-all duration-300 flex items-center justify-center shadow-lg transform hover:-translate-y-0.5"
              >
                Enroll for ₹5,000 Only
                <ChevronRight size={20} className="ml-2" />
              </a>
              <Link
                to="/robotics"
                className="bg-white/10 hover:bg-white/20 border border-purple-400 text-white font-semibold rounded-xl px-6 py-3.5 transition-all duration-300 flex items-center justify-center"
              >
                <Bot size={18} className="mr-2 text-cyan-300" />
                Dedicated Robotics Page
                <ArrowRight size={16} className="ml-1.5" />
              </Link>
            </div>

            {/* Stats Row */}
            <div className="mt-8 flex flex-wrap sm:flex-nowrap items-center gap-6 sm:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-purple-300">2 Days</div>
                <div className="text-xs text-purple-200">AI Film Making</div>
              </div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-cyan-300">1 Day</div>
                <div className="text-xs text-purple-200">Robotics Workshop</div>
              </div>
              <div className="hidden sm:block w-px h-12 bg-purple-700"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-pink-300">Nov 1st</div>
                <div className="text-xs text-purple-200">Batches Every 15 Days</div>
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
                <span className="ml-3 text-purple-200 text-sm font-medium">AICTE & APSCHE Approved</span>
              </div>
              <a
                href="https://www.google.com/search?q=brainovision"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span className="text-yellow-300 text-lg font-medium">★★★★★</span>
                <span className="ml-2 text-purple-200 text-sm">
                  Rated 4.7/5 by 2,140+ students
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
              <div className="relative bg-white/10 backdrop-blur-md border border-purple-200/20 rounded-2xl p-6 overflow-hidden">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white text-xs font-bold px-3 py-1 rounded-full absolute right-6 top-6">
                  🔥 50% Launch Offer
                </div>

                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Sparkles size={20} className="mr-2 text-purple-300" />
                  Workshop Tracks Overview
                </h3>

                <ul className="space-y-3 text-sm text-purple-100">
                  <li className="flex items-start">
                    <span className="text-pink-400 mr-2 font-bold">🎬</span>
                    <span><strong>AI Film Making (2 Days):</strong> Concept to Cinema, Midjourney characters, Runway Gen-3 AI video, ElevenLabs audio</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cyan-400 mr-2 font-bold">🤖</span>
                    <span><strong>Robotics Workshop (1 Day):</strong> 100% Hardware Kit included, assemble & code autonomous obstacle-avoiding bot</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    <span>100% Practical Studio & Hardware Lab Training</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    <span>AICTE & APSCHE Recognized Certifications</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-purple-300 mr-2">✓</span>
                    <span>Direct Mentorship from Industry Creative & Robotics Leads</span>
                  </li>
                </ul>

                <div className="mt-6 pt-5 border-t border-purple-200/20">
                  <div className="flex items-center justify-between mb-2">
                    <div className="text-xs text-purple-200 uppercase font-semibold">Special Workshop Fee</div>
                    <div className="bg-green-500 text-white text-xs px-2.5 py-0.5 rounded-full font-bold">50% OFF</div>
                  </div>
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-extrabold text-white">₹5,000</span>
                    <span className="ml-3 text-base line-through opacity-70">₹10,000</span>
                    <span className="ml-3 text-green-300 text-xs font-semibold">Save ₹5,000</span>
                  </div>

                  <div className="bg-purple-900/40 rounded-xl p-3 mb-4 text-xs space-y-1">
                    <div className="flex items-center text-purple-200">
                      <Clock size={13} className="mr-2 text-cyan-300" />
                      <span>Starts <strong>1st Nov 2026</strong> • New batch every 15 days</span>
                    </div>
                    <div className="flex items-center text-purple-200">
                      <Users size={13} className="mr-2 text-pink-300" />
                      <span>Limited to 30 seats per batch</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <a
                      href="https://rzp.io/rzp/8KPMtnd"
                      className="block w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white text-center font-bold rounded-xl py-3 transition-all duration-300 hover:from-purple-600 hover:to-pink-600 shadow-lg text-sm flex items-center justify-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Zap size={16} className="mr-2" />
                      Enroll for Workshop @ ₹5,000
                    </a>
                    <Link
                      to="/robotics"
                      className="block w-full bg-white/10 hover:bg-white/20 text-cyan-200 text-center font-semibold rounded-xl py-2.5 transition-all text-xs border border-cyan-400/30"
                    >
                      View Dedicated Robotics Webpage →
                    </Link>
                  </div>
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