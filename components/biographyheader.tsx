import React from 'react';
import { motion } from 'framer-motion';

export const BIOHeader: React.FC = () => {
  return (
    <div className="container mx-auto px-4 pt-16 md:py-16 text-left">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold tracking-widest mb-4"
      >
        BIOGRAPHY / RICHARD GONZALEZ
      </motion.h1>
    </div>
  );
};