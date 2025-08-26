import React from 'react';
import { motion } from 'framer-motion';
import { FiAnchor, FiMail, FiPhone, FiMapPin, FiFacebook, FiTwitter, FiLinkedin, FiInstagram } from 'react-icons/fi';

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Track Shipment', href: '#' },
    { name: 'Get Quote', href: '#contact' },
  ];

  const services = [
    { name: 'Ocean Freight', href: '#services' },
    { name: 'Air Freight', href: '#services' },
    { name: 'Ground Transportation', href: '#services' },
    { name: 'Warehousing', href: '#services' },
    { name: 'Project Cargo', href: '#services' },
  ];

  const socialLinks = [
    { icon: <FiFacebook className="h-5 w-5" />, href: '#', name: 'Facebook' },
    { icon: <FiTwitter className="h-5 w-5" />, href: '#', name: 'Twitter' },
    { icon: <FiLinkedin className="h-5 w-5" />, href: '#', name: 'LinkedIn' },
    { icon: <FiInstagram className="h-5 w-5" />, href: '#', name: 'Instagram' },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-6">
              <FiAnchor className="h-8 w-8 text-blue-400" />
              <span className="text-2xl font-bold">Trident Shipping</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your trusted partner in global maritime logistics, delivering excellence 
              through innovation, reliability, and unmatched service quality.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 text-gray-300">
                <FiPhone className="h-4 w-4 text-blue-400" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FiMail className="h-4 w-4 text-blue-400" />
                contact@tridentshipping.com
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <FiMapPin className="h-4 w-4 text-blue-400" />
                123 Maritime Way, Harbor City, HC 12345
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-6">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => scrollToSection(service.href)}
                    className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-lg font-semibold mb-6">Stay Connected</h3>
            <p className="text-gray-300 text-sm mb-4">
              Follow us for the latest updates on shipping solutions and industry insights.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            {/* Certifications */}
            <div className="text-sm text-gray-300">
              <div className="font-medium mb-2">Certified & Insured</div>
              <div className="text-xs space-y-1">
                <div>• ISO 9001:2015 Certified</div>
                <div>• IATA Cargo Agent</div>
                <div>• C-TPAT Validated</div>
                <div>• AEO Authorized</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <div className="text-sm text-gray-400">
            © {new Date().getFullYear()} Trident Shipping Company. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;