import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";

export default function ContactPage() {
  return (
    <main>
      {/* Introduction */}
      <section className="section-padding pb-16">
        <Container>
          <div className="max-w-5xl">
            <p className="eyebrow">Contact Wakusini</p>

            <h1 className="mt-7 font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Every great project starts with a{" "}
              <span className="italic text-[var(--olive-dark)]">
                conversation.
              </span>
            </h1>

            <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_1.2fr]">
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                GET IN TOUCH · DIANI BEACH, KENYA
              </p>

              <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                Whether you're exploring a property opportunity, planning a
                development or looking for property management support, we'd be
                glad to hear about your plans.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Contact content */}
      <section className="section-padding border-t border-[var(--border)]">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            {/* Contact information */}
            <div>
              <p className="eyebrow">Let's connect</p>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                Tell us what you're working on.
              </h2>

              <p className="mt-6 max-w-md text-sm leading-8 text-[var(--text-secondary)]">
                Share a little about your project or enquiry. The Wakusini team
                can then understand what you're looking for and how to take the
                conversation forward.
              </p>

              <div className="mt-12 border-t border-[var(--border)] pt-6">
                <p className="text-xs tracking-[0.15em] text-[var(--text-secondary)]">
                  LOCATION
                </p>

                <p className="mt-3 font-display text-2xl">Diani Beach</p>

                <p className="mt-1 text-sm text-[var(--text-secondary)]">
                  Kenya's South Coast
                </p>
              </div>

              {/* Add verified phone, email and social links here */}
              <div className="mt-8 border-t border-[var(--border)] pt-6">
                <p className="text-xs tracking-[0.15em] text-[var(--text-secondary)]">
                  DIRECT CONTACT
                </p>

                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Add Wakusini's verified email address, telephone number and
                  WhatsApp contact here.
                </p>
              </div>
            </div>

            {/* Enquiry form layout */}
            <div className="bg-[var(--sandstone)]/50 p-6 sm:p-10">
              <div className="mb-9">
                <p className="eyebrow">Your enquiry</p>

                <h2 className="mt-4 font-display text-3xl sm:text-4xl">
                  How can we help?
                </h2>

                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Fill in the details below to start your enquiry.
                </p>
              </div>

              {/* Form fields — connect submission before launch */}
              <div className="space-y-6">
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="name"
                      className="mb-2 block text-xs font-semibold"
                    >
                      Your name
                    </label>

                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Full name"
                      className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--forest)]"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="mb-2 block text-xs font-semibold"
                    >
                      Email address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--forest)]"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Phone number
                  </label>

                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your contact number"
                    className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--forest)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="enquiry"
                    className="mb-2 block text-xs font-semibold"
                  >
                    What is your enquiry about?
                  </label>

                  <select
                    id="enquiry"
                    name="enquiry"
                    defaultValue=""
                    className="w-full border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm outline-none focus:border-[var(--forest)]"
                  >
                    <option value="" disabled>
                      Select an enquiry type
                    </option>
                    <option value="architecture-design">
                      Architectural Design
                    </option>
                    <option value="land-acquisition">Land Acquisition</option>
                    <option value="construction">Construction</option>
                    <option value="villa-management">
                      Property & Villa Management
                    </option>
                    <option value="development">Development Enquiry</option>
                    <option value="other">Something else</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="mb-2 block text-xs font-semibold"
                  >
                    Tell us about your plans
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    placeholder="A little about your project or enquiry..."
                    className="w-full resize-y border-b border-[var(--border)] bg-transparent px-0 py-3 text-sm outline-none transition-colors placeholder:text-[var(--text-secondary)] focus:border-[var(--forest)]"
                  />
                </div>

                <p className="text-xs leading-6 text-[var(--text-secondary)]">
                  Form submission will be connected to Wakusini's enquiry
                  handling before launch.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Closing location section */}
      <section className="bg-[var(--forest)] py-20 text-white sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs tracking-[0.2em] text-white/60">
                WAKUSINI · KENYA
              </p>

              <h2 className="mt-5 font-display text-4xl sm:text-5xl">
                Rooted in the South Coast.
              </h2>
            </div>

            <Link
              href="/developments"
              className="inline-flex w-fit items-center gap-3 border-b border-white/50 pb-3 text-sm font-semibold transition-colors hover:border-white"
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
