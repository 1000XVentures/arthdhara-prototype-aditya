"use client";
import Link from "next/link";
import Image from "next/image";
import type { StoryKey } from "@/components/home/stories";

type Action = {
  href: string;
  label: string;
  description: string;
  iconSrc: string;
  ringClass: string;
  bgClass: string;
  storyKey: StoryKey;
};

const ACTIONS: Action[] = [
  {
    href: "/hub",
    label: "Why Loan against MF",
    description: "Learn about benefits",
    iconSrc: "/images/icons/top_icons/loan_against.png",
    ringClass: "ring-emerald-400",
    bgClass: "bg-emerald-50",
    storyKey: "whyLamf",
  },
  {
    href: "/hub",
    label: "How to get started",
    description: "Quick guide to begin",
    iconSrc: "/images/icons/top_icons/get_started.png",
    ringClass: "ring-emerald-400",
    bgClass: "bg-emerald-50",
    storyKey: "getStarted",
  },
  {
    href: "/hub",
    label: "Why use Arthdhara",
    description: "Discover advantages",
    iconSrc: "/images/icons/top_icons/why_use.png",
    ringClass: "ring-emerald-400",
    bgClass: "bg-emerald-50",
    storyKey: "whyArthdhara",
  },
  {
    href: "/hub",
    label: "Repayments Simplified",
    description: "Easy payment process",
    iconSrc: "/images/icons/top_icons/repayment.png",
    ringClass: "ring-emerald-400",
    bgClass: "bg-emerald-50",
    storyKey: "repayments",
  },
];

export default function ActionsGrid({
  onSelect,
}: {
  onSelect?: (key: StoryKey) => void;
}) {
  return (
    <div className="my-12">
      <div className="pb-2">
        <h3 className="text-lg font-semibold text-gray-700">
          Arthdhara LAMF 101
        </h3>
      </div>
      <div className="grid grid-cols-2 gap-[6px]">
        {ACTIONS.map(
          ({
            href,
            label,
            description,
            iconSrc,
            ringClass,
            bgClass,
            storyKey,
          }) => {
            const content = (
              <div
                className={`relative flex flex-col items-center h-[200px] rounded-xl bg-[#FDF8F3] transition-transform group-hover:scale-[1.02] p-8`}
              >
                <div className="absolute top-3 right-3 size-6 rounded-full bg-[#c29329] flex items-center justify-center">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="text-white"
                  >
                    <path d="M8 5v14l11-7z" fill="currentColor" />
                  </svg>
                </div>
                <Image
                  src={iconSrc}
                  alt={label}
                  width={48}
                  height={48}
                  className="object-contain mb-4 [filter:brightness(0)_saturate(100%)_invert(24%)_sepia(98%)_saturate(804%)_hue-rotate(118deg)_brightness(94%)_contrast(101%)]"
                />
                <div className="text-center">
                  <span className="block text-base font-semibold text-gray-800 mb-2">
                    {label}
                  </span>
                  <span className="block text-sm text-gray-500 leading-tight">
                    {description}
                  </span>
                </div>
              </div>
            );

            if (onSelect) {
              return (
                <button
                  key={label}
                  onClick={() => onSelect(storyKey)}
                  className="group flex flex-col items-center text-center"
                >
                  {content}
                </button>
              );
            }
            return (
              <Link
                key={label}
                href={href}
                className="group flex flex-col items-center text-center"
              >
                {content}
              </Link>
            );
          }
        )}
      </div>
    </div>
  );
}
