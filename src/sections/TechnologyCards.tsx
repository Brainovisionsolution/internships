import React from 'react';
import { Clock, Calendar, Users, FileText, Timer, Video, Bot, Sparkles, Cpu, Zap, BookOpen, ArrowRight, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface TechnologyCardsProps {
  isOnline?: boolean;
  isHybrid?: boolean;
}

const TechnologyCards: React.FC<TechnologyCardsProps> = ({ isOnline = false, isHybrid = false }) => {
  const batchDates = [
    { date: "1st Nov 2026", seats: 30 },
    { date: "15th Nov 2026", seats: 30 },
    { date: "1st Dec 2026", seats: 30 },
    { date: "15th Dec 2026", seats: 30 }
  ];

  const workshops = [
    {
      title: "AI Film Making Workshop",
      tagline: "2 Days Intensive Studio Workshop",
      subtitle: "Script-to-Screen AI Cinema • Midjourney • Runway Gen-3 • ElevenLabs",
      time: "Full Day (9:30 AM – 5:30 PM)",
      fee: "₹5,000/-",
      actualFee: "₹10,000",
      discount: "50% OFF",
      gradient: "from-rose-600 via-purple-600 to-indigo-600",
      icon: <Video size={26} className="text-white" />,
      duration: "2 Days Workshop",
      seats: 30,
      dates: batchDates,
      features: [
        "Cinematic AI Prompting & Storyboarding",
        "Character Consistency with Midjourney & FLUX",
        "Runway Gen-3 & Pika AI Video Generation",
        "Voice Cloning & Sound Design (ElevenLabs)",
        "AI-Powered Editing & Color Grading",
        "Produce & Screen Your Own Short Film"
      ],
      images: [
        "/venue/photo1.jpg",
        "/venue/photo2.jpg",
        "/venue/photo3.jpg"
      ],
      link: "/online",
      isRobotics: false
    },
    {
      title: "Robotics Workshop",
      tagline: "1 Day Hands-on Hardware Workshop",
      subtitle: "Autonomous Bots • Microcontrollers • Sensors • Live Arena Race",
      time: "Full Day (9:30 AM – 5:30 PM)",
      fee: "₹5,000/-",
      actualFee: "₹10,000",
      discount: "50% OFF",
      gradient: "from-blue-600 via-indigo-600 to-cyan-500",
      icon: <Bot size={26} className="text-white" />,
      duration: "1 Day Workshop",
      seats: 30,
      dates: batchDates,
      features: [
        "Complete Hardware Kit Included",
        "Microcontroller & Embedded C Programming",
        "Ultrasonic Distance & IR Sensors",
        "Assemble Obstacle Avoidance Robot",
        "Smartphone Bluetooth Wireless Control",
        "Live Robot Arena Showcase & Certificate"
      ],
      images: [
        "/workspace/photo1.jpg",
        "/workspace/photo2.jpg",
        "/workspace/photo3.jpg"
      ],
      link: "/robotics",
      isRobotics: true
    }
  ];

  return (
    <section id="technologies" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-4 py-1.5 mb-3 border border-purple-100">
            <Sparkles size={16} className="text-purple-600 mr-2" />
            <span className="text-xs font-semibold text-purple-700">Offline Hands-on Workshops</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Offline Practical Workshops
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Intensive in-person learning in Hyderabad. Choose between our <strong>2-Day AI Film Making Workshop</strong> or our <strong>1-Day Hands-on Robotics Workshop</strong>.
          </p>
          <div className="mt-3 inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-1.5 rounded-full">
            Starting Nov 1st • Batches Every 15 Days • Launch Price: ₹5,000 (Actual ₹10,000 • 50% OFF)
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {workshops.map((workshop, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-gray-100 flex flex-col"
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${workshop.gradient} p-6 md:p-7 relative overflow-hidden text-white`}>
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-white/10 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-inner">
                      {workshop.icon}
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-full px-3.5 py-1 text-xs font-bold tracking-wide">
                      {workshop.tagline}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-1.5">{workshop.title}</h3>
                  <p className="text-white/85 text-sm md:text-base mb-4 font-medium">{workshop.subtitle}</p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/20">
                    <div className="flex items-center text-white/95">
                      <Clock size={16} className="mr-2 shrink-0" />
                      <span className="text-xs md:text-sm font-medium">{workshop.time}</span>
                    </div>
                    <div className="flex items-center text-white/95">
                      <Timer size={16} className="mr-2 shrink-0" />
                      <span className="text-xs md:text-sm font-semibold">{workshop.duration}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 md:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Features List */}
                  <div className="mb-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-purple-700 mb-3 flex items-center">
                      <CheckCircle size={14} className="mr-1.5" />
                      What's Included & Key Takeaways:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {workshop.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-start text-xs md:text-sm text-gray-700 bg-gray-50 p-2.5 rounded-lg border border-gray-100"
                        >
                          <span className="text-purple-600 font-bold mr-2">✓</span>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing Box */}
                  <div className="mb-5 p-4 bg-gradient-to-r from-purple-50 via-pink-50 to-white rounded-xl border border-purple-100">
                    <div className="flex items-baseline justify-between mb-1.5">
                      <div>
                        <span className="text-3xl font-extrabold text-gray-900">{workshop.fee}</span>
                        <span className="text-base text-gray-400 line-through ml-2.5">{workshop.actualFee}</span>
                      </div>
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                        {workshop.discount}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Users size={14} className="mr-1.5 text-purple-600" />
                      <span>Limited to 30 seats • Full hardware/software access included</span>
                    </div>
                  </div>

                  {/* Upcoming Batches */}
                  <div className="mb-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5 flex items-center">
                      <Calendar size={14} className="mr-1.5 text-purple-600" />
                      Upcoming Batches (Starting Nov 1st • Every 15 Days):
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {workshop.dates.map((dateItem, idx) => (
                        <div
                          key={idx}
                          className="text-center p-2 rounded-lg bg-gray-50 border border-gray-200 hover:border-purple-300 transition-colors"
                        >
                          <div className="text-xs font-bold text-gray-900">{dateItem.date}</div>
                          <div className="text-[10px] text-green-700 font-semibold">{dateItem.seats} Seats</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 pt-3 border-t border-gray-100 mt-auto">
                  {workshop.isRobotics ? (
                    <>
                      <Link
                        to="/robotics"
                        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 rounded-xl font-bold text-center flex items-center justify-center shadow-lg transition-all transform hover:-translate-y-0.5"
                      >
                        Explore Dedicated Robotics Page
                        <ArrowRight size={18} className="ml-2" />
                      </Link>
                      <a
                        href="https://rzp.io/rzp/8KPMtnd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 rounded-xl font-semibold text-center text-sm flex items-center justify-center transition-colors"
                      >
                        <Zap size={15} className="mr-1.5 text-purple-600" />
                        Enroll for 1-Day Robotics @ ₹5,000
                      </a>
                    </>
                  ) : (
                    <>
                      <a
                        href="https://rzp.io/rzp/8KPMtnd"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full bg-gradient-to-r ${workshop.gradient} hover:opacity-95 text-white py-3.5 rounded-xl font-bold text-center flex items-center justify-center shadow-lg transition-all transform hover:-translate-y-0.5`}
                      >
                        <Zap size={18} className="mr-2" />
                        Enroll for AI Film Making (2 Days) @ ₹5,000
                      </a>
                      <a
                        href="tel:+917416422509"
                        className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 rounded-xl font-semibold text-center text-sm flex items-center justify-center transition-colors"
                      >
                        <Users size={15} className="mr-1.5 text-purple-600" />
                        Talk to Workshop Advisor – 7416422509
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Robotics Banner */}
        <div className="mt-12 max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 rounded-3xl p-6 md:p-8 text-white shadow-xl relative overflow-hidden">
            <div className="absolute right-0 top-0 bottom-0 w-1/3 opacity-10 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
              <div className="text-center md:text-left">
                <div className="inline-flex items-center bg-blue-500/20 text-cyan-300 text-xs font-bold px-3 py-1 rounded-full mb-2">
                  <Bot size={14} className="mr-1.5" />
                  Exclusive Webpage
                </div>
                <h3 className="text-2xl md:text-3xl font-extrabold mb-2">
                  Want Full Details on the 1-Day Robotics Workshop?
                </h3>
                <p className="text-purple-200 text-sm md:text-base max-w-xl">
                  Check out the full hardware kit specifications, session-by-session agenda, arena competition rules, and registration details on our dedicated Robotics page.
                </p>
              </div>
              <Link
                to="/robotics"
                className="bg-white text-indigo-900 hover:bg-gray-100 font-extrabold px-7 py-3.5 rounded-xl shadow-lg transition-all transform hover:scale-105 shrink-0 flex items-center"
              >
                Go to Robotics Page
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>

        {/* Offline Venue & Timing Details */}
        <div className="mt-12 max-w-5xl mx-auto text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl px-6 py-5 border border-purple-100 shadow-sm w-full">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-3 shrink-0">
                <Clock size={18} className="text-purple-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">Full-Day Intensive</div>
                <div className="text-xs text-gray-600">09:30 AM – 05:30 PM with Labs</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-purple-200"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-pink-100 rounded-xl flex items-center justify-center mr-3 shrink-0">
                <Award size={18} className="text-pink-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">AICTE & APSCHE Approved</div>
                <div className="text-xs text-gray-600">Government recognized certificate</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-purple-200"></div>
            <div className="flex items-center">
              <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center mr-3 shrink-0">
                <Calendar size={18} className="text-indigo-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">Starting Nov 1st</div>
                <div className="text-xs text-gray-600">New batch every 15 days</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCards;