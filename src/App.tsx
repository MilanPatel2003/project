import React from 'react';
import { motion } from 'framer-motion';
import ThemeProvider from './components/ThemeProvider';
import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Services from './components/sections/Services';
import WhyChooseUs from './components/sections/WhyChooseUs';
import Contact from './components/sections/Contact';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChooseUs />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;