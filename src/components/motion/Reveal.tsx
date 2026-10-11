import React from 'react';
import { motion, useReducedMotion, Variants } from 'framer-motion';
import {
  fadeUpVariants,
  fadeDownVariants,
  slideInLeftVariants,
  slideInRightVariants,
  scaleRevealVariants,
  fadeInVariants,
  defaultViewport,
} from '../../utils/motion';

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  variants?: Variants;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  delay?: number;
  duration?: number;
  amount?: number;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  className = '',
  variants,
  direction = 'up',
  delay = 0,
  amount = 0.15,
}) => {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const getVariant = (): Variants => {
    if (variants) return variants;
    switch (direction) {
      case 'down':
        return fadeDownVariants;
      case 'left':
        return slideInLeftVariants;
      case 'right':
        return slideInRightVariants;
      case 'scale':
        return scaleRevealVariants;
      case 'fade':
        return fadeInVariants;
      case 'up':
      default:
        return fadeUpVariants;
    }
  };

  const selectedVariants = getVariant();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ ...defaultViewport, amount }}
      variants={{
        hidden: selectedVariants.hidden,
        visible: {
          ...selectedVariants.visible,
          transition: {
            // @ts-expect-error framer-motion transition spread
            ...(selectedVariants.visible?.transition || {}),
            delay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
