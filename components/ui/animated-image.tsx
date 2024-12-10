"use client"

import { motion } from 'framer-motion';
import Image, { ImageProps } from 'next/image';

interface AnimatedImageProps extends ImageProps {
  delay?: number;
}

export function AnimatedImage({ delay = 0, ...props }: AnimatedImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        delay,
        duration: 0.5,
        ease: [0.25, 0.1, 0.25, 1],
      }}
    >
      <Image {...props} />
    </motion.div>
  );
}