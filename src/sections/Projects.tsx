import React, { useState } from 'react';
import { Cpu, ChevronLeft, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  isOnline: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isOnline }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const onlineProjects = [
    {
      title: "E-Commerce Platform (MERN Stack)",
      description: "Build a full-featured e-commerce platform with user authentication, product management, cart functionality, and payment integration.",
      image: "https://images.pexels.com/photos/3912978/pexels-photo-3912978.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["React", "Node.js", "MongoDB", "Express", "Redux"]
    },
    {
      title: "Digital Marketing Campaign",
      description: "Create and execute a comprehensive digital marketing strategy including SEO, social media, and email marketing campaigns.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["SEO", "Social Media", "Analytics", "Content Marketing"]
    },
    {
      title: "Banking Application (Java Full Stack)",
      description: "Develop a secure banking application with transaction management, user accounts, and real-time updates.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["Java", "Spring Boot", "Angular", "MySQL"]
    },
    {
      title: "ServiceNow ITSM Implementation",
      description: "Configure and customize ServiceNow for IT Service Management with automated workflows and reporting.",
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["ServiceNow", "ITSM", "JavaScript", "Workflow"]
    },
    {
      title: "AI Content Generator",
      description: "Create an AI-powered application that generates various types of content using large language models.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["Python", "LLMs", "API Integration", "Frontend"]
    }
  ];

  const offlineProjects = [
    {
      title: "AI-Based Fake News Detection",
      description: "Build a machine learning model to identify and flag potential fake news articles by analyzing text patterns, source credibility, and propagation characteristics.",
      image: "https://images.pexels.com/photos/3912978/pexels-photo-3912978.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["NLP", "Classification", "Text Analysis", "Python"]
    },
    {
      title: "Personalized AI Learning Platform",
      description: "Develop an adaptive learning system that customizes educational content based on student performance, learning style, and progress tracking.",
      image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["Recommendation Systems", "User Modeling", "Educational AI", "Python"]
    },
    {
      title: "AI Chatbot for Customer Support",
      description: "Create an intelligent chatbot that can understand customer queries, provide relevant answers, and escalate complex issues to human agents when necessary.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["NLP", "Dialog Systems", "Intent Recognition", "Python"]
    },
    {
      title: "Medical Diagnosis Assistant",
      description: "Develop an AI system that assists healthcare professionals in diagnosing diseases based on patient symptoms, medical history, and clinical data.",
      image: "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["Healthcare AI", "Classification", "Data Analysis", "Python"]
    },
    {
      title: "Financial Fraud Detection",
      description: "Build a real-time fraud detection system for financial transactions using anomaly detection and pattern recognition techniques.",
      image: "https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["Anomaly Detection", "Time Series Analysis", "Finance", "Python"]
    },
    {
      title: "Traffic Management System",
      description: "Create an intelligent traffic control system that optimizes signal timing based on real-time traffic conditions to reduce congestion and improve flow.",
      image: "https://images.pexels.com/photos/1755683/pexels-photo-1755683.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["Computer Vision", "Optimization", "Urban Planning", "Python"]
    },
    {
      title: "Image Caption Generator",
      description: "Develop an AI model that automatically generates descriptive captions for images, bridging computer vision and natural language processing.",
      image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["Computer Vision", "NLP", "Deep Learning", "Python"]
    },
    {
      title: "Virtual AI Personal Assistant",
      description: "Create a voice-activated personal assistant that can perform tasks like scheduling, reminders, information retrieval, and smart home control.",
      image: "https://images.pexels.com/photos/6686455/pexels-photo-6686455.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
      skills: ["Speech Recognition", "NLP", "Task Automation", "Python"]
    }
  ];

  const projects = isOnline ? onlineProjects : offlineProjects;
  const themeColor = isOnline ? 'purple' : 'indigo';

  const nextProject = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className={`inline-flex items-center justify-center p-2 bg-${themeColor}-100 rounded-full mb-4`}>
            <Cpu size={24} className={`text-${themeColor}-600`} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Real Projects You'll Work On
          </h2>
          <p className="text-lg text-gray-700">
            Gain hands-on experience with industry-relevant projects.
            These real-world applications will strengthen your portfolio and prepare you for your AI career.
          </p>
        </div>
        
        <div className="relative max-w-5xl mx-auto">
          <div className="relative overflow-hidden rounded-2xl shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="md:grid md:grid-cols-2">
                    <div className="h-64 md:h-auto relative">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60 md:hidden"></div>
                    </div>
                    <div className="p-6 md:p-8 bg-white relative md:static">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3 md:mt-0 -mt-16 relative md:static text-white md:text-gray-900">
                        {project.title}
                      </h3>
                      <p className="text-gray-700 mb-6">
                        {project.description}
                      </p>
                      <div className="mt-auto">
                        <h4 className="text-sm font-medium text-gray-500 mb-2">Key Skills:</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.skills.map((skill, skillIndex) => (
                            <span 
                              key={skillIndex}
                              className={`bg-${themeColor}-50 text-${themeColor}-700 px-3 py-1 rounded-full text-sm font-medium`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute inset-y-0 left-0 flex items-center">
            <button 
              onClick={prevProject}
              className="h-10 w-10 ml-4 bg-white rounded-full shadow-md flex items-center justify-center focus:outline-none"
            >
              <ChevronLeft size={20} className="text-gray-700" />
            </button>
          </div>
          
          <div className="absolute inset-y-0 right-0 flex items-center">
            <button 
              onClick={nextProject}
              className="h-10 w-10 mr-4 bg-white rounded-full shadow-md flex items-center justify-center focus:outline-none"
            >
              <ChevronRight size={20} className="text-gray-700" />
            </button>
          </div>
          
          <div className="mt-6 flex justify-center space-x-2">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all ${
                  activeIndex === index 
                    ? `w-8 bg-${themeColor}-600` 
                    : 'w-2 bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;