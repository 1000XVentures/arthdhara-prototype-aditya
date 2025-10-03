"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { StoryTopic } from "@/components/home/stories";
import { X } from "lucide-react";

type Props = {
  open: boolean;
  topic: StoryTopic | null;
  onClose: () => void;
  /** milliseconds per slide */
  durationMs?: number;
};

export default function StoryViewer({
  open,
  topic,
  onClose,
  durationMs = 20000,
}: Props) {
  const slides = topic?.slides ?? [];
  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const handleClose = useCallback(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);
    onClose();
  }, [onClose]);

  useEffect(() => {
    if (!open) return;
    setActiveIndex(0);
  }, [open, topic?.id]);

  const goNext = useCallback(() => {
    setActiveIndex((i) => {
      if (i + 1 < slides.length) return i + 1;
      onClose();
      return i;
    });
  }, [onClose, slides.length]);

  // Time-based advancement; CSS handles visual fill
  useEffect(() => {
    if (!open || slides.length === 0) return;
    if (timerRef.current) window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      goNext();
    }, durationMs);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [open, activeIndex, slides.length, durationMs, goNext]);

  const next = useCallback(() => {
    setActiveIndex((i) => {
      if (i + 1 < slides.length) return i + 1;
      onClose();
      return i;
    });
  }, [slides.length, onClose]);

  const prev = useCallback(() => {
    setActiveIndex((i) => (i - 1 >= 0 ? i - 1 : 0));
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, next, prev]);

  function getProgressBarProps(idx: number) {
    const isDone = idx < activeIndex;
    const isActive = idx === activeIndex;
    return { isDone, isActive };
  }

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX;
  }
  function onTouchEnd(e: React.TouchEvent) {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) {
      if (dx < 0) next();
      else prev();
    }
    touchStartX.current = null;
  }

  if (!open || !topic) return null;

  const current = slides[activeIndex];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center"
      role="dialog"
      aria-modal="true"
    >
      <div
        className="absolute inset-0 bg-[var(--story-overlay)] backdrop-blur-[2px]"
        onClick={handleClose}
      />

      <div className="relative w-full max-w-sm h-[88vh] mx-4 rounded-2xl overflow-hidden shadow-2xl">
        {/* Progress bars */}
        <div className="absolute top-2 left-3 right-3 flex gap-1 z-10">
          {slides.map((_, idx) => (
            <div
              key={idx}
              className="h-1.5 bg-gray-200 rounded-full flex-1 overflow-hidden"
            >
              <div
                key={`bar-${idx}-${activeIndex === idx ? "active" : "static"}`}
                className={`h-full bg-[#c29329] transition-all ${
                  getProgressBarProps(idx).isActive ? "story-progress-bar" : ""
                }`}
                style={{
                  width: getProgressBarProps(idx).isDone ? "100%" : "0%",
                  animationDuration: getProgressBarProps(idx).isActive
                    ? `${durationMs}ms`
                    : "0ms",
                }}
              />
            </div>
          ))}
        </div>

        {/* Slide surface */}
        <div
          className="absolute inset-0 text-gray-800 flex flex-col"
          style={{ background: current.backgroundVar }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="p-4 pt-6 flex items-center justify-between relative z-20">
            <div className="text-xs/none uppercase tracking-wide font-semibold text-emerald-800">
              {topic.label}
            </div>
            <button
              onClick={handleClose}
              aria-label="Close"
              className="size-8 grid place-items-center rounded-full bg-gray-200 hover:bg-gray-300 active:bg-gray-400 transition"
            >
              <X className="size-5 text-gray-700" />
            </button>
          </div>

          <div className="flex-1 grid place-items-center px-6 text-center">
            <div className="grid gap-4">
              <div className="size-14 mx-auto flex items-center justify-center">
                <Image
                  src={current.iconSrc}
                  alt={current.title}
                  width={56}
                  height={56}
                  className="object-contain [filter:brightness(0)_saturate(100%)_invert(24%)_sepia(98%)_saturate(804%)_hue-rotate(118deg)_brightness(94%)_contrast(101%)]"
                />
              </div>
              <h2 className="text-2xl font-bold leading-snug text-[#c29329]">
                {current.title}
              </h2>
              {current.description ? (
                <p className="text-gray-700 text-base leading-relaxed">
                  {current.description}
                </p>
              ) : null}
            </div>
          </div>

          {/* Tap areas */}
          <div className="absolute inset-0 grid grid-cols-2 z-[5]">
            <button aria-label="Previous" onClick={prev} className="h-full" />
            <button aria-label="Next" onClick={next} className="h-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
