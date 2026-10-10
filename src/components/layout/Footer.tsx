import React from 'react';
import { Link } from 'react-router-dom';
import { contactConfig } from '../../config/contact';

const Footer = () => {
  return (
    <footer className="bg-brand-forest text-brand-ivory mt-auto">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <img 
              src="/assets/brand/ruchi-rich-logo.png" 
              alt="Ruchi Rich" 
              className="h-16 w-auto mb-4 bg-brand-ivory p-2 rounded"
            />
            <p className="text-sm text-brand-ivory/80">
              Fresh & Active Spices.<br/>
              A premium brand by Ramraj Oil Industries.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-brand-ivory/80">
              <li><Link to="/" className="hover:text-brand-gold transition-colors">Home</Link></li>
              <li><Link to="/products" className="hover:text-brand-gold transition-colors">Products</Link></li>
              <li><Link to="/about" className="hover:text-brand-gold transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-brand-gold transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-brand-ivory/80">
              <li>
                <strong>Address:</strong><br/>
                {contactConfig.address}
              </li>
              <li>
                <strong>WhatsApp:</strong><br/>
                +{contactConfig.whatsappNumber}
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-brand-ivory/20 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-brand-ivory/60">
          <p>&copy; {new Date().getFullYear()} Ramraj Oil Industries. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
