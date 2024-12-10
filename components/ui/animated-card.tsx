"use client"

import { motion } from "framer-motion";
import { Card, CardProps } from "./card";
import { cardHoverAnimation } from "@/lib/animations";

interface AnimatedCardProps extends CardProps {
  delay?: number;
}

export function AnimatedCard({ children, delay = 0, ...props }: AnimatedCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.3 }}
      whileHover={cardHoverAnimation}
    >
      <Card {...props}>{children}</Card>
    </motion.div>
  );
}