"use client";

import Link from "next/link";
import Image from "next/image";
import type { Article } from "./types";

type FeaturedArticlesProps = {
  articles: Article[];
};

export default function FeaturedArticles({ articles }: FeaturedArticlesProps) {
  return (
    <section className="space-y-4 bg-white -mx-6 px-6">
      <div className="flex items-center justify-between pb-2">
        <h3 className="text-lg font-semibold text-gray-700">
          Featured Articles
        </h3>
        <Link
          href="/hub/articles"
          className="text-sm font-medium text-[#1E7A57] hover:text-[#1E7A57]/80"
        >
          View all
        </Link>
      </div>
      <div className="grid grid-cols-1 gap-6">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={
              article.slug
                ? `/hub/articles/${article.slug}`
                : (article.href ?? "#")
            }
            className="block w-full bg-[#FDF8F3] hover:shadow-lg transition-shadow rounded-2xl overflow-hidden"
          >
            <div className="flex flex-col sm:flex-row">
              {/* Image Container */}
              <div className="sm:w-[200px] shrink-0">
                <div className="relative aspect-[1.91/1] w-full rounded-2xl overflow-hidden">
                  <Image
                    src={article.imagePath || article.heroImageUrl || ""}
                    alt={article.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 640px) 200px, 100vw"
                  />
                </div>
              </div>
              {/* Content */}
              <div className="p-4">
                <div className="space-y-2">
                  <h4 className="text-base font-semibold text-gray-800 line-clamp-2">
                    {article.title}
                  </h4>
                  <div>
                    {article.summary && (
                      <span className="text-sm text-gray-600 line-clamp-2">
                        {article.summary}{" "}
                      </span>
                    )}
                    <span className="text-sm font-medium text-[#c29329] inline-flex items-center gap-1 ml-1">
                      Read more
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                      >
                        <path
                          d="M6 12L10 8L6 4"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
