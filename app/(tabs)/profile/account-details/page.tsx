"use client";

import { useEffect, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

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

function formatDate(dob: string): string {
  if (!dob) return "Not provided";
  const date = new Date(dob);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function AccountDetailsViewPage() {
  const { phone } = useAuth();
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const loadProfileData = () => {
      const savedProfile = loadProfile();
      setProfileData(savedProfile);
    };

    loadProfileData();

    // Listen for profile updates
    const handleProfileUpdate = () => {
      loadProfileData();
    };

    window.addEventListener("profileUpdated", handleProfileUpdate);
    return () =>
      window.removeEventListener("profileUpdated", handleProfileUpdate);
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-xl font-semibold text-gray-900 mb-6">
        Account Details
      </h1>

      <div className="space-y-6">
        {/* Profile Avatar */}
        <div className="flex flex-col items-center gap-3">
          <div className="h-24 w-24 rounded-full bg-green-800 text-white flex items-center justify-center text-2xl font-bold shadow-lg">
            {profileData ? getInitials(profileData.fullName) : "HT"}
          </div>
          <div className="text-sm text-gray-500 text-center">
            Profile Avatar
          </div>
        </div>

        {/* Account Information */}
        <div className="space-y-4">
          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="h-10 rounded-lg px-3 bg-gray-50 border border-gray-200 flex items-center">
              <span className="text-gray-900">
                {profileData?.fullName || "Not provided"}
              </span>
            </div>
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="h-10 rounded-lg px-3 bg-gray-50 border border-gray-200 flex items-center">
              <span className="text-gray-900">
                {phone ? `+91 ${phone}` : "Not available"}
              </span>
            </div>
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700">
              Email Address
            </label>
            <div className="h-10 rounded-lg px-3 bg-gray-50 border border-gray-200 flex items-center">
              <span className="text-gray-900">
                {profileData?.email || "Not provided"}
              </span>
            </div>
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700">
              Date of Birth
            </label>
            <div className="h-10 rounded-lg px-3 bg-gray-50 border border-gray-200 flex items-center">
              <span className="text-gray-900">
                {profileData?.dob
                  ? formatDate(profileData.dob)
                  : "Not provided"}
              </span>
            </div>
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700">Age</label>
            <div className="h-10 rounded-lg px-3 bg-gray-50 border border-gray-200 flex items-center">
              <span className="text-gray-900">
                {profileData?.dob ? calculateAge(profileData.dob) : 24} years
              </span>
            </div>
          </div>

          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700">
              PAN Number
            </label>
            <div className="h-10 rounded-lg px-3 bg-gray-50 border border-gray-200 flex items-center">
              <span className="text-gray-900">BVFPT****M</span>
            </div>
            <span className="text-xs text-gray-500">
              PAN is masked for security
            </span>
          </div>
        </div>

        {/* Account Status */}
        <div className="border-t pt-4">
          <div className="grid gap-1">
            <label className="text-sm font-medium text-gray-700">
              Account Status
            </label>
            <div className="h-10 rounded-lg px-3 bg-green-50 border border-green-200 flex items-center">
              <span className="text-green-700 font-medium">Active</span>
            </div>
          </div>
        </div>

        {/* Member Since */}
        <div className="grid gap-1">
          <label className="text-sm font-medium text-gray-700">
            Member Since
          </label>
          <div className="h-10 rounded-lg px-3 bg-gray-50 border border-gray-200 flex items-center">
            <span className="text-gray-900">September 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}
