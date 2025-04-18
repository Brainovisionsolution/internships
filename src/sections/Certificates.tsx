import React, { useState } from 'react';
import { Award, ChevronLeft, ChevronRight } from 'lucide-react';

const Certificates: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const certificates = [
    {
      title: "Internship Completion Certificate",
      description: "Official AICTE & APSCHE approved certificate awarded upon successful completion of the internship program.",
      image: "https://images.pexels.com/photos/6256254/pexels-photo-6256254.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      title: "Training Completion Certificate",
      description: "Certificate recognizing completion of specialized AI training modules and theoretical components.",
      image: "https://images.pexels.com/photos/5428833/pexels-photo-5428833.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    },
    {
      title: "Letter of Recommendation (LOR)",
      description: "Personalized recommendation letter highlighting your skills, projects, and achievements during the program.",
      image: "https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    }
  ];

  const nextCertificate = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % certificates.length);
  };

  const prevCertificate = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <Award size={24} className="text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certificates & Recognition
          </h2>
          <p className="text-lg text-gray-700">
            Upon successful completion of the program, you'll receive official certificates and 
            recommendations that boost your resume and career prospects.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl p-6 md:p-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {certificates[activeIndex].title}
                </h3>
                <p className="text-indigo-100 mb-6">
                  {certificates[activeIndex].description}
                </p>
                <div className="flex space-x-4">
                  <button 
                    onClick={prevCertificate}
                    className="h-10 w-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors"
                  >
                    <ChevronLeft size={20} className="text-white" />
                  </button>
                  <button 
                    onClick={nextCertificate}
                    className="h-10 w-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center hover:bg-opacity-30 transition-colors"
                  >
                    <ChevronRight size={20} className="text-white" />
                  </button>
                </div>
                <div className="mt-6 flex space-x-2">
                  {certificates.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-2 rounded-full transition-all ${
                        activeIndex === index 
                          ? 'w-8 bg-white' 
                          : 'w-2 bg-white bg-opacity-30'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="absolute -inset-0.5 rounded-lg bg-white opacity-50 blur"></div>
                <img 
                  src={certificates[activeIndex].image} 
                  alt={certificates[activeIndex].title}
                  className="relative rounded-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Award size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">AICTE Approved</h3>
              <p className="text-gray-600">
                Certificates recognized by the All India Council for Technical Education,
                adding significant value to your resume.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Industry size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Industry Recognition</h3>
              <p className="text-gray-600">
                Our certificates are valued by leading technology companies and 
                provide a competitive edge in the job market.
              </p>
            </div>
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
              <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-4">
                <Verification size={28} className="text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Verification Support</h3>
              <p className="text-gray-600">
                Background verification and internship verification support for 
                higher studies or job placements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Icons
const Industry: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
    <path d="M17 18h1"></path>
    <path d="M12 18h1"></path>
    <path d="M7 18h1"></path>
  </svg>
);

const Verification: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
    <path d="m9 12 2 2 4-4"></path>
  </svg>
);

export default Certificates;