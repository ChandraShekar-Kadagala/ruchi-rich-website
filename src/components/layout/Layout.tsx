import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';

const Layout: React.FC = () => {
  const location = useLocation();
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal selection:bg-brand-emerald selection:text-white">
      <AnnouncementBar />
      <Navbar />
      <main id="main-content" className="flex-grow">
        <motion.div
          key={location.pathname}
          initial={!shouldReduceMotion ? { opacity: 0 } : undefined}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
        >
          <Outlet />
        </motion.div>
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
