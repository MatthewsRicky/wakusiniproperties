import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const developments = [
  {
    name: "Villa Maalum",
    slug: "villa-maalum",
    location: "Diani Beach, Kenya",
    imageLabel: "Villa Maalum photography",
    className: "lg:mt-16",
  },
  {
    name: "Villa Kaya",
    slug: "villa-kaya",
    location: "Diani Beach, Kenya",
    imageLabel: "Villa Kaya photography",
    className: "",
  },
  {
    name: "Tulia House",
    slug: "tulia-house",
    location: "Diani Beach, Kenya",
    imageLabel: "Tulia House photography",
    className: "lg:mt-16",
  },
];

export default function FeaturedDevelopments() {
  return (
    <section className="section-padding">
      <Container>
        <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-end">
          <SectionHeading
            eyebrow="Selected developments"
            title="Spaces designed to live in."
            description="Explore our property developments along the Kenyan South Coast."
          />

          <Link
            href="/developments"
            className="inline-flex w-fit items-center gap-3 border-b border-[var(--border)] pb-3 text-sm font-semibold"
          >
            View all developments
            <ArrowUpRight size={16} />
          </Link>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-3 lg:items-start lg:gap-8">
          {developments.map((development, index) => (
            <Link
              key={development.slug}
              href={`/developments/${development.slug}`}
              className={`group block ${development.className}`}
            >
              <div className="image-placeholder relative aspect-[4/5] overflow-hidden transition-transform duration-500 group-hover:scale-[0.99]">
                <span>{development.imageLabel}</span>

                <span className="absolute bottom-5 right-5 z-10 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition-colors group-hover:bg-white group-hover:text-[var(--foreground)]">
                  <ArrowUpRight size={19} />
                </span>
              </div>

              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <p className="text-[0.65rem] tracking-[0.14em] text-[var(--text-secondary)]">
                    0{index + 1} / DEVELOPMENT
                  </p>

                  <h3 className="mt-2 font-display text-3xl">
                    {development.name}
                  </h3>

                  <p className="mt-2 text-xs text-[var(--text-secondary)]">
                    {development.location}
                  </p>
                </div>

                <ArrowUpRight
                  size={19}
                  className="mt-6 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
