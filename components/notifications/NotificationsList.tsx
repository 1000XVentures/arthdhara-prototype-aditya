"use client";

import Card from "@/components/ui/Card";

export type NotificationItem = {
  id: string;
  title: string;
  message: string;
  time: string;
  read?: boolean;
};

type NotificationsListProps = {
  items?: NotificationItem[];
};

const DEFAULT_NOTIFICATIONS: NotificationItem[] = [
  {
    id: "n1",
    title: "KYC verification complete",
    message: "Your account is verified. You can now access all features.",
    time: "2h ago",
    read: false,
  },
  {
    id: "n2",
    title: "New article in Hub",
    message: "Understanding Loans Against Mutual Funds – quick guide.",
    time: "Yesterday",
    read: true,
  },
  {
    id: "n3",
    title: "Offer: Lower interest rate",
    message: "Limited-time promotional rate available for eligible users.",
    time: "2 days ago",
    read: true,
  },
];

export default function NotificationsList({
  items = DEFAULT_NOTIFICATIONS,
}: NotificationsListProps) {
  return (
    <div>
      <div className="flex items-center justify-between px-4 h-12 border-b border-border">
        <h3 className="text-sm font-semibold text-foreground">Notifications</h3>
      </div>
      <ul className="divide-y divide-border">
        {items.map((item) => (
          <li key={item.id} className="py-3 px-3">
            <div className="flex items-start gap-3">
              <div className="relative mt-1">
                <span
                  className={[
                    "inline-block size-2 rounded-full",
                    item.read ? "bg-foreground/30" : "bg-primary",
                  ].join(" ")}
                  aria-hidden
                />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-foreground truncate">
                    {item.title}
                  </p>
                  <span className="shrink-0 text-xs text-foreground/60">
                    {item.time}
                  </span>
                </div>
                <p className="mt-0.5 text-sm text-foreground/80">
                  {item.message}
                </p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
