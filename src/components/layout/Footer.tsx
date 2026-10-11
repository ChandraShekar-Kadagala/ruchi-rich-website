import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Phone, Mail, ShieldCheck, Heart } from 'lucide-react';
import { contactConfig } from '../../config/contact';
import { Reveal } from '../motion';
import { staggerContainerVariants, staggerItemVariants } from '../../utils/motion';

const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-forest text-brand-ivory mt-auto border-t-2 border-brand-gold/40">
      {/* Trust & Quality Bar with Viewport Scroll Reveal */}
      <div className="border-b border-brand-emerald/40 bg-brand-forest/90 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center sm:text-left"
          >
            <motion.div variants={staggerItemVariants} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-brand-emerald/30 flex items-center justify-center text-brand-gold flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-brand-ivory">100% Pure Ingredients</h4>
                <p className="text-xs sm:text-sm text-brand-ivory/80 font-light">No artificial colors or fillers</p>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-brand-emerald/30 flex items-center justify-center text-brand-gold flex-shrink-0">
                <span className="font-serif font-black text-sm">F&A</span>
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-brand-ivory">Fresh & Active Formula</h4>
                <p className="text-xs sm:text-sm text-brand-ivory/80 font-light">Retains natural volatile oils</p>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-brand-emerald/30 flex items-center justify-center text-brand-gold flex-shrink-0">
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-brand-ivory">WhatsApp Ordering</h4>
                <p className="text-xs sm:text-sm text-brand-ivory/80 font-light">Fast quotes & direct delivery</p>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="flex flex-col sm:flex-row items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-brand-emerald/30 flex items-center justify-center text-brand-gold flex-shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-brand-ivory">ALEAP Industrial Estate</h4>
                <p className="text-xs sm:text-sm text-brand-ivory/80 font-light">Surampalli, Andhra Pradesh</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <Reveal>
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
              <p className="text-xs sm:text-sm text-brand-gold font-bold uppercase tracking-wider font-serif">
                Fresh & Active Spices
              </p>
              <p className="text-sm sm:text-base text-brand-ivory/85 leading-relaxed font-light">
                A flagship consumer spice brand of <strong className="text-white">Ramraj Oil Industries</strong>.
                Crafting premium pure spice powders and aromatic blended masalas that define the heart of authentic Indian cooking.
              </p>
            </div>

            {/* Quick Navigation - 15-16px target */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-gold mb-4 border-b border-brand-emerald/50 pb-2 font-serif">
                Explore Catalogue
              </h3>
              <ul className="space-y-3 text-sm sm:text-[15px] text-brand-ivory/85 font-medium">
                <li>
                  <Link to="/" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 duration-150">
                    Home Overview
                  </Link>
                </li>
                <li>
                  <Link to="/products" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 duration-150">
                    All Products & Blends
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 duration-150">
                    Our Brand Heritage
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 duration-150">
                    Trade Enquiries & Contact
                  </Link>
                </li>
                <li>
                  <Link to="/cart" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 duration-150">
                    View Shopping Cart
                  </Link>
                </li>
              </ul>
            </div>

            {/* Products Direct Links - 15-16px target */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-gold mb-4 border-b border-brand-emerald/50 pb-2 font-serif">
                Signature Blends
              </h3>
              <ul className="space-y-3 text-sm sm:text-[15px] text-brand-ivory/85 font-medium">
                <li>
                  <Link to="/product/turmeric-powder" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 duration-150">
                    Turmeric Powder
                  </Link>
                </li>
                <li>
                  <Link to="/product/red-chilli-powder" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 duration-150">
                    Red Chilli Powder
                  </Link>
                </li>
                <li>
                  <Link to="/product/garam-masala" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 duration-150">
                    Garam Masala
                  </Link>
                </li>
                <li>
                  <Link to="/product/biryani-masala" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 duration-150">
                    Biryani Masala
                  </Link>
                </li>
                <li>
                  <Link to="/product/sambar-powder" className="hover:text-brand-gold transition-colors inline-block hover:translate-x-1 duration-150">
                    Sambar Powder
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-widest text-brand-gold mb-4 border-b border-brand-emerald/50 pb-2 font-serif">
                Manufacturing & Enquiries
              </h3>
              <div className="space-y-3.5 text-sm sm:text-[15px] text-brand-ivory/85 font-medium">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-4 h-4 text-brand-gold flex-shrink-0 mt-1" />
                  <address className="not-italic leading-relaxed text-sm">
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
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-brand-emerald/40 hover:bg-brand-emerald text-brand-gold hover:text-white rounded-lg text-xs font-bold transition-all hover:-translate-y-0.5"
                  >
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Open in Google Maps</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Copyright & Disclaimer */}
        <div className="mt-12 pt-6 border-t border-brand-emerald/40 flex flex-col md:flex-row items-center justify-between text-xs sm:text-sm text-brand-ivory/70 gap-4">
          <p>© {currentYear} Ramraj Oil Industries — RUCHI RICH. All rights reserved.</p>
          <div className="flex items-center gap-2 text-xs">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 text-brand-red fill-brand-red" />
            <span>for authentic Indian culinary traditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
