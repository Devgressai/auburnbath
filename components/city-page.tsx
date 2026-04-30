import Link from "next/link";

import type { City } from "@/lib/cities";
import {
  faqSchema,
  jsonLdScript,
  serviceSchema,
} from "@/lib/schema";
import { services, site } from "@/lib/site";
import { Container } from "./container";
import { CTASection } from "./cta-section";
import { FAQSection } from "./faq-section";
import { Hero } from "./hero";
import { ImagePlaceholder } from "./image-placeholder";
import { SectionHeading } from "./section-heading";
import { ServiceAreasGrid } from "./service-areas";

export function CityPage({ city }: { city: City }) {
  const featured = (city.featuredServices ?? []).map((key) =>
    services.find((s) => s.key === key)
  );
  return (
    <>
      <Hero
        eyebrow={city.eyebrow}
        title={city.h1}
        description={city.heroDescription}
        imageSlug={city.imageSlug}
        imageAlt={city.imageAlt}
      />

      {/* Intro section */}
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow={`${city.name} bathroom remodels`}
              title={`Local work, designed around ${city.name} homes.`}
            />
            <p className="mt-6 text-sm leading-7 text-muted">
              Auburn Bath is bathroom-focused — that's all we do. The work we
              deliver in {city.name} carries the same craftsmanship standard
              as our Auburn projects, with detailing tailored to how homes in
              your area are actually built.
            </p>
          </div>
          <div className="prose-local lg:col-span-7">
            {city.intro.map((p, idx) => (
              <p key={idx}>{p}</p>
            ))}
          </div>
        </Container>
      </section>

      {/* Local context */}
      <section className="py-20 sm:py-24 bg-sand">
        <Container className="grid items-center gap-12 lg:grid-cols-2">
          <ImagePlaceholder
            slug={city.imageSlug === "bath-hero" ? "bath-primary" : "shower-stone"}
            alt={`Detail of a bathroom remodel in ${city.name}, CA — sage stone tile shower with frameless glass and warm wood vanity`}
            ratio="5/4"
            tone="sage"
            sizes="(min-width: 1024px) 540px, 100vw"
          />
          <div>
            <SectionHeading
              eyebrow="Local context"
              title={city.localContext.title}
            />
            <div className="prose-local mt-6">
              {city.localContext.paragraphs.map((p, idx) => (
                <p key={idx}>{p}</p>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Common projects */}
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="What we build"
              title={city.commonProjects.title}
              description={city.commonProjects.intro}
            />
          </div>
          <ul className="prose-local lg:col-span-7">
            {city.commonProjects.items.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Featured services */}
      {featured.length > 0 ? (
        <section className="py-20 bg-sand">
          <Container>
            <SectionHeading
              eyebrow="Services in this area"
              title={`Bathroom services we deliver across ${city.name}.`}
              align="center"
            />
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {featured.map((service) =>
                service ? (
                  <Link
                    key={service.key}
                    href={service.href}
                    className="group card flex h-full flex-col p-6"
                  >
                    <h3 className="font-display text-lg text-soft-black">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted">
                      {service.blurb}
                    </p>
                    <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.7"
                        className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
                        />
                      </svg>
                    </span>
                  </Link>
                ) : null
              )}
            </div>
          </Container>
        </section>
      ) : null}

      {/* Drive note + scheduling */}
      <section className="py-20 sm:py-24">
        <Container className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Service from Auburn"
              title={`How we serve ${city.name}.`}
            />
          </div>
          <div className="prose-local lg:col-span-7">
            <p>{city.driveNote}</p>
            <p>
              Whether your project is a single shower rebuild or a full
              primary bathroom remodel, we plan the schedule and crew
              cadence around the realities of working in your area. That
              keeps the build clean, the punch list short, and the
              communication consistent.
            </p>
            <p>
              <Link href="/contact">
                Request a free consultation for your {city.name} bathroom
              </Link>
              , or call us directly at {site.phone}.
            </p>
          </div>
        </Container>
      </section>

      <ServiceAreasGrid
        eyebrow="Nearby"
        title="Other Placer & Nevada County communities we serve."
        description="We work across most of the Auburn-area foothills and the I-80 / Highway 49 corridor. If your town isn't listed, ask — most addresses within a reasonable drive of Auburn are a fit."
      />

      <FAQSection
        items={city.faqs}
        title={`Bathroom remodeling in ${city.name} — common questions.`}
      />

      <CTASection
        title={`Ready to plan a bathroom remodel in ${city.name}?`}
        description={`Tell us about your space and we'll set up a free consultation. We typically respond within one business day.`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          serviceSchema({
            name: `Bathroom Remodeling in ${city.name}, CA`,
            description: city.metaDescription,
            path: `/${city.fullSlug}`,
          })
        )}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqSchema(city.faqs))}
      />
    </>
  );
}
