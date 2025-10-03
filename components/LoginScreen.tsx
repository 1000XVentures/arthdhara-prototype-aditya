"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface LoginScreenProps {
  onPhoneSubmit: (phone: string) => void;
  onShowOnboarding?: () => void;
}

export default function LoginScreen({
  onPhoneSubmit,
  onShowOnboarding,
}: LoginScreenProps) {
  const [phone, setPhone] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  const validateIndianPhone = (phoneNumber: string) => {
    // Indian mobile number validation: 10 digits starting with 6, 7, 8, or 9
    const phoneRegex = /^[6-9]\d{9}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Remove non-digits
    setPhone(value);
    setIsValid(validateIndianPhone(value));

    // Clear error when user starts typing
    if (showError) {
      setShowError(false);
      setError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (phone.length === 0) {
      setError("Please enter your phone number");
      setShowError(true);
      return;
    }

    if (!isValid) {
      setError("Please enter a valid 10-digit mobile number");
      setShowError(true);
      return;
    }

    setShowError(false);
    setError("");
    onPhoneSubmit(phone);
  };

  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-[414px] flex flex-col px-6 min-h-screen">
        <div className="pt-12">
          {/* Logo */}
          <div className="mb-8">
            <Image
              src="/images/logo-golden.png"
              alt="Arthdhara Logo"
              width={64}
              height={64}
              className="w-16 h-16"
            />
          </div>

          {/* Welcome Text */}
          <div className="-mb-16 ">
            <h1 className="text-4xl font-bold text-[#1d4c4a] mb-2">
              Welcome to
            </h1>
            <h2 className="text-4xl font-bold text-[#D4AF37]">Arthdhara</h2>
            <p className="text-gray-600 mt-2">
              Get started with your Credit Line
            </p>
          </div>
        </div>

        {/* Phone Input Section - Centered */}
        <div className="flex-1 flex flex-col justify-center -mt-10">
          <h3 className="text-4xl font-bold text-[#1d4c4a] mb-4">
            <div>What&apos;s Your</div>
            <div>Phone Number?</div>
          </h3>
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-500 text-lg">
                +91
              </div>
              <input
                type="tel"
                value={phone}
                onChange={handlePhoneChange}
                className={`w-full pl-16 pr-4 py-4 bg-gray-100 rounded-xl text-lg focus:outline-none ${
                  showError ? "border-2 border-red-500" : ""
                }`}
                placeholder="Enter your phone number"
                maxLength={10}
              />
            </div>
            {showError && (
              <div className="mt-2 text-red-500 text-sm text-center">
                {error}
              </div>
            )}
          </form>
        </div>

        {/* Bottom Section with Button and Terms */}
        <div className="mt-auto pb-8 space-y-4">
          <button
            onClick={handleSubmit}
            className="w-full py-4 bg-[#1d4c4a] text-white text-lg font-medium rounded-xl shadow-lg hover:bg-[#226560] transition-colors"
          >
            Get OTP
          </button>

          <p className="text-sm text-center text-gray-500 mt-4">
            By proceeding, you accept the{" "}
            <a href="#" className="text-[#D4AF37]">
              Terms and Conditions
            </a>
            .
            <br />
            Read the Privacy Policy{" "}
            <a href="#" className="text-[#D4AF37]">
              here
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
