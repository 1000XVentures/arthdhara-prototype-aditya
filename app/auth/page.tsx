"use client";

import { useState } from "react";
import LoginScreen from "@/components/LoginScreen";
import OTPScreen from "@/components/OTPScreen";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";

export default function AuthPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [step, setStep] = useState<"login" | "otp">("login");
  const [phone, setPhone] = useState("");

  const handlePhoneSubmit = (p: string) => {
    setPhone(p);
    setStep("otp");
  };

  const handleOTPVerified = () => {
    login(phone);
    router.replace("/home");
  };

  if (step === "login") {
    return <LoginScreen onPhoneSubmit={handlePhoneSubmit} />;
  }

  return (
    <OTPScreen
      phone={phone}
      onOTPVerified={handleOTPVerified}
      onBack={() => {
        console.log("onBack called, setting step to login");
        setStep("login");
      }}
    />
  );
}
