"use client";

import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";

type MobileNavProps = {
  isOpen: boolean;
  onClose: () => void;
};

const links = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Developments", href: "/developments" },
];

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <div
      className={`
        fixed inset-0 z-[60] bg-[var(--background)]
        transition-transform duration-300 lg:hidden
        ${isOpen ? "translate-x-0" : "pointer-events-none translate-x-full"}
      `}
      aria-hidden={!isOpen}
    >
      <div className="flex h-20 items-center justify-between border-b border-[var(--border)] px-6">
        <Link
          href="/"
          onClick={onClose}
          className="font-display text-3xl"
          tabIndex={isOpen ? 0 : -1}
        >
          WAKUSINI
        </Link>

        <button
          type="button"
          onClick={onClose}
          aria-label="Close navigation"
          tabIndex={isOpen ? 0 : -1}
          className="p-2"
        >
          <X size={23} strokeWidth={1.5} />
        </button>
      </div>

      <nav className="flex flex-col px-6 pt-12">
        {links.map((link, index) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClose}
            tabIndex={isOpen ? 0 : -1}
            className="flex items-center justify-between border-b border-[var(--border)] py-6 font-display text-4xl"
          >
            <span>{link.label}</span>
            <span className="text-sm text-[var(--bronze)]">0{index + 1}</span>
          </Link>
        ))}

        <Link
          href="/contact"
          onClick={onClose}
          tabIndex={isOpen ? 0 : -1}
          className="button-primary mt-10 w-full"
        >
          Start a conversation
          <ArrowUpRight size={16} />
        </Link>
      </nav>
    </div>
  );
}
