import React, { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
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
import { ProductStage3D, Reveal } from '../components/motion';
import { spiceThemes, defaultSpiceTheme } from '../utils/spiceThemes';
import { brandEase, brandSpring, staggerContainerVariants, staggerItemVariants } from '../utils/motion';

const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);
  const addItem = useCartStore((state) => state.addItem);
  const openDrawer = useCartStore((state) => state.openDrawer);
  const shouldReduceMotion = useReducedMotion();

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
    setTimeout(() => setShowFeedback(false), 3200);
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
            className="inline-flex items-center text-sm sm:text-base font-bold text-brand-charcoal/80 hover:text-brand-emerald transition-colors group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald rounded-lg"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transform group-hover:-translate-x-1.5 transition-transform" />
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
                PHASE D: 3D SACHET PRESENTATION STAGE (5 cols)
                ========================================================================= */}
            <div className="lg:col-span-5 bg-gradient-to-b from-brand-ivory via-white to-brand-emerald/[0.05] p-8 sm:p-12 flex flex-col items-center justify-center relative border-b lg:border-b-0 lg:border-r border-brand-charcoal/10 overflow-hidden">
              {/* Product-Specific Ambient Spice Glow */}
              <div
                className="absolute inset-0 m-auto w-4/5 h-4/5 rounded-full blur-3xl pointer-events-none opacity-40 -z-10"
                style={{
                  backgroundColor: (spiceThemes[product.id] || defaultSpiceTheme).primary,
                }}
                aria-hidden="true"
              />

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

              {/* Package Image Stage with 3D Depth & Cursor Spring Tilt */}
              <div className="w-full max-w-sm sm:max-w-md aspect-square flex items-center justify-center py-4 relative">
                <ProductStage3D
                  image={product.image}
                  alt={`Representation of ${product.name} pouch by RUCHI RICH`}
                  priority={true}
                  imageClassName="max-h-[340px] sm:max-h-[380px] w-auto"
                />
              </div>

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
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex items-center gap-2.5 mb-3"
                >
                  <span className="px-3.5 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-bold uppercase tracking-wider">
                    {product.category}
                  </span>
                  <span className="text-sm text-brand-charcoal/60 font-medium font-serif">
                    Ramraj Oil Industries
                  </span>
                </motion.div>

                {/* Product Heading - 26-36px for prominent hierarchy */}
                <motion.h1
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08, ease: brandEase }}
                  className="text-3xl sm:text-4xl lg:text-[40px] font-serif font-bold text-brand-charcoal leading-tight"
                >
                  {product.name}
                </motion.h1>

                {/* Tagline */}
                {product.tagline && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.16 }}
                    className="text-base sm:text-lg font-semibold text-brand-gold mt-1.5 italic"
                  >
                    "{product.tagline}"
                  </motion.p>
                )}

                {/* Product Description - 16px minimum with 1.65 line-height */}
                <motion.p
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.22, ease: brandEase }}
                  className="text-base sm:text-lg text-brand-charcoal/85 mt-5 leading-relaxed font-light"
                >
                  {product.description}
                </motion.p>

                {/* Flavor Notes & Aroma Highlights */}
                {(product.aromaProfile || (product.flavorNotes && product.flavorNotes.length > 0)) && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-6 p-5 rounded-2xl bg-brand-ivory border border-brand-charcoal/10 space-y-3"
                  >
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
                  </motion.div>
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
                        <motion.button
                          key={option.id}
                          type="button"
                          whileTap={!shouldReduceMotion ? { scale: 0.97 } : undefined}
                          whileHover={!shouldReduceMotion ? { y: -2 } : undefined}
                          onClick={() => setSelectedOptionId(option.id)}
                          className={`relative py-3.5 px-3 rounded-xl text-sm sm:text-base font-bold text-center transition-all flex flex-col items-center justify-center gap-1.5 border-2 ${
                            isSelected
                              ? 'border-brand-emerald bg-brand-emerald/10 text-brand-emerald shadow-sm'
                              : 'border-brand-charcoal/15 bg-brand-ivory text-brand-charcoal/80 hover:border-brand-emerald/40'
                          }`}
                        >
                          {isSelected && (
                            <motion.div
                              layoutId="activeVariantPill"
                              className="absolute inset-0 rounded-xl bg-brand-emerald/10 -z-0"
                              transition={brandSpring}
                            />
                          )}
                          <PackageCheck className={`w-4 h-4 relative z-10 ${isSelected ? 'text-brand-emerald' : 'text-brand-charcoal/40'}`} />
                          <span className="relative z-10">{option.label}</span>
                        </motion.button>
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

                      {/* Animated quantity number feedback */}
                      <div className="w-14 overflow-hidden text-center">
                        <motion.span
                          key={quantity}
                          initial={!shouldReduceMotion ? { y: -8, opacity: 0 } : undefined}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.2 }}
                          className="block text-base sm:text-lg font-bold text-brand-charcoal"
                        >
                          {quantity}
                        </motion.span>
                      </div>

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
                        initial={{ opacity: 0, x: -10, scale: 0.95 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.25 }}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-brand-forest text-brand-gold rounded-xl text-sm font-bold shadow-md self-end sm:self-center"
                      >
                        <Check className="w-4 h-4 text-brand-gold" />
                        <span>Added to basket!</span>
                        <button
                          onClick={openDrawer}
                          className="ml-2 underline text-white hover:text-brand-gold focus:outline-none"
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
                  className="flex-1 py-4 px-6 rounded-xl font-bold text-base bg-brand-emerald hover:bg-brand-forest text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 active:translate-y-0 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
                >
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Basket</span>
                </button>

                <button
                  type="button"
                  onClick={handleDirectWhatsApp}
                  className="flex-1 py-4 px-6 rounded-xl font-bold text-base bg-[#25D366] hover:bg-[#20ba59] text-white transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center gap-2 active:translate-y-0 active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
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
          <Reveal delay={0.1}>
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
          </Reveal>
        )}

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <Reveal>
              <div className="text-center mb-10">
                <h3 className="text-2xl sm:text-3xl font-serif font-bold text-brand-charcoal">
                  More from {product.category}
                </h3>
                <div className="mt-2 w-16 h-1 bg-brand-gold mx-auto rounded-full" />
              </div>
            </Reveal>

            <motion.div
              variants={staggerContainerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8"
            >
              {relatedProducts.map((p) => (
                <motion.div key={p.id} variants={staggerItemVariants}>
                  <ProductCard product={p} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
