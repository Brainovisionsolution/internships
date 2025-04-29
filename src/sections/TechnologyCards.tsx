import React from 'react';
import { Clock, Calendar, Users, FileText } from 'lucide-react';

interface TechnologyCardsProps {
  isOnline?: boolean;
}

const TechnologyCards: React.FC<TechnologyCardsProps> = ({ isOnline }) => {
  const registrationLinks = [
    offline: {
      advance: "https://brainovision.in/offline-internship-advancepay",
      syllabus: "https://brainovision.in/offline-internship-ai-syllabus"
    },
  ]
  const technologies = [
    {
      title: "AI using Python",
      time: "06:00 AM to 07:00 AM",
      fee: "₹4,000/-",
      gradient: "from-blue-600 to-blue-400",
      syllabus: "https://brainovision.in/ai-internship-python-syllabus",
      dates: [
        { date: "5th May 2025", seats: 35 },
        { date: "12th May 2025", seats: 40 },
        { date: "19th May 2025", seats: 40 },
        { date: "26th May 2025", seats: 40 }
      ]
    },
    {
      title: "AI with Cloud (AWS)",
      time: "07:30 AM to 09:00 AM",
      fee: "₹5,000/-",
      gradient: "from-purple-600 to-indigo-400",
      syllabus: "https://brainovision.in/ai-internship-aws-syllabus",
      dates: [
        { date: "5th May 2025", seats: 30 },
        { date: "12th May 2025", seats: 38 },
        { date: "19th May 2025", seats: 40 },
        { date: "26th May 2025", seats: 40 }
      ]
    },
    {
      title: "AI with MERN Stack (WEB)",
      time: "09:30 AM to 11:00 AM",
      fee: "₹7,000/-",
      gradient: "from-indigo-600 to-blue-400",
      syllabus: "https://brainovision.in/ai-internship-mern-syllabus",
      dates: [
        { date: "5th May 2025", seats: 25 },
        { date: "12th May 2025", seats: 35 },
        { date: "19th May 2025", seats: 40 },
        { date: "26th May 2025", seats: 40 }
      ]
    },
    {
      title: "Advanced AI using Python",
      time: "11:30 AM to 01:30 PM",
      fee: "₹8,000/-",
      gradient: "from-green-600 to-emerald-400",
      syllabus: "https://brainovision.in/ai-internship-advanced-python-syllabus",
      dates: [
        { date: "5th May 2025", seats: 20 },
        { date: "12th May 2025", seats: 32 },
        { date: "19th May 2025", seats: 38 },
        { date: "26th May 2025", seats: 40 }
      ]
    },
    {
      title: "AI with Cybersecurity",
      time: "02:00 PM to 04:00 PM",
      fee: "₹7,000/-",
      gradient: "from-red-600 to-rose-400",
      syllabus: "https://brainovision.in/ai-internship-cybersecurity-syllabus",
      dates: [
        { date: "5th May 2025", seats: 28 },
        { date: "12th May 2025", seats: 36 },
        { date: "19th May 2025", seats: 40 },
        { date: "26th May 2025", seats: 40 }
      ]
    },
    {
      title: "Internet Of Things - IOT",
      time: "04:30 PM to 06:00 PM",
      fee: "₹7,000/-",
      gradient: "from-orange-600 to-amber-400",
      syllabus: "https://brainovision.in/ai-internship-iot-syllabus",
      dates: [
        { date: "5th May 2025", seats: 33 },
        { date: "12th May 2025", seats: 37 },
        { date: "19th May 2025", seats: 40 },
        { date: "26th May 2025", seats: 40 }
      ]
    },
    {
      title: "AI with Python",
      time: "06:15 PM to 07:30 PM",
      fee: "₹5,000/-",
      gradient: "from-teal-600 to-emerald-400",
      syllabus: "https://brainovision.in/ai-internship-python-evening-syllabus",
      dates: [
        { date: "5th May 2025", seats: 31 },
        { date: "12th May 2025", seats: 38 },
        { date: "19th May 2025", seats: 40 },
        { date: "26th May 2025", seats: 40 }
      ]
    },
    {
      title: "Python with AI",
      time: "07:45 PM to 08:30 PM",
      fee: "₹4,000/-",
      gradient: "from-cyan-600 to-blue-400",
      syllabus: "https://brainovision.in/ai-internship-python-night-syllabus",
      dates: [
        { date: "5th May 2025", seats: 34 },
        { date: "12th May 2025", seats: 39 },
        { date: "19th May 2025", seats: 40 },
        { date: "26th May 2025", seats: 40 }
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
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
                <h3 className="text-xl font-bold text-white mb-2">{tech.title}</h3>
                <div className="flex items-center text-white/90">
                  <Clock size={16} className="mr-2" />
                  <span>{tech.time}</span>
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
                          className="bg-gray-50 rounded-lg p-2 text-center"
                        >
                          <div className="text-sm font-medium text-gray-900">{batch.date}</div>
                          <div className="text-xs text-gray-600">{batch.seats} seats left</div>
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
                  href={registrationLinks.offline.advance}
                    target="_blank"
                    rel="noopener noreferrer"
                  <button className={`w-full bg-gradient-to-r ${tech.gradient} text-white py-2 rounded-lg transition-all duration-300 hover:opacity-90`}>
                    Register Now
                  </button>
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

export default TechnologyCards;
