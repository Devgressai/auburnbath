import { site } from "@/lib/site";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

const credentials = [
  {
    title: "Backed by Oakwood Remodeling Group",
    body: "Auburn Bath operates as a dedicated bathroom-remodeling brand of an established local remodeling group — so every project comes with licensed contractor oversight and the kind of references most new microsites can't offer.",
  },
  {
    title: "Licensed California Contractor",
    body: `Insured and permitted where required by Placer County. License #${site.license} on file, available on request.`,
  },
  {
    title: "Bathroom-Only Specialists",
    body: "We don't do kitchens or additions. Bathrooms are everything we plan, build, and finish — which is why our waterproofing, tile, and venting details hold up.",
  },
  {
    title: "Workmanship Stand-Behind",
    body: "Every project ends with a written walkthrough handoff and a workmanship stand-behind. If something we installed isn't right, we come back and make it right.",
  },
];

export function HomeCredentials() {
  return (
    <section className="py-20 sm:py-24 bg-sand">
      <Container>
        <SectionHeading
          eyebrow="Credentials"
          title="Real trust signals — no invented stars."
          description="Auburn Bath is a young microsite. Instead of inflating numbers, here's exactly what stands behind the work."
          align="center"
        />
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {credentials.map((c, idx) => (
            <article
              key={c.title}
              className="card p-6 flex flex-col gap-3"
            >
              <span
                aria-hidden
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-forest text-cream text-sm font-display"
              >
                {String(idx + 1).padStart(2, "0")}
              </span>
              <h3 className="font-display text-lg text-soft-black leading-snug">
                {c.title}
              </h3>
              <p className="text-sm leading-6 text-muted">{c.body}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
