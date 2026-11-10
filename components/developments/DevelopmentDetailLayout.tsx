import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, MapPin } from "lucide-react";

import Container from "@/components/shared/Container";
import type { Development } from "@/data/developments";
import DevelopmentGallery from "@/components/developments/DevelopmentGallery";

type DevelopmentDetailLayoutProps = {
  development: Development;
};

const formatNumber = (value: number) =>
  new Intl.NumberFormat("en-US").format(value);

const formatCurrency = (value: number, currency: "USD" | "KES") =>
  `${currency} ${formatNumber(value)}`;

function SectionTitle({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mb-10">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-display text-4xl sm:text-5xl">{title}</h2>
    </div>
  );
}

export default function DevelopmentDetailLayout({
  development,
}: DevelopmentDetailLayoutProps) {
  const property = development.propertyDetails;
  const enquiryUrl = `/contact?development=${development.slug}`;

  return (
    <main>
      {/* Introduction and property summary */}
      <section className="section-padding pb-16">
        <Container>
          <Link
            href="/developments"
            className="inline-flex items-center gap-2 text-xs tracking-[0.15em] text-[var(--text-secondary)] transition-colors hover:text-[ivory-700]"
          >
            <ArrowLeft size={15} />
            ALL DEVELOPMENTS
          </Link>

          <div className="mt-12 max-w-5xl">
            <p className="eyebrow">
              {development.category} <span className="mx-2">·</span>
              {development.location}
            </p>

            <h1 className="mt-4 font-display text-5xl leading-[1.05] sm:text-6xl lg:text-7xl">
              {development.name}
            </h1>

            {property ? (
              <div className="mt-8 flex flex-col gap-7 border-y border-[var(--border)] py-7 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-x-10 gap-y-5">
                  <div>
                    <p className="text-xs tracking-[0.15em] text-[var(--text-secondary)]">
                      PROPERTY TYPE
                    </p>
                    <p className="mt-2 font-display text-2xl">
                      {property.bedrooms} BED VILLA
                    </p>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.15em] text-[var(--text-secondary)]">
                      USD
                    </p>
                    <p className="mt-2 font-display text-2xl">
                      ${formatNumber(property.price.usd)}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs tracking-[0.15em] text-[var(--text-secondary)]">
                      KES
                    </p>
                    <p className="mt-2 font-display text-2xl">
                      {formatNumber(property.price.kes)}
                    </p>
                  </div>
                </div>

                <Link
                  href={enquiryUrl}
                  className="button-primary inline-flex shrink-0 items-center justify-center gap-3"
                >
                  Invest now
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            ) : (
              <p className="mt-6 max-w-3xl text-base leading-8 text-[var(--text-secondary)] sm:text-lg">
                {development.introduction}
              </p>
            )}
          </div>
        </Container>
      </section>

      {/* Main development image - standard projects only */}
      {!property && (
        <section className="px-4 sm:px-6 lg:px-10">
          <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-muted)] lg:aspect-[16/8]">
            {development.image ? (
              <Image
                src={development.image}
                alt={development.name}
                fill
                priority
                sizes="100vw"
                className="object-cover"
              />
            ) : null}
          </div>
        </section>
      )}

      {/* Standard project overview */}
      {!property && (
        <section className="section-padding">
          <Container>
            <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
              <div>
                <p className="eyebrow">The development</p>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                  {development.overviewTitle}
                </h2>
              </div>

              <div className="space-y-5">
                {development.overview.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-8 text-[var(--text-secondary)]"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* Property gallery */}
      <DevelopmentGallery
        images={development.gallery}
        name={development.name}
      />

      {/* Property-specific content */}
      {property && (
        <>
          {/* Investment overview */}
          <section className="section-padding">
            <Container>
              <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                <div>
                  <p className="eyebrow">{property.investmentLabel}</p>
                  <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                    {property.investmentTitle}
                  </h2>
                </div>

                <div className="space-y-5">
                  {property.investmentDescription.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-base leading-8 text-[var(--text-secondary)]"
                    >
                      {paragraph}
                    </p>
                  ))}

                  <div className="border-l border-[var(--bronze)] pl-5">
                    <p className="text-base leading-8 text-[ivory-700]">
                      {property.managementDescription}
                    </p>
                  </div>
                </div>
              </div>
            </Container>
          </section>

          {/* Amenities */}
          {property.amenities.length > 0 && (
            <section className="bg-[var(--foreground)] py-20 text-[var(--text-light)] sm:py-24">
              <Container>
                <div className="max-w-2xl">
                  <p className="eyebrow text-[var(--bronze)]">
                    Thoughtful details
                  </p>
                  <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                    Designed for coastal living.
                  </h2>
                </div>

                <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-5 border-t border-white/20 pt-8 sm:grid-cols-3 lg:grid-cols-4">
                  {property.amenities.map((amenity) => (
                    <div
                      key={amenity}
                      className="border-b border-white/15 pb-4 text-sm leading-6 text-white/80"
                    >
                      {amenity}
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          )}

          {/* Features and inclusions */}
          {property.inclusions && (
            <section className="section-padding">
              <Container>
                <div className="grid gap-10 lg:grid-cols-2 lg:items-center lg:gap-16">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-muted)]">
                    <Image
                      src={property.inclusions.image}
                      alt={`${development.name} features and inclusions`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>

                  <div>
                    <p className="eyebrow">The details</p>
                    <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                      {property.inclusions.title}
                    </h2>

                    <ul className="mt-8 divide-y divide-[var(--border)] border-t border-[var(--border)]">
                      {property.inclusions.features.map((feature) => (
                        <li
                          key={feature}
                          className="py-4 text-sm text-[var(--text-secondary)]"
                        >
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Container>
            </section>
          )}

          {/* Building cost table */}
          {property.buildingCost && (
            <section className="section-padding bg-[var(--surface-muted)]">
              <Container>
                <div className="mx-auto max-w-4xl">
                  <SectionTitle
                    eyebrow="Investment breakdown"
                    title={property.buildingCost.title}
                  />

                  <div className="overflow-hidden border border-[var(--border)] bg-[ivory-700]">
                    <table className="w-full text-left">
                      <thead>
                        <tr className="border-b border-[var(--border)]">
                          <th className="px-5 py-4 text-xs font-medium tracking-[0.12em] text-[var(--text-secondary)] sm:px-8">
                            DESCRIPTION
                          </th>
                          <th className="px-5 py-4 text-right text-xs font-medium tracking-[0.12em] text-[var(--text-secondary)] sm:px-8">
                            AMOUNT
                          </th>
                        </tr>
                      </thead>

                      <tbody>
                        {property.buildingCost.rows.map((row) => (
                          <tr
                            key={row.label}
                            className={`border-b border-[var(--border)] last:border-b-0 ${
                              row.highlight
                                ? "bg-[var(--surface-muted)]/60"
                                : ""
                            }`}
                          >
                            <td className="px-5 py-5 sm:px-8">
                              <p
                                className={`text-sm ${
                                  row.highlight
                                    ? "font-medium text-[ivory-700]"
                                    : "text-[var(--text-secondary)]"
                                }`}
                              >
                                {row.label}
                              </p>
                              {row.note && (
                                <p className="mt-1 text-xs text-[var(--text-secondary)]">
                                  {row.note}
                                </p>
                              )}
                            </td>
                            <td
                              className={`px-5 py-5 text-right text-sm sm:px-8 ${
                                row.highlight
                                  ? "font-semibold text-[ivory-700]"
                                  : "text-[var(--text-secondary)]"
                              }`}
                            >
                              {row.amount}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {property.buildingCost.disclaimer && (
                    <ul className="mt-6 space-y-2">
                      {property.buildingCost.disclaimer.map((note) => (
                        <li
                          key={note}
                          className="text-xs leading-6 text-[var(--text-secondary)]"
                        >
                          * {note}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Container>
            </section>
          )}

          {/* Floor plan */}
          {property.floorPlan && (
            <section className="section-padding">
              <Container>
                <SectionTitle
                  eyebrow="The layout"
                  title="A considered floor plan."
                />

                <div className="relative mx-auto aspect-[4/3] max-w-5xl overflow-hidden bg-[var(--surface-muted)]">
                  <Image
                    src={property.floorPlan.image}
                    alt={property.floorPlan.alt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 1024px"
                    className="object-contain p-4 sm:p-8"
                  />
                </div>
              </Container>
            </section>
          )}

          {/* Payment terms */}
          {property.paymentTerms && property.paymentTerms.length > 0 && (
            <section className="bg-[var(--foreground)] py-20 text-[var(--text-light)] sm:py-24">
              <Container>
                <div className="max-w-2xl">
                  <p className="eyebrow !text-[var(--bronze)]">
                    Flexible investment
                  </p>
                  <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                    Payment terms
                  </h2>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-white/65">
                    A structured payment schedule aligned with the progress of
                    construction.
                  </p>
                </div>

                <div className="mt-12 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-4">
                  {property.paymentTerms.map((term, index) => (
                    <div
                      key={`${term.percentage}-${term.description}`}
                      className="bg-[ivory-700] p-6 sm:p-8"
                    >
                      <p className="font-display text-5xl text-[var(--bronze)]">
                        {term.percentage}%
                      </p>
                      <p className="mt-5 text-xs tracking-[0.15em] text-white/50">
                        STAGE {String(index + 1).padStart(2, "0")}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-white/85">
                        {term.description}
                      </p>
                    </div>
                  ))}
                </div>
              </Container>
            </section>
          )}

          {/* Architectural design */}
          {property.architecturalDescription &&
            property.architecturalDescription.length > 0 && (
              <section className="section-padding">
                <Container>
                  <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                    <div>
                      <p className="eyebrow">The architecture</p>
                      <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                        Architecture & design
                      </h2>
                    </div>

                    <div className="space-y-5">
                      {property.architecturalDescription.map(
                        (paragraph, index) => (
                          <p
                            key={index}
                            className="text-base leading-8 text-[var(--text-secondary)]"
                          >
                            {paragraph}
                          </p>
                        ),
                      )}
                    </div>
                  </div>
                </Container>
              </section>
            )}

          {/* Return on investment */}
          {property.roi && (
            <section className="section-padding bg-[var(--surface-muted)]">
              <Container>
                <SectionTitle
                  eyebrow="Investment projections"
                  title={property.roi.title}
                />

                <div className="overflow-x-auto border border-[var(--border)] bg-[ivory-700]">
                  <table className="w-full min-w-[900px] text-left">
                    <thead>
                      <tr className="border-b border-[var(--border)]">
                        {[
                          "OCCUPANCY",
                          "NIGHTLY RATE",
                          "MONTHLY REVENUE",
                          "MONTHLY EXPENSES",
                          "MONTHLY PROFIT",
                          "ANNUAL PROFIT",
                          "BREAK EVEN",
                        ].map((heading) => (
                          <th
                            key={heading}
                            className="px-5 py-5 text-xs font-medium tracking-[0.1em] text-[var(--text-secondary)]"
                          >
                            {heading}
                          </th>
                        ))}
                      </tr>
                    </thead>

                    <tbody>
                      {property.roi.scenarios.map((scenario) => (
                        <tr
                          key={scenario.occupancyDays}
                          className="border-b border-[var(--border)] last:border-b-0"
                        >
                          <td className="px-5 py-6">
                            <p className="font-display text-2xl">
                              {scenario.occupancyDays} days
                            </p>
                            <p className="mt-1 text-xs text-[var(--text-secondary)]">
                              per month
                            </p>
                          </td>

                          <td className="px-5 py-6 text-sm">
                            {formatCurrency(scenario.nightlyRate.kes, "KES")}
                            <p className="mt-1 text-xs text-[var(--text-secondary)]">
                              {formatCurrency(scenario.nightlyRate.usd, "USD")}
                            </p>
                          </td>

                          <td className="px-5 py-6 text-sm">
                            {formatCurrency(scenario.monthlyRevenue.kes, "KES")}
                            <p className="mt-1 text-xs text-[var(--text-secondary)]">
                              {formatCurrency(
                                scenario.monthlyRevenue.usd,
                                "USD",
                              )}
                            </p>
                          </td>

                          <td className="px-5 py-6 text-sm">
                            {formatCurrency(
                              scenario.monthlyExpenses.kes,
                              "KES",
                            )}
                            <p className="mt-1 text-xs text-[var(--text-secondary)]">
                              {formatCurrency(
                                scenario.monthlyExpenses.usd,
                                "USD",
                              )}
                            </p>
                          </td>

                          <td className="px-5 py-6 text-sm font-medium text-[ivory-700]">
                            {formatCurrency(scenario.monthlyProfit.kes, "KES")}
                            <p className="mt-1 text-xs font-normal text-[var(--text-secondary)]">
                              {formatCurrency(
                                scenario.monthlyProfit.usd,
                                "USD",
                              )}
                            </p>
                          </td>

                          <td className="px-5 py-6 text-sm font-medium text-[ivory-700]">
                            {formatCurrency(scenario.annualProfit.kes, "KES")}
                            <p className="mt-1 text-xs font-normal text-[var(--text-secondary)]">
                              {formatCurrency(scenario.annualProfit.usd, "USD")}
                            </p>
                          </td>

                          <td className="px-5 py-6 text-sm">
                            {scenario.yearsToBreakEven} years
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {property.roi.disclaimer && (
                  <p className="mt-5 max-w-3xl text-xs leading-6 text-[var(--text-secondary)]">
                    {property.roi.disclaimer}
                  </p>
                )}
              </Container>
            </section>
          )}

          {/* Villa overview */}
          {property.villaOverview && property.villaOverview.length > 0 && (
            <section className="section-padding">
              <Container>
                <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
                  <div>
                    <p className="eyebrow">Inside the villa</p>
                    <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                      A space to unwind.
                    </h2>
                  </div>

                  <div className="space-y-5">
                    {property.villaOverview.map((paragraph, index) => (
                      <p
                        key={index}
                        className="text-base leading-8 text-[var(--text-secondary)]"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </Container>
            </section>
          )}

          {/* Location */}
          {property.locationDescription && (
            <section className="section-padding">
              <Container>
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                  <div>
                    <p className="eyebrow">The destination</p>
                    <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                      Located in Diani.
                    </h2>

                    <p className="mt-6 text-base leading-8 text-[var(--text-secondary)]">
                      {property.locationDescription}
                    </p>

                    {property.locationMap?.highlights &&
                      property.locationMap.highlights.length > 0 && (
                        <ul className="mt-8 grid grid-cols-1 gap-4 border-t border-[var(--border)] pt-6 sm:grid-cols-2">
                          {property.locationMap.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex items-start gap-3 text-sm leading-6 text-[var(--text-secondary)]"
                            >
                              <MapPin
                                size={15}
                                className="mt-1 shrink-0 text-[var(--bronze)]"
                              />
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      )}

                    {property.locationMap && (
                      <a
                        href={property.locationMap.googleMapsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button-outline mt-8 inline-flex items-center gap-3"
                      >
                        View on Google Maps
                        <ArrowUpRight size={16} />
                      </a>
                    )}
                  </div>

                  {property.locationMap && (
                    <div className="relative aspect-[4/3] overflow-hidden bg-[var(--surface-muted)]">
                      <Image
                        src={property.locationMap.image}
                        alt={`${development.name} location map`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                </div>
              </Container>
            </section>
          )}
        </>
      )}

      {/* Standard development highlights */}
      {!property && development.highlights.length > 0 && (
        <section className="bg-[ivory-700] py-20 text-[ivory-700] sm:py-24">
          <Container>
            <p className="eyebrow !text-[var(--bronze)]">At a glance</p>
            <h2 className="mt-3 font-display text-4xl sm:text-5xl">
              Development highlights
            </h2>

            <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
              {development.highlights.map((highlight) => (
                <div
                  key={highlight}
                  className="border-t border-white/20 pt-5 text-sm leading-6 text-white/80"
                >
                  {highlight}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Enquiry CTA */}
      <section className="section-padding">
        <Container>
          <div className="flex flex-col gap-8 border-t border-[var(--border)] pt-12 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">Take the next step</p>
              <h2 className="mt-3 font-display text-4xl sm:text-5xl">
                {property
                  ? "Make this your next investment."
                  : "Interested in this development?"}
              </h2>
              <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                Get in touch with the Wakusini team to learn more about this
                development.
              </p>
            </div>

            <Link
              href={enquiryUrl}
              className="button-primary inline-flex shrink-0 items-center gap-3"
            >
              Make an enquiry
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
