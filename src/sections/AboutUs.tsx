import React from 'react';
import { Building, CheckCircle } from 'lucide-react';

const AboutUs: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <Building size={24} className="text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Brainovision
          </h2>
          <p className="text-lg text-gray-700">
            We are Brainovision Solutions India Pvt Ltd, a leading provider of specialized 
            technology training and internship programs in Hyderabad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Brainovision, our mission is to bridge the gap between academic learning and industry requirements 
              by providing high-quality, practical training programs that prepare students for successful careers in technology.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              We believe in hands-on learning, industry-relevant curriculum, and personalized mentorship 
              to help students achieve their full potential in the competitive tech landscape.
            </p>
            
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Why Choose Brainovision?</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">AICTE & NASSCOM approved training programs</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Industry-experienced trainers from premier institutions</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">State-of-the-art learning facilities</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">100% placement assistance with proven track record</span>
              </li>
              <li className="flex items-start">
                <CheckCircle size={20} className="text-green-500 mt-1 mr-3 flex-shrink-0" />
                <span className="text-gray-700">Comprehensive support system for students</span>
              </li>
            </ul>
          </div>
          
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Our Collaborations</h3>
              <p className="text-gray-600">
                We've partnered with leading organizations to ensure our programs meet the highest standards.
              </p>
            </div>
            <div className="p-6">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                  <img src="/logos/aicte.png" alt="AICTE" className="h-16 w-auto mb-3" />
                  <span className="text-sm text-gray-600 text-center">All India Council for Technical Education</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                  <img src="/logos/nasscom.png" alt="NASSCOM" className="h-16 w-auto mb-3" />
                  <span className="text-sm text-gray-600 text-center">National Association of Software & Service Companies</span>
                </div>
                <div className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg">
                  <img src="/logos/apsche.png" alt="APSCHE" className="h-16 w-auto mb-3" />
                  <span className="text-sm text-gray-600 text-center">Andhra Pradesh State Council of Higher Education</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Company Experience</h4>
                <div className="grid grid-cols-3 gap-4">
                  <div className="h-16 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                    <span className="text-gray-800 font-medium text-sm">VIRTUSA</span>
                  </div>
                  <div className="h-16 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                    <span className="text-gray-800 font-medium text-sm">Broadridge</span>
                  </div>
                  <div className="h-16 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                    <span className="text-gray-800 font-medium text-sm">ValueMomentum</span>
                  </div>
                  <div className="h-16 bg-gray-50 rounded-lg flex items-center justify-center p-2">
                    <span className="text-gray-800 font-medium text-sm">Tech Startups</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-600 rounded-2xl overflow-hidden shadow-lg">
          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to Transform Your Career?</h3>
            <p className="text-indigo-100 mb-8 max-w-3xl mx-auto">
              Join our exclusive AI Internship Program and gain the skills, knowledge, and certifications 
              needed to thrive in the competitive tech industry.
            </p>
            <a 
              href="#register" 
              className="inline-block bg-white text-indigo-600 font-medium rounded-lg px-8 py-4 hover:bg-indigo-50 transition-colors duration-300"
            >
              Register Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;