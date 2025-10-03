"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Slide = {
  href: string;
  src: string;
  alt: string;
};

// Full-width, mobile-first carousel for Trending section
export default function TrendingCarousel() {
  const slides: Slide[] = [
    {
      href: "/rewards",
      src: "/images/slider-new/image.png",
      alt: "Rewards",
    },
    {
      href: "/calculator",
      src: "/images/slider-new/caluculator.png",
      alt: "Calculator Promo",
    },
    {
      href: "/hub",
      src: "/images/slider-new/hub-checkout.png",
      alt: "Hub checkout",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (paused) return;
    const id = window.setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 3500);
    return () => window.clearInterval(id);
  }, [paused, slides.length]);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0]?.clientX ?? null;
    setPaused(true);
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return setPaused(false);
    const delta = e.changedTouches[0]?.clientX - touchStartX.current;
    const threshold = 40;
    if (delta > threshold)
      setCurrent((i) => (i - 1 + slides.length) % slides.length);
    else if (delta < -threshold) setCurrent((i) => (i + 1) % slides.length);
    touchStartX.current = null;
    window.setTimeout(() => setPaused(false), 800);
  };

  return (
    <section className="relative w-full">
      <div className="pb-2">
        <h3 className="text-lg font-semibold text-gray-700">Trending</h3>
      </div>
      <div
        className="relative overflow-hidden rounded-2xl w-full"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div
          className="flex w-full transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((s, idx) => (
            <Link key={idx} href={s.href} className="w-full shrink-0 px-2">
              <div className="relative w-full bg-white">
                <Image
                  src={s.src}
                  alt={s.alt}
                  width={382}
                  height={180}
                  priority={idx === 0}
                  className="w-full h-auto object-contain rounded-2xl"
                  sizes="(max-width: 414px) 366px, 100vw"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            aria-label={`Go to slide ${i + 1}`}
            onClick={() => setCurrent(i)}
            className={`size-2 rounded-full ${
              i === current ? "bg-gray-800" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
