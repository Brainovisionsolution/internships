import React from 'react';
import { Calendar, Clock, CreditCard, Mail, Phone, MapPin, ExternalLink } from 'lucide-react';

const HybridRegistration: React.FC = () => {
  const registrationLinks = {
    ai: {
      registration: "https://brainovision.in/hybrid-internship-ai-registration",
      syllabus: "https://brainovision.in/hybrid-internship-ai-syllabus",
      fee: "₹4,000"
    },
    aiml: {
      registration: "https://brainovision.in/hybrid-internship-aiml-registration",
      syllabus: "https://brainovision.in/hybrid-internship-aiml-syllabus",
      fee: "₹6,000"
    },
    advanced: {
      registration: "https://brainovision.in/hybrid-internship-advanced-registration",
      syllabus: "https://brainovision.in/hybrid-internship-advanced-syllabus",
      fee: "₹8,000"
    },
    cyber: {
      registration: "https://brainovision.in/hybrid-internship-cybersecurity-registration",
      syllabus: "https://brainovision.in/hybrid-internship-cybersecurity-syllabus",
      fee: "₹6,000"
    },
    cloud: {
      registration: "https://brainovision.in/hybrid-internship-cloud-registration",
      syllabus: "https://brainovision.in/hybrid-internship-cloud-syllabus",
      fee: "₹6,000"
    },
    mern: {
      registration: "https://brainovision.in/hybrid-internship-mern-registration",
      syllabus: "https://brainovision.in/hybrid-internship-mern-syllabus",
      fee: "₹7,000"
    },
    fullstack: {
      registration: "https://brainovision.in/hybrid-internship-fullstack-registration",
      syllabus: "https://brainovision.in/hybrid-internship-fullstack-syllabus",
      fee: "₹6,000"
    }
  };

  return (
    <section id="register" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Register for Hybrid Internship
            </h2>
            <p className="text-lg text-gray-700">
              Choose your preferred technology track and secure your spot today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {Object.entries(registrationLinks).map(([key, value]) => (
              <div key={key} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
                <div className="p-6 bg-green-600">
                  <h3 className="text-xl font-bold text-white mb-2">
                    {key === 'ai' && 'AI using Python'}
                    {key === 'aiml' && 'AI with Python, DS & ML'}
                    {key === 'advanced' && 'Advanced AI using Python'}
                    {key === 'cyber' && 'AI with CyberSecurity'}
                    {key === 'cloud' && 'AI with Cloud (AWS)'}
                    {key === 'mern' && 'AI with MERN Stack'}
                    {key === 'fullstack' && 'Python Full Stack with AI'}
                  </h3>
                  <p className="text-green-100">1 Month Offline + 1 Month Online</p>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center text-gray-600">
                      <CreditCard className="w-5 h-5 mr-2" />
                      <span>Registration Fee: {value.fee}</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Clock className="w-5 h-5 mr-2" />
                      <span>2 Months Duration</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Calendar className="w-5 h-5 mr-2" />
                      <span>Multiple Batches Available</span>
                    </div>
                  </div>
                  <div className="mt-6 space-y-3">
                    <a
                      href={value.syllabus}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-gray-200 transition-all duration-300"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      View Syllabus
                    </a>
                    <a
                      href={value.registration}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-all duration-300"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 rounded-xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 text-green-600 mr-3" />
                    <div>
                      <p className="text-gray-700">+91 7207775039</p>
                      <p className="text-gray-700">+91 7416935039</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 text-green-600 mr-3" />
                    <p className="text-gray-700">it@brainovision.in</p>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 text-green-600 mr-3 mt-1" />
                    <p className="text-gray-700">
                      2nd Floor, SS Chambers,<br />
                      Ayyappa Society, HITEC City,<br />
                      Madhapur, Hyderabad
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Important Information</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-600 rounded-full mr-3"></div>
                    Limited seats available per batch
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-600 rounded-full mr-3"></div>
                    First month offline training at our center
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-600 rounded-full mr-3"></div>
                    Second month online with live sessions
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-600 rounded-full mr-3"></div>
                    24/7 doubt resolution support
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-600 rounded-full mr-3"></div>
                    100% placement assistance
                  </li>
                  <li className="flex items-center">
                    <div className="h-2 w-2 bg-green-600 rounded-full mr-3"></div>
                    AICTE & APSCHE approved certification
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridRegistration;