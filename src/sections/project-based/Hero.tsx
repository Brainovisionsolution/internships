import { ArrowRight, CheckCircle, Star, Users, Award, Target, Rocket, Briefcase, Calendar, IndianRupee, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gray-950">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-72 h-72 bg-blue-800/20 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 md:pt-28 md:pb-24">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge - responsive */}
            <div className="inline-flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-full px-3 py-1.5 sm:px-4 mb-5 sm:mb-6">
              <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="text-cyan-400 text-xs sm:text-sm font-medium">
                🎓 In Association with AICTE — Summer 2026 Batch
              </span>
            </div>

            {/* Heading - responsive text sizes */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4 sm:mb-6">
              Project Building{' '}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                + Internship
              </span>{' '}
              Program
            </h1>

            {/* Description - responsive */}
            <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-6 sm:mb-8 max-w-lg">
              Build SDG-based Mini & Major Projects with industry mentorship. Gain AICTE-approved 
              internship experience, GitHub portfolio, and compete for a{' '}
              <span className="text-cyan-400 font-semibold">50,000 cash prize pool</span>.
            </p>

            {/* Quick info chips - mobile friendly */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
              <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                <IndianRupee className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-green-400" />
                <span className="text-white text-xs sm:text-sm font-medium">₹999 Only</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                <Calendar className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="text-white text-xs sm:text-sm">2 or 4 Weeks</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/5 rounded-full px-3 py-1.5 sm:px-4 sm:py-2">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400" />
                <span className="text-white text-xs sm:text-sm">SDG Focus</span>
              </div>
            </div>

            {/* CTA Buttons - stacked on mobile, row on tablet+ */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mb-8 sm:mb-10 md:mb-12">
              <a
                href="https://pages.razorpay.com/pl_SnwaP0FLs69Uz1/view"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:opacity-90 transition-all shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
              >
                Register Now — ₹999 Only
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="#programs"
                className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold text-sm sm:text-base hover:bg-white/10 transition-all"
              >
                View Program Structure
              </a>
            </div>

            {/* Stats row - scrollable horizontally on very small screens if needed, but wraps naturally */}
            <div className="flex flex-wrap gap-4 sm:gap-6">
              {[
                { icon: Users, label: 'AICTE Approved' },
                { icon: Award, label: 'Project Expo ₹50L+' },
                { icon: Star, label: 'SDG Innovation Focus' },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2 text-gray-400">
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                  <span className="text-xs sm:text-sm font-medium">{label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — stats card - hidden on mobile, visible on tablet+ */}
          <div className="hidden md:flex justify-end">
            <div className="w-full max-w-md space-y-4">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 sm:p-6 backdrop-blur-sm">
                <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4 font-medium uppercase tracking-wide">
                  Program Highlights
                </p>
                <div className="space-y-2.5 sm:space-y-3">
                  {[
                    'AICTE Internship + Project Completion Certificate',
                    'SDG-Aligned Mini / Major Project Development',
                    'AI, GenAI, GitHub Copilot, Prompt Engineering',
                    'GitHub Portfolio + LinkedIn + Resume Building',
                    '2 Weeks / 4 Weeks | Online / Offline',
                    'Project Expo with Industry Experts & Cash Prizes',
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                      <span className="text-white text-xs sm:text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-3 gap-3 sm:gap-4">
                {[
                  { value: '₹999', label: '2 or 4 Weeks', icon: Briefcase },
                  { value: '50K', label: 'Prize Pool', icon: Rocket },
                  { value: '7+', label: 'Tech Domains', icon: Target },
                ].map(s => (
                  <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3 sm:p-4 text-center backdrop-blur-sm">
                    <s.icon className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 mx-auto mb-1" />
                    <p className="text-lg sm:text-xl font-bold text-white">{s.value}</p>
                    <p className="text-gray-400 text-xs mt-1">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center backdrop-blur-sm">
                <p className="text-emerald-300 text-xs">
                  🌍 UN SDG Focus — Quality Education, Climate Action, HealthTech, Smart Agriculture
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile-only feature cards - visible only on small screens */}
        <div className="md:hidden mt-8 space-y-4">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-sm">
            <p className="text-gray-400 text-xs mb-3 font-medium uppercase tracking-wide">
              Program Highlights
            </p>
            <div className="space-y-2.5">
              {[
                'AICTE Internship + Project Completion Certificate',
                'SDG-Aligned Mini / Major Project Development',
                'AI, GenAI, GitHub Copilot, Prompt Engineering',
                'GitHub Portfolio + LinkedIn + Resume Building',
              ].map(item => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  <span className="text-white text-xs">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { value: '₹999', label: '2 or 4 Weeks', icon: Briefcase },
              { value: '50K', label: 'Prize Pool', icon: Rocket },
              { value: '7+', label: 'Tech Domains', icon: Target },
            ].map(s => (
              <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl p-3 text-center backdrop-blur-sm">
                <s.icon className="w-4 h-4 text-cyan-400 mx-auto mb-1" />
                <p className="text-base font-bold text-white">{s.value}</p>
                <p className="text-gray-400 text-xs mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-3 text-center backdrop-blur-sm">
            <p className="text-emerald-300 text-xs">
              🌍 UN SDG Focus — Quality Education, Climate Action, HealthTech, Smart Agriculture
            </p>
          </div>
        </div>
      </div>

      {/* Wave divider - responsive */}
      <div className="absolute bottom-0 left-0 right-0 w-full">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 25C840 30 960 30 1080 25C1200 20 1320 10 1380 5L1440 0V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f9fafb"/>
        </svg>
      </div>
    </section>
  );
}