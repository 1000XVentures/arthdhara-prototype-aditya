"use client";

import Image from "next/image";
import Link from "next/link";

export type RecommendationCardProps = {
  title: string;
  imagePath: string;
  href: string;
};

export default function RecommendationCard({
  title,
  imagePath,
  href,
}: RecommendationCardProps) {
  return (
    <Link
      href={href}
      className="block min-w-[320px] w-[320px] rounded-2xl overflow-hidden bg-white hover:shadow-lg transition-shadow"
    >
      <div className="relative aspect-[1.91/1] w-full">
        <Image
          src={imagePath}
          alt={title}
          fill
          className="object-cover"
          sizes="280px"
        />
      </div>
    </Link>
  );
}
