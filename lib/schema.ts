import { serviceAreas, services, site } from "./site";

const sanitize = (value: unknown) =>
  JSON.parse(JSON.stringify(value)) as unknown;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
    "@id": `${site.url}/#localbusiness`,
    name: site.name,
    legalName: site.parent,
    parentOrganization: {
      "@type": "Organization",
      name: site.parent,
    },
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.defaultDescription,
    image: `${site.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Auburn",
      addressRegion: "CA",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    areaServed: serviceAreas.map((area) => ({
      "@type": "City",
      name: area.name,
      containedInPlace: {
        "@type": "AdministrativeArea",
        name: site.county,
      },
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Bathroom Remodeling Services",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${site.url}${s.href}`,
        },
      })),
    },
    identifier: {
      "@type": "PropertyValue",
      name: "CA Contractor License",
      value: site.license,
    },
    knowsAbout: services.map((s) => s.title),
    priceRange: "$$",
    sameAs: [],
  };
}

export function serviceSchema(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.name,
    url: `${site.url}${input.path}`,
    provider: {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
      name: site.name,
    },
    areaServed: serviceAreas.map((a) => ({ "@type": "City", name: a.name })),
  };
}

export function articleSchema(input: {
  headline: string;
  description: string;
  path: string;
  datePublished?: string;
  dateModified?: string;
}) {
  const url = `${site.url}${input.path}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.headline,
    description: input.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    inLanguage: "en-US",
    datePublished: input.datePublished ?? "2026-01-01",
    dateModified: input.dateModified ?? new Date().toISOString().slice(0, 10),
    author: {
      "@type": "Organization",
      name: site.name,
      url: site.url,
    },
    publisher: {
      "@type": "Organization",
      name: site.parent,
    },
    about: {
      "@type": "LocalBusiness",
      "@id": `${site.url}/#localbusiness`,
    },
  };
}

export function faqSchema(items: Array<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

export function breadcrumbSchema(
  trail: Array<{ name: string; href: string }>
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      name: item.name,
      item: `${site.url}${item.href}`,
    })),
  };
}

export function jsonLdScript(data: unknown) {
  const json = JSON.stringify(sanitize(data)).replace(/</g, "\\u003c");
  return { __html: json };
}
