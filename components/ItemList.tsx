"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Item } from "@/lib/data";

export default function ItemList({
  title,
  items,
  basePath,
  dark = false,
}: {
  title: string;
  items: Item[];
  basePath: string;
  dark?: boolean;
}) {
  return (
    <div>
      <h2 className="font-display text-3xl md:text-4xl tracking-tight mb-10">{title}</h2>
      <ul className={`divide-y ${dark ? "divide-porcelain/15" : "divide-ink/10"}`}>
        {items.map((item, i) => (
          <motion.li
            key={item.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
          >
            <Link
              href={`${basePath}/${item.slug}`}
              data-cursor-hover
              className={`group flex items-baseline justify-between gap-6 py-6 focus-ring rounded transition-colors ${
                dark ? "hover:text-signal" : "hover:text-signal"
              }`}
            >
              <span>
                <span className="font-display text-2xl md:text-3xl tracking-tight block transition-transform duration-300 group-hover:translate-x-2">
                  {item.title}
                </span>
                <span className={`text-sm mt-1 block ${dark ? "text-porcelain/50" : "text-ink/50"}`}>
                  {item.blurb}
                </span>
              </span>
              <span className="opacity-0 group-hover:opacity-100 transition-opacity text-signal text-xl shrink-0">
                →
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
