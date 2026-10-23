import React, { useState } from 'react';
import { Calendar, Clock, Laptop, MapPin, Zap } from 'lucide-react';

const HybridBatchDates: React.FC = () => {
  const [selectedBatch, setSelectedBatch] = useState<number>(0);

  const hybridBatches = [
    { date: "1st Nov 2026", day: "Sunday", seats: "35 Seats", status: "Filling Fast", timing: "Live Virtual + Weekend Lab" },
    { date: "15th Nov 2026", day: "Sunday", seats: "35 Seats", status: "Open", timing: "Live Virtual + Weekend Lab" },
    { date: "1st Dec 2026", day: "Tuesday", seats: "35 Seats", status: "Open", timing: "Live Virtual + Weekend Lab" },
    { date: "15th Dec 2026", day: "Tuesday", seats: "35 Seats", status: "Open", timing: "Live Virtual + Weekend Lab" },
    { date: "1st Jan 2027", day: "Friday", seats: "35 Seats", status: "Open", timing: "Live Virtual + Weekend Lab" }
  ];

  return (
    <section id="batches" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50 border-t border-gray-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center bg-teal-50 text-teal-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border border-teal-100">
            <Calendar size={14} className="mr-1.5" />
            Hybrid Cohort Calendar
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Hybrid Internship Batch Dates
          </h2>
          <p className="text-base md:text-lg text-gray-600">
            Choose your preferred start date • 3 Months Duration • Complete Hybrid Access @ ₹6,000 Only
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 max-w-6xl mx-auto mb-10">
          {hybridBatches.map((batch, index) => (
            <div
              key={index}
              onClick={() => setSelectedBatch(index)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border text-center ${
                selectedBatch === index
                  ? 'bg-gradient-to-b from-teal-50 to-white border-teal-500 shadow-lg -translate-y-1'
                  : 'bg-white border-gray-200 hover:border-teal-300 shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-gray-500 uppercase">{batch.day}</span>
                <span className="bg-emerald-100 text-emerald-700 text-[10px] font-extrabold px-2 py-0.5 rounded-full">
                  {batch.status}
                </span>
              </div>
              <div className="text-xl font-extrabold text-gray-900 mb-1">{batch.date}</div>
              <div className="text-xs text-teal-700 font-semibold mb-3 flex items-center justify-center">
                <Clock size={13} className="mr-1" />
                {batch.timing}
              </div>
              <div className="text-xs text-gray-500 pb-3 border-b border-gray-100 mb-3">
                {batch.seats} Available
              </div>
              <div className="text-xs font-semibold text-emerald-600 flex items-center justify-center">
                <Zap size={13} className="mr-1" />
                Reserve for ₹999
              </div>
            </div>
          ))}
        </div>

        {/* Selected Batch Summary Box */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 text-white rounded-2xl p-6 md:p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <span className="text-xs font-bold bg-emerald-500/30 text-emerald-300 px-3 py-1 rounded-full uppercase tracking-wider">
              Selected Cohort: {hybridBatches[selectedBatch].date}
            </span>
            <h3 className="text-xl md:text-2xl font-bold">
              3 Months Hybrid Immersion (Live Online + Hyderabad Lab)
            </h3>
            <p className="text-sm text-teal-100 flex flex-wrap items-center justify-center md:justify-start gap-4">
              <span className="flex items-center"><Laptop size={15} className="mr-1" /> Live Weekend Cohorts</span>
              <span className="flex items-center"><MapPin size={15} className="mr-1" /> Hyderabad Campus Lab Mentoring</span>
              <span className="text-emerald-300 font-bold">Total Fee: ₹6,000/- Only</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <a
              href="https://rzp.io/rzp/8KPMtnd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-emerald-400 hover:bg-emerald-300 text-teal-950 font-bold px-6 py-3 rounded-xl transition duration-300 text-center shadow-lg text-sm"
            >
              Enroll at ₹6,000
            </a>
            <a
              href="https://rzp.io/rzp/8KPMtnd"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-6 py-3 rounded-xl transition duration-300 text-center text-sm"
            >
              Book Seat @ ₹999
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridBatchDates;
