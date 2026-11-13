"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
            className="flex flex-col leading-none bg-(--text-primary) rounded px-3 py-4"
            aria-label="Wakusini Properties home"
          >
           <Image
           src="/images/logos/wakusini-logo-white-bg-1.png" 
           alt="Main Company Logo"
           width={150}
           height={400}
           />
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
