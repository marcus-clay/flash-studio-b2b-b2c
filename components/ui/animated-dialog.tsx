"use client"

import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogProps,
} from "./dialog";
import { modalAnimation } from "@/lib/animations";

interface AnimatedDialogProps extends DialogProps {
  title?: string;
  description?: string;
}

export function AnimatedDialog({
  children,
  title,
  description,
  ...props
}: AnimatedDialogProps) {
  return (
    <Dialog {...props}>
      <AnimatePresence>
        {props.open && (
          <DialogContent forceMount asChild>
            <motion.div
              variants={modalAnimation}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {(title || description) && (
                <DialogHeader>
                  {title && <DialogTitle>{title}</DialogTitle>}
                  {description && (
                    <DialogDescription>{description}</DialogDescription>
                  )}
                </DialogHeader>
              )}
              {children}
            </motion.div>
          </DialogContent>
        )}
      </AnimatePresence>
    </Dialog>
  );
}