import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";
import type { Service } from "@/data/services";

type ServiceDetailLayoutProps = {
  service: Service;
};

function SectionHeading({ top, bottom }: { top: string; bottom: string }) {
  return (
    <h2 className="mt-4 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
      <span className="block">{top}</span>
      <span className="block">{bottom}</span>
    </h2>
  );
}

function ServiceImage({
  src,
  alt,
  className = "",
}: {
  src?: string;
  alt: string;
  className?: string;
}) {
  return (
    <div
      className={`relative aspect-[4/3] overflow-hidden bg-[var(--surface-muted)] ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 hover:scale-[1.02]"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-xs tracking-[0.2em] text-[var(--text-secondary)]">
            IMAGE TO BE ADDED
          </span>
        </div>
      )}
    </div>
  );
}

export default function ServiceDetailLayout({
  service,
}: ServiceDetailLayoutProps) {
  const isEditorial = Boolean(service.editorialSections?.length);

  return (
    <main>
      {/* Hero */}
      <section className="section-padding pb-16">
        <Container>
          <div className="max-w-5xl">
            <div className="flex items-center gap-4">
              <span className="eyebrow">Our services</span>
              <span className="h-px w-10 bg-[var(--border)]" />
              <span className="text-xs tracking-widest text-[var(--text-secondary)]">
                {service.number} / 04
              </span>
            </div>

            <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              {service.heroTitle}
            </h1>

            <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_1.2fr]">
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                {service.title.toUpperCase()} · WAKUSINI
              </p>

              <div className="max-w-2xl">
                <p className="text-base leading-8 text-[var(--text-secondary)]">
                  {service.heroDescription}
                </p>

                <Link
                  href={`/contact?service=${service.slug}`}
                  className="button-primary mt-7 inline-flex w-fit items-center gap-3"
                >
                  {service.heroCtaLabel ??
                    `Enquire about ${service.shortTitle.toLowerCase()}`}
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Hero image */}
      <section className="px-4 sm:px-6 lg:w-[70%] mx-auto lg:px-10">
        <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-muted)] sm:aspect-[16/9] lg:aspect-[16/7]">
          {service.image ? (
            <Image
              src={service.image}
              alt={`${service.title} by Wakusini`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-xs tracking-[0.2em] text-[var(--text-secondary)]">
                FEATURE IMAGE
              </span>
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent" />

          <div className="absolute bottom-0 left-0 p-6 sm:p-10">
            <p className="text-xs tracking-[0.2em] text-white">
              WAKUSINI · KENYAN SOUTH COAST
            </p>
          </div>
        </div>
      </section>

      {/* Editorial service layout */}
      {isEditorial ? (
        <>
          {service.editorialSections?.map((section, index) => {
            const hasImage = Boolean(section.image);
            const imageFirst = section.imagePosition === "left";

            return (
              <section
                key={`${section.headingTop}-${index}`}
                className={`section-padding ${
                  index === 3 ? "bg-[var(--surface-muted)]" : ""
                }`}
              >
                <Container>
                  {hasImage ? (
                    <div
                      className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-20 ${
                        imageFirst ? "" : ""
                      }`}
                    >
                      <div
                        className={
                          imageFirst
                            ? "order-2 lg:order-2"
                            : "order-2 lg:order-1"
                        }
                      >
                        <p className="eyebrow">
                          {service.shortTitle} ·{" "}
                          {String(index + 1).padStart(2, "0")}
                        </p>

                        <SectionHeading
                          top={section.headingTop}
                          bottom={section.headingBottom}
                        />

                        <p className="mt-7 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
                          {section.description}
                        </p>
                      </div>

                      <ServiceImage
                        src={section.image}
                        alt={section.imageAlt ?? section.headingBottom}
                        className={
                          imageFirst
                            ? "order-1 lg:order-1"
                            : "order-1 lg:order-2"
                        }
                      />
                    </div>
                  ) : (
                    <div className="mx-auto grid max-w-5xl gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-20">
                      <div>
                        <p className="eyebrow">Building in Diani · 04</p>

                        <SectionHeading
                          top={section.headingTop}
                          bottom={section.headingBottom}
                        />
                      </div>

                      <p className="text-base leading-8 text-[var(--text-secondary)]">
                        {section.description}
                      </p>
                    </div>
                  )}
                </Container>
              </section>
            );
          })}

          {/* Trusted builders */}
          {service.trustSection && (
            <section className="section-padding">
              <Container>
                <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center lg:gap-20">
                  <div>
                    <p className="eyebrow">Why Wakusini</p>

                    <SectionHeading
                      top={service.trustSection.headingTop}
                      bottom={service.trustSection.headingBottom}
                    />

                    <p className="mt-7 max-w-lg text-base leading-8 text-[var(--text-secondary)]">
                      {service.trustSection.description}
                    </p>

                    <Link
                      href="/contact"
                      className="button-primary mt-8 inline-flex items-center gap-3"
                    >
                      Get in touch
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-3 sm:gap-5">
                    {service.trustSection.images.map((image, index) => (
                      <ServiceImage
                        key={`${image.alt}-${index}`}
                        src={image.src}
                        alt={image.alt}
                        className={index === 1 ? "mt-10 sm:mt-16" : ""}
                      />
                    ))}
                  </div>
                </div>
              </Container>
            </section>
          )}
        </>
      ) : (
        <>
          {/* Standard service overview */}
          <section className="section-padding">
            <Container>
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                <div>
                  <p className="eyebrow">{service.shortTitle}</p>

                  <h2 className="mt-5 max-w-md font-display text-4xl leading-tight sm:text-5xl">
                    {service.overviewTitle}
                  </h2>
                </div>

                <div className="space-y-6 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
                  {service.overview.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </Container>
          </section>

          {/* Standard service process */}
          <section className="bg-[var(--foreground)] py-24 text-[var(--text-light)] sm:py-32">
            <Container>
              <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
                <div>
                  <p className="text-xs tracking-[0.2em] text-[var(--text-light)]/60">
                    THE PROCESS
                  </p>

                  <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
                    {service.title}, considered from every angle.
                  </h2>
                </div>

                <div className="grid gap-10 sm:grid-cols-2">
                  {service.sections.map((section, index) => (
                    <div
                      key={section.title}
                      className="border-t border-white/20 pt-5"
                    >
                      <p className="text-xs tracking-widest text-[var(--text-light)]/60">
                        {String(index + 1).padStart(2, "0")}
                      </p>

                      <h3 className="mt-5 font-display text-3xl">
                        {section.title}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-[var(--text-light)]/80">
                        {section.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Container>
          </section>
        </>
      )}

      {/* More services */}
      <section className="section-padding border-t border-[var(--border)]">
        <Container>
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Explore further</p>

              <h2 className="mt-5 font-display text-4xl sm:text-5xl">
                More services.
              </h2>
            </div>

            <Link
              href="/services"
              className="inline-flex w-fit items-center gap-3 border-b border-[var(--border)] pb-3 text-sm font-semibold text-[var(--foreground)] transition-colors hover:border-[var(--bronze)]"
            >
              More Services
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Contact CTA - standard services only */}
      {!isEditorial && (
        <section className="border-t border-[var(--border)] py-20 sm:py-28">
          <Container>
            <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
              <div className="max-w-2xl">
                <p className="eyebrow">Start a conversation</p>

                <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                  Let's discuss your project.
                </h2>

                <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
                  Tell us a little about what you have in mind.
                </p>
              </div>

              <Link
                href={`/contact?service=${service.slug}`}
                className="button-primary inline-flex w-fit items-center gap-3"
              >
                Enquire about {service.shortTitle.toLowerCase()}
                <ArrowUpRight size={16} />
              </Link>
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
