import { Breadcrumbs } from "@/components/breadcrumbs";
import { BlogCard } from "@/components/blog-card";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { allPosts } from "@/lib/blog";
import { jsonLdScript } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const PATH = "/blog";

export const metadata = buildMetadata({
  title: "Insights & Bathroom Remodeling Guides | Auburn Bath",
  description:
    "Practical bathroom remodeling guides for Auburn and Placer County homeowners — timelines, permits, design palettes, materials, and resale.",
  path: PATH,
});

export default function Page() {
  const [feature, ...rest] = allPosts;

  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${site.name} Insights`,
    itemListElement: allPosts.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${site.url}/blog/${p.meta.slug}`,
      name: p.meta.title,
    })),
  };

  return (
    <>
      <div className="bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8">
          <Breadcrumbs
            trail={[
              { name: "Home", href: "/" },
              { name: "Insights", href: PATH },
            ]}
          />
        </div>
      </div>

      <PageHeader
        eyebrow="Insights"
        title="Bathroom remodeling guides for Auburn homes."
        description="Practical writeups on timelines, permits, design palettes, materials, and the local realities of remodeling in the Placer County foothills — written by the bathroom-only crew that builds them."
      />

      {feature ? (
        <section className="py-12 sm:py-14">
          <Container>
            <span className="eyebrow mb-5">Featured</span>
            <BlogCard post={feature.meta} variant="feature" />
          </Container>
        </section>
      ) : null}

      <section className="py-12 sm:py-16 bg-sand">
        <Container>
          <span className="eyebrow mb-6">All articles</span>
          <div className="mt-2 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((p) => (
              <BlogCard key={p.meta.slug} post={p.meta} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Have a bathroom question we didn't cover?"
        description="Ask us directly. We'll walk through your space on the phone — no pressure, no obligation."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(itemList)}
      />
    </>
  );
}
