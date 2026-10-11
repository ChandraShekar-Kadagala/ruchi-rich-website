import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface BrandIntroProps {
  onComplete?: () => void;
}

export const BrandIntro: React.FC<BrandIntroProps> = ({ onComplete }) => {
  const shouldReduceMotion = useReducedMotion();

  // Initialize visibility lazily from session storage and reduced motion preference
  const [isVisible, setIsVisible] = useState(() => {
    if (typeof window === 'undefined') return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    return !sessionStorage.getItem('ruchi_rich_intro_seen');
  });

  const dismissIntro = useCallback(() => {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('ruchi_rich_intro_seen', 'true');
    }
    setIsVisible(false);
    if (onComplete) onComplete();
  }, [onComplete]);

  // Auto-dismiss after 1.35 seconds for crisp, cinematic pacing
  useEffect(() => {
    if (!isVisible || shouldReduceMotion) {
      if (onComplete && !isVisible) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      dismissIntro();
    }, 1350);

    return () => clearTimeout(timer);
  }, [isVisible, shouldReduceMotion, dismissIntro, onComplete]);

  // Keyboard shortcut (Escape, Enter, Space to skip immediately)
  useEffect(() => {
    if (!isVisible) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key === 'Enter' || e.key === ' ') {
        dismissIntro();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isVisible, dismissIntro]);

  if (shouldReduceMotion) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          onClick={dismissIntro}
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#051C10] cursor-pointer select-none overflow-hidden"
        >
          {/* Skip button in top right */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              dismissIntro();
            }}
            className="absolute top-6 right-6 z-20 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-brand-gold/30 text-brand-ivory text-xs font-semibold tracking-wider uppercase transition-colors"
          >
            Skip Intro
          </button>

          {/* Ambient golden aura glow in background */}
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1.3, opacity: 0.3 }}
            transition={{ duration: 1.1, ease: 'easeOut' }}
            className="absolute w-[440px] h-[440px] rounded-full bg-brand-gold blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Central Logo & Reveal Stage */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 16 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.04, opacity: 0, y: -12 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center text-center px-4"
          >
            {/* Authentic Brand Logo with Gold Shimmer Sweep */}
            <div className="relative p-5 sm:p-6 bg-white rounded-3xl shadow-2xl border-2 border-brand-gold/50 mb-5 overflow-hidden">
              <img
                src="/assets/brand/ruchi-rich-logo.png"
                alt="RUCHI RICH Logo"
                className="h-20 sm:h-24 md:h-28 w-auto object-contain relative z-10"
              />

              {/* Gold light sweep across the logo emblem */}
              <motion.div
                initial={{ x: '-120%', opacity: 0 }}
                animate={{ x: '180%', opacity: [0, 0.75, 0] }}
                transition={{ duration: 1.1, delay: 0.2, ease: 'easeInOut' }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-brand-gold/40 to-transparent skew-x-12 pointer-events-none z-20"
                aria-hidden="true"
              />
            </div>

            {/* Parent company & tagline with sequenced reveal */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.55 }}
              className="space-y-1.5"
            >
              <span className="block text-sm sm:text-base font-serif font-bold uppercase tracking-[0.28em] text-brand-gold">
                RAMRAJ RUCHI RICH
              </span>
              <span className="block text-xs sm:text-sm text-brand-ivory/85 font-light tracking-[0.2em] uppercase">
                Fresh & Active Spices
              </span>
            </motion.div>

            {/* Subtle animated gold line accent */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="w-24 h-0.5 bg-gradient-to-r from-transparent via-brand-gold to-transparent mt-4 rounded-full"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrandIntro;
