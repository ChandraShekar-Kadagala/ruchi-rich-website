import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Flame, ChevronRight, MapPin, CheckCircle2 } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { contactConfig } from '../config/contact';
import {
  BrandIntro,
  SpiceDustParticles,
  ProductConstellationHero,
  SpiceIngredientShowcase,
  Reveal,
} from '../components/motion';
import {
  brandEase,
  staggerContainerVariants,
  staggerItemVariants,
  goldDividerVariants,
} from '../utils/motion';

const HomePage: React.FC = () => {
  const shouldReduceMotion = useReducedMotion();
  const featuredProducts = products
    .filter((p) => p.badges?.includes('Bestseller') || p.badges?.includes('Premium Blend') || p.badges?.includes("Chef's Choice"))
    .slice(0, 3);

  return (
    <div className="flex flex-col overflow-hidden relative">
      {/* =========================================================================
          PHASE B: FIRST-VISIT BRAND INTRODUCTION
          Elegant, non-blocking 1.1s reveal cached in sessionStorage
          ========================================================================= */}
      <BrandIntro />

      {/* =========================================================================
          PHASE C: CINEMATIC HERO SECTION WITH 3-LAYER COMPOSITION
          Layer A: Deep emerald background & subdued atmospheric backdrop
          Layer B: Dominant foreground 3D product stage with illuminated pedestal
          Layer C: Clear brand message, concise copy, and high-visibility CTAs
          ========================================================================= */}
      <section className="relative min-h-[660px] lg:min-h-[760px] bg-gradient-to-br from-[#051C10] via-[#0A331C] to-[#04150B] overflow-x-clip overflow-y-hidden flex items-center">
        {/* Subtle Ambient Golden Spice Specks */}
        <SpiceDustParticles />

        {/* Ambient Radial Spotlight and Atmospheric Breathing Glow in Background */}
        <motion.div
          animate={
            !shouldReduceMotion
              ? {
                  opacity: [0.55, 0.85, 0.55],
                  scale: [0.98, 1.02, 0.98],
                }
              : undefined
          }
          transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute inset-0 bg-radial from-brand-emerald/30 via-brand-forest/60 to-transparent pointer-events-none -z-10"
          aria-hidden="true"
        />

        {/* LAYER A: Atmospheric Emerald & Gold Studio Lighting (Zero competing background packet) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" aria-hidden="true">
          {/* Deep dark emerald gradient scrim guaranteeing text contrast */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#02140B] via-[#062916] to-[#010D07]" />
          {/* Soft directional studio gold spotlight behind the right constellation zone */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[650px] h-[650px] rounded-full bg-radial from-brand-gold/20 via-brand-emerald/15 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute left-10 bottom-10 w-[450px] h-[450px] rounded-full bg-radial from-brand-emerald/25 to-transparent blur-3xl opacity-60 pointer-events-none" />
          {/* Ethereal diagonal golden light shafts */}
          <div className="absolute -top-24 right-1/4 w-40 h-[140%] bg-gradient-to-b from-brand-gold/15 via-brand-gold/5 to-transparent rotate-[28deg] blur-3xl opacity-50 pointer-events-none" />
        </div>

        {/* Hero Content Grid (Layer C Brand Message & Layer B 9-Product 3D Constellation) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-8 sm:py-14 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
            {/* Left Content Column (5 cols on lg, 5 cols on xl): Layer C Brand Message */}
            <div className="lg:col-span-5 max-w-xl text-left z-20">
              {/* Eyebrow Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: brandEase }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-emerald/40 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-brand-gold animate-pulse flex-shrink-0" />
                <span>RUCHI RICH • BY RAMRAJ OIL INDUSTRIES</span>
              </motion.div>

              {/* Headline with Sequenced Line Reveals */}
              <div className="overflow-hidden mb-5">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: brandEase }}
                  className="text-4xl sm:text-5xl lg:text-[54px] font-serif font-bold text-brand-ivory leading-[1.16] tracking-tight"
                >
                  The Royal Aroma of <br />
                  <span className="text-brand-gold relative inline-block">
                    Authentic Spices
                    <motion.span
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, delay: 0.45, ease: brandEase }}
                      className="absolute bottom-1 left-0 right-0 h-1 bg-brand-gold/60 origin-left rounded-full"
                    />
                  </span>
                </motion.h1>
              </div>

              {/* Supporting Copy - Concise, verified, minimum 16px font */}
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.28, ease: brandEase }}
                className="text-base sm:text-lg text-brand-ivory/90 leading-relaxed font-light"
              >
                Discover authentic Indian spices, carefully prepared to bring vibrant colour, rich aroma and flavour to everyday cooking.
              </motion.p>

              {/* Mobile 9-Product Showcase (Displayed responsively on screens < 1024px) */}
              <div className="my-4 lg:hidden flex justify-center w-full overflow-visible">
                <ProductConstellationHero />
              </div>

              {/* CTA Buttons with Refined Micro-Interactions */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.42, ease: brandEase }}
                className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4"
              >
                <Link
                  to="/products"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-base bg-brand-gold text-brand-forest hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-2xl hover:-translate-y-0.5 group active:translate-y-0"
                >
                  <span>Explore Spice Catalogue</span>
                  <ArrowRight className="w-5 h-5 ml-2 transform group-hover:translate-x-1.5 transition-transform" />
                </Link>

                <a
                  href={`https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
                    'Hello RUCHI RICH Team, I would like to enquire about spice catalogue availability and ordering.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-bold text-base bg-white/10 hover:bg-white/20 text-brand-ivory border border-white/20 backdrop-blur-md transition-all duration-200 active:scale-[0.98] hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-5 h-5 mr-2 text-[#25D366]" />
                  <span>WhatsApp Trade Inquiry</span>
                </a>
              </motion.div>

              {/* Staggered Micro-Trust Indicator Strip */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.55, ease: brandEase }}
                className="mt-8 pt-6 border-t border-brand-ivory/20 grid grid-cols-3 gap-4 text-brand-ivory/90"
              >
                <div>
                  <span className="block font-bold text-brand-gold font-serif text-base sm:text-lg">Nine Spice Blends</span>
                  <span className="text-xs sm:text-sm text-brand-ivory/75 font-light">Pure & Masalas</span>
                </div>
                <div>
                  <span className="block font-bold text-brand-gold font-serif text-base sm:text-lg">Authentic Product Range</span>
                  <span className="text-xs sm:text-sm text-brand-ivory/75 font-light">Ramraj Oil Industries</span>
                </div>
                <div>
                  <span className="block font-bold text-brand-gold font-serif text-base sm:text-lg">Direct WhatsApp Ordering</span>
                  <span className="text-xs sm:text-sm text-brand-ivory/75 font-light">Instant Quotations</span>
                </div>
              </motion.div>
            </div>

            {/* Right Visual Column (7 cols): Layer B Complete 9-Product 3D Constellation on Desktop */}
            <div className="lg:col-span-7 hidden lg:flex items-center justify-center relative w-full">
              <ProductConstellationHero />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          KEY CREDENTIALS STRIP - Viewport Scroll Reveal
          ========================================================================= */}
      <section className="bg-brand-emerald text-brand-ivory py-7 border-y border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center md:text-left"
          >
            <motion.div variants={staggerItemVariants} className="flex flex-col md:flex-row items-center gap-3.5">
              <ShieldCheck className="w-7 h-7 text-brand-gold flex-shrink-0" />
              <div>
                <div className="font-bold text-base sm:text-lg">Purity Guaranteed</div>
                <div className="text-sm text-brand-ivory/80 font-light">Zero artificial colors</div>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="flex flex-col md:flex-row items-center gap-3.5">
              <Flame className="w-7 h-7 text-brand-gold flex-shrink-0" />
              <div>
                <div className="font-bold text-base sm:text-lg">Fresh & Active</div>
                <div className="text-sm text-brand-ivory/80 font-light">High essential oil content</div>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="flex flex-col md:flex-row items-center gap-3.5">
              <MapPin className="w-7 h-7 text-brand-gold flex-shrink-0" />
              <div>
                <div className="font-bold text-base sm:text-lg">Our Location</div>
                <div className="text-sm text-brand-ivory/80 font-light">Surampalli, Andhra Pradesh</div>
              </div>
            </motion.div>

            <motion.div variants={staggerItemVariants} className="flex flex-col md:flex-row items-center gap-3.5">
              <MessageCircle className="w-7 h-7 text-[#25D366] flex-shrink-0" />
              <div>
                <div className="font-bold text-base sm:text-lg">Direct Ordering</div>
                <div className="text-sm text-brand-ivory/80 font-light">WhatsApp quote handoff</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================================
          FEATURED PRODUCTS SHOWCASE - Viewport Staggered Reveal (Phase E)
          ========================================================================= */}
      <section className="py-20 sm:py-24 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Reveal>
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
                <ChevronRight className="w-5 h-5 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </Reveal>

          {/* Clean 3-Column Staggered Discovery Cards */}
          <motion.div
            variants={staggerContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10"
          >
            {featuredProducts.map((product) => (
              <motion.div key={product.id} variants={staggerItemVariants}>
                <ProductCard product={product} />
              </motion.div>
            ))}
          </motion.div>

          {/* Quick Category Jump Banner */}
          <Reveal delay={0.15}>
            <div className="mt-16 p-8 sm:p-10 rounded-3xl bg-white border border-brand-charcoal/10 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 hover:shadow-md transition-shadow">
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
                className="inline-flex items-center gap-2 px-7 py-4 bg-brand-emerald text-white font-bold text-base rounded-xl hover:bg-brand-forest transition-all shadow-md hover:shadow-lg flex-shrink-0 hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>Explore Complete Range</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =========================================================================
          PHASE G: EDITORIAL HERITAGE & MISSION — THE LIVING SPICE ATELIER
          Left: Architectural framed studio photograph with layered floating product & gold orbital rings
          Right: Editorial headline, animated gold divider line, 3 craft pillars, and dual CTAs
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#051C10] via-[#082817] to-[#04150B] text-brand-ivory relative overflow-hidden">
        {/* Ambient Golden Light Rays & Atelier Radiance */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
          <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-brand-gold/15 blur-3xl" />
          <div className="absolute -left-24 top-1/4 w-80 h-80 rounded-full bg-brand-emerald/20 blur-3xl" />
          {/* Ethereal golden light beams */}
          <div className="absolute -top-10 right-1/3 w-32 h-[120%] bg-gradient-to-b from-brand-gold/10 via-brand-gold/5 to-transparent rotate-[25deg] blur-2xl" />
          <div className="absolute top-1/4 left-1/4 w-24 h-[100%] bg-gradient-to-b from-brand-emerald/15 via-brand-emerald/5 to-transparent -rotate-[15deg] blur-2xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column (5 cols): Master Spice Atelier & Whole Ingredient Showcase */}
            <div className="lg:col-span-5">
              <Reveal direction="left">
                <SpiceIngredientShowcase initialProductId="garam-masala" showSelector={true} />
              </Reveal>
            </div>

            {/* Content Column (7 cols): Editorial Narrative */}
            <div className="lg:col-span-7">
              <Reveal direction="right" delay={0.12}>
                <div className="space-y-6">
                  {/* Eyebrow Label */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                    <span>THE LIVING SPICE ATELIER • HERITAGE & CRAFT</span>
                  </div>

                  {/* Editorial Headline */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-ivory leading-tight">
                    Preserving the Essence of <br className="hidden sm:inline" />
                    <span className="text-brand-gold">Indian Culinary Heritage</span>
                  </h2>

                  {/* Animated Gold Divider Line */}
                  <motion.div
                    variants={goldDividerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    className="w-28 h-1 bg-gradient-to-r from-brand-gold via-brand-gold/80 to-transparent rounded-full origin-left"
                  />

                  {/* Narrative Body Copy - Verified, minimum 16px, high legibility */}
                  <p className="text-base sm:text-lg text-brand-ivory/90 leading-relaxed font-light">
                    At <strong className="text-white font-semibold">Ramraj Oil Industries</strong>, spices are more than cooking ingredients—they are the
                    cornerstone of wellness, authentic hospitality, and generational culinary memory. Under our flagship brand,{' '}
                    <strong className="text-brand-gold">RUCHI RICH</strong>, we uphold an uncompromising commitment to purity and traditional spice craftsmanship.
                  </p>

                  <p className="text-base sm:text-lg text-brand-ivory/90 leading-relaxed font-light">
                    Carefully selected raw spices are cleaned, processed, and stone-ground under hygienic conditions engineered to retain natural volatile oils and aroma. Every blend delivers vibrant colour, invigorating pungency, and wholesome flavour directly to your home.
                  </p>

                  {/* 3 Pillars / Quality Highlights */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold mb-1.5" />
                      <div className="text-xs font-bold text-brand-ivory">Native Essential Oils</div>
                      <div className="text-[11px] text-brand-ivory/70 font-light mt-0.5">Retains aroma & natural pungency</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold mb-1.5" />
                      <div className="text-xs font-bold text-brand-ivory">Zero Artificial Additives</div>
                      <div className="text-[11px] text-brand-ivory/70 font-light mt-0.5">No artificial colors or fillers</div>
                    </div>
                    <div className="bg-white/5 border border-white/10 rounded-xl p-3.5 backdrop-blur-xs">
                      <CheckCircle2 className="w-4 h-4 text-brand-gold mb-1.5" />
                      <div className="text-xs font-bold text-brand-ivory">ALEAP Standards</div>
                      <div className="text-[11px] text-brand-ivory/70 font-light mt-0.5">Surampalli manufacturing facility</div>
                    </div>
                  </div>

                  {/* Dual Action CTAs */}
                  <div className="pt-2 flex flex-wrap gap-4">
                    <Link
                      to="/about"
                      className="inline-flex items-center px-7 py-3.5 rounded-xl bg-brand-gold text-brand-forest font-bold text-base hover:bg-yellow-400 transition-colors shadow-md hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Learn More About Us</span>
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Link>
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-7 py-3.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-base border border-white/20 transition-colors hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <span>Locate Manufacturing Facility</span>
                    </Link>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ORDERING VIA WHATSAPP BANNER - Viewport Scroll Reveal
          ========================================================================= */}
      <section className="py-16 sm:py-20 bg-brand-ivory border-t border-brand-charcoal/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Reveal direction="scale">
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
                    className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-brand-forest font-bold text-base rounded-xl hover:bg-yellow-400 transition-colors shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <span>Start Selection Now</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <a
                    href={`https://wa.me/${contactConfig.whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-bold text-base rounded-xl transition-colors shadow-lg hover:-translate-y-0.5 active:translate-y-0"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    <span>Chat With Our Team</span>
                  </a>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
