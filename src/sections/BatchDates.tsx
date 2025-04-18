import React, { useState } from 'react';
import { Calendar, Check } from 'lucide-react';

interface BatchDatesProps {
  isOnline: boolean;
}

const BatchDates: React.FC<BatchDatesProps> = ({ isOnline }) => {
  const [selectedBatch, setSelectedBatch] = useState<string | null>(null);
  
  const batches = [
    { id: "batch1", date: "5th May 2025", filled: 25 },
    { id: "batch2", date: "12th May 2025", filled: 15 },
    { id: "batch3", date: "19th May 2025", filled: 10 },
    { id: "batch4", date: "26th May 2025", filled: 5 },
    { id: "batch5", date: "2nd June 2025", filled: 0 }
  ];

  const themeColor = isOnline ? 'purple' : 'indigo';
  
  return (
    <section id="batches" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={`inline-flex items-center justify-center p-2 bg-${themeColor}-100 rounded-full mb-4`}>
            <Calendar size={24} className={`text-${themeColor}-600`} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {isOnline ? 'Virtual Training Start Dates' : 'Upcoming Batch Start Dates'}
          </h2>
          <p className="text-lg text-gray-700">
            {isOnline 
              ? 'Choose your preferred start date for virtual training. Multiple dates available throughout May 2025.'
              : 'Pick the batch that fits your schedule best. Multiple start dates are available throughout May 2025.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {batches.map((batch) => (
            <div 
              key={batch.id}
              className={`border rounded-xl p-6 cursor-pointer transition-all duration-300 ${
                selectedBatch === batch.id 
                  ? `border-${themeColor}-500 bg-${themeColor}-50 shadow-md` 
                  : `border-gray-200 hover:border-${themeColor}-300 hover:shadow-sm`
              }`}
              onClick={() => setSelectedBatch(batch.id)}
            >
              <div className="flex justify-between items-start mb-4">
                <div className={`h-12 w-12 bg-${themeColor}-100 rounded-full flex items-center justify-center`}>
                  <Calendar size={24} className={`text-${themeColor}-600`} />
                </div>
                {selectedBatch === batch.id && (
                  <span className={`h-6 w-6 bg-${themeColor}-500 rounded-full flex items-center justify-center`}>
                    <Check size={16} className="text-white" />
                  </span>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{batch.date}</h3>
              <div className="mt-4">
                <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-${themeColor}-500 rounded-full`}
                    style={{ width: `${(batch.filled / 40) * 100}%` }}
                  ></div>
                </div>
                <div className="mt-2 flex justify-between items-center text-sm">
                  <span className="text-gray-600">{batch.filled}/40 seats filled</span>
                  <span className={`text-${themeColor}-600 font-medium`}>{40 - batch.filled} left</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            You can also choose your preferred time slot and technology stack.
            <br />View detailed batch timings below.
          </p>
          <a 
            href="#batch-timings" 
            className={`inline-flex items-center font-medium text-${themeColor}-600 hover:text-${themeColor}-800 transition-colors`}
          >
            View Batch Timings
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-1">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BatchDates;