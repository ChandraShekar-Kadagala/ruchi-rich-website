import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 280, damping: 22 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-forest/15 overflow-hidden flex flex-col h-full group relative"
    >
      {/* =========================================================================
          PHASE 4: 3D SACHET STAGE
          Realistic studio lighting, contact base shadow, and multi-layered depth
          ========================================================================= */}
      <Link
        to={`/product/${product.id}`}
        className="block relative pt-[108%] overflow-hidden bg-gradient-to-b from-brand-ivory via-white to-brand-emerald/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
        aria-label={`View details for ${product.name}`}
      >
        {/* Soft Studio Radial Spotlight */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 rounded-full bg-radial from-brand-gold/15 via-brand-emerald/[0.06] to-transparent blur-2xl group-hover:scale-110 transition-transform duration-700" />
        </div>

        {/* Softbox Studio Foil Highlight Reflection (Angle) */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-white/60 pointer-events-none opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

        {/* Realistic Elliptical Ground Contact Shadow */}
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 w-44 sm:w-48 h-3.5 bg-gradient-to-r from-transparent via-black/40 to-transparent blur-[3px] rounded-full pointer-events-none transform group-hover:scale-95 group-hover:opacity-75 transition-all duration-500"
          aria-hidden="true"
        />

        {/* 3D Dimensional Pouch Image with Layered Shadows */}
        <img
          src={product.image}
          alt={`Authentic package of ${product.name} by RUCHI RICH`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain p-6 transform group-hover:scale-104 group-hover:-translate-y-1.5 transition-all duration-500 ease-out filter drop-shadow-[0_16px_22px_rgba(0,43,20,0.24)] drop-shadow-[0_4px_8px_rgba(0,0,0,0.12)]"
        />

        {/* Badges (Top Left) */}
        <div className="absolute top-3.5 left-3.5 flex flex-col gap-1.5 z-10">
          {product.badges?.map((badge) => (
            <span
              key={badge}
              className="bg-brand-red text-white text-xs font-bold tracking-wider uppercase px-2.5 py-1 rounded-full shadow-md backdrop-blur-xs"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Category Pill (Top Right) */}
        <span className="absolute top-3.5 right-3.5 text-xs font-bold tracking-wider uppercase px-3 py-1 rounded-full bg-brand-forest/90 text-brand-gold shadow-sm backdrop-blur-md border border-brand-gold/30">
          {product.category}
        </span>
      </Link>

      {/* =========================================================================
          PHASE 3: SIMPLIFIED HOMEPAGE CONTENT & TYPOGRAPHY
          Focus on discovery: Name, Tagline/Aroma, Readable Description, 1 Primary CTA
          ========================================================================= */}
      <div className="p-6 flex flex-col flex-grow justify-between">
        <div>
          {/* Product Name */}
          <Link
            to={`/product/${product.id}`}
            className="block text-brand-charcoal hover:text-brand-emerald transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-brand-emerald rounded"
          >
            <h3 className="text-xl sm:text-[23px] font-serif font-bold leading-snug line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* Tagline / Aroma Accent */}
          {product.tagline ? (
            <p className="text-sm font-semibold text-brand-emerald italic mt-1.5 line-clamp-1 flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
              <span>{product.tagline}</span>
            </p>
          ) : product.aromaProfile ? (
            <p className="text-sm font-medium text-brand-emerald/90 italic mt-1.5 line-clamp-1">
              {product.aromaProfile}
            </p>
          ) : null}

          {/* Body Description - 16px minimum with 1.6 line-height */}
          <p className="text-base text-brand-charcoal/80 mt-3 line-clamp-2 leading-relaxed font-light">
            {product.shortDescription}
          </p>
        </div>

        {/* Clear Primary Action Button */}
        <div className="mt-6 pt-4 border-t border-brand-charcoal/10">
          <Link
            to={`/product/${product.id}`}
            className="w-full py-3.5 px-5 rounded-xl text-base font-bold text-center bg-brand-emerald hover:bg-brand-forest text-white shadow-sm hover:shadow-md transition-all duration-200 flex items-center justify-center gap-2 group-hover:bg-brand-forest active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
          >
            <span>Explore Blend</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default ProductCard;
