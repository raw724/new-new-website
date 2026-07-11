import { notFound } from "next/navigation";
import DetailPage from "@/components/DetailPage";
import { education } from "@/lib/data";

export function generateStaticParams() {
  return education.map((e) => ({ slug: e.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const item = education.find((e) => e.slug === params.slug);
  return { title: item ? `${item.title} — Russell Walton` : "Russell Walton" };
}

export default function EducationDetail({ params }: { params: { slug: string } }) {
  const item = education.find((e) => e.slug === params.slug);
  if (!item) notFound();
  return <DetailPage item={item} backHref="/#education" backLabel="Back" />;
}
