import Link from "next/link";

import type { BlogPostMeta } from "@/lib/blog/types";
import { ImagePlaceholder } from "./image-placeholder";

const formatter = new Intl.DateTimeFormat("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
});

export function BlogCard({
  post,
  variant = "default",
}: {
  post: BlogPostMeta;
  variant?: "default" | "feature";
}) {
  const isFeature = variant === "feature";
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group card flex h-full flex-col overflow-hidden p-0"
    >
      <ImagePlaceholder
        slug={post.imageSlug}
        alt={post.imageAlt}
        ratio={isFeature ? "16/9" : "4/3"}
        tone="sage"
        sizes={
          isFeature
            ? "(min-width: 1024px) 800px, 100vw"
            : "(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
        }
        className="!rounded-none !border-0 !shadow-none"
      />
      <div className="flex flex-1 flex-col p-6">
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-forest">
          <span>{post.category}</span>
          <span aria-hidden className="text-line">
            ·
          </span>
          <time dateTime={post.publishedAt} className="text-muted">
            {formatter.format(new Date(post.publishedAt))}
          </time>
          <span aria-hidden className="text-line">
            ·
          </span>
          <span className="text-muted">{post.readingMinutes} min read</span>
        </div>
        <h3
          className={
            isFeature
              ? "mt-4 font-display text-2xl text-soft-black leading-snug sm:text-[1.75rem]"
              : "mt-4 font-display text-lg text-soft-black leading-snug"
          }
        >
          <span className="bg-[linear-gradient(currentColor,currentColor)] bg-no-repeat bg-bottom bg-[length:0%_1px] pb-0.5 transition-[background-size] duration-300 group-hover:bg-[length:100%_1px]">
            {post.title}
          </span>
        </h3>
        <p
          className={
            isFeature
              ? "mt-3 text-[15px] leading-7 text-muted"
              : "mt-2 text-sm leading-6 text-muted"
          }
        >
          {post.excerpt}
        </p>
        <span className="mt-auto pt-5 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
          Read article
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.7"
            className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
            aria-hidden
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5 21 12l-7.5 7.5M3 12h18"
            />
          </svg>
        </span>
      </div>
    </Link>
  );
}
