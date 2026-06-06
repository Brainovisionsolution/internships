import React from 'react';
import { Clock, Calendar, Users, FileText, Timer, Code2, BrainCircuit, Sparkles, Cpu, Zap, BookOpen, Network, Shield, LineChart } from 'lucide-react';

interface TechnologyCardsProps {
  isOnline?: boolean;
  isHybrid?: boolean;
}

const TechnologyCards: React.FC<TechnologyCardsProps> = ({ isOnline = false, isHybrid = false }) => {
  const technologies = [
    {
      title: "AIGA – Modern Classroom Internship",
      subtitle: "Madhapur Venue • Generative AI • LLMs • RAG",
      time: "Flexible (1.5 hrs/day, 5 days/week)",
      fee: "₹7,499/-",
      actualFee: "₹14,999",
      gradient: "from-blue-600 to-indigo-500",
      icon: <BrainCircuit size={24} className="text-white" />,
      syllabus: "https://docs.google.com/document/d/1nNYcpPA1_7j-0dQgtYHA5ae-tUEDsBp_i_eOsAxEm_A/edit?usp=sharing",
      dates: [
        { date: "20th Apr 2026", seats: 35 },
        { date: "1st May 2026", seats: 35 },
        { date: "15th May 2026", seats: 35 },
        { date: "1st Jun 2026", seats: 35 }
      ],
      features: [
        "Transformers & LLMs",
        "RAG Pipelines",
        "Prompt Engineering",
        "SLM Fine-tuning",
        "AI Agents",
        "Modern Classroom"
      ],
      images: [
        "/venue/photo1.jpg",
        "/venue/photo2.jpg",
        "/venue/photo3.jpg",
        "/venue/photo4.jpg",
        "/venue/photo5.jpg",
        "/venue/photo6.jpg"
      ]
    },
    {
      title: "AIGA – Corporate Workspace",
      subtitle: "Kondapur Venue • Generative AI • LLMs • RAG",
      time: "Flexible (1.5 hrs/day, 5 days/week)",
      fee: "₹8,499/-",
      actualFee: "₹16,999",
      gradient: "from-purple-600 to-pink-500",
      icon: <BrainCircuit size={24} className="text-white" />,
      syllabus: "https://docs.google.com/document/d/1nNYcpPA1_7j-0dQgtYHA5ae-tUEDsBp_i_eOsAxEm_A/edit?usp=sharing",
      dates: [
        { date: "20th Apr 2026", seats: 35 },
        { date: "1st May 2026", seats: 35 },
        { date: "15th May 2026", seats: 35 },
        { date: "1st Jun 2026", seats: 35 }
      ],
      features: [
        "Transformers & LLMs",
        "RAG Pipelines",
        "Prompt Engineering",
        "AI Agents",
        "Responsible AI",
        "Corporate Vibe"
      ],
      images: [
        "/workspace/photo1.jpg",
        "/workspace/photo2.jpg",
        "/workspace/photo3.jpg",
        "/workspace/photo4.jpg",
        "/workspace/photo5.jpg",
        "/workspace/photo6.jpg"
      ]
    }
  ];

  // Batch timings and fees for offline batches (only shown when not hybrid)
  const batchTimings = [
    { time: "6:00 AM – 7:30 AM", fee: "₹4,000" },
    { time: "8:00 AM – 9:30 AM", fee: "₹6,500" },
    { time: "10:00 AM – 11:30 AM", fee: "₹7,500" },
    { time: "12:00 PM – 1:30 PM", fee: "₹7,500" },
    { time: "2:00 PM – 3:30 PM", fee: "₹8,500" },
    { time: "4:00 PM – 5:30 PM", fee: "₹8,500" },
    { time: "6:00 PM – 7:30 PM", fee: "₹6,500" },
    { time: "8:00 PM – 9:30 PM", fee: "₹4,000" },
  ];

  return (
    <section id="technologies" className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-gradient-to-r from-purple-50 to-blue-50 rounded-full px-4 py-1.5 mb-3 border border-purple-100">
            <BookOpen size={16} className="text-purple-600 mr-2" />
            <span className="text-xs font-medium text-purple-700">Internship + Mastery Program</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            AIGA – AI for Generation & Automation
          </h2>
          <p className="text-base text-gray-700 max-w-2xl mx-auto">
            8-week intensive program preparing you for industry roles in Generative AI and Automation.
            {isHybrid ? " (50-60 Hours Offline + 30-40 Hours Online)" : " (Complete 90 Hours Offline)"}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100"
            >
              {/* Card Header with Gradient */}
              <div className={`bg-gradient-to-r ${tech.gradient} p-6 relative overflow-hidden`}>
                <div className="absolute -top-16 -right-16 w-32 h-32 bg-white/10 rounded-full"></div>
                <div className="absolute -bottom-16 -left-16 w-32 h-32 bg-white/10 rounded-full"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
                      {tech.icon}
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                      <span className="text-xs font-semibold text-white">Limited Seats: 35</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                  <p className="text-white/80 text-sm mb-4">{tech.subtitle}</p>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center text-white/90">
                      <Clock size={16} className="mr-2" />
                      <span className="text-sm font-medium">{tech.time}</span>
                    </div>
                    <div className="flex items-center text-white/90">
                      <Timer size={16} className="mr-2" />
                      <span className="text-sm">8 Weeks {isHybrid ? "(50-60h Offline, 30-40h Online)" : "(90 Hours)"}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Venue Preview */}
                <div className="mb-5">
                  <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Sparkles size={14} className="mr-2 text-purple-600" />
                    Venue Preview:
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {tech.images.map((img, idx) => (
                      <div key={idx} className="rounded-lg overflow-hidden h-20 sm:h-24 shadow-sm border border-gray-100 group">
                        <img 
                          src={img} 
                          alt={`Venue Preview ${idx + 1}`} 
                          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-5">
                  <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Sparkles size={14} className="mr-2 text-purple-600" />
                    What You'll Learn:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {tech.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="inline-block bg-gradient-to-r from-purple-50 to-pink-50 text-gray-700 text-sm px-3 py-1.5 rounded-lg border border-purple-100"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Additional Program Info */}
                <div className="mb-5 p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                  <div className="grid grid-cols-2 gap-3 mb-3">
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

                {/* Pricing Section */}
                <div className="mb-5 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100">
                  <div className="flex items-baseline justify-between mb-2">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{tech.fee}</div>
                      <div className="text-sm text-gray-500 line-through">{tech.actualFee}</div>
                    </div>
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      50% OFF
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users size={14} className="mr-2" />
                    <span>Limited seats available • Enroll with ₹999 only</span>
                  </div>
                </div>

                {/* Batch Dates Section */}
                <div className="mb-5">
                  <div className="text-sm font-semibold text-gray-700 mb-3 flex items-center">
                    <Calendar size={14} className="mr-2 text-purple-600" />
                    Upcoming Batches (8 Batches):
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                    {tech.dates.map((dateItem, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg p-3 bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-purple-200 transition-all duration-200"
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <div className="w-7 h-7 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg flex items-center justify-center mr-3">
                              <span className="text-xs font-bold text-gray-700">{idx + 1}</span>
                            </div>
                            <div>
                              <div className="text-sm font-semibold text-gray-900">{dateItem.date}</div>
                              <div className="text-xs text-gray-500">8-week program</div>
                            </div>
                          </div>
                          <div className={`text-xs font-bold px-3 py-1 rounded-full ${
                            dateItem.seats > 20 ? 'bg-green-100 text-green-700' : 
                            dateItem.seats > 10 ? 'bg-yellow-100 text-yellow-700' : 
                            'bg-red-100 text-red-700'
                          }`}>
                            {dateItem.seats} seats left
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  <a
                    href={tech.syllabus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-gray-50 hover:bg-gray-100 text-gray-700 py-2.5 rounded-lg transition-all duration-300 font-medium text-sm border border-gray-200"
                  >
                    <FileText size={14} className="mr-2" />
                    Download Full Syllabus (12 Modules)
                  </a>
                  <a
                    href="https://rzp.io/rzp/8KPMtnd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${tech.gradient} hover:opacity-90 text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center font-bold text-sm shadow-md`}
                  >
                    <Zap size={14} className="mr-2" />
                    Enroll Now – Pay ₹999 Only
                  </a>
                  <div className="text-center pt-2">
                    <a
                      href="tel:+919182935039"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 inline-flex items-center font-medium"
                    >
                      <Cpu size={14} className="mr-2" />
                      Need help? Talk to Expert – 9182935039 7207775039
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info - AIGA Specific */}
        <div className="mt-10 text-center mb-12">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg px-6 py-4 border border-purple-100">
            <div className="flex items-center">
              <Clock size={18} className="text-purple-600 mr-2" />
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">{isHybrid ? "50/40 Split" : "90 Hours"}</div>
                <div className="text-xs text-gray-700">Intensive 8-week program</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-purple-200 mx-2"></div>
            <div className="flex items-center">
              <Users size={18} className="text-pink-600 mr-2" />
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">Live + Labs</div>
                <div className="text-xs text-gray-700">Daily hands-on sessions</div>
              </div>
            </div>
            <div className="hidden sm:block w-px h-8 bg-purple-200 mx-2"></div>
            <div className="flex items-center">
              <BookOpen size={18} className="text-indigo-600 mr-2" />
              <div className="text-left">
                <div className="text-sm font-bold text-gray-900">Certification</div>
                <div className="text-xs text-gray-700">Industry-recognized</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section for Offline Batch Timings - Only shown when not hybrid, at the bottom */}
        {!isHybrid && (
          <div className="max-w-5xl mx-auto">
            <div className="bg-gradient-to-r from-indigo-50 via-purple-50 to-pink-50 rounded-2xl overflow-hidden border border-purple-100">
              <div className="px-6 py-8 md:px-8">
                <div className="text-center mb-6">
                  <div className="inline-flex items-center bg-white rounded-full px-4 py-1.5 mb-3 shadow-sm">
                    <Clock size={16} className="text-purple-600 mr-2" />
                    <span className="text-xs font-semibold text-purple-700">Offline Batch Timings</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">Choose Your Preferred Time Slot</h3>
                  <p className="text-gray-600 text-sm">All batches run for 1.5 hours daily, 5 days a week, for 8 weeks</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {batchTimings.map((batch, idx) => (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-4 border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:border-purple-200"
                    >
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-2">
                          <div className="w-10 h-10 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                            <Clock size={18} className="text-purple-600" />
                          </div>
                        </div>
                        <div className="text-gray-900 font-semibold text-sm mb-2">{batch.time}</div>
                        <div className="text-purple-700 font-bold text-xl">{batch.fee}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-center">
                  <p className="text-xs text-gray-500">* Limited seats available per batch. Contact us for more details.</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default TechnologyCards;