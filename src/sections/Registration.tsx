import React from 'react';
import { Calendar, Clock, CreditCard, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const Registration: React.FC = () => {
  const registrationLinks = {
    offline: {
      advance: "https://brainovision.in/offline-internship-advancepay",
      syllabus: "https://brainovision.in/offline-internship-ai-syllabus"
    },
    online: {
      java: {
        registration: "https://brainovision.in/online-internship-jfs-registration",
        syllabus: "https://brainovision.in/ai-internship-java-fullstack-syllabus"
      },
      digital: {
        registration: "https://brainovision.in/online-internship-registration",
        syllabus: "https://brainovision.in/ai-internship-digital-marketing-syllabus"
      },
      mern: {
        registration: "https://brainovision.in/online-internship-registration",
        syllabus: "https://brainovision.in/ai-internship-mern-syllabus"
      },
      genai: {
        registration: "https://brainovision.in/online-internship-registration",
        syllabus: "https://brainovision.in/ai-internship-gen-ai-syllabus"
      },
      servicenow: {
        registration: "https://brainovision.in/online-internship-servicenow-registration",
        syllabus: "https://brainovision.in/ai-internship-servicenow-syllabus"
      }
    }
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Learning Mode
            </h2>
            <p className="text-lg text-gray-700">
              Select your preferred mode and register for the internship program
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Offline Mode */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6 bg-indigo-600">
                <h3 className="text-xl font-bold text-white mb-2">Offline Mode</h3>
                <p className="text-indigo-100">Classroom training at Hyderabad</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                    Multiple batch timings
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                    Direct interaction with trainers
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                    Access to lab facilities
                  </li>
                </ul>
                <div className="space-y-3">
                  <a 
                    href={registrationLinks.offline.syllabus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-indigo-50 text-indigo-600 py-2 rounded-lg hover:bg-indigo-100 transition-colors"
                  >
                    View Syllabus
                  </a>
                  <a 
                    href={registrationLinks.offline.advance}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-indigo-600 text-white py-2 rounded-lg hover:bg-indigo-700 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>

            {/* Online Mode */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6 bg-purple-600">
                <h3 className="text-xl font-bold text-white mb-2">Online Mode</h3>
                <p className="text-purple-100">Live virtual training via Zoom</p>
              </div>
              <div className="p-6">
                <div className="space-y-4 mb-6">
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Java Full Stack</p>
                    <div className="flex gap-2">
                      <a 
                        href={registrationLinks.online.java.syllabus}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Syllabus
                      </a>
                      <span className="text-gray-300">|</span>
                      <a 
                        href={registrationLinks.online.java.registration}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Register (₹999)
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Digital Marketing</p>
                    <div className="flex gap-2">
                      <a 
                        href={registrationLinks.online.digital.syllabus}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Syllabus
                      </a>
                      <span className="text-gray-300">|</span>
                      <a 
                        href={registrationLinks.online.digital.registration}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Register (₹1,999)
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">MERN Stack</p>
                    <div className="flex gap-2">
                      <a 
                        href={registrationLinks.online.mern.syllabus}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Syllabus
                      </a>
                      <span className="text-gray-300">|</span>
                      <a 
                        href={registrationLinks.online.mern.registration}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Register (₹1,999)
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">Generative AI</p>
                    <div className="flex gap-2">
                      <a 
                        href={registrationLinks.online.genai.syllabus}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Syllabus
                      </a>
                      <span className="text-gray-300">|</span>
                      <a 
                        href={registrationLinks.online.genai.registration}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Register (₹1,999)
                      </a>
                    </div>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900 mb-2">ServiceNow</p>
                    <div className="flex gap-2">
                      <a 
                        href={registrationLinks.online.servicenow.syllabus}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Syllabus
                      </a>
                      <span className="text-gray-300">|</span>
                      <a 
                        href={registrationLinks.online.servicenow.registration}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-purple-600 hover:text-purple-700"
                      >
                        Register (₹2,999)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hybrid Mode */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6 bg-gradient-to-r from-indigo-600 to-purple-600">
                <h3 className="text-xl font-bold text-white mb-2">Hybrid Mode</h3>
                <p className="text-indigo-100">Flexible online & offline learning</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                    Flexible attendance options
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                    Access to both modes
                  </li>
                  <li className="flex items-center text-gray-700">
                    <span className="h-2 w-2 bg-indigo-600 rounded-full mr-2"></span>
                    Extended support hours
                  </li>
                </ul>
                <a 
                  href="https://wa.me/917207775039?text=Hi,%20I%20am%20interested%20in%20the%20Hybrid%20Internship%20Program"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 rounded-lg hover:from-indigo-700 hover:to-purple-700 transition-colors"
                >
                  Contact for Details
                </a>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">+91 7207775039</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">+91 7416935039</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-indigo-600 mr-3" />
                    <span className="text-gray-700">it@brainovision.in</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-indigo-600 mr-3 mt-1" />
                  <p className="text-gray-700">
                    2nd Floor, SS Chambers,<br />
                    Ayyappa Society, HITEC City,<br />
                    Madhapur, Hyderabad
                  </p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Links</h3>
                <div className="space-y-2">
                  <a 
                    href="https://brainovision.in/offline-internship-ai-syllabus"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Complete Syllabus
                  </a>
                  <a 
                    href="https://brainovision.in/placement-companies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-indigo-600 hover:text-indigo-700"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Placement Companies
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;