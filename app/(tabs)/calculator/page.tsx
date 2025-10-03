"use client";

import { useMemo, useState, useCallback } from "react";
import CostComparisonChart from "@/components/ui/CostComparisonChart";

function clamp(num: number, min: number, max: number) {
  return Math.min(Math.max(num, min), max);
}

function formatCurrencyINR(amount: number) {
  return amount.toLocaleString("en-IN");
}

function formatLakh(value: number): string {
  const lakhValue = value / 100000;
  const rounded = Math.round(lakhValue * 100) / 100;
  return `${rounded.toLocaleString("en-IN", { maximumFractionDigits: 2 })}`;
}

function computeEmiInterestTotal(
  principal: number,
  annualRatePercent: number,
  tenureYears: number
): number {
  if (principal <= 0 || annualRatePercent <= 0 || tenureYears <= 0) return 0;
  const monthlyRate = annualRatePercent / 12 / 100;
  const n = Math.round(tenureYears * 12);
  const numerator = principal * monthlyRate * Math.pow(1 + monthlyRate, n);
  const denominator = Math.pow(1 + monthlyRate, n) - 1;
  if (denominator === 0) return 0;
  const emi = numerator / denominator;
  const totalPaid = emi * n;
  const interest = Math.max(0, totalPaid - principal);
  return Math.round(interest);
}

function computeMfRedemptionCost(
  principal: number,
  cagrPercent: number,
  tenureYears: number
): number {
  if (principal <= 0 || cagrPercent <= 0 || tenureYears <= 0) return 0;
  const fv = principal * Math.pow(1 + cagrPercent / 100, tenureYears);
  const growth = Math.max(0, fv - principal);
  return Math.round(growth);
}

export default function CalculatorPage() {
  // Inputs
  const [creditAmount, setCreditAmount] = useState<number>(6250000);
  const [tenureYears, setTenureYears] = useState<number>(2);

  // Rates/assumptions
  const ourRate = 9.99;
  const personalLoanRate = 18;
  const mfCagr = 12;

  // Derived costs and savings
  const { ourCost, plCost, mfCost, savingsVsPL, savingsVsMF } = useMemo(() => {
    const our = computeEmiInterestTotal(creditAmount, ourRate, tenureYears);
    const pl = computeEmiInterestTotal(
      creditAmount,
      personalLoanRate,
      tenureYears
    );
    const mf = computeMfRedemptionCost(creditAmount, mfCagr, tenureYears);
    return {
      ourCost: our,
      plCost: pl,
      mfCost: mf,
      savingsVsPL: Math.max(0, pl - our),
      savingsVsMF: Math.max(0, mf - our),
    };
  }, [creditAmount, tenureYears]);

  const onAmountInput = useCallback((val: string) => {
    const raw = Number(val.replace(/[^0-9]/g, "")) || 0;
    setCreditAmount(clamp(raw, 25000, 10000000));
  }, []);

  return (
    <div className="mx-auto space-y-6 px-[2px] pb-10">
      {/* Headline */}
      <div className="pt-2 text-center">
        <h1 className="text-xl font-semibold leading-snug md:text-2xl">
          Save{" "}
          <span className="text-[#c29329] underline decoration-[#c29329] decoration-4 underline-offset-4">
            ₹{formatLakh(savingsVsPL)}
          </span>{" "}
          Lakh in interest with
          <br /> Arthdhara Smart Credit!
        </h1>
      </div>

      {/* Chart */}
      <CostComparisonChart
        amount={creditAmount}
        tenureYears={tenureYears}
        ourRate={ourRate}
        personalLoanRate={personalLoanRate}
        mfCagr={mfCagr}
      />

      {/* Inputs */}
      <section className="rounded-2xl bg-[#f4d68f]/20 p-4">
        {/* Credit Amount */}
        <div className="mb-6 grid gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="amount" className="text-sm font-medium">
              Credit Amount:
            </label>
            <div className="relative">
              <span className="pointer-events-none absolute left-2 top-1/2 -translate-y-1/2 text-gray-500">
                ₹
              </span>
              <input
                id="amount"
                inputMode="numeric"
                className="h-9 w-40 rounded-md bg-gray-50 pl-6 pr-2 text-right text-sm focus:outline-none"
                value={` ${formatCurrencyINR(creditAmount)}`}
                onChange={(e) => onAmountInput(e.target.value)}
              />
            </div>
          </div>
          <input
            type="range"
            min={25000}
            max={10000000}
            step={5000}
            value={creditAmount}
            onChange={(e) => setCreditAmount(Number(e.target.value))}
            className="range w-full accent-[#c29329]"
          />
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>₹25,000</span>
            <span>₹1 Crore</span>
          </div>
        </div>

        {/* Tenure */}
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <label htmlFor="tenure" className="text-sm font-medium">
              Tenure:
            </label>
            <div className="h-9 w-10 rounded-md bg-gray-50 text-center text-sm leading-9">
              {tenureYears}
            </div>
          </div>
          <input
            id="tenure"
            type="range"
            min={1}
            max={5}
            step={1}
            value={tenureYears}
            onChange={(e) => setTenureYears(Number(e.target.value))}
            className="range w-full accent-[#c29329]"
          />
          <div className="flex items-center justify-between text-xs text-gray-500">
            <span>1 year</span>
            <span>5 years</span>
          </div>
        </div>
      </section>

      {/* Savings */}
      <div className="space-y-3">
        <div className="rounded-xl bg-[#f4d68f]/20 p-3 text-sm">
          <span className="text-gray-700">Savings over Personal Loan = </span>
          <span className="font-semibold text-[#15803d] text-lg">
            ₹{formatLakh(savingsVsPL)} Lakh
          </span>
        </div>
        <div className="rounded-xl bg-[#f4d68f]/20 p-3 text-sm">
          <span className="text-gray-700">Savings over MF Redemption = </span>
          <span className="font-semibold text-[#15803d] text-lg">
            ₹{formatLakh(savingsVsMF)} Lakh
          </span>
        </div>
      </div>

      {/* CTA */}
      <button className="mx-auto block w-full rounded-xl bg-[#15803d] py-3 text-white font-medium shadow-md hover:bg-opacity-90 transition-all duration-200">
        Check Eligibility in 10s
      </button>

      <p className="text-center text-xs text-gray-500">
        In last 24 hrs <span className="font-semibold">5,228 approx.</span>{" "}
        people opted in for smart credit
      </p>
    </div>
  );
}
