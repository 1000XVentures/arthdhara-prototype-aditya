"use client";

import { useState } from "react";
import Card from "@/components/ui/Card";
import BackLink from "@/components/ui/BackLink";

type Props = {
  showBack?: boolean;
  backHref?: string;
};

export type Repayment = {
  date: string;
  amount: number;
  status: "Paid" | "Missed" | "Upcoming";
};

export type Loan = {
  id: number | string;
  amount: number;
  interest: number; // annual percent
  status: "Active" | "Closed" | "Overdue";
  nextPaymentDate?: string;
  repaymentHistory: Repayment[];
};

const mockLoans: Loan[] = [
  {
    id: 1,
    amount: 200000,
    interest: 12.5,
    status: "Active",
    nextPaymentDate: "2025-10-10",
    repaymentHistory: [
      { date: "2025-08-10", amount: 18000, status: "Paid" },
      { date: "2025-09-10", amount: 18000, status: "Paid" },
      { date: "2025-10-10", amount: 18000, status: "Upcoming" },
    ],
  },
  {
    id: 2,
    amount: 120000,
    interest: 13.25,
    status: "Closed",
    repaymentHistory: [
      { date: "2024-05-10", amount: 11000, status: "Paid" },
      { date: "2024-06-10", amount: 11000, status: "Paid" },
      { date: "2024-07-10", amount: 11000, status: "Paid" },
    ],
  },
];

export default function LoanHistoryCard({
  showBack,
  backHref = "/profile",
}: Props) {
  const [openHistory, setOpenHistory] = useState<
    Record<string | number, boolean>
  >({});

  return (
    <Card
      title="Loan History"
      leftActions={showBack ? <BackLink href={backHref} /> : undefined}
    >
      <div className="grid gap-3">
        {mockLoans.map((loan) => {
          const isOpen = !!openHistory[loan.id];
          return (
            <div
              key={loan.id}
              className="rounded-lg p-3 bg-surface border border-border grid gap-2"
            >
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-sm">
                <div className="flex justify-between sm:block">
                  <span className="text-foreground/70">Amount</span>
                  <span className="font-semibold">
                    ₹ {loan.amount.toLocaleString("en-IN")}
                  </span>
                </div>
                <div className="flex justify-between sm:block">
                  <span className="text-foreground/70">Interest</span>
                  <span className="font-semibold">{loan.interest}% p.a.</span>
                </div>
                <div className="flex justify-between sm:block">
                  <span className="text-foreground/70">Payment date</span>
                  <span className="font-semibold">
                    {loan.nextPaymentDate || "—"}
                  </span>
                </div>
                <div className="flex justify-between sm:block">
                  <span className="text-foreground/70">Status</span>
                  <span className="font-semibold">{loan.status}</span>
                </div>
              </div>

              <div className="flex justify-end">
                <button
                  className="text-xs font-medium text-secondary hover:underline"
                  onClick={() =>
                    setOpenHistory((prev) => ({ ...prev, [loan.id]: !isOpen }))
                  }
                >
                  {isOpen ? "Hide repayment history" : "Show repayment history"}
                </button>
              </div>

              {isOpen && (
                <div className="grid gap-1">
                  <div className="text-xs text-foreground/70">
                    Repayment history
                  </div>
                  <div className="grid gap-1">
                    {loan.repaymentHistory.map((r, idx) => (
                      <div
                        key={idx}
                        className="flex items-center justify-between text-sm border border-border rounded-md px-2 py-1"
                      >
                        <span className="text-foreground/80">{r.date}</span>
                        <span className="font-medium">
                          ₹ {r.amount.toLocaleString("en-IN")}
                        </span>
                        <span
                          className={
                            r.status === "Paid"
                              ? "text-green-600"
                              : r.status === "Upcoming"
                                ? "text-warning"
                                : "text-error"
                          }
                        >
                          {r.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </Card>
  );
}
