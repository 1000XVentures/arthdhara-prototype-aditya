"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowRight } from "lucide-react";

type StageKey =
  | "NONE"
  | "KYC"
  | "SELECT_FUNDS"
  | "VERIFY_ASSET"
  | "PLEDGE_FUNDS"
  | "WITHDRAW_READY";

export default function WithdrawButton() {
  const router = useRouter();
  const [stage, setStage] = useState<StageKey>("NONE");
  const lastValueRef = useRef<string | undefined>(undefined);

  const stageConfig: Record<
    Exclude<StageKey, "NONE">,
    {
      title: string;
      subtitle: string;
      buttonText: string;
      path: string;
    }
  > = {
    KYC: {
      title: "Just few More Step left to get credit",
      subtitle: "Complete your KYC to continue",
      buttonText: "Complete KYC Process",
      path: "/verify-eligibility/dpi",
    },
    SELECT_FUNDS: {
      title: "Just few More Step left to get credit",
      subtitle: "Pick eligible funds to proceed",
      buttonText: "Select Funds",
      path: "/verify-eligibility",
    },
    VERIFY_ASSET: {
      title: "Just few More Step left to get credit",
      subtitle: "Confirm holdings to continue",
      buttonText: "Verify Assets",
      path: "/verify-eligibility",
    },
    PLEDGE_FUNDS: {
      title: "Just few More Step left to get credit",
      subtitle: "Secure your credit line by pledging",
      buttonText: "Pledge Funds",
      path: "/verify-eligibility",
    },
    WITHDRAW_READY: {
      title: "Just few More Step left to get credit",
      subtitle: "Your credit line is ready",
      buttonText: "Withdraw Now",
      path: "/calculator",
    },
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

  return (
    <div className="pt-2 pb-4">
      {stage !== "NONE" ? (
        <div className="w-full rounded-xl border border-green-300 bg-white p-5 sm:p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)]">
          <div className="mb-3">
            <p className="text-base font-semibold text-gray-900">
              {stageConfig[stage as Exclude<StageKey, "NONE">].title}
            </p>
            <p className="text-sm text-gray-500">
              {stageConfig[stage as Exclude<StageKey, "NONE">].subtitle}
            </p>
          </div>
          <button
            onClick={() =>
              router.push(stageConfig[stage as Exclude<StageKey, "NONE">].path)
            }
            className="relative w-full py-3 px-6 bg-[#15803d] text-white rounded-xl font-medium text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center overflow-hidden group"
          >
            {stageConfig[stage as Exclude<StageKey, "NONE">].buttonText}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      ) : (
        <button
          onClick={() => router.push("/verify-eligibility")}
          className="relative w-full py-3 px-6 bg-[#15803d] text-white rounded-xl font-medium text-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center overflow-hidden group"
        >
          Apply for Credit Line{" "}
          <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
        </button>
      )}
    </div>
  );
}
