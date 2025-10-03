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
import { Bar } from "react-chartjs-2";
import ChartDataLabels from "chartjs-plugin-datalabels";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ChartDataLabels
);

interface InterestRateChartProps {
  ourProductRate?: number;
}

export default function InterestRateChart({
  ourProductRate = 10.5,
}: InterestRateChartProps) {
  const data = {
    // Single-line labels; percentages are drawn with a custom plugin beneath the axis
    labels: ["Credit Card", "Personal Loan", "Our Product"],
    datasets: [
      {
        label: "Interest Rate (%)",
        data: [36, 18, ourProductRate],
        backgroundColor: [
          "#f4d68f", // Credit Card - light beige
          "#f4d68f", // Personal Loan - light beige
          "#c29329", // Our Product - golden
        ],
        borderColor: ["#f4d68f", "#f4d68f", "#deb853"],
        borderWidth: 0,
        borderRadius: 6,
        borderSkipped: false,
        // Make bars a bit thicker
        barPercentage: 0.55,
        categoryPercentage: 0.65,
        maxBarThickness: 32,
        // Ensure no labels are drawn on bars
        datalabels: {
          display: false,
        },
      },
    ],
  };

  // Draw percentages directly beneath category labels
  const belowLabelsPlugin = {
    id: "below-labels",
    afterDraw: (chart: any) => {
      const {
        ctx,
        scales: { x },
      } = chart;
      if (!x) return;
      const labelValues = ["36% p.a.", "18% p.a.", `${ourProductRate}% p.a.`];
      ctx.save();
      ctx.textAlign = "center";
      ctx.textBaseline = "top";
      for (let i = 0; i < labelValues.length; i += 1) {
        const xPos = x.getPixelForTick(i);
        const yPos = x.bottom + 6;
        const isOurProduct = i === 2;
        ctx.fillStyle = isOurProduct ? "#1baf5d" : "#6b7280";
        ctx.font = `${isOurProduct ? 700 : 500} ${isOurProduct ? 16 : 12}px Arial`;
        ctx.fillText(labelValues[i], xPos, yPos);
      }
      ctx.restore();
    },
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (context: any) {
            return `${context.parsed.y}% p.a.`;
          },
        },
      },
      // Disable bar data labels; values are drawn beneath the axis instead
      datalabels: {
        display: false,
      },
    },
    // Extra space so our custom below-axis labels are always visible
    layout: {
      padding: {
        bottom: 36,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: (ctx: any) => {
            const isOurProduct = ctx.index === 2;
            return {
              size: 12,
              weight: isOurProduct ? 700 : 400,
            };
          },
          color: (ctx: any) => (ctx.index === 2 ? "#c29329" : "#6b7280"),
          padding: 8,
          maxRotation: 0,
          autoSkip: false,
        },
      },
      y: {
        beginAtZero: true,
        max: 40,
        grid: {
          display: false,
          drawBorder: false,
        },
        ticks: {
          font: {
            size: 12,
          },
          color: "#6b7280",
          stepSize: 10,
        },
      },
    },
    elements: {
      bar: {
        borderRadius: 8,
      },
    },
  };

  return (
    <div className="w-full">
      <div className="rounded-2xl border border-gray-200 bg-white p-6">
        <div className="mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            Loans starting at just{" "}
            <span className="text-[#c29329]">{ourProductRate}% interest</span>
          </h3>
        </div>

        <div className="h-64 w-full">
          <Bar data={data} options={options} plugins={[belowLabelsPlugin]} />
        </div>
      </div>
    </div>
  );
}
