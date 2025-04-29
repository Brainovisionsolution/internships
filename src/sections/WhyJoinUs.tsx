import React from 'react';
import { Check, X } from 'lucide-react';

interface WhyJoinUsProps {
  isOnline?: boolean;
}

const WhyJoinUs: React.FC<WhyJoinUsProps> = ({ isOnline }) => {
  const features = [
    { name: 'Curriculum', intensive: 'Designed as per companies\' current requirements', others: 'Not industry-aligned' },
    { name: 'Doubts Clarification', intensive: '9AM - 9PM Doubt Clarification.\n1500+ Mentors to help you.', others: 'Only 1-2 hours per day' },
    { name: 'Trainers', intensive: 'Alumni of IIT & Top MNCs like\nAmazon, Microsoft.\nBuilt world-class products', others: 'No real world project experience' },
    { name: 'Placements Record', intensive: 'Proven results for every branch,\ndegree, CGPA', others: 'For only select branches, degrees' },
    { name: 'Placements Opportunities', intensive: 'Unlimited from a pool of\n3000+ companies', others: 'Limited (15-20)' },
    { name: 'Institute Recognised by', intensive: 'AICTE & NASSCOM Approved', others: 'No recognition' },
    { name: 'Projects', intensive: '10+ Real-time Projects that makes\nyour resume strong', others: '~1-2 real time projects' },
    { name: 'Access to Labs', intensive: '24x7 Online State-of-the-art Labs.\nNo installation/setup needed.', others: 'Only 2 hours/day' },
    { name: 'AI Mock Interviews', intensive: 'with NxtMock', others: '', hasX: true },
    { name: 'Expert Mock Interviews', intensive: 'with Dedicated Tech & HR Panels', others: '', hasX: true },
    { name: "Seniors' Interview Experiences", intensive: 'Access to 300+ Sessions', others: '', hasX: true },
    { name: 'Scheduling Interviews', intensive: '', others: '', hasCheck: true, hasX: true },
    { name: 'Salary Negotiation with Companies', intensive: 'For higher salaries', others: '', hasCheck: true, hasX: true }
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
                <h3 className="text-xl font-bold">Intensive 3.0</h3>
              </div>
            </div>
            <div className="col-span-4">
              <div className="bg-gray-200 rounded-t-lg p-4 text-center">
                <h3 className="text-xl font-bold text-gray-700">Other Coaching Institutes</h3>
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