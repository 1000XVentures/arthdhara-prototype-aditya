"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";
import LoginScreen from "@/components/LoginScreen";
import OTPScreen from "@/components/OTPScreen";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import SplashScreen from "@/components/entry/SplashScreen";
import Onboarding from "@/components/entry/Onboarding";
// Entry flow has moved to app/page.tsx and /auth route.

interface AuthWrapperProps {
  children: React.ReactNode;
}

export default function AuthWrapper({ children }: AuthWrapperProps) {
  const { isAuthenticated, login } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [redirecting, setRedirecting] = useState(false);
  const [currentStep, setCurrentStep] = useState<
    "splash" | "onboarding" | "login" | "otp"
  >("splash");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handlePhoneSubmit = (phone: string) => {
    setPhoneNumber(phone);
    setCurrentStep("otp");
  };

  const handleOTPVerified = () => {
    // Redirect only when logging in from Auth screens
    setRedirecting(true);
    login(phoneNumber);
    router.replace("/home");
  };

  const handleOnboardingComplete = () => {
    localStorage.setItem(
      "arthdhara_onboarding",
      JSON.stringify({ completed: true })
    );
    setCurrentStep("login");
  };

  const handleBackToLogin = () => {
    setCurrentStep("login");
    setPhoneNumber("");
  };

  // Determine pre-auth flow: splash -> onboarding? -> login
  useEffect(() => {
    if (!isAuthenticated) {
      const forceOnboarding = !!searchParams.get("onboarding");
      const saved = localStorage.getItem("arthdhara_onboarding");
      const completed = saved ? !!JSON.parse(saved)?.completed : false;
      // Start with splash, then route accordingly
      setCurrentStep("splash");
      const timer = setTimeout(() => {
        if (forceOnboarding) {
          setCurrentStep("onboarding");
        } else {
          setCurrentStep(completed ? "login" : "onboarding");
        }
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, searchParams]);

  useEffect(() => {
    if (redirecting && pathname === "/home") {
      setRedirecting(false);
    }
  }, [redirecting, pathname]);

  if (!isAuthenticated) {
    if (currentStep === "splash") {
      return <SplashScreen />;
    }
    if (currentStep === "onboarding") {
      return <Onboarding onComplete={handleOnboardingComplete} />;
    }
    if (currentStep === "login") {
      return (
        <LoginScreen
          onPhoneSubmit={handlePhoneSubmit}
          onShowOnboarding={() => setCurrentStep("onboarding")}
        />
      );
    }
    if (currentStep === "otp") {
      return (
        <OTPScreen
          phone={phoneNumber}
          onOTPVerified={handleOTPVerified}
          onBack={handleBackToLogin}
        />
      );
    }
  }

  // While redirecting after login, render nothing to avoid flash
  if (redirecting) return null;

  return <>{children}</>;
}
