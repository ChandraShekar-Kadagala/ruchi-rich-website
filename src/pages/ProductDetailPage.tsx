import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowLeft,
  Check,
  Plus,
  Minus,
  ShoppingBag,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Flame,
  ChefHat,
  PackageCheck
} from 'lucide-react';
import { products } from '../data/products';
import { useCartStore } from '../store/useCartStore';
import { contactConfig } from '../config/contact';
import ProductCard from '../components/products/ProductCard';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((state) => state.addItem);
  const openDrawer = useCartStore((state) => state.openDrawer);

  const [selectedOptionId, setSelectedOptionId] = useState<string>(
    product?.options[0]?.id || ''
  );
  const [quantity, setQuantity] = useState(1);
  const [showFeedback, setShowFeedback] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-ivory px-4 text-center">
        <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-4">Product Not Found</h2>
        <p className="text-sm text-brand-charcoal/70 mb-6">
          The spice product you requested is not available in our catalogue.
        </p>
        <Link
          to="/products"
          className="px-6 py-3 bg-brand-emerald text-white rounded-xl text-sm font-bold hover:bg-brand-forest transition-colors shadow-md"
        >
          Return to Catalogue
        </Link>
      </div>
    );
  }

  const selectedOption = product.options.find((o) => o.id === selectedOptionId);

  const handleAddToCart = () => {
    if (!selectedOption) return;
    addItem(product, selectedOption, quantity);
    setShowFeedback(true);
    setTimeout(() => setShowFeedback(false), 3000);
  };

  const handleDirectWhatsApp = () => {
    if (!selectedOption) return;
    const directMessage = `Hello RUCHI RICH Team,\n\nI would like to enquire about:\n- Product: ${product.name}\n- Package: ${selectedOption.label}\n- Quantity: ${quantity}\n\nPlease confirm availability and share quotation details.\n\nThank you!`;
    const link = `https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(directMessage)}`;
    window.open(link, '_blank');
  };

  const relatedProducts = products
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="py-10 sm:py-16 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between mb-8">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center text-xs sm:text-sm font-bold text-brand-charcoal/70 hover:text-brand-emerald transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Products</span>
          </button>

          <nav className="text-xs text-brand-charcoal/50 hidden sm:flex items-center gap-1.5" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-emerald">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-brand-emerald">Products</Link>
            <span>/</span>
            <span className="text-brand-charcoal font-semibold truncate max-w-xs">{product.name}</span>
          </nav>
        </div>

        {/* Main Product Showcase Box */}
        <div className="bg-white rounded-3xl shadow-md border border-brand-forest/10 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* Visual Column (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-brand-ivory via-brand-emerald/[0.04] to-brand-emerald/[0.08] p-8 sm:p-12 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-r border-brand-charcoal/10">
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                {product.badges?.map((badge) => (
                  <span
                    key={badge}
                    className="bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Package Image Stage */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-md aspect-square flex items-center justify-center"
              >
                {/* Soft ambient radial backdrop */}
                <div className="absolute inset-0 bg-brand-gold/[0.08] rounded-full blur-2xl" />
                <img
                  src={product.image}
                  alt={`Package representation of ${product.name} by RUCHI RICH`}
                  className="max-h-full max-w-full object-contain filter drop-shadow-2xl z-10"
                />
              </motion.div>

              {/* Verified Purity Seal Under Image */}
              <div className="mt-6 flex items-center gap-2 text-xs font-bold text-brand-emerald bg-brand-emerald/10 px-4 py-1.5 rounded-full z-10">
                <ShieldCheck className="w-4 h-4" />
                <span>100% Pure & Active • No Artificial Colors</span>
              </div>
            </div>

            {/* Information Column (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className="text-xs text-brand-charcoal/50 font-medium font-serif">
                    Ramraj Oil Industries
                  </span>
                </div>

                <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal leading-tight">
                  {product.name}
                </h1>

                {product.tagline && (
                  <p className="text-sm font-semibold text-brand-gold mt-1 italic">
                    "{product.tagline}"
                  </p>
                )}

                <p className="text-sm sm:text-base text-brand-charcoal/80 mt-5 leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Flavor Notes & Aroma Highlights */}
                {(product.aromaProfile || (product.flavorNotes && product.flavorNotes.length > 0)) && (
                  <div className="mt-6 p-4 rounded-2xl bg-brand-ivory border border-brand-charcoal/10 space-y-2">
                    {product.aromaProfile && (
                      <div className="flex items-start gap-2 text-xs">
                        <Sparkles className="w-4 h-4 text-brand-gold flex-shrink-0 mt-0.5" />
                        <div>
                          <strong className="text-brand-charcoal font-semibold">Aroma Profile:</strong>{' '}
                          <span className="text-brand-charcoal/70">{product.aromaProfile}</span>
                        </div>
                      </div>
                    )}
                    {product.flavorNotes && (
                      <div className="flex items-center gap-2 text-xs flex-wrap pt-1">
                        <Flame className="w-4 h-4 text-brand-red flex-shrink-0" />
                        <span className="font-semibold text-brand-charcoal">Key Notes:</span>
                        {product.flavorNotes.map((note) => (
                          <span
                            key={note}
                            className="px-2.5 py-0.5 rounded-full bg-white border border-brand-charcoal/10 text-[11px] font-medium text-brand-charcoal"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* Package Size Selection */}
                <div className="mt-8">
                  <div className="flex items-center justify-between mb-3">
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal">
                      Step 1: Choose Package Variant
                    </label>
                    <span className="text-[11px] text-brand-charcoal/60">
                      Standard Commercial Packaging
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {product.options.map((option) => {
                      const isSelected = selectedOptionId === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setSelectedOptionId(option.id)}
                          className={`py-3 px-3 rounded-xl text-xs font-bold text-center transition-all flex flex-col items-center justify-center gap-1 border-2 ${
                            isSelected
                              ? 'border-brand-emerald bg-brand-emerald/10 text-brand-emerald shadow-sm'
                              : 'border-brand-charcoal/15 bg-brand-ivory text-brand-charcoal/80 hover:border-brand-emerald/40'
                          }`}
                        >
                          <PackageCheck className={`w-4 h-4 ${isSelected ? 'text-brand-emerald' : 'text-brand-charcoal/40'}`} />
                          <span>{option.label}</span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Quantity Adjustment */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-4">
                  <div>
                    <label className="text-xs font-bold uppercase tracking-wider text-brand-charcoal block mb-2">
                      Step 2: Select Quantity
                    </label>
                    <div className="inline-flex items-center border border-brand-charcoal/20 rounded-xl bg-brand-ivory p-1">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-brand-charcoal hover:bg-white hover:text-brand-emerald transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center text-sm font-bold text-brand-charcoal">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-brand-charcoal hover:bg-white hover:text-brand-emerald transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Feedback Notification if added */}
                  <AnimatePresence>
                    {showFeedback && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="inline-flex items-center gap-2 px-4 py-2 bg-brand-forest text-brand-gold rounded-xl text-xs font-bold shadow-md"
                      >
                        <Check className="w-4 h-4 text-brand-gold" />
                        <span>Added to basket!</span>
                        <button
                          onClick={openDrawer}
                          className="ml-2 underline text-white hover:text-brand-gold"
                        >
                          View basket
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 pt-8 border-t border-brand-charcoal/10 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={!selectedOption}
                  className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm bg-brand-emerald hover:bg-brand-forest text-white transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Basket</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="flex-1 py-3.5 px-6 rounded-xl font-bold text-sm bg-[#25D366] hover:bg-[#20ba59] text-white transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-98"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Directly on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Culinary Uses Section */}
        {product.culinaryUses && product.culinaryUses.length > 0 && (
          <div className="mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-brand-forest/10 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2.5 rounded-xl bg-brand-emerald/10 text-brand-emerald">
                <ChefHat className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-serif font-bold text-brand-charcoal">
                  Culinary Applications & Pairings
                </h3>
                <p className="text-xs text-brand-charcoal/60">
                  Recommended culinary pairings for {product.name}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {product.culinaryUses.map((use, i) => (
                <div
                  key={i}
                  className="p-4 rounded-xl bg-brand-ivory border border-brand-charcoal/10 flex items-center gap-3"
                >
                  <div className="w-2 h-2 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="text-xs font-semibold text-brand-charcoal">{use}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-serif font-bold text-brand-charcoal">
                More from {product.category}
              </h3>
              <div className="mt-2 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
