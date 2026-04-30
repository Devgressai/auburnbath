import Link from "next/link";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { Container } from "@/components/container";
import { CTASection } from "@/components/cta-section";
import { ImagePlaceholder } from "@/components/image-placeholder";
import { BlogCard } from "@/components/blog-card";
import { relatedPosts } from "@/lib/blog";
import type { BlogPost } from "@/lib/blog/types";
import { breadcrumbSchema, jsonLdScript } from "@/lib/schema";
import { site } from "@/lib/site";

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function BlogPostLayout({ post }: { post: BlogPost }) {
  const { meta, content } = post;
  const related = relatedPosts(meta.slug);
  const url = `${site.url}/blog/${meta.slug}`;

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#post`,
    headline: meta.title,
    description: meta.metaDescription,
    image: [`${site.url}/images/${meta.imageSlug}.webp`],
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "en-US",
    datePublished: meta.publishedAt,
    dateModified: meta.updatedAt ?? meta.publishedAt,
    articleSection: meta.category,
    keywords: meta.category,
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
    isPartOf: {
      "@type": "Blog",
      name: `${site.name} Insights`,
      url: `${site.url}/blog`,
    },
  };

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Insights", href: "/blog" },
    { name: meta.title, href: `/blog/${meta.slug}` },
  ]);

  return (
    <>
      <div className="bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8">
          <Breadcrumbs
            trail={[
              { name: "Home", href: "/" },
              { name: "Insights", href: "/blog" },
              { name: meta.title, href: `/blog/${meta.slug}` },
            ]}
          />
        </div>
      </div>

      <article>
        <header className="bg-cream pb-12 pt-10 sm:pb-16 sm:pt-12">
          <Container size="narrow">
            <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-forest">
              <span>{meta.category}</span>
              <span aria-hidden className="text-line">
                ·
              </span>
              <time dateTime={meta.publishedAt} className="text-muted">
                Published {formatter.format(new Date(meta.publishedAt))}
              </time>
              {meta.updatedAt && meta.updatedAt !== meta.publishedAt ? (
                <>
                  <span aria-hidden className="text-line">
                    ·
                  </span>
                  <time dateTime={meta.updatedAt} className="text-muted">
                    Updated {formatter.format(new Date(meta.updatedAt))}
                  </time>
                </>
              ) : null}
              <span aria-hidden className="text-line">
                ·
              </span>
              <span className="text-muted">{meta.readingMinutes} min read</span>
            </div>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] text-soft-black sm:text-5xl lg:text-[clamp(3rem,4.6vw,3.75rem)]">
              {meta.title}
            </h1>
            <p className="mt-6 text-base leading-7 text-muted sm:text-[1.075rem] sm:leading-8">
              {meta.excerpt}
            </p>
          </Container>
        </header>

        <Container size="narrow" className="pb-2">
          <ImagePlaceholder
            slug={meta.imageSlug}
            alt={meta.imageAlt}
            ratio="16/9"
            tone="forest"
            priority
            sizes="(min-width: 1024px) 800px, 100vw"
          />
        </Container>

        <div className="py-14 sm:py-16">
          <Container size="narrow" className="prose-local">
            {content()}
            <hr className="my-10 border-line/70" />
            <p className="text-sm leading-7 text-muted">
              <strong>About this article:</strong> Written by the{" "}
              {site.name} team — bathroom-only specialists serving Auburn,
              CA and the surrounding Placer County foothills. If you have
              a question we didn&apos;t cover,{" "}
              <Link href="/contact">ask us directly</Link> — we&apos;re
              happy to walk through your specific bathroom on the phone.
            </p>
          </Container>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="py-16 bg-sand">
          <Container>
            <div className="flex flex-col gap-2">
              <span className="eyebrow">Related insights</span>
              <h2 className="font-display text-2xl text-soft-black sm:text-[2rem]">
                More on bathroom remodeling.
              </h2>
            </div>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <BlogCard key={p.meta.slug} post={p.meta} />
              ))}
            </div>
            <div className="mt-10 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest hover:text-forest-dark"
              >
                See all insights
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
            </div>
          </Container>
        </section>
      ) : null}

      <CTASection
        title={`Plan your Auburn bathroom remodel.`}
        description={`Tell us about your space — we'll set up a free in-home consultation and write a clear, line-item estimate. No pressure, no obligation.`}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(blogPostingSchema)}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbs)}
      />
    </>
  );
}
