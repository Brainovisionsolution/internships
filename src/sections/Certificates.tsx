import React from 'react';
import { Award } from 'lucide-react';

const Certificates: React.FC = () => {
  const certificates = [
    {
      title: "Internship Completion Certificate",
      description: "Official AICTE & APSCHE approved certificate awarded upon successful completion of the internship program.",
      image: "https://brainovision.in/assets/img/certification1.jpg",
    },
    {
      title: "Training Completion Certificate",
      description: "Certificate recognizing completion of specialized AI training modules and theoretical components.",
      image: "https://brainovision.in/assets/img/certification2.jpg",
    },
    {
      title: "Letter of Recommendation (LOR)",
      description: "Personalized recommendation letter highlighting your skills, projects, and achievements during the program.",
      image: "https://brainovision.in/assets/img/certification3.jpg",
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <Award size={24} className="text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Certification Program
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Upon successful completion of the program, you'll receive official certificates and 
            recommendations that boost your resume and career prospects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certificates.map((cert, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] w-full">
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{cert.title}</h3>
                  <p className="text-white/80 text-sm">{cert.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-indigo-50 rounded-xl p-8">
            <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <Award size={28} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">AICTE Approved</h3>
            <p className="text-gray-700">
              Certificates recognized by the All India Council for Technical Education,
              adding significant value to your resume.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-8">
            <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <Industry size={28} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Industry Recognition</h3>
            <p className="text-gray-700">
              Our certificates are valued by leading technology companies and 
              provide a competitive edge in the job market.
            </p>
          </div>

          <div className="bg-indigo-50 rounded-xl p-8">
            <div className="h-14 w-14 bg-indigo-100 rounded-full flex items-center justify-center mb-6">
              <Verification size={28} className="text-indigo-600" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-4">Verification Support</h3>
            <p className="text-gray-700">
              Background verification and internship verification support for 
              higher studies or job placements.
            </p>
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