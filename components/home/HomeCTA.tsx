import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";

export default function HomeCTA() {
  return (
    <section className="bg-[var(--foreground)] py-24 text-white sm:py-32">
      <Container>
        <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
          <div>
            <span className="eyebrow !text-[var(--bronze)]">
              Begin a conversation
            </span>

            <h2 className="mt-8 max-w-3xl font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              Your next chapter could begin on the South Coast.
            </h2>

            <p className="mt-7 max-w-lg text-sm leading-8 text-white/60">
              Whether you're exploring a property, considering a development or
              looking for professional villa management, let's talk about what
              you have in mind.
            </p>
          </div>

          <Link
            href="/contact"
            className="inline-flex min-h-14 items-center justify-center gap-4 bg-[var(--bronze)] px-7 text-xs font-semibold tracking-wider text-white transition-colors hover:bg-white hover:text-[var(--foreground)]"
          >
            Start an enquiry
            <ArrowUpRight size={17} />
          </Link>
        </div>
      </Container>
    </section>
  );
}
