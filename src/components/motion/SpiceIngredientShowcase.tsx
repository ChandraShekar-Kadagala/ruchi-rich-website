import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Sparkles, Award } from 'lucide-react';
import { products } from '../../data/products';
import {
  BrassSpiceBowl,
  TurmericRootCutout,
  DriedRedChilliCutout,
  CardamomClusterCutout,
  CinnamonStickCutout,
  WholeSpiceAccentsCutout,
  CorianderSeedsCutout,
  PepperCuminCutout,
} from './SpiceIngredientCutouts';
import { spiceIngredientProfiles, defaultIngredientProfile } from '../../utils/spiceIngredients';
import { brandSpring, brandEase } from '../../utils/motion';

interface SpiceIngredientShowcaseProps {
  initialProductId?: string;
  showSelector?: boolean;
  className?: string;
}

export const SpiceIngredientShowcase: React.FC<SpiceIngredientShowcaseProps> = ({
  initialProductId = 'garam-masala',
  showSelector = true,
  className = '',
}) => {
  const [activeProductId, setActiveProductId] = useState<string>(initialProductId);
  const shouldReduceMotion = useReducedMotion();

  const profile = spiceIngredientProfiles[activeProductId] || defaultIngredientProfile;
  const productData = products.find((p) => p.id === activeProductId) || products[0];

  // Render left ingredient cutout based on profile
  const renderLeftCutout = () => {
    switch (profile.cutoutLeft) {
      case 'turmeric-root':
        return <TurmericRootCutout className="w-24 sm:w-28 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
      case 'chilli':
        return <DriedRedChilliCutout className="w-24 sm:w-28 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
      case 'cardamom':
        return <CardamomClusterCutout className="w-20 sm:w-24 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
      case 'coriander':
        return <CorianderSeedsCutout className="w-20 sm:w-24 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
      case 'cinnamon':
        return <CinnamonStickCutout className="w-24 sm:w-28 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
      default:
        return <CardamomClusterCutout className="w-20 sm:w-24 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
    }
  };

  // Render right ingredient cutout based on profile
  const renderRightCutout = () => {
    switch (profile.cutoutRight) {
      case 'spices':
        return <WholeSpiceAccentsCutout className="w-22 sm:w-26 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
      case 'pepper':
        return <PepperCuminCutout className="w-20 sm:w-24 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
      case 'chilli':
        return <DriedRedChilliCutout className="w-24 sm:w-28 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
      case 'cardamom':
        return <CardamomClusterCutout className="w-20 sm:w-24 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
      case 'cinnamon':
        return <CinnamonStickCutout className="w-24 sm:w-28 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
      default:
        return <WholeSpiceAccentsCutout className="w-22 sm:w-26 h-auto drop-shadow-[0_12px_14px_rgba(0,0,0,0.4)]" />;
    }
  };

  const showcaseOptions = ['garam-masala', 'turmeric-powder', 'red-chilli-powder'];

  return (
    <div className={`relative flex flex-col items-center ${className}`}>
      {/* Optional Interactive Flagship Blend Selector Tabs */}
      {showSelector && (
        <div className="flex flex-wrap items-center justify-center gap-2 mb-6 z-20">
          {showcaseOptions.map((pid) => {
            const p = products.find((prod) => prod.id === pid);
            if (!p) return null;
            const isSelected = activeProductId === pid;
            return (
              <button
                key={pid}
                onClick={() => setActiveProductId(pid)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold ${
                  isSelected
                    ? 'bg-brand-gold text-brand-forest shadow-md scale-102'
                    : 'bg-brand-forest/80 text-brand-ivory/80 hover:bg-brand-forest border border-brand-gold/30 hover:text-white'
                }`}
              >
                <span
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: isSelected ? '#04150B' : (spiceIngredientProfiles[pid]?.spiceColor || '#D4A017') }}
                />
                <span>{p.name.replace(' Powder', '')}</span>
              </button>
            );
          })}
        </div>
      )}

      {/* Main Architectural Studio Frame for the Ingredient Showcase */}
      <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border-2 border-brand-gold/30 bg-[#082817]/85 p-5 sm:p-7 backdrop-blur-md">
        {/* Layer 1: Ambient Background Lighting & Aura */}
        <div className="relative h-72 sm:h-84 rounded-2xl overflow-hidden mb-5 bg-[#03180D] flex items-center justify-center">
          {/* Product-Specific Soft Radial Ambient Spotlight */}
          <motion.div
            key={activeProductId}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 flex items-center justify-center pointer-events-none"
            aria-hidden="true"
          >
            <div
              className="w-64 h-64 rounded-full blur-3xl opacity-35"
              style={{ backgroundColor: profile.spiceColor }}
            />
          </motion.div>

          {/* Double Concentric Gold Grinding Orbital Rings (Symbol of stone-mill craft) */}
          <div
            className="absolute inset-0 m-auto w-60 h-60 rounded-full border border-brand-gold/20 pointer-events-none animate-[spin_45s_linear_infinite]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 m-auto w-48 h-48 rounded-full border border-brand-gold/15 pointer-events-none animate-[spin_60s_linear_infinite_reverse]"
            aria-hidden="true"
          />

          {/* Illuminated Pedestal Stage */}
          <div
            className="absolute bottom-5 left-1/2 -translate-x-1/2 w-64 h-16 rounded-[100%] bg-gradient-to-b from-brand-gold/25 via-brand-emerald/25 to-black/70 border border-brand-gold/35 shadow-[0_0_35px_rgba(214,165,42,0.25)] pointer-events-none"
            style={{ transform: 'translateX(-50%) rotateX(68deg)' }}
            aria-hidden="true"
          />

          {/* Layer 2: Spice Ingredient Arrangement (Foreground, Middle, Center) */}
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Left Ingredient Cutout with slow, gentle float */}
            <motion.div
              key={`left-${activeProductId}`}
              initial={!shouldReduceMotion ? { opacity: 0, x: -20, y: 15 } : { opacity: 0 }}
              animate={
                !shouldReduceMotion
                  ? {
                      opacity: 1,
                      x: 0,
                      y: [-4, 4, -4],
                    }
                  : { opacity: 1, x: 0, y: 0 }
              }
              transition={{
                opacity: { duration: 0.5, ease: brandEase },
                x: { duration: 0.5, ease: brandEase },
                y: { duration: 5.4, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute left-3 sm:left-6 bottom-7 sm:bottom-9 z-20 pointer-events-none select-none"
            >
              {renderLeftCutout()}
            </motion.div>

            {/* Center Stage: Authentic Product Packet & Ground Spice Brass Bowl */}
            <div className="relative z-30 flex items-end justify-center gap-2 mb-4">
              {/* Authentic Product Packet */}
              <motion.div
                key={`pouch-${activeProductId}`}
                initial={!shouldReduceMotion ? { opacity: 0, y: 25, scale: 0.95 } : { opacity: 0 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={brandSpring}
                className="relative cursor-pointer group"
              >
                <img
                  src={productData.image}
                  alt={`Authentic packaging of ${productData.name} by RUCHI RICH`}
                  className="h-44 sm:h-52 w-auto object-contain filter drop-shadow-[0_18px_24px_rgba(0,0,0,0.6)] group-hover:-translate-y-2 transition-transform duration-300"
                />
                {/* Physical contact shadow */}
                <div
                  className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-28 h-2.5 bg-black/75 rounded-full blur-[2px]"
                  aria-hidden="true"
                />
              </motion.div>

              {/* Handcrafted Indian Brass Katori Bowl with matching ground spice */}
              <motion.div
                key={`bowl-${activeProductId}`}
                initial={!shouldReduceMotion ? { opacity: 0, y: 20 } : { opacity: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1, ease: brandEase }}
                className="relative -ml-6 -mb-1 z-35 select-none pointer-events-none"
              >
                <BrassSpiceBowl
                  spiceColor={profile.spiceColor}
                  spiceHighlight={profile.spiceHighlight}
                  className="w-32 sm:w-36 h-auto drop-shadow-[0_16px_20px_rgba(0,0,0,0.65)]"
                />
              </motion.div>
            </div>

            {/* Right Ingredient Cutout with slow, gentle float */}
            <motion.div
              key={`right-${activeProductId}`}
              initial={!shouldReduceMotion ? { opacity: 0, x: 20, y: 15 } : { opacity: 0 }}
              animate={
                !shouldReduceMotion
                  ? {
                      opacity: 1,
                      x: 0,
                      y: [4, -4, 4],
                    }
                  : { opacity: 1, x: 0, y: 0 }
              }
              transition={{
                opacity: { duration: 0.5, delay: 0.1, ease: brandEase },
                x: { duration: 0.5, delay: 0.1, ease: brandEase },
                y: { duration: 6.0, repeat: Infinity, ease: 'easeInOut' },
              }}
              className="absolute right-3 sm:right-6 bottom-8 sm:bottom-10 z-20 pointer-events-none select-none"
            >
              {renderRightCutout()}
            </motion.div>
          </div>
        </div>

        {/* Manufacturing & Craft Credential Plaque */}
        <div className="bg-[#051C10]/95 backdrop-blur-md p-4 rounded-xl border border-brand-gold/30 shadow-lg flex items-center justify-between gap-3.5">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-brand-gold/15 text-brand-gold border border-brand-gold/25 flex-shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-brand-gold font-serif block">
                RAMRAJ RUCHI RICH
              </span>
              <span className="text-xs text-brand-ivory/80 block mt-0.5 font-light">
                ALEAP Industrial Estate, Surampalli, Andhra Pradesh
              </span>
            </div>
          </div>
          <span className="hidden sm:inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-emerald/40 text-brand-gold border border-brand-gold/30">
            Verified Facility
          </span>
        </div>

        {/* Dynamic Ingredient Tags */}
        <div className="mt-3.5 flex flex-wrap gap-2 pt-3 border-t border-brand-charcoal/15">
          {profile.ingredientBadges.map((badge) => (
            <span
              key={badge}
              className="text-[11px] font-medium text-brand-gold bg-brand-gold/10 border border-brand-gold/20 px-2.5 py-0.5 rounded-full flex items-center gap-1"
            >
              <Sparkles className="w-3 h-3 text-brand-gold/70" />
              <span>{badge}</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpiceIngredientShowcase;
