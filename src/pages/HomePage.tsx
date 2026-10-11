import React from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, MessageCircle, Sparkles, ShieldCheck, Flame, Award, ChevronRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { contactConfig } from '../config/contact';
import {
  BrandIntro,
  SpiceDustParticles,
  ProductStage3D,
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

  // Main featured hero product for interactive showcase (Signature Turmeric Powder)
  const heroProduct = products.find((p) => p.id === 'turmeric-powder') || products[0];

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
      <section className="relative min-h-[680px] lg:min-h-[760px] bg-gradient-to-br from-[#051C10] via-[#0A331C] to-[#04150B] overflow-hidden flex items-center">
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

        {/* LAYER A: Subdued studio spice backdrop (atmospheric texture with zero competing foreground package) */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <picture>
            <source srcSet="/assets/brand/hero-banner.jpg" type="image/jpeg" />
            <img
              src="/assets/brand/hero-banner.jpg"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-right-bottom opacity-15 filter blur-[1px] mix-blend-luminosity"
            />
          </picture>
          {/* Deep dark emerald gradient scrims guaranteeing 100% text contrast and eliminating any competing focal points */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#051C10] via-[#051C10]/95 to-[#051C10]/60 lg:w-3/5" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#051C10] via-[#051C10]/90 to-transparent lg:hidden" />
          {/* Soft directional studio gold highlight behind the right product zone */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-radial from-brand-gold/15 via-brand-emerald/10 to-transparent blur-3xl pointer-events-none" />
        </div>

        {/* Hero Content Grid (Layer C Brand Message & Layer B Product Stage) */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 py-12 sm:py-16 lg:py-24 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Content Column (7 cols): Layer C Brand Message */}
            <div className="lg:col-span-7 max-w-2xl text-left">
              {/* Eyebrow Pill Badge */}
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: brandEase }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-emerald/40 border border-brand-gold/40 text-brand-gold text-xs sm:text-sm font-semibold tracking-wider uppercase mb-5 backdrop-blur-md shadow-sm"
              >
                <Sparkles className="w-4 h-4 text-brand-gold animate-pulse flex-shrink-0" />
                <span>RAMRAJ OIL INDUSTRIES • FRESH & ACTIVE</span>
              </motion.div>

              {/* Headline with Sequenced Line Reveals */}
              <div className="overflow-hidden mb-5">
                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.65, delay: 0.12, ease: brandEase }}
                  className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-brand-ivory leading-[1.18] tracking-tight"
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
                className="text-base sm:text-lg lg:text-xl text-brand-ivory/90 leading-relaxed font-light"
              >
                Discover authentic Indian spices, carefully prepared to bring vibrant colour, rich aroma and flavour to everyday cooking.
              </motion.p>

              {/* Mobile Product Visual (Shown between copy and CTAs on small viewports so mobile users experience the 3D stage) */}
              <div className="my-6 lg:hidden flex justify-center">
                <div className="w-full max-w-xs relative py-2">
                  <ProductStage3D
                    image={heroProduct.image}
                    alt={`Authentic ${heroProduct.name} package by RUCHI RICH`}
                    priority={true}
                    imageClassName="max-h-[260px] w-auto"
                  />
                </div>
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

            {/* Right Visual Column (5 cols): Layer B Dominant Product Stage on Desktop */}
            <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.25, ease: brandEase }}
                className="w-full max-w-md relative flex flex-col items-center justify-center"
              >
                {/* Golden Halo Ring behind hero pouch */}
                <div
                  className="absolute inset-0 m-auto w-80 h-80 rounded-full border border-brand-gold/20 animate-[spin_32s_linear_infinite] pointer-events-none"
                  aria-hidden="true"
                />

                <ProductStage3D
                  image={heroProduct.image}
                  alt={`Authentic ${heroProduct.name} package by RUCHI RICH`}
                  priority={true}
                  imageClassName="max-h-[380px] w-auto"
                />

                {/* Floating Authentic Quality Seal Badge */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.7, duration: 0.5 }}
                  className="absolute -bottom-2 -left-4 bg-[#051C10]/95 backdrop-blur-md p-3.5 rounded-2xl border border-brand-gold/40 shadow-xl flex items-center gap-2.5 text-left"
                >
                  <div className="p-2 rounded-xl bg-brand-gold/20 text-brand-gold">
                    <Flame className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block text-xs font-bold text-brand-gold font-serif">Fresh & Active Spices</span>
                    <span className="block text-[11px] text-brand-ivory/80">Aroma & Essential Oils Preserved</span>
                  </div>
                </motion.div>
              </motion.div>
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
              <Award className="w-7 h-7 text-brand-gold flex-shrink-0" />
              <div>
                <div className="font-bold text-base sm:text-lg">Ramraj Oil Industries</div>
                <div className="text-sm text-brand-ivory/80 font-light">ALEAP Estate, Surampalli</div>
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
          PHASE G: EDITORIAL HERITAGE & MISSION SHOWCASE - Scroll Reveal
          Left: Architectural framed studio photograph with layered floating product & gold rings
          Right: Editorial headline, animated gold divider line, verified narrative, and dual CTAs
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-gradient-to-b from-[#051C10] via-brand-forest to-[#04150B] text-brand-ivory relative overflow-hidden">
        {/* Subtle decorative gold ambient glow */}
        <div className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full bg-brand-gold/10 blur-3xl pointer-events-none" />
        <div className="absolute -left-24 top-1/4 w-80 h-80 rounded-full bg-brand-emerald/15 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {/* Visual Column (5 cols): Layered Editorial Composition */}
            <div className="lg:col-span-5">
              <Reveal direction="left">
                <div className="relative group">
                  {/* Decorative rotating gold geometric rings */}
                  <div
                    className="absolute -top-6 -left-6 w-36 h-36 rounded-full border border-brand-gold/20 pointer-events-none animate-[spin_40s_linear_infinite]"
                    aria-hidden="true"
                  />
                  <div
                    className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full border border-brand-gold/15 pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Main Architectural Studio Frame */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/30 bg-[#082817]/80 p-5 sm:p-7 backdrop-blur-md">
                    {/* Background studio image with darkened overlay */}
                    <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden mb-5">
                      <img
                        src="/assets/brand/hero-banner.jpg"
                        alt="Ramraj Oil Industries Heritage Studio Presentation"
                        className="w-full h-full object-cover opacity-40 filter blur-[0.5px] scale-105 group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#082817] via-[#082817]/60 to-transparent" />

                      {/* Foreground floating spice visual with soft ambient halo */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="relative w-44 sm:w-48 aspect-square flex items-center justify-center">
                          <div className="absolute inset-0 rounded-full bg-radial from-brand-gold/30 via-brand-emerald/20 to-transparent blur-xl" />
                          <img
                            src="/assets/products/garam-masala.png"
                            alt="Authentic Garam Masala pouch by RUCHI RICH"
                            className="max-h-full max-w-full object-contain filter drop-shadow-[0_16px_20px_rgba(0,0,0,0.5)] transform group-hover:-translate-y-1 group-hover:scale-105 transition-all duration-500"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Manufacturing & Company Identity Panel */}
                    <div className="bg-[#051C10]/90 backdrop-blur-md p-4 rounded-xl border border-brand-gold/25 shadow-lg flex items-center gap-3.5">
                      <div className="p-2.5 rounded-lg bg-brand-gold/15 text-brand-gold flex-shrink-0">
                        <Award className="w-5 h-5" />
                      </div>
                      <div>
                        <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-serif block">
                          Ramraj Oil Industries
                        </span>
                        <span className="text-xs text-brand-ivory/80 block mt-0.5 font-light">
                          ALEAP Industrial Estate, Surampalli, Andhra Pradesh
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* Content Column (7 cols): Editorial Narrative */}
            <div className="lg:col-span-7">
              <Reveal direction="right" delay={0.12}>
                <div className="space-y-6">
                  {/* Eyebrow Label */}
                  <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-gold text-xs sm:text-sm font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>OUR HERITAGE & MISSION</span>
                  </div>

                  {/* Editorial Headline */}
                  <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-brand-ivory leading-tight">
                    Preserving the Essence of <br className="hidden sm:inline" />
                    <span className="text-brand-gold">Indian Kitchens</span>
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
