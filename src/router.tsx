import React, { useEffect, Suspense, lazy } from 'react';
import { createBrowserRouter, useLocation } from 'react-router-dom';
import Layout from './components/layout/Layout';

// Lazy load route pages for performance & route-level code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// Brand-aligned Loading Fallback
const PageLoadingFallback = () => (
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

export const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <>
        <ScrollToTop />
        <Layout />
      </>
    ),
    errorElement: (
      <Suspense fallback={<PageLoadingFallback />}>
        <NotFoundPage />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: 'products',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <ProductsPage />
          </Suspense>
        ),
      },
      {
        path: 'product/:id',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <ProductDetailPage />
          </Suspense>
        ),
      },
      {
        path: 'about',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <AboutPage />
          </Suspense>
        ),
      },
      {
        path: 'contact',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <ContactPage />
          </Suspense>
        ),
      },
      {
        path: 'cart',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: '*',
        element: (
          <Suspense fallback={<PageLoadingFallback />}>
            <NotFoundPage />
          </Suspense>
        ),
      },
    ],
  },
]);
