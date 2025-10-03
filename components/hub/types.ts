export type HubCategory =
  | "Basics"
  | "Advanced Tips"
  | "Risks & Precautions"
  | "FAQs";

export type Article = {
  id: string;
  title: string;
  category: HubCategory;
  /** Short one-liner shown in lists/cards */
  summary?: string;
  /** URL-friendly identifier for routing */
  slug?: string;
  /** Public path for hero image (e.g., /images/hero.jpg) */
  heroImageUrl?: string;
  /** Public path for recommendation card image */
  imagePath?: string;
  /** Rich text paragraphs for the article body */
  content?: string[];
  href?: string;
};

export type VideoItem = {
  id: string;
  title: string;
  category: HubCategory;
  duration?: string;
  href?: string;
  mediaType?: "video" | "article";
  /** Tailwind background class, e.g. `bg-[#F59E0B]` */
  bgClassName?: string;
  /** Top-left brand text inside the card (e.g., "LLA", "mint"). */
  brandText?: string;
  /** Hide top-left badge/icon */
  hideBadge?: boolean;
};
