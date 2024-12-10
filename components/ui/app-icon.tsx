"use client"

import { Bolt } from 'lucide-react';
import { motion } from 'framer-motion';

export function AppIcon() {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center justify-center"
    >
      <Bolt className="h-8 w-8 bg-gradient-to-r from-[#0A66C2] to-[#0077B5] text-white p-1.5 rounded-2xl" />
    </motion.div>
  );
}