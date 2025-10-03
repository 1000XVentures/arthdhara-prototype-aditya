"use client";
import HeroSlider from "@/components/home/HeroSlider";
import HomeHeroSection from "@/components/home/LAMFSection";
import TrendingCarousel from "@/components/home/TrendingCarousel";
import ActionsGrid from "@/components/home/ActionsGrid";
import QuickActions from "@/components/home/QuickActions";
import Partners from "@/components/home/Partners";
import Promos from "@/components/home/Promos";
import Updates from "@/components/home/Updates";
import WithdrawButton from "@/components/home/WithdrawButton";
import StoryViewer from "@/components/ui/StoryViewer";
import InterestRateChart from "@/components/ui/InterestRateChart";
import { STORIES, type StoryKey } from "@/components/home/stories";
import SupportCTA from "@/components/home/SupportCTA";
import { useCallback, useMemo, useState } from "react";

export default function HomePage() {
  const [openKey, setOpenKey] = useState<StoryKey | null>(null);
  const topic = useMemo(() => (openKey ? STORIES[openKey] : null), [openKey]);
  const close = useCallback(() => setOpenKey(null), []);

  return (
    <>
      {/* Full Width Hero Section */}
      <HomeHeroSection />
      <div className="px-4 pt-2 max-w-[414px] mx-auto">
        <TrendingCarousel />
      </div>

      {/* Interest Rate Comparison */}
      <div className="px-4 pt-6 max-w-[414px] mx-auto">
        <InterestRateChart ourProductRate={10.5} />
      </div>

      {/* Regular Content with Container */}
      <div className="space-y-4 px-4 pt-2 max-w-[414px] mx-auto overflow-x-hidden">
        {/* <WithdrawButton /> */}
        <ActionsGrid onSelect={(k) => setOpenKey(k)} />
        <Partners />
        <SupportCTA />
        {/* <QuickActions />
        <Promos /> */}
        <Updates />
      </div>

      <StoryViewer
        key={`story-${openKey ?? "none"}`}
        open={openKey !== null}
        topic={topic}
        onClose={close}
      />
    </>
  );
}
