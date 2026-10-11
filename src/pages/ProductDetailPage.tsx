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
        <p className="text-base text-brand-charcoal/70 mb-6">
          The spice product you requested is not available in our catalogue.
        </p>
        <Link
          to="/products"
          className="px-7 py-3.5 bg-brand-emerald text-white rounded-xl text-base font-bold hover:bg-brand-forest transition-colors shadow-md"
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
            className="inline-flex items-center text-sm sm:text-base font-bold text-brand-charcoal/80 hover:text-brand-emerald transition-colors group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
            <span>Back to Products</span>
          </button>

          <nav className="text-sm text-brand-charcoal/60 hidden sm:flex items-center gap-2" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-emerald">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-brand-emerald">Products</Link>
            <span>/</span>
            <span className="text-brand-charcoal font-bold truncate max-w-xs">{product.name}</span>
          </nav>
        </div>

        {/* Main Product Showcase Box */}
        <div className="bg-white rounded-3xl shadow-md border border-brand-forest/15 overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            {/* =========================================================================
                PHASE 4: 3D SACHET PRESENTATION STAGE (5 cols)
                ========================================================================= */}
            <div className="lg:col-span-5 bg-gradient-to-b from-brand-ivory via-white to-brand-emerald/[0.05] p-8 sm:p-12 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-r border-brand-charcoal/10 overflow-hidden">
              {/* Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-20">
                {product.badges?.map((badge) => (
                  <span
                    key={badge}
                    className="bg-brand-red text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-md"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              {/* Package Image Stage with 3D Depth */}
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center py-6"
              >
                {/* Soft Ambient Radial Backdrop */}
                <div className="absolute inset-0 bg-radial from-brand-gold/20 via-brand-emerald/[0.06] to-transparent rounded-full blur-3xl pointer-events-none" />

                {/* Softbox Studio Highlight Reflector */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-white/40 pointer-events-none rounded-2xl" />

                {/* Realistic Elliptical Ground Contact Shadow */}
                <div
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 w-52 sm:w-60 h-4 bg-gradient-to-r from-transparent via-black/45 to-transparent blur-[4px] rounded-full pointer-events-none"
                  aria-hidden="true"
                />

                {/* Packaging Visual with Multilayer Drop Shadow */}
                <img
                  src={product.image}
                  alt={`Representation of ${product.name} pouch by RUCHI RICH`}
                  className="max-h-full max-w-full object-contain filter drop-shadow-[0_20px_30px_rgba(0,43,20,0.28)] drop-shadow-[0_6px_12px_rgba(0,0,0,0.15)] z-10 transition-transform duration-500 hover:scale-102"
                />
              </motion.div>

              {/* Verified Purity Seal Under Image */}
              <div className="mt-4 flex items-center gap-2 text-xs sm:text-sm font-bold text-brand-emerald bg-brand-emerald/10 px-4 py-2 rounded-full z-10 border border-brand-emerald/20">
                <ShieldCheck className="w-4 h-4 text-brand-emerald" />
                <span>100% Pure & Active • No Artificial Colors</span>
              </div>
            </div>

            {/* =========================================================================
                PRODUCT INFORMATION & ORDERING CONTROLS (7 cols)
                ========================================================================= */}
            <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
              <div>
                {/* Category & Brand Metadata */}
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="px-3.5 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className="text-sm text-brand-charcoal/60 font-medium font-serif">
                    Ramraj Oil Industries
                  </span>
                </div>

                {/* Product Heading - 26-36px for prominent hierarchy */}
                <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-brand-charcoal leading-tight">
                  {product.name}
                </h1>

                {/* Tagline */}
                {product.tagline && (
                  <p className="text-base sm:text-lg font-semibold text-brand-gold mt-1.5 italic">
                    "{product.tagline}"
                  </p>
                )}

                {/* Product Description - 16px minimum with 1.65 line-height */}
                <p className="text-base sm:text-lg text-brand-charcoal/85 mt-5 leading-relaxed font-light">
                  {product.description}
                </p>

                {/* Flavor Notes & Aroma Highlights */}
                {(product.aromaProfile || (product.flavorNotes && product.flavorNotes.length > 0)) && (
                  <div className="mt-6 p-5 rounded-2xl bg-brand-ivory border border-brand-charcoal/10 space-y-3">
                    {product.aromaProfile && (
                      <div className="flex items-start gap-2.5 text-sm sm:text-base">
                        <Sparkles className="w-4 h-4 text-brand-gold flex-shrink-0 mt-1" />
                        <div>
                          <strong className="text-brand-charcoal font-semibold">Aroma Profile:</strong>{' '}
                          <span className="text-brand-charcoal/80 font-light">{product.aromaProfile}</span>
                        </div>
                      </div>
                    )}
                    {product.flavorNotes && (
                      <div className="flex items-center gap-2.5 text-sm sm:text-base flex-wrap pt-1">
                        <Flame className="w-4 h-4 text-brand-red flex-shrink-0" />
                        <span className="font-semibold text-brand-charcoal">Key Flavor Notes:</span>
                        {product.flavorNotes.map((note) => (
                          <span
                            key={note}
                            className="px-3 py-1 rounded-full bg-white border border-brand-charcoal/15 text-xs sm:text-sm font-medium text-brand-charcoal shadow-2xs"
                          >
                            {note}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}

                {/* =========================================================================
                    PACKAGE SELECTION (Step 1)
                    Neutral labels: Small Pack, Regular Pack, Large Pack, Bulk Pack
                    ========================================================================= */}
                <div className="mt-8 pt-6 border-t border-brand-charcoal/10">
                  <div className="flex items-center justify-between mb-3.5">
                    <label className="text-sm font-bold uppercase tracking-wider text-brand-charcoal flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand-emerald text-white text-xs flex items-center justify-center font-sans font-bold">1</span>
                      <span>Select Package Variant</span>
                    </label>
                    <span className="text-xs text-brand-charcoal/60">
                      Standard Commercial Packaging
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {product.options.map((option) => {
                      const isSelected = selectedOptionId === option.id;
                      return (
                        <button
                          key={option.id}
                          type="button"
                          onClick={() => setSelectedOptionId(option.id)}
                          className={`py-3.5 px-3 rounded-xl text-sm sm:text-base font-bold text-center transition-all flex flex-col items-center justify-center gap-1.5 border-2 ${
                            isSelected
                              ? 'border-brand-emerald bg-brand-emerald/10 text-brand-emerald shadow-sm ring-1 ring-brand-emerald/20'
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

                {/* =========================================================================
                    QUANTITY SELECTION (Step 2)
                    ========================================================================= */}
                <div className="mt-6 flex flex-col sm:flex-row sm:items-center gap-5">
                  <div>
                    <label className="text-sm font-bold uppercase tracking-wider text-brand-charcoal block mb-2.5 flex items-center gap-2">
                      <span className="w-5 h-5 rounded-full bg-brand-emerald text-white text-xs flex items-center justify-center font-sans font-bold">2</span>
                      <span>Select Quantity</span>
                    </label>
                    <div className="inline-flex items-center border border-brand-charcoal/25 rounded-xl bg-brand-ivory p-1.5 shadow-2xs">
                      <button
                        type="button"
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-brand-charcoal hover:bg-white hover:text-brand-emerald transition-colors active:scale-95"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-14 text-center text-base sm:text-lg font-bold text-brand-charcoal">
                        {quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 rounded-lg flex items-center justify-center text-brand-charcoal hover:bg-white hover:text-brand-emerald transition-colors active:scale-95"
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
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-forest text-brand-gold rounded-xl text-sm font-bold shadow-md self-end sm:self-center"
                      >
                        <Check className="w-4 h-4 text-brand-gold" />
                        <span>Added to basket!</span>
                        <button
                          onClick={openDrawer}
                          className="ml-2 underline text-white hover:text-brand-gold"
                        >
                          Open basket
                        </button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>

              {/* Action Buttons - 16px minimum */}
              <div className="mt-8 pt-8 border-t border-brand-charcoal/10 flex flex-col sm:flex-row gap-3.5">
                <button
                  type="button"
                  onClick={handleAddToCart}
                  disabled={!selectedOption}
                  className="flex-1 py-4 px-6 rounded-xl font-bold text-base bg-brand-emerald hover:bg-brand-forest text-white transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Basket</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="flex-1 py-4 px-6 rounded-xl font-bold text-base bg-[#25D366] hover:bg-[#20ba59] text-white transition-all duration-200 shadow-md hover:shadow-lg flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order Directly on WhatsApp</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Culinary Uses Section */}
        {product.culinaryUses && product.culinaryUses.length > 0 && (
          <div className="mt-16 bg-white p-8 sm:p-10 rounded-3xl border border-brand-forest/15 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-brand-emerald/10 text-brand-emerald">
                <ChefHat className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-brand-charcoal">
                  Culinary Applications & Pairings
                </h3>
                <p className="text-sm text-brand-charcoal/70">
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
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-gold flex-shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-brand-charcoal">{use}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <div className="text-center mb-10">
              <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal">
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
