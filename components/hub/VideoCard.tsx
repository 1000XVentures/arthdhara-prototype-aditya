import Image from "next/image";
import Link from "next/link";
import { BookOpen, Play } from "lucide-react";

type MediaType = "video" | "article";

type VideoCardProps = {
  title: string;
  duration?: string;
  href?: string;
  mediaType?: MediaType;
  /** Optional background thumbnail. If not provided, a solid color is used. */
  thumbnailUrl?: string;
  /** Tailwind background class, e.g. `bg-[#F59E0B]` */
  bgClassName?: string;
  /** Top-left brand text inside the card (e.g., "LLA", "mint"). */
  brandText?: string;
  /** CTA label shown under the title. */
  ctaLabel?: string;
  /** Hide top-left badge/icon */
  hideBadge?: boolean;
};

export default function VideoCard({
  title,
  duration,
  href = "#",
  mediaType = "video",
  thumbnailUrl,
  bgClassName = "bg-primary-light",
  brandText,
  ctaLabel,
  hideBadge,
}: VideoCardProps) {
  const Icon = mediaType === "video" ? Play : BookOpen;
  const cta = ctaLabel ?? (mediaType === "video" ? "Watch now" : "Read now");

  return (
    <Link
      href={href}
      className="shrink-0 w-60 snap-start bg-gray-100 rounded-xl p-2"
    >
      <div
        className={`relative w-full h-32 rounded-xl overflow-hidden border-2 border-border ${bgClassName}`}
      >
        {thumbnailUrl ? (
          <Image src={thumbnailUrl} alt={title} fill className="object-cover" />
        ) : null}

        {/* Badge */}
        {!hideBadge && (
          <div className="absolute -top-3 left-3 size-8 rounded-full grid place-items-center bg-white border border-border">
            <Icon className="size-4 text-primary" />
          </div>
        )}

        {/* Duration chip */}
        {duration ? (
          <span className="absolute top-2 right-2 text-[10px] px-1.5 py-0.5 rounded bg-black/60 text-white">
            {duration}
          </span>
        ) : null}

        {/* Brand wordmark (fallback if no thumbnail) */}
        {brandText ? (
          <div className="absolute left-4 top-6 text-white font-extrabold tracking-wide uppercase text-3xl">
            {brandText}
          </div>
        ) : null}
      </div>
      <div className="mt-2 text-[13px] font-semibold leading-snug line-clamp-2 text-foreground/90">
        {title}
      </div>
      <div className="text-[13px] font-semibold text-secondary mt-1">{cta}</div>
    </Link>
  );
}
