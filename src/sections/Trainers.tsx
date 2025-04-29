import React from 'react';
import { GraduationCap, Briefcase, Users, Award } from 'lucide-react';

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <GraduationCap size={24} className="text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Your Trainers
          </h2>
          <p className="text-lg text-gray-700">
            Learn from the best in the industry. Our trainers are elite professionals with 
            deep expertise from both academia and industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white rounded-2xl p-6 md:p-8">
            <h3 className="text-2xl font-bold mb-4">Top-Tier Faculty</h3>
            <p className="mb-6">
              Our trainers come from premier institutions and have years of industry experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <span className="font-medium">IITs (Indian Institutes of Technology)</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <span className="font-medium">IIITs (International Institutes of Information Technology)</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <span className="font-medium">NITs and Globally Recognized Universities</span>
              </div>
            </div>
          </div>
          
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 h-full shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trainer Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Briefcase size={24} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industry Experience</h4>
                    <p className="text-gray-600">
                      Deep technical expertise in AI, ML, NLP, and Data Science from working at top companies
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Users size={24} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Teaching Excellence</h4>
                    <p className="text-gray-600">
                      Mentored 3000+ students into careers at leading tech companies
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Code size={24} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hands-On Approach</h4>
                    <p className="text-gray-600">
                      Focus on practical implementation, not just theoretical concepts
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-indigo-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Award size={24} className="text-indigo-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industry Connections</h4>
                    <p className="text-gray-600">
                      Helps open doors for placements and internships through professional networks
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Company Experience</h3>
            <div className="space-y-3">
              <div className="flex items-center py-2 border-b border-gray-200">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600 text-sm">V</span>
                </div>
                <span className="font-medium text-gray-800">VIRTUSA</span>
              </div>
              <div className="flex items-center py-2 border-b border-gray-200">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600 text-sm">B</span>
                </div>
                <span className="font-medium text-gray-800">Broadridge</span>
              </div>
              <div className="flex items-center py-2 border-b border-gray-200">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600 text-sm">V</span>
                </div>
                <span className="font-medium text-gray-800">ValueMomentum</span>
              </div>
              <div className="flex items-center py-2">
                <div className="h-8 w-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-blue-600 text-sm">T</span>
                </div>
                <span className="font-medium text-gray-800">Tech Startups</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto bg-indigo-50 rounded-2xl p-6 md:p-8">
          <h3 className="text-2xl font-bold text-indigo-800 mb-4">What You'll Gain From Our Trainers</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                  <span className="text-indigo-600 font-bold text-xs">1</span>
                </div>
                Portfolio Building
              </h4>
              <p className="text-gray-600">
                Real guidance on creating impressive projects that demonstrate your skills
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                  <span className="text-indigo-600 font-bold text-xs">2</span>
                </div>
                Resume Enhancement
              </h4>
              <p className="text-gray-600">
                Support in building a resume that highlights your new AI expertise effectively
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                  <span className="text-indigo-600 font-bold text-xs">3</span>
                </div>
                Industry Insights
              </h4>
              <p className="text-gray-600">
                Valuable knowledge about how tech companies operate and hire
              </p>
            </div>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                <div className="h-6 w-6 rounded-full bg-indigo-100 flex items-center justify-center mr-2">
                  <span className="text-indigo-600 font-bold text-xs">4</span>
                </div>
                Personalized Mentorship
              </h4>
              <p className="text-gray-600">
                One-on-one guidance when you need clarity or direction on your learning path
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Icons
const Code: React.FC<{ size?: number; className?: string }> = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

export default Trainers;
