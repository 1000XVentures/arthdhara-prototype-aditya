"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Smartphone, IdCard } from "lucide-react";
import Image from "next/image";
import InlineOTPCard from "@/components/verify/InlineOTPCard";

type VerifyEligibilityFormProps = {
  onProceed?: (phone: string, pan: string) => void;
};

export default function VerifyEligibilityForm({
  onProceed,
}: VerifyEligibilityFormProps) {
  const router = useRouter();
  const [phone, setPhone] = useState("9993508760");
  const [pan, setPan] = useState("BVFPT5134M");
  const [step, setStep] = useState<"form" | "otp">("form");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onProceed?.(phone, pan);
    setStep("otp");
  };

  if (step === "otp") {
    return (
      <InlineOTPCard
        phone={phone}
        onVerified={() => router.push("/verify-eligibility/dpi")}
        onBack={() => setStep("form")}
      />
    );
  }
  return (
    <div className="h-dvh w-full bg-white flex flex-col items-center justify-start overflow-hidden pt-8">
      <div className="flex flex-col items-center mb-6 px-4">
        <Image
          src="/images/logo-golden.png"
          alt="Arthdhara Logo"
          width={80}
          height={80}
          className="mb-3"
        />
        <h1 className="text-xl font-semibold text-center">
          Verify Mutual Fund Eligibility
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="space-y-4 mb-6 px-4 w-full max-w-sm"
      >
        <div>
          <label className="block text-xs text-[#1C3D28] mb-1">
            Phone Number
          </label>
          <div className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white shadow-sm px-3 h-12">
            <span className="text-[#1C3D28] text-sm">+91</span>
            <input
              inputMode="numeric"
              pattern="[0-9]*"
              maxLength={10}
              value={phone}
              onChange={(e) =>
                setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))
              }
              className="w-full outline-none text-sm"
              placeholder="Enter phone number"
              aria-label="Phone number"
            />
            <Smartphone className="size-4 text-[#9CA3AF]" />
          </div>
        </div>

        <div>
          <label className="block text-xs text-[#1C3D28] mb-1">PAN</label>
          <div className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white shadow-sm px-3 h-12">
            <span className="inline-flex items-center justify-center rounded-md bg-[#EAF2FF] p-1">
              <IdCard className="size-4 text-[#2563EB]" />
            </span>
            <input
              value={pan}
              onChange={(e) => setPan(e.target.value.toUpperCase())}
              onBlur={(e) => setPan(e.target.value.toUpperCase())}
              style={{ textTransform: "uppercase" }}
              maxLength={10}
              pattern="[A-Z]{5}[0-9]{4}[A-Z]{1}"
              className="w-full outline-none text-sm tracking-wider uppercase"
              placeholder="ABCDE1234F"
              aria-label="PAN"
            />
          </div>
        </div>
      </form>

      <div className="px-4 w-full max-w-sm">
        <p className="text-[13px] text-[#4B5563] leading-5 mb-3">
          By clicking &quot;Proceed,&quot; you agree to Finsire collecting your
          PAN and Phone number to access …{" "}
          <button type="button" className="text-[#0EA5A3] font-medium">
            Read more
          </button>
        </p>
        <button
          onClick={(e) => handleSubmit(e as unknown as React.FormEvent)}
          className="w-full h-12 rounded-xl bg-[#15803d] text-white font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 hover:shadow-[0_8px_30px_rgba(21,128,61,0.3)] hover:scale-[1.02] active:scale-[0.98]"
        >
          Proceed
        </button>
      </div>
    </div>
  );
}
