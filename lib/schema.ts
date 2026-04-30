import { serviceAreas, services, site } from "./site";

const HERO_IMAGES = [
  "home-hero",
  "home-why-us",
  "bath-hero",
  "shower-hero",
  "tub-hero",
  "walkin-hero",
];

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
      url: site.parentUrl,
    },
    url: site.url,
    telephone: site.phone,
    email: site.email,
    description: site.defaultDescription,
    image: [
      `${site.url}/opengraph-image`,
      ...HERO_IMAGES.map((slug) => `${site.url}/images/${slug}.webp`),
    ],
    address: {
      "@type": "PostalAddress",
      streetAddress: site.streetAddress,
      addressLocality: site.city,
      addressRegion: site.region,
      postalCode: site.postalCode,
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
    /**
     * Premium-tier positioning. "$$$" reflects high-end custom
     * bathroom remodeling pricing in the Auburn market — our typical
     * full primary-bath rebuild sits well above the local median.
     */
    priceRange: "$$$",
    /**
     * Social profiles for entity disambiguation. Populated as we
     * publish each one. Order doesn't matter to Google, but we list
     * the highest-trust profile first.
     *
     * TODO: populate with real URLs once each profile is live:
     * - Google Business Profile share URL
     * - Yelp listing
     * - Better Business Bureau
     * - Houzz profile
     * - Facebook page
     * - Instagram profile
     */
    sameAs: [] as string[],
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

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    alternateName: `${site.name} — Bathroom Remodeling Auburn CA`,
    url: site.url,
    description: site.defaultDescription,
    inLanguage: "en-US",
    publisher: { "@id": `${site.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${site.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.name,
    legalName: site.parent,
    url: site.url,
    logo: `${site.url}/opengraph-image`,
    image: `${site.url}/opengraph-image`,
    description: site.defaultDescription,
    parentOrganization: {
      "@type": "Organization",
      name: site.parent,
      url: site.parentUrl,
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "customer support",
      areaServed: "US-CA",
      availableLanguage: ["English"],
    },
    sameAs: [site.parentUrl],
  };
}

export function jsonLdScript(data: unknown) {
  const json = JSON.stringify(sanitize(data)).replace(/</g, "\\u003c");
  return { __html: json };
}
