import React from 'react';
import { Clock, Calendar, Users, FileText, Timer, Code2, Globe, BrainCircuit, Cloud, Laptop } from 'lucide-react';

interface OnlineTechnologyCardsProps {
  isOnline: boolean;
}

const OnlineTechnologyCards: React.FC<OnlineTechnologyCardsProps> = ({ isOnline }) => {
  const technologies = [
    {
      title: "Java Full Stack Development",
      time: "06:00 PM - 07:00 PM",
      fee: "₹999/-",
      gradient: "from-blue-600 to-blue-400",
      icon: <Laptop size={32} className="text-white" />,
      syllabus: "https://brainovision.in/ai-internship-java-fullstack-syllabus",
      registration: "https://brainovision.in/online-internship-jfs-registration",
      dates: [
        
        { date: "2nd June 2025", seats: 30 },
        { date: "16th June 2025", seats: 40 },
       { date: "1st July 2025", seats: 40 }

        
      ]
    },
    {
      title: "Digital Marketing",
      time: "09:00 AM - 10:30 AM",
      fee: "₹1,999/-",
      gradient: "from-green-600 to-emerald-400",
      icon: <Globe size={32} className="text-white" />,
      syllabus: "https://brainovision.in/ai-internship-digital-marketing-syllabus",
      registration: "https://brainovision.in/online-internship-registration",
      dates: [
        { date: "2nd June 2025", seats: 15 },
        { date: "9th June 2025", seats: 28 },
        { date: "16th June 2025", seats: 39 },
        { date: "23th June 2025", seats: 40 }
      ]
    },
    {
      title: "MERN Stack",
      time: "11:00 AM - 12:30 PM",
      fee: "₹1,999/-",
      gradient: "from-indigo-600 to-blue-400",
      icon: <Code2 size={32} className="text-white" />,
      syllabus: "https://brainovision.in/ai-internship-mern-syllabus",
      registration: "https://brainovision.in/online-internship-registration",
      dates: [
        { date: "2nd June 2025", seats: 20 },
        { date: "9th June 2025", seats: 16 },
        { date: "16th June 2025", seats: 34 },
        { date: "23th June 2025", seats: 40 }
      ]
    },
    {
      title: "Generative AI",
      time: "07:00 PM - 08:00 PM",
      fee: "₹1,999/-",
      gradient: "from-purple-600 to-indigo-400",
      icon: <BrainCircuit size={32} className="text-white" />,
      syllabus: "https://brainovision.in/ai-internship-gen-ai-syllabus",
      registration: "https://brainovision.in/online-internship-registration",
      dates: [
          { date: "2nd June 2025", seats: 30 },
        { date: "16th June 2025", seats: 40 },
       { date: "1st July 2025", seats: 40 }

      ]
    },
    {
      title: "Java Full Stack Development",
      time: "06:30 PM - 08:00 PM",
      fee: "₹1,999/-",
      gradient: "from-orange-600 to-amber-400",
      icon: <Laptop size={32} className="text-white" />,
      syllabus: "https://brainovision.in/ai-internship-java-fullstack-syllabus",
      registration: "https://brainovision.in/online-internship-registration",
      dates: [
          { date: "2nd June 2025", seats: 30 },
        { date: "16th June 2025", seats: 40 },
       { date: "1st July 2025", seats: 40 }

      ]
    }
  ];

  const scrollToRegistration = () => {
    const registrationSection = document.getElementById('technologies');
    if (registrationSection) {
      registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="technologies" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Available Online Programs
          </h2>
          <p className="text-lg text-gray-700">
            Choose your preferred technology and batch timing
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <a 
                   href={tech.registration}
                   target="_blank"
                   rel="noopener noreferrer"
                   className={`w-full bg-gradient-to-r ${tech.gradient} text-white py-2 rounded-lg transition-all duration-300 hover:opacity-90 flex items-center justify-center`}
                  >
                     Register Now
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineTechnologyCards;
