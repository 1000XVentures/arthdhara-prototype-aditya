"use client";

import Image from "next/image";

type SecondSlideIllustrationProps = {
  className?: string;
};

export default function SecondSlideIllustration({
  className = "",
}: SecondSlideIllustrationProps) {
  return (
    <div
      className={`relative w-[380px] h-[320px] ${className} flex flex-col items-center justify-center`}
    >
      {/* Tree above the loan (no overlap) */}
      <div className="relative w-44 h-44 animate-grow-base mb-2">
        <Image
          src="/images/icons/splash_screen/moeny-tree.png"
          alt="Growing Tree"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Loan base icon below */}
      <div className="relative w-40 h-40">
        <Image
          src="/images/icons/splash_screen/loan.png"
          alt="Loan Base"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  );
}
