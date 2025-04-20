import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppChat: React.FC = () => {
  return (
    <a
      href="https://wa.me/917207775039?text=Hi,%20I%20am%20interested%20in%20the%20Internship%20Program"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 left-8 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300 z-50"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={24} />
    </a>
  );
};

export default WhatsAppChat;