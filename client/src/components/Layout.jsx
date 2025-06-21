import React from 'react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-1 overflow-y-auto px-5 py-24">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
