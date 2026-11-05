import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-16 sm:pt-24 lg:pb-20 lg:pt-28">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <div className="relative z-10">
            <span className="eyebrow">
              Property & Development · Diani Beach
            </span>

            <h1 className="mt-8 max-w-xl font-display text-6xl leading-[0.94] tracking-tight sm:text-7xl lg:text-[5.8rem]">
              A place to
              <br />
              <span className="italic text-[var(--olive-dark)]">belong.</span>
              <br />
              A vision to
              <br />
              <span className="italic text-[var(--bronze)]">build.</span>
            </h1>

            <p className="mt-8 max-w-md text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              Thoughtful property development, architectural design and villa
              management, shaped by the character of Kenya's South Coast.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="/developments" className="button-primary">
                Explore developments
                <ArrowUpRight size={16} />
              </Link>

              <Link href="/services" className="button-outline">
                Our services
              </Link>
            </div>

            <div className="mt-16 hidden items-center gap-4 lg:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)]">
                <ArrowDown size={16} />
              </span>

              <span className="text-[0.65rem] tracking-[0.15em] text-[var(--text-secondary)]">
                DISCOVER WAKUSINI
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="image-placeholder aspect-[4/5] min-h-[420px] w-full sm:aspect-[5/4] lg:aspect-[4/5]">
              <span>Hero architectural photography</span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between text-white sm:bottom-8 sm:left-8 sm:right-8">
              <div>
                <p className="text-[0.6rem] tracking-[0.2em]">
                  THE KENYAN SOUTH COAST
                </p>

                <p className="mt-2 font-display text-3xl">Diani Beach</p>
              </div>

              <span className="border border-white/50 px-3 py-2 text-[0.6rem] tracking-widest">
                01 / 04
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
