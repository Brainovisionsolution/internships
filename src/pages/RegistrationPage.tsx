import React, { useState } from 'react';
import { Layout } from '../components/Layout';
import { Calendar, Clock, CreditCard, Mail, Phone, MapPin } from 'lucide-react';

interface RegistrationFormData {
  name: string;
  email: string;
  phone: string;
  college: string;
  course: string;
  year: string;
  mode: 'online' | 'offline' | 'hybrid';
  technology?: string;
  batchTiming?: string;
}

const RegistrationPage: React.FC = () => {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    email: '',
    phone: '',
    college: '',
    course: '',
    year: '',
    mode: 'offline'
  });

  const technologies = [
    { value: 'ai', label: 'AI & Machine Learning' },
    { value: 'mern', label: 'MERN Stack' },
    { value: 'java', label: 'Java Full Stack' },
    { value: 'digital', label: 'Digital Marketing' },
    { value: 'servicenow', label: 'ServiceNow' }
  ];

  const batchTimings = {
    offline: [
      "06:00 AM to 07:00 AM",
      "07:30 AM to 09:00 AM",
      "09:30 AM to 11:00 AM",
      "11:30 AM to 01:30 PM",
      "02:00 PM to 04:00 PM",
      "04:30 PM to 06:00 PM",
      "06:30 PM to 08:00 PM",
      "08:00 PM to 09:00 PM"
    ],
    online: [
      "06:30 AM - 07:45 AM",
      "09:00 AM - 10:30 AM",
      "11:00 AM - 12:30 PM",
      "02:30 PM - 04:00 PM",
      "06:30 PM - 08:00 PM"
    ],
    hybrid: [
      "09:30 AM to 11:00 AM",
      "11:30 AM to 01:30 PM",
      "02:00 PM to 04:00 PM"
    ]
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    window.location.href = formData.mode === 'online' 
      ? 'https://brainovision.in/online-internship-registration'
      : 'https://brainovision.in/offline-internship-advancepay';
  };

  return (
    <Layout>
      <div className="pt-32 pb-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Register for AI Industry Internship Program
              </h1>
              <p className="text-lg text-gray-700">
                Fill out the form below to secure your spot in our exclusive internship program
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          value={formData.phone}
                          onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          College/University
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          value={formData.college}
                          onChange={(e) => setFormData({...formData, college: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Course
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          value={formData.course}
                          onChange={(e) => setFormData({...formData, course: e.target.value})}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Year of Study
                        </label>
                        <select
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          value={formData.year}
                          onChange={(e) => setFormData({...formData, year: e.target.value})}
                        >
                          <option value="">Select Year</option>
                          <option value="1">1st Year</option>
                          <option value="2">2nd Year</option>
                          <option value="3">3rd Year</option>
                          <option value="4">4th Year</option>
                          <option value="pg">Post Graduate</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mode of Internship
                      </label>
                      <div className="grid grid-cols-3 gap-4">
                        {(['offline', 'online', 'hybrid'] as const).map((mode) => (
                          <button
                            key={mode}
                            type="button"
                            className={`py-2 px-4 rounded-lg border ${
                              formData.mode === mode
                                ? 'bg-indigo-600 text-white border-indigo-600'
                                : 'border-gray-300 text-gray-700 hover:border-indigo-500'
                            }`}
                            onClick={() => setFormData({...formData, mode})}
                          >
                            {mode.charAt(0).toUpperCase() + mode.slice(1)}
                          </button>
                        ))}
                      </div>
                    </div>

                    {formData.mode === 'online' && (
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Select Technology
                        </label>
                        <select
                          required
                          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                          value={formData.technology}
                          onChange={(e) => setFormData({...formData, technology: e.target.value})}
                        >
                          <option value="">Select Technology</option>
                          {technologies.map((tech) => (
                            <option key={tech.value} value={tech.value}>
                              {tech.label}
                            </option>
                          ))}
                        </select>
                      </div>
                    )}

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Batch Timing
                      </label>
                      <select
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                        value={formData.batchTiming}
                        onChange={(e) => setFormData({...formData, batchTiming: e.target.value})}
                      >
                        <option value="">Select Timing</option>
                        {batchTimings[formData.mode].map((timing) => (
                          <option key={timing} value={timing}>
                            {timing}
                          </option>
                        ))}
                      </select>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors duration-300"
                    >
                      Proceed to Payment
                    </button>
                  </form>
                </div>
              </div>

              <div className="lg:col-span-1">
                <div className="bg-white rounded-xl shadow-sm p-6 md:p-8 space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Contact Information</h3>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Phone className="w-5 h-5 text-indigo-600 mt-1 mr-3" />
                        <div>
                          <p className="text-gray-900">+91 7207775039</p>
                          <p className="text-gray-900">+91 7416935039</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <Mail className="w-5 h-5 text-indigo-600 mt-1 mr-3" />
                        <p className="text-gray-900">it@brainovision.in</p>
                      </div>
                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 text-indigo-600 mt-1 mr-3" />
                        <p className="text-gray-900">
                          2nd Floor, SS Chambers,<br />
                          Ayyappa Society, HITEC City,<br />
                          Madhapur, Hyderabad
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Registration Fee</h3>
                    <div className="space-y-2">
                      <p className="text-gray-700">Online Mode: ₹999 - ₹2,999</p>
                      <p className="text-gray-700">Offline Mode: ₹999 (Advance)</p>
                      <p className="text-gray-700">Hybrid Mode: Contact for Details</p>
                    </div>
                  </div>

                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Important Notes</h3>
                    <ul className="space-y-2 text-gray-700">
                      <li>• Limited seats available per batch</li>
                      <li>• AICTE & APSCHE approved program</li>
                      <li>• 100% placement assistance</li>
                      <li>• Industry recognized certification</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RegistrationPage;