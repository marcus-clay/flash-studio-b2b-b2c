"use client"

import { motion } from 'framer-motion';

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden bg-[#F6F9FC]">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {/* Blue gradient blob */}
        <div className="absolute -top-48 -left-48 w-96 h-96 bg-[#0A66C2]/10 rounded-full blur-3xl" />
        
        {/* Light blue accent */}
        <div className="absolute top-24 right-12 w-64 h-64 bg-[#0077B5]/5 rounded-full blur-2xl" />
        
        {/* Subtle background texture */}
        <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.015]" />
        
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#F6F9FC] via-[#F6F9FC]/90 to-[#F6F9FC]" />
      </motion.div>
    </div>
  );
}