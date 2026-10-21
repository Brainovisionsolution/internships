import React, { useState } from 'react';
import { Calendar, Check, Clock, Users, Zap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BatchDatesProps {
  isOnline: boolean;
}

const BatchDates: React.FC<BatchDatesProps> = ({ isOnline }) => {
  const [selectedBatch, setSelectedBatch] = useState<number>(0);

  const onlineBatches = [
    { date: "1st Nov 2026", day: "Sunday", seats: "90 Seats", status: "Filling Fast", timing: "Daily 1.5 Hours" },
    { date: "15th Nov 2026", day: "Sunday", seats: "85 Seats", status: "Open", timing: "Daily 1.5 Hours" },
    { date: "1st Dec 2026", day: "Tuesday", seats: "90 Seats", status: "Open", timing: "Daily 1.5 Hours" },
    { date: "15th Dec 2026", day: "Tuesday", seats: "90 Seats", status: "Open", timing: "Daily 1.5 Hours" }
  ];

  const offlineBatches = [
    { date: "1st Nov 2026", day: "Weekend Batch", seats: "30 Seats", status: "Filling Fast", timing: "09:30 AM – 05:30 PM" },
    { date: "15th Nov 2026", day: "Weekend Batch", seats: "30 Seats", status: "Open", timing: "09:30 AM – 05:30 PM" },
    { date: "1st Dec 2026", day: "Weekday Batch", seats: "30 Seats", status: "Open", timing: "09:30 AM – 05:30 PM" },
    { date: "15th Dec 2026", day: "Weekday Batch", seats: "30 Seats", status: "Open", timing: "09:30 AM – 05:30 PM" }
  ];

  const batches = isOnline ? onlineBatches : offlineBatches;

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center bg-purple-50 text-purple-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border border-purple-100">
            <Calendar size={14} className="mr-1.5" />
            Upcoming Batch Calendar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            {isOnline ? 'Online Internship Batch Dates' : 'Offline Workshop Batch Dates'}
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            {isOnline 
              ? 'Starting November 1st • New 15-Day Batch Every 15 Days • All 5 Technologies @ ₹999 Only'
              : 'Starting November 1st • Batches Every 15 Days • AI Film Making (2 Days) & Robotics (1 Day) @ ₹5,000 Only'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-10">
          {batches.map((batch, index) => (
            <div
              key={index}
              onClick={() => setSelectedBatch(index)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border text-center ${
                selectedBatch === index
                  ? 'bg-gradient-to-b from-purple-50 to-white border-purple-500 shadow-lg -translate-y-1'
                  : 'bg-white border-gray-200 hover:border-purple-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-500 uppercase">{batch.day}</span>
                <span className="bg-green-100 text-green-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  {batch.status}
                </span>
              </div>
              <div className="text-2xl font-extrabold text-gray-900 mb-1">{batch.date}</div>
              <div className="text-xs text-purple-700 font-semibold mb-3 flex items-center justify-center">
                <Clock size={13} className="mr-1" />
                {batch.timing}
              </div>
              <div className="text-xs text-gray-500 pb-3 border-b border-gray-100 mb-3">
                {batch.seats} Available
              </div>
              <div className="text-sm font-bold text-gray-900">
                {isOnline ? '₹999/- Only' : '₹5,000/- Only'}
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-3">
            <a
              href={isOnline ? "https://rzp.io/rzp/ze2KGkb" : "https://rzp.io/rzp/8KPMtnd"}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 text-white font-bold px-8 py-3.5 rounded-xl shadow-md transition-all flex items-center text-sm"
            >
              <Zap size={16} className="mr-2" />
              Book Batch on {batches[selectedBatch].date}
            </a>
            {!isOnline && (
              <Link
                to="/robotics"
                className="bg-blue-50 hover:bg-blue-100 text-blue-700 font-bold px-6 py-3.5 rounded-xl border border-blue-200 transition-all text-sm flex items-center"
              >
                Go to Dedicated Robotics Page
                <ArrowRight size={15} className="ml-1.5" />
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BatchDates;
