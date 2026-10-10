import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { ArrowLeft, Check, Plus, Minus } from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/useCartStore';

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.id === id);
  const addItem = useCartStore(state => state.addItem);

  const [selectedOptionId, setSelectedOptionId] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const [showSuccess, setShowSuccess] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center bg-brand-ivory">
        <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Product Not Found</h2>
        <Link to="/products" className="text-brand-emerald hover:underline">Return to Catalogue</Link>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedOptionId) {
      alert("Please select a package size.");
      return;
    }
    const option = product.options.find(o => o.id === selectedOptionId);
    if (option) {
      addItem(product, option, quantity);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    }
  };

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="py-12 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center text-brand-charcoal/60 hover:text-brand-emerald mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to previous
        </button>

        <div className="bg-white rounded-2xl shadow-sm border border-brand-charcoal/10 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            
            {/* Image Gallery */}
            <div className="bg-brand-charcoal/5 p-8 flex items-center justify-center relative min-h-[400px]">
              <img 
                src={product.image} 
                alt={product.name} 
                className="max-w-full max-h-[500px] object-contain mix-blend-multiply"
              />
              {product.badges && product.badges.length > 0 && (
                <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                  {product.badges.map(badge => (
                    <span key={badge} className="bg-brand-red text-white text-sm font-bold px-3 py-1.5 rounded-sm uppercase tracking-wide shadow-md">
                      {badge}
                    </span>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div className="p-8 md:p-12 flex flex-col">
              <div className="text-sm font-semibold text-brand-emerald uppercase tracking-wider mb-2">
                {product.category}
              </div>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-brand-charcoal mb-4">
                {product.name}
              </h1>
              <p className="text-brand-charcoal/70 text-lg mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <h3 className="text-sm font-bold text-brand-charcoal mb-4 uppercase tracking-wide">Select Package Size</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.options.map(option => (
                    <button
                      key={option.id}
                      onClick={() => setSelectedOptionId(option.id)}
                      className={`py-3 px-4 rounded-lg border-2 text-sm font-medium transition-all ${
                        selectedOptionId === option.id 
                          ? 'border-brand-emerald bg-brand-emerald/5 text-brand-emerald' 
                          : 'border-brand-charcoal/10 text-brand-charcoal hover:border-brand-emerald/50'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="flex items-center gap-6 mb-8 mt-auto">
                <div className="flex items-center border border-brand-charcoal/20 rounded-lg">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-brand-charcoal hover:text-brand-emerald transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-12 text-center font-medium text-brand-charcoal">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-brand-charcoal hover:text-brand-emerald transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>

                <button
                  onClick={handleAddToCart}
                  disabled={!selectedOptionId}
                  className={`flex-1 py-3 px-6 rounded-lg font-bold text-lg transition-all flex justify-center items-center ${
                    selectedOptionId 
                      ? 'bg-brand-emerald text-white hover:bg-brand-forest shadow-md hover:shadow-lg' 
                      : 'bg-brand-charcoal/10 text-brand-charcoal/40 cursor-not-allowed'
                  }`}
                >
                  {showSuccess ? (
                    <><Check className="mr-2 h-5 w-5" /> Added to Cart</>
                  ) : (
                    'Add to Cart'
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-24">
            <h2 className="text-2xl font-serif font-bold text-brand-charcoal mb-8 text-center">You might also like</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {relatedProducts.map(p => (
                <Link key={p.id} to={`/product/${p.id}`} className="group bg-white rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow border border-brand-charcoal/5 flex items-center gap-4">
                  <div className="w-20 h-20 bg-brand-charcoal/5 rounded-lg flex items-center justify-center p-2 flex-shrink-0">
                    <img src={p.image} alt={p.name} className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-charcoal group-hover:text-brand-emerald transition-colors">{p.name}</h4>
                    <p className="text-xs text-brand-charcoal/60 uppercase mt-1">{p.category}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
