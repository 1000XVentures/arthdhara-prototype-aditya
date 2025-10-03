"use client";

import { useEffect, useMemo, useState } from "react";
import { useAuth } from "@/contexts/AuthContext";

type ProfileData = {
  fullName: string;
  dob: string; // ISO date string YYYY-MM-DD
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

function saveProfile(data: ProfileData) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
}

function validateEmail(email: string) {
  if (!email) return false;
  return /.+@.+\..+/.test(email);
}

export default function AccountEditForm() {
  const { phone } = useAuth();

  const [fullName, setFullName] = useState("");
  const [dob, setDob] = useState("");
  const [email, setEmail] = useState("");
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    const existing = loadProfile();
    if (existing) {
      setFullName(existing.fullName || "");
      setDob(existing.dob || "");
      setEmail(existing.email || "");
    }
  }, []);

  useEffect(() => {
    if (saved) {
      const timer = setTimeout(() => setSaved(false), 1800);
      return () => clearTimeout(timer);
    }
  }, [saved]);

  const avatarLetters = useMemo(() => {
    const name = (fullName || "A").trim();
    if (name.length === 0) return "A";

    const words = name.split(/\s+/).filter((word) => word.length > 0);
    if (words.length === 1) {
      return words[0].charAt(0).toUpperCase();
    } else {
      return (
        words[0].charAt(0) + words[words.length - 1].charAt(0)
      ).toUpperCase();
    }
  }, [fullName]);

  const isValid = useMemo(() => {
    const validName = fullName.trim().length >= 2;
    const validDob = !!dob; // allow any selected date
    const validEmail = validateEmail(email);
    return validName && validDob && validEmail;
  }, [fullName, dob, email]);

  function onSave(e: React.FormEvent) {
    e.preventDefault();
    const data: ProfileData = {
      fullName: fullName.trim(),
      dob,
      email: email.trim(),
      avatarLetter: avatarLetters,
    };
    saveProfile(data);
    setSaved(true);

    // Dispatch custom event to notify profile page of data change
    window.dispatchEvent(new CustomEvent("profileUpdated"));
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h1 className="text-xl font-semibold text-gray-900 mb-6">
        Account Details
      </h1>
      <form className="grid gap-3" onSubmit={onSave}>
        <div className="flex flex-col items-center gap-3">
          <div className="h-20 w-20 rounded-full bg-green-800 text-white flex items-center justify-center text-xl font-bold">
            {avatarLetters}
          </div>
          <div className="text-sm text-foreground/70">
            Default avatar (auto from name)
          </div>
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-medium">Full name</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name"
            className="h-10 rounded-lg px-3 bg-gray-100 border border-border"
            autoComplete="name"
          />
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-medium">Date of birth</label>
          <input
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            type="date"
            className="h-10 rounded-lg px-3 bg-gray-100 border border-border"
          />
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-medium">Email</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            type="email"
            className="h-10 rounded-lg px-3 bg-gray-100 border border-border"
            autoComplete="email"
          />
          {!email || validateEmail(email) ? null : (
            <span className="text-xs text-red-600">Enter a valid email</span>
          )}
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-medium">Phone number</label>
          <input
            value={phone ? `+91 ${phone}` : "Not available"}
            readOnly
            disabled
            className="h-10 rounded-lg px-3 bg-gray-100 border border-gray-300 text-foreground/60"
          />
          <span className="text-xs text-foreground/60">
            Number is non-editable
          </span>
        </div>

        <div className="grid gap-1">
          <label className="text-sm font-medium">PAN Number</label>
          <input
            value="BVFPT****M"
            readOnly
            disabled
            className="h-10 rounded-lg px-3 bg-gray-100 border border-gray-300 text-foreground/60"
          />
          <span className="text-xs text-foreground/60">
            PAN is masked for security
          </span>
        </div>

        <button
          type="submit"
          className="h-10 rounded-xl bg-[#15803d] text-white font-semibold disabled:opacity-50"
          disabled={!isValid}
        >
          Save changes
        </button>

        {saved && (
          <div className="text-sm text-green-600">Saved successfully</div>
        )}
      </form>
    </div>
  );
}
