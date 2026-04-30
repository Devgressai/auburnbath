import { notFound } from "next/navigation";

import { Breadcrumbs } from "@/components/breadcrumbs";
import { CityPage } from "@/components/city-page";
import { cities, cityBySlug } from "@/lib/cities";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return cities.map((c) => ({ citySlug: c.fullSlug }));
}

type Params = { citySlug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { citySlug } = await params;
  const city = cityBySlug(citySlug);
  if (!city) return {};
  return buildMetadata({
    title: city.metaTitle,
    description: city.metaDescription,
    path: `/${city.fullSlug}`,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { citySlug } = await params;
  const city = cityBySlug(citySlug);
  if (!city) notFound();
  return (
    <>
      <div className="bg-cream">
        <div className="mx-auto w-full max-w-6xl px-5 pt-6 sm:px-8">
          <Breadcrumbs
            trail={[
              { name: "Home", href: "/" },
              { name: "Areas Served", href: "/areas-we-serve" },
              { name: city.name, href: `/${city.fullSlug}` },
            ]}
          />
        </div>
      </div>
      <CityPage city={city} />
    </>
  );
}
