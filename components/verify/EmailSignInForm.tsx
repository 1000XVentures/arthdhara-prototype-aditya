"use client";

import { Mail, ArrowRight } from "lucide-react";
import { useState } from "react";

type EmailSignInFormProps = {
  onProceed?: (email: string) => void;
};

export default function EmailSignInForm({ onProceed }: EmailSignInFormProps) {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isValidEmail) {
      onProceed?.(email);
    }
  };

  const handleGoogleSignIn = () => {
    // Handle Google Sign-in logic here
    console.log("Google Sign-in clicked");
    // For now, we'll just proceed with a dummy email
    onProceed?.("user@gmail.com");
  };

  return (
    <div className="min-h-dvh flex flex-col">
      <div className="flex-1">
        <h1 className="text-xl font-semibold mb-3">Get Started</h1>
        <p className="text-sm text-[#6B7280] mb-6">
          Enter your email to continue with mutual fund verification
        </p>

        <form onSubmit={handleEmailSubmit} className="space-y-4">
          <div>
            <label className="block text-xs text-[#1C3D28] mb-1">
              Email Address
            </label>
            <div className="flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white shadow-sm px-3 h-12">
              <span className="inline-flex items-center justify-center rounded-md bg-[#EAF2FF] p-1">
                <Mail className="size-4 text-[#2563EB]" />
              </span>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                className="w-full outline-none text-sm"
                placeholder="Enter your email address"
                aria-label="Email address"
              />
            </div>
            {email && !isValidEmail && (
              <p className="text-xs text-red-500 mt-1">
                Please enter a valid email address
              </p>
            )}
          </div>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-[#E5E7EB]" />
            </div>
            <div className="relative flex justify-center text-xs">
              <span className="bg-white px-2 text-[#6B7280]">or</span>
            </div>
          </div>

          <button
            onClick={handleGoogleSignIn}
            className="w-full mt-4 h-12 rounded-xl border border-[#E5E7EB] bg-white text-[#374151] font-medium flex items-center justify-center gap-3 shadow-sm hover:shadow-md transition-all duration-200"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </button>
        </div>
      </div>

      <div className="sticky bottom-0 left-0 right-0 bg-transparent">
        <div className="mx-auto max-w-screen-sm">
          <div className="rounded-2xl bg-white/90 shadow-xl px-4 pt-4 pb-5">
            <p className="text-[13px] text-[#4B5563] leading-5 mb-3">
              By continuing, you agree to our{" "}
              <button type="button" className="text-[#0EA5A3] font-medium">
                Terms of Service
              </button>{" "}
              and{" "}
              <button type="button" className="text-[#0EA5A3] font-medium">
                Privacy Policy
              </button>
            </p>
            <button
              onClick={handleEmailSubmit}
              disabled={!isValidEmail}
              className="w-full h-12 rounded-xl bg-gradient-to-br from-[#22c55e] to-[#15803d] text-white font-semibold shadow-[0_8px_30px_rgb(0,0,0,0.12)] transform transition-all duration-300 hover:shadow-[0_8px_30px_rgba(34,197,94,0.3)] hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] flex items-center justify-center gap-2"
            >
              Continue
              <ArrowRight className="size-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
