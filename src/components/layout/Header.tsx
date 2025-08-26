import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiSun, FiMoon, FiAnchor } from 'react-icons/fi';
import { useTheme } from '../../hooks/useTheme';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark, toggleTheme } = useTheme();

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Why Choose Us', href: '#why-choose' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-200 dark:border-gray-700' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div 
            className="flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
          >
            <FiAnchor className={`h-8 w-8 ${isScrolled ? 'text-blue-600 dark:text-blue-400' : 'text-white'}`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
              Trident Shipping
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`${isScrolled ? 'text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400' : 'text-white/90 hover:text-white'} px-3 py-2 text-sm font-medium transition-colors`}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            ))}
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDark ? <FiSun className="h-5 w-5" /> : <FiMoon className="h-5 w-5" />}
            </motion.button>

            {/* Mobile menu button */}
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors ${
                isScrolled
                  ? 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <FiX className="h-5 w-5" /> : <FiMenu className="h-5 w-5" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200 dark:border-gray-700"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md transition-colors"
                  whileHover={{ x: 4 }}
                >
                  {item.name}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;