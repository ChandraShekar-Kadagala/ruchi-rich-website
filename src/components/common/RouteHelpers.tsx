import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Scroll to top on route change
export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Brand-aligned Loading Fallback
export const PageLoadingFallback: React.FC = () => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center p-8 bg-brand-ivory text-center">
    <div className="w-12 h-12 border-4 border-brand-emerald/20 border-t-brand-emerald rounded-full animate-spin mb-4" />
    <span className="text-xs font-serif font-bold uppercase tracking-widest text-brand-emerald">
      RUCHI RICH
    </span>
    <span className="text-[11px] text-brand-charcoal/60 mt-1">
      Fresh & Active Spices
    </span>
  </div>
);
