import React, { useState } from 'react';
import { Clock, CheckCircle } from 'lucide-react';

interface BatchTimingProps {
  isOnline: boolean;
}

const BatchTimings: React.FC<BatchTimingProps> = ({ isOnline }) => {
  const [selectedTiming, setSelectedTiming] = useState<string | null>(null);
  
  const onlineTimings = [
    { 
      time: "06:30 AM - 07:45 AM",
      technologies: ["JAVA FULL STACK", "DIGITAL MARKETING"],
      fee: "₹999"
    },
    { 
      time: "09:00 AM – 10:30 AM",
      technologies: ["MERN STACK"],
      fee: "₹1999"
    },
    { 
      time: "11:00 AM – 12:30 PM",
      technologies: ["GENERATIVE AI"],
      fee: "₹1999"
    },
    { 
      time: "02:30 PM – 04:00 PM",
      technologies: ["MERN STACK"],
      fee: "₹1999"
    },
    { 
      time: "06:30 PM – 08:00 PM",
      technologies: ["SERVICE NOW"],
      fee: "₹2999"
    }
  ];

  const offlineTimings = [
    { time: "06:00 AM to 07:00 AM", fee: "₹4,000" },
    { time: "07:30 AM to 09:00 AM", fee: "₹5,000" },
    { time: "09:30 AM to 11:00 AM", fee: "₹6,000" },
    { time: "11:30 AM to 01:30 PM", fee: "₹8,000" },
    { time: "02:00 PM to 04:00 PM", fee: "₹8,000" },
    { time: "04:30 PM to 06:00 PM", fee: "₹5,000" },
    { time: "06:30 PM to 08:00 PM", fee: "₹4,000" },
    { time: "08:00 PM to 09:00 PM", fee: "₹3,000" }
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
              : 'Choose from 8 different time slots that best suit your schedule'}
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
                      
                      <div className="flex items-center justify-between md:justify-end">
                        <span className={`text-lg font-semibold ${
                          selectedTiming === timing.time ? `text-${themeColor}-600` : 'text-gray-900'
                        }`}>
                          {timing.fee}
                        </span>
                        {selectedTiming === timing.time && (
                          <div className="ml-4 h-6 w-6 bg-green-500 rounded-full flex items-center justify-center">
                            <CheckCircle size={16} className="text-white" />
                          </div>
                        )}
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
                <p className="text-gray-600 text-sm">
                  Remaining fee to be paid on day 1 of the internship
                </p>
              </div>
              <a 
                href="https://rzp.io/rzp/q7TKH2NL"
                className={`bg-${themeColor}-600 hover:bg-${themeColor}-700 text-white font-medium rounded-lg px-6 py-3 transition-colors duration-300 w-full sm:w-auto text-center`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Book Your slot with ₹999 Only
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchTimings;