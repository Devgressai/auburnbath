import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { PageHeader } from "@/components/page-header";
import { ProjectCard } from "@/components/project-card";
import { allProjects } from "@/lib/projects";
import { jsonLdScript } from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

const PATH = "/projects";

export const metadata = buildMetadata({
  title: "Selected Projects | Auburn Bath",
  description:
    "Selected bathroom remodel projects from Auburn Bath — primary bath rebuilds, walk-in showers, tub-to-shower conversions across Auburn and the Placer County foothills.",
  path: PATH,
});

export default function Page() {
  const itemList = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Auburn Bath selected projects",
    itemListElement: allProjects.map((p, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      url: `${site.url}/projects/${p.slug}`,
      name: p.title,
    })),
  };

  return (
    <>
      <div className="bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8">
          <Breadcrumbs
            trail={[
              { name: "Home", href: "/" },
              { name: "Projects", href: PATH },
            ]}
          />
        </div>
      </div>

      <PageHeader
        eyebrow="Projects"
        title="Selected work from across the Auburn-area foothills."
        description="A look at the kind of bathroom remodels we deliver — primary bath rebuilds, walk-in showers, tub-to-shower conversions, and historic-home restorations across Placer and Nevada counties."
      />

      <section className="py-14 sm:py-16">
        <Container>
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {allProjects.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </Container>
      </section>

      <CTASection
        title="Want a project that looks like one of these?"
        description="Every project on this page started with a free in-home consultation. Yours can too — share a few details and we'll set it up."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(itemList)}
      />
    </>
  );
}
