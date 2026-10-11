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

  const springConfig = { damping: 30, stiffness: 220, mass: 0.6 };
  const parentRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2.5, -2.5]), springConfig);
  const parentRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), springConfig);

  // Tier-specific parallax translation springs for rich physical depth
  const tier1ParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);
  const tier1ParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

  const tier2ParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-6, 6]), springConfig);
  const tier2ParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-4, 4]), springConfig);

  const tier3ParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2.5, 2.5]), springConfig);
  const tier3ParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-1.5, 1.5]), springConfig);

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

  // PRECISION 9-PRODUCT CONSTELLATION: All 9 products assigned distinct, non-overlapping windows
  const constellation: ConstellationProductConfig[] = [
    // TIER 3: Elevated Back Arc (4 crowning spices visible above the middle & foreground rows)
    {
      id: 'rasam-powder',
      name: getProduct('rasam-powder').name,
      tagline: getProduct('rasam-powder').tagline || 'Roasted Cumin & Pepper',
      image: getProduct('rasam-powder').image,
      category: getProduct('rasam-powder').category,
      tier: 3,
      desktopX: -330,
      desktopY: -95,
      desktopRot: -9,
      desktopScale: 0.72,
      mobileX: -105,
      mobileY: -42,
      mobileRot: -7,
      mobileScale: 0.54,
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
      desktopX: -80,
      desktopY: -75,
      desktopRot: -2,
      desktopScale: 0.75,
      mobileX: 0,
      mobileY: -56,
      mobileRot: 0,
      mobileScale: 0.60,
      zIndex: 18,
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
      desktopX: 80,
      desktopY: -75,
      desktopRot: 2,
      desktopScale: 0.75,
      mobileX: 55,
      mobileY: -50,
      mobileRot: 4,
      mobileScale: 0.58,
      zIndex: 15,
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
      desktopX: 330,
      desktopY: -95,
      desktopRot: 9,
      desktopScale: 0.72,
      mobileX: 105,
      mobileY: -42,
      mobileRot: 7,
      mobileScale: 0.54,
      zIndex: 12,
      entranceDelay: 0.25,
      floatDuration: 6.6,
      floatDelay: 1.2,
    },

    // TIER 2: Middle Depth Wings (Framing the composition without blocking center)
    {
      id: 'chicken-masala',
      name: getProduct('chicken-masala').name,
      tagline: getProduct('chicken-masala').tagline || 'Robust & Savory',
      image: getProduct('chicken-masala').image,
      category: getProduct('chicken-masala').category,
      tier: 2,
      desktopX: -265,
      desktopY: -10,
      desktopRot: -6,
      desktopScale: 0.86,
      mobileX: -55,
      mobileY: -50,
      mobileRot: -4,
      mobileScale: 0.58,
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
      desktopX: 265,
      desktopY: -10,
      desktopRot: 6,
      desktopScale: 0.86,
      mobileX: 80,
      mobileY: 28,
      mobileRot: 3,
      mobileScale: 0.72,
      zIndex: 22,
      entranceDelay: 0.32,
      floatDuration: 5.4,
      floatDelay: 0.7,
    },

    // TIER 1: Prominent Foreground Anchors (Clear spacing, zero label obstruction)
    {
      id: 'red-chilli-powder',
      name: getProduct('red-chilli-powder').name,
      tagline: getProduct('red-chilli-powder').tagline || 'Fiery Warmth',
      image: getProduct('red-chilli-powder').image,
      category: getProduct('red-chilli-powder').category,
      tier: 1,
      desktopX: -160,
      desktopY: 72,
      desktopRot: -2.5,
      desktopScale: 1.0,
      mobileX: -80,
      mobileY: 28,
      mobileRot: -3,
      mobileScale: 0.72,
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
      desktopY: 70,
      desktopRot: 0,
      desktopScale: 1.04,
      mobileX: -26,
      mobileY: 22,
      mobileRot: -1,
      mobileScale: 0.76,
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
      desktopX: 160,
      desktopY: 72,
      desktopRot: 2.5,
      desktopScale: 1.0,
      mobileX: 26,
      mobileY: 22,
      mobileRot: 1,
      mobileScale: 0.76,
      zIndex: 34,
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
      className="relative w-full max-w-[840px] h-[340px] sm:h-[440px] lg:h-[540px] xl:h-[580px] flex items-center justify-center select-none"
      style={{ perspective: enable3D ? 1200 : undefined }}
    >
      {/* Floating Botanical Spice Accents (Environmental depth with zero click interference) */}
      <FloatingBotanical
        type="star-anise"
        className="absolute -top-3 left-4 sm:left-10 w-9 h-9 sm:w-11 sm:h-11 z-10 pointer-events-none"
        duration={6.8}
        delay={0.2}
      />
      <FloatingBotanical
        type="cardamom"
        className="absolute top-6 right-6 sm:right-12 w-8 h-8 sm:w-9 sm:h-9 z-10 pointer-events-none"
        duration={5.6}
        delay={0.7}
      />
      <FloatingBotanical
        type="clove"
        className="absolute bottom-10 left-8 sm:left-16 w-7 h-7 sm:w-8 sm:h-8 z-10 pointer-events-none"
        duration={6.2}
        delay={1.1}
      />
      <FloatingBotanical
        type="cinnamon"
        className="absolute bottom-8 right-8 sm:right-18 w-9 h-9 sm:w-11 sm:h-11 z-10 pointer-events-none"
        duration={7.1}
        delay={0.5}
      />

      {/* Script Accent Note: Editorial Heritage Note */}
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
        className="absolute inset-0 m-auto w-[94%] h-[94%] rounded-full bg-radial from-brand-gold/25 via-brand-emerald/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Architectural ground pedestal stage with golden rim reflection beneath all 9 packets */}
      <div
        className="absolute bottom-4 sm:bottom-6 w-[94%] max-w-[700px] h-20 sm:h-36 rounded-[100%] bg-gradient-to-b from-brand-gold/25 via-brand-emerald/20 to-black/60 border border-brand-gold/35 shadow-[0_0_45px_rgba(214,165,42,0.2)] pointer-events-none -z-5"
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
        className="relative w-full h-full flex items-center justify-center pointer-events-none"
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
          const targetScale = isDesktop ? item.desktopScale : item.mobileScale;

          return (
            /* LAYER 1: OUTER PLACEMENT WRAPPER (Fixed position in layout space - NEVER shifts on hover) */
            <div
              key={item.id}
              style={{
                transform: `translate3d(${targetX}px, ${targetY}px, 0)`,
                zIndex: isHovered ? 50 : item.zIndex,
              }}
              className="absolute flex items-center justify-center pointer-events-none"
            >
              {/* LAYER 2: PARALLAX DEPTH WRAPPER */}
              <motion.div
                style={{
                  x: enable3D ? parallaxX : 0,
                  y: enable3D ? parallaxY : 0,
                }}
                className="relative"
              >
                {/* LAYER 3: DEDICATED INNER HOVER & BREATHING WRAPPER
                    CRITICAL COLLISION FIX:
                    - Lifts only on y (-8px max).
                    - ZERO scale change on hover, preventing collision with neighbours.
                    - Isolated from base layout transforms.
                    - Does NOT move adjacent packets. */}
                <motion.div
                  initial={
                    !shouldReduceMotion
                      ? { opacity: 0, y: 30 }
                      : { opacity: 0 }
                  }
                  animate={
                    !shouldReduceMotion
                      ? {
                          opacity: 1,
                          y: isHovered ? -8 : [-3, 3, -3],
                          rotate: targetRot,
                        }
                      : {
                          opacity: 1,
                          y: isHovered ? -6 : 0,
                          rotate: targetRot,
                        }
                  }
                  transition={
                    isHovered
                      ? { duration: 0.22, ease: [0.25, 1, 0.5, 1] }
                      : {
                          opacity: { duration: 0.6, delay: item.entranceDelay, ease: brandEase },
                          y: {
                            duration: item.floatDuration,
                            delay: item.floatDelay,
                            repeat: Infinity,
                            repeatType: 'reverse',
                            ease: 'easeInOut',
                          },
                          rotate: { duration: 0.2 },
                        }
                  }
                  className="relative pointer-events-auto cursor-pointer"
                  onMouseEnter={() => !isTouchDevice && setHoveredProductId(item.id)}
                  onMouseLeave={() => !isTouchDevice && setHoveredProductId(null)}
                >
                  <Link
                    to={`/product/${item.id}`}
                    className="block relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-2xl"
                    aria-label={`View ${item.name} (${item.category})`}
                  >
                    {/* Packaging Image: Base scale applied directly without hover inflation */}
                    <img
                      src={item.image}
                      alt={`Authentic ${item.name} packaging by RUCHI RICH`}
                      loading={item.tier === 1 ? 'eager' : 'lazy'}
                      decoding="async"
                      className={`h-36 sm:h-46 md:h-52 lg:h-56 xl:h-60 w-auto object-contain transition-all duration-300 ${
                        isHovered
                          ? 'filter drop-shadow-[0_22px_26px_rgba(214,165,42,0.45)] drop-shadow-[0_6px_12px_rgba(0,0,0,0.35)]'
                          : 'filter drop-shadow-[0_14px_18px_rgba(0,35,15,0.4)] drop-shadow-[0_3px_6px_rgba(0,0,0,0.22)]'
                      }`}
                      style={{
                        transform: `scale(${targetScale})`,
                        transformOrigin: 'bottom center',
                      }}
                    />

                    {/* Ground contact shadow beneath packet base */}
                    <div
                      className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3/4 h-2.5 bg-black/60 rounded-full blur-[2.5px] scale-y-50 pointer-events-none group-hover:opacity-85 transition-opacity"
                      aria-hidden="true"
                    />

                    {/* Specular foil highlight sheen */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/25 to-transparent rounded-2xl mix-blend-overlay pointer-events-none transition-opacity duration-300 ${
                        isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                      aria-hidden="true"
                    />
                  </Link>

                  {/* Stable Product Tooltip (Positioned above or below with pointer-events-none) */}
                  {!isTouchDevice && isHovered && (
                    <motion.div
                      initial={{ opacity: 0, y: 6, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 4, scale: 0.95 }}
                      transition={brandSpring}
                      className="absolute -bottom-11 left-1/2 -translate-x-1/2 bg-[#051C10]/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-brand-gold/60 shadow-2xl whitespace-nowrap pointer-events-none z-50 flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-ping" />
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
            </div>
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
