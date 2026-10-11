import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ShoppingBag, ExternalLink, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useCartStore } from '../store/useCartStore';
import { generateWhatsAppMessage, getWhatsAppLink } from '../lib/whatsapp';
import { contactConfig } from '../config/contact';

const CartPage: React.FC = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();

  const totalItems = items.reduce((acc, item) => acc + item.quantity, 0);

  const handleWhatsAppRedirect = () => {
    if (items.length === 0) return;
    const message = generateWhatsAppMessage(items);
    const link = getWhatsAppLink(message);
    window.open(link, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="py-24 bg-brand-ivory min-h-[75vh] flex flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="w-24 h-24 bg-brand-emerald/10 rounded-full flex items-center justify-center mb-6 text-brand-emerald shadow-inner"
        >
          <ShoppingBag className="w-12 h-12" />
        </motion.div>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal mb-3">
          Your Spice Basket is Empty
        </h1>
        <p className="text-base text-brand-charcoal/75 mb-8 max-w-md leading-relaxed font-normal">
          Looks like you haven't added any spices to your selection yet. Explore our authentic range of pure and blended
          spices from Andhra Pradesh.
        </p>
        <Link
          to="/products"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white bg-brand-emerald hover:bg-brand-forest transition-colors shadow-lg hover:shadow-xl"
        >
          <span>Explore Spice Catalogue</span>
          <ArrowRight className="w-5 h-5" />
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 sm:py-20 bg-brand-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 pb-4 border-b border-brand-charcoal/10 gap-4">
          <div>
            <div className="text-xs sm:text-sm uppercase tracking-widest text-brand-emerald font-bold font-serif mb-1">
              Order Inquiry
            </div>
            <h1 className="text-3xl sm:text-4xl font-serif font-bold text-brand-charcoal">
              Selected Spice Basket
            </h1>
          </div>
          <div className="text-sm sm:text-base text-brand-charcoal/70">
            Total Selected: <strong className="text-brand-emerald text-base font-bold">{totalItems} Packs</strong>
          </div>
        </div>

        {/* Cart Item Cards */}
        <div className="bg-white rounded-3xl shadow-sm border border-brand-forest/10 overflow-hidden mb-8">
          <ul className="divide-y divide-brand-charcoal/10">
            {items.map((item) => (
              <li
                key={item.id}
                className="p-5 sm:p-6 flex flex-col sm:flex-row items-center sm:items-center gap-5 hover:bg-brand-ivory/30 transition-colors"
              >
                {/* Thumbnail */}
                <div className="w-20 h-24 bg-brand-charcoal/5 rounded-2xl flex-shrink-0 flex items-center justify-center p-2 border border-brand-charcoal/10">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 text-center sm:text-left min-w-0">
                  <Link
                    to={`/product/${item.product.id}`}
                    className="text-lg font-serif font-bold text-brand-charcoal hover:text-brand-emerald transition-colors"
                  >
                    {item.product.name}
                  </Link>
                  <div className="mt-1.5 flex items-center justify-center sm:justify-start gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-brand-emerald/10 text-brand-emerald text-xs sm:text-sm font-semibold">
                      {item.selectedOption.label}
                    </span>
                    <span className="text-xs text-brand-charcoal/50">•</span>
                    <span className="text-xs sm:text-sm text-brand-charcoal/70">{item.product.category}</span>
                  </div>
                </div>

                {/* Quantity Controls & Remove */}
                <div className="flex items-center gap-4">
                  <div className="inline-flex items-center border border-brand-charcoal/20 rounded-xl bg-brand-ivory p-1">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-brand-charcoal hover:bg-white hover:text-brand-emerald transition-colors"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="w-10 text-center text-sm font-bold text-brand-charcoal">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 rounded-lg flex items-center justify-center text-brand-charcoal hover:bg-white hover:text-brand-emerald transition-colors"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItem(item.id)}
                    className="p-2 text-brand-charcoal/40 hover:text-brand-red rounded-lg hover:bg-red-50 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {/* Cart Summary Strip */}
          <div className="bg-brand-ivory/80 p-5 sm:p-6 border-t border-brand-charcoal/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={clearCart}
              className="text-xs sm:text-sm font-semibold text-brand-charcoal/70 hover:text-brand-red transition-colors"
            >
              Clear entire basket
            </button>
            <div className="text-sm sm:text-base text-brand-charcoal">
              Selected Item Summary: <span className="font-bold font-serif text-brand-emerald text-base sm:text-lg">{totalItems} Total Packs</span>
            </div>
          </div>
        </div>

        {/* WhatsApp Checkout Action Card */}
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-brand-forest/10 shadow-sm space-y-6">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[#25D366]/10 rounded-2xl text-[#25D366] flex-shrink-0">
              <MessageCircle className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-serif font-bold text-brand-charcoal">
                Direct WhatsApp Order Submission
              </h2>
              <p className="text-sm sm:text-base text-brand-charcoal/75 mt-1 leading-relaxed">
                Clicking the button below generates an organized order message and opens your WhatsApp directly connected to our sales desk.
                Our representatives will provide immediate quotation, stock confirmation, and delivery schedules.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              to="/products"
              className="sm:w-1/3 py-4 px-6 rounded-xl border-2 border-brand-emerald/40 text-brand-emerald font-bold text-sm sm:text-base text-center hover:bg-brand-emerald/5 transition-colors"
            >
              Add More Spices
            </Link>

            <button
              onClick={handleWhatsAppRedirect}
              className="sm:w-2/3 py-4 px-6 rounded-xl font-bold text-base bg-[#25D366] hover:bg-[#20ba59] text-white shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>Proceed to WhatsApp (+{contactConfig.whatsappNumber})</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </div>

          <div className="pt-2 flex items-center justify-center gap-2 text-xs text-brand-charcoal/60">
            <ShieldCheck className="w-4 h-4 text-brand-emerald" />
            <span>Official WhatsApp Channel of Ramraj Oil Industries — RUCHI RICH</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
