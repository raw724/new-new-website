"use client";

import Flow from "./Flow";
import ItemList from "./ItemList";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <Flow id="experience" dark center={false}>
      <ItemList title="Job Experience" items={experience} basePath="/experience" dark />
    </Flow>
  );
}
