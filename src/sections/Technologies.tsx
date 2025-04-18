import React from 'react';
import { Code, ExternalLink, Laptop, Globe } from 'lucide-react';

interface TechCard {
  title: string;
  description: string;
  link: string;
  icon: React.ReactNode;
  type: 'offline' | 'online';
  bgColor: string;
}

const Technologies: React.FC = () => {
  const technologies: TechCard[] = [
    {
      title: "MERN STACK",
      description: "Master MongoDB, Express, React, and Node.js to build full-stack web applications",
      link: "https://rzp.io/rzp/q7TKH2NL",
      icon: <Code size={24} className="text-white" />,
      type: "offline",
      bgColor: "bg-blue-600"
    },
    {
      title: "DIGITAL MARKETING",
      description: "Learn digital marketing strategies, SEO, social media marketing, and analytics",
      link: "https://rzp.io/rzp/q7TKH2NL",
      icon: <Globe size={24} className="text-white" />,
      type: "offline",
      bgColor: "bg-green-600"
    },
    {
      title: "JAVA FULL STACK",
      description: "Comprehensive training in Java, Spring Boot, Hibernate, and frontend technologies",
      link: "https://rzp.io/rzp/q7TKH2NL",
      icon: <JavaIcon className="text-white" />,
      type: "both",
      bgColor: "bg-orange-600"
    },
    {
      title: "SERVICE NOW",
      description: "Learn to implement, configure, and administer ServiceNow platform",
      link: "https://rzp.io/rzp/q7TKH2NL",
      icon: <CloudIcon className="text-white" />,
      type: "offline",
      bgColor: "bg-purple-600"
    },
    {
      title: "GENERATIVE AI",
      description: "Master generative models like GANs, transformers, and diffusion models",
      link: "https://rzp.io/rzp/q7TKH2NL",
      icon: <BrainIcon className="text-white" />,
      type: "both",
      bgColor: "bg-indigo-600"
    }
  ];

  return (
    <section id="technologies" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <Laptop size={24} className="text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Technologies & Programs
          </h2>
          <p className="text-lg text-gray-700">
            Choose from a variety of cutting-edge technologies for both offline and online internships.
            Click on any technology to learn more and register.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <button className="bg-indigo-600 text-white px-5 py-2 rounded-full hover:bg-indigo-700 transition-colors">
            All Programs
          </button>
          <button className="bg-white text-gray-700 px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
            Offline Programs
          </button>
          <button className="bg-white text-gray-700 px-5 py-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors">
            Online Programs
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <a
              key={index}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className={`${tech.bgColor} p-6`}>
                <div className="flex justify-between items-center">
                  <div className="h-12 w-12 rounded-full bg-white bg-opacity-20 flex items-center justify-center">
                    {tech.icon}
                  </div>
                  <div className="bg-white bg-opacity-20 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {tech.type === 'both' ? 'Online & Offline' : tech.type === 'online' ? 'Online Only' : 'Offline Only'}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mt-4">{tech.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <div className="flex justify-between items-center">
                  <div className="flex items-center text-sm text-gray-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline points="12 6 12 12 16 14"></polyline>
                    </svg>
                    <span>2 Months</span>
                  </div>
                  <div className="flex items-center text-indigo-600 font-medium group-hover:underline">
                    <span>Learn More</span>
                    <ExternalLink size={16} className="ml-1" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            All programs include internship certification, hands-on projects, and placement assistance.
          </p>
          <a 
            href="https://brainovision.in/aicte-internship-2025-brochure" 
            className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg px-6 py-3 transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Program Brochure
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

// Custom Icons
const JavaIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M1 5h22v4H1z"></path>
    <path d="M5 9v7a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V9"></path>
    <path d="M9 19v-3"></path>
    <path d="M15 19v-3"></path>
  </svg>
);

const CloudIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path>
  </svg>
);

const BrainIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.04Z"></path>
    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-4.44-1.04Z"></path>
  </svg>
);

export default Technologies;