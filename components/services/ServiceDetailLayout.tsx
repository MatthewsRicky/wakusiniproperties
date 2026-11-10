import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import type { Service } from "@/data/services";

type ServiceDetailLayoutProps = {
  service: Service;
};

export default function ServiceDetailLayout({
  service,
}: ServiceDetailLayoutProps) {
  return (
    <main>
      {/* Hero */}
      <section className="section-padding pb-16">
        <Container>
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="eyebrow">Our services</span>
              <span className="h-px w-10 bg-[var(--border)]" />
              <span className="text-xs tracking-widest text-[var(--text-secondary)]">
                {service.number} / 04
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              {service.heroTitle}
            </h1>

            <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_1.2fr]">
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                {service.title.toUpperCase()} · WAKUSINI
              </p>

              <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                {service.heroDescription}
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Feature image */}
      <section className="px-4 sm:px-6 lg:px-10">
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--sandstone)] sm:aspect-[16/9] lg:aspect-[16/7]">
          {service.image ? (
            <Image
              src={service.image}
              alt={`${service.title} by Wakusini`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs tracking-[0.2em] text-[var(--text-secondary)]">
                {service.title.toUpperCase()} — FEATURE IMAGE
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 text-white sm:p-10">
            <p className="text-xs tracking-[0.2em]">
              WAKUSINI · KENYAN SOUTH COAST
            </p>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow">{service.shortTitle}</p>

              <h2 className="mt-5 max-w-md font-display text-4xl leading-tight sm:text-5xl">
                {service.overviewTitle}
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              {service.overview.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Service considerations */}
      <section className="bg-[var(--forest)] py-24 text-white sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs tracking-[0.2em] text-white/60">
                THE PROCESS
              </p>

              <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
                {service.title}, considered from every angle.
              </h2>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              {service.sections.map((section, index) => (
                <div
                  key={section.title}
                  className="border-t border-white/20 pt-5"
                >
                  <p className="text-xs tracking-widest text-white/50">
                    {String(index + 1).padStart(2, "0")}
                  </p>

                  <h3 className="mt-5 font-display text-3xl">
                    {section.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Other services */}
      <section className="section-padding">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Explore further</p>

              <h2 className="mt-5 font-display text-4xl sm:text-5xl">
                More from Wakusini.
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex w-fit items-center gap-3 border-b border-[var(--border)] pb-3 text-sm font-semibold"
            >
              All services
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact CTA */}
      <section className="border-t border-[var(--border)] py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Start a conversation</p>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                Let's discuss your project.
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
                Tell us a little about what you have in mind.
              </p>
            </div>

            <Link
              href={`/contact?service=${service.slug}`}
              className="button-primary w-fit"
            >
              Enquire about {service.shortTitle.toLowerCase()}
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
