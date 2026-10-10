import React from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-brand-charcoal/5 flex flex-col h-full group">
      <Link to={`/product/${product.id}`} className="block relative pt-[100%] overflow-hidden bg-brand-charcoal/5">
        <img 
          src={product.image} 
          alt={product.name} 
          className="absolute inset-0 w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
        />
        {product.badges && product.badges.length > 0 && (
          <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
            {product.badges.map(badge => (
              <span key={badge} className="bg-brand-red text-white text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wide">
                {badge}
              </span>
            ))}
          </div>
        )}
      </Link>
      <div className="p-6 flex flex-col flex-grow">
        <div className="text-xs font-semibold text-brand-emerald uppercase tracking-wider mb-2">
          {product.category}
        </div>
        <Link to={`/product/${product.id}`} className="hover:text-brand-emerald transition-colors">
          <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-2">{product.name}</h3>
        </Link>
        <p className="text-brand-charcoal/70 text-sm mb-6 flex-grow">
          {product.shortDescription}
        </p>
        <Link 
          to={`/product/${product.id}`} 
          className="w-full text-center py-2.5 px-4 border border-brand-emerald text-brand-emerald rounded font-medium hover:bg-brand-emerald hover:text-white transition-colors mt-auto"
        >
          View Options
        </Link>
      </div>
    </div>
  );
};

export default ProductCard;
