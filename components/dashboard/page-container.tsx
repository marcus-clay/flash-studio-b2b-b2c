"use client"

import { motion } from 'framer-motion';
import { fadeInUp, staggerChildren } from '@/lib/animations';

interface PageContainerProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

export function PageContainer({ title, description, children }: PageContainerProps) {
  return (
    <motion.div
      className="max-w-5xl mx-auto space-y-6"
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
    >
      <motion.div variants={fadeInUp} className="space-y-1">
        <h2 className="text-lg font-medium tracking-tight text-gray-900">{title}</h2>
        {description && (
          <p className="text-sm text-gray-500">{description}</p>
        )}
      </motion.div>
      {children}
    </motion.div>
  );
}