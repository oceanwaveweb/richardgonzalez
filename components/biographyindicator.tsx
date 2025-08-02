import React from 'react';
import { motion } from 'framer-motion';

interface BIOYearIndicatorProps {
  year: string;
  position: 'left' | 'right';
  delay: number;
}

export const BIOYearIndicator: React.FC<BIOYearIndicatorProps> = ({
  year,
  position,
  delay,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: position === 'left' ? -20 : 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className={`absolute top-0 ${
        position === 'left' ? 'left-0' : 'right-0'
      } mt-4 md:mt-8`}
    >
      <div
        className={`px-3 py-1 bg-gray-800 text-white text-sm rounded-full shadow-md ${
          position === 'left' ? 'ml-4' : 'mr-4'
        }`}
      >
        {year}
      </div>
    </motion.div>
  );
};