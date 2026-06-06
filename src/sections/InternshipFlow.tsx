import React from 'react';
import { CheckCircle, Calendar, CreditCard, Mail, Briefcase, Award } from 'lucide-react';

const InternshipFlow: React.FC = () => {
  const steps = [
    {
      icon: <CreditCard className="text-purple-600" size={24} />,
      title: "Step 1: Slot Booking",
      description: "Pay just ₹999 to secure your slot. This amount is fully included in your total fee—no additional charges!"
    },
    {
      icon: <Mail className="text-purple-600" size={24} />,
      title: "Step 2: Offer Letter",
      description: "Receive your official offer letter via email within 24 to 48 hours of your slot booking."
    },
    {
      icon: <Briefcase className="text-purple-600" size={24} />,
      title: "Step 3: Reporting Day",
      description: "Come to the office on your reporting day and join your required slot to begin your incredible journey."
    },
    {
      icon: <Award className="text-purple-600" size={24} />,
      title: "Step 4: Full Access & Dev Kit",
      description: "Pay the remaining fee balance at the office, get your welcome kit, and unlock all premium accesses."
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-purple-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-sm font-bold text-purple-600 uppercase tracking-widest">How to Join</span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mt-2 mb-4">Simple Enrollment Flow</h2>
          <p className="text-lg text-gray-600">
            Secure your spot with minimum upfront amount and pay the rest when you reach our office.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-1 bg-purple-200 -translate-y-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-xl border border-gray-100 hover:-translate-y-2 transition-transform duration-300 relative">
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white font-bold border-4 border-white shadow-sm">
                  {index + 1}
                </div>
                <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mb-6 mx-auto mt-4 shadow-inner">
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

export default InternshipFlow;
