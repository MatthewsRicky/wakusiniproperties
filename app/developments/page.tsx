import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import { developments } from "@/data/developments";

export default function DevelopmentsPage() {
  return (
    <main>
      {/* Introduction */}
      <section className="section-padding pb-16">
        <Container>
          <div className="max-w-5xl">
            <p className="eyebrow">Our developments</p>

            <h1 className="mt-7 font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Places shaped by{" "}
              <span className="italic text-[var(--olive-dark)]">vision.</span>
            </h1>

            <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_1.2fr]">
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                SELECTED PROJECTS · KENYAN SOUTH COAST
              </p>

              <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                Explore selected properties and developments from Wakusini. Each
                project offers an opportunity to understand the company's
                approach to property and coastal living.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Development collection */}
      <section className="section-padding pt-8">
        <Container>
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="eyebrow">The portfolio</p>
              <h2 className="mt-4 font-display text-4xl sm:text-5xl">
                Selected developments.
              </h2>
            </div>

            <span className="hidden text-xs tracking-widest text-[var(--text-secondary)] sm:block">
              {String(developments.length).padStart(2, "0")} PROJECTS
            </span>
          </div>

          <div className="grid gap-x-8 gap-y-16 md:grid-cols-2">
            {developments.map((development, index) => (
              <Link
                key={development.slug}
                href={`/developments/${development.slug}`}
                className={`group block ${index % 2 === 1 ? "md:mt-20" : ""}`}
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[var(--sandstone)]">
                  {development.image ? (
                    <Image
                      src={development.image}
                      alt={`${development.name} development`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-xs tracking-widest text-[var(--text-secondary)]">
                        DEVELOPMENT IMAGE
                      </span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10" />

                  {development.logo && (
                    <div className="absolute inset-0 z-10 flex items-center justify-center">
                      <div className="flex min-h-32 min-w-40 items-center justify-center bg-white/90 px-8 py-7 shadow-lg backdrop-blur-sm transition-transform duration-500 group-hover:scale-105">
                        <Image
                          src={development.logo}
                          alt={`${development.name} logo`}
                          width={240}
                          height={160}
                          className="h-auto max-h-20 w-auto max-w-40 object-contain"
                        />
                      </div>
                    </div>
                  )}

                  <span className="absolute bottom-5 right-5 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/60 text-white transition-colors group-hover:bg-white group-hover:text-[var(--foreground)]">
                    <ArrowUpRight size={19} />
                  </span>
                </div>

                <div className="mt-6 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[0.65rem] tracking-[0.14em] text-[var(--text-secondary)]">
                      {String(index + 1).padStart(2, "0")} /{" "}
                      {development.category.toUpperCase()}
                    </p>

                    <h3 className="mt-2 font-display text-3xl sm:text-4xl">
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

      {/* Closing CTA */}
      <section className="bg-[var(--forest)] py-24 text-white sm:py-32">
        <Container>
          <div className="max-w-3xl">
            <p className="text-xs tracking-[0.2em] text-white/60">
              HAVE A PROJECT IN MIND?
            </p>

            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Let's create something meaningful.
            </h2>

            <Link
              href="/contact"
              className="mt-9 inline-flex items-center gap-3 border-b border-white/50 pb-3 text-sm font-semibold transition-colors hover:border-white"
            >
              Start a conversation
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
