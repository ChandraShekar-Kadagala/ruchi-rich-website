import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const HomePage = () => {
  const featuredProducts = products.filter(p => p.badges?.includes('Bestseller') || p.badges?.includes('Premium') || p.badges?.includes('Chef\'s Choice')).slice(0, 3);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-brand-forest overflow-hidden py-16 md:py-32">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="/assets/products/garam-masala.png" 
            alt="" 
            className="w-full h-full object-cover object-center transform scale-150 blur-sm"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:w-2/3">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-serif font-bold text-brand-ivory leading-tight"
            >
              Bring Home the <span className="text-brand-gold">Authentic</span> Taste of Tradition.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg md:text-xl text-brand-ivory/90 max-w-2xl font-light"
            >
              Ruchi Rich brings you a premium selection of pure and blended spices, 
              carefully sourced and ground to perfection. Experience the fresh & active essence of Indian culinary heritage.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10"
            >
              <Link 
                to="/products" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-brand-forest bg-brand-gold hover:bg-brand-gold/90 transition-colors shadow-lg"
              >
                Explore Catalogue
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-serif font-bold text-brand-charcoal">Featured Spices</h2>
            <div className="mt-2 w-24 h-1 bg-brand-emerald mx-auto rounded-full"></div>
            <p className="mt-4 text-brand-charcoal/70">Our most beloved blends and pure powders.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/products" 
              className="inline-flex items-center text-brand-emerald hover:text-brand-forest font-semibold transition-colors"
            >
              View all products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Brand Story Snippet */}
      <section className="py-16 bg-brand-emerald text-brand-ivory">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="/assets/products/turmeric-powder.png" 
              alt="Premium Quality" 
              className="w-full max-w-md mx-auto drop-shadow-2xl rounded-lg"
            />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-3xl font-serif font-bold text-brand-gold mb-6">The Promise of Purity</h2>
            <p className="text-lg mb-4 text-brand-ivory/90 leading-relaxed">
              At Ramraj Oil Industries, we believe that the secret to a great meal lies in the quality of its ingredients. 
              Our Ruchi Rich spices are crafted with a commitment to maintaining the natural oils, vibrant colors, and 
              intense aromas that define true Indian cuisine.
            </p>
            <p className="text-lg mb-8 text-brand-ivory/90 leading-relaxed">
              From our fields to your kitchen, we ensure every pack delivers on our promise: Fresh & Active.
            </p>
            <Link 
              to="/about" 
              className="inline-block px-6 py-3 border-2 border-brand-gold text-brand-gold font-medium rounded hover:bg-brand-gold hover:text-brand-forest transition-colors"
            >
              Read Our Story
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
