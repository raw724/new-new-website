import Link from "next/link";
import type { Item } from "@/lib/data";
import { renderEmphasis } from "@/lib/emphasis";

export default function DetailPage({
  item,
  backHref,
  backLabel,
}: {
  item: Item;
  backHref: string;
  backLabel: string;
}) {
  return (
    <main className="min-h-[100svh] flex items-center justify-center px-6 py-32">
      <div className="w-full max-w-xl">
        <Link
          href={backHref}
          data-cursor-hover
          className="inline-flex items-center gap-2 text-sm text-ink/50 hover:text-signal transition-colors mb-12 focus-ring rounded"
        >
          ← {backLabel}
        </Link>

        {item.meta && <p className="text-sm text-ink/50 mb-3">{item.meta}</p>}

        <h1 className="font-display text-4xl md:text-5xl tracking-tight mb-8">{item.title}</h1>

        <div className="space-y-5">
          {item.body.map((p, i) => (
            <p key={i} className="text-lg text-ink/75 leading-relaxed">
              {renderEmphasis(p)}
            </p>
          ))}
        </div>
      </div>
    </main>
  );
}
