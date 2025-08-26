import React from 'react';
import { motion } from 'framer-motion';
import { FiClock, FiShield, FiDollarSign, FiHeadphones, FiTrendingUp, FiGlobe } from 'react-icons/fi';
import Card from '../ui/Card';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    {
      icon: <FiClock className="h-8 w-8" />,
      title: 'On-Time Delivery',
      description: '99.9% on-time delivery rate with real-time tracking and proactive notifications.',
      stat: '99.9%',
      statLabel: 'On-Time Rate'
    },
    {
      icon: <FiShield className="h-8 w-8" />,
      title: 'Secure & Insured',
      description: 'Comprehensive insurance coverage and advanced security measures protect your cargo.',
      stat: '100%',
      statLabel: 'Insured Shipments'
    },
    {
      icon: <FiDollarSign className="h-8 w-8" />,
      title: 'Competitive Pricing',
      description: 'Transparent pricing with no hidden fees and volume discounts for regular clients.',
      stat: '30%',
      statLabel: 'Cost Savings'
    },
    {
      icon: <FiHeadphones className="h-8 w-8" />,
      title: '24/7 Support',
      description: 'Round-the-clock customer support from our experienced maritime logistics team.',
      stat: '24/7',
      statLabel: 'Support Available'
    },
    {
      icon: <FiTrendingUp className="h-8 w-8" />,
      title: 'Advanced Technology',
      description: 'Cutting-edge tracking systems, automated processes, and digital documentation.',
      stat: '100%',
      statLabel: 'Digital Process'
    },
    {
      icon: <FiGlobe className="h-8 w-8" />,
      title: 'Global Network',
      description: 'Extensive worldwide coverage with trusted partners in over 100 countries.',
      stat: '100+',
      statLabel: 'Countries Served'
    }
  ];

  return (
    <section id="why-choose" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Why Choose Trident?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-cyan-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Discover the advantages that make Trident Shipping the preferred choice for businesses 
            worldwide seeking reliable, efficient, and cost-effective maritime logistics solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="p-8 text-center h-full group">
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-2xl mb-6 group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors"
                >
                  {benefit.icon}
                </motion.div>

                {/* Stat */}
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                  {benefit.stat}
                </div>
                <div className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {benefit.statLabel}
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {benefit.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20"
        >
          <Card className="p-8 md:p-12 bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-gray-800 dark:to-gray-700 border-0">
            <div className="text-center">
              <div className="text-6xl text-blue-600 dark:text-blue-400 mb-6">"</div>
              <blockquote className="text-2xl md:text-3xl font-medium text-gray-900 dark:text-white mb-8 leading-relaxed">
                Trident Shipping has been instrumental in our global expansion. Their reliability, 
                transparency, and exceptional service have made them our trusted logistics partner.
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-xl font-bold text-gray-600 dark:text-gray-300">JD</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 dark:text-white">John Davis</div>
                  <div className="text-gray-600 dark:text-gray-300">CEO, Global Trade Solutions</div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;