"use client"

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  as?: keyof JSX.IntrinsicElements;
}

export function AnimatedText({ 
  children, 
  className, 
  delay = 0,
  as: Component = 'div' 
}: AnimatedTextProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            delay,
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
          },
        },
      }}
    >
      <Component className={className}>{children}</Component>
    </motion.div>
  );
}

export function AnimatedTitle({ children, className, delay = 0 }: AnimatedTextProps) {
  return (
    <motion.h1
      initial="hidden"
      animate="visible"
      variants={fadeInUp}
      transition={{
        delay,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
    >
      {children}
    </motion.h1>
  );
}