"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

type FirstSlideIllustrationProps = {
  className?: string;
};

export default function FirstSlideIllustration({
  className = "",
}: FirstSlideIllustrationProps) {
  return (
    <div
      className={`relative w-[380px] h-[280px] ${className} flex items-center justify-between px-4`}
    >
      {/* Mutual fund icon on left */}
      <div className="relative w-28 h-28 shrink-0">
        <Image
          src="/images/icons/splash_screen/mutual fund.png"
          alt="Mutual fund"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Library arrow centered between both images (not overlapping) */}
      <div className="relative flex items-center justify-center">
        <ArrowRight
          className="w-16 h-16 text-yellow-400 glow-yellow animate-drift-lr-slow"
          strokeWidth={3.5}
        />
      </div>

      {/* Wallet icon on right */}
      <div className="relative w-28 h-28 shrink-0">
        <Image
          src="/images/icons/splash_screen/wallet.png"
          alt="Wallet"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
