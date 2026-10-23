import React from 'react';
import { CreditCard, Mail, Laptop, Award, Sparkles } from 'lucide-react';

const HybridInternshipFlow: React.FC = () => {
  const steps = [
    {
      icon: <CreditCard className="text-teal-600" size={24} />,
      title: "Step 1: Reserve Slot",
      description: "Book your slot online for ₹999 (included in the total fee) or enroll directly at ₹6,000 for your preferred track."
    },
    {
      icon: <Mail className="text-teal-600" size={24} />,
      title: "Step 2: Offer Letter & LMS",
      description: "Receive your AICTE-aligned internship offer letter within 24-48 hours along with credentials to our 1-year premium LMS."
    },
    {
      icon: <Laptop className="text-teal-600" size={24} />,
      title: "Step 3: Live & Flexible Learning",
      description: "Attend interactive weekend live sessions and proceed through recorded weekday practical modules with mentor support."
    },
    {
      icon: <Award className="text-teal-600" size={24} />,
      title: "Step 4: Lab Immersion & Demo Day",
      description: "Visit our Hyderabad campus for optional lab reviews, present your production capstone project, and earn your verified certificate."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-teal-50 via-emerald-50/30 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-teal-100/70 text-teal-800 rounded-full px-4 py-1 text-xs font-semibold mb-3">
            <Sparkles size={14} className="mr-1.5" />
            Flexible Roadmap
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">
            Hybrid Internship Journey
          </h2>
          <p className="text-lg text-gray-600">
            A seamless 4-step workflow combining the convenience of online learning with in-person campus mentoring.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-teal-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative"
              >
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-md">
                  {index + 1}
                </div>
                <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 mx-auto mt-4 shadow-inner">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{step.title}</h3>
                <p className="text-gray-600 text-center text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridInternshipFlow;
