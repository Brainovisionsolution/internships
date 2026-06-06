import { useState, useEffect } from 'react';
import { Menu, X, GraduationCap } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const links = [
    { label: 'Programs', href: '#programs' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'Tracks', href: '#tracks' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-white" />
            </div>
            <span className={`font-bold text-lg transition-colors ${scrolled ? 'text-gray-900' : 'text-white'}`}>
              Brain<span className="text-cyan-400">Vision</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {links.map(l => (
              <a
                key={l.label}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${scrolled ? 'text-gray-700' : 'text-white/90'}`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity shadow-lg"
            >
              Apply Now
            </a>
          </div>

          <button className="md:hidden" onClick={() => setOpen(!open)}>
            {open
              ? <X className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
              : <Menu className={`w-6 h-6 ${scrolled ? 'text-gray-900' : 'text-white'}`} />
            }
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 flex flex-col gap-4">
            {links.map(l => (
              <a key={l.label} href={l.href} className="text-gray-700 font-medium" onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            <a
              href="#register"
              onClick={() => setOpen(false)}
              className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-5 py-2 rounded-full text-sm font-semibold text-center"
            >
              Apply Now
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
