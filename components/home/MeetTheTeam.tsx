import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";

export default function MeetTheTeam() {
  return (
    <section className="section-padding">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          {/* Founders image */}
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--sandstone)]">
            <Image
              src="/images/about/website-potrait-1152x1536.jpg"
              alt="Billy and Elvira Fanuel"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover"
            />
          </div>

          {/* Introduction */}
          <div className="max-w-xl">
            <p className="eyebrow">Meet the Wakusini villa team</p>

            <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              A shared vision. A personal approach.
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              <p>
                Billy brings more than 10 years of experience in creative and
                real estate development, while Elvira brings her background in
                hospitality and business management.
              </p>

              <p>
                Together, they have dedicated themselves to building the
                Wakusini real estate and development brand, guided by their
                belief in honesty, transparency and strong client relationships.
              </p>
            </div>

            <Link
              href="/about"
              className="mt-9 inline-flex items-center gap-3 border-b border-[var(--border)] pb-3 text-sm font-semibold transition-colors hover:border-[var(--forest)]"
            >
              Meet Billy & Elvira
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
