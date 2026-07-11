"use client";

import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.3 }}
      className="fixed top-0 inset-x-0 z-50 flex items-center justify-between px-6 md:px-10 h-20"
    >
      <a href="#top" data-cursor-hover className="font-display italic text-lg focus-ring rounded">
        Russell
      </a>
      <a
        href="#contact"
        data-cursor-hover
        className="text-sm text-ink/60 hover:text-signal transition-colors focus-ring rounded"
      >
        Say hello
      </a>
    </motion.nav>
  );
}
