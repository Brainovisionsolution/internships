import { Award, FileText, Medal, Rocket, Github, Linkedin, TrendingUp, UserCheck, Target, Trophy, Users, Calendar, Sparkles, Cpu } from 'lucide-react';

const benefits = [
  { icon: Award, title: 'AICTE Internship Certificate', desc: 'Official AICTE-approved internship certificate recognized by universities and employers nationwide.' },
  { icon: FileText, title: 'Project Completion Certificate', desc: 'Validate your SDG-based mini/major project with an industry-recognized completion certificate.' },
  { icon: Medal, title: 'Project Expo Participation', desc: 'Showcase your innovation at Project Expo and compete for the 50,000 cash prize pool.' },
  { icon: Rocket, title: 'Technology Training Certificate', desc: 'Master AI, GenAI, Prompt Engineering, GitHub Copilot, and emerging tech with official training.' },
  { icon: Github, title: 'GitHub Portfolio Development', desc: 'Build a professional GitHub repository showcasing your project and technical skills.' },
  { icon: Linkedin, title: 'LinkedIn Profile Enhancement', desc: 'Optimize your LinkedIn profile with project highlights and internship experience.' },
  { icon: TrendingUp, title: 'Resume Building Support', desc: 'Create an industry-ready resume with project documentation and internship credentials.' },
  { icon: UserCheck, title: 'Industry Expert Mentorship', desc: 'One-on-one guidance from industry professionals throughout project development.' },
  { icon: Target, title: 'SDG Innovation Focus', desc: 'Build solutions aligned with UN Sustainable Development Goals for real-world impact.' },
  { icon: Trophy, title: 'Cash Prize Opportunity', desc: 'Top projects win from 50,000 prize pool with industry expert evaluation and recognition.' },
  { icon: Users, title: 'Placement Readiness', desc: 'Strengthen your profile for placements, higher education, and innovation competitions.' },
  { icon: Calendar, title: 'Flexible Duration', desc: 'Choose 2-Week Mini Project or 4-Week Major Project track with online/offline options.' },
];

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-700 rounded-full px-4 py-1.5 mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">Student Benefits</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            What You{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Receive
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base">
            Everything you need to build impactful SDG projects and boost your career — all included for just ₹999.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group p-5 md:p-6 rounded-xl md:rounded-2xl border border-gray-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all duration-300 hover:shadow-md"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-3 md:mb-4 group-hover:scale-110 transition-transform shadow-md shadow-blue-500/20">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-1.5 text-sm md:text-base">{title}</h3>
              <p className="text-gray-500 text-xs md:text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        {/* Small CTA */}
        <div className="text-center mt-12 md:mt-16">
          <a
            href="https://pages.razorpay.com/pl_SnwaP0FLs69Uz1/view"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-3 rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-lg shadow-blue-500/30"
          >
            Register Now — ₹999 Only
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
          <p className="text-gray-400 text-xs mt-3">Limited seats for Summer 2026 batch</p>
        </div>
      </div>
    </section>
  );
}