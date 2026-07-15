"use client";

import { motion } from "framer-motion";
import { profile } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col items-center justify-center text-center px-6"
    >
      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.15 }}
        className="flex flex-wrap items-baseline justify-center gap-x-4 leading-[1]"
      >
        <span className="font-display italic font-normal tracking-tight text-[13vw] md:text-[6rem]">
          {profile.firstName}
        </span>
        <span className="font-body font-medium tracking-tight text-[13vw] md:text-[6rem] text-ink/90">
          {profile.lastName}
        </span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.4 }}
        className="mt-6 text-lg md:text-xl text-ink/70"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.1 }}
        className="absolute bottom-10"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-10 bg-ink/25 mx-auto"
        />
      </motion.div>
    </section>
  );
}
