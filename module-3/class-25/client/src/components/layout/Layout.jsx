import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-stone-50 flex flex-col font-body text-stone-900 selection:bg-primary-100 selection:text-primary-900">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <footer className="bg-primary-950 text-primary-50 py-12 border-t border-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
                <h3 className="font-display text-2xl font-bold tracking-wider">Pashmina.co</h3>
                <p className="text-primary-200 text-sm leading-relaxed max-w-xs">
                    Curated heritage craftsmanship for the modern world. Authentic, sustainable, and purely Pakistani.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4 text-white">Shop</h4>
                <ul className="space-y-2 text-primary-200 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Men</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Women</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Accessories</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4 text-white">Company</h4>
                <ul className="space-y-2 text-primary-200 text-sm">
                    <li><a href="#" className="hover:text-white transition-colors">About Us</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Our Artisans</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
                    <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-lg mb-4 text-white">Newsletter</h4>
                <p className="text-primary-200 text-sm mb-4">Join our community for exclusive drops.</p>
                <div className="flex gap-2">
                    <input 
                        type="email" 
                        placeholder="Email address" 
                        className="bg-primary-900 border-none text-white placeholder-primary-400 px-4 py-2 rounded-lg w-full focus:ring-1 focus:ring-accent-500"
                    />
                    <button className="bg-accent-600 hover:bg-accent-500 text-white px-4 py-2 rounded-lg font-medium transition-colors">
                        Join
                    </button>
                </div>
            </div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-8 border-t border-primary-900 text-center text-primary-400 text-xs">
            © 2026 Pashmina.co. Designed with heritage.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
