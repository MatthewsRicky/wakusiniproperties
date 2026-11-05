"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";

import Container from "@/components/shared/Container";
import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <Container className="flex h-20 items-center justify-between">
          <Link
            href="/"
            className="flex flex-col leading-none"
            aria-label="Wakusini Properties home"
          >
            <span className="font-display text-3xl font-semibold tracking-wide">
              WAKUSINI
            </span>

            <span className="mt-1 text-[0.52rem] font-medium tracking-[0.24em] text-[var(--text-secondary)]">
              PROPERTIES
            </span>
          </Link>

          <Navigation />

          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden items-center gap-2 text-xs font-semibold lg:inline-flex"
            >
              Let's talk
              <ArrowUpRight size={15} />
            </Link>

            <button
              type="button"
              onClick={() => setIsMobileOpen(true)}
              aria-label="Open navigation"
              aria-expanded={isMobileOpen}
              className="p-2 lg:hidden"
            >
              <Menu size={24} strokeWidth={1.5} />
            </button>
          </div>
        </Container>
      </header>

      <MobileNav isOpen={isMobileOpen} onClose={() => setIsMobileOpen(false)} />
    </>
  );
}
