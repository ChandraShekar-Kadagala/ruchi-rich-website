import { Variants, Transition } from 'framer-motion';

// Premium brand easing curves inspired by luxury FMCG and automotive editorial design
export const brandEase: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const brandSpring: Transition = { type: 'spring', stiffness: 320, damping: 28 };
export const softSpring: Transition = { type: 'spring', stiffness: 220, damping: 24 };

// Reusable transition presets
export const smoothTransition: Transition = {
  duration: 0.6,
  ease: brandEase,
};

export const snappyTransition: Transition = {
  duration: 0.35,
  ease: brandEase,
};

export const floatTransition: Transition = {
  duration: 4.5,
  repeat: Infinity,
  repeatType: 'reverse',
  ease: 'easeInOut',
};

// =========================================================================
// REUSABLE VIEWPORT ENTRANCE VARIANTS
// =========================================================================

export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.55, ease: brandEase },
  },
};

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: brandEase },
  },
};

export const fadeDownVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: brandEase },
  },
};

export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: brandEase },
  },
};

export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 36 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: brandEase },
  },
};

export const scaleRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.93 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: brandEase },
  },
};

export const heroPouchRevealVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.85, ease: brandEase, delay: 0.2 },
  },
};

export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { stagger?: number; delay?: number } = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.stagger ?? 0.08,
      delayChildren: custom.delay ?? 0.05,
    },
  }),
};

export const staggerItemVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: brandEase },
  },
};

// Viewport trigger settings for smooth non-intrusive reveals
export const defaultViewport = {
  once: true,
  margin: '-40px',
  amount: 0.15 as const,
};

export const goldDividerVariants: Variants = {
  hidden: { scaleX: 0, opacity: 0 },
  visible: {
    scaleX: 1,
    opacity: 1,
    transition: { duration: 0.85, ease: brandEase, delay: 0.2 },
  },
};
