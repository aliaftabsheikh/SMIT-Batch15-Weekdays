import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import Button from '../ui/Button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Collection', path: '/products' },
    { name: 'Craftsmanship', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary-900 hover:text-primary-700 p-2"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start w-full md:w-auto absolute md:relative left-0 right-0 pointer-events-none md:pointer-events-auto">
            <Link to="/" className="pointer-events-auto">
              {/* Placeholder for a Logo */}
              <span className="font-display text-2xl font-bold tracking-wider text-primary-900">
                Pashmina.<span className="text-accent-600">co</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-wide font-medium transition-colors hover:text-primary-600 ${
                  location.pathname === link.path ? 'text-primary-900' : 'text-stone-500'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex items-center space-x-2 md:space-x-4">
            <button className="p-2 text-stone-500 hover:text-primary-900 transition-colors">
              <Search size={20} />
            </button>
            <Link to="/profile" className="p-2 text-stone-500 hover:text-primary-900 transition-colors hidden sm:block">
              <User size={20} />
            </Link>
            <Link to="/cart" className="p-2 text-stone-500 hover:text-primary-900 transition-colors relative">
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 bg-accent-500 rounded-full ring-2 ring-white"></span>
            </Link>
            <div className="hidden md:block ml-2">
                <Link to="/login">
                    <Button variant="primary" size="sm">Login</Button>
                </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-stone-100 bg-white"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-4 rounded-md text-base font-medium text-stone-900 hover:bg-stone-50 hover:text-primary-900"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 mt-4 border-t border-stone-100">
                <Link to="/login" onClick={() => setIsOpen(false)}>
                    <Button variant="primary" className="w-full">Sign In</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
