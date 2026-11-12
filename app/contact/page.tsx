import Link from "next/link";
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  MessageCircle,
  Check,
} from "lucide-react";

import Container from "@/components/shared/Container";
import ContactForm from "@/components/contact/ContactForm";
import { enquiryTypes, type EnquiryType } from "@/types/contact";
import { Suspense } from "react";

type ContactPageProps = {
  searchParams: Promise<{
    service?: string | string[];
  }>;
};

function isEnquiryType(value: string | undefined): value is EnquiryType {
  return enquiryTypes.some((type) => type.value === value);
}

const contactBenefits = [
  "Free Consultation",
  "Budget Quotations",
  "Site Visit",
  "Eco Friendly Constructions",
];

async function ContactFormWithSearchParams({ searchParams }: ContactPageProps) {
  const { service } = await searchParams;

  const requestedService = Array.isArray(service) ? service[0] : service;

  const initialEnquiryType = isEnquiryType(requestedService)
    ? requestedService
    : "other";

  return <ContactForm initialEnquiryType={initialEnquiryType} />;
}

export default async function ContactPage({ searchParams }: ContactPageProps) {
  

  return (
    <main>
      {/* Introduction */}
      <section className="section-padding pb-16">
        <Container>
          <div className="max-w-5xl">
            <p className="eyebrow">Get in Touch</p>

            <h1 className="mt-7 font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Contact{" "}
              <span className="italic text-[var(--olive-dark)]">Wakusini.</span>
            </h1>

            <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_1.2fr]">
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                WE LOVE TO HEAR FROM YOU!
              </p>

              <div>
                <h2 className="font-display text-2xl sm:text-3xl">
                  Let's Discuss About Your Villa!
                </h2>

                <p className="mt-4 max-w-2xl text-sm leading-8 text-[var(--text-secondary)]">
                  Whether you're planning a villa, exploring a property
                  opportunity or looking for a reliable team to help bring your
                  ideas to life, we'd love to hear from you. Get in touch with
                  us to discuss your plans and how Wakusini can help.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact content */}
      <section className="section-padding border-t border-[var(--border)] bg-[var(--surface-muted)]/40">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* Contact information */}
            <div className="lg:py-6">
              <p className="eyebrow">Get in Touch</p>

              <h2 className="mt-5 max-w-md font-display text-4xl leading-tight sm:text-5xl">
                Let's bring your plans to life.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-8 text-[var(--text-secondary)]">
                Get in touch with us to discuss your villa design, construction
                plans, land requirements or property management needs. Share
                your ideas and let our team help you explore the next steps.
              </p>

              {/* Service benefits */}
              <div className="mt-10 border-t border-[var(--border)] pt-7">
                <p className="text-xs font-medium tracking-[0.15em] text-[var(--text-secondary)]">
                  HOW WE CAN HELP
                </p>

                <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                  {contactBenefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-3 text-sm text-[var(--foreground)]"
                    >
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[var(--surface-muted)]">
                        <Check
                          size={13}
                          strokeWidth={2}
                          className="text-[var(--olive-dark)]"
                        />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Address */}
              <div className="mt-10 border-t border-[var(--border)] pt-7">
                <div className="flex items-start gap-4">
                  <MapPin
                    size={19}
                    strokeWidth={1.5}
                    className="mt-1 shrink-0 text-[var(--olive-dark)]"
                  />

                  <div>
                    <p className="text-xs font-medium tracking-[0.15em] text-[var(--text-secondary)]">
                      ADDRESS
                    </p>

                    <p className="mt-3 font-display text-2xl">Diani Beach</p>

                    <p className="mt-1 text-sm leading-7 text-[var(--text-secondary)]">
                      Diani Beach Road, Ukunda,
                      <br />
                      Kwale County, Kenya
                    </p>

                    <a
                      href="https://www.google.com/maps?q=-4.318826,39.563490"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[var(--olive-dark)] transition-colors hover:text-[var(--foreground)]"
                    >
                      View on Google Maps
                      <ArrowUpRight size={15} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct contact */}
              <div className="mt-8 border-t border-[var(--border)] pt-7">
                <p className="text-xs font-medium tracking-[0.15em] text-[var(--text-secondary)]">
                  CONTACT DETAILS
                </p>

                <div className="mt-5 space-y-5">
                  <a
                    href="mailto:info@wakusini.com"
                    className="flex items-center gap-4 text-sm transition-colors hover:text-[var(--olive-dark)]"
                  >
                    <Mail
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-[var(--olive-dark)]"
                    />
                    info@wakusini.com
                  </a>

                  <a
                    href="tel:+254792478591"
                    className="flex items-center gap-4 text-sm transition-colors hover:text-[var(--olive-dark)]"
                  >
                    <Phone
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-[var(--olive-dark)]"
                    />
                    +254 792 478 591
                  </a>

                  <a
                    href="https://wa.me/254792478591"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-sm transition-colors hover:text-[var(--olive-dark)]"
                  >
                    <MessageCircle
                      size={18}
                      strokeWidth={1.5}
                      className="shrink-0 text-[var(--olive-dark)]"
                    />
                    Connect with us on WhatsApp
                    <ArrowUpRight size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Enquiry form */}
            <div className="h-fit border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm sm:p-10 lg:p-12">
              <div className="mb-9 max-w-lg">
                <p className="eyebrow">Your Enquiry</p>

                <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                  How can we help?
                </h2>

                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Tell us a little about what you have in mind. Whether it's a
                  villa, a development or another property requirement, we're
                  ready to hear from you.
                </p>
              </div>

              <Suspense fallback={<div>Loading enquiry form...</div>}>
                <ContactFormWithSearchParams searchParams={searchParams} />
              </Suspense>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing section */}
      <section className="bg-[var(--foreground)] py-20 text-[var(--text-light)] sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs tracking-[0.2em] text-[var(--text-light)]/60">
                WAKUSINI · DIANI BEACH · KENYA
              </p>

              <h2 className="mt-5 font-display text-4xl sm:text-5xl">
                Rooted in the South Coast.
              </h2>
            </div>

            <Link
              href="/developments"
              className="inline-flex w-fit items-center gap-3 border-b border-[var(--text-light)]/50 pb-3 text-sm font-semibold transition-colors hover:border-[var(--text-light)]"
            >
              Explore our developments
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
