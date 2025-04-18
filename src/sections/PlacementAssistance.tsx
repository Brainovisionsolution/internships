import React from 'react';
import { Briefcase, FileText, Users, Award } from 'lucide-react';

const PlacementAssistance: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-indigo-100 rounded-full mb-4">
            <Briefcase size={24} className="text-indigo-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            100% Placement Assistance
          </h2>
          <p className="text-lg text-gray-700">
            At Brainovision, we don't just teach AI — we prepare you for real-world success 
            with our dedicated placement support services.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <FileText size={24} className="text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">ATS-Friendly Resume Building</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Learn to craft modern, role-specific resumes that stand out
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Use industry keywords and showcase project skills effectively
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-600">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <p className="text-gray-700">
                    Guidance for tailoring resumes to specific job roles and companies
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-indigo-50 p-6 md:p-8 border-t border-gray-200">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                  <Award size={20} className="text-indigo-600" />
                </div>
                <h4 className="text-lg font-semibold text-gray-900">Letter of Recommendation</h4>
              </div>
              <p className="text-gray-700">
                Get an official LOR after completing the internship and projects — perfect for job 
                applications, higher studies, and LinkedIn endorsements.
              </p>
            </div>
          </div>
          
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex items-center mb-6">
                <div className="h-12 w-12 bg-indigo-100 rounded-full flex items-center justify-center mr-4">
                  <Users size={24} className="text-indigo-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Interview Preparation & Soft Skills</h3>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <Users size={18} className="text-indigo-600 mr-2" />
                    Mock Interviews
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Practice with real-time feedback from industry professionals
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 mr-2">
                      <path d="M20.38 3.46 16 2a4 4 0 0 1 1.46 3.46c0 .34-.03.67-.09 1 .39.11.75.29 1.08.53.16-.53.45-1.04.1-1.54-.83-1.39-3.27-1.14-3.48.91-.13 1.33.71 2.82 1.93 3.14 1.08.3 2.12-.1 3.12-.78.82-.58 1.88-1.22 1.88-2.4 0-1.25-.33-1.82-1-2.21Z"></path>
                      <path d="M18.38 9.46 14 8a4 4 0 0 1 1.46 3.46c0 .34-.03.67-.09 1 .39.11.75.29 1.08.53.16-.53.45-1.04.1-1.54-.83-1.39-3.27-1.14-3.48.91-.13 1.33.71 2.82 1.93 3.14 1.08.3 2.12-.1 3.12-.78.82-.58 1.88-1.22 1.88-2.4 0-1.25-.33-1.82-1-2.21Z"></path>
                      <path d="M8 16.77A6.23 6.23 0 0 1 1.77 12 6.22 6.22 0 0 1 8 5.77a6.18 6.18 0 0 1 4 1.5"></path>
                      <path d="m19 5 2 2-2 2"></path>
                      <path d="m21 13-2-2-2 2"></path>
                    </svg>
                    Interview Etiquette
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Guidance on professional behavior and dress code
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 mr-2">
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <path d="M12 11h4"></path>
                      <path d="M12 16h4"></path>
                      <path d="M8 11h.01"></path>
                      <path d="M8 16h.01"></path>
                    </svg>
                    Body Language Coaching
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Learn how to present yourself confidently
                  </p>
                </div>
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 mr-2">
                      <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
                      <path d="M12 9v4"></path>
                      <path d="M12 17h.01"></path>
                    </svg>
                    Technical Interview Prep
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Practice answering common AI and ML interview questions
                  </p>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-3">Master How To:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Present yourself professionally</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Answer questions smartly</span>
                  </li>
                  <li className="flex items-center">
                    <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center mr-3 flex-shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700">Stay calm under pressure</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-indigo-600 rounded-2xl overflow-hidden shadow-lg">
          <div className="md:flex">
            <div className="p-6 md:p-8 md:w-2/3">
              <h3 className="text-2xl font-bold text-white mb-4">Ready to Boost Your Career?</h3>
              <p className="text-indigo-100 mb-6">
                Our placement assistance has helped hundreds of students secure roles in leading 
                tech companies. Join our program today and take the first step towards your 
                dream career in AI.
              </p>
              <a 
                href="#register" 
                className="inline-block bg-white text-indigo-600 font-medium rounded-lg px-6 py-3 hover:bg-indigo-50 transition-colors duration-300"
              >
                Register Now
              </a>
            </div>
            <div className="md:w-1/3 bg-indigo-700 p-6 md:p-8 flex items-center justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">100%</div>
                <div className="text-xl text-indigo-200 font-medium">Placement Assistance</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlacementAssistance;