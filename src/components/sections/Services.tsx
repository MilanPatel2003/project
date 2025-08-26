import React from 'react';
import { motion } from 'framer-motion';
import {  FaTruck , FaPlane , FaBox, FaCanadianMapleLeaf  } from 'react-icons/fa';
import { FaShip } from 'react-icons/fa';
import { FiPackage } from "react-icons/fi";
import Card from '../ui/Card';
import Button from '../ui/Button';

const Services: React.FC = () => {
  const services = [
    {
      icon: <FaShip className="h-10 w-10" />,
      title: 'Ocean Freight',
      description: 'Comprehensive sea freight services for full container loads and less-than-container loads worldwide.',
      features: ['FCL & LCL Options', 'Port-to-Port Delivery', 'Customs Clearance', 'Real-time Tracking'],
      popular: true
    },
    {
      icon: <FaPlane  className="h-10 w-10" />,
      title: 'Air Freight',
      description: 'Fast and reliable air cargo services for time-sensitive shipments across global destinations.',
      features: ['Express Delivery', 'Temperature Control', 'Dangerous Goods', 'Charter Services'],
      popular: false
    },
    {
      icon: <FaTruck  className="h-10 w-10" />,
      title: 'Ground Transportation',
      description: 'Efficient land transportation solutions including trucking and rail freight services.',
      features: ['Door-to-Door Service', 'Cross-border Trucking', 'Rail Freight', 'Last-mile Delivery'],
      popular: false
    },
    {
      icon: <FaBox className="h-10 w-10" />,
      title: 'Warehousing',
      description: 'Secure storage facilities with advanced inventory management and distribution services.',
      features: ['Climate Control', 'Inventory Management', 'Pick & Pack', 'Distribution Centers'],
      popular: false
    },
    {
      icon: <FiPackage  className="h-10 w-10" />,
      title: 'Logistics Solutions',
      description: 'End-to-end supply chain management and custom logistics solutions for your business.',
      features: ['Supply Chain Design', 'Risk Management', 'Vendor Management', 'Cost Optimization'],
      popular: false
    },
    {
      icon: <FaCanadianMapleLeaf  className="h-10 w-10" />,
      title: 'Project Cargo',
      description: 'Specialized handling of oversized, heavy, and complex cargo requiring custom solutions.',
      features: ['Heavy Lift', 'Oversized Cargo', 'Engineering Support', 'Site Surveys'],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Our Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Comprehensive shipping and logistics solutions tailored to meet your specific business needs, 
            from small packages to large-scale industrial projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="p-8 h-full relative overflow-hidden">
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                      Popular
                    </span>
                  </div>
                )}
                
                <div className="text-primary-600 dark:text-primary-400 mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li
                      key={feature}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: (index * 0.1) + (featureIndex * 0.05) }}
                      className="flex items-center text-gray-600 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-primary-600 dark:bg-primary-400 rounded-full mr-3" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>
                
                <div className="mt-auto">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => {
                      const element = document.querySelector('#contact');
                      if (element) element.scrollIntoView({ behavior: 'smooth' });
                    }}
                  >
                    Get Quote
                  </Button>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default Services;