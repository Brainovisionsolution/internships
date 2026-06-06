import { useState } from 'react';
import { ChevronDown, Target, Trophy, IndianRupee, Calendar, Award, Users, Globe, Cpu, Phone, Mail, MessageCircle } from 'lucide-react';

const faqsLeft = [
  {
    q: 'What is the Project Building with Internship Program?',
    a: 'It is an AICTE-associated initiative where students build SDG-based Mini or Major Projects while gaining internship experience. The program includes technology training, industry mentorship, GitHub portfolio development, and participation in Project Expo with a 50,000 cash prize pool.',
  },
  {
    q: 'Who is eligible to apply?',
    a: 'Students from all academic streams and disciplines — B.Tech, BCA, MCA, MBA, BSc, MSc, and other UG/PG programs — are eligible. Both engineering and non-engineering students can participate.',
  },
  {
    q: 'What is the fee for the program?',
    a: 'The program fee is ₹999 per student for both 2-week (Mini Project) and 4-week (Major Project) tracks. This includes training, mentorship, internship certificate, project completion certificate, and Project Expo participation.',
  },
  {
    q: 'What certificates will I receive?',
    a: 'Upon successful completion, you receive: 1) Project Completion Certificate, 2) AICTE Internship Certificate, 3) Technology Training Certificate, 4) Project Expo Participation Certificate, and 5) Merit Certificate for winners.',
  },
  {
    q: 'What are SDG-based projects?',
    a: 'Projects aligned with UN Sustainable Development Goals (SDGs) like Quality Education, Good Health & Well-being, Clean Water & Sanitation, Affordable & Clean Energy, Climate Action, Smart Agriculture, and Healthcare Technologies. These address real-world societal and environmental challenges.',
  },
  {
    q: 'What technologies will I learn?',
    a: 'You will work with emerging technologies including Artificial Intelligence (AI), Generative AI, Prompt Engineering, GitHub Copilot, Google AI Studio, Antigravity, Codex, and other AI development tools.',
  },
];

const faqsRight = [
  {
    q: 'What is the Project Expo and cash prize?',
    a: 'Project Expo is a showcase event where students present their SDG-based projects before industry experts. Top projects compete for a 50,000 cash prize pool with awards and recognition for winners.',
  },
  {
    q: 'Can I participate offline?',
    a: 'Yes! Institutions can host the program in offline mode on campus. Interested institutions should submit the collaboration request form. Our team will reach out within 48 hours.',
  },
  {
    q: 'Will I get help with my resume and portfolio?',
    a: 'Absolutely. The program includes GitHub portfolio development, LinkedIn profile optimization, resume building support, and technical documentation assistance to make you placement-ready.',
  },
  {
    q: 'How does this help with placements?',
    a: 'You gain hands-on experience with SDG-aligned projects, emerging technologies, and industry mentorship. The AICTE-approved certificates, project portfolio, and Project Expo recognition significantly strengthen your profile for placements and higher education.',
  },
  {
    q: 'What is the program structure?',
    a: 'Week 1: Innovation & Technology Training, Project Planning, Architecture Design. Week 2: Project Building, Testing, GitHub Portfolio, Resume Building, Project Expo preparation. For 4-week track, additional project development and advanced training.',
  },
  {
    q: 'How do I register?',
    a: 'Click the "Register Now" button on this page. For college collaborations, use the collaboration request form to express interest in offline mode.',
  },
];

const quickLinks = [
  { icon: IndianRupee, label: 'Fee', value: '₹999 only' },
  { icon: Calendar, label: 'Duration', value: '2 or 4 Weeks' },
  { icon: Award, label: 'Certificates', value: '5+ Certifications' },
  { icon: Trophy, label: 'Prize Pool', value: '50,000' },
  { icon: Target, label: 'SDG Domains', value: '10+ Domains' },
  { icon: Cpu, label: 'Technologies', value: 'AI, GenAI' },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <span className="font-semibold text-gray-800 text-sm md:text-base pr-4 leading-relaxed">
          {q}
        </span>
        <ChevronDown 
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`} 
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 text-gray-500 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const [openLeftIndex, setOpenLeftIndex] = useState<number | null>(0);
  const [openRightIndex, setOpenRightIndex] = useState<number | null>(null);

  const toggleLeftFAQ = (index: number) => {
    setOpenLeftIndex(openLeftIndex === index ? null : index);
  };

  const toggleRightFAQ = (index: number) => {
    setOpenRightIndex(openRightIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-gradient-to-b from-gray-50 to-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 rounded-full px-4 py-1.5 mb-4">
            <MessageCircle className="w-4 h-4" />
            <span className="text-xs font-semibold uppercase tracking-wider">FAQ</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            Frequently Asked{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
              Questions
            </span>
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-2xl mx-auto">
            Everything you need to know about the Project Building with Internship Program.
            Still have questions? Contact our support team.
          </p>
        </div>

        {/* Quick Stats Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12 md:mb-16">
          {quickLinks.map(({ icon: Icon, label, value }) => (
            <div 
              key={label} 
              className="bg-white rounded-xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-default"
            >
              <Icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-500 mx-auto mb-2" />
              <p className="text-gray-500 text-xs uppercase tracking-wide">{label}</p>
              <p className="text-gray-900 font-bold text-sm md:text-base mt-1">{value}</p>
            </div>
          ))}
        </div>

        {/* Two Column FAQ Layout */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
          {/* Left Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-7 bg-gradient-to-b from-blue-600 to-cyan-500 rounded-full"></div>
              <h3 className="text-gray-800 font-bold text-base md:text-lg">General Information</h3>
            </div>
            <div className="space-y-4">
              {faqsLeft.map((faq, idx) => (
                <FAQItem
                  key={faq.q}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openLeftIndex === idx}
                  onToggle={() => toggleLeftFAQ(idx)}
                />
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-1 h-7 bg-gradient-to-b from-emerald-600 to-teal-500 rounded-full"></div>
              <h3 className="text-gray-800 font-bold text-base md:text-lg">Program & Benefits</h3>
            </div>
            <div className="space-y-4">
              {faqsRight.map((faq, idx) => (
                <FAQItem
                  key={faq.q}
                  q={faq.q}
                  a={faq.a}
                  isOpen={openRightIndex === idx}
                  onToggle={() => toggleRightFAQ(idx)}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Still Have Questions Banner */}
        <div className="mt-12 md:mt-16 bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 md:p-8 text-center border border-blue-100">
          <h3 className="font-bold text-gray-800 text-lg md:text-xl mb-3">Still have questions?</h3>
          <p className="text-gray-500 text-sm md:text-base mb-6">
            Can't find the answer you're looking for? Reach out to our team.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:internships@brainovision.in"
              className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors"
            >
              <Mail className="w-4 h-4" />
              internships@brainovision.in
            </a>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <a
              href="tel:+917416422509"
              className="inline-flex items-center gap-2 text-blue-600 text-sm font-semibold hover:text-blue-700 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91-7416422509
            </a>
            <span className="text-gray-300 hidden sm:inline">•</span>
            <a
              href="https://pages.razorpay.com/pl_SnwaP0FLs69Uz1/view"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-md"
            >
              Register Now — ₹999
              <ChevronDown className="w-4 h-4 -rotate-90" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}