import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, Plus, Minus, ArrowRight, ShoppingBag, ExternalLink } from 'lucide-react';
import { useCartStore } from '../store/useCartStore';
import { generateWhatsAppMessage, getWhatsAppLink } from '../lib/whatsapp';

const CartPage = () => {
  const { items, removeItem, updateQuantity, clearCart } = useCartStore();

  const handleWhatsAppRedirect = () => {
    if (items.length === 0) return;
    const message = generateWhatsAppMessage(items);
    const link = getWhatsAppLink(message);
    window.open(link, '_blank');
  };

  if (items.length === 0) {
    return (
      <div className="py-24 bg-brand-ivory min-h-[70vh] flex flex-col items-center justify-center px-4 text-center">
        <div className="w-24 h-24 bg-brand-emerald/10 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="h-12 w-12 text-brand-emerald" />
        </div>
        <h2 className="text-3xl font-serif font-bold text-brand-charcoal mb-4">Your cart is empty</h2>
        <p className="text-brand-charcoal/70 mb-8 max-w-md">
          Looks like you haven't added any spices to your cart yet. Explore our catalogue to find the perfect flavors.
        </p>
        <Link 
          to="/products" 
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-emerald hover:bg-brand-forest transition-colors shadow-md"
        >
          Explore Products
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 bg-brand-ivory min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-serif font-bold text-brand-charcoal mb-8">Your Cart</h1>
        
        <div className="bg-white rounded-xl shadow-sm border border-brand-charcoal/10 overflow-hidden mb-8">
          <ul className="divide-y divide-brand-charcoal/10">
            {items.map((item) => (
              <li key={item.id} className="p-6 flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="w-24 h-24 bg-brand-charcoal/5 rounded-lg flex-shrink-0 flex items-center justify-center p-2">
                  <img src={item.product.image} alt={item.product.name} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                </div>
                
                <div className="flex-1 text-center sm:text-left">
                  <Link to={`/product/${item.product.id}`} className="hover:text-brand-emerald transition-colors">
                    <h3 className="text-lg font-bold text-brand-charcoal">{item.product.name}</h3>
                  </Link>
                  <p className="text-sm text-brand-charcoal/60 mt-1">Package: {item.selectedOption.label}</p>
                </div>

                <div className="flex items-center gap-6">
                  <div className="flex items-center border border-brand-charcoal/20 rounded-lg">
                    <button 
                      onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                      className="p-2 text-brand-charcoal hover:text-brand-emerald transition-colors"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="w-10 text-center font-medium text-brand-charcoal">{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="p-2 text-brand-charcoal hover:text-brand-emerald transition-colors"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  
                  <button 
                    onClick={() => removeItem(item.id)}
                    className="text-brand-red/70 hover:text-brand-red p-2 transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                </div>
              </li>
            ))}
          </ul>
          
          <div className="bg-brand-charcoal/5 p-6 border-t border-brand-charcoal/10 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button 
              onClick={clearCart}
              className="text-sm font-medium text-brand-charcoal/60 hover:text-brand-red transition-colors"
            >
              Clear Cart
            </button>
            <p className="font-medium text-brand-charcoal">
              Total Items: <span className="font-bold text-lg">{items.reduce((acc, item) => acc + item.quantity, 0)}</span>
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4">
          <Link 
            to="/products" 
            className="inline-flex justify-center items-center px-6 py-3 border-2 border-brand-emerald text-brand-emerald font-medium rounded-lg hover:bg-brand-emerald/5 transition-colors"
          >
            Continue Shopping
          </Link>
          
          <button 
            onClick={handleWhatsAppRedirect}
            className="inline-flex justify-center items-center px-6 py-3 border border-transparent text-lg font-bold rounded-lg text-white bg-[#25D366] hover:bg-[#1ebd5c] transition-colors shadow-md"
          >
            Proceed to WhatsApp
            <ExternalLink className="ml-2 h-5 w-5" />
          </button>
        </div>
        
        <p className="text-center text-sm text-brand-charcoal/50 mt-6">
          * Checkout is processed via WhatsApp. No payment is required here.
        </p>
      </div>
    </div>
  );
};

export default CartPage;
