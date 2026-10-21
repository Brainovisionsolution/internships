import React, { useState } from 'react';
import { Clock, CheckCircle, Zap, Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BatchTimingProps {
  isOnline: boolean;
}

const BatchTimings: React.FC<BatchTimingProps> = ({ isOnline }) => {
  const [selectedTiming, setSelectedTiming] = useState<number>(0);
  
  const onlineTimings = [
    { 
      time: "06:30 AM – 08:00 AM",
      track: "Generative AI & Agentic AI",
      slot: "Morning Batch",
      fee: "₹999",
      actualFee: "₹1,999",
      duration: "15 Days"
    },
    { 
      time: "09:00 AM – 10:30 AM",
      track: "MERN Stack",
      slot: "Morning Batch",
      fee: "₹999",
      actualFee: "₹1,999",
      duration: "15 Days"
    },
    { 
      time: "11:00 AM – 12:30 PM",
      track: "Python with Data Science, ML, DL etc.",
      slot: "Mid-Day Batch",
      fee: "₹999",
      actualFee: "₹1,999",
      duration: "15 Days"
    },
    { 
      time: "04:30 PM – 06:00 PM",
      track: "AI Film Making",
      slot: "Evening Batch",
      fee: "₹999",
      actualFee: "₹1,999",
      duration: "15 Days"
    },
    { 
      time: "07:00 PM – 08:30 PM",
      track: "Digital Marketing",
      slot: "Prime Evening Batch",
      fee: "₹999",
      actualFee: "₹1,999",
      duration: "15 Days"
    }
  ];

  const offlineTimings = [
    {
      time: "09:30 AM – 05:30 PM",
      track: "AI Film Making Workshop",
      slot: "2 Days Full Immersion",
      fee: "₹5,000",
      actualFee: "₹10,000",
      duration: "2 Days"
    },
    {
      time: "09:30 AM – 05:30 PM",
      track: "Robotics Workshop",
      slot: "1 Day Hardware Bootcamp",
      fee: "₹5,000",
      actualFee: "₹10,000",
      duration: "1 Day"
    }
  ];

  const timings = isOnline ? onlineTimings : offlineTimings;

  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center bg-purple-50 text-purple-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border border-purple-100">
            <Clock size={14} className="mr-1.5" />
            Flexible Timings
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {isOnline ? 'Online Daily Schedule & Time Slots' : 'Offline Workshop Daily Timings'}
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            {isOnline 
              ? 'Convenient 1.5-hour live interactive sessions with lifetime class recordings provided.'
              : 'Comprehensive full-day bootcamp with hardware kits, lab practice, and interactive mentorship.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-10">
          {timings.map((item, index) => (
            <div
              key={index}
              onClick={() => setSelectedTiming(index)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                selectedTiming === index
                  ? 'bg-purple-50/40 border-purple-500 shadow-md -translate-y-1'
                  : 'bg-white border-gray-200 hover:border-purple-300 shadow-sm'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-md border border-purple-100">
                    {item.slot}
                  </span>
                  <span className="text-xs text-gray-500 font-semibold">{item.duration}</span>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.track}</h3>
                <div className="flex items-center text-gray-700 text-sm font-semibold mb-4">
                  <Clock size={15} className="mr-2 text-purple-600" />
                  {item.time}
                </div>
              </div>

              <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                <div>
                  <span className="text-xl font-extrabold text-gray-900">{item.fee}</span>
                  <span className="text-xs text-gray-400 line-through ml-2">{item.actualFee}</span>
                </div>
                <span className="text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full">
                  50% OFF
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BatchTimings;
