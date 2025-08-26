import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { FiArrowRight } from 'react-icons/fi';
import { FaShip } from 'react-icons/fa';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const reduceMotion = useReducedMotion();
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pb-safe-b pt-safe-t">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-700 dark:from-gray-900 dark:via-gray-800 dark:to-primary-900" />
      {/* Subtle glow/pattern without heavy animations */}
      <div className="absolute inset-0 pointer-events-none opacity-60 mix-blend-screen [background:radial-gradient(1000px_600px_at_50%_-20%,rgba(255,255,255,0.12),transparent),radial-gradient(800px_400px_at_10%_20%,rgba(59,130,246,0.25),transparent),radial-gradient(600px_300px_at_90%_30%,rgba(6,182,212,0.25),transparent)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 50 }}
          animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* Logo Icon */}
          <motion.div
            initial={reduceMotion ? false : { scale: 0 }}
            animate={reduceMotion ? undefined : { scale: 1 }}
            transition={{ delay: 0.15, type: "spring", stiffness: 200, damping: 20 }}
            className="flex justify-center"
          >
            <div className="p-4 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <FaShip className="h-16 w-16 text-white" />
            </div>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.6 }}
            className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-tight"
          >
            Navigate Your
            <span className="block bg-gradient-to-r from-accent-200 to-accent-300 bg-clip-text text-transparent">
              Global Commerce
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto leading-relaxed"
          >
            Trident Shipping delivers excellence in maritime logistics with cutting-edge technology, 
            sustainable practices, and unmatched reliability across global trade routes.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-stretch sm:items-center w-full sm:w-auto"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="!bg-white !text-primary-600 hover:!bg-primary-50 hover:!text-primary-700 shadow-xl w-full sm:w-auto"
            >
              Get Quote <FiArrowRight className="ml-2" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="border-2 !border-white/80 !text-white hover:!bg-white hover:!text-primary-600 w-full sm:w-auto"
            >
              Learn More
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: 30 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.6 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
          >
            {[
              { number: '500+', label: 'Global Partners' },
              { number: '50K+', label: 'Shipments Delivered' },
              { number: '99.9%', label: 'On-Time Delivery' },
              { number: '24/7', label: 'Customer Support' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={reduceMotion ? false : { opacity: 0, scale: 0.92 }}
                animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
                transition={{ delay: 0.65 + index * 0.08 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-white">{stat.number}</div>
                <div className="text-blue-200 text-sm md:text-base mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={reduceMotion ? false : { opacity: 0 }}
        animate={reduceMotion ? undefined : { opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={reduceMotion ? undefined : { y: [0, 10, 0] }}
          transition={reduceMotion ? undefined : { repeat: Infinity, duration: 2 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
        >
          <motion.div
            animate={reduceMotion ? undefined : { y: [0, 12, 0] }}
            transition={reduceMotion ? undefined : { repeat: Infinity, duration: 2 }}
            className="w-1 h-3 bg-white/50 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;