"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaBell } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { usePathname } from "next/navigation";

type TopBarProps = {
  title?: string;
  showBackButton?: boolean;
  onBack?: () => void;
};

export default function TopBar({
  title,
  showBackButton = false,
  onBack,
}: TopBarProps) {
  const pathname = usePathname();

  // Auto-determine title based on route if not provided
  const getAutoTitle = () => {
    if (title) return title;

    if (showBackButton) {
      if (pathname?.startsWith("/contact/call")) return "Call Support";
      if (pathname?.startsWith("/contact/email")) return "Email Support";
      if (pathname?.startsWith("/contact/form")) return "Contact Form";
      if (pathname?.startsWith("/profile/about")) return "About Us";
      if (pathname?.startsWith("/profile/privacy")) return "Privacy Policy";
      if (pathname?.startsWith("/profile/terms")) return "Terms of Service";
      if (pathname?.startsWith("/profile/support")) return "Contact Support";
      if (pathname?.startsWith("/profile/loans")) return "Loan History";
      if (pathname?.startsWith("/profile/settings")) return "User Preferences";
      if (pathname?.startsWith("/profile/account")) return "Account Details";
      if (pathname === "/faqs") return "FAQs";
      if (pathname?.startsWith("/hub/articles/")) return "";
      if (pathname === "/hub/articles") return "All Articles";
      return "";
    }

    // Show back button for verify-eligibility routes
    if (pathname?.startsWith("/verify-eligibility")) {
      return "";
    }

    return "Welcome";
  };

  const displayTitle = getAutoTitle();
  const handleBack = () => {
    if (onBack) onBack();
    else if (typeof window !== "undefined") window.history.back();
  };

  return (
    <header className="bg-white">
      <div className="max-w-[414px] mx-auto px-4 h-14 flex items-center justify-between bg-[#1e4d4a]">
        <div className="flex items-center gap-2">
          {showBackButton || pathname?.startsWith("/verify-eligibility") ? (
            <button
              aria-label="Back"
              onClick={handleBack}
              className="p-2 rounded-md hover:bg-white/20 text-white"
            >
              <ArrowLeft className="size-5 text-white" />
            </button>
          ) : (
            displayTitle && (
              <Link href="/home" aria-label="Home">
                <span className="text-lg font-bold tracking-tight text-yellow-400 cursor-pointer">
                  {displayTitle}
                </span>
              </Link>
            )
          )}
        </div>
        <div className="flex items-center gap-3">
          <a aria-label="Phone" href="tel:+919993508760">
            <div className="relative bg-yellow-300 rounded-full p-1">
              <IoCall className="text-lg" style={{ color: "#6563FF" }} />
            </div>
          </a>
          <Link aria-label="Notifications" href="/notifications">
            <div className="relative bg-yellow-300 rounded-full p-1">
              <FaBell className="text-base" style={{ color: "#6563FF" }} />
              <span className="absolute -top-0.5 -right-0.5 size-2 rounded-full bg-error" />
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}
