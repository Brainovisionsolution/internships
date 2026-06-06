import React from 'react';
import { Clock, Calendar, Users, FileText, Timer, Code2, BrainCircuit, Cloud, Zap, ChevronDown, Cpu } from 'lucide-react';

interface OnlineTechnologyCardsProps {
  isOnline: boolean;
}

const OnlineTechnologyCards: React.FC<OnlineTechnologyCardsProps> = ({ isOnline }) => {
  // Updated batch dates starting from April 20th, 2026
  const batchDates = [
    { date: "June 1st, 2026", seats: 90 },
    { date: "June 15th, 2026", seats: 85 },
    { date: "July 1st, 2026", seats: 78 },
    { date: "July 15th, 2026", seats: 90 }
  ];

  // Only four specific technologies
  const technologies = [
    {
      title: "AI with Python",
      subtitle: "Machine Learning • Deep Learning • AI",
      time: "Daily 1.5 Hour",
      fee: "₹799/-",
      actualFee: "₹9999",
      discount: "92% OFF",
      gradient: "from-blue-600 to-cyan-500",
      icon: <BrainCircuit size={24} className="text-white" />,
      syllabus: "#",
      duration: "2 Months",
      seats: 90,
      dates: batchDates,
      features: ["Python", "Machine Learning", "Deep Learning", "AI Models"]
    },
    {
      title: "MERN STACK",
      subtitle: "MongoDB • Express • React • Node.js",
      time: "Daily 1.5 Hour",
      fee: "₹1499/-",
      actualFee: "₹9999",
      discount: "85% OFF",
      gradient: "from-green-600 to-emerald-500",
      icon: <Code2 size={24} className="text-white" />,
      syllabus: "#",
      duration: "2 Months",
      seats: 90,
      dates: batchDates,
      features: ["MongoDB", "Express js", "React js", "Node js"]
    },
    {
      title: "Gen AI & Agentic AI",
      subtitle: "LLMs • RAG • AI Agents",
      time: "Daily 1.5 Hour",
      fee: "₹999/-",
      actualFee: "₹9999",
      discount: "90% OFF",
      gradient: "from-purple-600 to-pink-500",
      icon: <BrainCircuit size={24} className="text-white" />,
      syllabus: "#",
      duration: "2 Months",
      seats: 90,
      dates: batchDates,
      features: ["Transformers", "Prompting", "Agents", "LangChain"]
    },
    {
      title: "Cloud Computing (AWS & DevOps)",
      subtitle: "AWS Infrastructure • CI/CD",
      time: "Daily 1.5 Hour",
      fee: "₹1999/-",
      actualFee: "₹9999",
      discount: "80% OFF",
      gradient: "from-orange-500 to-yellow-500",
      icon: <Cloud size={24} className="text-white" />,
      syllabus: "#",
      duration: "2 Months",
      seats: 90,
      dates: batchDates,
      features: ["AWS Services", "Docker", "Kubernetes", "Jenkins"]
    }
  ];

  return (
    <section id="technologies" className="py-16 md:py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto text-center mb-14">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-full px-4 py-1.5 mb-4">
            <Zap size={18} className="text-purple-600 mr-2" />
            <span className="text-sm font-medium text-purple-700">Special Launch Offer</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Online Internship Programs
          </h2>
          <p className="text-lg text-gray-700">
              Limited seats per batch
          </p>
        </div>

        {/* Four cards in a single row using grid-cols-1 md:grid-cols-2 lg:grid-cols-4 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-200 min-h-[620px] flex flex-col"
            >
              <div className={`bg-gradient-to-r ${tech.gradient} p-5 relative`}>
                <div className="flex items-center justify-between mb-3">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-white">Online</span>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                    <span className="text-xs font-semibold text-white">{tech.seats} Seats</span>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-3">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white leading-tight">{tech.title}</h3>
                    <p className="text-white/80 text-sm mt-1">{tech.subtitle}</p>
                  </div>
                </div>
                
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-white/90">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm font-medium">{tech.time}</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Timer size={16} className="mr-2" />
                    <span className="text-sm">{tech.duration}</span>
                  </div>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col">
                {/* Features */}
                <div className="mb-4">
                  <div className="text-xs font-semibold text-gray-700 mb-2">Key Skills:</div>
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-gray-50 text-gray-700 text-xs px-3 py-1.5 rounded-lg border border-gray-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing Section */}
                <div className="mb-5 p-4 bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-100">
                  <div className="flex items-baseline justify-between mb-2">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{tech.fee}</div>
                      <div className="text-sm text-gray-500 line-through">{tech.actualFee}</div>
                    </div>
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {tech.discount}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm mt-2">
                    <Users size={16} className="mr-2" />
                    <span>Live Interactive Classes</span>
                  </div>
                </div>

                {/* Batch Dates Section - Starting from April 20th */}
                <div className="mb-5 flex-1">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-medium text-gray-700 flex items-center">
                      <Calendar size={16} className="mr-2" />
                      Batch Dates:
                    </div>
                    <div className="text-xs text-gray-500 flex items-center">
                      <ChevronDown size={14} className="mr-1" />
                      {tech.dates.length}
                    </div>
                  </div>
                  <div className="space-y-2 max-h-32 overflow-y-auto pr-2">
                    {tech.dates.map((dateItem, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg p-2.5 bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-gray-300 transition-colors duration-200"
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-medium text-gray-900">{dateItem.date}</div>
                          <div className={`text-xs font-bold px-2 py-1 rounded-full ${
                            dateItem.seats > 20 ? 'bg-green-100 text-green-700' : 
                            dateItem.seats > 10 ? 'bg-yellow-100 text-yellow-700' : 
                            'bg-red-100 text-red-700'
                          }`}>
                            {dateItem.seats}
                          </div>
                        </div>
                        <div className="text-xs text-gray-500 mt-1">{tech.time}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3 mt-auto">
                 
                  <a
                    href="https://rzp.io/rzp/ze2KGkb"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${tech.gradient} hover:opacity-90 text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center font-bold shadow-md`}
                  >
                    <Zap size={16} className="mr-2" />
                    Enroll Now
                  </a>
                  <div className="text-center">
                  <a
                    href="tel:+917416422509"
                    className="text-xs text-gray-600 hover:text-gray-900 transition-colors duration-200 inline-flex items-center font-medium"
                  >
                    <Cpu size={12} className="mr-1" />
                    Need help? Talk to Expert – 7416422509
                  </a>

                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl px-6 py-4 border border-blue-100 max-w-3xl mx-auto">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center mr-3">
                <Clock size={16} className="text-blue-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">Daily Live Sessions</div>
                <div className="text-xs text-gray-700">Interactive online</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-6 bg-blue-200"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center mr-3">
                <Users size={16} className="text-purple-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">90 Seats per Batch</div>
                <div className="text-xs text-gray-700">Limited availability</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-6 bg-blue-200"></div>
            <div className="flex items-center">
              <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center mr-3">
                <Calendar size={16} className="text-indigo-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">4 Starting Dates</div>
                <div className="text-xs text-gray-700">Flexible options</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineTechnologyCards;