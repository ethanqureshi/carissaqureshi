"use client";

import { motion, useReducedMotion } from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li";
};

/**
 * Subtle fade + 8px rise, once per element.
 * With prefers-reduced-motion, content appears instantly (no fade, no movement).
 * The rendered element tree is identical either way so server HTML hydrates cleanly.
 */
export default function Reveal({ children, className, as = "div" }: RevealProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as];

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={reduce ? { duration: 0 } : { duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </MotionTag>
  );
}
