import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";

const foundersImage = "/images/about/website-potrait-1152x1536.jpg";
const aboutImage = "/images/developments/villa-kaya/10-Dining-1024x614.jpg";

export default function AboutPage() {
  return (
    <main>
      {/* Introduction */}
      <section className="section-padding pb-16">
        <Container>
          <div className="max-w-5xl">
            <p className="eyebrow">About Wakusini</p>

            <h1 className="mt-7 font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Property development, shaped by{" "}
              <span className="italic text-[var(--olive-dark)]">purpose.</span>
            </h1>

            <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_1.2fr]">
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                WHO WE ARE · DIANI BEACH, KENYA
              </p>

              <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                Wakusini is a property design, construction and villa management
                establishment based in Diani Beach on Kenya's South Coast.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Company image */}
      <section className="px-4 sm:px-6 lg:px-10">
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--sandstone)] sm:aspect-[16/9] lg:aspect-[16/7]">
          <Image
            src={aboutImage}
            alt="Wakusini property development on Kenya's South Coast"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />

          <p className="absolute bottom-6 left-6 text-xs tracking-[0.2em] text-white sm:bottom-10 sm:left-10">
            ROOTED IN DIANI BEACH · KENYA
          </p>
        </div>
      </section>

      {/* About Wakusini */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow">About the company</p>

              <h2 className="mt-5 max-w-md font-display text-4xl leading-tight sm:text-5xl">
                From a tiny villa to a five-bedroom home.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              <p>
                Wakusini provides end-to-end property development and
                maintenance services. From a tiny villa to a five-bedroom villa,
                no project is too small or too large.
              </p>

              <p>
                Our professional, friendly and experienced team brings together
                expertise across a wide range of property services, from
                architects and designers to villa rental specialists.
              </p>

              <p>
                This combined approach allows us to offer property development
                and management services across the different stages of a
                property's journey.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Founders */}
      <section className="bg-[var(--sandstone)]/50 py-24 sm:py-32">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--sandstone)]">
              <Image
                src={foundersImage}
                alt="Billy and Elvira Fanuel, founders of Wakusini"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div>
              <p className="eyebrow">The people behind Wakusini</p>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Billy & Elvira Fanuel
              </h2>

              <div className="mt-8 space-y-6 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
                <p>
                  Billy has an extensive background in the creative and real
                  estate development fields, spanning more than 10 years.
                </p>

                <p>
                  Elvira, his wife, is a skilled and qualified hotelier and
                  business manager.
                </p>

                <p>
                  They realised that what they could achieve together in real
                  estate was much greater than what either could accomplish
                  alone in any industry. They therefore decided to devote
                  themselves fully to building their real estate and development
                  brand.
                </p>

                <p>
                  Both have established themselves as dependable professionals,
                  diligent, enthusiastic and passionate about their work and
                  their commitment to the Wakusini brand.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Relationships */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow">Our philosophy</p>

              <h2 className="mt-5 max-w-md font-display text-4xl leading-tight sm:text-5xl">
                Strong relationships. Shared confidence.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              <p>
                Together, Billy and Elvira have cultivated quality resources and
                professional contacts to benefit homebuyers.
              </p>

              <p>
                They have established working relationships with a network of
                real estate agents, architects, builders and rental and property
                management companies.
              </p>

              <p>
                They believe in building strong client relationships through
                honesty and transparency.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services CTA */}
      <section className="bg-[var(--forest)] py-24 text-white sm:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.2em] text-olive-700">
                DISCOVER WAKUSINI
              </p>

              <h2 className="mt-6 font-display text-4xl leading-tight text-olive-700/70 sm:text-5xl lg:text-6xl">
                Explore what we can build together.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-olive-700/60 sm:text-base">
                Discover the services that bring together property design,
                development and management.
              </p>
            </div>

            <Link href="/services" className="button-primary w-fit">
              View our services
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
