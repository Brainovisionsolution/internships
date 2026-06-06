import React from 'react';
import { Building, CheckCircle, Sparkles, Award, Users, Briefcase } from 'lucide-react';

const AboutUs: React.FC = () => {
  const stats = [
    { label: "TOTAL GLOBAL ALUMNI", value: "60,000+" },
    { label: "TECHNOLOGIES", value: "8+" },
    { label: "HACKATHONS & WORKSHOPS", value: "950+" },
    { label: "COLLEGE/UNIVERSITY COLLABORATIONS", value: "650+" },
    { label: "INTERNSHIPS", value: "1,60,000+" }
  ];

  return (
    <section id="about" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-2xl mb-4">
            <Building size={24} className="text-purple-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Brainovision
          </h2>
          <p className="text-lg text-gray-700">
            We are Brainovision Solutions India Pvt Ltd, a leading provider of specialized 
            technology training and internship programs in Hyderabad, approved by AICTE & APSCHE.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
              <div className="text-2xl md:text-3xl font-bold text-purple-600 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Brainovision, our mission is to bridge the gap between academic learning and industry requirements 
              by providing high-quality, practical training programs that prepare students for successful careers in Generative AI and technology.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We believe in hands-on learning with real-world AI projects, industry-relevant curriculum focused on LLMs and RAG pipelines, 
              and personalized mentorship from AI experts to help students achieve their full potential in the competitive tech landscape.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Brainovision?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">AICTE & APSCHE approved training programs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Industry-experienced AI trainers from premier institutions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">State-of-the-art learning facilities with GPU access</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Placement assistance with proven track record in AI/ML roles</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-purple-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Comprehensive LMS access for 1 year with AI resources</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100">
            <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-purple-50 to-pink-50">
              <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center">
                <Award size={20} className="text-purple-600 mr-2" />
                Our Collaborations
              </h3>
              <p className="text-gray-600">
                We've partnered with leading organizations to ensure our programs meet the highest standards.
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <img src="/logos/aicte.png" alt="AICTE" className="h-16 w-auto mb-3" />
                  <span className="text-sm text-gray-600 text-center">All India Council for Technical Education</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <img src="/logos/nasscom.png" alt="NASSCOM" className="h-16 w-auto mb-3" />
                  <span className="text-sm text-gray-600 text-center">National Association of Software & Service Companies</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:shadow-md transition-shadow">
                  <img src="/logos/apsche.png" alt="APSCHE" className="h-16 w-auto mb-3" />
                  <span className="text-sm text-gray-600 text-center">Andhra Pradesh State Council of Higher Education</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        
      </div>
    </section>
  );
};

export default AboutUs;