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

  // Smooth springs for natural elastic motion (restrained 3-5 deg tilt)
  const springConfig = { damping: 26, stiffness: 240, mass: 0.5 };
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [4.5, -4.5]), springConfig);
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-4.5, 4.5]), springConfig);
  const shadowX = useSpring(useTransform(mouseX, [-0.5, 0.5], [10, -10]), springConfig);
  const shadowScale = useSpring(useTransform(mouseY, [-0.5, 0.5], [0.94, 1.06]), springConfig);
  const highlightX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-24, 24]), springConfig);
  const highlightOpacity = useSpring(useTransform(mouseX, [-0.5, 0, 0.5], [0.12, 0.28, 0.12]), springConfig);

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
      style={{ perspective: enable3D ? 1000 : undefined }}
    >
      {/* Ambient warm radial spotlight behind the product stage */}
      <div
        className="absolute inset-0 m-auto w-4/5 h-4/5 rounded-full bg-radial from-brand-gold/20 via-brand-emerald/15 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* LAYER B: Elliptical Stage Pedestal with subtle gold rim glow */}
      <div
        className="absolute bottom-2 sm:bottom-4 w-64 sm:w-80 h-24 sm:h-28 rounded-[100%] bg-gradient-to-b from-brand-gold/15 via-brand-emerald/20 to-black/40 border border-brand-gold/30 shadow-[0_0_30px_rgba(214,165,42,0.15)] pointer-events-none -z-5"
        style={{ transform: 'rotateX(68deg)' }}
        aria-hidden="true"
      >
        <div className="absolute inset-2 rounded-[100%] border border-brand-gold/20" />
      </div>

      {/* 3D Pouch Container with gentle vertical floating motion */}
      <motion.div
        animate={
          !shouldReduceMotion && floatingAnimation
            ? {
                y: [-3.5, 3.5, -3.5],
                transition: {
                  duration: 5.2,
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
        <div className="relative group flex items-center justify-center">
          <img
            src={image}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className={`max-w-full max-h-full object-contain filter drop-shadow-[0_20px_28px_rgba(0,35,15,0.4)] drop-shadow-[0_6px_12px_rgba(0,0,0,0.2)] transition-transform duration-300 ${imageClassName}`}
          />

          {/* Softbox foil highlight reflection overlay */}
          {!shouldReduceMotion && (
            <motion.div
              style={{
                x: enable3D ? highlightX : 0,
                opacity: enable3D ? highlightOpacity : 0.18,
              }}
              className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent pointer-events-none rounded-3xl mix-blend-overlay"
              aria-hidden="true"
            />
          )}
        </div>

        {/* Realistic ground contact shadow underneath the pouch base */}
        <div className="relative w-full flex items-center justify-center -mt-2 pointer-events-none" aria-hidden="true">
          {/* Deep immediate contact shadow */}
          <motion.div
            style={{
              x: enable3D ? shadowX : 0,
              scaleX: enable3D ? shadowScale : 1,
            }}
            className="w-36 sm:w-44 h-3 bg-black/60 rounded-full blur-[2px] scale-y-50"
          />
          {/* Diffuse ambient ground shadow */}
          <motion.div
            style={{
              x: enable3D ? shadowX : 0,
              scaleX: enable3D ? shadowScale : 1,
            }}
            className="absolute w-48 sm:w-60 h-6 bg-black/30 rounded-full blur-[6px] scale-y-40 -z-1"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ProductStage3D;
