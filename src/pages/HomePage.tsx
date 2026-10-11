import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Flame, Award, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { contactConfig } from '../config/contact';

const HomePage: React.FC = () => {
  const featuredProducts = products
    .filter((p) => p.badges?.includes('Bestseller') || p.badges?.includes('Premium Blend') || p.badges?.includes("Chef's Choice"))
    .slice(0, 3);

  return (
    <div className="flex flex-col overflow-hidden">
      {/* =========================================================================
          PHASE 2 & 4: ART-DIRECTED HERO SECTION WITH 3D SACHET SHOWCASE
          ========================================================================= */}
      <section className="relative min-h-[620px] lg:min-h-[720px] bg-brand-forest overflow-hidden flex items-center">
        {/* Ambient Dark Emerald Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-forest via-brand-forest/95 to-transparent z-10 lg:w-3/5 pointer-events-none" />

        {/* Hero Product Visual Stage (Desktop & Mobile) */}
        <div className="absolute inset-0 z-0">
          <picture>
            <source srcSet="/assets/brand/hero-banner.jpg" type="image/jpeg" />
            <img
              src="/assets/brand/hero-banner.jpg"
              alt="RUCHI RICH Fresh & Active Spice Pouch with whole spices and warm studio lighting"
              className="w-full h-full object-cover object-right-bottom lg:object-right opacity-90 lg:opacity-100 transform scale-100 lg:scale-105 transition-transform duration-1000"
            />
          </picture>
          {/* Subtle vignette overlay on mobile to ensure 100% headline legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-brand-forest via-brand-forest/80 to-transparent lg:hidden" />
        </div>

        {/* Hero Content Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-16 sm:py-24 lg:py-32 w-full">
          <div className="lg:w-7/12 max-w-2xl">
            {/* Pill Badge */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-emerald/40 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-6 backdrop-blur-md"
            >
              <Sparkles className="w-4 h-4 text-brand-gold" />
              <span>Ramraj Oil Industries • Fresh & Active</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-ivory leading-[1.18] tracking-tight"
            >
              The Royal Aroma of <br />
              <span className="text-brand-gold underline decoration-brand-gold/40 decoration-wavy decoration-1">
                Authentic Spices
              </span>
            </motion.h1>

            {/* Supporting Copy - 16px minimum */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-base sm:text-lg lg:text-xl text-brand-ivory/90 leading-relaxed font-light"
            >
              Experience <strong className="text-white font-semibold">RUCHI RICH</strong>: meticulously ground pure and blended spices from Andhra Pradesh.
              Engineered to preserve natural volatile oils, rich colors, and unforgettable kitchen fragrances.
            </motion.p>

            {/* CTA Buttons - 16px minimum */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="mt-8 sm:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
            >
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base bg-brand-gold text-brand-forest hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-102 group active:scale-98"
              >
                <span>Explore Spice Catalogue</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href={`https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
                  'Hello RUCHI RICH Team, I would like to enquire about catalogue availability and bulk pricing.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-bold text-base bg-white/10 hover:bg-white/20 text-brand-ivory border border-white/20 backdrop-blur-md transition-all duration-200 active:scale-98"
              >
                <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" />
                <span>WhatsApp Trade Inquiry</span>
              </a>
            </motion.div>

            {/* Quick Micro-Trust Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mt-10 pt-6 border-t border-brand-ivory/20 grid grid-cols-3 gap-4 text-brand-ivory/90"
            >
              <div>
                <span className="block font-bold text-brand-gold font-serif text-base sm:text-lg">9 Blends</span>
                <span className="text-xs sm:text-sm text-brand-ivory/75 font-light">Pure & Masalas</span>
              </div>
              <div>
                <span className="block font-bold text-brand-gold font-serif text-base sm:text-lg">Stone Milled</span>
                <span className="text-xs sm:text-sm text-brand-ivory/75 font-light">Active Oils Retained</span>
              </div>
              <div>
                <span className="block font-bold text-brand-gold font-serif text-base sm:text-lg">Direct WhatsApp</span>
                <span className="text-xs sm:text-sm text-brand-ivory/75 font-light">Seamless Quotations</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY CREDENTIALS STRIP - Upgraded Typography
          ========================================================================= */}
      <section className="bg-brand-emerald text-brand-ivory py-7 border-y border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left">
            <div className="flex flex-col md:flex-row items-center gap-3.5">
              <ShieldCheck className="w-7 h-7 text-brand-gold flex-shrink-0" />
              <div>
                <div className="font-bold text-base sm:text-lg">Purity Guaranteed</div>
                <div className="text-sm text-brand-ivory/80 font-light">Zero artificial colors</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3.5">
              <Flame className="w-7 h-7 text-brand-gold flex-shrink-0" />
              <div>
                <div className="font-bold text-base sm:text-lg">Fresh & Active</div>
                <div className="text-sm text-brand-ivory/80 font-light">High essential oil content</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3.5">
              <Award className="w-7 h-7 text-brand-gold flex-shrink-0" />
              <div>
                <div className="font-bold text-base sm:text-lg">Ramraj Oil Industries</div>
                <div className="text-sm text-brand-ivory/80 font-light">ALEAP Estate, Surampalli</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-3.5">
              <MessageCircle className="w-7 h-7 text-[#25D366] flex-shrink-0" />
              <div>
                <div className="font-bold text-base sm:text-lg">Direct Ordering</div>
                <div className="text-sm text-brand-ivory/80 font-light">WhatsApp quote handoff</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PRODUCTS SHOWCASE - Simplified Discovery Cards (Phase 3)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
            <div>
              <div className="text-xs sm:text-sm uppercase tracking-widest text-brand-emerald font-bold font-serif mb-2">
                Curated Selection
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-charcoal">
                Featured Spices & Masalas
              </h2>
              <div className="mt-3 w-20 h-1 bg-brand-gold rounded-full" />
            </div>
            <Link
              to="/products"
              className="mt-4 md:mt-0 inline-flex items-center text-base font-bold text-brand-emerald hover:text-brand-forest transition-colors group"
            >
              <span>View All 9 Spices</span>
              <ChevronRight className="w-5 h-5 ml-1 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Clean 3-Column Simplified Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {featuredProducts.map((product, idx) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          {/* Quick Category Jump Bar */}
          <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white border border-brand-charcoal/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal">
                Looking for pure single-origin powders or crafted curry blends?
              </h3>
              <p className="text-base text-brand-charcoal/75 mt-2 leading-relaxed font-light">
                From essential turmeric and coriander to royal biryani and garam masalas.
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-4 bg-brand-emerald text-white font-bold text-base rounded-xl hover:bg-brand-forest transition-colors shadow-md flex-shrink-0"
            >
              <span>Explore Complete Range</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BRAND STORY & HERITAGE SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-brand-forest text-brand-ivory relative overflow-hidden">
        {/* Subtle decorative circles */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-brand-emerald/20 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Visual Column */}
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-brand-gold/30 bg-brand-emerald/10 p-6 sm:p-8 flex items-center justify-center">
                <img
                  src="/assets/brand/hero-banner.jpg"
                  alt="Ramraj Oil Industries RUCHI RICH spices packaging presentation"
                  className="w-full h-auto object-cover rounded-2xl shadow-lg"
                />
                <div className="absolute bottom-10 left-10 right-10 bg-brand-forest/95 backdrop-blur-md p-5 rounded-2xl border border-brand-gold/40 text-center shadow-lg">
                  <span className="text-xs sm:text-sm text-brand-gold font-bold uppercase tracking-wider block font-serif">
                    Ramraj Oil Industries
                  </span>
                  <span className="text-xs sm:text-sm text-brand-ivory/85 mt-1 block">
                    ALEAP Industrial Estate, Surampalli, Andhra Pradesh
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column - Elevated Typography */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 text-brand-gold text-xs sm:text-sm font-bold uppercase tracking-wider">
                Our Heritage & Mission
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-ivory leading-snug">
                Preserving the Sacred Essence of Indian Kitchens
              </h2>
              <p className="text-base sm:text-lg text-brand-ivory/85 leading-relaxed font-light">
                At <strong className="text-white font-semibold">Ramraj Oil Industries</strong>, spices are more than cooking ingredients—they are the
                cornerstone of wellness, hospitality, and generational memory. Under our flagship brand,{' '}
                <strong className="text-brand-gold">RUCHI RICH</strong>, we bring an uncompromising dedication to purity.
              </p>
              <p className="text-base sm:text-lg text-brand-ivory/85 leading-relaxed font-light">
                Our spices are cleaned, processed, and ground using modern hygienic methods designed to prevent oil loss
                and overheating. The result is pure, vibrant, and genuinely active spice powders that transform everyday
                meals into feast-worthy experiences.
              </p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/about"
                  className="inline-flex items-center px-7 py-3.5 rounded-xl bg-brand-gold text-brand-forest font-bold text-base hover:bg-yellow-400 transition-colors shadow-md"
                >
                  <span>Learn More About Us</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-colors"
                >
                  <span>Locate Manufacturing Facility</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ORDERING VIA WHATSAPP BANNER
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-brand-ivory border-t border-brand-charcoal/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-to-r from-brand-forest to-brand-emerald text-brand-ivory p-8 sm:p-14 rounded-3xl shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl mx-auto">
              <span className="inline-block p-3.5 rounded-2xl bg-[#25D366]/20 text-[#25D366] mb-4">
                <MessageCircle className="w-8 h-8" />
              </span>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-brand-ivory mb-3">
                Seamless WhatsApp Quotations & Orders
              </h2>
              <p className="text-base sm:text-lg text-brand-ivory/85 mb-8 leading-relaxed font-light">
                Explore our spice catalogue, select your desired package variants, and hand off your order directly to our sales representatives
                on WhatsApp with a single click. Available for households, caterers, and trade distributors.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-forest font-bold text-base rounded-xl hover:bg-yellow-400 transition-colors shadow-lg"
                >
                  <span>Start Selection Now</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <a
                  href={`https://wa.me/${contactConfig.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base rounded-xl transition-colors shadow-lg"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  <span>Chat With Our Team</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
