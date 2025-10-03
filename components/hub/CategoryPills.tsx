"use client";

import type { HubCategory } from "./types";

type CategoryPillsProps = {
  categories: readonly HubCategory[];
  selected?: HubCategory | "All";
  onSelect?: (cat: HubCategory | "All") => void;
};

export default function CategoryPills({
  categories,
  selected = "All",
  onSelect,
}: CategoryPillsProps) {
  const allCats: (HubCategory | "All")[] = ["All", ...categories];

  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold">Categories</h3>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {allCats.map((c) => {
          const isActive = selected === c;
          return (
            <button
              key={c}
              type="button"
              onClick={() => onSelect?.(c)}
              className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                isActive
                  ? "bg-[#1E7A57] text-white"
                  : "bg-[#FDF8F3] text-gray-700"
              }`}
            >
              {c}
            </button>
          );
        })}
      </div>
    </section>
  );
}
