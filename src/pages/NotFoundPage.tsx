import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-brand-ivory text-center px-4">
      <h1 className="text-6xl font-serif font-bold text-brand-emerald mb-4">404</h1>
      <h2 className="text-2xl font-bold text-brand-charcoal mb-4">Page Not Found</h2>
      <p className="text-brand-charcoal/70 mb-8 max-w-md">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-emerald hover:bg-brand-forest transition-colors shadow-md"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default NotFoundPage;
