"use client";

import { useState, type ReactNode } from "react";

function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export type AccordionCardProps = {
  id?: string;
  title: string;
  defaultOpen?: boolean;
  rightContent?: ReactNode;
  children: ReactNode;
  className?: string;
  variant?: "card" | "plain";
};

export default function AccordionCard({
  id,
  title,
  defaultOpen = false,
  rightContent,
  children,
  className,
  variant = "card",
}: AccordionCardProps) {
  const [isOpen, setIsOpen] = useState<boolean>(defaultOpen);

  return (
    <section
      id={id}
      className={cn(
        variant === "card"
          ? "rounded-xl bg-surface border border-border overflow-hidden"
          : "bg-transparent overflow-hidden",
        className
      )}
    >
      <header className="flex items-center">
        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls={id ? `${id}-content` : undefined}
          onClick={() => setIsOpen((v) => !v)}
          className={cn(
            "w-full flex items-center gap-3 text-left cursor-pointer",
            variant === "card" ? "px-4 h-12" : "px-0 py-3",
            "focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          )}
        >
          <h3
            className={cn(
              "text-sm text-foreground flex-1",
              variant === "card" ? "font-semibold" : "font-medium"
            )}
          >
            {title}
          </h3>
          {rightContent && <div className="px-1">{rightContent}</div>}
          <span
            aria-hidden
            className={cn(
              "inline-flex h-5 w-5 items-center justify-center rounded-md text-[#c29329]",
              "transition-transform duration-200",
              isOpen ? "rotate-90" : "rotate-0",
              variant === "card" ? "order-none" : "order-last"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path
                fillRule="evenodd"
                d="M7.21 14.77a.75.75 0 0 1 0-1.06L10.92 10 7.2 6.29a.75.75 0 1 1 1.06-1.06l4.25 4.25c.44.44.44 1.15 0 1.59l-4.25 4.25a.75.75 0 0 1-1.06 0Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </button>
      </header>

      <div
        id={id ? `${id}-content` : undefined}
        className={cn(
          "grid transition-[grid-template-rows] duration-200",
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div
          className={cn(
            "overflow-hidden",
            isOpen
              ? variant === "card"
                ? "border-t border-border"
                : ""
              : undefined
          )}
        >
          <div className={cn(variant === "card" ? "p-4" : "pt-1 pb-3")}>
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
