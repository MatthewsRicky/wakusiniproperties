import Link from "next/link";

const navigationLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Developments", href: "/developments" },
];

export default function Navigation() {
  return (
    <nav
      aria-label="Main navigation"
      className="hidden items-center gap-8 lg:flex"
    >
      {navigationLinks.map((link) => (
        <Link key={link.href} href={link.href} className="nav-link">
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
