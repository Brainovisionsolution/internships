import React, { useState, useEffect } from 'react';
import { ChevronRight } from 'lucide-react';

const OnlineHeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('register');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-purple-900 via-indigo-800 to-purple-900 text-white pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background grid pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(white 2px, transparent 0)',
          backgroundSize: '40px 40px',
          backgroundPosition: '-19px -19px',
        }}></div>
      </div>

      {/* Content container */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
            <div className="inline-block bg-purple-500 bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-1 mb-6 border border-purple-400 border-opacity-30">
              <span className="text-sm font-medium">Virtual 2026 Internship Program</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              VIRTUAL INDUSTRY 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-pink-300 to-indigo-300">
                INTERNSHIP PROGRAM
              </span>
            </h1>
            <p className="text-lg md:text-xl text-purple-100 mb-8 max-w-xl">
              Experience World-Class Technology Training from Anywhere — Live Virtual Classes with Industry Experts!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
                <a
                href="https://rzp.io/rzp/ze2KGkb"    
                className="bg-purple-500 hover:bg-purple-600 text-white font-medium rounded-lg px-6 py-3 transition-all duration-300 flex items-center justify-center"
              >
                Register Now
                <ChevronRight size={20} className="ml-2" />
              </a>
              <a 
                href="#program" 
                className="bg-transparent hover:bg-white/10 border border-purple-400 text-white font-medium rounded-lg px-6 py-3 transition-all duration-300 flex items-center justify-center"
              >
                View Program Details
              </a>
            </div>
            <div className="mt-8 flex flex-wrap gap-6 items-center">
              <div className="flex items-center">
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center">
                  <img src="/logos/aicte.png" alt="AICTE" className="h-8 w-auto" />
                </div>
                <div className="h-12 w-12 rounded-full bg-white flex items-center justify-center -ml-2">
                  <img src="/logos/apsche.png" alt="APSCHE" className="h-8 w-auto" />
                </div>
                <span className="ml-3 text-indigo-200 text-sm">AICTE & APSCHE Approved</span>
              </div>
              <div className="flex items-center">
                <span className="text-yellow-300 text-lg font-medium">★★★★★</span>
                <span className="ml-2 text-purple-200 text-sm">Rated 4.7/5 by 2140+ students</span>
              </div>
            </div>
          </div>
          
          {/* Program Highlights & Entrance Exam */}
          <div
            className={`flex justify-center transform transition-all duration-1000 delay-300 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'
            }`}
          >
            <div className="relative w-full max-w-md">
              <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-75 blur-xl"></div>
              <div className="relative bg-white bg-opacity-10 backdrop-blur-sm border border-indigo-200 border-opacity-20 rounded-2xl p-6 overflow-hidden">
                

              <h3 className="text-xl font-bold mb-4">Why Students Choose This Program</h3>
<ul className="space-y-3 text-sm text-indigo-100">
  <li>✔ Industry-ready skill roadmap (not academic syllabus)</li>
  <li>✔ Real company-style projects & workflows</li>
  <li>✔ Interview-oriented training & mock evaluations</li>
  <li>✔ Resume, GitHub & LinkedIn profile guidance</li>
  <li>✔ Direct mentorship from working professionals</li>
</ul>

                <div className="mt-6 pt-6 border-t border-indigo-200 border-opacity-20">
                  <div className="text-sm mb-2">Starting from just</div>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">₹799</span>
                    <span className="ml-2 text-sm line-through opacity-70">₹9999</span>
                    <span className="ml-2 bg-green-500 text-white text-xs px-2 py-1 rounded">92% OFF</span>
                  </div>
                  <a
                    href="https://rzp.io/rzp/ze2KGkb"
                    className="mt-3 block w-full bg-white text-indigo-800 text-center font-medium rounded-lg px-6 py-3 transition-all duration-300 hover:bg-opacity-90"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enroll Now
                  </a>
                </div>

                
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" fill="#ffffff">
          <path d="M0,96L80,80C160,64,320,32,480,21.3C640,11,800,21,960,42.7C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default OnlineHeroSection;
