import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedDividerProps {
  index: number;
}

export const AnimatedDivider: React.FC<AnimatedDividerProps> = ({ index }) => {
  return (
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: '100%' }}
      transition={{ duration: 1.5, ease: 'easeInOut' }}
      viewport={{ once: true }}
      className="w-full h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent my-16 md:my-24"
      style={{ opacity: 0.3 }}
    />
  );
};