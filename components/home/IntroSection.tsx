import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";

export default function IntroSection() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="eyebrow">About Wakusini</p>

            <h2 className="mt-5 max-w-md font-display text-4xl leading-tight sm:text-5xl">
              Property development, from the ground up.
            </h2>
          </div>

          <div>
            <p className="text-base leading-8 text-[var(--text-secondary)]">
              Wakusini is a property design, construction and villa management
              establishment based in Diani Beach on Kenya's South Coast.
            </p>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              Providing end-to-end property development and maintenance
              services, Wakusini brings together professionals across
              architecture, design, construction and villa management.
            </p>

            <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
              From a tiny villa to a five-bedroom home, the team approaches each
              project with the same commitment to quality and client
              relationships.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 border-b border-[var(--border)] pb-3 text-sm font-semibold transition-colors hover:border-[var(--forest)]"
            >
              Discover Wakusini
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
