import React from 'react';
import { Clock, Calendar, Users, FileText, Timer, Code2, Zap, BrainCircuit, TrendingUp, ChevronDown } from 'lucide-react';

const HybridTechnologyCards: React.FC = () => {
  const batchDates = [
    "2nd Feb 2026",
    "9th Feb 2026", 
    "16th Feb 2026",
    "23rd Feb 2026",
    "2nd Mar 2026",
    "9th Mar 2026",
    "16th Mar 2026",
    "23rd Mar 2026"
  ];

  const technologies = [
    {
      title: "Full Stack Development (MERN)",
      time: "10:00 AM to 12:00 PM",
      fee: "₹6,000/-",
      actualFee: "₹14,999",
      discount: "60% OFF",
      gradient: "from-blue-600 to-indigo-400",
      icon: <Code2 size={32} className="text-white" />,
      syllabus: "https://docs.google.com/document/d/e/2PACX-1vS5Dr3vAiZgz6hofAD_9tFQfCv7ldUf1JbMVFvDL0mB4ZquF-uMGEpyrhE6aQrCCcs24mLdFj2h4iw3/pub",
      duration: "3 Months",
      seats: 35,
      dates: batchDates.map(date => ({ date, seats: 35 }))
    },
    {
      title: "Full Stack Development with AI",
      time: "12:00 PM to 01:30 PM",
      fee: "₹6,000/-",
      actualFee: "₹14,999",
      discount: "60% OFF",
      gradient: "from-green-600 to-emerald-400",
      icon: <Zap size={32} className="text-white" />,
      syllabus: "https://docs.google.com/document/d/1olrKCalyLCg0oK9rU5qqwBn79H-NECUF4ubrCm1PpaQ/edit?usp=sharing",
      duration: "3 Months",
      seats: 35,
      dates: batchDates.map(date => ({ date, seats: 35 }))
    },
    {
      title: "Artificial Intelligence (Python + Data Science + Advanced AI)",
      time: "02:30 PM to 04:30 PM",
      fee: "₹6,000/-",
      actualFee: "₹14,999",
      discount: "60% OFF",
      gradient: "from-purple-600 to-pink-400",
      icon: <BrainCircuit size={32} className="text-white" />,
      syllabus: "https://docs.google.com/document/d/1nNYcpPA1_7j-0dQgtYHA5ae-tUEDsBp_i_eOsAxEm_A/edit?usp=sharing",
      duration: "3 Months",
      seats: 35,
      dates: batchDates.map(date => ({ date, seats: 35 }))
    },
    {
      title: "Digital Marketing with AI",
      time: "05:00 PM to 06:30 PM",
      fee: "₹6,000/-",
      actualFee: "₹14,999",
      discount: "60% OFF",
      gradient: "from-orange-600 to-amber-400",
      icon: <TrendingUp size={32} className="text-white" />,
      syllabus: "https://docs.google.com/document/d/1FYBLObcRoI84vPdKuAQjBMFSBse9VCfMNCm5i6WlPsw/edit?usp=sharing",
      duration: "3 Months",
      seats: 35,
      dates: batchDates.map(date => ({ date, seats: 35 }))
    }
  ];

  return (
    <section id="technologies" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hybrid Internship Technology Tracks
          </h2>
          <p className="text-lg text-gray-700">
            Special Winter Offer! All hybrid courses at ₹6,000 (Actual fee ₹14,999) • Multiple batches starting weekly
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-200"
            >
              <div className={`bg-gradient-to-r ${tech.gradient} p-6 relative`}>
                <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-white">Hybrid</span>
                </div>
                <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <span className="text-xs font-semibold text-white">{tech.seats} Seats</span>
                </div>
                
                <div className="flex items-center mb-4 mt-2">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                    {tech.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white leading-tight">{tech.title}</h3>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center text-white/90">
                    <Clock size={16} className="mr-2" />
                    <span className="text-sm">{tech.time}</span>
                  </div>
                  <div className="flex items-center text-white/90">
                    <Timer size={16} className="mr-2" />
                    <span className="text-sm">{tech.duration} Duration</span>
                  </div>
                </div>
              </div>

              <div className="p-6">
                {/* Pricing Section */}
                <div className="mb-6 p-4 bg-gradient-to-r from-gray-50 to-white rounded-lg border border-gray-100">
                  <div className="flex items-baseline justify-between mb-1">
                    <div>
                      <div className="text-2xl font-bold text-gray-900">{tech.fee}</div>
                      <div className="text-sm text-gray-500 line-through">{tech.actualFee}</div>
                    </div>
                    <div className="bg-red-100 text-red-600 text-xs font-semibold px-2 py-1 rounded">
                      {tech.discount}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users size={16} className="mr-2" />
                    <span>{tech.seats} seats per batch • Online + Offline</span>
                  </div>
                </div>

                {/* Batch Dates Section */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-sm font-medium text-gray-700 flex items-center">
                      <Calendar size={16} className="mr-2" />
                      Multiple Batch Dates:
                    </div>
                    <div className="text-xs text-gray-500 flex items-center">
                      <ChevronDown size={14} className="mr-1" />
                      {tech.dates.length} dates
                    </div>
                  </div>
                  <div className="space-y-2 max-h-48 overflow-y-auto pr-2">
                    {tech.dates.map((dateItem, idx) => (
                      <div
                        key={idx}
                        className="rounded-lg p-3 bg-gradient-to-r from-gray-50 to-white border border-gray-100 hover:border-gray-300 transition-colors duration-200"
                      >
                        <div className="flex justify-between items-center">
                          <div className="text-sm font-medium text-gray-900">{dateItem.date}</div>
                          <div className="text-xs font-semibold text-green-600 bg-green-50 px-2 py-1 rounded">
                            {dateItem.seats} seats
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-3">
                  {tech.syllabus !== "#" && (
                    <a
                      href={tech.syllabus}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 rounded-lg transition-all duration-300 font-medium"
                    >
                      <FileText size={16} className="mr-2" />
                      View Syllabus
                    </a>
                  )}
                  <a
                    href="https://rzp.io/rzp/8KPMtnd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${tech.gradient} hover:opacity-90 text-white py-3 rounded-lg transition-all duration-300 flex items-center justify-center font-semibold shadow-md`}
                  >
                    Enroll Now at ₹6,000
                  </a>
                  <div className="text-center">
                    <a
                      href="#contact"
                      className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200 inline-flex items-center"
                    >
                      Need help choosing?
                      <span className="ml-1 font-medium">Talk to Counselor</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center justify-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full px-6 py-3 border border-blue-100">
            <Calendar size={20} className="text-blue-600 mr-2" />
            <span className="text-gray-700 font-medium">
              New hybrid batches start every week • 8 upcoming dates available • Online + Classroom sessions
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridTechnologyCards;