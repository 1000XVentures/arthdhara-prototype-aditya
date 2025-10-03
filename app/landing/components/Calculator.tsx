"use client";

import { useMemo, useState } from "react";

function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

function formatLakh(amount: number): string {
  return (
    new Intl.NumberFormat("en-IN", { maximumFractionDigits: 2 }).format(
      amount / 100000
    ) + " Lakh"
  );
}

function calculateInterests(
  amount: number,
  years: number,
  lamfRate = 10
): {
  lamfInterest: number;
  personalInterest: number;
  savings: number;
} {
  const months = years * 12;
  const lamfInterest = (amount * lamfRate * years) / 100; // Interest-only EMI

  const personalAnnualRate = 18; // baseline personal loan rate
  const r = personalAnnualRate / 12 / 100; // monthly rate
  const n = months;

  const emi =
    (amount * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  const totalPaid = emi * n;
  const personalInterest = totalPaid - amount;

  const savings = Math.max(personalInterest - lamfInterest, 0);
  return { lamfInterest, personalInterest, savings };
}

export default function CalculatorSection() {
  const [amount, setAmount] = useState<number>(500000); // 5 lakh
  const [years, setYears] = useState<number>(3);

  const { lamfInterest, personalInterest, savings } = useMemo(
    () => calculateInterests(amount, years),
    [amount, years]
  );

  const maxInterest = Math.max(lamfInterest, personalInterest, savings, 1);
  const scale = (val: number) =>
    Math.max(12, Math.round((val / maxInterest) * 180));

  return (
    <section className="bg-[#004225] py-12 text-white">
      <div className="mx-auto w-full max-w-[1100px] px-5">
        {/* Heading */}
        <h3 className="text-center text-[40px] sm:text-[50px] font-semibold mb-2">
          Save{" "}
          <span className="underline decoration-[3px] decoration-[#d4af37]">
            {formatINR(savings)}
          </span>{" "}
          in interest with
        </h3>
        <p className="text-center text-[40px] sm:text-[50px] font-semibold mb-8">
          ArthDhara Smart Credit!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Controls */}
          <div>
            {/* Amount */}
            <label className="block text-[23px] text-[#d4af37] mb-1">
              Credit Amount:
            </label>
            <div className="flex items-center gap-2">
              <input
                type="range"
                min={25000}
                max={10000000}
                step={25000}
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value) || 0)}
                className="w-full accent-[#d4af37]"
              />
              <span className="text-[23px] bg-[#0a5031] border border-[#d4af37] rounded-lg px-2 py-1 text-white">
                {formatINR(amount)}
              </span>
            </div>
            <div className="flex justify-between text-[20px] text-[#d4af37] mt-1">
              <span>₹25,000</span>
              <span>₹1 Crore</span>
            </div>

            {/* Tenure */}
            <div className="mt-6">
              <label className="block text-[23px] text-[#d4af37] mb-1">
                Tenure:
              </label>
              <div className="flex items-center gap-2">
                <input
                  type="range"
                  min={1}
                  max={5}
                  step={1}
                  value={years}
                  onChange={(e) => setYears(parseInt(e.target.value) || 1)}
                  className="w-full accent-[#d4af37]"
                />
                <span className="text-[23px] bg-[#0a5031] border border-[#d4af37] rounded-lg px-2 py-1 text-white">
                  {years} {years === 1 ? "year" : "years"}
                </span>
              </div>
              <div className="flex justify-between text-[20px] text-[#d4af37] mt-1">
                <span>1 year</span>
                <span>5 years</span>
              </div>
            </div>

            <div className="mt-4 text-[23px] text-[#d4af37] bg-[#0a5031] border border-[#d4af37] rounded-lg p-3">
              Savings over Personal Loan ={" "}
              <span className="font-semibold">{formatLakh(savings)}</span>
            </div>
          </div>

          {/* Chart */}
          <div className="relative">
            <div className="h-[220px] border-l border-b border-[#d4af37] relative px-6 pt-4">
              <div className="absolute left-0 right-0 top-[25%] border-t border-dashed border-[#d4af37]" />
              <div className="absolute left-0 right-0 top-[55%] border-t border-dashed border-[#d4af37]" />

              <div className="flex items-end gap-10 h-full">
                {/* LAMF */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-14 bg-[#23a046] rounded-md text-white text-[10px] flex items-end justify-center pb-1"
                    style={{ height: scale(lamfInterest) }}
                    aria-label={`LAMF interest ${formatINR(lamfInterest)}`}
                  >
                    {formatLakh(lamfInterest)}
                  </div>
                  <span className="text-xs text-[#d4af37]">LAMF</span>
                </div>

                {/* Personal */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-14 bg-[#8a3933] rounded-md text-white text-[10px] flex items-end justify-center pb-1"
                    style={{ height: scale(personalInterest) }}
                    aria-label={`Personal loan interest ${formatINR(personalInterest)}`}
                  >
                    {formatLakh(personalInterest)}
                  </div>
                  <span className="text-xs text-[#d4af37]">Personal</span>
                </div>

                {/* Savings */}
                <div className="flex flex-col items-center gap-2">
                  <div
                    className="w-14 bg-[#d4af37] rounded-md text-[#1a1a1a] text-[10px] flex items-end justify-center pb-1"
                    style={{ height: scale(savings) }}
                    aria-label={`Savings ${formatINR(savings)}`}
                  >
                    {formatLakh(savings)}
                  </div>
                  <span className="text-xs text-[#d4af37]">Savings</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
