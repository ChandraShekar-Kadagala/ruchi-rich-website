import React, { useRef, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';

interface ProductStage3DProps {
  image: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  interactiveTilt?: boolean;
  floatingAnimation?: boolean;
  priority?: boolean;
}

export const ProductStage3D: React.FC<ProductStage3DProps> = ({
  image,
  alt,
  className = '',
  imageClassName = '',
  interactiveTilt = true,
  floatingAnimation = true,
  priority = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();

  // Lazy check for touch device during initialization
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768;
  });

  // Motion values for tilt tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth springs for natural elastic motion
  const springConfig = { damping: 22, stiffness: 260, mass: 0.6 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [8, -8]), springConfig);
  const shadowScale = useSpring(useTransform(mouseY, [-0.5, 0.5], [0.95, 1.05]), springConfig);
  const highlightX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const highlightOpacity = useSpring(useTransform(mouseX, [-0.5, 0, 0.5], [0.15, 0.28, 0.15]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || isTouchDevice || !interactiveTilt || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  const enable3D = !shouldReduceMotion && !isTouchDevice && interactiveTilt;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative flex items-center justify-center select-none ${className}`}
      style={{ perspective: enable3D ? 900 : undefined }}
    >
      {/* Ambient warm radial spotlight behind the pouch */}
      <div
        className="absolute inset-0 m-auto w-4/5 h-4/5 rounded-full bg-gradient-to-tr from-brand-gold/15 via-brand-emerald/10 to-transparent blur-2xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* 3D Pouch Container with optional gentle vertical float */}
      <motion.div
        animate={
          !shouldReduceMotion && floatingAnimation
            ? {
                y: [-3, 3, -3],
                transition: {
                  duration: 4.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
              }
            : undefined
        }
        style={{
          transformStyle: enable3D ? 'preserve-3d' : undefined,
          rotateX: enable3D ? rotateX : 0,
          rotateY: enable3D ? rotateY : 0,
        }}
        className="relative z-10 flex flex-col items-center justify-center max-w-full"
      >
        {/* Physical Pouch Image Stage */}
        <div className="relative group">
          <img
            src={image}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className={`max-w-full max-h-full object-contain filter drop-shadow-[0_16px_22px_rgba(0,43,20,0.24)] transition-transform duration-300 ${imageClassName}`}
          />

          {/* Softbox foil highlight reflection overlay */}
          {!shouldReduceMotion && (
            <motion.div
              style={{
                x: enable3D ? highlightX : 0,
                opacity: enable3D ? highlightOpacity : 0.2,
              }}
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent pointer-events-none rounded-2xl mix-blend-overlay"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Realistic ground contact shadow underneath the physical pouch base */}
        <motion.div
          style={{
            x: enable3D ? shadowX : 0,
            scaleX: enable3D ? shadowScale : 1,
          }}
          className="w-40 sm:w-48 h-3.5 mt-1 bg-brand-charcoal/30 rounded-full blur-[3.5px] scale-y-50 pointer-events-none"
          aria-hidden="true"
        />
      </motion.div>
    </div>
  );
};

export default ProductStage3D;
