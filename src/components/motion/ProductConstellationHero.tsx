import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { products } from '../../data/products';
import { brandEase, brandSpring } from '../../utils/motion';
import { FloatingBotanical } from './FloatingSpiceBotanicals';

interface ConstellationProductConfig {
  id: string;
  name: string;
  tagline: string;
  image: string;
  category: string;
  tier: 1 | 2 | 3; // 1 = Foreground, 2 = Middle, 3 = Back
  // Desktop offsets (px)
  desktopX: number;
  desktopY: number;
  desktopRot: number;
  desktopScale: number;
  // Mobile offsets (px)
  mobileX: number;
  mobileY: number;
  mobileRot: number;
  mobileScale: number;
  zIndex: number;
  entranceDelay: number;
  floatDuration: number;
  floatDelay: number;
}

export const ProductConstellationHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  // Responsive screen size tracking
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= 1024;
  });

  // Touch device detection
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mql = window.matchMedia('(min-width: 1024px)');
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  // Master pointer tracking for coordinated 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const parentRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig);
  const parentRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3.5, 3.5]), springConfig);

  // Tier-specific parallax translation springs for rich physical depth
  const tier1ParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), springConfig);
  const tier1ParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-8, 8]), springConfig);

  const tier2ParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-7, 7]), springConfig);
  const tier2ParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-5, 5]), springConfig);

  const tier3ParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);
  const tier3ParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-2, 2]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (shouldReduceMotion || isTouchDevice || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
    setHoveredProductId(null);
  };

  // Find actual products in database
  const getProduct = (id: string) => products.find((p) => p.id === id) || products[0];

  // Art-directed 9-product constellation layout: ALL 9 AUTHENTIC PRODUCTS FULLY VISIBLE
  const constellation: ConstellationProductConfig[] = [
    // TIER 3: Elevated Back Arc (4 crowning spices spread across background)
    {
      id: 'rasam-powder',
      name: getProduct('rasam-powder').name,
      tagline: getProduct('rasam-powder').tagline || 'Roasted Cumin & Pepper',
      image: getProduct('rasam-powder').image,
      category: getProduct('rasam-powder').category,
      tier: 3,
      desktopX: -260,
      desktopY: -95,
      desktopRot: -9,
      desktopScale: 0.72,
      mobileX: -105,
      mobileY: -48,
      mobileRot: -8,
      mobileScale: 0.56,
      zIndex: 12,
      entranceDelay: 0.15,
      floatDuration: 6.4,
      floatDelay: 0,
    },
    {
      id: 'coriander-powder',
      name: getProduct('coriander-powder').name,
      tagline: getProduct('coriander-powder').tagline || 'Citrus Herbal Freshness',
      image: getProduct('coriander-powder').image,
      category: getProduct('coriander-powder').category,
      tier: 3,
      desktopX: -95,
      desktopY: -115,
      desktopRot: -3,
      desktopScale: 0.75,
      mobileX: -36,
      mobileY: -58,
      mobileRot: -2,
      mobileScale: 0.58,
      zIndex: 14,
      entranceDelay: 0.18,
      floatDuration: 5.8,
      floatDelay: 0.4,
    },
    {
      id: 'mutton-masala',
      name: getProduct('mutton-masala').name,
      tagline: getProduct('mutton-masala').tagline || 'Deep Roasted Spice',
      image: getProduct('mutton-masala').image,
      category: getProduct('mutton-masala').category,
      tier: 3,
      desktopX: 95,
      desktopY: -115,
      desktopRot: 3,
      desktopScale: 0.75,
      mobileX: 36,
      mobileY: -58,
      mobileRot: 2,
      mobileScale: 0.58,
      zIndex: 14,
      entranceDelay: 0.22,
      floatDuration: 6.0,
      floatDelay: 0.8,
    },
    {
      id: 'sambar-powder',
      name: getProduct('sambar-powder').name,
      tagline: getProduct('sambar-powder').tagline || 'Heritage Lentils',
      image: getProduct('sambar-powder').image,
      category: getProduct('sambar-powder').category,
      tier: 3,
      desktopX: 260,
      desktopY: -95,
      desktopRot: 9,
      desktopScale: 0.72,
      mobileX: 105,
      mobileY: -48,
      mobileRot: 8,
      mobileScale: 0.56,
      zIndex: 12,
      entranceDelay: 0.25,
      floatDuration: 6.6,
      floatDelay: 1.2,
    },

    // TIER 2: Middle Depth (2 aromatic blends bridging the wings)
    {
      id: 'chicken-masala',
      name: getProduct('chicken-masala').name,
      tagline: getProduct('chicken-masala').tagline || 'Robust & Savory',
      image: getProduct('chicken-masala').image,
      category: getProduct('chicken-masala').category,
      tier: 2,
      desktopX: -180,
      desktopY: -15,
      desktopRot: -5.5,
      desktopScale: 0.88,
      mobileX: -78,
      mobileY: -10,
      mobileRot: -5,
      mobileScale: 0.66,
      zIndex: 22,
      entranceDelay: 0.28,
      floatDuration: 5.2,
      floatDelay: 0.3,
    },
    {
      id: 'biryani-masala',
      name: getProduct('biryani-masala').name,
      tagline: getProduct('biryani-masala').tagline || 'Regal Saffron Aroma',
      image: getProduct('biryani-masala').image,
      category: getProduct('biryani-masala').category,
      tier: 2,
      desktopX: 180,
      desktopY: -15,
      desktopRot: 5.5,
      desktopScale: 0.88,
      mobileX: 78,
      mobileY: -10,
      mobileRot: 5,
      mobileScale: 0.66,
      zIndex: 22,
      entranceDelay: 0.32,
      floatDuration: 5.4,
      floatDelay: 0.7,
    },

    // TIER 1: Prominent Foreground Trio (3 visual anchors grounded on pedestal)
    {
      id: 'red-chilli-powder',
      name: getProduct('red-chilli-powder').name,
      tagline: getProduct('red-chilli-powder').tagline || 'Fiery Warmth',
      image: getProduct('red-chilli-powder').image,
      category: getProduct('red-chilli-powder').category,
      tier: 1,
      desktopX: -105,
      desktopY: 48,
      desktopRot: -3.5,
      desktopScale: 0.98,
      mobileX: -55,
      mobileY: 26,
      mobileRot: -3,
      mobileScale: 0.78,
      zIndex: 32,
      entranceDelay: 0.38,
      floatDuration: 4.8,
      floatDelay: 0.2,
    },
    {
      id: 'turmeric-powder',
      name: getProduct('turmeric-powder').name,
      tagline: getProduct('turmeric-powder').tagline || 'Golden Vitality',
      image: getProduct('turmeric-powder').image,
      category: getProduct('turmeric-powder').category,
      tier: 1,
      desktopX: 0,
      desktopY: 42,
      desktopRot: 0,
      desktopScale: 1.05,
      mobileX: 0,
      mobileY: 20,
      mobileRot: 0,
      mobileScale: 0.84,
      zIndex: 35,
      entranceDelay: 0.42,
      floatDuration: 5.0,
      floatDelay: 0.5,
    },
    {
      id: 'garam-masala',
      name: getProduct('garam-masala').name,
      tagline: getProduct('garam-masala').tagline || 'Royal Bouquet',
      image: getProduct('garam-masala').image,
      category: getProduct('garam-masala').category,
      tier: 1,
      desktopX: 105,
      desktopY: 48,
      desktopRot: 3.5,
      desktopScale: 0.98,
      mobileX: 55,
      mobileY: 26,
      mobileRot: 3,
      mobileScale: 0.78,
      zIndex: 32,
      entranceDelay: 0.46,
      floatDuration: 4.9,
      floatDelay: 0.9,
    },
  ];

  const enable3D = !shouldReduceMotion && !isTouchDevice;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[330px] sm:h-[420px] lg:h-[540px] xl:h-[600px] flex items-center justify-center select-none"
      style={{ perspective: enable3D ? 1200 : undefined }}
    >
      {/* Floating Botanical Spice Accents (Environmental depth matching Crown Date's botanical motifs) */}
      <FloatingBotanical
        type="star-anise"
        className="absolute -top-3 left-6 sm:left-12 w-10 h-10 sm:w-12 sm:h-12 z-10"
        duration={6.8}
        delay={0.2}
      />
      <FloatingBotanical
        type="cardamom"
        className="absolute top-8 right-8 sm:right-16 w-8 h-8 sm:w-10 sm:h-10 z-10"
        duration={5.6}
        delay={0.7}
      />
      <FloatingBotanical
        type="clove"
        className="absolute bottom-12 left-10 sm:left-20 w-8 h-8 sm:w-9 sm:h-9 z-10"
        duration={6.2}
        delay={1.1}
      />
      <FloatingBotanical
        type="cinnamon"
        className="absolute bottom-8 right-10 sm:right-24 w-10 h-10 sm:w-12 sm:h-12 z-10"
        duration={7.1}
        delay={0.5}
      />

      {/* Script Accent Note (Inspired by Crown Date's "Goodness In Every Bite") */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: brandEase }}
        className="absolute -top-5 sm:-top-8 right-4 sm:right-10 pointer-events-none hidden lg:block z-30"
      >
        <span className="font-serif italic text-brand-gold text-base xl:text-lg tracking-wide drop-shadow-md flex items-center gap-1.5">
          <Sparkles className="w-4 h-4 text-brand-gold/80" />
          <span>Nine Pure Traditions • Ground to Perfection</span>
        </span>
      </motion.div>

      {/* Ambient warm radial spotlight illuminating the constellation center */}
      <div
        className="absolute inset-0 m-auto w-[92%] h-[92%] rounded-full bg-radial from-brand-gold/25 via-brand-emerald/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Architectural ground pedestal stage with golden rim reflection beneath all 9 packets */}
      <div
        className="absolute bottom-4 sm:bottom-6 w-[92%] max-w-[660px] h-20 sm:h-36 rounded-[100%] bg-gradient-to-b from-brand-gold/25 via-brand-emerald/20 to-black/60 border border-brand-gold/35 shadow-[0_0_45px_rgba(214,165,42,0.2)] pointer-events-none -z-5"
        style={{ transform: 'rotateX(68deg)' }}
        aria-hidden="true"
      >
        <div className="absolute inset-2 sm:inset-3 rounded-[100%] border border-brand-gold/25" />
      </div>

      {/* Main 3D Constellation Canvas */}
      <motion.div
        style={{
          transformStyle: enable3D ? 'preserve-3d' : undefined,
          rotateX: enable3D ? parentRotateX : 0,
          rotateY: enable3D ? parentRotateY : 0,
        }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {constellation.map((item) => {
          const isHovered = hoveredProductId === item.id;
          const parallaxX =
            item.tier === 1 ? tier1ParallaxX : item.tier === 2 ? tier2ParallaxX : tier3ParallaxX;
          const parallaxY =
            item.tier === 1 ? tier1ParallaxY : item.tier === 2 ? tier2ParallaxY : tier3ParallaxY;

          // Responsive coordinate resolution
          const targetX = isDesktop ? item.desktopX : item.mobileX;
          const targetY = isDesktop ? item.desktopY : item.mobileY;
          const targetRot = isDesktop ? item.desktopRot : item.mobileRot;
          const baseScale = isDesktop ? item.desktopScale : item.mobileScale;

          return (
            <motion.div
              key={item.id}
              initial={
                !shouldReduceMotion
                  ? { opacity: 0, y: targetY + 35, scale: baseScale * 0.85 }
                  : { opacity: 0 }
              }
              animate={
                !shouldReduceMotion
                  ? {
                      opacity: 1,
                      x: targetX,
                      y: isHovered
                        ? targetY - 14
                        : [targetY - 3.5, targetY + 3.5, targetY - 3.5],
                      scale: isHovered ? baseScale * 1.08 : baseScale,
                      rotate: isHovered ? targetRot * 0.5 : targetRot,
                    }
                  : {
                      opacity: 1,
                      x: targetX,
                      y: targetY,
                      scale: baseScale,
                      rotate: targetRot,
                    }
              }
              transition={
                !shouldReduceMotion && !isHovered
                  ? {
                      opacity: { duration: 0.65, delay: item.entranceDelay, ease: brandEase },
                      x: { duration: 0.65, delay: item.entranceDelay, ease: brandEase },
                      y: {
                        duration: item.floatDuration,
                        delay: item.floatDelay,
                        repeat: Infinity,
                        repeatType: 'reverse',
                        ease: 'easeInOut',
                      },
                      scale: { duration: 0.65, delay: item.entranceDelay, ease: brandEase },
                      rotate: { duration: 0.65, delay: item.entranceDelay, ease: brandEase },
                    }
                  : { duration: 0.28, ease: brandEase }
              }
              style={{
                zIndex: isHovered ? 60 : item.zIndex,
              }}
              className="absolute flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => !isTouchDevice && setHoveredProductId(item.id)}
              onMouseLeave={() => !isTouchDevice && setHoveredProductId(null)}
            >
              {/* Parallax Layer Wrapper */}
              <motion.div
                style={{
                  x: enable3D ? parallaxX : 0,
                  y: enable3D ? parallaxY : 0,
                }}
                className="relative"
              >
                <Link
                  to={`/product/${item.id}`}
                  className="block relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-2xl"
                  aria-label={`View ${item.name} (${item.category})`}
                >
                  {/* Spice Pouch Asset */}
                  <img
                    src={item.image}
                    alt={`Authentic ${item.name} packaging by RUCHI RICH`}
                    loading={item.tier === 1 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-32 sm:h-44 md:h-52 lg:h-64 w-auto object-contain filter drop-shadow-[0_16px_22px_rgba(0,35,15,0.42)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.24)] transition-filter duration-300 group-hover:drop-shadow-[0_22px_28px_rgba(214,165,42,0.35)]"
                  />

                  {/* Soft contact shadow beneath packet base */}
                  <div
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3/4 h-2.5 bg-black/60 rounded-full blur-[2.5px] scale-y-50 pointer-events-none group-hover:opacity-85 transition-opacity"
                    aria-hidden="true"
                  />

                  {/* Specular softbox foil sheen overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent rounded-2xl mix-blend-overlay pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    aria-hidden="true"
                  />
                </Link>

                {/* Floating Interactive Product Tooltip Pill (Desktop Hover) */}
                {!isTouchDevice && isHovered && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.95 }}
                    transition={brandSpring}
                    className="absolute -bottom-11 left-1/2 -translate-x-1/2 bg-[#051C10]/95 backdrop-blur-md px-4 py-1.5 rounded-xl border border-brand-gold/60 shadow-2xl whitespace-nowrap pointer-events-none z-50 flex items-center gap-2.5"
                  >
                    <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
                    <div>
                      <span className="text-xs font-serif font-bold text-brand-gold block">
                        {item.name}
                      </span>
                      <span className="text-[10px] text-brand-ivory/80 block font-light">
                        {item.tagline}
                      </span>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Mobile Badge / Discovery Pill */}
      <div className="absolute -bottom-1 sm:bottom-0 left-1/2 -translate-x-1/2 lg:hidden bg-brand-forest/95 backdrop-blur-md px-3.5 py-1 rounded-full border border-brand-gold/30 shadow-md flex items-center gap-1.5 pointer-events-none whitespace-nowrap z-40">
        <Sparkles className="w-3 h-3 text-brand-gold flex-shrink-0" />
        <span className="text-[11px] text-brand-ivory font-medium">
          All 9 Authentic Spice Blends • Tap to explore
        </span>
      </div>
    </div>
  );
};

export default ProductConstellationHero;
