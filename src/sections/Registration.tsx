import React, { useState } from 'react';
import { Calendar, Clock, CreditCard, ExternalLink, Monitor, Users, Laptop } from 'lucide-react';

type InternshipMode = 'online' | 'offline' | 'hybrid';

interface BatchTiming {
  time: string;
  fee: string;
  mode: InternshipMode[];
}

const Registration: React.FC = () => {
  const [selectedMode, setSelectedMode] = useState<InternshipMode>('online');
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  
  const batchDates = [
    "5th May 2025",
    "12th May 2025",
    "19th May 2025",
    "26th May 2025"
  ];
  
  const batchTimings: BatchTiming[] = [
    { time: "06:00 AM to 07:00 AM", fee: "₹4,000", mode: ['online'] },
    { time: "07:30 AM to 09:00 AM", fee: "₹5,000", mode: ['online', 'offline'] },
    { time: "09:30 AM to 11:00 AM", fee: "₹6,000", mode: ['online', 'offline', 'hybrid'] },
    { time: "11:30 AM to 01:30 PM", fee: "₹8,000", mode: ['offline', 'hybrid'] },
    { time: "02:00 PM to 04:00 PM", fee: "₹8,000", mode: ['offline'] },
    { time: "04:30 PM to 06:00 PM", fee: "₹5,000", mode: ['online', 'offline'] },
    { time: "06:30 PM to 08:00 PM", fee: "₹4,000", mode: ['online'] },
    { time: "08:00 PM to 09:00 PM", fee: "₹3,000", mode: ['online'] }
  ];

  const modeFeatures = {
    online: [
      "Live Virtual Classes via Zoom",
      "Interactive Learning Platform",
      "24/7 Online Support",
      "Recorded Sessions Access",
      "Virtual Lab Environment",
      "Online Project Mentoring"
    ],
    offline: [
      "Physical Classroom Training",
      "Direct Interaction with Trainers",
      "Access to Lab Facilities",
      "Networking Opportunities",
      "In-person Project Guidance",
      "Campus Environment"
    ],
    hybrid: [
      "Flexible Attendance Options",
      "Both Online & Offline Access",
      "Personalized Learning Path",
      "Extended Support Hours",
      "Dual Mode Resources",
      "Maximum Learning Flexibility"
    ]
  };

  const filteredTimings = batchTimings.filter(timing => timing.mode.includes(selectedMode));

  return (
    <section id="register" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Mode
            </h2>
            <p className="text-lg text-gray-700">
              Select the internship mode that best suits your learning style and schedule
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg border border-gray-200 p-1 bg-gray-50">
              <button
                onClick={() => setSelectedMode('online')}
                className={`flex items-center px-4 py-2 rounded-md ${
                  selectedMode === 'online'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                <Monitor size={18} className="mr-2" />
                Virtual (LIVE)
              </button>
              <button
                onClick={() => setSelectedMode('offline')}
                className={`flex items-center px-4 py-2 rounded-md ${
                  selectedMode === 'offline'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                <Users size={18} className="mr-2" />
                Offline
              </button>
              <button
                onClick={() => setSelectedMode('hybrid')}
                className={`flex items-center px-4 py-2 rounded-md ${
                  selectedMode === 'hybrid'
                    ? 'bg-indigo-600 text-white'
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                <Laptop size={18} className="mr-2" />
                Hybrid
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-200 mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {selectedMode === 'online' ? 'Virtual Internship Benefits' :
                   selectedMode === 'offline' ? 'Offline Internship Benefits' :
                   'Hybrid Internship Benefits'}
                </h3>
                <ul className="space-y-3">
                  {modeFeatures[selectedMode].map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-indigo-50 rounded-xl p-6">
                <h3 className="text-xl font-semibold text-indigo-900 mb-3">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone size={18} className="text-indigo-600 mr-3" />
                    <span className="text-gray-700">+91 7207775039 | +91 7416935039</span>
                  </div>
                  <div className="flex items-center">
                    <Mail size={18} className="text-indigo-600 mr-3" />
                    <span className="text-gray-700">it@brainovision.in</span>
                  </div>
                  <div className="flex items-start">
                    <MapPin size={18} className="text-indigo-600 mr-3 mt-1" />
                    <span className="text-gray-700">2nd Floor, SS Chambers, Ayyappa Society, HITEC City, Madhapur, Hyderabad</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-6 bg-indigo-600 text-white">
                  <h3 className="text-2xl font-bold mb-2">Registration Form</h3>
                  <p className="text-indigo-100">Select your preferred batch date and time</p>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-3 flex items-center">
                      <Calendar size={18} className="text-indigo-600 mr-2" />
                      Select Batch Start Date
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {batchDates.map((date, index) => (
                        <div 
                          key={index}
                          className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                            selectedBatch === date 
                              ? 'border-indigo-500 bg-indigo-50' 
                              : 'border-gray-200 hover:border-indigo-300'
                          }`}
                          onClick={() => setSelectedBatch(date)}
                        >
                          <div className="flex items-center justify-between">
                            <span className="font-medium">{date}</span>
                            {selectedBatch === date && (
                              <div className="h-5 w-5 bg-indigo-500 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <label className="block text-gray-700 font-medium mb-3 flex items-center">
                      <Clock size={18} className="text-indigo-600 mr-2" />
                      Select Time Slot
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 max-h-48 overflow-y-auto pr-2">
                      {filteredTimings.map((timing, index) => (
                        <div 
                          key={index}
                          className={`border rounded-lg p-3 cursor-pointer transition-colors ${
                            selectedTime === timing.time 
                              ? 'border-indigo-500 bg-indigo-50' 
                              : 'border-gray-200 hover:border-indigo-300'
                          }`}
                          onClick={() => setSelectedTime(timing.time)}
                        >
                          <div className="flex items-center justify-between">
                            <div>
                              <span className="block font-medium text-sm">{timing.time}</span>
                              <span className="text-gray-500 text-sm">{timing.fee}</span>
                            </div>
                            {selectedTime === timing.time && (
                              <div className="h-5 w-5 bg-indigo-500 rounded-full flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                                  <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="pt-4 pb-2 border-t border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-600">Registration Fee:</span>
                      <span className="font-bold text-gray-900">₹999</span>
                    </div>
                    <div className="mb-6 bg-yellow-50 p-3 rounded-lg border border-yellow-200">
                      <div className="flex items-start">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500 mr-2 mt-0.5">
                          <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                          <path d="M12 9v4"></path>
                          <path d="M12 17h.01"></path>
                        </svg>
                        <p className="text-sm text-gray-700">
                          <span className="font-medium">Note:</span> The remaining fee will be collected on day 1 of the internship. 
                          This ₹999 guarantees your seat in the selected batch.
                        </p>
                      </div>
                    </div>
                    <a 
                      href="https://rzp.io/rzp/Yf9F3tm"
                      className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-4 py-3 flex items-center justify-center transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CreditCard size={18} className="mr-2" />
                      Pay ₹999 to Secure Your Spot
                      <ExternalLink size={18} className="ml-2" />
                    </a>
                    <p className="text-center text-sm text-gray-500 mt-4">
                      Secure payment processing with Razorpay
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icons
const Phone: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
  </svg>
);

const Mail: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="4" width="20" height="16" rx="2"></rect>
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
  </svg>
);

const MapPin: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
    <circle cx="12" cy="10" r="3"></circle>
  </svg>
);

export default Registration;