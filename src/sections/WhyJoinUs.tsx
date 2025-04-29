import React from 'react';
import { Check, X } from 'lucide-react';

interface WhyJoinUsProps {
  isOnline?: boolean;
}

const WhyJoinUs: React.FC<WhyJoinUsProps> = ({ isOnline }) => {
  const features = [
    { name: 'Certification', intensive: 'Provided by Brainovision Pvt. Ltd, an ISO Certified and MSME Registered company', others: 'Often not ISO certified or government registered' },
    { name: 'Curriculum', intensive: 'Cutting-edge, AI-Integrated in every technology, with a project-based learning model', others: 'Generic curriculum with outdated content and minimal real-world applications' },
    { name: 'Projects', intensive: 'AI-powered projects aligned with UN Sustainable Development Goals (SDGs)', others: 'Basic mini-projects with no global relevance or real-time tech integration' },    
    { name: 'Mentor Team', intensive: 'Mentored by alumni from IITs, IIITs, and NITs', others: 'Inexperienced or generic trainers' }, { name: 'Program Fees', intensive: 'Training starts from just ₹999, internship is unpaid to encourage genuine learning', others: 'Often charge high fees without justified value' }, 
    { name: 'Program Fees', intensive: 'Training starts from just ₹999, internship is unpaid to encourage genuine learning', others: 'Often charge high fees without justified value' },
    { name: 'Learning Environment', intensive: 'Fully air-conditioned classrooms, equipped with projectors and screen setups', others: 'Basic classrooms without professional infrastructure' }, 
    { name: 'Official Partnerships', intensive: 'In association with AICTE, Government of Andhra Pradesh, and NASSCOM', others: 'Usually no official affiliations' }, 
    { name: 'Tasks & Assessments', intensive: 'Access to LMS for 1 year, regular assessments, and AI Interview Preparation Portal', others: 'Limited or no post-session access, lacks assessment structure' }, 
    { name: 'Certification Value', intensive: 'Government-approved certificates with Letter of Recommendation (LoR)', others: 'Private certifications with limited industry recognition' },
    { name: 'Placement Assistance', intensive: 'Internship completion leads to job opportunities shared from MNCs and startups, domain-specific', others: 'No or vague placement guidance' }  
  ];

  const themeColor = isOnline ? 'purple' : 'indigo';

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Join {isOnline ? 'Our Online' : 'Intensive'} Program?
          </h2>
          <p className="text-lg text-gray-700">
            Compare our program features with other training institutes
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-12 gap-4">
            {/* Header */}
            <div className="col-span-4"></div>
            <div className="col-span-4">
              <div className={`bg-${themeColor}-600 text-white rounded-t-lg p-4 text-center`}>
                <h3 className="text-xl font-bold">Brainovision Internship Program</h3>
              </div>
            </div>
            <div className="col-span-4">
              <div className="bg-gray-200 rounded-t-lg p-4 text-center">
                <h3 className="text-xl font-bold text-gray-700">Other Internship Programs</h3>
              </div>
            </div>

            {/* Features */}
            {features.map((feature, index) => (
              <React.Fragment key={index}>
                <div className="col-span-4 bg-gray-100 p-4">
                  <span className="font-medium text-gray-900">{feature.name}</span>
                </div>
                <div className="col-span-4 bg-white p-4 text-center">
                  {feature.intensive && (
                    <span className="text-gray-700 whitespace-pre-line">{feature.intensive}</span>
                  )}
                  {feature.hasCheck && (
                    <div className="flex justify-center">
                      <Check className="text-green-500" size={24} />
                    </div>
                  )}
                </div>
                <div className="col-span-4 bg-white p-4 text-center">
                  {feature.others && (
                    <span className="text-gray-700">{feature.others}</span>
                  )}
                  {feature.hasX && (
                    <div className="flex justify-center">
                      <X className="text-red-500" size={24} />
                    </div>
                  )}
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
