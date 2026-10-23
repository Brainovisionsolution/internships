import React from 'react';
import { Clock, Calendar, Users, Timer, Bot, Code, Sparkles, CheckCircle, Zap, Award } from 'lucide-react';

interface TechnologyCardsProps {
  isOnline?: boolean;
  isHybrid?: boolean;
}

const TechnologyCards: React.FC<TechnologyCardsProps> = ({ isOnline = false, isHybrid = false }) => {
  const batchDates = [
    { date: "1st Nov 2026", seats: 30 },
    { date: "15th Nov 2026", seats: 30 },
    { date: "1st Dec 2026", seats: 30 },
    { date: "15th Dec 2026", seats: 30 },
    { date: "1st Jan 2027", seats: 30 }
  ];

  const courses = [
    {
      title: "Agentic AI",
      tagline: "2 & 3 Months Classroom Internship",
      subtitle: "Autonomous Agents • LangChain & CrewAI • Multi-Agent Workflows • Enterprise RAG",
      time: "Daily 2 Hours + Dedicated Lab",
      fee: "₹7,500/-",
      actualFee: "₹10,000",
      discount: "25% OFF",
      gradient: "from-purple-600 via-indigo-600 to-blue-600",
      icon: <Bot size={28} className="text-white" />,
      duration: "2 Months & 3 Months",
      seats: 30,
      dates: batchDates,
      features: [
        "Autonomous Agent Architectures & ReAct Framework",
        "Multi-Agent Orchestration with CrewAI & LangGraph",
        "Enterprise RAG Pipelines & Vector DBs (FAISS, Milvus)",
        "Tool Calling, Custom Functions & Agent Memory Systems",
        "Small Language Model (SLM) Fine-Tuning (LoRA/QLoRA)",
        "Production AI Capstone Deployment & Job Preparation"
      ],
      paymentLink: "https://rzp.io/rzp/8KPMtnd"
    },
    {
      title: "Python Full Stack",
      tagline: "2 & 3 Months Classroom Internship",
      subtitle: "Python Core & Advanced • Django & FastAPI • React UI • PostgreSQL & Deployment",
      time: "Daily 2 Hours + Dedicated Lab",
      fee: "₹7,500/-",
      actualFee: "₹10,000",
      discount: "25% OFF",
      gradient: "from-blue-600 via-teal-600 to-emerald-600",
      icon: <Code size={28} className="text-white" />,
      duration: "2 Months & 3 Months",
      seats: 30,
      dates: batchDates,
      features: [
        "Python Programming, OOP, Data Structures & Algorithms",
        "Backend REST API Development with Django & FastAPI",
        "Dynamic Frontend Web Apps with React.js & Tailwind CSS",
        "Relational Database Design with PostgreSQL & ORMs",
        "Docker Containerization, CI/CD Pipelines & Cloud Deployment",
        "Enterprise Full Stack Capstone Project & Job Preparation"
      ],
      paymentLink: "https://rzp.io/rzp/8KPMtnd"
    }
  ];

  return (
    <section id="technologies" className="py-12 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-pink-50 rounded-full px-4 py-1.5 mb-3 border border-purple-100">
            <Sparkles size={16} className="text-purple-600 mr-2" />
            <span className="text-xs font-semibold text-purple-700">Offline Classroom Internships</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Offline Industry Internship Programs
          </h2>
          <p className="text-base md:text-lg text-gray-700 max-w-2xl mx-auto">
            Comprehensive in-person learning in Hyderabad. Choose between <strong>Agentic AI</strong> and <strong>Python Full Stack</strong> with <strong>2 Months & 3 Months</strong> duration.
          </p>
          <div className="mt-3 inline-block bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-1.5 rounded-full">
            Starting Nov 1st • Slots: Nov 1, Nov 15, Dec 1, Dec 15, Jan 1 • Fee: ₹7,500 (Actual ₹10,000 • 25% OFF)
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl border border-gray-100 flex flex-col"
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${course.gradient} p-6 md:p-7 relative overflow-hidden text-white`}>
                <div className="absolute -top-16 -right-16 w-36 h-36 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-16 -left-16 w-36 h-36 bg-white/10 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center shadow-inner">
                      {course.icon}
                    </div>
                    <div className="bg-white/20 backdrop-blur-md rounded-full px-3.5 py-1 text-xs font-bold tracking-wide">
                      {course.tagline}
                    </div>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-extrabold mb-1.5">{course.title}</h3>
                  <p className="text-white/85 text-sm md:text-base mb-4 font-medium">{course.subtitle}</p>
                  
                  <div className="grid grid-cols-2 gap-3 pt-2 border-t border-white/20">
                    <div className="flex items-center text-white/95">
                      <Clock size={16} className="mr-2 shrink-0" />
                      <span className="text-xs md:text-sm font-medium">{course.time}</span>
                    </div>
                    <div className="flex items-center text-white/95">
                      <Timer size={16} className="mr-2 shrink-0" />
                      <span className="text-xs md:text-sm font-semibold">{course.duration}</span>
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
                      What's Included & Key Modules:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {course.features.map((feature, idx) => (
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
                        <span className="text-3xl font-extrabold text-gray-900">{course.fee}</span>
                        <span className="text-base text-gray-400 line-through ml-2.5">{course.actualFee}</span>
                      </div>
                      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-extrabold px-3 py-1 rounded-full shadow-sm">
                        {course.discount}
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 text-xs">
                      <Users size={14} className="mr-1.5 text-purple-600" />
                      <span>Limited to 30 seats per batch • Duration: 2 Months & 3 Months</span>
                    </div>
                  </div>

                  {/* Upcoming Batches */}
                  <div className="mb-5">
                    <div className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-2.5 flex items-center">
                      <Calendar size={14} className="mr-1.5 text-purple-600" />
                      Upcoming Batch Slots:
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                      {course.dates.map((dateItem, idx) => (
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
                  <a
                    href={course.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${course.gradient} hover:opacity-95 text-white py-3.5 rounded-xl font-bold text-center flex items-center justify-center shadow-lg transition-all transform hover:-translate-y-0.5`}
                  >
                    <Zap size={18} className="mr-2" />
                    Enroll for {course.title} @ ₹7,500
                  </a>
                  <a
                    href="tel:+917416422509"
                    className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2.5 rounded-xl font-semibold text-center text-sm flex items-center justify-center transition-colors"
                  >
                    <Users size={15} className="mr-1.5 text-purple-600" />
                    Talk to Internship Advisor – 7416422509
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Offline Venue & Training Details */}
        <div className="mt-12 max-w-5xl mx-auto text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl px-6 py-5 border border-purple-100 shadow-sm w-full">
            <div className="flex items-center">
              <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center mr-3 shrink-0">
                <Clock size={18} className="text-purple-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">2 Months & 3 Months</div>
                <div className="text-xs text-gray-600">Daily 2 Hours with Lab Access</div>
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
                <div className="text-sm font-bold text-gray-900">Slots Starting Nov 1st</div>
                <div className="text-xs text-gray-600">Nov 1, Nov 15, Dec 1, Dec 15, Jan 1</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyCards;