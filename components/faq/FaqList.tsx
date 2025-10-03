"use client";

import { useMemo, useState } from "react";
import SearchBar from "@/components/ui/SearchBar";
import AccordionCard from "@/components/ui/AccordionCard";
import CategoryPillsGeneric from "@/components/ui/CategoryPillsGeneric";
import type { FaqItem, FaqCategory } from "./data";

export default function FaqList({
  items,
  categories,
  initialQuery = "",
}: {
  items: FaqItem[];
  categories: readonly FaqCategory[];
  initialQuery?: string;
}) {
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState<FaqCategory | "All">(
    "All"
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return items.filter((f) => {
      const matchesQuery =
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q);
      const matchesCategory =
        selectedCategory === "All" || f.category === selectedCategory;
      return matchesQuery && matchesCategory;
    });
  }, [items, query, selectedCategory]);

  return (
    <div className="space-y-6">
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search guides or FAQs"
        className="[&_input]:bg-[#FDF8F3]"
      />

      <CategoryPillsGeneric
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <section className="bg-[#FDF8F3] rounded-xl">
        <div className="divide-y divide-border">
          {filtered.map((f) => (
            <div key={f.id} className="px-4">
              <AccordionCard variant="plain" title={f.question}>
                <p className="text-sm text-foreground/80">{f.answer}</p>
              </AccordionCard>
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="p-4 text-sm text-foreground/60">
              No results found.
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
