"use client";

type CategoryPillsGenericProps<T extends string> = {
  categories: readonly T[];
  selected?: T | "All";
  onSelect?: (cat: T | "All") => void;
  title?: string;
};

export default function CategoryPillsGeneric<T extends string>({
  categories,
  selected = "All",
  onSelect,
  title = "Categories",
}: CategoryPillsGenericProps<T>) {
  const allCats: (T | "All")[] = ["All", ...categories];

  return (
    <section className="space-y-3">
      <h3 className="text-sm font-semibold">{title}</h3>
      <div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
        {allCats.map((c) => {
          const isActive = selected === c;
          return (
            <button
              key={String(c)}
              type="button"
              onClick={() => onSelect?.(c)}
              className={`shrink-0 rounded-full px-3 py-1 text-xs ${
                isActive
                  ? "bg-[#1E7A57] text-white"
                  : "bg-[#FDF8F3] text-gray-700"
              }`}
            >
              {String(c)}
            </button>
          );
        })}
      </div>
    </section>
  );
}
