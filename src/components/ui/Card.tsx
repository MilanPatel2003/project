import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className = '', hover = false }) => {
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 ${className}`}
    >
      {children}
    </motion.div>
  );
};

export default Card;