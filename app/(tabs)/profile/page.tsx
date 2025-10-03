"use client";

import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Card from "@/components/ui/Card";
import LinkRow from "@/components/ui/LinkRow";
import {
  User,
  Settings,
  CreditCard,
  MessageSquare,
  Phone,
  Mail,
  FileText,
  HelpCircle,
  Lock,
  FileText as Document,
} from "lucide-react";
import { MdOutlineEdit } from "react-icons/md";
import { FaWhatsapp, FaStreetView, FaFlag } from "react-icons/fa";

type ProfileData = {
  fullName: string;
  dob: string;
  email: string;
  avatarLetter?: string;
};

const STORAGE_KEY = "arthdhara_profile";

function loadProfile(): ProfileData | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return parsed as ProfileData;
  } catch {
    return null;
  }
}

function calculateAge(dob: string): number {
  if (!dob) return 24; // default age
  const today = new Date();
  const birthDate = new Date(dob);
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}

function getInitials(fullName: string): string {
  if (!fullName || fullName.trim().length === 0) return "HT";
  const name = fullName.trim();
  const words = name.split(/\s+/).filter((word) => word.length > 0);
  if (words.length === 1) {
    return words[0].charAt(0).toUpperCase();
  } else {
    return (
      words[0].charAt(0) + words[words.length - 1].charAt(0)
    ).toUpperCase();
  }
}

export default function ProfilePage() {
  const { isAuthenticated, logout, phone } = useAuth();
  const router = useRouter();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const loadProfileData = () => {
      const savedProfile = loadProfile();
      setProfileData(savedProfile);
    };

    loadProfileData();

    // Listen for profile updates from account details page
    const handleProfileUpdate = () => {
      loadProfileData();
    };

    window.addEventListener("profileUpdated", handleProfileUpdate);
    return () =>
      window.removeEventListener("profileUpdated", handleProfileUpdate);
  }, []);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-white">
      {/* Profile Header */}
      <div className="bg-white py-8 mb-6">
        <div className="flex flex-col items-center text-center px-4">
          {/* Profile Avatar */}
          <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center mb-4 shadow-lg">
            <span className="text-white font-bold text-xl">
              {profileData ? getInitials(profileData.fullName) : "HT"}
            </span>
          </div>

          {/* User Info */}
          <div className="relative flex items-center justify-center mb-1">
            <h1 className="text-2xl font-semibold text-gray-900">
              {profileData?.fullName || "Harsh"}
            </h1>
            <button
              onClick={() => router.push("/profile/account")}
              className="absolute -right-6 p-1 hover:bg-gray-100 rounded-full transition-colors"
            >
              <MdOutlineEdit size={14} className="text-gray-600" />
            </button>
          </div>
          <p className="text-gray-600 text-lg mb-2">
            {phone ? `+91 ${phone}` : "+91 9993508760"}
          </p>
          <p className="text-gray-500 text-sm">
            Age {profileData?.dob ? calculateAge(profileData.dob) : 24} • Joined
            September 2025
          </p>
        </div>
      </div>

      {/* Profile Settings Section */}
      <div className="mb-6">
        <div className="px-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Profile Settings
          </h2>
        </div>

        <div className="bg-white shadow-sm">
          <div className="px-4">
            <button
              onClick={() => router.push("/profile/account-details")}
              className="flex items-center justify-between py-3 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <User size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">
                  Account Details
                </span>
              </div>
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => router.push("/profile/settings")}
              className="flex items-center justify-between py-3 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Settings size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">
                  User Preferences
                </span>
              </div>
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <div className="flex items-center justify-between py-3">
              <div className="flex items-center gap-3">
                <CreditCard size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">
                  KYC Verification
                </span>
              </div>
              <button
                onClick={() => router.push("/verify-eligibility")}
                className="px-3 py-1 bg-green-800 text-white text-sm font-medium rounded-md hover:bg-green-900 transition-colors"
              >
                Start now
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div className="mb-6">
        <div className="px-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">Support</h2>
        </div>

        <div className="bg-white shadow-sm">
          <div className="px-4">
            <button
              onClick={() => router.push("/faqs")}
              className="flex items-center justify-between py-3 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <HelpCircle size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">Search FAQ</span>
              </div>
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => router.push("/contact/call")}
              className="flex items-center justify-between py-3 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Phone size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">Call Now</span>
              </div>
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => {
                const phoneNumber = "919993508760";
                const message = encodeURIComponent(
                  "Hi! I need support. Could you please help me?"
                );
                window.open(
                  `https://wa.me/${phoneNumber}?text=${message}`,
                  "_blank"
                );
              }}
              className="flex items-center justify-between py-3 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FaWhatsapp size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">
                  WhatsApp Support
                </span>
              </div>
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => router.push("/contact/email")}
              className="flex items-center justify-between py-3 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Mail size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">Email Support</span>
              </div>
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => router.push("/contact/form")}
              className="flex items-center justify-between py-3 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <MessageSquare size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">Contact Form</span>
              </div>
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Compliance Section */}
      <div className="mb-8">
        <div className="px-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">
            Compliance and Info
          </h2>
        </div>

        <div className="bg-white shadow-sm">
          <div className="px-4">
            <button
              onClick={() => router.push("/profile/about")}
              className="flex items-center justify-between py-3 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FaStreetView size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">About Us</span>
              </div>
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => router.push("/profile/mission")}
              className="flex items-center justify-between py-3 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <FaFlag size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">
                  Our Mission & Vision
                </span>
              </div>
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => router.push("/profile/privacy")}
              className="flex items-center justify-between py-3 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Lock size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">
                  Privacy Policy
                </span>
              </div>
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>

            <button
              onClick={() => router.push("/profile/terms")}
              className="flex items-center justify-between py-3 w-full text-left hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <Document size={20} className="text-gray-600" />
                <span className="text-gray-900 font-normal">
                  Terms of Service
                </span>
              </div>
              <svg
                className="w-5 h-5 text-green-600"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="pt-6 pb-8">
        <div className="px-4 text-center">
          <button
            onClick={() => {
              logout();
              router.replace("/auth");
            }}
            className="text-red-800 font-medium hover:text-red-900 transition-colors"
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}
