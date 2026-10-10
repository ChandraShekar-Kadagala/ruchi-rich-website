import React, { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from '../components/products/ProductCard';
import { Search } from 'lucide-react';

const ProductsPage = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'All' || product.category === activeCategory;
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 bg-brand-ivory min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-brand-charcoal">Our Spices</h1>
          <div className="mt-4 w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          <p className="mt-4 text-brand-charcoal/70 max-w-2xl mx-auto">
            Discover our complete range of premium spices. Each blend is carefully crafted to bring authentic flavors to your kitchen.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <div className="flex space-x-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category 
                    ? 'bg-brand-emerald text-white' 
                    : 'bg-white text-brand-charcoal border border-brand-charcoal/10 hover:border-brand-emerald'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-72">
            <input
              type="text"
              placeholder="Search spices..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-brand-charcoal/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-emerald focus:border-transparent bg-white"
            />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-brand-charcoal/40" />
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-xl border border-brand-charcoal/10">
            <p className="text-xl text-brand-charcoal/60">No products found matching your criteria.</p>
            <button 
              onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
              className="mt-4 text-brand-emerald font-medium hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;
