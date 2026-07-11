"use client";

import Flow from "./Flow";
import ItemList from "./ItemList";
import { interests } from "@/lib/data";

export default function Interests() {
  return (
    <Flow id="interests" center={false}>
      <ItemList title="Hobbies & Interests" items={interests} basePath="/interests" />
    </Flow>
  );
}
