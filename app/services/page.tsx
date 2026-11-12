import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import { services } from "@/data/services";

export default function ServicesPage() {
  return (
    <main>
      {/* Page introduction */}
      <section className="section-padding pb-20">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="max-w-5xl">
              <p className="eyebrow">Our services</p>

              <h1 className="mt-7 font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
                Every stage of a{" "}
                <span className="italic text-[var(--olive-dark)]">
                  property journey.
                </span>
              </h1>

              <div className="mt-12 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[0.8fr_1.2fr] md:gap-16">
                <p className="text-sm leading-7 tracking-wide text-[var(--text-secondary)]">
                  DESIGN · LAND · CONSTRUCTION · MANAGEMENT
                </p>

                <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                  From the initial stages of property planning to construction
                  and ongoing management, explore the services offered by
                  Wakusini along Kenya's South Coast.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services introduction */}
      <section className="section-padding bg-[var(--surface-muted)]">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow">What we offer</p>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                A considered approach to property.
              </h2>
            </div>

            <div className="max-w-2xl">
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
      <section className="section-padding">
        <Container>
          <div className="mx-auto max-w-6xl">
            <div className="mb-12 flex items-end justify-between gap-6">
              <div>
                <p className="eyebrow">Explore our expertise</p>

                <h2 className="mt-4 font-display text-4xl sm:text-5xl">
                  How we can help.
                </h2>
              </div>

              <span className="hidden text-xs tracking-widest text-[var(--text-secondary)] sm:block">
                {String(services.length).padStart(2, "0")} SERVICES
              </span>
            </div>

            <div className="border-t border-[var(--border)]">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group grid gap-5 border-b border-[var(--border)] py-10 transition-colors duration-300 hover:bg-[var(--surface-muted)] sm:grid-cols-[70px_1fr_auto] sm:items-center sm:gap-8 sm:px-6 sm:py-14"
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

                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-300 group-hover:border-[var(--olive-dark)] group-hover:bg-[var(--olive-dark)] group-hover:text-[var(--text-light)]">
                    <ArrowUpRight size={19} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="bg-[var(--foreground)] py-24 text-[var(--text-light)] sm:py-32">
        <Container>
          <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-[1fr_auto] md:items-end">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.2em] text-[var(--text-light)]/65">
                LET'S DISCUSS YOUR PLANS
              </p>

              <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                The right place to start is a conversation.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-[var(--text-light)]/75 sm:text-base">
                Tell us what you're planning and how we might be able to help.
              </p>
            </div>

            <Link
              href="/contact"
              className="inline-flex w-fit items-center gap-3 border-b border-[var(--text-light)]/50 pb-3 text-sm font-semibold transition-colors hover:border-[var(--text-light)]"
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
