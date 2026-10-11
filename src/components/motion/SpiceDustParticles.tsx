import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export const SpiceDustParticles: React.FC<{ className?: string }> = ({ className = '' }) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) return null;

  // 6 sparse, lightweight decorative spice dust specks
  const particles = [
    { id: 1, top: '22%', left: '18%', size: 4, duration: 6, delay: 0 },
    { id: 2, top: '35%', left: '78%', size: 3, duration: 7.5, delay: 1.2 },
    { id: 3, top: '65%', left: '28%', size: 5, duration: 8, delay: 0.5 },
    { id: 4, top: '55%', left: '88%', size: 3.5, duration: 6.8, delay: 2 },
    { id: 5, top: '80%', left: '48%', size: 4, duration: 7.2, delay: 1.5 },
    { id: 6, top: '15%', left: '60%', size: 3, duration: 8.5, delay: 2.8 },
  ];

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-10 ${className}`}
      aria-hidden="true"
    >
      {particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{
            y: [-12, 12, -12],
            x: [-6, 6, -6],
            opacity: [0.2, 0.65, 0.2],
            scale: [0.85, 1.15, 0.85],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            repeatType: 'reverse',
            ease: 'easeInOut',
            delay: p.delay,
          }}
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
          }}
          className="absolute rounded-full bg-brand-gold/70 blur-[0.6px] shadow-[0_0_8px_rgba(214,165,42,0.8)]"
        />
      ))}
    </div>
  );
};

export default SpiceDustParticles;
