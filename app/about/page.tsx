import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";

import Container from "@/components/shared/Container";

export default function AboutPage() {
  return (
    <main>
      {/* Page introduction */}
      <section className="section-padding pb-16">
        <Container>
          <div className="max-w-5xl">
            <p className="eyebrow">About Wakusini</p>

            <h1 className="mt-7 font-display text-5xl leading-[1.08] tracking-tight sm:text-6xl lg:text-7xl">
              Creating places to{" "}
              <span className="italic text-[var(--olive-dark)]">belong.</span>
              <br />
              Building with purpose.
            </h1>

            <div className="mt-10 grid gap-8 border-t border-[var(--border)] pt-8 md:grid-cols-[1fr_1.2fr]">
              <p className="text-sm leading-7 text-[var(--text-secondary)]">
                PROPERTY DESIGN · CONSTRUCTION · VILLA MANAGEMENT
              </p>

              <p className="max-w-2xl text-base leading-8 text-[var(--text-secondary)]">
                Based in Diani Beach on Kenya's South Coast, Wakusini brings
                together property design, construction and villa management to
                help clients create and care for properties along the coast.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Image feature */}
      <section className="px-4 sm:px-6 lg:px-10">
        <div className="relative min-h-[320px] overflow-hidden bg-[var(--sandstone)] sm:min-h-[480px] lg:min-h-[620px]">
          {/* Add an appropriate company / project image here */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xs tracking-[0.2em] text-[var(--text-secondary)]">
              WAKUSINI — COMPANY IMAGE
            </span>
          </div>

          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent p-6 text-white sm:p-10">
            <p className="text-xs tracking-[0.2em]">
              ROOTED IN THE KENYAN SOUTH COAST
            </p>
          </div>
        </div>
      </section>

      {/* Company introduction */}
      <section className="section-padding">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow">Who we are</p>

              <h2 className="mt-5 max-w-md font-display text-4xl leading-tight sm:text-5xl">
                A connected approach to coastal property.
              </h2>
            </div>

            <div className="space-y-6 text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
              <p>
                Property development involves more than the building itself. It
                begins with understanding the land, shaping a suitable design
                and managing the process through construction and beyond.
              </p>

              <p>
                Wakusini brings these services together in one coordinated
                offering. Whether a client needs support with a specific stage
                of a project or a more complete property solution, the approach
                can be shaped around their requirements.
              </p>

              <p>
                With Diani as its home, Wakusini focuses on properties that
                respond to the character and lifestyle of Kenya's South Coast.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Approach */}
      <section className="bg-[var(--forest)] py-24 text-white sm:py-32">
        <Container>
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="text-xs tracking-[0.2em] text-white/60">
                OUR APPROACH
              </p>

              <h2 className="mt-6 font-display text-4xl leading-tight sm:text-5xl">
                From the first idea to the finished property.
              </h2>
            </div>

            <div className="grid gap-10 sm:grid-cols-2">
              {[
                {
                  number: "01",
                  title: "Understand",
                  description:
                    "Every project begins with understanding the client's requirements, priorities and intended use of the property.",
                },
                {
                  number: "02",
                  title: "Design",
                  description:
                    "Architectural planning brings together functionality, considered design and the character of coastal living.",
                },
                {
                  number: "03",
                  title: "Build",
                  description:
                    "Construction turns the agreed vision into a physical space, with attention to the details of the project.",
                },
                {
                  number: "04",
                  title: "Manage",
                  description:
                    "Ongoing property care and villa management help owners look after their investment beyond completion.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="border-t border-white/20 pt-5"
                >
                  <p className="text-xs tracking-widest text-white/50">
                    {item.number}
                  </p>

                  <h3 className="mt-5 font-display text-3xl">{item.title}</h3>

                  <p className="mt-4 text-sm leading-7 text-white/65">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Services connection */}
      <section className="section-padding">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">What we do</p>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                The expertise to bring a property together.
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-8 text-[var(--text-secondary)] sm:text-base">
                From identifying suitable land to designing, constructing and
                managing a property, explore the services available through
                Wakusini.
              </p>
            </div>

            <Link href="/services" className="button-primary w-fit">
              Explore our services
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-[var(--border)] py-20 sm:py-28">
        <Container>
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="eyebrow">Start a conversation</p>

              <h2 className="mt-5 font-display text-4xl leading-tight sm:text-5xl">
                Have a property project in mind?
              </h2>

              <p className="mt-5 text-sm leading-7 text-[var(--text-secondary)]">
                Talk to the Wakusini team about your plans for property in
                Diani.
              </p>
            </div>

            <Link href="/contact" className="button-primary w-fit">
              Get in touch
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </Container>
      </section>
    </main>
  );
}
