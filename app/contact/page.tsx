import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { ContactForm } from "@/components/contact-form";
import { Hero } from "@/components/hero";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo";

const PATH = "/contact";

export const metadata = buildMetadata({
  title: "Request a Free Bathroom Remodel Quote in Auburn, CA",
  description:
    "Tell Auburn Bath about your bathroom remodel project — we'll follow up with a clear next step. Serving Auburn, CA and nearby Placer County areas.",
  path: PATH,
});

export default function Page() {
  return (
    <>
      <Container className="pt-6">
        <Breadcrumbs
          trail={[
            { name: "Home", href: "/" },
            { name: "Contact", href: PATH },
          ]}
        />
      </Container>
      <Hero
        eyebrow="Contact"
        title="Request a Free Bathroom Remodel Quote in Auburn, CA"
        description="Share a few details about your space and we'll follow up to schedule a free consultation. We typically respond within one business day."
        imageSlug="contact-hero"
        imageAlt="Auburn, CA bathroom remodel consultation moodboard — sage stone tile, warm rift oak vanity sample, brass faucet handle, and honed quartz chip"
        imageCaption="Free quote consultation moodboard"
        primaryHref="#quote-form"
        primaryLabel="Send your details"
      />

      <section id="quote-form" className="py-16 scroll-mt-24">
        <Container className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-[var(--radius-card)] border border-line/80 bg-sand p-6">
              <h2 className="font-display text-xl text-soft-black">
                Prefer to call?
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                We answer during normal business hours. Leave a voicemail
                outside of those and we'll return your call the next
                business morning.
              </p>
              <a
                href={site.phoneHref}
                className="mt-4 inline-flex items-center justify-center rounded-full border border-forest/30 bg-cream px-5 py-3 text-sm font-medium text-forest hover:bg-sage-light"
              >
                Call {site.phone}
              </a>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6">
              <h2 className="font-display text-xl text-soft-black">
                What happens next
              </h2>
              <ol className="mt-4 space-y-3 text-sm leading-6 text-charcoal">
                <li>
                  <span className="font-medium">1. We follow up.</span>{" "}
                  A short call to understand your space and timing.
                </li>
                <li>
                  <span className="font-medium">2. We visit.</span>{" "}
                  An on-site consultation to look at the bathroom and
                  talk through ideas.
                </li>
                <li>
                  <span className="font-medium">3. We estimate.</span>{" "}
                  A clear, line-item estimate so you can plan with
                  confidence.
                </li>
              </ol>
            </div>
            <div className="rounded-[var(--radius-card)] border border-line/80 bg-cream p-6">
              <h2 className="font-display text-xl text-soft-black">
                Service area
              </h2>
              <p className="mt-2 text-sm leading-6 text-muted">
                Auburn, North Auburn, Lake of the Pines, Meadow Vista,
                Newcastle, Colfax, Loomis, Penryn, Grass Valley, and Nevada
                City. If your town isn't listed, ask — we cover much of
                the I-80 and Highway 49 corridor.
              </p>
            </div>
          </aside>
        </Container>
      </section>
    </>
  );
}
