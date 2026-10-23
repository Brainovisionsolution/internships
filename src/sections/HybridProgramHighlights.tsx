import React from 'react';
import { 
  Laptop, 
  MapPin, 
  Calendar, 
  Award, 
  BookOpen, 
  Briefcase, 
  Rocket, 
  Target, 
  Zap, 
  Trophy, 
  Star, 
  Users, 
  Clock, 
  Sparkles,
  ChevronRight
} from 'lucide-react';

const HybridProgramHighlights: React.FC = () => {
  const highlights = [
    {
      icon: <Laptop size={32} className="text-emerald-500" />,
      title: "Dual-Mode Flexibility",
      description: "Learn through live interactive virtual masterclasses combined with weekend offline lab sessions."
    },
    {
      icon: <MapPin size={32} className="text-teal-500" />,
      title: "Hyderabad Campus Access",
      description: "Access our physical labs and high-performance development workspaces for in-person mentor reviews."
    },
    {
      icon: <Target size={32} className="text-emerald-500" />,
      title: "4 Industry-Ready Tracks",
      description: "Specialized curricula in MERN Full Stack, AI Full Stack, Python Data Science, and Digital Marketing."
    },
    {
      icon: <Award size={32} className="text-teal-500" />,
      title: "AICTE & APSCHE Certification",
      description: "Government-recognized, verified internship credentials accepted across universities and top employers."
    },
    {
      icon: <Clock size={32} className="text-emerald-500" />,
      title: "3 Months Comprehensive Duration",
      description: "Deep, hands-on learning roadmap paced comfortably alongside your college or work schedule."
    },
    {
      icon: <Trophy size={32} className="text-teal-500" />,
      title: "Production Capstone Projects",
      description: "Build, containerize, and deploy full-scale enterprise software products with real GitHub code reviews."
    },
    {
      icon: <Briefcase size={32} className="text-emerald-500" />,
      title: "Placement Drives & Mock Interviews",
      description: "Dedicated resume polish, technical round prep, and direct interview opportunities with hiring partners."
    },
    {
      icon: <BookOpen size={32} className="text-teal-500" />,
      title: "1-Year Premium LMS Access",
      description: "Lifetime revision with 24/7 access to recorded lectures, code repositories, datasets, and guides."
    },
    {
      icon: <Users size={32} className="text-emerald-500" />,
      title: "Small Mentorship Batches",
      description: "Limited seats per cohort ensuring 1-on-1 attention, personalized doubt-clearing, and guidance."
    },
    {
      icon: <Star size={32} className="text-teal-500" />,
      title: "Brainovision Hiring Opportunity",
      description: "Exceptional interns are directly considered for paid roles and project contracts at Brainovision."
    }
  ];

  return (
    <section id="highlights" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-teal-50 text-teal-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border border-teal-100">
            <Sparkles size={14} className="mr-1.5" />
            Hybrid Model Advantages
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Hybrid Internship Highlights
          </h2>
          <p className="text-lg text-gray-600">
            The ideal balance of online freedom and hands-on campus immersion designed for maximum learning impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-teal-200 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="w-14 h-14 rounded-xl bg-teal-50 flex items-center justify-center mb-5 border border-teal-100">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm">{item.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 bg-gradient-to-r from-teal-900 via-emerald-800 to-teal-900 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="bg-emerald-500/20 text-emerald-300 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-wider border border-emerald-400/30">
                Admissions Open • 2026 Cohort
              </span>
              <h3 className="text-2xl md:text-3xl font-bold mt-3 mb-2">
                Fast-Track Your Tech Career with Hybrid Immersion
              </h3>
              <p className="text-teal-100 text-sm md:text-base">
                Join our 3-month hybrid track with live classes, physical lab access, and 1-on-1 industry mentorship.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <a
                href="#technologies"
                className="bg-white text-teal-900 hover:bg-emerald-50 font-bold px-8 py-3.5 rounded-xl transition duration-300 text-center flex items-center justify-center shadow-lg"
              >
                Explore Hybrid Tracks
                <ChevronRight size={18} className="ml-1" />
              </a>
              <a
                href="https://rzp.io/rzp/8KPMtnd"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-emerald-500 hover:bg-emerald-400 text-white font-bold px-8 py-3.5 rounded-xl transition duration-300 text-center shadow-lg"
              >
                Enroll Now @ ₹6,000
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridProgramHighlights;
