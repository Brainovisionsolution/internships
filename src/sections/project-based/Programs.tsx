import { Monitor, Wifi, Building2, Clock, ArrowRight, Target, Cpu, Zap, GraduationCap, Medal, Briefcase, Sparkles } from 'lucide-react';

const programs = [
  {
    mode: 'mini',
    icon: Sparkles,
    title: 'Mini Project Track',
    subtitle: '2 Weeks | Quick Innovation Sprint',
    description: 'Build a complete SDG-aligned mini project while earning internship experience. Perfect for beginners and rapid skill development.',
    color: 'from-blue-600 to-cyan-500',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    badge: 'Most Popular',
    badgeColor: 'bg-blue-600',
    duration: '2 Weeks',
    fee: '₹999',
    features: [
      'Innovation & SDG Problem Identification',
      'AI/GenAI Technology Training',
      'Mini Project Development',
      'AICTE Internship Certificate',
      'GitHub Portfolio Setup',
      'LinkedIn Profile Optimization',
      'Resume Building Support',
      'Project Expo Participation',
    ],
    technologies: ['AI Tools', 'Prompt Engineering', 'GitHub Copilot', 'Google AI Studio'],
    prizePool: '50K Cash Prize Pool',
  },
  {
    mode: 'major',
    icon: Target,
    title: 'Major Project Track',
    subtitle: '4 Weeks | Deep Immersion Program',
    description: 'Comprehensive project development with advanced technology training. Build industry-ready major projects with full documentation.',
    color: 'from-emerald-600 to-teal-500',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    badge: 'Premium',
    badgeColor: 'bg-emerald-600',
    duration: '4 Weeks',
    fee: '₹999',
    features: [
      'Innovation & SDG Problem Identification',
      'Advanced AI/GenAI Technology Training',
      'Major Project Development',
      'AICTE Internship Certificate',
      'Architecture Design Support',
      'Technical Documentation',
      'GitHub + LinkedIn + Resume Building',
      'Project Expo Participation',
      'Industry Expert Evaluation',
      'Awards & Recognition',
    ],
    technologies: ['Generative AI', 'Antigravity', 'Codex', 'GitHub Copilot', 'AI Development Tools'],
    prizePool: '50K Cash Prize Pool',
  },
  {
    mode: 'custom',
    icon: GraduationCap,
    title: 'College Collaboration',
    subtitle: 'Offline / Campus Program',
    description: 'Institution-wide implementation with on-campus mentorship, lab sessions, and direct industry expert guidance for students.',
    color: 'from-purple-600 to-pink-500',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    badge: 'Institution',
    badgeColor: 'bg-purple-600',
    duration: '2 or 4 Weeks',
    fee: 'Custom Pricing',
    features: [
      'Campus-based Project Development',
      'Industry Expert Mentorship',
      'SDG-Aligned Project Domains',
      'Technology Training Labs',
      'Project Expo on Campus',
      'AICTE Certification for All',
      'Faculty Development Support',
      'Innovation Ecosystem Setup',
    ],
    technologies: ['Full Tech Stack', 'AI/ML', 'IoT', 'Cloud Computing', 'GenAI'],
    prizePool: 'College Level + National Expo',
  },
];

const sdgDomains = [
  'Quality Education',
  'Good Health & Well-being',
  'Clean Water & Sanitation',
  'Affordable & Clean Energy',
  'Industry & Innovation',
  'Sustainable Cities',
  'Climate Action',
  'Smart Agriculture',
  'Healthcare Technologies',
  'Digital Transformation',
];

