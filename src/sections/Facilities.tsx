import React from 'react';
import { AirVent, Monitor, Coffee, Droplet, RemoveFormatting as CleaningFormula, HeartHandshake, MapPin } from 'lucide-react';

const Facilities: React.FC = () => {
  const facilities = [
    {
      icon: <AirVent size={36} className="text-indigo-500" />,
      title: "Fully Air-Conditioned Digital Classrooms",
      description: "Learn in comfort with modern temperature-controlled environments"
    },
    {
      icon: <Monitor size={36} className="text-indigo-500" />,
      title: "Large LED Display Screens",
      description: "High-resolution displays for immersive and detailed learning"
    },
    {
      icon: <ChairIcon size={36} className="text-indigo-500" />,
      title: "Comfortable, Ergonomic Chairs",
      description: "Study for hours without discomfort with our specially designed seating"
    },
    {
      icon: <Droplet size={36} className="text-indigo-500" />,
      title: "Filtered & Mineral Water",
      description: "Stay refreshed with readily available clean drinking water"
    },
    {
      icon: <CleaningFormula size={36} className="text-indigo-500" />,
      title: "Clean & Positive Learning Atmosphere",
      description: "A well-maintained environment optimized for focus and learning"
    },
    {
      icon: <HeartHandshake size={36} className="text-indigo-500" />,
      title: "Active Support Team",
      description: "Dedicated staff available to assist with any queries or issues"
    },
    {
      icon: <LaptopIcon size={36} className="text-indigo-500" />,
      title: "LMS Access & Materials",
      description: "Complete access to learning materials, PDFs, notes & recorded sessions"
    },
    {
      icon: <Coffee size={36} className="text-indigo-500" />,
      title: "Refreshment Area",
      description: "Take breaks and recharge in our dedicated refreshment space"
    }
  ];

  return (
    <section id="facilities" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <BuildingIcon size={24} className="text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Salient Features of Our Learning Environment
          </h2>
          <p className="text-lg text-gray-700">
            We've created the optimal learning environment to help you focus, grow, and succeed.
            Every detail has been carefully considered for your comfort and learning experience.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {facilities.map((facility, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="bg-indigo-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {facility.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{facility.title}</h3>
              <p className="text-gray-600">{facility.description}</p>
            </div>
          ))}
        </div>
        
        {/* AIGA Modern Classroom Venue Section */}
        <div className="bg-gray-50 rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">AIGA – Modern Classroom Internship Venue</h3>
              <p className="text-gray-600 text-lg max-w-2xl">
                Experience our state-of-the-art facilities designed to provide you with a comfortable and highly productive learning environment.
              </p>
            </div>
            <a 
              href="https://maps.app.goo.gl/kb2C3aZN4yRM3H5z8" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-indigo-600 text-white font-medium rounded-xl px-6 py-4 hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1 whitespace-nowrap"
            >
              <MapPin size={22} />
              View on Google Maps
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/venue/photo1.jpg" 
                alt="AIGA Modern Classroom View 1" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/venue/photo2.jpg" 
                alt="AIGA Modern Classroom View 2" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/venue/photo3.jpg" 
                alt="AIGA Modern Classroom View 3" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/venue/photo4.jpg" 
                alt="AIGA Modern Classroom View 4" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/venue/photo5.jpg" 
                alt="AIGA Modern Classroom View 5" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/venue/photo6.jpg" 
                alt="AIGA Modern Classroom View 6" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* AIGA Corporate Workspace Section */}
        <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm mt-10">
          <div className="flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">AIGA – Corporate Workspace</h3>
              <p className="text-gray-600 text-lg max-w-2xl">
                Beyond just classrooms, experience a vibrant corporate environment complete with recreation areas, collaborative spaces, and a thriving community.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/workspace/photo1.jpg" 
                alt="AIGA Corporate Workspace View 1" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/workspace/photo2.jpg" 
                alt="AIGA Corporate Workspace View 2" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/workspace/photo3.jpg" 
                alt="AIGA Corporate Workspace View 3" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/workspace/photo4.jpg" 
                alt="AIGA Corporate Workspace View 4" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/workspace/photo5.jpg" 
                alt="AIGA Corporate Workspace View 5" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="rounded-2xl overflow-hidden shadow-sm group">
              <img 
                src="/workspace/photo6.jpg" 
                alt="AIGA Corporate Workspace View 6" 
                className="w-full h-64 md:h-80 object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icons
const ChairIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 9V6a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v3"></path>
    <path d="M3 11v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5a2 2 0 0 0-4 0v2H7v-2a2 2 0 0 0-4 0Z"></path>
    <path d="M5 18v2"></path>
    <path d="M19 18v2"></path>
  </svg>
);

const LaptopIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
  </svg>
);

const BuildingIcon: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
    <path d="M9 22v-4h6v4"></path>
    <path d="M8 6h.01"></path>
    <path d="M16 6h.01"></path>
    <path d="M12 6h.01"></path>
    <path d="M12 10h.01"></path>
    <path d="M12 14h.01"></path>
    <path d="M16 10h.01"></path>
    <path d="M16 14h.01"></path>
    <path d="M8 10h.01"></path>
    <path d="M8 14h.01"></path>
  </svg>
);

export default Facilities;