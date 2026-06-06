import { GraduationCap, Mail, Phone, MapPin, Facebook, Linkedin, Youtube, Twitter, Target, Award, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">
          
          {/* Brand & Contact */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl text-white">
                Brain<span className="text-cyan-400">Vision</span>
              </span>
            </div>
            <p className="text-sm text-gray-500 mb-4 leading-relaxed">
              AICTE-approved Project Building with Internship Program — SDG-based Mini & Major Projects.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <a href="mailto:internships@brainovision.in" className="hover:text-white">internships@brainovision.in</a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <div>
                  <a href="tel:+917416422509" className="hover:text-white">+91-7416422509</a>
                  <span className="mx-1">/</span>
                  <a href="tel:+917416935039" className="hover:text-white">+91-7416935039</a>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span className="text-sm">2nd Floor, Madhapur, Hyderabad - 500081</span>
              </div>
            </div>
            <div className="flex gap-3 mt-4">
              <a href="https://www.fb.com/brainovisionsolutions" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 hover:text-cyan-400 transition-all">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#programs" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  Mini Project Track (2 Weeks) — ₹999
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <Target className="w-3.5 h-3.5 text-cyan-400" />
                  Major Project Track (4 Weeks) — ₹999
                </a>
              </li>
              <li>
                <a href="#programs" className="hover:text-cyan-400 transition-colors flex items-center gap-2">
                  <Award className="w-3.5 h-3.5 text-cyan-400" />
                  College Collaboration (Offline Mode)
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#benefits" className="hover:text-cyan-400 transition-colors">Benefits & Certificates</a></li>
              <li><a href="#tracks" className="hover:text-cyan-400 transition-colors">SDG Project Domains</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">FAQs</a></li>
              <li><a href="https://pages.razorpay.com/pl_SnwaP0FLs69Uz1/view" className="hover:text-cyan-400 transition-colors">Register Now</a></li>
              <li><a href="https://pages.razorpay.com/pl_SnwaP0FLs69Uz1/view" className="hover:text-cyan-400 transition-colors">College Collaboration Form</a></li>
            </ul>
          </div>

          {/* CTA & Certificates */}
          <div>
            <h3 className="text-white font-semibold text-base mb-4">Get Started</h3>
            <a
              href="#register"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-lg shadow-blue-500/25 mb-5"
            >
              Register Now — ₹999
            </a>
            
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-xs text-gray-500 mb-2 font-medium">Certificates You'll Receive</p>
              <div className="space-y-1.5">
                <p className="text-xs text-gray-300">✓ Project Completion Certificate</p>
                <p className="text-xs text-gray-300">✓ AICTE Internship Certificate</p>
                <p className="text-xs text-gray-300">✓ Technology Training Certificate</p>
                <p className="text-xs text-gray-300">✓ Project Expo Participation Certificate</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500">
          <p>© 2026 Brainovision Solutions India Pvt. Ltd. All rights reserved.</p>
          <div className="flex gap-5">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Refund Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}