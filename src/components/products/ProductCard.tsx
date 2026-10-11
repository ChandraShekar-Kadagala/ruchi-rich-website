import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShoppingBag, Check } from 'lucide-react';
import { Product } from '../../types/product';
import { useCartStore } from '../../store/useCartStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedOptionId, setSelectedOptionId] = useState(product.options[0]?.id || 'regular');
  const [isAdded, setIsAdded] = useState(false);
  const addItem = useCartStore((state) => state.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const opt = product.options.find((o) => o.id === selectedOptionId) || product.options[0];
    if (opt) {
      addItem(product, opt, 1);
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-brand-forest/10 overflow-hidden flex flex-col h-full group relative"
    >
      {/* Product Image Stage */}
      <Link
        to={`/product/${product.id}`}
        className="block relative pt-[105%] overflow-hidden bg-gradient-to-b from-brand-ivory to-brand-emerald/[0.03]"
        aria-label={`View details for ${product.name}`}
      >
        {/* Soft Circular Pedestal */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-56 h-56 rounded-full bg-brand-emerald/[0.04] blur-xl group-hover:scale-110 transition-transform duration-500" />
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={`Package mockup of ${product.name} by RUCHI RICH`}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-contain p-6 transform group-hover:scale-108 transition-transform duration-500 ease-out"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.badges?.map((badge) => (
            <span
              key={badge}
              className="bg-brand-red text-white text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full shadow-md"
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Subtle Category Tag */}
        <span className="absolute top-3 right-3 text-[10px] font-bold tracking-wider uppercase px-2 py-0.5 rounded bg-brand-emerald/10 text-brand-emerald backdrop-blur-sm">
          {product.category}
        </span>
      </Link>

      {/* Card Information */}
      <div className="p-5 sm:p-6 flex flex-col flex-grow">
        <Link to={`/product/${product.id}`} className="group-hover:text-brand-emerald transition-colors">
          <h3 className="text-lg sm:text-xl font-serif font-bold text-brand-charcoal leading-snug line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {product.tagline && (
          <p className="text-xs text-brand-emerald font-medium italic mt-1 line-clamp-1">
            "{product.tagline}"
          </p>
        )}

        <p className="text-xs text-brand-charcoal/70 mt-2 line-clamp-2 leading-relaxed flex-grow">
          {product.shortDescription}
        </p>

        {/* Package Selector Pills */}
        <div className="mt-4 pt-4 border-t border-brand-charcoal/10">
          <span className="block text-[11px] font-semibold text-brand-charcoal/60 uppercase tracking-wider mb-2">
            Available Sizes
          </span>
          <div className="grid grid-cols-2 gap-1.5">
            {product.options.map((opt) => (
              <button
                key={opt.id}
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedOptionId(opt.id);
                }}
                className={`py-1 px-2 rounded-lg text-xs font-medium text-center transition-all ${
                  selectedOptionId === opt.id
                    ? 'bg-brand-emerald text-white shadow-sm ring-1 ring-brand-emerald'
                    : 'bg-brand-ivory text-brand-charcoal/80 border border-brand-charcoal/15 hover:border-brand-emerald/40'
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="mt-5 grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={handleQuickAdd}
            className={`w-full py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all shadow-sm ${
              isAdded
                ? 'bg-brand-forest text-white'
                : 'bg-brand-emerald text-white hover:bg-brand-forest active:scale-95'
            }`}
          >
            {isAdded ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add to Basket</span>
              </>
            )}
          </button>

          <Link
            to={`/product/${product.id}`}
            className="w-full py-2.5 px-3 rounded-xl text-xs font-bold border border-brand-emerald/30 text-brand-emerald hover:bg-brand-emerald/10 flex items-center justify-center gap-1 transition-colors"
          >
            <span>Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
