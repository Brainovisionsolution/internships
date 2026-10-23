import React from 'react';
import { Check, X, Sparkles } from 'lucide-react';

const HybridWhyJoinUs: React.FC = () => {
  const features = [
    { 
      name: 'Learning Model', 
      hybrid: 'Dual Flexibility: Live Interactive Sessions + Weekend Physical Lab Immersion', 
      others: 'Strictly online recorded videos or rigid daily classroom attendance' 
    },
    { 
      name: 'Program Duration', 
      hybrid: '3 Months Comprehensive Career Roadmap (Paced for college & work)', 
      others: 'Rushed 1-2 week overviews with zero depth' 
    },
    { 
      name: 'Certification', 
      hybrid: 'AICTE & APSCHE Approved + Brainovision ISO Certified Corporate Credentials', 
      others: 'Unverified participation certificates without university acceptance' 
    },
    { 
      name: 'Campus Lab Access', 
      hybrid: 'Full access to Brainovision Hyderabad physical lab, workstations & offline mentors', 
      others: 'No physical campus access or in-person assistance' 
    },
    { 
      name: 'Industry Tracks', 
      hybrid: 'MERN Full Stack, AI Full Stack, Python Data Science & AI, and Digital Marketing', 
      others: 'Generic or outdated curricula with no AI integration' 
    },
    { 
      name: 'Capstone Projects', 
      hybrid: 'Real company-style applications deployed on Cloud (Docker, AWS, Vercel) with code reviews', 
      others: 'Basic mini-projects with no production architecture' 
    },
    { 
      name: 'Mentorship', 
      hybrid: 'Dual mentorship: Live online query resolution + 1-on-1 in-person weekend guidance', 
      others: 'Self-serve ticketing system with days of delay' 
    }, 
    { 
      name: 'Program Fee', 
      hybrid: '₹6,000 Only (60% OFF from ₹14,999) — Complete 3-Month Access', 
      others: '₹25,000 to ₹50,000+ at competitor institutes' 
    },
    { 
      name: 'Placement Assistance', 
      hybrid: 'Resume polishing, GitHub audit, Mock Technical Rounds & Partner Hiring Drives', 
      others: 'No placement preparation or corporate connect' 
    }, 
    { 
      name: 'LMS & Resources', 
      hybrid: '1-Year 24/7 LMS Access to session recordings, code repos & masterclasses', 
      others: 'Access expires immediately after the course' 
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-teal-50 text-teal-700 rounded-full px-4 py-1.5 text-xs font-semibold mb-3 border border-teal-100">
            <Sparkles size={14} className="mr-1.5" />
            Comparison Guide
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Brainovision Hybrid Internship?
          </h2>
          <p className="text-lg text-gray-600">
            Compare our hybrid training model against standard market programs and see why thousands of students choose us.
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden rounded-2xl shadow-xl border border-gray-100">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr>
                  <th className="p-5 bg-gray-50 text-gray-900 font-bold text-base border-b border-gray-200 w-1/3">
                    Feature / Parameter
                  </th>
                  <th className="p-5 bg-gradient-to-r from-teal-700 to-emerald-700 text-white font-bold text-base border-b border-teal-800 w-1/3 text-center">
                    Brainovision Hybrid (3 Months)
                  </th>
                  <th className="p-5 bg-gray-100 text-gray-600 font-bold text-base border-b border-gray-200 w-1/3 text-center">
                    Other Training Programs
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {features.map((feature, index) => (
                  <tr 
                    key={index}
                    className={index % 2 === 0 ? 'bg-white hover:bg-gray-50/60' : 'bg-gray-50/40 hover:bg-gray-50'}
                  >
                    <td className="p-4 font-semibold text-gray-900 text-sm md:text-base">
                      {feature.name}
                    </td>
                    <td className="p-4 bg-teal-50/40 border-x border-teal-100/50">
                      <div className="flex items-start justify-center gap-2 text-teal-950 font-medium text-xs md:text-sm">
                        <Check size={18} className="text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span>{feature.hybrid}</span>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex items-start justify-center gap-2 text-gray-500 text-xs md:text-sm">
                        <X size={18} className="text-rose-400 flex-shrink-0 mt-0.5" />
                        <span>{feature.others}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridWhyJoinUs;
