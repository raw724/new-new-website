"use client";

import Flow from "./Flow";
import ItemList from "./ItemList";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <Flow id="education" center={false}>
      <ItemList title="Education" items={education} basePath="/education" />
    </Flow>
  );
}
