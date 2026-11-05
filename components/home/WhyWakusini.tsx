import Container from "@/components/shared/Container";
import SectionHeading from "@/components/shared/SectionHeading";

const principles = [
  {
    number: "01",
    title: "A connected approach",
    description:
      "Development, design, construction and management brought together within one property offering.",
  },
  {
    number: "02",
    title: "A coastal perspective",
    description:
      "An understanding of the Diani property market and the character of the South Coast.",
  },
  {
    number: "03",
    title: "Considered development",
    description:
      "A focus on the relationship between architecture, the surrounding environment and everyday living.",
  },
];

export default function WhyWakusini() {
  return (
    <section className="section-padding bg-white">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:gap-24">
          <div>
            <SectionHeading
              eyebrow="The Wakusini approach"
              title="A more complete perspective on property."
              description="Property ownership involves more than the building itself. It is about the decisions, expertise and ongoing care that shape the entire experience."
            />
          </div>

          <div className="space-y-10">
            {principles.map((principle) => (
              <div
                key={principle.number}
                className="grid grid-cols-[45px_1fr] gap-5 border-b border-[var(--border)] pb-9"
              >
                <span className="pt-1 text-xs text-[var(--bronze)]">
                  {principle.number}
                </span>

                <div>
                  <h3 className="font-display text-3xl">{principle.title}</h3>

                  <p className="mt-3 max-w-lg text-sm leading-7 text-[var(--text-secondary)]">
                    {principle.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
