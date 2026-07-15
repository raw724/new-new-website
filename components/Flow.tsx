"use client";

import { useRef, ReactNode } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Flow({
  children,
  id,
  className = "",
  dark = false,
  center = true,
}: {
  children: ReactNode;
  id?: string;
  className?: string;
  dark?: boolean;
  center?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [0, 1, 1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.28, 0.72, 1], [48, 0, 0, -48]);

  return (
    <section
      id={id}
      ref={ref}
      className={`relative min-h-[100svh] flex items-center justify-center px-6 py-24 ${
        dark ? "bg-ink text-porcelain" : ""
      } ${className}`}
    >
      <motion.div
        style={{ opacity, y }}
        className={`w-full max-w-2xl mx-auto ${center ? "text-center" : "text-left"}`}
      >
        {children}
      </motion.div>
    </section>
  );
}
