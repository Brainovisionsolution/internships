import React from 'react';
import { GraduationCap, Briefcase, Users, Award, Code, Sparkles, BrainCircuit, Zap } from 'lucide-react';

const Trainers: React.FC = () => {
  return (
    <section id="trainers" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl mb-4">
            <GraduationCap size={24} className="text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Your AI Trainers
          </h2>
          <p className="text-lg text-gray-700">
            Learn from the best in Generative AI and LLM Engineering. Our trainers are elite professionals with 
            deep expertise from both academia and industry.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Card 1 - Top Tier Faculty */}
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Top-Tier Faculty</h3>
            <p className="mb-6 text-purple-100">
              Our AI trainers come from premier institutions and have years of industry experience in Generative AI.
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
                <span className="font-medium">IIITs (International Institutes of IT)</span>
              </div>
              <div className="flex items-center">
                <div className="h-10 w-10 rounded-full bg-white bg-opacity-20 flex items-center justify-center mr-3">
                  <GraduationCap size={20} className="text-white" />
                </div>
                <span className="font-medium">NITs and Globally Recognized Universities</span>
              </div>
            </div>
          </div>
          
          {/* Card 2 - Trainer Highlights */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 h-full shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Trainer Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Briefcase size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industry Experience</h4>
                    <p className="text-gray-600">
                      Deep technical expertise in Generative AI, LLMs, RAG, and Agentic AI from working at top companies
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Users size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Teaching Excellence</h4>
                    <p className="text-gray-600">
                      Mentored 3000+ students into careers at leading tech companies and AI startups
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Code size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Hands-On Approach</h4>
                    <p className="text-gray-600">
                      Focus on practical implementation of RAG pipelines, SLM fine-tuning, and AI agents
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mr-4 flex-shrink-0">
                    <Award size={24} className="text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Industry Connections</h4>
                    <p className="text-gray-600">
                      Helps open doors for placements and internships through professional networks in AI
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 3 - Industry Experience */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <Briefcase size={20} className="text-purple-600 mr-2" />
              Industry Experience
            </h3>
            <div className="space-y-3">
              <div className="flex items-center py-2 border-b border-gray-200">
                <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-purple-600 text-sm">V</span>
                </div>
                <span className="font-medium text-gray-800">VIRTUSA</span>
              </div>
              <div className="flex items-center py-2 border-b border-gray-200">
                <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-purple-600 text-sm">B</span>
                </div>
                <span className="font-medium text-gray-800">Broadridge</span>
              </div>
              <div className="flex items-center py-2 border-b border-gray-200">
                <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-purple-600 text-sm">V</span>
                </div>
                <span className="font-medium text-gray-800">ValueMomentum</span>
              </div>
              <div className="flex items-center py-2">
                <div className="h-8 w-8 bg-purple-100 rounded-full flex items-center justify-center mr-3">
                  <span className="font-bold text-purple-600 text-sm">T</span>
                </div>
                <span className="font-medium text-gray-800">Tech Startups</span>
              </div>
            </div>
          </div>
        </div>
        
        
        
      
      </div>
    </section>
  );
};

export default Trainers;