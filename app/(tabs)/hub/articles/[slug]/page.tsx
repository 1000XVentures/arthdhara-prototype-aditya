import Image from "next/image";

import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ARTICLES_BY_SLUG } from "@/components/hub/article";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

function getArticleBySlug(slug: string) {
  return ARTICLES_BY_SLUG[slug];
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    };
  }

  return {
    title: article.heading,
    description: article.paragraphs?.[0] || "",
  };
}

export default async function ArticleDetailPage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return notFound();
  }

  return (
    <div className="space-y-6">
      {article.heroImageUrl ? (
        <div className="relative w-full h-44 md:h-64 rounded-xl overflow-hidden border border-border">
          <Image
            src={article.heroImageUrl}
            alt={article.heading}
            fill
            className="object-cover"
            priority
          />
        </div>
      ) : null}

      <h1 className="text-xl font-bold leading-snug text-[#0B1215]">
        {article.heading}
      </h1>

      {article.tags?.length ? (
        <div className="flex flex-wrap gap-2">
          {article.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded-full text-xs bg-amber-50 text-amber-800"
            >
              {tag}
            </span>
          ))}
        </div>
      ) : null}

      <div className="space-y-4 text-[15px] leading-relaxed text-foreground/90">
        {article.paragraphs?.map((p, idx) => (
          <p key={idx}>{p}</p>
        ))}
      </div>

      <div className="pt-4">
        <Link
          href="/verify-eligibility"
          className="inline-flex items-center justify-center w-full h-11 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition"
        >
          Check Eligibility in 10s
        </Link>
      </div>
    </div>
  );
}
