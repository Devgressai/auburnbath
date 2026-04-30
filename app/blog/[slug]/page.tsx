import { notFound } from "next/navigation";

import { BlogPostLayout } from "@/components/blog-post-layout";
import { allPostSlugs, findPost } from "@/lib/blog";
import { buildMetadata } from "@/lib/seo";

export const dynamicParams = false;

export function generateStaticParams() {
  return allPostSlugs().map((slug) => ({ slug }));
}

type Params = { slug: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) return {};
  return buildMetadata({
    title: post.meta.metaTitle,
    description: post.meta.metaDescription,
    path: `/blog/${slug}`,
  });
}

export default async function Page({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = findPost(slug);
  if (!post) notFound();
  return <BlogPostLayout post={post} />;
}
