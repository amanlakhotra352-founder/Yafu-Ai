
import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactButtons: React.FC = () => {
  const whatsappNumber = "918082127115";
  const whatsappMessage = "Hi Yafu AI Team, I'm interested in your intelligent automation solutions. Can we discuss further?";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

  return (
    <div className="fixed bottom-6 right-4 sm:right-6 z-[60] flex flex-col gap-3 items-end">
      {/* WhatsApp Floating Button */}
      <a 
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-2xl hover:scale-110 transition-all active:scale-95 flex items-center justify-center group shadow-green-500/20"
        aria-label="Chat with Yafu AI on WhatsApp"
        title="WhatsApp Us"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7" />
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap text-sm sm:text-base">
          WhatsApp us
        </span>
      </a>
    </div>
  );
};

export default ContactButtons;
