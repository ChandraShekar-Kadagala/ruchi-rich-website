import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../../types/product';
import { brandSpring } from '../../utils/motion';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Lazy check for touch device during initialization
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
  });

  // Motion values for smooth 3D tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 280, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [5, -5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), springConfig);
  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [6, -6]), springConfig);
  const shadowScale = useSpring(useTransform(mouseY, [-0.5, 0.5], [0.96, 1.04]), springConfig);
  const highlightX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-25, 25]), springConfig);
  const highlightOpacity = useSpring(useTransform(mouseX, [-0.5, 0, 0.5], [0.15, 0.35, 0.15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const enable3D = !shouldReduceMotion && !isTouchDevice;

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={!shouldReduceMotion ? { y: -6 } : undefined}
      transition={brandSpring}
      className="bg-white rounded-2xl shadow-sm hover:shadow-2xl transition-all duration-300 border border-brand-forest/15 hover:border-brand-gold/40 overflow-hidden flex flex-col h-full group relative"
    >
      {/* =========================================================================
          PHASE D: 3D SACHET STAGE WITH CURSOR-RESPONSIVE FOIL LIGHTING & PEDESTAL
          ========================================================================= */}
      <Link
        to={`/product/${product.id}`}
        className="block relative pt-[105%] overflow-hidden bg-gradient-to-b from-brand-ivory via-white to-brand-emerald/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald select-none"
        aria-label={`View details for ${product.name}`}
        style={{ perspective: enable3D ? 850 : undefined }}
      >
        {/* Ambient Radial Spotlight */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <div className="w-64 h-64 rounded-full bg-radial from-brand-gold/20 via-brand-emerald/[0.08] to-transparent blur-2xl group-hover:scale-120 transition-transform duration-700" />
        </div>

        {/* Subtle Elliptical Ground Pedestal */}
        <div
          className="absolute bottom-6 left-1/2 -translate-x-1/2 w-44 h-14 rounded-[100%] bg-gradient-to-b from-brand-gold/10 to-transparent border border-brand-gold/20 pointer-events-none group-hover:border-brand-gold/40 transition-colors"
          style={{ transform: 'translateX(-50%) rotateX(68deg)' }}
          aria-hidden="true"
        />

        {/* 3D Pouch Container with aligned bottom pedestal baseline */}
        <motion.div
          style={{
            transformStyle: enable3D ? 'preserve-3d' : undefined,
            rotateX: enable3D ? rotateX : 0,
            rotateY: enable3D ? rotateY : 0,
          }}
          className="absolute inset-0 flex flex-col items-center justify-end pb-7 pt-12 px-6"
        >
          {/* Packaging Image Stage */}
          <div className="relative w-full h-full flex items-end justify-center">
            <img
              src={product.image}
              alt={`Authentic package of ${product.name} by RUCHI RICH`}
              loading="lazy"
              className="max-w-full max-h-[88%] object-contain object-bottom filter drop-shadow-[0_18px_24px_rgba(0,35,15,0.3)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.12)] transform group-hover:scale-106 group-hover:-translate-y-1.5 transition-all duration-400 ease-out"
            />

            {/* Cursor-responsive Softbox Studio Foil Highlight Reflection */}
            {!shouldReduceMotion && (
              <motion.div
                style={{
                  x: enable3D ? highlightX : 0,
                  opacity: enable3D ? highlightOpacity : 0.2,
                }}
                className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/30 to-transparent pointer-events-none rounded-2xl mix-blend-overlay"
                aria-hidden="true"
              />
            )}
          </div>

          {/* Physical Ground Contact Shadow underneath pouch base */}
          <motion.div
            style={{
              x: enable3D ? shadowX : 0,
              scaleX: enable3D ? shadowScale : 1,
            }}
            className="w-36 sm:w-40 h-3 -mt-2 bg-gradient-to-r from-transparent via-black/40 to-transparent blur-[3px] rounded-full pointer-events-none transform group-hover:scale-95 group-hover:opacity-80 transition-all duration-300"
            aria-hidden="true"
          />
        </motion.div>

        {/* Badges & Category Header Row (Guaranteed non-overlapping & standardized inset) */}
        <div className="absolute top-3.5 inset-x-3.5 flex items-start justify-between gap-2 z-10 pointer-events-none">
          <div className="flex flex-wrap gap-1.5 max-w-[65%]">
            {product.badges?.map((badge) => (
              <span
                key={badge}
                className="bg-brand-red text-white text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full shadow-md backdrop-blur-xs whitespace-nowrap"
              >
                {badge}
              </span>
            ))}
          </div>
          <span className="text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-brand-forest/90 text-brand-gold shadow-sm backdrop-blur-md border border-brand-gold/30 whitespace-nowrap flex-shrink-0">
            {product.category}
          </span>
        </div>
      </Link>

      {/* =========================================================================
          DISCOVERY CONTENT & ELEVATED TYPOGRAPHY
          ========================================================================= */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Product Name */}
          <Link
            to={`/product/${product.id}`}
            className="block text-brand-charcoal hover:text-brand-emerald transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-emerald rounded"
          >
            <h3 className="text-xl sm:text-[23px] font-serif font-bold leading-snug line-clamp-1 min-h-[1.75rem]">
              {product.name}
            </h3>
          </Link>

          {/* Tagline / Aroma Accent */}
          <div className="min-h-[1.5rem] mt-1.5 flex items-center">
            {product.tagline ? (
              <p className="text-sm font-semibold text-brand-emerald italic line-clamp-1 flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                <span>{product.tagline}</span>
              </p>
            ) : product.aromaProfile ? (
              <p className="text-sm font-medium text-brand-emerald/90 italic line-clamp-1">
                {product.aromaProfile}
              </p>
            ) : null}
          </div>

          {/* Body Description - 16px minimum with 1.6 line-height */}
          <p className="text-base text-brand-charcoal/80 mt-2.5 line-clamp-2 leading-relaxed font-light min-h-[3rem]">
            {product.shortDescription}
          </p>
        </div>

        {/* Clear Primary Action Button */}
        <div className="mt-6 pt-4 border-t border-brand-charcoal/10">
          <Link
            to={`/product/${product.id}`}
            className="w-full h-12 py-3 px-5 rounded-xl text-base font-bold text-center bg-brand-emerald hover:bg-brand-forest text-white shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-brand-forest active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
          >
            <span>Explore Blend</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform flex-shrink-0" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
