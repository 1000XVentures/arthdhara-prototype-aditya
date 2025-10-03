"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaMoneyBillAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

type StageKey =
  | "NONE"
  | "KYC"
  | "SELECT_FUNDS"
  | "VERIFY_ASSET"
  | "PLEDGE_FUNDS"
  | "WITHDRAW_READY";

export default function HomeHeroSection() {
  const router = useRouter();
  const [stage, setStage] = useState<StageKey>("NONE");
  const lastValueRef = useRef<string | undefined>(undefined);

  const stageConfig: Record<
    Exclude<StageKey, "NONE">,
    {
      title: string;
      subtitle: string;
      description: string;
      buttonText: string;
      path: string;
    }
  > = {
    KYC: {
      title: "Complete Your KYC",
      subtitle: "Just few more steps left to get credit",
      description: "Verify your identity to continue",
      buttonText: "Complete KYC Process",
      path: "/verify-eligibility/dpi",
    },
    SELECT_FUNDS: {
      title: "Select Your Funds",
      subtitle: "Just few more steps left to get credit",
      description: "Choose eligible funds to proceed",
      buttonText: "Select Funds",
      path: "/verify-eligibility",
    },
    VERIFY_ASSET: {
      title: "Verify Your Assets",
      subtitle: "Just few more steps left to get credit",
      description: "Confirm your holdings to continue",
      buttonText: "Verify Assets",
      path: "/verify-eligibility",
    },
    PLEDGE_FUNDS: {
      title: "Pledge Your Funds",
      subtitle: "Just few more steps left to get credit",
      description: "Secure your credit line by pledging",
      buttonText: "Pledge Funds",
      path: "/verify-eligibility",
    },
    WITHDRAW_READY: {
      title: "Ready to Withdraw",
      subtitle: "Your credit line is ready",
      description: "Access funds without selling investments",
      buttonText: "Withdraw Now",
      path: "/calculator",
    },
  };

  const defaultConfig = {
    title: "Borrow Smart Loan Against MFS in 2 Min",
    subtitle: "Hey ! Let's Start Your Loan Journey",
    description: "Access funds without selling your investments",
    buttonText: "Apply For Credit Line",
    path: "/verify-eligibility",
  };

  useEffect(() => {
    const checkProcessFlag = () => {
      try {
        const value = (window as any).process as unknown;
        const normalized =
          typeof value === "string"
            ? value.trim().toUpperCase().replace(/\s+/g, "_")
            : undefined;

        // Only update if the stage actually changed
        if (normalized !== lastValueRef.current) {
          lastValueRef.current = normalized as string | undefined;

          if (
            normalized === "KYC" ||
            normalized === "SELECT_FUNDS" ||
            normalized === "VERIFY_ASSET" ||
            normalized === "PLEDGE_FUNDS" ||
            normalized === "WITHDRAW_READY"
          ) {
            setStage(normalized as Exclude<StageKey, "NONE">);
          } else {
            setStage("NONE");
          }
        }
      } catch {
        // no-op
      }
    };

    // Initial check and then poll for console changes
    checkProcessFlag();
    const intervalId = window.setInterval(checkProcessFlag, 500);
    return () => window.clearInterval(intervalId);
  }, []);

  const currentConfig = stage !== "NONE" ? stageConfig[stage] : defaultConfig;

  return (
    <section className="-mx-4 -mt-6">
      {/* Dark Green Card - Half Screen - Full Width */}
      <div className="bg-[#1e4d4a] h-148 relative">
        {/* White Text Above Card */}
        <div className="bg-[#1e4d4a] px-4 mt-2 mb-2">
          <h2 className="text-white text-center text-lg font-medium">
            {currentConfig.subtitle}
          </h2>
        </div>
        {/* Golden Card Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="bg-[linear-gradient(to_right_top,#c29329,#deb853,#c29329)] rounded-xl p-8 shadow-lg mx-1 w-full max-w-sm relative overflow-hidden">
            {/* Split Background with Patterns */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              {/* Top Half - Waves and Curves */}
              <div className="absolute top-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_bottom_right,#f4d68f,#d7a739)] overflow-hidden">
                {/* Wave Overlay */}
                <div
                  className="absolute -inset-x-[25%] top-[5%] h-3/4 opacity-45"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 0%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0.15) 35%, transparent 60%)",
                    clipPath: "ellipse(120% 60% at 50% 40%)",
                  }}
                />
                {/* Additional Wave */}
                <div
                  className="absolute inset-x-[-25%] top-[35%] h-1/2 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 100%, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 45%, transparent 65%)",
                    clipPath: "ellipse(120% 60% at 50% 50%)",
                  }}
                />
                {/* Curved Lines */}
                <div className="absolute top-4 left-4 w-24 h-24 border-t-2 border-l-2 border-yellow-50/40 rounded-tl-full" />
                <div className="absolute top-8 right-6 w-20 h-20 border-t-2 border-r-2 border-yellow-50/40 rounded-tr-full" />
              </div>

              {/* Bottom Half - Geometric Pattern */}
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-[linear-gradient(to_top_left,#b87a1f,#e4c165)] overflow-hidden">
                {/* Diagonal Lines */}
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2) 12px, transparent 12px, transparent 24px)",
                  }}
                />
                {/* Bottom Wave */}
                <div
                  className="absolute inset-x-[-25%] bottom-[-15%] h-3/4 opacity-25"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 50% 100%, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0.08) 45%, transparent 65%)",
                    clipPath: "ellipse(125% 55% at 50% 60%)",
                  }}
                />
                {/* Corner Orbs */}
                <div className="absolute bottom-8 left-6 w-16 h-16 bg-gradient-to-br from-yellow-100/50 to-transparent rounded-full blur-md" />
                <div className="absolute bottom-12 right-10 w-14 h-14 bg-gradient-to-tl from-yellow-50/60 to-transparent rounded-full blur" />
              </div>

              {/* Floating Orbs */}
              <div className="absolute top-10 left-10 w-10 h-10 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-sm" />
              <div className="absolute top-10 right-16 w-6 h-6 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-sm" />
              <div className="absolute bottom-14 left-1/2 w-9 h-9 bg-gradient-to-tr from-white/35 to-transparent rounded-full blur" />

              {/* Dividing Line with Shine */}
              <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-100/40 to-transparent">
                <div className="absolute inset-0 animate-shine bg-gradient-to-r from-transparent via-yellow-50/60 to-transparent" />
              </div>
            </div>
            {/* Sparkles */}
            <div className="absolute top-4 right-12 text-yellow-100 text-xl z-0 pointer-events-none">
              ✨
            </div>
            <div className="absolute bottom-12 left-8 text-yellow-100 text-xl z-0 pointer-events-none">
              ✨
            </div>
            <div className="absolute top-1/2 right-4 text-yellow-100 text-xl z-0 pointer-events-none">
              ✨
            </div>

            {/* Content */}
            <div className="relative z-10 space-y-4">
              {/* Top Section */}
              <div className="text-center space-y-4">
                {/* Headings */}
                <div className="space-y-1">
                  <h1
                    style={{ fontFamily: "var(--font-lexend)" }}
                    className="text-2xl text-[#1d4c4a] font-bold"
                  >
                    {currentConfig.title}
                  </h1>
                </div>

                {/* Description */}
                <p className="text-gray-700 text-lg">
                  {currentConfig.description}
                </p>
              </div>

              {/* Image Section with Background Elements */}
              <div className="relative z-10 w-full flex justify-center items-center pb-0 pt-2 -mb-2">
                {/* Background Design Elements */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                  {/* Large Circular Elements */}
                  <div className="absolute -left-8 top-1/2 w-32 h-32 border-2 border-yellow-100/20 rounded-full transform -translate-y-1/2" />
                  <div className="absolute -right-8 top-1/2 w-32 h-32 border-2 border-yellow-100/20 rounded-full transform -translate-y-1/2" />

                  {/* Curved Lines */}
                  <div className="absolute top-0 left-0 w-16 h-16 border-l-2 border-t-2 border-yellow-100/20 rounded-tl-full" />
                  <div className="absolute top-0 right-0 w-16 h-16 border-r-2 border-t-2 border-yellow-100/20 rounded-tr-full" />
                  <div className="absolute bottom-0 left-0 w-16 h-16 border-l-2 border-b-2 border-yellow-100/20 rounded-bl-full" />
                  <div className="absolute bottom-0 right-0 w-16 h-16 border-r-2 border-b-2 border-yellow-100/20 rounded-br-full" />

                  {/* Small Circles */}
                  <div className="absolute top-8 left-1/2 w-3 h-3 border border-yellow-100/30 rounded-full" />
                  <div className="absolute bottom-8 left-1/2 w-3 h-3 border border-yellow-100/30 rounded-full" />
                  <div className="absolute top-1/2 left-8 w-3 h-3 border border-yellow-100/30 rounded-full" />
                  <div className="absolute top-1/2 right-8 w-3 h-3 border border-yellow-100/30 rounded-full" />

                  {/* Center Pattern */}
                  <div className="absolute inset-12 border-2 border-yellow-100/10 rounded-full" />
                  <div className="absolute inset-16 border border-yellow-100/5 rounded-full" />
                </div>
                <div className="relative z-10">
                  <Image
                    src="/images/slider_image/slider-1_cbg.PNG"
                    alt="Happy man with coins"
                    width={220}
                    height={140}
                    className="object-contain"
                    priority
                  />
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => router.push(currentConfig.path)}
                className="w-full relative z-20 bg-[#448c6c] text-white font-medium text-lg py-3 px-6 rounded-lg hover:bg-opacity-90 transition-all duration-200 shadow-lg"
              >
                {currentConfig.buttonText}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Gold Quality & Storage Info Section */}
      <div className="bg-white px-4 py-12 rounded-t-3xl">
        <div className="max-w-sm mx-auto">
          <div className="flex gap-4">
            {/* Left Section - 24K 999 Gold */}
            <div className="flex-1 text-center">
              <div className="relative mb-3">
                <div className="w-8 h-8 mx-auto bg-[#65c37f] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-gray-800 font-bold text-sm mb-1">
                Quick Approval
              </h3>
              <p className="text-gray-600 text-xs">Hassel-Free Process</p>
            </div>

            {/* Vertical Divider */}
            <div className="w-px bg-gray-300 my-2"></div>

            {/* Right Section - Gold Stored */}
            <div className="flex-1 text-center">
              <div className="relative mb-3">
                <div className="w-8 h-8 mx-auto bg-[#65c37f] rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-4 h-4 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-gray-800 font-bold text-sm mb-1">
                Retain Ownership
              </h3>
              <p className="text-gray-600 text-xs">You MF Holding Secure</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
