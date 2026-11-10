import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main>
      {/* Page introduction */}
      <section className="section-padding pb-16">
        <Container>
          <div className="max-w-5xl">
            <p className="eyebrow">Our services</p>

            <h1 className="mt-7 font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Every stage of a{" "}
              <span className="italic text-[var(--olive-dark)]">
                property journey.
              </span>
            </h1>

            <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_1.2fr]">
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                DESIGN · LAND · CONSTRUCTION · MANAGEMENT
              </p>

              <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                From the initial stages of property planning to construction and
                ongoing management, explore the services offered by Wakusini
                along Kenya's South Coast.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Services introduction */}
      <section className="section-padding border-t border-[var(--border)]">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow">What we offer</p>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                A considered approach to property.
              </h2>
            </div>

            <div>
              <p className="text-base leading-8 text-[var(--text-secondary)]">
                Each property project has its own requirements. Whether you're
                planning a new development, looking into land acquisition or
                seeking support with an existing villa, Wakusini offers services
                across different stages of property ownership and development.
              </p>

              <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
                Explore each service to understand how it may fit into your
                plans.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Service list */}
      <section className="section-padding pt-8">
        <Container>
          <div className="border-t border-[var(--border)]">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid gap-5 border-b border-[var(--border)] py-9 transition-colors duration-300 hover:bg-[var(--sandstone)]/40 sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-8 sm:py-12"
              >
                <span className="text-xs tracking-widest text-[var(--text-secondary)]">
                  {service.number}
                </span>

                <div>
                  <h3 className="font-display text-3xl leading-tight transition-colors duration-300 group-hover:text-[var(--olive-dark)] sm:text-4xl lg:text-5xl">
                    {service.title}
                  </h3>

                  <p className="mt-4 max-w-2xl text-sm leading-7 text-[var(--text-secondary)]">
                    {service.summary}
                  </p>
                </div>

                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--forest)] group-hover:bg-[var(--forest)] group-hover:text-white">
                  <ArrowUpRight size={19} />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-[var(--forest)] py-24 text-white sm:py-32">
        <Container>
          <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.2em] text-white/60">
                LET'S DISCUSS YOUR PLANS
              </p>

              <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                The right place to start is a conversation.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-white/65 sm:text-base">
                Tell us what you're planning and how we might be able to help.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 border-b border-white/50 pb-3 text-sm font-semibold transition-colors hover:border-white"
            >
              Get in touch
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
