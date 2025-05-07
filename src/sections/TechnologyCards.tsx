import React from 'react';
import { Clock, Calendar, Users, FileText, Timer, Code2, Globe, BrainCircuit, Shield, Cpu, Cloud } from 'lucide-react';

interface TechnologyCardsProps {
  isOnline?: boolean;
}

const TechnologyCards: React.FC<TechnologyCardsProps> = ({ isOnline }) => {
  const technologies = [
    {
      title: "AI using Python",
      time: "06:00 AM to 07:00 AM",
      fee: "₹4,000/-",
      gradient: "from-blue-600 to-blue-400",
      icon: <BrainCircuit size={32} className="text-white" />,
      syllabus: "https://brainovision.in/aiwithpython-ds-ml",
      isFull: true,
      nextBatch: "June 2025",
      dates: [
        { date: "12th May 2025", seats: 0 },
        { date: "19th May 2025", seats: 0 },
        { date: "26th May 2025", seats: 0 },
        { date: "2nd June 2025", seats: 40 }
      ]
    },
    {
      title: "AI with Python, DS & ML",
      time: "07:30 AM to 09:00 AM",
      fee: "₹6,000/-",
      gradient: "from-purple-600 to-indigo-400",
      icon: <BrainCircuit size={32} className="text-white" />,
      syllabus: "https://brainovision.in/aiwithpython-ds-ml",
      dates: [
        { date: "12th May 2025", seats: 36 },
        { date: "19th May 2025", seats: 40 },
        { date: "26th May 2025", seats: 40 },
        { date: "2nd June 2025", seats: 40 }
      ]
    },
    {
      title: "AI with Python, DS & ML",
      time: "09:30 AM to 11:00 AM",
      fee: "₹7,000/-",
      gradient: "from-indigo-600 to-blue-400",
      icon: <BrainCircuit size={32} className="text-white" />,
      syllabus: "https://brainovision.in/aiwithpython-ds-ml",
      dates: [
        { date: "12th May 2025", seats: 12 },
        { date: "19th May 2025", seats: 29 },
        { date: "26th May 2025", seats: 32 },
        { date: "2nd June 2025", seats: 40 }
      ]
    },
    {
      title: "Advanced AI using Python, DS & ML",
      time: "11:30 AM to 01:30 PM",
      fee: "₹8,000/-",
      gradient: "from-green-600 to-emerald-400",
      icon: <BrainCircuit size={32} className="text-white" />,
      syllabus: "https://brainovision.in/aiwithpython-ds-ml",
      dates: [
        { date: "12th May 2025", seats: 21 },
        { date: "19th May 2025", seats: 30 },
        { date: "26th May 2025", seats: 33 },
        { date: "2nd June 2025", seats: 40 }
      ]
    },
    {
      title: "AI with CyberSecurity",
      time: "02:00 PM to 04:00 PM",
      fee: "₹6,000/-",
      gradient: "from-red-600 to-rose-400",
      icon: <Shield size={32} className="text-white" />,
      syllabus: "https://brainovision.in/ai-with-cybersecurity",
      dates: [
        { date: "12th May 2025", seats: 18 },
        { date: "19th May 2025", seats: 36 },
        { date: "26th May 2025", seats: 40 },
        { date: "2nd June 2025", seats: 40 }
      ]
    },
    {
      title: "AI with Cloud (AWS)",
      time: "02:00 PM to 04:00 PM",
      fee: "₹6,000/-",
      gradient: "from-orange-600 to-amber-400",
      icon: <Cloud size={32} className="text-white" />,
      syllabus: "https://brainovision.in/ai-with-aws",
      dates: [
        { date: "12th May 2025", seats: 28 },
        { date: "19th May 2025", seats: 35 },
        { date: "26th May 2025", seats: 40 },
        { date: "2nd June 2025", seats: 40 }
      ]
    },
    {
      title: "AI with MERN Stack",
      time: "04:30 PM to 06:00 PM",
      fee: "₹7,000/-",
      gradient: "from-teal-600 to-emerald-400",
     icon: <Code2 size={32} className="text-white" />,
      syllabus: "https://brainovision.in/ai-with-mern",
      dates: [
        { date: "12th May 2025", seats: 24 },
        { date: "19th May 2025", seats: 31 },
        { date: "26th May 2025", seats: 40 },
        { date: "2nd June 2025", seats: 40 }
      ]
    },
    {
      title: "Python Full Stack with AI",
      time: "06:15 PM to 07:30 PM",
      fee: "₹6,000/-",
      gradient: "from-cyan-600 to-blue-400",
      icon: <BrainCircuit size={32} className="text-white" />,
      syllabus: "https://brainovision.in/python-full-stack-with-ai"
       dates: [
        { date: "5th May 2025", seats: 37 },
        { date: "12th May 2025", seats: 40 },
        { date: "19th May 2025", seats: 40 },
        { date: "26th May 2025", seats: 40 }
      ]
    }
  ];

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('register');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="technologies-offline" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Available Technology Tracks
          </h2>
          <p className="text-lg text-gray-700">
            Choose your preferred technology and batch timing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <div className={`bg-gradient-to-r ${tech.gradient} p-6`}>
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-3">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.title}</h3>
                </div>
                <div className="flex items-center text-white/90 mb-2">
                  <Clock size={16} className="mr-2" />
                  <span>{tech.time}</span>
                </div>
                <div className="flex items-center text-white/90">
                  <Timer size={16} className="mr-2" />
                  <span>2 Months Duration</span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="mb-4">
                  <div className="text-2xl font-bold text-gray-900 mb-2">
                    {tech.fee}
                  </div>
                  <div className="flex items-center text-gray-600 text-sm">
                    <Users size={16} className="mr-2" />
                    <span>40 seats per batch</span>
                  </div>
                </div>

                 <div className="space-y-4">
                  {tech.isFull ? (
                    <div className="bg-red-50 rounded-lg p-4 text-center">
                      <p className="text-red-700 font-medium mb-1">All Slots Full</p>
                      <p className="text-red-600 text-sm">Next batch starts in {tech.nextBatch}</p>
                    </div>
                  ) : (
                    <div>
                      <div className="text-sm font-medium text-gray-700 mb-2 flex items-center">
                        <Calendar size={16} className="mr-2" />
                        Batch Starting Dates:
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        {tech.dates.map((batch, idx) => (
                          <div 
                            key={idx}
                            className={`rounded-lg p-2 text-center ${
                              batch.seats < 10 
                                ? 'bg-red-50 text-red-700' 
                                : batch.seats < 20 
                                ? 'bg-yellow-50 text-yellow-700'
                                : 'bg-gray-50 text-gray-900'
                            }`}
                          >
                            <div className="text-sm font-medium">{batch.date}</div>
                            <div className="text-xs">{batch.seats} seats left</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="mt-6 space-y-3">
                  <a 
                    href={tech.syllabus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2 rounded-lg transition-all duration-300 hover:bg-gray-200"
                  >
                    <FileText size={16} className="mr-2" />
                    View Syllabus
                  </a>
                  {!tech.isFull && (
                    <button 
                      onClick={scrollToRegistration}
                      className={`w-full bg-gradient-to-r ${tech.gradient} text-white py-2 rounded-lg transition-all duration-300 hover:opacity-90 flex items-center justify-center`}
                    >
                      Register Now
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyCards;
