"use client";

import { useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react";

interface OTPScreenProps {
  phone: string;
  onOTPVerified: () => void;
  onBack: () => void;
}

export default function OTPScreen({
  phone,
  onOTPVerified,
  onBack,
}: OTPScreenProps) {
  const [otp, setOtp] = useState("");
  const [isVerifying, setIsVerifying] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [error, setError] = useState("");
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, ""); // Only allow digits
    if (value.length <= 6) {
      setOtp(value);
    }

    // Clear error when user starts typing
    if (showError) {
      setShowError(false);
      setError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (otp.length === 0) {
      setError("Please enter the OTP");
      setShowError(true);
      return;
    }

    if (otp.length < 4) {
      setError("Please enter a valid 4-digit OTP");
      setShowError(true);
      return;
    }

    if (otp.length > 6) {
      setError("OTP should not exceed 6 digits");
      setShowError(true);
      return;
    }

    setShowError(false);
    setError("");
    setIsVerifying(true);

    // Simulate API call
    setTimeout(() => {
      if (otp === "1234") {
        onOTPVerified();
      } else {
        setIsVerifying(false);
        setOtp("");
        setError("Invalid OTP. Please try again.");
        setShowError(true);
      }
    }, 1000);
  };

  const resendOTP = () => {
    setTimeLeft(30);
    setOtp("");
    setShowError(false);
    setError("");
  };

  const handleBackClick = () => {
    console.log("Back button clicked - calling onBack");
    onBack();
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Back Button - Outside main container */}
      <div className="absolute top-12 left-6 z-10">
        <button
          onClick={handleBackClick}
          className="p-2 hover:bg-gray-100 rounded-full transition-colors bg-white shadow-sm"
          type="button"
        >
          <ArrowLeft className="w-6 h-6 text-gray-600" />
        </button>
      </div>

      <div className="w-full max-w-[414px] mx-auto flex flex-col px-6 min-h-screen">
        {/* Main Content */}
        <div className="flex-1 flex flex-col justify-center -mt-20">
          {/* Title and Phone Number */}
          <div className="mb-8 text-left">
            <h1 className="text-2xl font-bold text-[#1d4c4a] mb-2">
              We sent an OTP to
            </h1>
            <p className="text-3xl font-bold text-[#D4AF37]">{phone}</p>
          </div>

          {/* OTP Input */}
          <form onSubmit={handleSubmit} className="mb-8">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={otp}
              onChange={handleOtpChange}
              className={`w-full py-4 px-4 bg-gray-100 rounded-xl text-lg focus:outline-none text-left font-bold ${
                showError ? "border-2 border-red-500" : ""
              }`}
              placeholder="Enter OTP"
              maxLength={6}
            />
            {showError && (
              <div className="mt-2 text-red-500 text-sm text-center">
                {error}
              </div>
            )}
          </form>

          {/* Resend Text */}
          <div className="text-left mb-8">
            {timeLeft > 0 ? (
              <p className="text-lg text-gray-600">
                Didn&apos;t get one? We can{" "}
                <span className="text-[#1d4c4a] font-bold">
                  resend it in {timeLeft}s
                </span>
              </p>
            ) : (
              <p className="text-lg text-gray-600">
                Didn&apos;t get one? We can{" "}
                <button
                  onClick={resendOTP}
                  className="text-[#1d4c4a] font-bold underline"
                >
                  resend it now
                </button>
              </p>
            )}
          </div>
        </div>

        {/* Verify Button */}
        <div className="mt-auto pb-8">
          <button
            onClick={handleSubmit}
            disabled={isVerifying}
            className="w-full py-4 bg-[#1d4c4a] text-white text-lg font-medium rounded-xl shadow-lg hover:bg-[#226560] transition-colors disabled:bg-[#1d4c4a] disabled:cursor-not-allowed"
          >
            {isVerifying ? "VERIFYING..." : "VERIFY OTP"}
          </button>
        </div>
      </div>
    </div>
  );
}
