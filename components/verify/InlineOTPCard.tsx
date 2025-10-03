"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Edit } from "lucide-react";

type InlineOTPCardProps = {
  phone: string;
  onBack: () => void;
  onVerified: () => void;
};

export default function InlineOTPCard({
  phone,
  onBack,
  onVerified,
}: InlineOTPCardProps) {
  const [otp, setOtp] = useState<string[]>(["", "", "", "", "", ""]);
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [error, setError] = useState<string>("");
  const [verificationSuccess, setVerificationSuccess] = useState(false);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const t = setTimeout(() => setTimeLeft((s) => s - 1), 1000);
    return () => clearTimeout(t);
  }, [timeLeft]);

  const handleChange = (idx: number, value: string) => {
    if (value.length > 1) return;
    const next = [...otp];
    next[idx] = value.replace(/\D/g, "");
    setOtp(next);
    if (error) setError("");
    if (value && idx < inputRefs.current.length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (
    idx: number,
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Backspace" && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const resend = () => {
    setTimeLeft(30);
    setOtp(["", "", "", "", "", ""]);
    setError("");
    inputRefs.current[0]?.focus();
  };

  const verifyOtp = () => {
    const value = otp.join("");
    if (value.length !== 6) return;
    setIsVerifying(true);
    setError("");
    setTimeout(() => {
      if (value === "123456") {
        setError("");
        setVerificationSuccess(true);
        onVerified();
      } else {
        setIsVerifying(false);
        setOtp(["", "", "", "", "", ""]);
        inputRefs.current[0]?.focus();
        setError("Invalid OTP. Please try again.");
      }
    }, 800);
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    verifyOtp();
  };

  const formatted = `+91 ${phone.slice(0, 5)} ${phone.slice(5)}`;
  const enteredCode = otp.join("");
  const canVerify = enteredCode.length === 6 && enteredCode === "123456";

  const handlePaste = (
    idx: number,
    e: React.ClipboardEvent<HTMLInputElement>
  ) => {
    const pasted = e.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, 6);
    if (!pasted) return;
    e.preventDefault();
    const next = [...otp];
    for (let i = 0; i < pasted.length && idx + i < next.length; i++) {
      next[idx + i] = pasted[i] ?? "";
    }
    setOtp(next);
    const lastIndex = Math.min(
      idx + pasted.length,
      inputRefs.current.length - 1
    );
    inputRefs.current[lastIndex]?.focus();
  };

  if (verificationSuccess) {
    return (
      <div className="mx-auto max-w-screen-sm px-4 pb-20 pt-2">
        <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
          <div className="px-5 pt-8 pb-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-[#0B1215] mb-2">
                OTP Verified Successfully!
              </h2>
              <p className="text-gray-600">
                Redirecting you to the next step...
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-screen-sm px-4 pb-20 pt-2">
      <div className="rounded-2xl bg-white shadow-xl overflow-hidden">
        <div className="px-5 pt-5 pb-1">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-[15px] font-semibold text-[#0B1215]">
                OTP Verification
              </h2>
              <p className="text-[12px] text-[--color-text-secondary] mt-1">
                OTP sent to {formatted}
              </p>
            </div>
            <button
              onClick={onBack}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Edit phone number"
            >
              <Edit className="size-4 text-gray-600" />
            </button>
          </div>
        </div>

        <form onSubmit={submit} className="px-5 pt-4 pb-5">
          <div className="flex gap-2 mb-3">
            {otp.map((digit, i) => (
              <input
                key={i}
                ref={(el: HTMLInputElement | null): void => {
                  inputRefs.current[i] = el;
                }}
                value={digit}
                onChange={(e) => handleChange(i, e.target.value)}
                onKeyDown={(e) => handleKeyDown(i, e)}
                onPaste={(e) => handlePaste(i, e)}
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                disabled={isVerifying}
                className={`w-10 h-12 sm:w-11 sm:h-12 md:w-12 md:h-12 rounded-lg bg-[#F7F9FB] text-center text-base sm:text-lg font-semibold focus:outline-none focus:ring-2 ${
                  error
                    ? "focus:ring-red-500 ring-red-500 border-red-300"
                    : "focus:ring-[--color-primary]"
                }`}
              />
            ))}
          </div>
          {error && (
            <p className="text-[13px] text-red-600 mb-2" aria-live="polite">
              {error}
            </p>
          )}

          <div className="flex items-center justify-between text-[12px] mb-4">
            <div className="text-[--color-text-secondary]">
              Didn&apos;t get an OTP?
              <button
                type="button"
                onClick={timeLeft === 0 ? resend : undefined}
                className={`ml-1 font-semibold ${
                  timeLeft === 0
                    ? "text-blue-600 hover:text-blue-700 hover:underline"
                    : "text-gray-400 cursor-not-allowed pointer-events-none"
                }`}
                aria-disabled={timeLeft !== 0}
              >
                Resend
              </button>
            </div>
            <div className="text-[--color-text-secondary] font-medium tabular-nums">
              {String(Math.floor(timeLeft / 60)).padStart(2, "0")}:
              {String(timeLeft % 60).padStart(2, "0")}
            </div>
          </div>

          {/* Intentionally no primary button inside the card */}
        </form>
      </div>
      <div className="mt-4">
        <button
          type="button"
          onClick={verifyOtp}
          disabled={isVerifying}
          style={{ backgroundColor: canVerify ? "#15803d" : "#E5E7EB" }}
          className={`w-full h-12 rounded-full font-semibold transition-colors shadow-md text-white ${
            canVerify ? "hover:bg-[#166534]" : ""
          } ${isVerifying ? "opacity-70 cursor-wait" : "cursor-pointer"}`}
        >
          {isVerifying ? "Verifying..." : "Verify OTP"}
        </button>
      </div>
    </div>
  );
}
