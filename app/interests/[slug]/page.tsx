import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { interests } from "@/lib/data";

export function generateStaticParams() {
  return interests.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = interests.find((e) => e.slug === params.slug);
  return { title: item ? `${item.title} — Russell Walton` : "Russell Walton" };
}

export default function InterestDetail({ params }: { params: { slug: string } }) {
  const item = interests.find((e) => e.slug === params.slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/#interests" backLabel="Back" />;
}
