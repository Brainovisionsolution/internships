import React from 'react';
import { BrainCircuit, Code, LineChart, BarChart4 } from 'lucide-react';

const AboutAI: React.FC = () => {
  const industries = [
    { name: "Healthcare", icon: <LineChart className="text-blue-500" /> },
    { name: "Finance", icon: <BarChart4 className="text-green-500" /> },
    { name: "Education", icon: <BookIcon className="text-orange-500" /> },
    { name: "Automation", icon: <CogIcon className="text-purple-500" /> }
  ];

  const reasons = [
    {
      icon: <GlobeIcon className="h-10 w-10 text-indigo-500 mb-3" />,
      title: "High-Impact Technology",
      description: "AI is revolutionizing industries worldwide, creating transformative solutions"
    },
    {
      icon: <BriefcaseIcon className="h-10 w-10 text-indigo-500 mb-3" />,
      title: "Corporate Exposure",
      description: "Get real exposure from Hyderabad's leading tech companies"
    },
    {
      icon: <TrendingUpIcon className="h-10 w-10 text-indigo-500 mb-3" />,
      title: "Massive Career Demand",
      description: "High-salary roles in AI Engineering, Data Science, and ML Development"
    },
    {
      icon: <RocketIcon className="h-10 w-10 text-indigo-500 mb-3" />,
      title: "Join the Innovation Wave",
      description: "AI is not the future, it's happening NOW - be part of the revolution"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <BrainCircuit size={24} className="text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What is Artificial Intelligence (AI)?
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Artificial Intelligence (AI) is the simulation of human intelligence in machines, 
            empowering them to think, learn, and solve complex problems. From self-driving cars 
            to virtual assistants, AI is transforming industries and reshaping our daily lives.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Learn AI?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {reasons.map((reason, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm">
                  {reason.icon}
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{reason.title}</h4>
                  <p className="text-gray-600">{reason.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="order-1 lg:order-2 relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-10 blur-xl"></div>
            <div className="relative aspect-square rounded-xl overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260" 
                alt="AI Technology" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900 to-transparent opacity-60"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2">AI is Transforming Industries</h3>
                <div className="flex flex-wrap gap-2 mt-4">
                  {industries.map((industry, idx) => (
                    <div key={idx} className="bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-1.5 flex items-center">
                      {industry.icon}
                      <span className="ml-2 text-white text-sm font-medium">{industry.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-indigo-600 rounded-2xl p-8 md:p-10 text-white">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-bold mb-3">Ready to Master AI?</h3>
              <p className="text-indigo-100 max-w-xl">
                Join our exclusive internship program and gain the skills needed to thrive in the 
                AI-driven future. Limited seats available for Summer 2025!
              </p>
            </div>
            <a 
              href="#register" 
              className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-lg px-8 py-3 font-medium transition-colors duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icons
const BookIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
  </svg>
);

const CogIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16Z"></path>
    <path d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path>
    <path d="M12 2v2"></path>
    <path d="M12 22v-2"></path>
    <path d="m17 20.66-1-1.73"></path>
    <path d="M11 10.27 7 3.34"></path>
    <path d="m20.66 17-1.73-1"></path>
    <path d="m3.34 7 1.73 1"></path>
    <path d="M14 12h8"></path>
    <path d="M2 12h2"></path>
    <path d="m20.66 7-1.73 1"></path>
    <path d="m3.34 17 1.73-1"></path>
    <path d="m17 3.34-1 1.73"></path>
    <path d="m7 20.66 1-1.73"></path>
  </svg>
);

const GlobeIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="2" y1="12" x2="22" y2="12"></line>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
  </svg>
);

const BriefcaseIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
  </svg>
);

const TrendingUpIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
    <polyline points="17 6 23 6 23 12"></polyline>
  </svg>
);

const RocketIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
  </svg>
);

export default AboutAI;