import React from 'react';
import { CheckCircle, Calendar, Users, Award, BookOpen, Cpu, Briefcase, Rocket, Target, Zap, Trophy, Star, BrainCircuit, Bot, MessageSquare, Search, Workflow, Shield, Sparkles, Clock, Video, FileQuestion, ClipboardCheck, Globe, Smartphone, Infinity, Headphones } from 'lucide-react';

interface ProgramHighlightsProps {
  isOnline?: boolean;
  isHybrid?: boolean;
  isSelfPlaced?: boolean;
}

const ProgramHighlights: React.FC<ProgramHighlightsProps> = ({ isOnline = false, isHybrid = false, isSelfPlaced = false }) => {
  const selfPlacedHighlights = [
    {
      icon: <Zap size={36} className="text-purple-500" />,
      title: "Start Immediately",
      description: "No batch waiting. Get instant access to all course materials upon enrollment"
    },
    {
      icon: <Clock size={36} className="text-purple-500" />,
      title: "Learn Anytime, Anywhere",
      description: "24/7 access to content from any device - desktop, tablet, or mobile"
    },
    {
      icon: <Infinity size={36} className="text-purple-500" />,
      title: "Your Own Pace",
      description: "No fixed schedules. Learn at the speed that suits your lifestyle and commitments"
    },
    {
      icon: <Video size={36} className="text-purple-500" />,
      title: "High-Quality Recorded Lectures",
      description: "Professionally recorded videos covering 12 comprehensive modules"
    },
    {
      icon: <FileQuestion size={36} className="text-purple-500" />,
      title: "Module-wise Quizzes",
      description: "Test your understanding with auto-graded quizzes after each module"
    },
    {
      icon: <ClipboardCheck size={36} className="text-purple-500" />,
      title: "Hands-on Assignments",
      description: "Practical coding assignments to reinforce learning and build skills"
    },
    {
      icon: <Briefcase size={36} className="text-purple-500" />,
      title: "4 Capstone Projects",
      description: "Real-world projects including RAG system, custom chatbot, and AI agents"
    },
    {
      icon: <Award size={36} className="text-purple-500" />,
      title: "AICTE Approved Certificate",
      description: "Receive AICTE & APSCHE approved internship certificate upon completion"
    },
    {
      icon: <BookOpen size={36} className="text-purple-500" />,
      title: "Lifetime Content Access",
      description: "Access all course materials forever - learn, revisit, and upgrade anytime"
    },
    {
      icon: <Users size={36} className="text-purple-500" />,
      title: "Community Support",
      description: "Join our active community forum for discussions and doubt resolution"
    },
    {
      icon: <Headphones size={36} className="text-purple-500" />,
      title: "Dedicated Support Team",
      description: "Get help whenever you need it from our responsive support team"
    },
    {
      icon: <BrainCircuit size={36} className="text-purple-500" />,
      title: "Complete Generative AI Curriculum",
      description: "Master Transformers, LLMs, RAG, Prompt Engineering, and Agentic AI"
    }
  ];

  const activeHighlights = isSelfPlaced ? selfPlacedHighlights : [];

  // Split highlights into two rows of 6
  const firstRow = activeHighlights.slice(0, 6);
  const secondRow = activeHighlights.slice(6, 12);

  return (
    <section id="program" className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center mb-4">
            <span className="text-sm font-semibold text-purple-600 uppercase tracking-wide bg-purple-50 px-3 py-1 rounded-full">Key Highlights</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            AIGA Self-Paced Program Highlights
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Complete flexibility with structured learning - Master Generative AI on your own schedule with lifetime access to all content
          </p>
        </div>

        {/* First Row - 6 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-6">
          {firstRow.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-purple-50 rounded-full w-14 h-14 flex items-center justify-center mb-3 group-hover:bg-purple-100 transition-colors duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-md font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">{highlight.description}</p>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle className="text-green-500" size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Second Row - 6 boxes */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {secondRow.map((highlight, index) => (
            <div
              key={index}
              className="group relative bg-white border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="bg-purple-50 rounded-full w-14 h-14 flex items-center justify-center mb-3 group-hover:bg-purple-100 transition-colors duration-300">
                {highlight.icon}
              </div>
              <h3 className="text-md font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-300">
                {highlight.title}
              </h3>
              <p className="text-gray-600 text-xs leading-relaxed">{highlight.description}</p>
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <CheckCircle className="text-green-500" size={16} />
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600">12</div>
            <div className="text-sm text-gray-600 mt-1">Comprehensive Modules</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600">40+</div>
            <div className="text-sm text-gray-600 mt-1">Topics Covered</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600">4</div>
            <div className="text-sm text-gray-600 mt-1">Capstone Projects</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600">∞</div>
            <div className="text-sm text-gray-600 mt-1">Lifetime Access</div>
          </div>
        </div>

        {/* Learning Journey Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-100">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Learning Journey</h3>
              <p className="text-gray-600">A structured path to mastering Generative AI</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Video size={28} className="text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Step 1</h4>
                <p className="text-sm text-gray-600">Learn at your convenience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <FileQuestion size={28} className="text-pink-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Step 2</h4>
                <p className="text-sm text-gray-600">Take module-wise quizzes to test knowledge</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <ClipboardCheck size={28} className="text-indigo-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Step 3</h4>
                <p className="text-sm text-gray-600">Complete hands-on coding assignments</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-3 shadow-sm">
                  <Briefcase size={28} className="text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">Step 4</h4>
                <p className="text-sm text-gray-600">Build and submit capstone projects</p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Start Your Self-Paced Journey Today!
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Get instant access to all 12 modules, quizzes, assignments, and 4 capstone projects with lifetime access - all at just ₹1,999
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://rzp.io/rzp/JCoC0fof"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-lg px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enroll Now - ₹1,999 Only
              </a>
              <a
                href="https://wa.me/919063651119"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 text-white rounded-lg px-8 py-4 font-semibold transition-all duration-300"
              >
                Speak with Counselor
              </a>
            </div>
            <p className="text-sm mt-4 opacity-75">
              ✓ Instant Access ✓ Lifetime Content ✓ AICTE Approved Certificate ✓ Community Support
            </p>
          </div>
        </div>

        {/* Comparison Section */}
        <div className="mt-16">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Self-Paced?</h3>
            <p className="text-gray-600">Compare and see what works best for you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock size={22} className="text-purple-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Learn Anytime</h4>
              <p className="text-sm text-gray-600">No fixed schedule - learn when it's convenient for you</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Infinity size={22} className="text-pink-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Your Own Pace</h4>
              <p className="text-sm text-gray-600">Complete modules as fast or slow as you want</p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm text-center">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe size={22} className="text-green-600" />
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Learn Anywhere</h4>
              <p className="text-sm text-gray-600">Access content from any device, anywhere in the world</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;