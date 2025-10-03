"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Calculator, BookOpen, User } from "lucide-react";

type Tab = {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
};

const TABS: Tab[] = [
  { href: "/home", label: "Home", Icon: Home },
  { href: "/calculator", label: "Calculator", Icon: Calculator },
  { href: "/hub", label: "Hub", Icon: BookOpen },
  { href: "/profile", label: "Profile", Icon: User },
];

export default function BottomNav() {
  const pathname = usePathname();
  return (
    <nav className="bg-white">
      <ul className="max-w-[414px] mx-auto px-4 grid grid-cols-4 border-t border-x border-gray-200">
        {TABS.map((tab) => {
          const isActive = pathname?.startsWith(tab.href);
          return (
            <li key={tab.href}>
              <Link
                href={tab.href}
                className={`flex flex-col items-center justify-center gap-1 py-2 text-xs ${
                  isActive
                    ? "text-primary"
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                <tab.Icon className="size-5" />
                <span>{tab.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
