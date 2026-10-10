import React from 'react';
import { MapPin, MessageCircle, Mail } from 'lucide-react';
import { contactConfig } from '../config/contact';

const ContactPage = () => {
  return (
    <div className="py-16 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-serif font-bold text-brand-charcoal">Get in Touch</h1>
          <div className="mt-4 w-24 h-1 bg-brand-emerald mx-auto rounded-full"></div>
          <p className="mt-6 text-brand-charcoal/70 max-w-2xl mx-auto text-lg">
            Whether you have a question about our products, bulk orders, or distribution, we're here to help.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-brand-charcoal/5">
            <h2 className="text-2xl font-serif font-bold text-brand-charcoal mb-8">Contact Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-brand-emerald/10 p-3 rounded-lg mr-4 text-brand-emerald">
                  <MapPin className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-charcoal">Head Office & Manufacturing</h3>
                  <p className="text-brand-charcoal/70 mt-1 leading-relaxed">
                    {contactConfig.address}
                  </p>
                  <a 
                    href={contactConfig.mapUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-brand-emerald hover:underline font-medium"
                  >
                    View on Google Maps
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-emerald/10 p-3 rounded-lg mr-4 text-[#25D366]">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-charcoal">WhatsApp Inquiries</h3>
                  <p className="text-brand-charcoal/70 mt-1">
                    +{contactConfig.whatsappNumber}
                  </p>
                  <a 
                    href={`https://wa.me/${contactConfig.whatsappNumber}`} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-sm text-[#25D366] hover:underline font-medium"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-brand-emerald/10 p-3 rounded-lg mr-4 text-brand-emerald">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-charcoal">Email</h3>
                  <p className="text-brand-charcoal/70 mt-1">
                    {contactConfig.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Contact / Orders Note */}
          <div className="bg-brand-forest text-brand-ivory p-8 rounded-2xl shadow-sm flex flex-col justify-center text-center">
            <img 
              src="/assets/brand/ruchi-rich-logo.png" 
              alt="Ruchi Rich" 
              className="h-24 w-auto mx-auto mb-8 bg-brand-ivory p-4 rounded-xl"
            />
            <h2 className="text-2xl font-serif font-bold mb-4 text-brand-gold">How to Order</h2>
            <p className="text-brand-ivory/80 leading-relaxed mb-8">
              We process all our customer orders and trade inquiries efficiently through WhatsApp. 
              Browse our catalogue, select your required products and package sizes, and simply click 'Proceed to WhatsApp' in your cart.
            </p>
            <a 
              href="/products" 
              className="inline-block px-8 py-3 bg-brand-gold text-brand-forest font-bold rounded-lg hover:bg-brand-gold/90 transition-colors"
            >
              Browse Catalogue
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
