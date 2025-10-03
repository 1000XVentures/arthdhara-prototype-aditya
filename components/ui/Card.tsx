"use client";

import { type ReactNode } from "react";

export type CardProps = {
  title?: string;
  actions?: ReactNode;
  leftActions?: ReactNode;
  children: ReactNode;
  className?: string;
};

export default function Card({
  title,
  actions,
  leftActions,
  children,
  className,
}: CardProps) {
  return (
    <section
      className={["rounded-xl bg-surface border border-border", className]
        .filter(Boolean)
        .join(" ")}
    >
      {(title || actions || leftActions) && (
        <div className="flex items-center justify-between px-4 h-12 border-b border-border">
          <div className="flex items-center gap-2 min-w-0">
            {leftActions}
            {title && (
              <h3 className="text-sm font-semibold text-foreground truncate">
                {title}
              </h3>
            )}
          </div>
          {actions && (
            <div className="ml-2 flex items-center gap-2">{actions}</div>
          )}
        </div>
      )}
      <div className="p-4">{children}</div>
    </section>
  );
}
