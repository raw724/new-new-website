import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { experience } from "@/lib/data";

export function generateStaticParams() {
  return experience.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = experience.find((e) => e.slug === params.slug);
  return { title: item ? `${item.title} — Russell Walton` : "Russell Walton" };
}

export default function ExperienceDetail({ params }: { params: { slug: string } }) {
  const item = experience.find((e) => e.slug === params.slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/#experience" backLabel="Back" />;
}
