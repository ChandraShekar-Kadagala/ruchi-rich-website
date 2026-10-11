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

  // Auto-dismiss after 1.15 seconds
  useEffect(() => {
    if (!isVisible || shouldReduceMotion) {
      if (onComplete && !isVisible) onComplete();
      return;
    }

    const timer = setTimeout(() => {
      dismissIntro();
    }, 1150);

    return () => clearTimeout(timer);
  }, [isVisible, shouldReduceMotion, dismissIntro, onComplete]);

  // Keyboard shortcut (Escape to skip immediately)
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
          exit={{ opacity: 0, scale: 1.03 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          onClick={dismissIntro}
          role="status"
          aria-live="polite"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-brand-forest cursor-pointer select-none overflow-hidden"
        >
          {/* Ambient golden aura glow in background */}
          <motion.div
            initial={{ scale: 0.6, opacity: 0 }}
            animate={{ scale: 1.2, opacity: 0.25 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="absolute w-96 h-96 rounded-full bg-brand-gold blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          {/* Central Logo & Reveal Stage */}
          <motion.div
            initial={{ scale: 0.88, opacity: 0, y: 15 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.05, opacity: 0, y: -10 }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 flex flex-col items-center text-center px-4"
          >
            {/* Authentic Brand Logo */}
            <div className="p-4 bg-white/95 rounded-2xl shadow-2xl border border-brand-gold/40 mb-4 backdrop-blur-sm">
              <img
                src="/assets/brand/ruchi-rich-logo.png"
                alt="RUCHI RICH Logo"
                className="h-16 sm:h-20 w-auto object-contain"
              />
            </div>

            {/* Parent company & tagline */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="space-y-1"
            >
              <span className="block text-xs sm:text-sm font-serif font-bold uppercase tracking-[0.25em] text-brand-gold">
                Ramraj Oil Industries
              </span>
              <span className="block text-xs sm:text-sm text-brand-ivory/80 font-light tracking-widest">
                Fresh & Active Spices
              </span>
            </motion.div>

            {/* Subtle skip hint */}
            <span className="mt-6 text-[11px] text-brand-ivory/40 tracking-wider">
              Click anywhere to skip
            </span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BrandIntro;
