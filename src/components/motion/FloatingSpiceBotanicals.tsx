import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// Authentic Indian Spice Botanical SVG Paths in Warm Gold / Bronze Linework
export const StarAniseIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8 text-brand-gold/40' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* 8-pointed star anise botanical illustration */}
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* 8 Petal carpels radiating from center */}
      <path d="M32 32 C32 20 28 8 32 4 C36 8 32 20 32 32" fill="currentColor" fillOpacity="0.1" />
      <path d="M32 32 C32 44 36 56 32 60 C28 56 32 44 32 32" fill="currentColor" fillOpacity="0.1" />
      <path d="M32 32 C20 32 8 28 4 32 C8 36 20 32 32 32" fill="currentColor" fillOpacity="0.1" />
      <path d="M32 32 C44 32 56 36 60 32 C56 28 44 32 32 32" fill="currentColor" fillOpacity="0.1" />
      <path d="M32 32 C24 24 14 14 12 12 C14 10 24 24 32 32" fill="currentColor" fillOpacity="0.1" />
      <path d="M32 32 C40 40 50 50 52 52 C50 54 40 40 32 32" fill="currentColor" fillOpacity="0.1" />
      <path d="M32 32 C40 24 50 14 52 12 C54 14 40 24 32 32" fill="currentColor" fillOpacity="0.1" />
      <path d="M32 32 C24 40 14 50 12 52 C10 50 24 40 32 32" fill="currentColor" fillOpacity="0.1" />
      {/* Seed caruncle in center */}
      <circle cx="32" cy="32" r="4" fill="currentColor" fillOpacity="0.25" />
    </g>
  </svg>
);

export const CardamomPodIcon: React.FC<{ className?: string }> = ({ className = 'w-7 h-7 text-brand-gold/40' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Elegant fluted cardamom pod */}
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M32 6 C20 18 16 36 22 50 C26 56 38 56 42 50 C48 36 44 18 32 6 Z" fill="currentColor" fillOpacity="0.1" />
      <path d="M32 6 L32 54" strokeDasharray="2 2" />
      <path d="M26 18 C28 28 28 40 26 48" />
      <path d="M38 18 C36 28 36 40 38 48" />
      {/* Stem tip */}
      <path d="M32 6 L32 2" strokeWidth="2" />
    </g>
  </svg>
);

export const CloveSpiceIcon: React.FC<{ className?: string }> = ({ className = 'w-6 h-6 text-brand-gold/40' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Authentic whole clove flower bud */}
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Stem / hypanthium */}
      <path d="M30 26 L26 56 C26 58 38 58 38 56 L34 26 Z" fill="currentColor" fillOpacity="0.1" />
      {/* Sepal crown */}
      <path d="M22 24 C26 26 38 26 42 24" />
      <path d="M20 20 L24 24" />
      <path d="M44 20 L40 24" />
      {/* Central rounded unopened flower bud */}
      <circle cx="32" cy="16" r="8" fill="currentColor" fillOpacity="0.2" />
    </g>
  </svg>
);

export const CinnamonQuillIcon: React.FC<{ className?: string }> = ({ className = 'w-8 h-8 text-brand-gold/40' }) => (
  <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-hidden="true">
    {/* Curled cinnamon bark quill */}
    <g stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 18 L46 50" />
      <path d="M18 14 L50 46" />
      <path d="M14 18 C10 16 12 10 18 14" />
      <path d="M46 50 C42 48 44 42 50 46" />
      <path d="M22 22 L38 38" strokeDasharray="3 3" />
    </g>
  </svg>
);

interface FloatingBotanicalProps {
  type: 'star-anise' | 'cardamom' | 'clove' | 'cinnamon';
  className?: string;
  xOffset?: number;
  yOffset?: number;
  duration?: number;
  delay?: number;
  rotateRange?: [number, number];
  scale?: number;
}

export const FloatingBotanical: React.FC<FloatingBotanicalProps> = ({
  type,
  className = '',
  duration = 6,
  delay = 0,
  rotateRange = [-6, 6],
  scale = 1,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const renderIcon = () => {
    switch (type) {
      case 'star-anise':
        return <StarAniseIcon className="w-full h-full text-brand-gold/30 hover:text-brand-gold/60 transition-colors" />;
      case 'cardamom':
        return <CardamomPodIcon className="w-full h-full text-brand-gold/30 hover:text-brand-gold/60 transition-colors" />;
      case 'clove':
        return <CloveSpiceIcon className="w-full h-full text-brand-gold/30 hover:text-brand-gold/60 transition-colors" />;
      case 'cinnamon':
        return <CinnamonQuillIcon className="w-full h-full text-brand-gold/30 hover:text-brand-gold/60 transition-colors" />;
    }
  };

  return (
    <motion.div
      animate={
        !shouldReduceMotion
          ? {
              y: [-8, 8, -8],
              rotate: rotateRange,
              scale: [scale, scale * 1.05, scale],
            }
          : undefined
      }
      transition={{
        duration,
        delay,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
      className={`pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      {renderIcon()}
    </motion.div>
  );
};
