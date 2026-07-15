"use client";

import Flow from "./Flow";
import { contact } from "@/lib/data";

export default function Contact() {
  return (
    <Flow id="contact" dark className="min-h-[80svh]">
      <p className="text-sm text-porcelain/50 mb-6">{contact.site}</p>
      <a
        href={`mailto:${contact.email}`}
        data-cursor-hover
        className="font-display text-3xl md:text-5xl tracking-tight hover:text-signal transition-colors focus-ring rounded break-all"
      >
        {contact.email}
      </a>
      <p className="mt-8 text-porcelain/60">{contact.phone} · Jersey / Exeter</p>
    </Flow>
  );
}
