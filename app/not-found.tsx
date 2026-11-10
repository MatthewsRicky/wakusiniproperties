import Link from "next/link";
import { ArrowLeft, ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center py-24">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow">404 · Page not found</p>

          <h1 className="mt-7 font-display text-5xl leading-tight sm:text-6xl">
            This page seems to be elsewhere.
          </h1>

          <p className="mx-auto mt-6 max-w-md text-sm leading-8 text-[var(--text-secondary)]">
            The page you're looking for may have moved or may no longer be
            available.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Link href="/" className="button-primary">
              Return home
              <ArrowUpRight size={16} />
            </Link>

            <Link href="/developments" className="button-outline">
              <ArrowLeft size={16} />
              Explore developments
            </Link>
          </div>
        </div>
      </Container>
    </main>
  );
}
