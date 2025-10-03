"use client";

import Link from "next/link";
import { ReactNode } from "react";

export type LinkRowProps = {
  href: string;
  label: string;
  subtitle?: string;
  icon?: ReactNode;
  showArrow?: boolean;
};

export default function LinkRow({
  href,
  label,
  subtitle,
  icon,
  showArrow = true,
}: LinkRowProps) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 group"
    >
      <div className="flex items-center gap-3 flex-1 min-w-0">
        {icon && <div className="flex-shrink-0">{icon}</div>}
        <div className="min-w-0 flex-1">
          <div className="text-base font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
            {label}
          </div>
          {subtitle && (
            <div className="text-sm text-gray-500 mt-0.5">{subtitle}</div>
          )}
        </div>
      </div>
      {showArrow && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors"
          aria-hidden
        >
          <path
            fillRule="evenodd"
            d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </Link>
  );
}
