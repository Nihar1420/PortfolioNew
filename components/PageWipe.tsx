"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/cn";

// A colour panel that covers the viewport on arrival, then lifts off.
export function PageWipe({ color }: { color: string }) {
  const reduce = useReducedMotion();
  if (reduce) return null;
  return (
    <motion.div
      aria-hidden
      className={cn("pointer-events-none fixed inset-0 z-[70]", color)}
      initial={{ y: 0 }}
      animate={{ y: "-100%" }}
      transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
    />
  );
}
