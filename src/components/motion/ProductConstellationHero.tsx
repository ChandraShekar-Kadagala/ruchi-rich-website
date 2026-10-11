import React, { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { products } from '../../data/products';
import { brandEase } from '../../utils/motion';
import { FloatingBotanical } from './FloatingSpiceBotanicals';

interface ConstellationProductConfig {
  id: string;
  name: string;
  image: string;
  category: string;
  tier: 1 | 2 | 3;
  // Desktop offsets from composition center (px)
  desktopX: number;
  desktopY: number;
  desktopRot: number;
  desktopScale: number;
  // Mobile offsets from composition center (px)
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

  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === 'undefined') return true;
    return window.innerWidth >= 1024;
  });

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

  const getProduct = (id: string) => products.find((p) => p.id === id) || products[0];

  /*
   * CONSTELLATION LAYOUT DESIGN NOTES
   * ────────────────────────────────────────────────────────────────
   * Container: max-w-[760px] desktop, full-width mobile
   * Half-width at 760px = 380px.
   * Image base height: h-44 (176px) at lg. Scale 0.82 → ~144px tall.
   * Wide packets (432×578): aspect ~0.75 → width at 144px tall ≈ 108px.
   * Wide packets at scale 1.0 with h-44 → 176px tall, 132px wide.
   * So outermost packet center must stay within 380 - 66 = 314px from center.
   *
   * Desktop layout: spread ±210px (outer), ±100px (inner back), ±140px (mid)
   * Mobile layout: spread ±90px (outer), ±30px (inner), ±60px (mid)
   * Vertical: back = -60px, mid = -10px, front = +35px from center
   * Mobile: back = -50px, mid = -5px, front = +28px
   * ────────────────────────────────────────────────────────────────
   */
  const constellation: ConstellationProductConfig[] = [
    // TIER 3 BACK ROW: 4 packets arced above middle & front rows
    {
      id: 'rasam-powder',
      name: getProduct('rasam-powder').name,
      image: getProduct('rasam-powder').image,
      category: getProduct('rasam-powder').category,
      tier: 3,
      desktopX: -175,
      desktopY: -45,
      desktopRot: -5,
      desktopScale: 0.78,
      mobileX: -90,
      mobileY: -48,
      mobileRot: -4,
      mobileScale: 0.56,
      zIndex: 10,
      entranceDelay: 0.1,
    },
    {
      id: 'coriander-powder',
      name: getProduct('coriander-powder').name,
      image: getProduct('coriander-powder').image,
      category: getProduct('coriander-powder').category,
      tier: 3,
      desktopX: -55,
      desktopY: -60,
      desktopRot: -1,
      desktopScale: 0.80,
      mobileX: -28,
      mobileY: -58,
      mobileRot: -1,
      mobileScale: 0.58,
      zIndex: 13,
      entranceDelay: 0.15,
    },
    {
      id: 'mutton-masala',
      name: getProduct('mutton-masala').name,
      image: getProduct('mutton-masala').image,
      category: getProduct('mutton-masala').category,
      tier: 3,
      desktopX: 55,
      desktopY: -60,
      desktopRot: 1,
      desktopScale: 0.80,
      mobileX: 28,
      mobileY: -58,
      mobileRot: 1,
      mobileScale: 0.58,
      zIndex: 13,
      entranceDelay: 0.2,
    },
    {
      id: 'sambar-powder',
      name: getProduct('sambar-powder').name,
      image: getProduct('sambar-powder').image,
      category: getProduct('sambar-powder').category,
      tier: 3,
      desktopX: 175,
      desktopY: -45,
      desktopRot: 5,
      desktopScale: 0.78,
      mobileX: 90,
      mobileY: -48,
      mobileRot: 4,
      mobileScale: 0.56,
      zIndex: 10,
      entranceDelay: 0.25,
    },

    // TIER 2 MID ROW: 2 flanking packets between back and front rows
    {
      id: 'chicken-masala',
      name: getProduct('chicken-masala').name,
      image: getProduct('chicken-masala').image,
      category: getProduct('chicken-masala').category,
      tier: 2,
      desktopX: -145,
      desktopY: -10,
      desktopRot: -2.5,
      desktopScale: 0.88,
      mobileX: -62,
      mobileY: -10,
      mobileRot: -2,
      mobileScale: 0.64,
      zIndex: 20,
      entranceDelay: 0.3,
    },
    {
      id: 'biryani-masala',
      name: getProduct('biryani-masala').name,
      image: getProduct('biryani-masala').image,
      category: getProduct('biryani-masala').category,
      tier: 2,
      desktopX: 145,
      desktopY: -10,
      desktopRot: 2.5,
      desktopScale: 0.88,
      mobileX: 62,
      mobileY: -10,
      mobileRot: 2,
      mobileScale: 0.64,
      zIndex: 20,
      entranceDelay: 0.35,
    },

    // TIER 1 FOREGROUND: 3 hero packets anchored on the stage
    {
      id: 'red-chilli-powder',
      name: getProduct('red-chilli-powder').name,
      image: getProduct('red-chilli-powder').image,
      category: getProduct('red-chilli-powder').category,
      tier: 1,
      desktopX: -96,
      desktopY: 34,
      desktopRot: -1.5,
      desktopScale: 0.96,
      mobileX: -40,
      mobileY: 28,
      mobileRot: -1.5,
      mobileScale: 0.72,
      zIndex: 30,
      entranceDelay: 0.4,
    },
    {
      id: 'turmeric-powder',
      name: getProduct('turmeric-powder').name,
      image: getProduct('turmeric-powder').image,
      category: getProduct('turmeric-powder').category,
      tier: 1,
      desktopX: 0,
      desktopY: 40,
      desktopRot: 0,
      desktopScale: 1.04,
      mobileX: 0,
      mobileY: 32,
      mobileRot: 0,
      mobileScale: 0.78,
      zIndex: 35,
      entranceDelay: 0.45,
    },
    {
      id: 'garam-masala',
      name: getProduct('garam-masala').name,
      image: getProduct('garam-masala').image,
      category: getProduct('garam-masala').category,
      tier: 1,
      desktopX: 96,
      desktopY: 34,
      desktopRot: 1.5,
      desktopScale: 0.96,
      mobileX: 40,
      mobileY: 28,
      mobileRot: 1.5,
      mobileScale: 0.72,
      zIndex: 30,
      entranceDelay: 0.5,
    },
  ];

  return (
    /*
     * CONTAINER SIZING
     * Desktop: max-w-[760px] to keep outermost packet (±210px center offset +
     *   half-packet-width ~70px) well inside the 380px half-width limit.
     * Height: tall enough so top of back row (center - 62px - ~143px tall back packet)
     *   doesn't clip. Center of a 460px tall container is 230px from top.
     *   Top of back packet ≈ 230 - 62 - 72 = ~96px from top → safe.
     *   Bottom of front row ≈ 230 + 40 + 88 = 358px → inside 460px.
     * Mobile: h-[340px]. Center at 170px. Back top ≈ 170 - 58 - 80 = 32px → fine.
     *   Bottom front ≈ 170 + 32 + 126 = 328px → inside 340px.
     * Overflow is NOT hidden on this element — clipping must be controlled by
     *   the section's overflow-x-clip only (not overflow-y).
     */
    <div
      ref={containerRef}
      className="relative w-full max-w-[760px] h-[340px] sm:h-[400px] lg:h-[460px] xl:h-[500px] flex items-center justify-center select-none"
    >
      {/* Floating Botanical Spice Accents */}
      <FloatingBotanical
        type="star-anise"
        className="absolute -top-2 left-2 sm:left-6 w-8 h-8 sm:w-9 sm:h-9 z-5 pointer-events-none opacity-70"
        duration={6.8}
        delay={0.2}
      />
      <FloatingBotanical
        type="cardamom"
        className="absolute top-2 right-4 sm:right-8 w-7 h-7 sm:w-8 sm:h-8 z-5 pointer-events-none opacity-70"
        duration={5.6}
        delay={0.7}
      />
      <FloatingBotanical
        type="clove"
        className="absolute bottom-10 left-4 sm:left-8 w-6 h-6 sm:w-7 sm:h-7 z-5 pointer-events-none opacity-65"
        duration={6.2}
        delay={1.1}
      />
      <FloatingBotanical
        type="cinnamon"
        className="absolute bottom-8 right-6 sm:right-10 w-7 h-7 sm:w-9 sm:h-9 z-5 pointer-events-none opacity-65"
        duration={7.1}
        delay={0.5}
      />

      {/* Ambient radial spotlight behind constellation */}
      <div
        className="absolute inset-0 m-auto w-[88%] h-[88%] rounded-full bg-radial from-brand-gold/18 via-brand-emerald/12 to-transparent blur-3xl pointer-events-none -z-10"
        aria-hidden="true"
      />

      {/* Elliptical ground pedestal stage */}
      <div
        className="absolute bottom-[60px] sm:bottom-[68px] lg:bottom-[75px] w-[88%] max-w-[540px] h-16 sm:h-22 lg:h-24 rounded-[100%] bg-gradient-to-b from-brand-gold/22 via-brand-emerald/15 to-transparent border border-brand-gold/30 shadow-[0_0_32px_rgba(214,165,42,0.16)] pointer-events-none -z-5"
        style={{ transform: 'rotateX(66deg)' }}
        aria-hidden="true"
      >
        <div className="absolute inset-2 rounded-[100%] border border-brand-gold/20" />
      </div>

      {/* Constellation render canvas — overflow visible so packets never clip */}
      <div className="relative w-full h-full flex items-center justify-center pointer-events-none overflow-visible">
        {constellation.map((item) => {
          const isHovered = hoveredProductId === item.id;
          const targetX = isDesktop ? item.desktopX : item.mobileX;
          const targetY = isDesktop ? item.desktopY : item.mobileY;
          const targetRot = isDesktop ? item.desktopRot : item.mobileRot;
          const targetScale = isDesktop ? item.desktopScale : item.mobileScale;

          return (
            /* Outer placement div: fixed position in layout, never altered by hover */
            <div
              key={item.id}
              style={{
                transform: `translate3d(${targetX}px, ${targetY}px, 0)`,
                zIndex: item.zIndex,
              }}
              className="absolute flex items-center justify-center pointer-events-none"
            >
              {/* Entrance animation wrapper — fades in from opacity 0, no Y translation on entrance */}
              <motion.div
                initial={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: shouldReduceMotion ? 0 : 0.55,
                  delay: item.entranceDelay,
                  ease: brandEase,
                }}
                className="relative pointer-events-auto cursor-pointer"
                onMouseEnter={() => !isTouchDevice && setHoveredProductId(item.id)}
                onMouseLeave={() => !isTouchDevice && setHoveredProductId(null)}
              >
                <Link
                  to={`/product/${item.id}`}
                  className="block relative focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold rounded-xl"
                  aria-label={`View ${item.name} — ${item.category}`}
                >
                  {/* Product image: absolutely stable position, only brightness/shadow changes on hover */}
                  <img
                    src={item.image}
                    alt={`Authentic ${item.name} packaging by RUCHI RICH`}
                    loading={item.tier === 1 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`h-36 sm:h-44 lg:h-44 xl:h-48 w-auto object-contain transition-all duration-200 ${
                      isHovered
                        ? 'brightness-[1.06] filter drop-shadow-[0_18px_22px_rgba(214,165,42,0.35)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.30)]'
                        : 'filter drop-shadow-[0_10px_14px_rgba(0,35,15,0.50)] drop-shadow-[0_2px_4px_rgba(0,0,0,0.20)]'
                    }`}
                    style={{
                      transform: `rotate(${targetRot}deg) scale(${targetScale})`,
                      transformOrigin: 'bottom center',
                    }}
                  />

                  {/* Ground contact shadow */}
                  <div
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2/3 h-1.5 bg-black/50 rounded-full blur-[2px] pointer-events-none"
                    aria-hidden="true"
                  />

                  {/* Subtle hover foil sheen */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-tr from-transparent via-white/15 to-transparent rounded-xl mix-blend-overlay pointer-events-none transition-opacity duration-200 ${
                      isHovered ? 'opacity-100' : 'opacity-0'
                    }`}
                    aria-hidden="true"
                  />
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductConstellationHero;
