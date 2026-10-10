import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCartStore } from '../../store/useCartStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const getCartCount = useCartStore(state => state.getCartCount);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-brand-ivory border-b border-brand-forest/10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-16 w-auto object-contain"
                src="/assets/brand/ruchi-rich-logo.png"
                alt="Ruchi Rich Logo"
              />
            </Link>
          </div>

          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'border-brand-emerald text-brand-emerald'
                    : 'border-transparent text-brand-charcoal hover:border-brand-emerald/50 hover:text-brand-emerald'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center">
            <Link
              to="/cart"
              className="p-2 relative text-brand-charcoal hover:text-brand-emerald transition-colors"
              aria-label="View Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              {getCartCount() > 0 && (
                <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-white transform translate-x-1/4 -translate-y-1/4 bg-brand-red rounded-full">
                  {getCartCount()}
                </span>
              )}
            </Link>
            <div className="flex items-center md:hidden ml-4">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-brand-charcoal hover:text-brand-emerald focus:outline-none"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-brand-ivory border-t border-brand-forest/10">
          <div className="pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block pl-3 pr-4 py-2 border-l-4 text-base font-medium ${
                  isActive(link.path)
                    ? 'border-brand-emerald text-brand-emerald bg-brand-emerald/5'
                    : 'border-transparent text-brand-charcoal hover:bg-brand-emerald/5 hover:border-brand-emerald'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
