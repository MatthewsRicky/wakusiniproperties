import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

export default function IntroSection() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="Who we are"
              title="More than property. A considered way of building."
            />
          </div>

          <div className="flex flex-col justify-between">
            <p className="text-base leading-8 text-[var(--text-secondary)] sm:text-lg sm:leading-9">
              Wakusini brings together property development, architectural
              design, construction and villa management to serve people looking
              to create, own and manage property along Kenya's South Coast.
            </p>

            <Link
              href="/about"
              className="mt-9 inline-flex w-fit items-center gap-3 border-b border-[var(--border)] pb-3 text-sm font-semibold transition-colors hover:border-[var(--foreground)]"
            >
              Discover our story
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
