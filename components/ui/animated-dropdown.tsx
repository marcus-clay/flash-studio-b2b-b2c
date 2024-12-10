"use client"

import { motion, AnimatePresence } from "framer-motion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuProps,
} from "./dropdown-menu";
import { menuAnimation } from "@/lib/animations";

export function AnimatedDropdownMenu({ children, ...props }: DropdownMenuProps) {
  return (
    <DropdownMenu {...props}>
      <AnimatePresence>
        {children}
      </AnimatePresence>
    </DropdownMenu>
  );
}

export function AnimatedDropdownMenuContent({
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuContent>) {
  return (
    <DropdownMenuContent asChild {...props}>
      <motion.div
        variants={menuAnimation}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        {children}
      </motion.div>
    </DropdownMenuContent>
  );
}

export function AnimatedDropdownMenuItem({
  children,
  ...props
}: React.ComponentProps<typeof DropdownMenuItem>) {
  return (
    <DropdownMenuItem asChild {...props}>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 10 }}
      >
        {children}
      </motion.div>
    </DropdownMenuItem>
  );
}