import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";

const footerLinks = [
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Developments", href: "/developments" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const currentYear = 2026
  return (
    <footer className="bg-[var(--foreground)] text-[var(--text-light)]">
      <Container className="py-20">
        <div className="grid gap-14 md:grid-cols-2 lg:grid-cols-[1.4fr_0.7fr_0.9fr]">
          <div>
            <Link
              href="/"
              className="flex flex-col leading-none"
              aria-label="Wakusini Properties home"
            >
              <Image
                src="/images/logos/wakusini-logo-white-bg-1.png"
                alt="Main Company Logo"
                width={150}
                height={400}
              />
            </Link>

            <p className="mt-8 max-w-sm text-sm leading-7 text-white/60">
              Property development, architecture and villa management on Kenya's
              beautiful South Coast.
            </p>
          </div>

          <div>
            <p className="eyebrow !text-[var(--bronze)]">Explore</p>

            <nav className="mt-7 flex flex-col gap-4">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit text-sm text-white/65 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="eyebrow !text-[var(--bronze)]">Get in touch</p>

            <h3 className="mt-6 font-display text-3xl">
              Have a project in mind?
            </h3>

            <Link
              href="/contact"
              className="mt-7 inline-flex items-center gap-3 border-b border-white/30 pb-3 text-sm"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </div>

        <div className="mt-20 flex flex-col justify-between gap-4 border-t border-white/15 pt-7 text-xs text-white/45 sm:flex-row">
          <p>© {currentYear} Wakusini Properties. All rights reserved.</p>

          <p>Designed around coastal living.</p>
        </div>
      </Container>
    </footer>
  );
}
