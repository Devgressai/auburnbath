import Link from "next/link";
import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { ProjectCard } from "@/components/project-card";
import {
  allProjectSlugs,
  findProject,
  relatedProjects,
} from "@/lib/projects";
import {
  breadcrumbSchema,
  jsonLdScript,
  serviceSchema,
} from "@/lib/schema";
import { buildMetadata } from "@/lib/seo";
import { services, site } from "@/lib/site";

export const dynamicParams = false;

export function generateStaticParams() {
  return allProjectSlugs().map((slug) => ({ slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) return {};
  return buildMetadata({
    title: project.metaTitle,
    description: project.metaDescription,
    path: `/projects/${slug}`,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const project = findProject(slug);
  if (!project) notFound();

  const service = services.find((s) => s.key === project.serviceKey);
  const url = `${site.url}/projects/${project.slug}`;
  const related = relatedProjects(project.slug);

  // Schema rationale: BlogPosting-style article schema for narrative
  // case studies plus a Service schema linking back to the LocalBusiness
  // for the type of work demonstrated. Breadcrumbs as their own item.
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline: project.title,
    description: project.metaDescription,
    image: [`${site.url}/images/${project.imageSlug}.webp`],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "en-US",
    datePublished: `${project.year}-01-01`,
    dateModified: `${project.year}-12-31`,
    articleSection: "Projects",
    keywords: [project.cityName, service?.title, "bathroom remodel"]
      .filter(Boolean)
      .join(", "),
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.parent,
      url: site.parentUrl,
    },
    about: {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
    },
  };

  return (
    <>
      <div className="bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8">
          <Breadcrumbs
            trail={[
              { name: "Home", href: "/" },
              { name: "Projects", href: "/projects" },
              { name: project.title, href: `/projects/${project.slug}` },
            ]}
          />
        </div>
      </div>

      <article>
        <header className="bg-cream pb-12 pt-10 sm:pb-14 sm:pt-12">
          <Container size="narrow">
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest">
              <span>{project.cityName}</span>
              <span aria-hidden className="text-line">
                ·
              </span>
              <span className="text-muted">{project.year}</span>
              {service ? (
                <>
                  <span aria-hidden className="text-line">
                    ·
                  </span>
                  <Link href={service.href} className="text-muted hover:text-forest">
                    {service.title}
                  </Link>
                </>
              ) : null}
            </div>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-soft-black sm:text-5xl lg:text-[clamp(3rem,4.6vw,3.75rem)]">
              {project.title}
            </h1>
            <p className="mt-6 text-base leading-7 text-muted sm:text-[1.075rem] sm:leading-8">
              {project.excerpt}
            </p>
          </Container>
        </header>

        <Container size="narrow" className="pb-2">
          <ImagePlaceholder
            slug={project.imageSlug}
            alt={project.imageAlt}
            ratio="16/9"
            tone="forest"
            priority
            sizes="(min-width: 1024px) 800px, 100vw"
          />
        </Container>

        <div className="py-14 sm:py-16">
          <Container size="narrow">
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
              <div className="prose-local lg:col-span-7">
                {project.content()}
              </div>
              <aside className="lg:col-span-5">
                <div className="card p-6">
                  <span className="eyebrow">Project spec</span>
                  <dl className="mt-5 divide-y divide-line/70">
                    {project.spec.map((row) => (
                      <div
                        key={row.label}
                        className="flex items-start justify-between gap-4 py-3 text-sm"
                      >
                        <dt className="text-muted">{row.label}</dt>
                        <dd className="text-right font-medium text-soft-black">
                          {row.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                  {service ? (
                    <Link
                      href={service.href}
                      className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest hover:text-forest-dark"
                    >
                      Service: {service.title}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        className="h-3 w-3"
                        aria-hidden
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
                        />
                      </svg>
                    </Link>
                  ) : null}
                </div>
              </aside>
            </div>
          </Container>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="py-16 bg-sand">
          <Container>
            <div className="flex flex-col gap-2">
              <span className="eyebrow">More projects</span>
              <h2 className="font-display text-2xl text-soft-black sm:text-[2rem]">
                Other recent work.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProjectCard key={p.slug} project={p} />
              ))}
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection
        title="Plan a project like this one."
        description="Tell us about your bathroom — we'll set up a free in-home consultation, measure, and write a clear, line-item estimate."
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(articleSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Projects", href: "/projects" },
            { name: project.title, href: `/projects/${project.slug}` },
          ])
        )}
      />
      {service ? (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={jsonLdScript(
            serviceSchema({
              name: service.title,
              description: project.metaDescription,
              path: service.href,
            })
          )}
        />
      ) : null}
    </>
  );
}
