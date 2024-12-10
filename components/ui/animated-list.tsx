"use client"

import { motion } from 'framer-motion';
import { staggerChildren } from '@/lib/animations';

interface AnimatedListProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export function AnimatedList({ children, className, delay = 0 }: AnimatedListProps) {
  return (
    <motion.ul
      initial="hidden"
      animate="visible"
      variants={staggerChildren}
      className={className}
    >
      {children}
    </motion.ul>
  );
}

export function AnimatedListItem({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.li
      variants={{
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0 },
      }}
      className={className}
    >
      {children}
    </motion.li>
  );
}