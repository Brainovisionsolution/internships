import React from 'react';
import { Clock, Users, Award, BookOpen, Cpu, Briefcase } from 'lucide-react';

interface ProgramHighlightsProps {
  isOnline: boolean;
}

const ProgramHighlights: React.FC<ProgramHighlightsProps> = ({ isOnline }) => {
  const highlights = isOnline ? [
    {
      icon: <Clock size={36} className="text-purple-500" />,
      title: "2 Months Duration",
      description: "Intensive virtual training program with flexible timings"
    },
    {
      icon: <Users size={36} className="text-purple-500" />,
      title: "Limited Seats",
      description: "Only 40 students per batch for personalized attention"
    },
    {
      icon: <Award size={36} className="text-purple-500" />,
      title: "Certification",
      description: "AICTE & NASSCOM approved certification & Letter of Recommendation"
    },
    {
      icon: <BookOpen size={36} className="text-purple-500" />,
      title: "Live Virtual Classes",
      description: "Interactive sessions with real-time doubt resolution"
    },
    {
      icon: <Cpu size={36} className="text-purple-500" />,
      title: "Virtual Lab Access",
      description: "24/7 access to cloud-based development environment"
    },
    {
      icon: <Briefcase size={36} className="text-purple-500" />,
      title: "Placement Support",
      description: "100% placement assistance with interview preparation"
    }
  ] : [
    {
      icon: <Clock size={36} className="text-indigo-500" />,
      title: "2 Months Duration",
      description: "Compact, intensive training program designed for summer break"
    },
    {
      icon: <Users size={36} className="text-indigo-500" />,
      title: "Limited Seats",
      description: "Only 40 students per batch for personalized attention"
    },
    {
      icon: <Award size={36} className="text-indigo-500" />,
      title: "Certification",
      description: "AICTE & NASSCOM approved certification & Letter of Recommendation"
    },
    {
      icon: <BookOpen size={36} className="text-indigo-500" />,
      title: "Comprehensive Training",
      description: "1.5 hours of live classes + 4 hours hands-on practice daily"
    },
    {
      icon: <Cpu size={36} className="text-indigo-500" />,
      title: "Real-Time Projects",
      description: "Work on industry-level AI projects with expert guidance"
    },
    {
      icon: <Briefcase size={36} className="text-indigo-500" />,
      title: "Placement Support",
      description: "100% placement assistance with interview preparation"
    }
  ];

  const themeColor = isOnline ? 'purple' : 'indigo';

  return (
    <section id="program" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Program Highlights</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isOnline 
              ? "Our virtual AI internship program offers comprehensive learning with the flexibility of online training."
              : "Our AI internship program is designed to provide you with a comprehensive learning experience."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className={`bg-${themeColor}-50 rounded-full w-16 h-16 flex items-center justify-center mb-4`}>
                {highlight.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{highlight.title}</h3>
              <p className="text-gray-600">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-6 md:p-8 bg-indigo-50 rounded-2xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold text-indigo-800 mb-3">Summer Special Offer!</h3>
              <p className="text-gray-700 max-w-xl">
                Limited time offer for summer 2025. Reserve your spot with just ₹999 and secure 
                your place in this transformative AI internship program.
              </p>
            </div>
            <a 
              href="https://rzp.io/rzp/q7TKH2NL"
              className={`bg-${themeColor}-600 hover:bg-${themeColor}-700 text-white rounded-lg px-8 py-4 font-medium transition-colors duration-300 text-center`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;