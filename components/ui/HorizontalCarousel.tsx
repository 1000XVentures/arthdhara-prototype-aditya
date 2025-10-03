"use client";

import { PropsWithChildren, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type HorizontalCarouselProps = PropsWithChildren<{
  ariaLabel?: string;
  className?: string;
  showNav?: boolean;
  /** Show subtle edge fade overlays on left/right */
  edgeFade?: boolean;
}>;

export default function HorizontalCarousel({
  ariaLabel,
  className = "",
  showNav = true,
  edgeFade = false,
  children,
}: HorizontalCarouselProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const scrollByAmount = (amount: number) => {
    const node = scrollerRef.current;
    if (!node) return;
    node.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <div className={`relative ${className}`}>
      <div
        ref={scrollerRef}
        aria-label={ariaLabel}
        className="flex gap-3 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-2"
      >
        {children}
      </div>
      {showNav && (
        <>
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollByAmount(-280)}
            className="hidden md:grid place-items-center absolute -left-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-surface border border-border shadow-md hover:bg-background/80 z-10"
          >
            <ChevronLeft className="size-4" />
          </button>
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollByAmount(280)}
            className="hidden md:grid place-items-center absolute -right-2 top-1/2 -translate-y-1/2 size-8 rounded-full bg-surface border border-border shadow-md hover:bg-background/80 z-10"
          >
            <ChevronRight className="size-4" />
          </button>
        </>
      )}
      {edgeFade && (
        <>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-background to-transparent rounded-l-xl" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-background to-transparent rounded-r-xl" />
        </>
      )}
    </div>
  );
}
