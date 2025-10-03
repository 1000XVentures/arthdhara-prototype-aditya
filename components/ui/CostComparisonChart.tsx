"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { useMemo } from "react";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

export type CostComparisonChartProps = {
  amount: number;
  tenureYears: number;
  ourRate?: number; // % p.a.
  personalLoanRate?: number; // % p.a.
  mfCagr?: number; // % p.a.
};

function formatLakh(value: number): string {
  const lakhValue = value / 100000;
  if (!isFinite(lakhValue) || lakhValue <= 0) return "₹0L";
  // For values less than 1 lakh, show 2 decimal places
  const rounded =
    lakhValue < 1
      ? Math.round(lakhValue * 100) / 100
      : Math.round(lakhValue * 10) / 10;
  return `₹${rounded.toLocaleString("en-IN", {
    minimumFractionDigits: lakhValue < 1 ? 2 : 1,
    maximumFractionDigits: lakhValue < 1 ? 2 : 1,
  })}L`;
}

function computeEmiInterestTotal(
  principal: number,
  annualRatePercent: number,
  tenureYears: number
): number {
  if (principal <= 0 || annualRatePercent <= 0 || tenureYears <= 0) return 0;

  // For 1 year tenure, use simple interest calculation
  if (tenureYears === 1) {
    return Math.round(principal * (annualRatePercent / 100));
  }

  // For longer tenures, use EMI calculation
  const monthlyRate = annualRatePercent / 12 / 100;
  const n = Math.round(tenureYears * 12);
  const emi =
    (principal * monthlyRate * Math.pow(1 + monthlyRate, n)) /
    (Math.pow(1 + monthlyRate, n) - 1);
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
  // For 1 year, use simple interest like other calculations
  if (tenureYears === 1) {
    return Math.round(principal * (cagrPercent / 100));
  }
  const fv = principal * Math.pow(1 + cagrPercent / 100, tenureYears);
  const growth = Math.max(0, fv - principal);
  return Math.round(growth);
}

export default function CostComparisonChart({
  amount,
  tenureYears,
  ourRate = 9.99,
  personalLoanRate = 18,
  mfCagr = 12,
}: CostComparisonChartProps) {
  const { ourCost, plCost, mfCost, maxCost } = useMemo(() => {
    // Calculate total interest costs using standard EMI formula for all
    const our = computeEmiInterestTotal(amount, ourRate, tenureYears);
    const pl = computeEmiInterestTotal(amount, personalLoanRate, tenureYears);
    const mf = computeEmiInterestTotal(amount, mfCagr, tenureYears);
    const max = Math.max(our, pl, mf) || 1;

    return {
      ourCost: our,
      plCost: pl,
      mfCost: mf,
      maxCost: max,
    };
  }, [amount, tenureYears, ourRate, personalLoanRate, mfCagr]);

  const data = useMemo(() => {
    return {
      labels: [
        ["Personal Loan", "Cost", "(at 18% p.a.)"],
        ["MF Redemption", "Cost", "(at 12% CAGR)"],
        ["Arthdhara Credit", "Cost", "(at 9.99% p.a.)"],
      ],
      datasets: [
        {
          label: "Cost",
          data: [plCost, mfCost, ourCost],
          backgroundColor: ["#15803d", "#22c55e", "#c29329"],
          borderRadius: 8,
          borderSkipped: false,
          maxBarThickness: 60,
          barPercentage: 0.6, // Controls bar width relative to available space
          categoryPercentage: 0.8, // Controls spacing between bar groups
        },
      ],
    };
  }, [ourCost, mfCost, plCost]);

  // Plugin to draw multiline labels
  const multilineLabelsPlugin = {
    id: "multilineLabels",
    afterDraw: (chart: any) => {
      const {
        ctx,
        scales: { x },
      } = chart;
      if (!x) return;

      ctx.save();
      ctx.textAlign = "center";

      // For each bar/label
      x.ticks.forEach((tick: any, i: number) => {
        const label = data.labels[i];
        if (!Array.isArray(label)) return;

        const xPos = x.getPixelForTick(i);
        let yPos = x.bottom + 4;

        // Draw product name (first line)
        ctx.font = "bold 12px sans-serif";
        ctx.fillStyle = i === 0 ? "#15803d" : i === 1 ? "#22c55e" : "#c29329";
        ctx.fillText(label[0], xPos, yPos);

        // Draw rate info line
        yPos += 16;
        ctx.font = "10px sans-serif";
        ctx.fillStyle = "#6b7280";
        ctx.fillText(label[2], xPos, yPos);
      });

      ctx.restore();
    },
  };

  const options = useMemo(() => {
    return {
      responsive: true,
      maintainAspectRatio: false,
      layout: {
        padding: {
          bottom: 25,
        },
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx: any) =>
              `Cost: ₹${(ctx.parsed.y as number).toLocaleString("en-IN")}`,
          },
        },
        datalabels: {
          color: "#ffffff",
          anchor: "center" as const,
          align: "center" as const,
          formatter: (val: number) => formatLakh(val),
          font: {
            weight: 700,
            size: 14,
          },
          padding: {
            top: 0,
            bottom: 0,
          },
        },
      },
      scales: {
        x: {
          grid: { display: false, drawBorder: false },
          ticks: {
            display: false, // Hide the default x-axis labels
          },
        },
        y: {
          beginAtZero: true,
          suggestedMax: Math.ceil(maxCost * 1.2),
          display: true, // Show the axis but hide numbers
          grid: {
            display: true,
            color: "#e5e7eb",
            drawBorder: false,
            lineWidth: 1,
            drawTicks: false,
            borderDash: [3, 3], // Create dotted/dashed line effect
          },
          ticks: {
            display: false, // Hide only the numbers
          },
        },
      },
      elements: {
        bar: { borderRadius: 10 },
      },
    } as const;
  }, [maxCost]);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white px-2 py-2 pb-4">
      <div className="h-[260px] w-full md:h-[320px] lg:h-[380px]">
        <Bar
          data={data as any}
          options={options as any}
          plugins={[multilineLabelsPlugin]}
        />
      </div>
    </div>
  );
}
