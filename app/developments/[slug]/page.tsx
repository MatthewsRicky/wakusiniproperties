import type { Metadata } from "next";
import { notFound } from "next/navigation";

import DevelopmentDetailLayout from "@/components/developments/DevelopmentDetailLayout";
import { developments, getDevelopmentBySlug } from "@/data/developments";

type DevelopmentPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return developments.map((development) => ({
    slug: development.slug,
  }));
}

export async function generateMetadata({
  params,
}: DevelopmentPageProps): Promise<Metadata> {
  const { slug } = await params;
  const development = getDevelopmentBySlug(slug);

  if (!development) {
    return {
      title: "Development Not Found",
    };
  }

  return {
    title: development.name,
    description: development.introduction,
  };
}

export default async function DevelopmentPage({
  params,
}: DevelopmentPageProps) {
  const { slug } = await params;
  const development = getDevelopmentBySlug(slug);

  if (!development) {
    notFound();
  }

  return <DevelopmentDetailLayout development={development} />;
}
