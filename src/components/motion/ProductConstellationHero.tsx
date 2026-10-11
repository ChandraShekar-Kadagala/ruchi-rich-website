import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionValue, useSpring, useTransform, useReducedMotion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { products } from '../../data/products';
import { brandEase, brandSpring } from '../../utils/motion';

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
}

export const ProductConstellationHero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [hoveredProductId, setHoveredProductId] = useState<string | null>(null);

  // Lazy check for touch device during initialization
  const [isTouchDevice] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 1024;
  });

  // Master pointer tracking for coordinated 3D tilt
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 28, stiffness: 220, mass: 0.6 };
  const parentRotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), springConfig);
  const parentRotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3.5, 3.5]), springConfig);

  // Tier-specific parallax translation springs
  const tier1ParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), springConfig);
  const tier1ParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-6, 6]), springConfig);

  const tier2ParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-14, 14]), springConfig);
  const tier2ParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-10, 10]), springConfig);

  const tier3ParallaxX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), springConfig);
  const tier3ParallaxY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-14, 14]), springConfig);

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

  // Art-directed 9-product constellation layout
  const constellation: ConstellationProductConfig[] = [
    // TIER 1: Foreground Row (3 visual anchors)
    {
      id: 'turmeric-powder',
      name: getProduct('turmeric-powder').name,
      tagline: getProduct('turmeric-powder').tagline || 'Golden Vitality',
      image: getProduct('turmeric-powder').image,
      category: getProduct('turmeric-powder').category,
      tier: 1,
      desktopX: 0,
      desktopY: 34,
      desktopRot: 0,
      desktopScale: 1.04,
      mobileX: 0,
      mobileY: 28,
      mobileRot: 0,
      mobileScale: 0.88,
      zIndex: 35,
      entranceDelay: 0.42,
    },
    {
      id: 'red-chilli-powder',
      name: getProduct('red-chilli-powder').name,
      tagline: getProduct('red-chilli-powder').tagline || 'Fiery Warmth',
      image: getProduct('red-chilli-powder').image,
      category: getProduct('red-chilli-powder').category,
      tier: 1,
      desktopX: -136,
      desktopY: 44,
      desktopRot: -3,
      desktopScale: 0.98,
      mobileX: -76,
      mobileY: 36,
      mobileRot: -3,
      mobileScale: 0.8,
      zIndex: 32,
      entranceDelay: 0.46,
    },
    {
      id: 'garam-masala',
      name: getProduct('garam-masala').name,
      tagline: getProduct('garam-masala').tagline || 'Royal Bouquet',
      image: getProduct('garam-masala').image,
      category: getProduct('garam-masala').category,
      tier: 1,
      desktopX: 136,
      desktopY: 44,
      desktopRot: 3.5,
      desktopScale: 0.98,
      mobileX: 76,
      mobileY: 36,
      mobileRot: 3.5,
      mobileScale: 0.8,
      zIndex: 32,
      entranceDelay: 0.5,
    },

    // TIER 2: Middle Row (3 elevated blends)
    {
      id: 'chicken-masala',
      name: getProduct('chicken-masala').name,
      tagline: getProduct('chicken-masala').tagline || 'Robust & Savory',
      image: getProduct('chicken-masala').image,
      category: getProduct('chicken-masala').category,
      tier: 2,
      desktopX: -224,
      desktopY: -12,
      desktopRot: -5.5,
      desktopScale: 0.88,
      mobileX: -122,
      mobileY: -4,
      mobileRot: -5.5,
      mobileScale: 0.68,
      zIndex: 22,
      entranceDelay: 0.28,
    },
    {
      id: 'biryani-masala',
      name: getProduct('biryani-masala').name,
      tagline: getProduct('biryani-masala').tagline || 'Regal Saffron Aroma',
      image: getProduct('biryani-masala').image,
      category: getProduct('biryani-masala').category,
      tier: 2,
      desktopX: 0,
      desktopY: -32,
      desktopRot: 1.5,
      desktopScale: 0.88,
      mobileX: 0,
      mobileY: -18,
      mobileRot: 1.5,
      mobileScale: 0.72,
      zIndex: 24,
      entranceDelay: 0.32,
    },
    {
      id: 'sambar-powder',
      name: getProduct('sambar-powder').name,
      tagline: getProduct('sambar-powder').tagline || 'Heritage Lentils',
      image: getProduct('sambar-powder').image,
      category: getProduct('sambar-powder').category,
      tier: 2,
      desktopX: 224,
      desktopY: -12,
      desktopRot: 5,
      desktopScale: 0.88,
      mobileX: 122,
      mobileY: -4,
      mobileRot: 5,
      mobileScale: 0.68,
      zIndex: 22,
      entranceDelay: 0.36,
    },

    // TIER 3: Back Row (3 crowning spices)
    {
      id: 'rasam-powder',
      name: getProduct('rasam-powder').name,
      tagline: getProduct('rasam-powder').tagline || 'Roasted Cumin & Pepper',
      image: getProduct('rasam-powder').image,
      category: getProduct('rasam-powder').category,
      tier: 3,
      desktopX: -168,
      desktopY: -78,
      desktopRot: -7,
      desktopScale: 0.76,
      mobileX: -92,
      mobileY: -46,
      mobileRot: -7,
      mobileScale: 0.58,
      zIndex: 12,
      entranceDelay: 0.15,
    },
    {
      id: 'mutton-masala',
      name: getProduct('mutton-masala').name,
      tagline: getProduct('mutton-masala').tagline || 'Deep Roasted Spice',
      image: getProduct('mutton-masala').image,
      category: getProduct('mutton-masala').category,
      tier: 3,
      desktopX: 12,
      desktopY: -88,
      desktopRot: -1,
      desktopScale: 0.74,
      mobileX: 6,
      mobileY: -54,
      mobileRot: -1,
      mobileScale: 0.56,
      zIndex: 11,
      entranceDelay: 0.18,
    },
    {
      id: 'coriander-powder',
      name: getProduct('coriander-powder').name,
      tagline: getProduct('coriander-powder').tagline || 'Citrus Herbal Freshness',
      image: getProduct('coriander-powder').image,
      category: getProduct('coriander-powder').category,
      tier: 3,
      desktopX: 168,
      desktopY: -78,
      desktopRot: 7,
      desktopScale: 0.76,
      mobileX: 92,
      mobileY: -46,
      mobileRot: 7,
      mobileScale: 0.58,
      zIndex: 12,
      entranceDelay: 0.22,
    },
  ];

  const enable3D = !shouldReduceMotion && !isTouchDevice;

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-[360px] sm:h-[440px] lg:h-[520px] xl:h-[560px] flex items-center justify-center select-none"
      style={{ perspective: enable3D ? 1100 : undefined }}
    >
      {/* Ambient warm radial halo illuminating the constellation center */}
      <div
        className="absolute inset-0 m-auto w-[90%] h-[90%] rounded-full bg-radial from-brand-gold/25 via-brand-emerald/20 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Architectural ground pedestal stage with golden rim reflection */}
      <div
        className="absolute bottom-4 sm:bottom-6 w-[85%] max-w-[560px] h-28 sm:h-36 rounded-[100%] bg-gradient-to-b from-brand-gold/20 via-brand-emerald/25 to-black/50 border border-brand-gold/30 shadow-[0_0_40px_rgba(214,165,42,0.18)] pointer-events-none -z-5"
        style={{ transform: 'rotateX(68deg)' }}
        aria-hidden="true"
      >
        <div className="absolute inset-3 rounded-[100%] border border-brand-gold/25" />
      </div>

      {/* Main 3D Constellation Canvas */}
      <motion.div
        animate={
          !shouldReduceMotion
            ? {
                y: [-3.5, 3.5, -3.5],
                transition: {
                  duration: 5.4,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: 'easeInOut',
                },
              }
            : undefined
        }
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

          return (
            <motion.div
              key={item.id}
              initial={
                !shouldReduceMotion
                  ? { opacity: 0, y: 35, scale: 0.85 }
                  : { opacity: 0 }
              }
              animate={
                !shouldReduceMotion
                  ? { opacity: 1, y: 0, scale: 1 }
                  : { opacity: 1 }
              }
              transition={{
                duration: 0.75,
                delay: item.entranceDelay,
                ease: brandEase,
              }}
              style={{
                x: enable3D ? parallaxX : 0,
                y: enable3D ? parallaxY : 0,
                zIndex: isHovered ? 50 : item.zIndex,
              }}
              className="absolute flex items-center justify-center cursor-pointer group"
              onMouseEnter={() => !isTouchDevice && setHoveredProductId(item.id)}
              onMouseLeave={() => !isTouchDevice && setHoveredProductId(null)}
            >
              {/* Responsive Offset Wrapper */}
              <div
                className="relative transition-transform duration-300 ease-out group-hover:scale-108 group-hover:-translate-y-2.5"
                style={{
                  transform: `translate3d(var(--x), var(--y), 0) rotate(var(--rot)) scale(var(--scale))`,
                }}
              >
                {/* CSS variables for responsive coordinates */}
                <style
                  dangerouslySetInnerHTML={{
                    __html: `
                      [data-constellation-id="${item.id}"] {
                        --x: ${item.mobileX}px;
                        --y: ${item.mobileY}px;
                        --rot: ${item.mobileRot}deg;
                        --scale: ${item.mobileScale};
                      }
                      @media (min-width: 1024px) {
                        [data-constellation-id="${item.id}"] {
                          --x: ${item.desktopX}px;
                          --y: ${item.desktopY}px;
                          --rot: ${item.desktopRot}deg;
                          --scale: ${item.desktopScale};
                        }
                      }
                    `,
                  }}
                />

                <Link
                  to={`/product/${item.id}`}
                  data-constellation-id={item.id}
                  className="block relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-2xl"
                  aria-label={`View ${item.name} (${item.category})`}
                >
                  {/* Spice Pouch Asset */}
                  <img
                    src={item.image}
                    alt={`Authentic ${item.name} packaging by RUCHI RICH`}
                    loading={item.tier === 1 ? 'eager' : 'lazy'}
                    decoding="async"
                    className="h-32 sm:h-44 md:h-52 lg:h-64 w-auto object-contain filter drop-shadow-[0_16px_22px_rgba(0,35,15,0.38)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.22)]"
                  />

                  {/* Soft contact shadow beneath packet base */}
                  <div
                    className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-3/4 h-2.5 bg-black/55 rounded-full blur-[2.5px] scale-y-50 pointer-events-none group-hover:opacity-75 transition-opacity"
                    aria-hidden="true"
                  />

                  {/* Specular softbox foil sheen overlay */}
                  <div
                    className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/18 to-transparent rounded-2xl mix-blend-overlay pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
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
                    className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-[#051C10]/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-brand-gold/50 shadow-xl whitespace-nowrap pointer-events-none z-50 flex items-center gap-2"
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
              </div>
            </motion.div>
          );
        })}
      </motion.div>

      {/* Mobile Badge / Discovery Pill */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 lg:hidden bg-brand-forest/90 backdrop-blur-md px-4 py-1.5 rounded-full border border-brand-gold/30 shadow-md flex items-center gap-2 pointer-events-none">
        <Sparkles className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
        <span className="text-xs text-brand-ivory font-medium">
          All 9 Authentic Spice Blends • Tap to explore
        </span>
      </div>
    </div>
  );
};

export default ProductConstellationHero;
