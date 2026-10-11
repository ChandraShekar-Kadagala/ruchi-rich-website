import React from 'react';
import { Sparkles, MessageCircle } from 'lucide-react';
import { contactConfig } from '../../config/contact';

const AnnouncementBar: React.FC = () => {
  return (
    <aside
      aria-label="Brand Announcement"
      className="bg-brand-forest text-brand-ivory text-xs sm:text-sm py-2 px-4 border-b border-brand-emerald/30"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between text-center sm:text-left">
        <div className="flex items-center gap-2 mx-auto sm:mx-0">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold animate-pulse hidden sm:inline" />
          <p className="font-medium tracking-wide">
            <span className="text-brand-gold font-bold">RAMRAJ RUCHI RICH</span> — Fresh & Active Spices Ground to Perfection
          </p>
        </div>
        <div className="hidden md:flex items-center gap-4 text-xs">
          <a
            href={`https://wa.me/${contactConfig.whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-brand-gold hover:text-white transition-colors"
          >
            <MessageCircle className="w-3 h-3 text-[#25D366]" />
            <span>Order Assistance via WhatsApp</span>
          </a>
        </div>
      </div>
    </aside>
  );
};

export default AnnouncementBar;
