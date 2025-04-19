import React from 'react';
import { BrainCircuit, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-1 lg:col-span-1">
            <div className="flex items-center mb-4">
              <BrainCircuit size={28} className="text-indigo-400 mr-2" />
              <span className="font-bold text-xl">Brainovision</span>
            </div>
            <p className="text-gray-400 mb-4">
              Brainovision Solutions India Pvt Ltd is a leading provider of specialized technology training and internship programs.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#program" className="text-gray-400 hover:text-white transition-colors">Program Details</a></li>
              <li><a href="#curriculum" className="text-gray-400 hover:text-white transition-colors">Curriculum</a></li>
              <li><a href="#trainers" className="text-gray-400 hover:text-white transition-colors">Trainers</a></li>
              <li><a href="#technologies" className="text-gray-400 hover:text-white transition-colors">Technologies</a></li>
              <li><a href="#register" className="text-gray-400 hover:text-white transition-colors">Register Now</a></li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={18} className="text-indigo-400 mr-2 mt-1 flex-shrink-0" />
                <span className="text-gray-400">2nd Floor, SS Chambers, Ayyappa Society, HITEC City, Madhapur, Hyderabad</span>
              </li>
              <li className="flex items-center">
                <Phone size={18} className="text-indigo-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">+91 7207775039 | +91 7416935039</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="text-indigo-400 mr-2 flex-shrink-0" />
                <span className="text-gray-400">it@brainovision.in</span>
              </li>
            </ul>
          </div>
          
          {/* Collaborations */}
          <div className="col-span-1">
            <h3 className="font-semibold text-lg mb-4">Our Collaborations</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white rounded-md p-2 flex items-center justify-center">
                <span className="text-gray-800 font-bold text-sm">AICTE</span>
              </div>
              <div className="bg-white rounded-md p-2 flex items-center justify-center">
                <span className="text-gray-800 font-bold text-sm">NASSCOM</span>
              </div>
              <div className="bg-white rounded-md p-2 flex items-center justify-center">
                <span className="text-gray-800 font-bold text-sm">NASSCOM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} Brainovision Solutions India Pvt Ltd. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <a href="#" className="text-gray-500 hover:text-white text-sm mx-2 transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-500 hover:text-white text-sm mx-2 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;