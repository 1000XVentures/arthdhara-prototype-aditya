"use client";

import { Search } from "lucide-react";
import { ChangeEvent } from "react";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  ariaLabel?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search",
  className = "",
  ariaLabel = "Search",
}: SearchBarProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className={`relative ${className}`}>
      <input
        value={value}
        onChange={handleChange}
        aria-label={ariaLabel}
        placeholder={placeholder}
        className="w-full h-11 rounded-xl pl-11 pr-4 bg-gray-100 border border-border/60 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition"
      />
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-foreground/60" />
    </div>
  );
}
