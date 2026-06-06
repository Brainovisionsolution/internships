import React from 'react';
import { CheckCircle, Calendar, Users, Award, BookOpen, Cpu, Briefcase, Rocket, Target, Zap, Trophy, Star, BrainCircuit, Bot, MessageSquare, Search, Workflow, Shield, Sparkles } from 'lucide-react';

interface ProgramHighlightsProps {
  isOnline?: boolean;
  isHybrid?: boolean;
}

const ProgramHighlights: React.FC<ProgramHighlightsProps> = ({ isOnline = false, isHybrid = false }) => {
  const highlights = [
    {
      icon: <Zap size={36} className="text-purple-500" />,
      title: "Real-time Project Development",
      description: "Build RAG chatbots, fine-tune SLMs, and create AI agents from Day-1"
    },
    {
      icon: <Target size={36} className="text-purple-500" />,
      title: "Industry-Oriented Training",
      description: "Practical training focused on Generative AI, LLMs, and current industry trends"
    },
    {
      icon: <Trophy size={36} className="text-purple-500" />,
      title: "Hackathon & Evaluations",
      description: "Participate in AI hackathons and regular performance assessments"
    },
    {
      icon: <Briefcase size={36} className="text-purple-500" />,
      title: "Placement Drive Access",
      description: "Chance to participate in placement drives with MNCs and AI startups"
    },
    {
      icon: <Star size={36} className="text-purple-500" />,
      title: "Direct Hiring Opportunity",
      description: "Top-performing interns can get direct hiring by Brainovision"
    },
    {
      icon: <Award size={36} className="text-purple-500" />,
      title: "AICTE Approved Certificate",
      description: "Receive AICTE & APSCHE approved internship certificate upon completion"
    },
    {
      icon: <BookOpen size={36} className="text-purple-500" />,
      title: "1 Year Premium LMS Access",
      description: "Get 1 year access to our premium Learning Management System with AI resources"
    },
    {
      icon: <Rocket size={36} className="text-purple-500" />,
      title: "Career Guidance & Mentoring",
      description: "Personalized career guidance from AI industry experts and regular mentoring"
    },
    {
      icon: <Users size={36} className="text-purple-500" />,
      title: "Limited Seats (35 Only)",
      description: "Small batch size for personalized attention and better learning outcomes"
    },
    {
      icon: <Calendar size={36} className="text-purple-500" />,
      title: "90 Hours Training",
      description: isHybrid ? "50-60h Offline + 30-40h Online training over 8 weeks" : "Comprehensive 90-hour training over 8 weeks for deep skill mastery"
    },
    {
      icon: <BrainCircuit size={36} className="text-purple-500" />,
      title: "Generative AI Focus",
      description: "Complete curriculum covering Transformers, LLMs, RAG, and Agentic AI"
    },
    {
      icon: <Shield size={36} className="text-purple-500" />,
      title: "Responsible AI Training",
      description: "Learn bias mitigation, red-teaming, and ethical AI practices"
    }
  ];

  const onlineHighlights = [
    {
      icon: <Zap size={36} className="text-purple-500" />,
      title: "Real-time Project Development",
      description: "Build production-level applications in your technology track from Day-1"
    },
    {
      icon: <Target size={36} className="text-purple-500" />,
      title: "Industry-Oriented Training",
      description: "Practical training focused on current industry trends and relevant tech stacks"
    },
    {
      icon: <Trophy size={36} className="text-purple-500" />,
      title: "Hackathon & Evaluations",
      description: "Participate in tech hackathons and regular performance assessments"
    },
    {
      icon: <Briefcase size={36} className="text-purple-500" />,
      title: "Placement Drive Access",
      description: "Chance to participate in placement drives with MNCs and tech startups"
    },
    {
      icon: <Star size={36} className="text-purple-500" />,
      title: "Direct Hiring Opportunity",
      description: "Top-performing interns can get direct hiring by Brainovision"
    },
    {
      icon: <Award size={36} className="text-purple-500" />,
      title: "AICTE Approved Certificate",
      description: "Receive AICTE & APSCHE approved internship certificate upon completion"
    },
    {
      icon: <BookOpen size={36} className="text-purple-500" />,
      title: "Premium LMS Access",
      description: "Get comprehensive access to our Learning Management System with relevant resources"
    },
    {
      icon: <Rocket size={36} className="text-purple-500" />,
      title: "Career Guidance & Mentoring",
      description: "Personalized career guidance from industry experts and regular mentoring"
    },
    {
      icon: <Users size={36} className="text-purple-500" />,
      title: "90 Slots per Batch",
      description: "Batch sizing capped at 90 seats to ensure optimal interaction and learning."
    },
    {
      icon: <Calendar size={36} className="text-purple-500" />,
      title: "Flexible Training Duration",
      description: "Flexible training durations up to 2 Months matching your availability"
    },
    {
      icon: <BrainCircuit size={36} className="text-purple-500" />,
      title: "Diverse Technology Focus",
      description: "7 Comprehensive curriculums spanning Data Science, Cloud, DevOps, IoT, and more"
    },
    {
      icon: <Shield size={36} className="text-purple-500" />,
      title: "Enterprise Practices",
      description: "Learn Agile development, architecture principles, and standard industry structures"
    }
  ];

  const activeHighlights = isOnline ? onlineHighlights : highlights;

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
            {isOnline ? 'Program Highlights' : 'AIGA Program Highlights'}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {isOnline ? 'Our intensive virtual internship program is designed to make you industry-ready in the most in-demand technologies.' : 'Our 8-week intensive internship program is designed to make you industry-ready in Generative AI and LLM Engineering'}
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
            <div className="text-3xl font-bold text-purple-600">{isOnline ? '90' : (isHybrid ? '50/40' : '90')}</div>
            <div className="text-sm text-gray-600 mt-1">{isOnline ? 'Batch Slots Available' : (isHybrid ? 'Offline/Online' : 'Training Hours')}</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600">8</div>
            <div className="text-sm text-gray-600 mt-1">Weeks Program</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600">8+</div>
            <div className="text-sm text-gray-600 mt-1">Industry Projects</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
            <div className="text-3xl font-bold text-purple-600">{isOnline ? '90 ' : '35'}</div>
            <div className="text-sm text-gray-600 mt-1">Seats / Batch</div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 md:p-10 text-center text-white shadow-xl">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              {isOnline ? 'Limited Slots Available - Enroll Now!' : 'Limited Seats Available - Enroll Now!'}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {isOnline ? 'Secure your spot today and kickstart your career with our specialized tech tracks.' : 'Only 35 seats per batch for focused mentorship. Secure your spot today with just ₹999 and kickstart your career in Generative AI.'}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={isOnline ? "https://rzp.io/rzp/ze2KGkb" : "https://rzp.io/rzp/8KPMtnd"}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-purple-600 hover:bg-gray-100 rounded-lg px-8 py-4 font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                {isOnline ? 'Enroll Now - Pay ₹799' : 'Enroll Now - Pay ₹999'}
              </a>
              <a
                href={isOnline ? "tel:7416422509" : "tel:7207775039"}
                onClick={() => window.open(isOnline ? "https://wa.me/917416422509" : "https://wa.me/917207775039", "_blank")}
                className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-600 text-white rounded-lg px-8 py-4 font-semibold transition-all duration-300"
              >
                Speak with Counselor
              </a>
            </div>
            <p className="text-sm mt-4 opacity-75">
              ✓ AICTE & APSCHE Approved Certificate ✓ 1 Year LMS Access ✓ Placement Assistance
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramHighlights;