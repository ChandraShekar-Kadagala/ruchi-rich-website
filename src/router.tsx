import React, { Suspense, lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import { ScrollToTop, PageLoadingFallback } from './components/common/RouteHelpers';

// Lazy load route pages for performance & route-level code splitting
const HomePage = lazy(() => import('./pages/HomePage'));
const ProductsPage = lazy(() => import('./pages/ProductsPage'));
const ProductDetailPage = lazy(() => import('./pages/ProductDetailPage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const CartPage = lazy(() => import('./pages/CartPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

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
