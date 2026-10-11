import React, { useEffect } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';
import { spiceThemes, defaultSpiceTheme } from '../../utils/spiceThemes';

/**
 * Global toast notification & particle burst when a product is added to the cart
 */
export const ProductSpiceBurstToast: React.FC = () => {
  const lastAdded = useCartStore((state) => state.lastAdded);
  const openDrawer = useCartStore((state) => state.openDrawer);
  const clearLastAdded = useCartStore((state) => state.clearLastAdded);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (!lastAdded) return;
    const timer = setTimeout(() => {
      clearLastAdded();
    }, 3200);

    return () => clearTimeout(timer);
  }, [lastAdded, clearLastAdded]);

  if (!lastAdded) return null;

  const theme = spiceThemes[lastAdded.product.id] || defaultSpiceTheme;

  // 8 lightweight burst particles
  const particles = [
    { x: -38, y: -28, size: 5, color: theme.particleColors[0], delay: 0 },
    { x: 34, y: -32, size: 4, color: theme.particleColors[1], delay: 0.05 },
    { x: -44, y: 16, size: 4.5, color: theme.particleColors[2], delay: 0.08 },
    { x: 42, y: 22, size: 5, color: theme.particleColors[3 % theme.particleColors.length], delay: 0.04 },
    { x: -18, y: -42, size: 3.5, color: theme.particleColors[0], delay: 0.1 },
    { x: 22, y: -44, size: 4, color: theme.particleColors[1], delay: 0.07 },
    { x: -28, y: 38, size: 4, color: theme.particleColors[2], delay: 0.12 },
    { x: 26, y: 36, size: 3.5, color: theme.particleColors[0], delay: 0.09 },
  ];

  return (
    <div
      className="fixed bottom-6 right-6 z-50 pointer-events-none select-none max-w-sm w-full px-4 sm:px-0"
      aria-live="polite"
      role="status"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={lastAdded.timestamp}
          initial={
            !shouldReduceMotion
              ? { opacity: 0, y: 30, scale: 0.92 }
              : { opacity: 0 }
          }
          animate={
            !shouldReduceMotion
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 1 }
          }
          exit={
            !shouldReduceMotion
              ? { opacity: 0, y: 20, scale: 0.95 }
              : { opacity: 0 }
          }
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative pointer-events-auto bg-[#072113]/95 backdrop-blur-md text-brand-ivory rounded-2xl p-4 shadow-2xl border flex items-center justify-between gap-3.5 overflow-visible"
          style={{
            borderColor: `${theme.primary}66`,
            boxShadow: `0 12px 32px -4px ${theme.glow}, 0 4px 12px rgba(0,0,0,0.4)`,
          }}
        >
          {/* Subtle localized particle burst on entrance */}
          {!shouldReduceMotion && (
            <div className="absolute inset-0 pointer-events-none overflow-visible -z-10" aria-hidden="true">
              {particles.map((p, idx) => (
                <motion.span
                  key={idx}
                  initial={{ x: 0, y: 0, opacity: 0.9, scale: 0.4 }}
                  animate={{
                    x: p.x * 1.3,
                    y: p.y * 1.3,
                    opacity: 0,
                    scale: [0.4, 1.2, 0],
                  }}
                  transition={{ duration: 0.65, delay: p.delay, ease: 'easeOut' }}
                  style={{
                    backgroundColor: p.color,
                    width: `${p.size}px`,
                    height: `${p.size}px`,
                    boxShadow: `0 0 6px ${p.color}`,
                  }}
                  className="absolute left-8 top-1/2 rounded-full"
                />
              ))}
            </div>
          )}

          {/* Left item details */}
          <div className="flex items-center gap-3 min-w-0">
            <div
              className="w-12 h-14 rounded-xl flex items-center justify-center p-1 border flex-shrink-0 relative overflow-hidden"
              style={{
                backgroundColor: 'rgba(255, 255, 255, 0.08)',
                borderColor: `${theme.primary}44`,
              }}
            >
              <img
                src={lastAdded.product.image}
                alt=""
                className="max-h-full max-w-full object-contain filter drop-shadow-sm"
              />
              <span
                className="absolute top-1 right-1 w-2 h-2 rounded-full"
                style={{ backgroundColor: theme.primary }}
              />
            </div>

            <div className="min-w-0">
              <div className="flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5" style={{ color: theme.primary }} />
                <span className="text-xs uppercase font-bold tracking-wider font-serif" style={{ color: theme.primary }}>
                  Added to Basket
                </span>
              </div>
              <h4 className="text-sm font-bold text-white truncate font-serif">
                {lastAdded.product.name}
              </h4>
              <span className="text-[11px] text-brand-ivory/70 block">
                {lastAdded.selectedOption.label}
              </span>
            </div>
          </div>

          {/* Right Action: Open Basket */}
          <button
            onClick={() => {
              openDrawer();
              clearLastAdded();
            }}
            className="flex-shrink-0 inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold text-brand-forest hover:opacity-95 transition-transform active:scale-95 shadow-md"
            style={{ backgroundColor: theme.primary }}
          >
            <span>View</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default ProductSpiceBurstToast;
