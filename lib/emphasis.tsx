import type { ReactNode } from "react";

/**
 * Splits a string on <i>...</i> tags and returns React nodes, styling the
 * wrapped portions in orange with a different (serif italic) font — used
 * for the intro and tech copy so certain words stand out.
 */
export function renderEmphasis(text: string): ReactNode[] {
  const parts = text.split(/(<i>.*?<\/i>)/g);
  return parts
    .filter((part) => part.length > 0)
    .map((part, i) => {
      const match = part.match(/^<i>([\s\S]*)<\/i>$/);
      if (match) {
        return (
          <span key={i} className="emphasis">
            {match[1]}
          </span>
        );
      }
      return <span key={i}>{part}</span>;
    });
}
