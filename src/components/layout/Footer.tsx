import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, MessageCircle, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';
import { contactConfig } from '../../config/contact';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-forest text-brand-ivory mt-auto border-t-2 border-brand-gold/40">
      {/* Trust & Quality Bar */}
      <div className="border-b border-brand-emerald/40 bg-brand-forest/90 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left">
            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-emerald/30 flex items-center justify-center text-brand-gold">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-ivory">100% Pure Ingredients</h4>
                <p className="text-xs text-brand-ivory/70">No artificial colors or fillers</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-emerald/30 flex items-center justify-center text-brand-gold">
                <span className="font-serif font-black text-sm">F&A</span>
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-ivory">Fresh & Active Formula</h4>
                <p className="text-xs text-brand-ivory/70">Retains natural volatile oils</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-emerald/30 flex items-center justify-center text-brand-gold">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-ivory">WhatsApp Ordering</h4>
                <p className="text-xs text-brand-ivory/70">Fast quotes & direct delivery</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-brand-emerald/30 flex items-center justify-center text-brand-gold">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-brand-ivory">ALEAP Industrial Estate</h4>
                <p className="text-xs text-brand-ivory/70">Surampalli, Andhra Pradesh</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="inline-block bg-white p-2.5 rounded-xl shadow-md">
              <img
                src="/assets/brand/ruchi-rich-logo.png"
                alt="RUCHI RICH Logo"
                className="h-14 w-auto object-contain"
              />
            </div>
            <p className="text-xs text-brand-gold font-bold uppercase tracking-wider font-serif">
              Fresh & Active Spices
            </p>
            <p className="text-xs text-brand-ivory/80 leading-relaxed">
              A flagship consumer spice brand of <strong className="text-white">Ramraj Oil Industries</strong>.
              Crafting premium pure spice powders and aromatic blended masalas that define the heart of authentic Indian cooking.
            </p>
          </div>

          {/* Quick Navigation */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4 border-b border-brand-emerald/50 pb-2">
              Explore Catalogue
            </h3>
            <ul className="space-y-2.5 text-xs text-brand-ivory/80">
              <li>
                <Link to="/" className="hover:text-brand-gold transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-brand-gold transition-colors">
                  All Products & Blends
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold transition-colors">
                  Our Brand Heritage
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-gold transition-colors">
                  Trade Enquiries & Contact
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-brand-gold transition-colors">
                  View Shopping Cart
                </Link>
              </li>
            </ul>
          </div>

          {/* Products Direct Links */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4 border-b border-brand-emerald/50 pb-2">
              Signature Blends
            </h3>
            <ul className="space-y-2.5 text-xs text-brand-ivory/80">
              <li>
                <Link to="/product/turmeric-powder" className="hover:text-brand-gold transition-colors">
                  Turmeric Powder
                </Link>
              </li>
              <li>
                <Link to="/product/red-chilli-powder" className="hover:text-brand-gold transition-colors">
                  Red Chilli Powder
                </Link>
              </li>
              <li>
                <Link to="/product/garam-masala" className="hover:text-brand-gold transition-colors">
                  Garam Masala
                </Link>
              </li>
              <li>
                <Link to="/product/biryani-masala" className="hover:text-brand-gold transition-colors">
                  Biryani Masala
                </Link>
              </li>
              <li>
                <Link to="/product/sambar-powder" className="hover:text-brand-gold transition-colors">
                  Sambar Powder
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-4 border-b border-brand-emerald/50 pb-2">
              Manufacturing & Enquiries
            </h3>
            <div className="space-y-3 text-xs text-brand-ivory/80">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                <address className="not-italic leading-relaxed">
                  {contactConfig.address}
                </address>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0" />
                <a
                  href={`https://wa.me/${contactConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors"
                >
                  WhatsApp: +{contactConfig.whatsappNumber}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a
                  href={`tel:${contactConfig.customerCarePhone}`}
                  className="hover:text-brand-gold transition-colors"
                >
                  Customer Care: +91 {contactConfig.customerCarePhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-gold flex-shrink-0" />
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="hover:text-brand-gold transition-colors"
                >
                  {contactConfig.email}
                </a>
              </div>

              <div className="pt-2">
                <a
                  href={contactConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-brand-emerald/40 hover:bg-brand-emerald text-brand-gold hover:text-white rounded-lg text-[11px] font-semibold transition-colors"
                >
                  <MapPin className="w-3 h-3" />
                  <span>Open in Google Maps</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & Disclaimer */}
        <div className="mt-12 pt-6 border-t border-brand-emerald/40 flex flex-col md:flex-row items-center justify-between text-xs text-brand-ivory/60 gap-4">
          <p>© {currentYear} Ramraj Oil Industries — RUCHI RICH. All rights reserved.</p>
          <div className="flex items-center gap-2 text-[11px]">
            <span>Crafted with</span>
            <Heart className="w-3 h-3 text-brand-red fill-brand-red" />
            <span>for authentic Indian culinary traditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
