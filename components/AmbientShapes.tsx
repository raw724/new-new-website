"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useScroll, useTransform } from "framer-motion";

/**
 * Two soft orange shapes that drift with scroll and mouse position.
 *
 * Each shape is TWO nested elements on purpose:
 *  - an outer element whose position is driven by scroll + mouse (via
 *    `style`, using motion values)
 *  - an inner element that does its own small ambient bob (via `animate`)
 *
 * Framer Motion can't have `style` (external motion values) and `animate`
 * (its own keyframe loop) both fighting over the same transform on one
 * element — that's what caused the scroll-time glitching. Splitting them
 * across two elements keeps the two animation sources independent.
 */

function useParallax(strength = 1) {
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 40, damping: 20, mass: 0.5 });
  const sy = useSpring(my, { stiffness: 40, damping: 20, mass: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth - 0.5) * 2;
      const ny = (e.clientY / window.innerHeight - 0.5) * 2;
      mx.set(nx * 24 * strength);
      my.set(ny * 24 * strength);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my, strength]);

  return { x: sx, y: sy };
}

export default function AmbientShapes() {
  const { scrollYProgress } = useScroll();
  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 60,
    damping: 25,
    mass: 0.5,
  });

  const scrollShift1 = useTransform(smoothScroll, [0, 1], [0, 260]);
  const scrollShift2 = useTransform(smoothScroll, [0, 1], [0, -220]);
  const scrollShift3 = useTransform(smoothScroll, [0, 1], [0, 140]);
  const rotate = useTransform(smoothScroll, [0, 1], [0, 60]);

  const p1 = useParallax(1);
  const p2 = useParallax(0.6);
  const p3 = useParallax(1.3);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        style={{ x: p1.x, y: scrollShift1 }}
        className="absolute top-[14%] right-[8%] w-[38vw] max-w-[420px] aspect-square"
      >
        <motion.div
          animate={{ y: ["-4%", "4%", "-4%"] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full bg-signal/25 blur-3xl"
        />
      </motion.div>

      <motion.div
        style={{ x: p2.x, y: scrollShift2, rotate }}
        className="absolute bottom-[10%] left-[6%] w-[26vw] max-w-[300px] aspect-square"
      >
        <motion.div
          animate={{ y: ["3%", "-3%", "3%"] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="w-full h-full rounded-[40%] bg-ember/20 blur-2xl"
        />
      </motion.div>

      <motion.div
        style={{ x: p3.y, y: scrollShift3 }}
        className="absolute top-[46%] left-[42%] w-[10vw] max-w-[110px] aspect-square"
      >
        <motion.div
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="w-full h-full rounded-full bg-signal/40 blur-xl"
        />
      </motion.div>
    </div>
  );
}
