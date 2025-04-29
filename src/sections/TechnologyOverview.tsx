import React from 'react';
import { Code, Globe, BrainCircuit, Cloud, Laptop } from 'lucide-react';

const TechnologyOverview: React.FC = () => {
  const technologies = [
    {
      icon: <Code className="text-blue-500" size={36} />,
      title: "MERN STACK",
      description: "Master modern web development with MongoDB, Express.js, React, and Node.js",
      syllabus: "https://brainovision.in/ai-internship-mern-syllabus",
      features: [
        "Frontend Development with React",
        "Backend Development with Node.js & Express",
        "Database Management with MongoDB",
        "RESTful API Development",
        "Authentication & Authorization",
        "State Management & Routing"
      ]
    },
    {
      icon: <Globe className="text-green-500" size={36} />,
      title: "DIGITAL MARKETING",
      description: "Learn comprehensive digital marketing strategies and tools",
      syllabus: "https://brainovision.in/ai-internship-digital-marketing-syllabus",
      features: [
        "Search Engine Optimization (SEO)",
        "Social Media Marketing",
        "Content Marketing",
        "Email Marketing",
        "Google Analytics",
        "Digital Advertising"
      ]
    },
    {
      icon: <Laptop className="text-orange-500" size={36} />,
      title: "JAVA FULL STACK",
      description: "Build enterprise-level applications with Java and modern frameworks",
      syllabus: "https://brainovision.in/ai-internship-java-fullstack-syllabus",
      features: [
        "Core Java Programming",
        "Spring Boot Framework",
        "Hibernate ORM",
        "RESTful Web Services",
        "Microservices Architecture",
        "Frontend with Angular/React"
      ]
    },
    {
      icon: <Cloud className="text-purple-500" size={36} />,
      title: "SERVICE NOW",
      description: "Develop expertise in ServiceNow platform and ITSM",
      syllabus: "https://brainovision.in/ai-internship-servicenow-syllabus",
      features: [
        "ServiceNow Administration",
        "ITSM Implementation",
        "Workflow Development",
        "Custom Application Development",
        "Integration & Scripting",
        "Service Portal Development"
      ]
    },
    {
      icon: <BrainCircuit className="text-indigo-500" size={36} />,
      title: "GENERATIVE AI",
      description: "Explore the cutting-edge world of generative artificial intelligence",
      syllabus: "https://brainovision.in/ai-internship-gen-ai-syllabus",
      features: [
        "Large Language Models",
        "Prompt Engineering",
        "AI Model Fine-tuning",
        "Text & Image Generation",
        "AI Application Development",
        "Ethical AI Practices"
      ]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-purple-100 rounded-full mb-4">
            <Laptop size={24} className="text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Choose Your Technology Path
          </h2>
          <p className="text-lg text-gray-700">
            Explore our specialized technology tracks designed to prepare you for high-demand career opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 bg-gray-100 rounded-lg flex items-center justify-center mr-4">
                    {tech.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{tech.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{tech.description}</p>
                <div className="space-y-3">
                  {tech.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start">
                      <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center mr-3 mt-0.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <a 
                  href={tech.syllabus}
                  className="text-purple-600 hover:text-purple-700 font-medium flex items-center justify-center"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Veiw Syllabus
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 text-white">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Tech Journey?</h3>
            <p className="text-purple-100 mb-8">
              Choose your preferred technology track and join our virtual internship program. 
              Limited seats available for each technology batch.
            </p>
            <a 
              href="#register" 
              className="inline-block bg-white text-purple-600 font-medium rounded-lg px-8 py-3 hover:bg-purple-50 transition-colors duration-300"
            >
              Secure Your Spot Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologyOverview;
