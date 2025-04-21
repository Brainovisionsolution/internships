import React, { useState } from 'react';
import { Clock, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BatchTimingProps {
  isOnline: boolean;
}

const BatchTimings: React.FC<BatchTimingProps> = ({ isOnline }) => {
  const [selectedTiming, setSelectedTiming] = useState<string | null>(null);
  
  const onlineTimings = [
    { 
      time: "06:30 AM - 07:45 AM",
      technologies: ["Java Full Stack"],
      fee: "₹999",
      syllabus: "https://brainovision.in/ai-internship-java-fullstack-syllabus"
    },
    { 
      time: "06:30 AM - 07:45 AM",
      technologies: ["Digital Marketing"],
      fee: "₹1,999",
      syllabus: "https://brainovision.in/ai-internship-digital-marketing-syllabus"
    },
    { 
      time: "09:00 AM - 10:30 AM",
      technologies: ["MERN Stack"],
      fee: "₹1,999",
      syllabus: "https://brainovision.in/ai-internship-mern-syllabus"
    },
    { 
      time: "11:00 AM - 12:30 PM",
      technologies: ["Generative AI"],
      fee: "₹1,999",
      syllabus: "https://brainovision.in/ai-internship-gen-ai-syllabus"
    },
    { 
      time: "02:30 PM - 04:00 PM",
      technologies: ["MERN Stack"],
      fee: "₹1,999",
      syllabus: "https://brainovision.in/ai-internship-mern-syllabus"
    },
    { 
      time: "06:30 PM - 08:00 PM",
      technologies: ["ServiceNow (L1)"],
      fee: "₹2,999",
      syllabus: "https://brainovision.in/ai-internship-servicenow-syllabus"
    }
  ];

  const offlineTimings = [
    { 
      time: "06:00 AM to 07:00 AM", 
      fee: "₹4,000",
      syllabus: "https://brainovision.in/offline-internship-ai-syllabus"
    },
    { 
      time: "07:30 AM to 09:00 AM", 
      fee: "₹5,000",
      syllabus: "https://brainovision.in/offline-internship-ai-syllabus"
    },
    { 
      time: "09:30 AM to 11:00 AM", 
      fee: "₹6,000",
      syllabus: "https://brainovision.in/offline-internship-ai-syllabus"
    },
    { 
      time: "11:30 AM to 01:30 PM", 
      fee: "₹8,000",
      syllabus: "https://brainovision.in/offline-internship-ai-syllabus"
    },
    { 
      time: "02:00 PM to 04:00 PM", 
      fee: "₹8,000",
      syllabus: "https://brainovision.in/offline-internship-ai-syllabus"
    },
    { 
      time: "04:30 PM to 06:00 PM", 
      fee: "₹5,000",
      syllabus: "https://brainovision.in/offline-internship-ai-syllabus"
    },
    { 
      time: "06:30 PM to 08:00 PM", 
      fee: "₹4,000",
      syllabus: "https://brainovision.in/offline-internship-ai-syllabus"
    },
    { 
      time: "08:00 PM to 09:00 PM", 
      fee: "₹4,000",
      syllabus: "https://brainovision.in/offline-internship-ai-syllabus"
    }
  ];

  const timings = isOnline ? onlineTimings : offlineTimings;
  const themeColor = isOnline ? 'purple' : 'indigo';
  
  return (
    <section id="batch-timings" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={`inline-flex items-center justify-center p-2 bg-${themeColor}-100 rounded-full mb-4`}>
            <Clock size={24} className={`text-${themeColor}-600`} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isOnline ? 'Virtual Batch Timings & Technologies' : 'Batch Timings & Fee Structure'}
          </h2>
          <p className="text-lg text-gray-700">
            {isOnline 
              ? 'Choose your preferred technology and time slot for virtual training'
              : 'Choose from multiple time slots that best suit your schedule'}
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden">
          <div className="p-6 md:p-8 border-b border-gray-200">
            <h3 className="text-xl font-semibold text-gray-900">Select Your Preferred Batch Timing</h3>
            <p className="text-gray-600 mt-1">Different time slots are available at different pricing</p>
          </div>
          
          <div className="overflow-x-auto">
            <div className="min-w-full p-6">
              <div className="grid grid-cols-1 gap-4">
                {timings.map((timing, index) => (
                  <div 
                    key={index}
                    className={`border rounded-lg p-4 cursor-pointer transition-colors ${
                      selectedTiming === timing.time ? `bg-${themeColor}-50 border-${themeColor}-500` : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onClick={() => setSelectedTiming(timing.time)}
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <div className="flex items-center mb-3 md:mb-0">
                        <Clock size={18} className={`mr-2 ${selectedTiming === timing.time ? `text-${themeColor}-600` : 'text-gray-500'}`} />
                        <span className={`font-medium ${
                          selectedTiming === timing.time ? `text-${themeColor}-800` : 'text-gray-900'
                        }`}>
                          {timing.time}
                        </span>
                      </div>
                      
                      {isOnline && (
                        <div className="flex flex-wrap gap-2 mb-3 md:mb-0">
                          {(timing as any).technologies.map((tech: string, idx: number) => (
                            <span key={idx} className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${themeColor}-100 text-${themeColor}-800`}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <div className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4">
                        <span className={`text-lg font-semibold ${
                          selectedTiming === timing.time ? `text-${themeColor}-600` : 'text-gray-900'
                        }`}>
                          {timing.fee}
                        </span>
                        <div className="flex gap-2">
                          <a 
                            href={timing.syllabus}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`text-sm text-${themeColor}-600 hover:text-${themeColor}-700 underline`}
                          >
                            View Syllabus
                          </a>
                          <a 
                            href="#register"
                            className={`text-sm text-${themeColor}-600 hover:text-${themeColor}-700 underline`}
                          >
                            Register Now
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="p-6 md:p-8 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <div>
                <p className="text-gray-600 mb-1">
                  Registration Fee: <span className="font-semibold">₹999</span>
                </p>
                {!isOnline && (
                  <p className="text-gray-600 text-sm">
                    Full payment option available with additional 20% off
                  </p>
                )}
                <p className="text-gray-600 text-sm">
                  {isOnline ? 'One-time payment only' : 'Remaining fee to be paid on day 1 of the internship'}
                </p>
              </div>
              <a 
                    href="#register"
                className={`bg-${themeColor}-600 text-white px-6 py-2 rounded-lg hover:bg-${themeColor}-700 transition-colors duration-300`}
              >
                Register Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchTimings;
