"use client";

import { useMemo, useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import HorizontalCarousel from "@/components/ui/HorizontalCarousel";
import FeaturedArticles from "@/components/hub/FeaturedArticles";
import CategoryPills from "@/components/hub/CategoryPills";
import VideoCard from "@/components/hub/VideoCard";
import RecommendedSection from "@/components/hub/RecommendedSection";
import type { HubCategory, Article } from "@/components/hub/types";
import AccordionCard from "@/components/ui/AccordionCard";
import Link from "next/link";
import { ARTICLES, VIDEOS, HUB_CATEGORIES } from "@/components/hub/data";

export default function HubPage() {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<HubCategory | "All">(
    "All"
  );

  const categories = HUB_CATEGORIES;

  const { filteredArticles, filteredVideos } = useMemo(() => {
    const q = query.toLowerCase();
    const fa = ARTICLES.filter((a) => {
      const inTitle = a.title.toLowerCase().includes(q);
      const inSummary = a.summary?.toLowerCase().includes(q) ?? false;
      const matchesQuery = inTitle || inSummary;
      const matchesCategory =
        selectedCategory === "All" || a.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
    const fv = VIDEOS.filter((v) => {
      const matchesQuery = v.title.toLowerCase().includes(q);
      const matchesCategory =
        selectedCategory === "All" || v.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
    return { filteredArticles: fa, filteredVideos: fv };
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
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search guides or FAQs"
        className="[&_input]:bg-[#FDF8F3]"
      />

      <CategoryPills
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <FeaturedArticles articles={filteredArticles.slice(0, 2)} />

      <RecommendedSection
        title="Learn about Loan against MF"
        articles={
          [
            // Specific order for educational content
            filteredArticles.find((a) => a.title.includes("LAMF Better")),
            filteredArticles.find((a) => a.title.includes("Watch LAMF 101")),
            filteredArticles.find((a) =>
              a.title.includes("Portfolio Strategy")
            ),
            filteredArticles.find((a) => a.title.includes("Optimize")),
          ].filter(Boolean) as Article[]
        }
      />

      <RecommendedSection
        title="Recommended"
        articles={
          [
            // Different order for recommendations
            filteredArticles.find((a) =>
              a.title.includes("Portfolio Strategy")
            ),
            filteredArticles.find((a) => a.title.includes("Optimize")),
            filteredArticles.find((a) => a.title.includes("LAMF Better")),
            filteredArticles.find((a) => a.title.includes("Watch LAMF 101")),
          ].filter(Boolean) as Article[]
        }
      />

      <section className="bg-[#FDF8F3] rounded-xl">
        <div className="flex justify-between items-center px-4 py-3">
          <h3 className="text-[15px] font-semibold">FAQs</h3>
          <a
            href="/faqs"
            className="text-sm font-medium text-[#1E7A57] hover:text-[#1E7A57]/80"
          >
            View all
          </a>
        </div>
        <div className="divide-y divide-border">
          <div className="px-4">
            <AccordionCard
              variant="plain"
              title="What is loan against mutual funds?"
            >
              <p className="text-sm text-foreground/80">
                A loan against mutual funds (LAMF) is a secured loan where your
                mutual fund investments serve as collateral. This allows you to
                access funds without selling your investments, typically
                offering lower interest rates compared to unsecured loans.
              </p>
            </AccordionCard>
          </div>

          <div className="px-4">
            <AccordionCard variant="plain" title="What are the benefits?">
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Lower interest rates compared to personal loans</li>
                <li>• Quick loan disbursement</li>
                <li>• No need to sell your investments</li>
                <li>• Flexible repayment options</li>
                <li>• Continue earning returns on your investments</li>
              </ul>
            </AccordionCard>
          </div>

          <div className="px-4">
            <AccordionCard
              variant="plain"
              title="What is the eligibility criteria?"
            >
              <ul className="text-sm text-foreground/80 space-y-2">
                <li>• Must be 18-65 years old</li>
                <li>• Should have mutual fund investments</li>
                <li>• Minimum portfolio value requirements may apply</li>
                <li>• Good credit score preferred</li>
              </ul>
            </AccordionCard>
          </div>

          <div className="px-4">
            <AccordionCard variant="plain" title="How do I apply?">
              <ol className="text-sm text-foreground/80 space-y-2 list-decimal pl-4">
                <li>Complete your KYC verification</li>
                <li>Select the mutual funds you want to pledge</li>
                <li>Choose your loan amount and tenure</li>
                <li>Submit required documents</li>
                <li>Receive instant approval and disbursement</li>
              </ol>
            </AccordionCard>
          </div>
        </div>
      </section>
    </div>
  );
}
