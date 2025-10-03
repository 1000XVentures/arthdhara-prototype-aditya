"use client";

import Image from "next/image";

export default function SplashScreen() {
  return (
    <div className="min-h-screen bg-[#1d4c4a] flex justify-center">
      <div className="relative w-full max-w-[414px] overflow-hidden flex items-center justify-center p-6">
        <div className="absolute " />
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="w-28 h-28 mb-4">
            <Image
              src="/images/logo-golden.png"
              alt="Arthdhara Logo"
              width={112}
              height={112}
              className="w-full h-full object-contain"
              priority
            />
          </div>
          <h1 className="text-2xl font-semibold text-[#D4AF37]">Arthdhara</h1>
        </div>
      </div>
    </div>
  );
}
