import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, SlidersHorizontal, Sparkles } from 'lucide-react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        activeCategory === 'All' || product.category === activeCategory;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        product.name.toLowerCase().includes(q) ||
        product.shortDescription.toLowerCase().includes(q) ||
        product.tagline?.toLowerCase().includes(q) ||
        product.flavorNotes?.some((fn) => fn.toLowerCase().includes(q)) ||
        product.culinaryUses?.some((cu) => cu.toLowerCase().includes(q));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="py-12 md:py-20 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-emerald/10 text-brand-emerald text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Complete Spice Range</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-brand-charcoal">
            Pure & Blended Spices
          </h1>
          <div className="mt-3 w-20 h-1 bg-brand-gold mx-auto rounded-full" />
          <p className="mt-4 text-base sm:text-lg text-brand-charcoal/75 leading-relaxed font-normal">
            Every pouch is filled with the true essence of Indian heritage. Select your desired package variant and
            order conveniently via direct WhatsApp handoff.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 sm:p-5 rounded-2xl shadow-sm border border-brand-forest/10 mb-10">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs sm:text-sm font-bold text-brand-charcoal/60 uppercase tracking-wider hidden sm:flex items-center gap-1 mr-1">
                <SlidersHorizontal className="w-3.5 h-3.5" />
                <span>Filter:</span>
              </span>

              {categories.map((category) => {
                const isActive = activeCategory === category;
                return (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`relative px-4 py-2.5 rounded-xl text-sm sm:text-base font-semibold whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? 'text-white shadow-sm'
                        : 'text-brand-charcoal/80 bg-brand-ivory hover:bg-brand-emerald/10 hover:text-brand-emerald border border-brand-charcoal/10'
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeCategoryPill"
                        className="absolute inset-0 bg-brand-emerald rounded-xl -z-0"
                        transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                      />
                    )}
                    <span className="relative z-10">{category}</span>
                  </button>
                );
              })}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-brand-charcoal/40" />
              <input
                type="text"
                placeholder="Search spices, uses, notes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-9 py-2.5 rounded-xl border border-brand-charcoal/20 bg-brand-ivory text-base focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent transition-all placeholder:text-brand-charcoal/45"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-brand-charcoal/40 hover:text-brand-charcoal"
                  aria-label="Clear search"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Results Count & Quick Reset */}
          <div className="mt-3 pt-3 border-t border-brand-charcoal/5 flex items-center justify-between text-xs sm:text-sm text-brand-charcoal/70">
            <span>
              Showing <strong className="text-brand-charcoal font-semibold">{filteredProducts.length}</strong> of{' '}
              <strong className="text-brand-charcoal font-semibold">{products.length}</strong> products
            </span>

            {(activeCategory !== 'All' || searchQuery) && (
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="text-brand-emerald font-semibold hover:underline"
              >
                Reset filters
              </button>
            )}
          </div>
        </div>

        {/* Product Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProducts.length > 0 ? (
            <motion.div
              layout
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {filteredProducts.map((product) => (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <ProductCard product={product} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-20 px-4 bg-white rounded-2xl border border-brand-forest/10 shadow-sm max-w-lg mx-auto"
            >
              <div className="w-16 h-16 rounded-full bg-brand-emerald/10 flex items-center justify-center mx-auto mb-4 text-brand-emerald">
                <Search className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif font-bold text-brand-charcoal mb-2">No matching spices found</h3>
              <p className="text-sm sm:text-base text-brand-charcoal/70 mb-6 leading-relaxed">
                We couldn't find any spice matching "{searchQuery}". Try searching for another name or reset filters.
              </p>
              <button
                onClick={() => {
                  setActiveCategory('All');
                  setSearchQuery('');
                }}
                className="px-6 py-3 bg-brand-emerald text-white text-base font-bold rounded-xl hover:bg-brand-forest transition-colors shadow-sm"
              >
                Show All Products
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ProductsPage;
