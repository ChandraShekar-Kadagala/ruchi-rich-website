import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, MessageCircle, Phone, Mail, ExternalLink, Send, Sparkles } from 'lucide-react';
import { contactConfig } from '../config/contact';
import { Reveal } from '../components/motion';
import { brandSpring } from '../utils/motion';

const ContactPage: React.FC = () => {
  const [inquiryType, setInquiryType] = useState('Product Stock & Availability');
  const [customNote, setCustomNote] = useState('');

  const handleLaunchWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Hello RUCHI RICH Team,\n\nI have an enquiry regarding *${inquiryType}*.\n\nDetails: ${customNote || 'Please share product catalogue, quotation, and ordering process.'}\n\nThank you!`;
    const link = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(link, '_blank');
  };

  return (
    <div className="py-12 sm:py-20 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <Reveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Customer & Trade Desk</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-charcoal">
              Get In Touch
            </h1>
            <div className="mt-3 w-20 h-1 bg-brand-gold mx-auto rounded-full" />
            <p className="mt-4 text-base sm:text-lg text-brand-charcoal/75 font-normal leading-relaxed">
              Have questions about our pure powders, blended masalas, bulk order quotations, or trade distribution?
              Connect directly with our team at RAMRAJ RUCHI RICH.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
          {/* Contact Details Card (5 cols) */}
          <Reveal direction="left" className="lg:col-span-5 h-full">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-brand-forest/10 flex flex-col justify-between h-full">
              <div>
                <h2 className="text-2xl font-serif font-bold text-brand-charcoal mb-6 border-b border-brand-charcoal/10 pb-4">
                  Factory & Office Information
                </h2>

                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-2xl bg-brand-emerald/10 flex items-center justify-center text-brand-emerald flex-shrink-0 mt-0.5 group-hover:bg-brand-emerald group-hover:text-white transition-colors">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-charcoal/60">
                        Manufacturing Facility
                      </h3>
                      <address className="not-italic text-sm sm:text-base text-brand-charcoal font-medium leading-relaxed mt-1">
                        {contactConfig.address}
                      </address>
                      <a
                        href={contactConfig.mapUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-brand-emerald font-bold hover:underline mt-2"
                      >
                        <span>Open on Google Maps</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>

                  {/* WhatsApp */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-2xl bg-[#25D366]/10 flex items-center justify-center text-[#25D366] flex-shrink-0 mt-0.5 group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                      <MessageCircle className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-charcoal/60">
                        Official WhatsApp Desk
                      </h3>
                      <a
                        href={`https://wa.me/${contactConfig.whatsappNumber}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-base sm:text-lg text-brand-charcoal font-bold hover:text-[#25D366] transition-colors mt-1 block"
                      >
                        {contactConfig.phoneDisplay}
                      </a>
                      <span className="text-xs text-brand-charcoal/60 block mt-0.5">
                        Fastest response for retail & wholesale quotations
                      </span>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-2xl bg-brand-emerald/10 flex items-center justify-center text-brand-emerald flex-shrink-0 mt-0.5 group-hover:bg-brand-emerald group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-charcoal/60">
                        Customer Care Desk
                      </h3>
                      <a
                        href={`tel:${contactConfig.phoneNumber}`}
                        className="text-base sm:text-lg text-brand-charcoal font-bold hover:text-brand-emerald transition-colors mt-1 block"
                      >
                        {contactConfig.phoneDisplay}
                      </a>
                      <span className="text-xs text-brand-charcoal/60 block mt-0.5">
                        Direct telephone support
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-11 h-11 rounded-2xl bg-brand-emerald/10 flex items-center justify-center text-brand-emerald flex-shrink-0 mt-0.5 group-hover:bg-brand-emerald group-hover:text-white transition-colors">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-charcoal/60">
                        Official Email
                      </h3>
                      <a
                        href={`mailto:${contactConfig.email}`}
                        className="text-base text-brand-charcoal font-bold hover:text-brand-emerald transition-colors mt-1 block"
                      >
                        {contactConfig.email}
                      </a>
                      <span className="text-xs text-brand-charcoal/60 block mt-0.5">
                        Verified commercial correspondence
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Google Maps Embed Banner */}
              <div className="mt-8 pt-6 border-t border-brand-charcoal/10">
                <a
                  href={contactConfig.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 bg-brand-ivory hover:bg-brand-emerald/10 border border-brand-charcoal/15 rounded-xl text-sm font-bold text-brand-charcoal flex items-center justify-center gap-2 transition-all hover:-translate-y-0.5"
                >
                  <MapPin className="w-4 h-4 text-brand-emerald" />
                  <span>Navigate to Surampalli Facility</span>
                </a>
              </div>
            </div>
          </Reveal>

          {/* Direct WhatsApp Interactive Inquiry Builder (7 cols) */}
          <Reveal direction="right" className="lg:col-span-7 h-full">
            <div className="bg-brand-forest text-brand-ivory p-8 sm:p-10 rounded-3xl shadow-xl flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="p-2 rounded-xl bg-[#25D366]/20 text-[#25D366]">
                    <MessageCircle className="w-5 h-5" />
                  </span>
                  <span className="text-xs uppercase tracking-widest text-brand-gold font-bold font-serif">
                    Interactive WhatsApp Desk
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-serif font-bold text-brand-ivory mb-2">
                  Send an Instant Inquiry
                </h2>
                <p className="text-sm sm:text-base text-brand-ivory/85 leading-relaxed font-light mb-6">
                  Select your inquiry objective below. We will format a clean WhatsApp message and connect you directly
                  with our sales representatives without waiting for email replies.
                </p>

                <form onSubmit={handleLaunchWhatsApp} className="space-y-5">
                  <div>
                    <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-gold block mb-2">
                      Inquiry Category
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                      {[
                        'Product Stock & Availability',
                        'Retail & Trade Distribution',
                        'Bulk Catering Orders'
                      ].map((type) => {
                        const isSelected = inquiryType === type;
                        return (
                          <button
                            key={type}
                            type="button"
                            onClick={() => setInquiryType(type)}
                            className={`relative p-3.5 rounded-xl text-xs sm:text-sm font-bold text-left transition-all border ${
                              isSelected
                                ? 'bg-brand-gold text-brand-forest border-brand-gold shadow-md'
                                : 'bg-white/10 text-brand-ivory/80 border-white/15 hover:bg-white/15'
                            }`}
                          >
                            {isSelected && (
                              <motion.div
                                layoutId="activeInquiryType"
                                className="absolute inset-0 bg-brand-gold rounded-xl -z-0"
                                transition={brandSpring}
                              />
                            )}
                            <span className="relative z-10">{type}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="text-xs sm:text-sm font-bold uppercase tracking-wider text-brand-gold block mb-2">
                      Message / Product Specifics (Optional)
                    </label>
                    <textarea
                      rows={4}
                      value={customNote}
                      onChange={(e) => setCustomNote(e.target.value)}
                      placeholder="Specify particular spices, package sizes, or your delivery location..."
                      className="w-full p-4 rounded-xl bg-white/10 border border-white/20 text-sm sm:text-base text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-brand-gold"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 px-6 rounded-xl font-bold text-base bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 group hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                    <span>Open Inquiry on WhatsApp</span>
                  </button>
                </form>
              </div>

              <div className="mt-8 pt-6 border-t border-white/15 flex items-center justify-between text-xs text-white/70">
                <span>RAMRAJ RUCHI RICH</span>
                <span>Mon – Sat, 9:00 AM – 6:00 PM IST</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
