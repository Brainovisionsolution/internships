import React from 'react';
import { GraduationCap, Briefcase, Users, Award, Code, Laptop, MapPin, Sparkles } from 'lucide-react';

const HybridTrainers: React.FC = () => {
  return (
    <section id="trainers" className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-100 to-emerald-100 rounded-2xl mb-4">
            <GraduationCap size={24} className="text-teal-700" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Your Hybrid Mentors & Instructors
          </h2>
          <p className="text-lg text-gray-700">
            Learn from senior engineers, AI architects, and full stack leads who mentor you virtually and in-person at our Hyderabad campus.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {/* Card 1 - Premier Background */}
          <div className="bg-gradient-to-br from-teal-800 to-emerald-800 text-white rounded-2xl p-6 md:p-8 shadow-xl">
            <h3 className="text-2xl font-bold mb-4">Premier Background</h3>
            <p className="mb-6 text-teal-100 text-sm">
              Our hybrid mentors bring experience from top technology enterprises and premier engineering institutions.
            </p>
            <div className="space-y-4 text-sm">
              <div className="flex items-center">
                <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <GraduationCap size={18} className="text-white" />
                </div>
                <span className="font-medium">IITs & NITs Alumni</span>
              </div>
              <div className="flex items-center">
                <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Briefcase size={18} className="text-white" />
                </div>
                <span className="font-medium">Senior Tier-1 Corporate Engineers</span>
              </div>
              <div className="flex items-center">
                <div className="h-9 w-9 rounded-full bg-white/20 flex items-center justify-center mr-3 flex-shrink-0">
                  <Award size={18} className="text-white" />
                </div>
                <span className="font-medium">AICTE Recognized Master Trainers</span>
              </div>
            </div>
          </div>
          
          {/* Card 2 - Trainer Highlights */}
          <div className="col-span-1 md:col-span-2">
            <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 h-full shadow-sm hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Dual Mentorship Model</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center mr-4 flex-shrink-0 border border-teal-100">
                    <Laptop size={22} className="text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Live Online Guidance</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Interactive live code walkthroughs, live debugging sessions, and 24/7 community doubt resolution.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center mr-4 flex-shrink-0 border border-emerald-100">
                    <MapPin size={22} className="text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">In-Person Lab Mentoring</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Visit our Hyderabad campus on weekends for 1-on-1 project code audits and architecture design reviews.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-teal-50 flex items-center justify-center mr-4 flex-shrink-0 border border-teal-100">
                    <Code size={22} className="text-teal-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Production Code Reviews</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      GitHub pull request evaluations teaching real corporate clean-code standards and testing.
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center mr-4 flex-shrink-0 border border-emerald-100">
                    <Briefcase size={22} className="text-emerald-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Mock Interview Evaluations</h4>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Technical interview simulations, DSA preparation, and resume alignment for hiring partner drives.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Card 3 - Stats */}
          <div className="bg-gradient-to-br from-emerald-700 to-teal-800 text-white rounded-2xl p-6 md:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl font-bold mb-4">Mentor Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="text-3xl font-bold text-emerald-200">10+</div>
                  <p className="text-teal-100 text-xs">Years Average Corporate Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-200">50,000+</div>
                  <p className="text-teal-100 text-xs">Students & Engineers Mentored</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-emerald-200">95%</div>
                  <p className="text-teal-100 text-xs">Positive Intern Feedback Rating</p>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-teal-600/50">
              <span className="text-xs font-semibold text-teal-200">AICTE & APSCHE Certified Mentors</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HybridTrainers;
