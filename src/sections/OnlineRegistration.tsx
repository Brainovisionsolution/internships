// Replace the entire OnlineRegistration component with the Registration component
// but with purple theme colors and online-specific content
import React from 'react';
import { Calendar, Clock, CreditCard, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const OnlineRegistration: React.FC = () => {
  const registrationLinks = {
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
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Register for Online Internship
            </h2>
            <p className="text-lg text-gray-700">
              Choose your preferred technology track and start your learning journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {/* Java Full Stack */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6 bg-purple-600">
                <h3 className="text-xl font-bold text-white mb-2">Java Full Stack</h3>
                <p className="text-purple-100">₹999</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <a 
                    href={registrationLinks.java.syllabus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-50 text-purple-600 py-2 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    View Syllabus
                  </a>
                  <a 
                    href={registrationLinks.java.registration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>

            {/* Similar blocks for other technologies */}
            {/* Digital Marketing */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6 bg-purple-600">
                <h3 className="text-xl font-bold text-white mb-2">Digital Marketing</h3>
                <p className="text-purple-100">₹1,999</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <a 
                    href={registrationLinks.digital.syllabus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-50 text-purple-600 py-2 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    View Syllabus
                  </a>
                  <a 
                    href={registrationLinks.digital.registration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>

            {/* MERN Stack */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6 bg-purple-600">
                <h3 className="text-xl font-bold text-white mb-2">MERN Stack</h3>
                <p className="text-purple-100">₹1,999</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <a 
                    href={registrationLinks.mern.syllabus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-50 text-purple-600 py-2 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    View Syllabus
                  </a>
                  <a 
                    href={registrationLinks.mern.registration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>

            {/* Generative AI */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6 bg-purple-600">
                <h3 className="text-xl font-bold text-white mb-2">Generative AI</h3>
                <p className="text-purple-100">₹1,999</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <a 
                    href={registrationLinks.genai.syllabus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-50 text-purple-600 py-2 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    View Syllabus
                  </a>
                  <a 
                    href={registrationLinks.genai.registration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>

            {/* ServiceNow */}
            <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200">
              <div className="p-6 bg-purple-600">
                <h3 className="text-xl font-bold text-white mb-2">ServiceNow</h3>
                <p className="text-purple-100">₹2,999</p>
              </div>
              <div className="p-6">
                <div className="space-y-3">
                  <a 
                    href={registrationLinks.servicenow.syllabus}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-50 text-purple-600 py-2 rounded-lg hover:bg-purple-100 transition-colors"
                  >
                    View Syllabus
                  </a>
                  <a 
                    href={registrationLinks.servicenow.registration}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block text-center bg-purple-600 text-white py-2 rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    Register Now
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Us</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">+91 8125579489</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">+91 7416422509</span>  
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-purple-600 mr-3" />
                    <span className="text-gray-700">it@brainovision.in</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location</h3>
                <div className="flex items-start">
                  <MapPin className="w-5 h-5 text-purple-600 mr-3 mt-1" />
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
                    href="https://brainovision.in/placement-companies"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-purple-600 hover:text-purple-700"
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

export default OnlineRegistration;
