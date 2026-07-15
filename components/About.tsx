"use client";

import Flow from "./Flow";
import { about } from "@/lib/data";
import { renderEmphasis } from "@/lib/emphasis";

export default function About() {
  return (
    <Flow id="about">
      <p className="font-display text-3xl md:text-5xl leading-[1.25] tracking-tight">
        {renderEmphasis(about)}
      </p>
    </Flow>
  );
}