export default function Programs() {
  return (
    <section id="programs" className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 mb-4">
            <Medal className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">AICTE Approved Program</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Project Building +{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Internship Tracks
            </span>
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm sm:text-base px-4">
            Choose your project track — build SDG-aligned solutions, earn AICTE internship certificate, 
            and compete for <span className="text-cyan-600 font-semibold">50,000 cash prize pool</span>.
          </p>
        </div>

        {/* SDG Domains Banner - New section from proposal */}
        <div className="mb-12 md:mb-16 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-2xl p-5 md:p-6 border border-emerald-100">
          <div className="flex items-center gap-2 mb-3">
            <Target className="w-5 h-5 text-emerald-600" />
            <h3 className="font-semibold text-gray-800 text-sm md:text-base">UN SDG-Aligned Project Domains</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {sdgDomains.map(domain => (
              <span
                key={domain}
                className="bg-white text-gray-700 text-xs font-medium px-3 py-1.5 rounded-full border border-emerald-200 shadow-sm"
              >
                🌍 {domain}
              </span>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {programs.map(p => {
            const Icon = p.icon;
            return (
              <div
                key={p.mode}
                className={`relative bg-white rounded-2xl md:rounded-3xl border ${p.border} shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden flex flex-col h-full`}
              >
                {/* Header */}
                <div className={`${p.bg} p-5 md:p-6 pb-4 md:pb-5`}>
                  <div className="flex items-start justify-between mb-3 md:mb-4">
                    <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-br ${p.color} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </div>
                    <span className={`${p.badgeColor} text-white text-xs font-semibold px-2.5 py-1 rounded-full`}>
                      {p.badge}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-0.5">{p.title}</h3>
                  <p className={`text-xs md:text-sm font-medium bg-clip-text text-transparent bg-gradient-to-r ${p.color}`}>
                    {p.subtitle}
                  </p>
                </div>

                {/* Body */}
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  {/* Fee & Duration Highlight */}
                  <div className="flex items-center justify-between mb-4 p-3 bg-gray-50 rounded-xl">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-xs md:text-sm font-medium text-gray-700">{p.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <span className="text-lg md:text-xl font-bold text-gray-900">{p.fee}</span>
                      {p.mode !== 'custom' && <span className="text-xs text-gray-500">/ student</span>}
                    </div>
                  </div>

                  <p className="text-gray-500 text-xs md:text-sm leading-relaxed mb-4 md:mb-5">{p.description}</p>

                  {/* Technologies */}
                  <div className="mb-4 md:mb-5">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 flex items-center gap-1">
                      <Cpu className="w-3 h-3" /> Technologies Covered
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {p.technologies.map(tech => (
                        <span key={tech} className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-0.5 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Prize Pool Badge */}
                  {p.prizePool && (
                    <div className="mb-4 md:mb-5 bg-amber-50 border border-amber-200 rounded-lg p-2 text-center">
                      <p className="text-amber-700 text-xs font-semibold flex items-center justify-center gap-1">
                        <Medal className="w-3.5 h-3.5" /> {p.prizePool}
                      </p>
                    </div>
                  )}

                  {/* Features List */}
                  <ul className="space-y-1.5 mb-5 md:mb-6">
                    {p.features.slice(0, p.mode === 'major' ? 8 : 6).map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                        <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>{f}</span>
                      </li>
                    ))}
                    {p.mode === 'major' && (
                      <li className="flex items-start gap-2 text-xs md:text-sm text-gray-600">
                        <Zap className="w-3 h-3 md:w-3.5 md:h-3.5 text-cyan-500 flex-shrink-0 mt-0.5" />
                        <span>+ Project Expo Participation Certificate</span>
                      </li>
                    )}
                  </ul>

                  {/* CTA Button */}
                  <a
                    href="https://pages.razorpay.com/pl_SnwaP0FLs69Uz1/view"
                    className={`mt-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r ${p.color} text-white py-2.5 md:py-3 px-4 md:px-6 rounded-xl font-semibold text-sm hover:opacity-90 transition-all hover:shadow-md`}
                  >
                    {p.mode === 'custom' ? 'Request Collaboration' : 'Register Now — ₹999'}
                    <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Info Banner */}
        <div className="mt-10 md:mt-12 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-4 md:p-5 border border-blue-100 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 text-sm">
                <span className="font-semibold">Offline Mode Available:</span> 
              </span>
            </div>
            <a
              href="https://forms.gle/sm7hY5oY2rxk97Ux7"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 text-sm font-semibold hover:text-blue-700 flex items-center gap-1"
            >
              Student enquiry request <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}