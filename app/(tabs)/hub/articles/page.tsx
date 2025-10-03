"use client";

import { useMemo, useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import CategoryPills from "@/components/hub/CategoryPills";
import { ARTICLES, HUB_CATEGORIES } from "@/components/hub/data";
import type { HubCategory } from "@/components/hub/types";
import Link from "next/link";
import Image from "next/image";

export default function ArticlesPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<HubCategory | "All">(
    "All"
  );

  const { filteredArticles } = useMemo(() => {
    const q = query.toLowerCase();
    const fa = ARTICLES.filter((a) => {
      const inTitle = a.title.toLowerCase().includes(q);
      const inSummary = a.summary?.toLowerCase().includes(q) ?? false;
      const matchesQuery = inTitle || inSummary;
      const matchesCategory =
        selectedCategory === "All" || a.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
    return { filteredArticles: fa };
  }, [query, selectedCategory]);

  const CATEGORY_STYLE: Record<
    HubCategory,
    { bgClassName: string; brandText: string }
  > = {
    Basics: { bgClassName: "bg-[#2563EB]", brandText: "GUIDE" },
    "Advanced Tips": { bgClassName: "bg-[#7C3AED]", brandText: "PRO" },
    "Risks & Precautions": { bgClassName: "bg-[#0891B2]", brandText: "SAFE" },
    FAQs: { bgClassName: "bg-[#EA580C]", brandText: "FAQ" },
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold text-[#0B1215]">All Articles</h1>
      </div>

      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search guides or FAQs"
        className="[&_input]:bg-[#FDF8F3]"
      />

      <CategoryPills
        categories={HUB_CATEGORIES}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <section className="grid gap-3">
        {filteredArticles.length === 0 ? (
          <div className="text-sm text-foreground/60 px-1">
            No articles found.
          </div>
        ) : (
          filteredArticles.map((a) => {
            const href = a.slug ? `/hub/articles/${a.slug}` : (a.href ?? "#");
            const categoryStyle = CATEGORY_STYLE[a.category];
            return (
              <Link
                key={a.id}
                href={href}
                className="block w-full bg-[#FDF8F3] hover:shadow-lg transition-shadow rounded-2xl overflow-hidden"
              >
                <div className="flex flex-col sm:flex-row">
                  {/* Image Container */}
                  <div className="sm:w-[200px] shrink-0">
                    <div className="relative aspect-[1.91/1] w-full rounded-2xl overflow-hidden">
                      <Image
                        src={a.imagePath || a.heroImageUrl || ""}
                        alt={a.title}
                        fill
                        className="object-cover"
                        sizes="(min-width: 640px) 200px, 100vw"
                      />
                    </div>
                  </div>
                  {/* Content */}
                  <div className="p-4">
                    <div className="space-y-2">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-[13px] uppercase tracking-wide text-foreground/60">
                          {a.category}
                        </div>
                        {categoryStyle && (
                          <div
                            className={`px-2 py-1 rounded text-[10px] font-bold text-white ${categoryStyle.bgClassName}`}
                          >
                            {categoryStyle.brandText}
                          </div>
                        )}
                      </div>
                      <h4 className="text-base font-semibold text-gray-800 line-clamp-2">
                        {a.title}
                      </h4>
                      <div>
                        {a.summary && (
                          <span className="text-sm text-gray-600 line-clamp-2">
                            {a.summary}{" "}
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
            );
          })
        )}
      </section>
    </div>
  );
}
