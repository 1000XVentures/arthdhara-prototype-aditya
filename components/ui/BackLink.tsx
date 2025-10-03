"use client";

import Link from "next/link";

export default function BackLink({
  href = "/profile",
  label = "Back",
}: {
  href?: string;
  label?: string;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary hover:bg-primary-light/70 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="h-5 w-5"
        aria-hidden
      >
        <path
          fillRule="evenodd"
          d="M12.79 5.23a.75.75 0 0 1 0 1.06L9.08 10l3.72 3.71a.75.75 0 1 1-1.06 1.06L7.49 10.53a1.12 1.12 0 0 1 0-1.59l4.25-4.25a.75.75 0 0 1 1.06 0Z"
          clipRule="evenodd"
        />
      </svg>
    </Link>
  );
}
