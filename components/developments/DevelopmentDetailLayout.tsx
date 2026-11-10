import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import type { Development } from "@/data/developments";

type DevelopmentDetailLayoutProps = {
  development: Development;
};

export default function DevelopmentDetailLayout({
  development,
}: DevelopmentDetailLayoutProps) {
  return (
    <main>
      {/* Development introduction */}
      <section className="section-padding pb-16">
        <Container>
          <Link
            href="/developments"
            className="inline-flex items-center gap-3 text-xs tracking-widest text-[var(--text-secondary)] transition-colors hover:text-[var(--foreground)]"
          >
            <ArrowLeft size={15} />
            ALL DEVELOPMENTS
          </Link>

          <div className="mt-12 max-w-5xl">
            <p className="eyebrow">
              {development.category} · {development.location}
            </p>

            <h1 className="mt-7 font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              {development.name}
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
              {development.introduction}
            </p>
          </div>
        </Container>
      </section>

      {/* Main project image */}
      <section className="px-4 sm:px-6 lg:px-10">
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--sandstone)] sm:aspect-[16/9] lg:aspect-[16/7]">
          {development.image ? (
            <Image
              src={development.image}
              alt={`${development.name} in ${development.location}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs tracking-widest text-[var(--text-secondary)]">
                PROJECT FEATURE IMAGE
              </span>
            </div>
          )}
        </div>
      </section>

      {/* Project overview */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow">The development</p>

              <h2 className="mt-5 max-w-md font-display text-4xl leading-tight sm:text-5xl">
                {development.overviewTitle}
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              {development.overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Project highlights, only when supplied */}
      {development.highlights.length > 0 && (
        <section className="bg-[var(--forest)] py-20 text-white sm:py-28">
          <Container>
            <p className="text-xs tracking-[0.2em] text-white/60">
              PROJECT DETAILS
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {development.highlights.map((highlight, index) => (
                <div key={highlight} className="border-t border-white/20 pt-5">
                  <p className="text-xs tracking-widest text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <p className="mt-5 font-display text-2xl">{highlight}</p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Contact */}
      <section className="section-padding">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Interested in working with us?</p>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                Let's talk about your property plans.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
                Get in touch with Wakusini to discuss your project.
              </p>
            </div>

            <Link
              href={`/contact?development=${development.slug}`}
              className="button-primary w-fit"
            >
              Make an enquiry
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
