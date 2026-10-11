import React from 'react';
import { Outlet } from 'react-router-dom';
import AnnouncementBar from './AnnouncementBar';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from '../cart/CartDrawer';

const Layout: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen bg-brand-ivory text-brand-charcoal selection:bg-brand-emerald selection:text-white">
      <AnnouncementBar />
      <Navbar />
      <main id="main-content" className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <CartDrawer />
    </div>
  );
};

export default Layout;
