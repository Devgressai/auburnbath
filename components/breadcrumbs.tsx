import Link from "next/link";

import { jsonLdScript, breadcrumbSchema } from "@/lib/schema";

export type Crumb = { name: string; href: string };

export function Breadcrumbs({ trail }: { trail: Crumb[] }) {
  return (
    <>
      <nav aria-label="Breadcrumb" className="text-xs text-muted">
        <ol className="flex flex-wrap items-center gap-1.5">
          {trail.map((c, idx) => {
            const last = idx === trail.length - 1;
            return (
              <li key={c.href} className="flex items-center gap-1.5">
                {last ? (
                  <span aria-current="page" className="text-forest">
                    {c.name}
                  </span>
                ) : (
                  <Link href={c.href} className="hover:text-forest">
                    {c.name}
                  </Link>
                )}
                {!last ? (
                  <span aria-hidden className="text-muted/60">
                    /
                  </span>
                ) : null}
              </li>
            );
          })}
        </ol>
      </nav>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={jsonLdScript(breadcrumbSchema(trail))}
      />
    </>
  );
}
