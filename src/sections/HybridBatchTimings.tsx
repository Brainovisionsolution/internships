import React, { useState } from 'react';
import { Clock, Laptop, MapPin, Zap } from 'lucide-react';

const HybridBatchTimings: React.FC = () => {
  const [selectedTiming, setSelectedTiming] = useState<number>(0);
  
  const hybridTimings = [
    { 
      time: "10:00 AM – 12:00 PM",
      track: "Full Stack Development (MERN)",
      slot: "Morning Hybrid Track",
      fee: "₹6,000",
      actualFee: "₹14,999",
      duration: "3 Months",
      mode: "Live Virtual + Weekend Campus Lab"
    },
    { 
      time: "12:00 PM – 01:30 PM",
      track: "Full Stack Development with AI",
      slot: "Mid-Day Hybrid Track",
      fee: "₹6,000",
      actualFee: "₹14,999",
      duration: "3 Months",
      mode: "Live Virtual + Weekend Campus Lab"
    },
    { 
      time: "02:30 PM – 04:30 PM",
      track: "Artificial Intelligence (Python + Data Science + Advanced AI)",
      slot: "Afternoon Hybrid Track",
      fee: "₹6,000",
      actualFee: "₹14,999",
      duration: "3 Months",
      mode: "Live Virtual + Weekend Campus Lab"
    },
    { 
      time: "05:00 PM – 06:30 PM",
      track: "Digital Marketing with AI",
      slot: "Evening Hybrid Track",
      fee: "₹6,000",
      actualFee: "₹14,999",
      duration: "3 Months",
      mode: "Live Virtual + Weekend Campus Lab"
    }
  ];

  return (
    <section id="timings" className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center bg-teal-50 text-teal-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border border-teal-100">
            <Clock size={14} className="mr-1.5" />
            Flexible Daily & Weekend Schedule
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Hybrid Track Timings
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Structured session slots designed to accommodate college schedules alongside offline Hyderabad lab access.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {hybridTimings.map((timing, index) => (
            <div
              key={index}
              onClick={() => setSelectedTiming(index)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                selectedTiming === index
                  ? 'bg-gradient-to-b from-teal-50 to-white border-teal-500 shadow-xl -translate-y-1 ring-2 ring-teal-400/20'
                  : 'bg-white border-gray-200 hover:border-teal-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full uppercase">
                    {timing.slot}
                  </span>
                  <span className="text-xs font-semibold text-gray-500">{timing.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug">{timing.track}</h3>
                <div className="text-sm font-extrabold text-teal-800 flex items-center mb-3">
                  <Clock size={15} className="mr-1.5 text-teal-600" />
                  {timing.time}
                </div>
                <p className="text-xs text-gray-500 mb-4 flex items-center">
                  <MapPin size={13} className="mr-1 text-emerald-600 flex-shrink-0" />
                  {timing.mode}
                </p>
              </div>

              <div className="pt-4 border-t border-gray-100 mt-2">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs text-gray-500">Program Fee</span>
                  <div className="text-right">
                    <span className="text-lg font-extrabold text-gray-900">{timing.fee}</span>
                    <span className="text-xs text-gray-400 line-through ml-1.5">{timing.actualFee}</span>
                  </div>
                </div>
                <a
                  href="https://rzp.io/rzp/8KPMtnd"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center w-full bg-teal-700 hover:bg-teal-800 text-white font-semibold py-2.5 rounded-xl text-xs transition duration-200 shadow-sm"
                >
                  Join This Batch
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Lab access banner */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-gray-900 via-teal-950 to-gray-900 rounded-2xl p-6 text-white text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="font-bold text-base flex items-center justify-center sm:justify-start gap-2">
              <MapPin size={18} className="text-emerald-400" />
              Brainovision Hyderabad Campus Lab Access Included
            </h4>
            <p className="text-xs text-gray-300 mt-1">
              All hybrid interns receive weekend campus entry for live mentor code reviews and hardware / GPU workstations.
            </p>
          </div>
          <a
            href="https://rzp.io/rzp/8KPMtnd"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-emerald-500 hover:bg-emerald-400 text-gray-900 font-bold px-6 py-2.5 rounded-xl text-xs transition duration-200 whitespace-nowrap shadow-md"
          >
            Enroll in Hybrid Track
          </a>
        </div>
      </div>
    </section>
  );
};

export default HybridBatchTimings;
