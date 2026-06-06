import { ArrowRight, IndianRupee, Clock, Award, Target, Calendar, CheckCircle, Phone, Mail, MapPin } from 'lucide-react';

export default function CTA() {
  return (
    <section id="register" className="relative bg-gradient-to-br from-gray-950 via-blue-950 to-cyan-950 py-16 md:py-24 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <div className="inline-flex items-center gap-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-emerald-400 text-xs font-medium">Limited Seats — Summer 2026 Batch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
            Ready to Build Your{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
              SDG Project?
            </span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
            Join 80,000+ students who built industry-ready projects, gained AICTE internship experience,
            and accelerated their careers — starting at just ₹999.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto mb-12 md:mb-16">
          {/* Mini Project Card */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 md:p-8 hover:bg-white/15 transition-all hover:-translate-y-1">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-500/20 text-blue-300 text-xs font-semibold px-3 py-1 rounded-full">Popular</span>
              <Clock className="w-5 h-5 text-blue-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Mini Project Track</h3>
            <p className="text-gray-400 text-sm mb-4">2-Week Innovation Sprint</p>
            <div className="flex items-baseline gap-1 mb-4">
              <IndianRupee className="w-5 h-5 text-green-400" />
              <span className="text-3xl font-bold text-white">999</span>
              <span className="text-gray-400">/ student</span>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                'SDG-Aligned Mini Project',
                'AICTE Internship Certificate',
                'Technology Training',
                'GitHub Portfolio Setup',
                'Project Expo Participation',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://pages.razorpay.com/pl_SnwaP0FLs69Uz1/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-all"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Major Project Card */}
          <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-sm border border-blue-500/30 rounded-2xl p-6 md:p-8 hover:scale-[1.02] transition-all">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-amber-500/20 text-amber-300 text-xs font-semibold px-3 py-1 rounded-full">Best Value</span>
              <Target className="w-5 h-5 text-amber-400" />
            </div>
            <h3 className="text-xl font-bold text-white mb-1">Major Project Track</h3>
            <p className="text-gray-400 text-sm mb-4">4-Week Deep Immersion</p>
            <div className="flex items-baseline gap-1 mb-4">
              <IndianRupee className="w-5 h-5 text-green-400" />
              <span className="text-3xl font-bold text-white">999</span>
              <span className="text-gray-400">/ student</span>
            </div>
            <ul className="space-y-2 mb-6">
              {[
                'SDG-Aligned Major Project',
                'AICTE Internship Certificate',
                'Advanced AI/GenAI Training',
                'GitHub + LinkedIn + Resume Building',
                'Project Expo + 50K Prize Opportunity',
                'Industry Expert Evaluation',
              ].map(item => (
                <li key={item} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <a
              href="https://pages.razorpay.com/pl_SnwaP0FLs69Uz1/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white py-3 rounded-xl font-semibold text-sm hover:opacity-90 transition-all"
            >
              Register Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Features Row */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mb-10 md:mb-12">
          {[
            { icon: Award, text: 'AICTE Approved Certificate' },
            { icon: Calendar, text: '2 or 4 Weeks Duration' },
            { icon: Target, text: '10+ SDG Domains' },
            { icon: Clock, text: 'Online / Offline Mode' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 rounded-xl py-3 px-4">
              <Icon className="w-4 h-4 text-cyan-400" />
              <span className="text-white text-xs sm:text-sm">{text}</span>
            </div>
          ))}
        </div>

        {/* Contact & CTA Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 max-w-4xl mx-auto pt-6 border-t border-white/10">
          <div className="flex flex-col sm:flex-row gap-4 text-center sm:text-left">
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+91-7416422509</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <Mail className="w-4 h-4 text-cyan-400" />
              <span>internships@brainovision.in</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300 text-sm">
              <MapPin className="w-4 h-4 text-cyan-400" />
              <span>Hyderabad, Telangana</span>
            </div>
          </div>
          
          <div className="flex gap-3">
            <a
              href="https://forms.gle/sm7hY5oY2rxk97Ux7"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/10 hover:bg-white/20 text-white px-5 py-2.5 rounded-full text-sm font-medium transition-all"
            >
              College Collaboration
            </a>
            <a
              href="https://pages.razorpay.com/pl_SnwaP0FLs69Uz1/view"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all flex items-center gap-2"
            >
              Apply Now <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}