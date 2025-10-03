"use client";

import { useState } from "react";

type DPILockerIframeProps = {
  onBack?: () => void;
  src?: string;
};

export default function DPILockerIframe({
  onBack,
  src = "https://link.dpilocker.com/abcd-demo/d",
}: DPILockerIframeProps) {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-full">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="flex flex-col items-center space-y-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#15803d]"></div>
            <p className="text-sm text-gray-600">Loading DPI verification...</p>
          </div>
        </div>
      )}
      <iframe
        src={src}
        className="w-full h-full"
        style={{
          height: "calc(100dvh - 3.5rem)", // Subtract top bar height (56px)
          minHeight: "calc(100dvh - 3.5rem)",
        }}
        title="DPI Locker"
        loading="eager"
        onLoad={handleLoad}
      />
    </div>
  );
}
