import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Trash2, Plus, Minus, ShoppingBag, ExternalLink, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../store/useCartStore';
import { generateWhatsAppMessage, getWhatsAppLink } from '../../lib/whatsapp';

const CartDrawer: React.FC = () => {
  const { items, isDrawerOpen, closeDrawer, updateQuantity, removeItem, clearCart } = useCartStore();

  // Close drawer on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        closeDrawer();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen, closeDrawer]);

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleWhatsAppRedirect = () => {
    if (items.length === 0) return;
    const message = generateWhatsAppMessage(items);
    const link = getWhatsAppLink(message);
    window.open(link, '_blank');
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true" aria-label="Shopping Cart">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={closeDrawer}
          />

          <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              className="w-screen max-w-md bg-white shadow-2xl flex flex-col"
            >
              {/* Header */}
              <div className="p-6 bg-brand-forest text-brand-ivory flex items-center justify-between border-b border-brand-emerald/30">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-brand-emerald/40 rounded-lg text-brand-gold">
                    <ShoppingBag className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-serif font-bold text-brand-ivory">Your Spice Basket</h2>
                    <p className="text-xs text-brand-gold font-medium">
                      {totalItems} {totalItems === 1 ? 'item selected' : 'items selected'}
                    </p>
                  </div>
                </div>
                <button
                  onClick={closeDrawer}
                  className="p-2 text-brand-ivory/80 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                  aria-label="Close cart"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Items List */}
              <div className="flex-1 overflow-y-auto p-6 divide-y divide-brand-charcoal/10">
                {items.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center py-12">
                    <div className="w-20 h-20 rounded-full bg-brand-emerald/10 flex items-center justify-center mb-4 text-brand-emerald">
                      <ShoppingBag className="w-10 h-10" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-brand-charcoal mb-2">Your basket is empty</h3>
                    <p className="text-base text-brand-charcoal/70 mb-6 max-w-xs leading-relaxed font-normal">
                      Discover our authentic stone-ground spices and add your favorite blends.
                    </p>
                    <button
                      onClick={closeDrawer}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-brand-emerald text-white rounded-xl text-base font-semibold hover:bg-brand-forest transition-colors shadow-sm"
                    >
                      Browse Catalogue <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <div key={item.id} className="pt-4 first:pt-0 flex gap-4 items-center">
                        <div className="w-16 h-20 bg-brand-charcoal/5 rounded-lg flex-shrink-0 flex items-center justify-center p-1.5 border border-brand-charcoal/10">
                          <img
                            src={item.product.image}
                            alt={item.product.name}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>

                        <div className="flex-1 min-w-0">
                          <h4 className="text-base font-bold text-brand-charcoal truncate font-serif">
                            {item.product.name}
                          </h4>
                          <span className="inline-block mt-0.5 px-2.5 py-0.5 bg-brand-emerald/10 text-brand-emerald text-xs sm:text-sm font-semibold rounded">
                            {item.selectedOption.label}
                          </span>

                          <div className="flex items-center gap-3 mt-2.5">
                            <div className="inline-flex items-center border border-brand-charcoal/20 rounded-md bg-brand-ivory/50">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="p-1.5 hover:text-brand-emerald transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="w-8 text-center text-sm font-bold text-brand-charcoal">
                                {item.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="p-1.5 hover:text-brand-emerald transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </div>

                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-brand-charcoal/40 hover:text-brand-red p-1 transition-colors"
                              aria-label="Remove item"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 bg-brand-ivory border-t border-brand-charcoal/10 space-y-4">
                  <div className="flex items-center justify-between text-base">
                    <span className="text-brand-charcoal/70">Total Selected Products</span>
                    <span className="font-bold text-brand-charcoal font-serif text-lg">{totalItems} Packs</span>
                  </div>

                  <button
                    onClick={handleWhatsAppRedirect}
                    className="w-full py-4 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-xl font-bold text-base flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200"
                  >
                    <span>Proceed to WhatsApp Order</span>
                    <ExternalLink className="w-4 h-4" />
                  </button>

                  <div className="flex items-center justify-between pt-1">
                    <Link
                      to="/cart"
                      onClick={closeDrawer}
                      className="text-sm text-brand-emerald hover:underline font-semibold"
                    >
                      View Full Cart Page
                    </Link>
                    <button
                      onClick={clearCart}
                      className="text-sm text-brand-charcoal/60 hover:text-brand-red transition-colors"
                    >
                      Clear All
                    </button>
                  </div>

                  <p className="text-xs text-center text-brand-charcoal/70 leading-relaxed">
                    WhatsApp will open with your pre-filled inquiry. Our sales team will confirm availability & pricing.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
