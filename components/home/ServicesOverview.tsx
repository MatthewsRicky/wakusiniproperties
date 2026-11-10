import Link from "next/link";
import {
  ArrowUpRight,
  Building2,
  DraftingCompass,
  House,
  MapPinned,
} from "lucide-react";
import Image from "next/image";

import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const services = [
  {
    number: "01",
    title: "Architectural Design",
    description:
      "Designing considered spaces around the site, setting and intended way of living.",
    href: "/services/architecture-design",
    icon: DraftingCompass,
  },
  {
    number: "02",
    title: "Land Acquisition",
    description:
      "Supporting the search for suitable land and property opportunities.",
    href: "/services/land-acquisition",
    icon: MapPinned,
  },
  {
    number: "03",
    title: "Construction",
    description:
      "Bringing property concepts into built form through construction services.",
    href: "/services/construction",
    icon: Building2,
  },
  {
    number: "04",
    title: "Villa Management",
    description: "Supporting property owners with ongoing care and management.",
    href: "/services/villa-management",
    icon: House,
  },
];

export default function ServicesOverview() {
  return (
    <section className="section-padding bg-[#E9E5DC]">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="What we do"
              title="From the first idea to the finished property."
              description="A connected approach to property development, ownership and management."
            />

            <Link href="/services" className="button-primary mt-10">
              Explore our services
              <ArrowUpRight size={16} />
            </Link>

            <div className="image-placeholder mt-16 hidden aspect-[5/4] lg:flex">
              <Image 
              src={"/images/services/16-TopView-1-1024x717.jpg"}
              alt="Architectural and Construction imagery"
              width={600}
              height={600}
              className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="border-t border-[rgba(38,53,45,0.18)]">
            {services.map((service) => {
              const Icon = service.icon;

              return (
                <Link
                  key={service.number}
                  href={service.href}
                  className="group grid grid-cols-[42px_1fr_30px] items-start gap-4 border-b border-[rgba(38,53,45,0.18)] py-9 transition-colors hover:bg-white/30 sm:grid-cols-[55px_1fr_40px] sm:gap-6"
                >
                  <span className="pt-2 text-xs text-[var(--olive-dark)]">
                    {service.number}
                  </span>

                  <div>
                    <div className="flex items-center gap-3">
                      <Icon
                        size={18}
                        strokeWidth={1.4}
                        className="text-[var(--bronze)]"
                      />

                      <h3 className="font-display text-2xl sm:text-3xl">
                        {service.title}
                      </h3>
                    </div>

                    <p className="mt-3 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
                      {service.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={20}
                    className="mt-2 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
