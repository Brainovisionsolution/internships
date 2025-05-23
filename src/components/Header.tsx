import React, { useState, useEffect } from 'react';
import { Menu, X, BrainCircuit } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Program', href: '#program' },
    { name: 'Trainers', href: '#trainers' },
    { name: 'Technologies', href: '#technologies' },
    { name: 'About Us', href: '#about' },
  ];

  const handleModeChange = (mode: string) => {
    if (mode === 'online') {
      navigate('/online');
    } else if (mode === 'offline') {
      navigate('/');
    } else if (mode === 'hybrid') {
      navigate('/hybrid');
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <img 
              src="/logos/bovyellow.png" 
              alt="Brainovision Logo" 
              className="h-12 w-auto"
            />
          </Link>
          
          {/* Mode Selection */}
          <div className="hidden md:flex items-center space-x-2">
            <div className="bg-gray-100 rounded-lg p-1 flex space-x-1">
              <button
                onClick={() => handleModeChange('offline')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  location.pathname === '/' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Offline
              </button>
              <button
                onClick={() => handleModeChange('online')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  location.pathname === '/online' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Online
              </button>
              <button
                onClick={() => handleModeChange('hybrid')}
                className={`px-4 py-2 rounded-md transition-colors ${
                  location.pathname === '/hybrid' 
                    ? 'bg-indigo-600 text-white' 
                    : 'text-gray-700 hover:bg-gray-200'
                }`}
              >
                Hybrid
              </button>
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-200 ${
                  isScrolled ? 'text-gray-800 hover:text-indigo-600' : 'text-gray-800 hover:text-indigo-600'
                }`}
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#technologies" 
              className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200"
            >
              Register Now
            </a><a 
  href="https://techedge.brainovision.in/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200"
>
  ESTP
</a>


          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="md:hidden text-gray-800 focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="bg-gray-100 rounded-lg p-2 space-y-2">
                <button
                  onClick={() => handleModeChange('offline')}
                  className={`w-full px-4 py-2 rounded-md transition-colors ${
                    location.pathname === '/' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Offline Mode
                </button>
                <button
                  onClick={() => handleModeChange('online')}
                  className={`w-full px-4 py-2 rounded-md transition-colors ${
                    location.pathname === '/online' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Online Mode
                </button>
                <button
                  onClick={() => handleModeChange('hybrid')}
                  className={`w-full px-4 py-2 rounded-md transition-colors ${
                    location.pathname === '/hybrid' 
                      ? 'bg-indigo-600 text-white' 
                      : 'text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  Hybrid Mode
                </button>
              </div>
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="font-medium text-gray-800 hover:text-indigo-600 py-2"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#technologies" 
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 text-center"
                onClick={() => setIsOpen(false)}
              >
                Register Now
              </a>
              <a 
  href="https://techedge.brainovision.in/" 
  target="_blank" 
  rel="noopener noreferrer"
  className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md font-medium transition-colors duration-200 text-center"
  onClick={() => setIsOpen(false)}
>
  ESTP
</a>

            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
