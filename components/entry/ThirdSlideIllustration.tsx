"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

type ThirdSlideIllustrationProps = {
  className?: string;
};

export default function ThirdSlideIllustration({
  className = "",
}: ThirdSlideIllustrationProps) {
  return (
    <div
      className={`relative w-[380px] h-[280px] ${className} flex items-center justify-between px-4`}
    >
      {/* Use-money icon on left */}
      <div className="relative w-28 h-28 shrink-0">
        <Image
          src="/images/icons/splash_screen/use-money.png"
          alt="Use Money"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Golden arrow reused from first slide */}
      <div className="relative flex items-center justify-center">
        <ArrowRight
          className="w-16 h-16 text-yellow-400 glow-yellow animate-drift-lr-slow"
          strokeWidth={3.5}
        />
      </div>

      {/* Pay icon on right */}
      <div className="relative w-28 h-28 shrink-0">
        <Image
          src="/images/icons/splash_screen/pay.png"
          alt="Pay"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
