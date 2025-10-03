"use client";

import Link from "next/link";
import { MdSupportAgent } from "react-icons/md";
import { FiArrowRight } from "react-icons/fi";

type Props = {
  href?: string;
};

export default function SupportCTA({ href = "/profile/support" }: Props) {
  return (
    <div className="rounded-2xl bg-[#FEF5EA] p-4 sm:p-5 flex items-center justify-between gap-4">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-white/70 flex items-center justify-center text-[var(--color-green-dark)]">
          <MdSupportAgent className="h-6 w-6 sm:h-7 sm:w-7" />
        </div>
        <div>
          <div className="text-lg sm:text-xl font-semibold text-[#2F2F2F]">
            Need Help?
          </div>
        </div>
      </div>

      <Link
        href={href}
        className="shrink-0 px-3 sm:px-4 h-10 sm:h-11 inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--color-green-dark)] text-white font-semibold text-sm sm:text-base"
        aria-label="Contact support"
      >
        <span>Contact us</span>
        <FiArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
      </Link>
    </div>
  );
}
