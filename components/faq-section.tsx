import { faqSchema, jsonLdScript } from "@/lib/schema";
import { Container } from "./container";
import { SectionHeading } from "./section-heading";

export type FAQ = { q: string; a: string };

export function FAQSection({
  items,
  title = "Frequently asked questions",
  description,
}: {
  items: FAQ[];
  title?: string;
  description?: string;
}) {
  return (
    <section className="py-20 sm:py-24" aria-labelledby="faq-heading">
      <Container size="narrow">
        <SectionHeading
          eyebrow="FAQ"
          title={title}
          description={description}
          align="center"
        />
        <div className="mt-12 overflow-hidden rounded-[var(--radius-card)] border border-line/80 bg-cream divide-y divide-line/70 shadow-soft">
          {items.map((item, idx) => (
            <details
              key={item.q}
              className="group [&_summary::-webkit-details-marker]:hidden"
              {...(idx === 0 ? { open: true } : {})}
            >
              <summary className="flex cursor-pointer items-start justify-between gap-6 list-none px-6 py-5 text-base font-medium text-soft-black hover:bg-sage-light/40 transition-colors">
                <span>{item.q}</span>
                <span
                  aria-hidden
                  className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-forest transition-transform group-open:rotate-45"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    className="h-3.5 w-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </span>
              </summary>
              <div className="px-6 pb-6 text-sm leading-7 text-muted">
                {item.a}
              </div>
            </details>
          ))}
        </div>
      </Container>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(faqSchema(items))}
      />
    </section>
  );
}
