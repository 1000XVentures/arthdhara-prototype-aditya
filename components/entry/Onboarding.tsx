"use client";

import { useState } from "react";
import Image from "next/image";

interface OnboardingProps {
  onComplete: () => void;
}

type Slide = {
  logo?: string;
  subLogo?: string;
  title: string;
  subtitle: string;
  features: Array<{
    icon: string;
    title: string;
    subtitle: string;
  }>;
  illustration?: string;
  partners?: string[];
  image?: string;
};

export default function Onboarding({ onComplete }: OnboardingProps) {
  const slides: Slide[] = [
    {
      logo: "/images/logo-golden.png",
      subLogo: "/images/lamf-logo.png",
      title: "Unlock Funds: Loan\nAgainst MFS",
      subtitle: "Access liquidity without selling your investments",
      features: [
        {
          icon: "/images/icons/check-circle.png",
          title: "Quick Apporval",
          subtitle: "Hasse-Free Process",
        },
        {
          icon: "/images/icons/shield.png",
          title: "Retain Ownership",
          subtitle: "Your MF Holdings Secure",
        },
      ],
      illustration: "/images/onboarding/loan-illustration.png",
      partners: [
        "/images/partners/sbi-mf.png",
        "/images/partners/nippon.png",
        "/images/partners/quantum.png",
        "/images/partners/hdfc.png",
      ],
    },
    {
      title: "Smart Investment",
      subtitle: "Grow your wealth with expert guidance",
      image: "/images/splash_screen_new/img2.png",
      features: [],
    },
    {
      title: "Secure Platform",
      subtitle: "Your investments are safe with us",
      image: "/images/splash_screen_new/img3.png",
      features: [],
    },
  ];

  const [index, setIndex] = useState(0);

  const isLast = index === slides.length - 1;

  const goToAuth = () => {
    window.location.href = "/auth";
  };

  const next = () => {
    if (isLast) {
      goToAuth();
      return;
    }
    setIndex((i) => Math.min(i + 1, slides.length - 1));
  };

  const renderFirstSlide = () => (
    <div className="text-center mb-4">
      <h1 className="text-4xl font-bold text-white mb-3 whitespace-pre-line font-lexend px-4 leading-tight">
        Unlock Funds: Loan Against MFS
      </h1>
      <p className="text-[#D4AF37] text-lg px-6 mb-6">
        Access liquidity without selling your investments
      </p>

      {/* Illustration with design elements */}
      <div className="relative w-full px-6 py-4">
        {/* Background Design Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top right blob */}
          <div className="absolute -top-12 -right-12 w-56 h-56 bg-[#428c6d] rounded-full opacity-20 blur-3xl" />

          {/* Bottom left blob */}
          <div className="absolute -bottom-12 -left-12 w-56 h-56 bg-[#428c6d] rounded-full opacity-20 blur-3xl" />

          {/* Center wave */}
          <div className="absolute top-1/2 left-1/2 w-[120%] h-64 -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-full h-full bg-[#428c6d] opacity-15 transform rotate-12 scale-125"
              style={{
                borderRadius: "70% 30% 50% 50% / 40% 60% 40% 60%",
              }}
            />
          </div>
        </div>

        {/* Main Image */}
        <div className="relative z-10 w-full aspect-[4/3]">
          <Image
            src="/images/onboardin-new/screen1.png"
            alt="Loan Against MFS"
            fill
            className="object-contain rounded-[140px] scale-125"
            sizes="(max-width: 800px) 100vw, 75vw "
          />
        </div>
      </div>
    </div>
  );

  const renderThirdSlide = () => (
    <div className="text-center mb-4">
      <h1 className="text-4xl font-bold text-white mb-3 whitespace-pre-line font-lexend px-4 leading-tight">
        Pledge and{"\n"}Get Started
      </h1>
      <p className="text-[#D4AF37] text-lg px-6 mb-6">
        Simple process to secure your financial future
      </p>

      {/* Illustration with design elements */}
      <div className="relative w-full px-6 py-4">
        {/* Background Design Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top right blob */}
          <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#428c6d] rounded-full opacity-20 blur-3xl" />

          {/* Bottom left blob */}
          <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-[#428c6d] rounded-full opacity-20 blur-3xl" />

          {/* Center wave */}
          <div className="absolute top-1/2 left-1/2 w-[120%] h-64 -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-full h-full bg-[#428c6d] opacity-15 transform -rotate-6 scale-125"
              style={{
                borderRadius: "40% 60% 70% 30% / 50% 40% 60% 50%",
              }}
            />
          </div>
        </div>

        {/* Main Image */}
        <div className="relative z-10 w-full aspect-[4/3]">
          <Image
            src="/images/onboardin-new/img3-new.png"
            alt="Pledge and Start"
            fill
            className="object-contain rounded-[140px] scale-[1.75]"
            sizes="(max-width: 800px) 100vw, 75vw "
          />
        </div>
      </div>
    </div>
  );

  const renderSecondSlide = () => (
    <div className="text-center mb-4">
      <h1 className="text-4xl font-bold text-white mb-3 whitespace-pre-line font-lexend px-4 leading-tight">
        Lower Interest{"\n"}Flexible Usage
      </h1>
      <p className="text-[#D4AF37] text-lg px-6 mb-6">
        Competitive rates with freedom to use funds your way
      </p>

      {/* Illustration with design elements */}
      <div className="relative w-full px-6 py-4">
        {/* Background Design Elements */}
        <div className="absolute inset-0 pointer-events-none">
          {/* Top left blob */}
          <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#428c6d] rounded-full opacity-20 blur-3xl" />

          {/* Bottom right blob */}
          <div className="absolute -bottom-12 -right-12 w-64 h-64 bg-[#428c6d] rounded-full opacity-20 blur-3xl" />

          {/* Center wave */}
          <div className="absolute top-1/2 left-1/2 w-[120%] h-64 -translate-x-1/2 -translate-y-1/2">
            <div
              className="w-full h-full bg-[#428c6d] opacity-15 transform -rotate-12 scale-125"
              style={{
                borderRadius: "30% 70% 50% 50% / 60% 40% 60% 40%",
              }}
            />
          </div>
        </div>

        {/* Main Image */}
        <div className="relative z-10 w-full aspect-[4/3]">
          <Image
            src="/images/onboardin-new/img2-new.png"
            alt="Lower Interest Rates"
            fill
            className="object-contain rounded-[140px] scale-150"
            sizes="(max-width: 800px) 100vw, 75vw "
          />
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#1d4c4a] flex justify-center">
      <div className="w-full max-w-[414px] flex flex-col relative overflow-hidden">
        <div className="w-full flex-1 flex flex-col relative z-10">
          {/* Content Container */}
          <div className="flex-1 flex flex-col px-6 pt-8">
            {/* Logo */}
            <div className="flex items-center justify-center gap-3 mb-6">
              <Image
                src="/images/logo-golden.png"
                alt="Arthdhara Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <h2 className="text-[#D4AF37] text-xl font-semibold font-lexend">
                Arthdhara
              </h2>
            </div>

            {/* Main Content */}
            {index === 0
              ? renderFirstSlide()
              : index === 1
                ? renderSecondSlide()
                : renderThirdSlide()}

            {/* Features */}
            {index === 0 ? (
              <div className="grid grid-cols-2 gap-3 mb-6 px-2 mt-8">
                <div className="bg-[#226560] px-3 py-4 rounded-xl border border-[#D4AF37]/20 flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-3 bg-gradient-to-br from-[#FFE5B4] to-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 text-[#1d4c4a]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold mb-1 font-lexend text-base truncate w-full">
                    Quick Approval
                  </h3>
                  <p className="text-white/70 text-xs truncate w-full">
                    Hasse-Free Process
                  </p>
                </div>
                <div className="bg-[#226560] px-3 py-4 rounded-xl border border-[#D4AF37]/20 flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-3 bg-gradient-to-br from-[#FFE5B4] to-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 text-[#1d4c4a]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold mb-1 font-lexend text-base truncate w-full">
                    Retain Ownership
                  </h3>
                  <p className="text-white/70 text-xs truncate w-full">
                    Your MF Holdings Secure
                  </p>
                </div>
              </div>
            ) : index === 1 ? (
              <div className="grid grid-cols-2 gap-3 mb-6 px-2 mt-8">
                <div className="bg-[#226560] px-3 py-4 rounded-xl border border-[#D4AF37]/20 flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-3 bg-gradient-to-br from-[#FFE5B4] to-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 text-[#1d4c4a]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold mb-1 font-lexend text-base truncate w-full">
                    Low Interest Rate
                  </h3>
                  <p className="text-white/70 text-xs truncate w-full">
                    Competitive Pricing
                  </p>
                </div>
                <div className="bg-[#226560] px-3 py-4 rounded-xl border border-[#D4AF37]/20 flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-3 bg-gradient-to-br from-[#FFE5B4] to-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 text-[#1d4c4a]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold mb-1 font-lexend text-base truncate w-full">
                    Flexible Terms
                  </h3>
                  <p className="text-white/70 text-xs truncate w-full">
                    Customizable Options
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-3 mb-6 px-2 mt-8">
                <div className="bg-[#226560] px-3 py-4 rounded-xl border border-[#D4AF37]/20 flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-3 bg-gradient-to-br from-[#FFE5B4] to-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 text-[#1d4c4a]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold mb-1 font-lexend text-base truncate w-full">
                    Secure Pledge
                  </h3>
                  <p className="text-white/70 text-xs truncate w-full">
                    Safe & Protected
                  </p>
                </div>
                <div className="bg-[#226560] px-3 py-4 rounded-xl border border-[#D4AF37]/20 flex flex-col items-center text-center">
                  <div className="w-12 h-12 mb-3 bg-gradient-to-br from-[#FFE5B4] to-[#D4AF37] rounded-full flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-7 h-7 text-[#1d4c4a]"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-white font-bold mb-1 font-lexend text-base truncate w-full">
                    Quick Process
                  </h3>
                  <p className="text-white/70 text-xs truncate w-full">
                    Start in Minutes
                  </p>
                </div>
              </div>
            )}
            {/* CTA */}
            <button
              onClick={goToAuth}
              className="w-full py-4 bg-[#64c27f] text-white text-2xl font-medium tracking-wide rounded-xl shadow-lg hover:bg-[#58b171] transition-colors"
            >
              Get Started
            </button>

            {/* Story Indicators */}
            <div className="flex justify-center gap-3 mt-4">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`relative h-2 rounded-full bg-[#D4AF37]/40 overflow-hidden transition-all duration-300
                    ${i === index ? "w-12" : "w-2"}`}
                >
                  <div
                    className={`absolute inset-0 bg-[#D4AF37] transition-all
                      ${i === index ? "animate-story-progress" : i < index ? "w-full" : "w-0"}`}
                    onAnimationEnd={() => {
                      if (i === index) {
                        setTimeout(() => {
                          if (isLast) {
                            goToAuth();
                          } else {
                            next();
                          }
                        }, 100);
                      }
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
