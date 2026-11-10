
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const developments = [
  {
    name: "Villa Maalum",
    slug: "villa-maalum",
    location: "Diani Beach, Kenya",
    image: "/images/developments/villa-maalum/Villa_Maalum_6web-1536x1075.jpg",
    logo: "/images/logos/VillaMaalum-1-150x150.png",
    className: "lg:mt-16",
  },
  {
    name: "Villa Kaya",
    slug: "villa-kaya",
    location: "Diani Beach, Kenya",
    image: "/images/developments/villa-kaya/14-FrontView-1024x614.jpg",
    logo: "/images/logos/villa-kaya-logo-150x150.png",
    className: "",
  },
  {
    name: "Tulia House",
    slug: "tulia-house",
    location: "Diani Beach, Kenya",
    image: "/images/developments/tulia-house/TuliaWeb-04-1-1024x683.jpg",
    logo: "/images/developments/tulia-house/tulia-logo-150x150.png",
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
              <div className="relative aspect-[4/5] overflow-hidden bg-[var(--sandstone)]">
                {development.image ? (
                  <Image
                    src={development.image}
                    alt={`${development.name} property`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-xs tracking-widest text-[var(--text-secondary)]">
                      IMAGE COMING SOON
                    </span>
                  </div>
                )}

                {/* Subtle contrast overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/30" />

                {/* Villa logo panel */}
                {development.logo && (
                  <div className="absolute inset-0 z-10 flex items-center justify-center">
                    <div className="flex min-h-32 min-w-40 items-center justify-center bg-white/70 px-8 py-7 shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                      <Image
                        src={development.logo}
                        alt={`${development.name} logo`}
                        width={340}
                        height={260}
                        className="h-auto max-h-20 w-auto max-w-40 object-contain"
                      />
                    </div>
                  </div>
                )}

                {/* Explore indicator */}
                <span className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition-colors group-hover:bg-white group-hover:text-[var(--foreground)]">
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
