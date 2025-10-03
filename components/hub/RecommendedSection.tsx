"use client";

import Link from "next/link";
import HorizontalCarousel from "@/components/ui/HorizontalCarousel";
import RecommendationCard from "@/components/hub/RecommendationCard";
import type { Article } from "@/components/hub/types";

type RecommendedSectionProps = {
  articles: Article[];
  title: string;
};

export default function RecommendedSection({
  articles,
  title,
}: RecommendedSectionProps) {
  return (
    <section className="space-y-4 bg-white -mx-6 px-6">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
        <Link
          href="/hub/articles"
          className="text-sm font-medium text-[#1E7A57] hover:text-[#1E7A57]/80"
        >
          View all
        </Link>
      </div>
      <HorizontalCarousel ariaLabel="Recommended articles">
        {articles.map((article) => (
          <RecommendationCard
            key={article.id}
            title={article.title}
            imagePath={article.imagePath || article.heroImageUrl || ""}
            href={
              article.slug
                ? `/hub/articles/${article.slug}`
                : article.href || "#"
            }
          />
        ))}
      </HorizontalCarousel>
    </section>
  );
}
