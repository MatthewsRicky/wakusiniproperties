import Link from "next/link";
import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";

export default function HomeHero() {
  return (
    <section className="relative overflow-hidden pb-12 pt-16 sm:pt-24 lg:pb-20 lg:pt-28">
      <Container>
        {/* Landscape hero image */}
        <div className="relative">
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/9] lg:aspect-[16/7]">
            <Image
              src="/images/hero/CoverPage3-scaled.jpg"
              alt="Wakusini property and architectural development in Diani Beach"
              fill
              priority
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 1440px"
              className="object-cover"
            />

            {/* Image contrast overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

            {/* Image information */}
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 text-white sm:p-8 lg:p-10">
              <div>
                <p className="text-[0.6rem] tracking-[0.2em] sm:text-xs">
                  THE KENYAN SOUTH COAST
                </p>

                <p className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl">
                  Diani Beach
                </p>
              </div>

              <span className="border border-white/60 px-3 py-2 text-[0.6rem] tracking-widest">
                KENYA
              </span>
            </div>
          </div>
        </div>

        {/* Editorial introduction */}
        <div className="mb-12 grid gap-8 lg:mb-16 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-4xl">
            <span className="eyebrow">
              Property & Development · Diani Beach
            </span>

            <h1 className="mt-7 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl xl:text-[5.8rem]">
              A place to{" "}
              <span className="italic text-[var(--olive-dark)]">belong.</span> A
              vision to{" "}
              <span className="italic text-[var(--bronze)]">build.</span>
            </h1>
          </div>

          <div className="flex max-w-md flex-col lg:pb-2">
            <p className="text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              Thoughtful property development, architectural design and villa
              management, shaped by the character of Kenya's South Coast.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link href="/developments" className="button-primary">
                Explore developments
                <ArrowUpRight size={16} />
              </Link>

              <Link href="/services" className="button-outline">
                Our services
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="mt-8 hidden items-center justify-end gap-4 lg:flex">
          <span className="text-[0.65rem] tracking-[0.15em] text-[var(--text-secondary)]">
            DISCOVER WAKUSINI
          </span>

          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)]">
            <ArrowDown size={16} />
          </span>
        </div>
      </Container>
    </section>
  );
}
