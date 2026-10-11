import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, MessageCircle, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCartStore } from '../../store/useCartStore';
import { contactConfig } from '../../config/contact';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const getCartCount = useCartStore((state) => state.getCartCount);
  const openDrawer = useCartStore((state) => state.openDrawer);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About Brand', path: '/about' },
    { name: 'Contact & Orders', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;
  const cartCount = getCartCount();

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-brand-ivory/95 backdrop-blur-md shadow-md border-b border-brand-emerald/10'
          : 'bg-brand-ivory border-b border-brand-charcoal/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          {/* Brand Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald rounded-lg"
          >
            <div className="relative">
              <img
                src="/assets/brand/ruchi-rich-logo.png"
                alt="RUCHI RICH — Fresh & Active by Ramraj Oil Industries"
                className="h-14 sm:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="hidden lg:flex flex-col border-l border-brand-charcoal/15 pl-3">
              <span className="text-xs uppercase tracking-widest text-brand-emerald font-bold font-serif">
                Ramraj Oil Industries
              </span>
              <span className="text-xs text-brand-charcoal/70 tracking-wider">
                Fresh & Active Spices
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links - 15-16px target */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const active = isActive(link.path);
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative px-4 py-2 text-[15px] lg:text-base font-medium transition-colors rounded-full ${
                    active
                      ? 'text-brand-emerald font-bold'
                      : 'text-brand-charcoal/85 hover:text-brand-emerald hover:bg-brand-emerald/5'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-brand-emerald rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions & WhatsApp Contact */}
          <div className="flex items-center gap-3 sm:gap-4">
            {/* Quick WhatsApp button on desktop */}
            <a
              href={`https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
                'Hello RUCHI RICH Team, I would like to inquire about your spice range.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-brand-emerald/10 text-brand-forest hover:bg-brand-emerald hover:text-white rounded-full text-sm font-bold transition-all duration-200 border border-brand-emerald/20"
              aria-label="Direct WhatsApp Enquiry"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>WhatsApp Inquiry</span>
            </a>

            {/* Cart Trigger Button */}
            <button
              onClick={openDrawer}
              className="relative p-2.5 text-brand-charcoal hover:text-brand-emerald transition-colors rounded-full hover:bg-brand-emerald/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
              aria-label={`Shopping cart containing ${cartCount} items`}
            >
              <ShoppingCart className="w-6 h-6" />
              {cartCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-1 -right-1 bg-brand-red text-white text-xs font-bold rounded-full h-5 min-w-5 px-1 flex items-center justify-center shadow-md"
                >
                  {cartCount}
                </motion.span>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2.5 text-brand-charcoal hover:text-brand-emerald rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-emerald"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden bg-brand-ivory border-t border-brand-charcoal/10 overflow-hidden shadow-xl"
          >
            <div className="px-5 pt-4 pb-6 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive(link.path)
                      ? 'bg-brand-emerald text-white font-semibold'
                      : 'text-brand-charcoal hover:bg-brand-emerald/10 hover:text-brand-emerald'
                  }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-brand-charcoal/10 flex flex-col gap-2.5">
                <a
                  href={`https://wa.me/${contactConfig.whatsappNumber}?text=${encodeURIComponent(
                    'Hello RUCHI RICH Team, I would like to inquire about your spice range.'
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] text-white rounded-xl font-bold text-base shadow-md"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Direct WhatsApp Enquiry</span>
                </a>
                <a
                  href={`tel:${contactConfig.customerCarePhone}`}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-brand-charcoal/5 text-brand-charcoal rounded-xl font-semibold text-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Customer Care: {contactConfig.customerCarePhone}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
