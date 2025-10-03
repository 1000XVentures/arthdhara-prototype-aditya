"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";

export default function HeroSlider() {
  const slides: {
    title: string;
    description: string;
    href: string;
    imageSrc: string;
    ctaLabel?: string;
  }[] = [
    {
      title: "Invest everyday",
      description: "Take care of your savings daily to get good returns",
      href: "/verify-eligibility",
      imageSrc: "/images/slider_image/slide2-bg.png",
      ctaLabel: "Start SIP",
    },
    {
      title: "Build wealth the simple way",
      description: "Automate your monthly investing and stay consistent",
      href: "/verify-eligibility",
      imageSrc: "/images/slider_image/slider-1_cbg.PNG",
      ctaLabel: "Start SIP",
    },
    {
      title: "Start small, grow steady",
      description: "Begin with low amounts and create a savings habit",
      href: "/calculator",
      imageSrc: "/images/slider_image/slide-3-bg.png",
      ctaLabel: "Start SIP",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.touches[0]?.clientX ?? null;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0]?.clientX - touchStartX.current;
    const threshold = 40;
    if (deltaX > threshold) {
      setCurrent((prev) => Math.max(0, prev - 1));
    } else if (deltaX < -threshold) {
      setCurrent((prev) => Math.min(slides.length - 1, prev + 1));
    }
    touchStartX.current = null;
    // Resume auto-sliding after a short delay
    setTimeout(() => setIsPaused(false), 1000);
  };

  // Pause on mouse enter, resume on mouse leave
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <section className="relative -mx-2">
      <div className="px-4 pb-2">
        <h3 className="text-lg font-semibold text-gray-700">Trending</h3>
      </div>
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {slides.map(({ title, description, href, imageSrc, ctaLabel }) => (
          <Link key={title} href={href} className="min-w-full">
            <div className="mx-2 relative p-6 h-52 sm:h-56 bg-amber-50 overflow-hidden rounded-2xl border border-amber-100 shadow-sm">
              <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-amber-100/60" />
              <div className="absolute -right-16 bottom-0 w-48 h-48 rounded-full bg-amber-100/50" />

              <div className="relative h-full flex items-center">
                <div className="flex items-center justify-between w-full gap-4">
                  <div className="space-y-3 flex-1 min-w-[50%]">
                    <h3 className="text-xl sm:text-2xl font-semibold leading-tight text-gray-800">
                      {title}
                    </h3>
                    <p className="text-sm/6 text-gray-600">{description}</p>
                    <div className="pt-2">
                      <div className="inline-flex items-center gap-2 rounded-xl px-4 py-2 bg-emerald-700 text-white font-semibold shadow hover:bg-emerald-600">
                        <span>{ctaLabel ?? "Start SIP"}</span>
                        <ArrowRight className="size-4" />
                      </div>
                    </div>
                  </div>
                  <div className="relative w-40 sm:w-52 h-32 sm:h-40">
                    <Image
                      src={imageSrc}
                      alt={title}
                      fill
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2 z-10">
        {slides.map((_, idx) => (
          <button
            key={idx}
            aria-label={`Slide ${idx + 1}`}
            onClick={() => setCurrent(idx)}
            className={`size-2 rounded-full transition-colors ${
              current === idx ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
