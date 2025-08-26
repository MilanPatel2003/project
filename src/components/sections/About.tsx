import React from 'react';
import { motion } from 'framer-motion';
import { FiGlobe, FiShield, FiTrendingUp, FiUsers } from 'react-icons/fi';
import Card from '../ui/Card';

const About: React.FC = () => {
  const features = [
    {
      icon: <FiGlobe className="h-8 w-8" />,
      title: 'Global Network',
      description: 'Extensive worldwide coverage with strategic partnerships across 100+ countries.'
    },
    {
      icon: <FiShield className="h-8 w-8" />,
      title: 'Secure & Reliable',
      description: 'Advanced tracking systems and insurance coverage for complete peace of mind.'
    },
    {
      icon: <FiTrendingUp className="h-8 w-8" />,
      title: 'Innovative Solutions',
      description: 'Cutting-edge technology and sustainable practices for modern logistics needs.'
    },
    {
      icon: <FiUsers className="h-8 w-8" />,
      title: 'Expert Team',
      description: 'Experienced maritime professionals dedicated to your success and satisfaction.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Trident Shipping
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-600 to-accent-600 mx-auto mb-6" />
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Since our founding, Trident Shipping has been at the forefront of maritime logistics, 
            delivering excellence through innovation, reliability, and uncompromising commitment to our clients.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white">
              Pioneering Maritime Excellence
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              With decades of experience in international shipping and logistics, Trident Shipping 
              has built a reputation for reliability, innovation, and exceptional service. Our 
              commitment to excellence drives us to continuously evolve and adapt to meet the 
              changing needs of global commerce.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              From small businesses to multinational corporations, we provide tailored solutions 
              that ensure your cargo reaches its destination safely, efficiently, and on time. 
              Our advanced tracking systems, comprehensive insurance options, and expert team 
              make us your trusted partner in maritime logistics.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">25+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years Experience</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">100+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Countries Served</div>
              </div>
              <div className="text-center sm:text-left">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">1M+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Tons Shipped</div>
              </div>
            </div>
          </motion.div>

          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white text-lg font-semibold">
              <img 
                src="https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Trident Shipping Operations" 
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary-600 dark:bg-primary-500 rounded-2xl flex items-center justify-center text-white">
              <FiGlobe className="h-16 w-16" />
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card hover className="p-6 text-center h-full">
                <div className="text-primary-600 dark:text-primary-400 flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;