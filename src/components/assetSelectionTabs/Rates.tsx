import React from "react";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";

interface RatesProps {
  selectedAsset?: {
    id: string;
    token: string;
    symbol: string;
    lastPrice: number;
    change24h: number;
    marketCap: string;
    icon: string;
    checked: boolean;
  } | null;
}

const Rates: React.FC<RatesProps> = ({ selectedAsset }) => {
  if (!selectedAsset) {
    return (
      <div className="p-6 text-center text-gray-500">
        <p>Select a token to view rate information</p>
      </div>
    );
  }

  // Mock data for the rates
  const ratesData = [
    { label: "Current utilization", value: "70.40%" },
    { label: "Current borrow APR", value: "9.40%" },
    { label: "Utilization threshold 1", value: "0.00%" },
    { label: "Borrow APR at 0.00% util.", value: "5.00%" },
    { label: "Utilization threshold 2", value: "80.00%" },
    { label: "Borrow APR at 80.00% util.", value: "10.00%" },
    { label: "Utilization threshold 3", value: "90.00%" },
    { label: "Borrow APR at 90.00% util.", value: "25.00%" },
    { label: "Utilization threshold 4", value: "100.00%" },
    { label: "Borrow APR at 100.00% util.", value: "300.00%" },
  ];

  // Chart data that matches the curve pattern in the image
  const chartData = [
    { utilization: 0, borrowAPR: 5.0 },
    { utilization: 5, borrowAPR: 5.2 },
    { utilization: 10, borrowAPR: 5.5 },
    { utilization: 15, borrowAPR: 5.8 },
    { utilization: 20, borrowAPR: 6.0 },
    { utilization: 25, borrowAPR: 6.2 },
    { utilization: 30, borrowAPR: 6.5 },
    { utilization: 35, borrowAPR: 6.8 },
    { utilization: 40, borrowAPR: 7.2 },
    { utilization: 45, borrowAPR: 7.8 },
    { utilization: 50, borrowAPR: 8.5 },
    { utilization: 55, borrowAPR: 8.2 },
    { utilization: 60, borrowAPR: 8.8 },
    { utilization: 65, borrowAPR: 8.5 },
    { utilization: 70, borrowAPR: 9.2 }, // Current position
    { utilization: 75, borrowAPR: 8.8 },
    { utilization: 80, borrowAPR: 10.0 }, // Threshold 2
    { utilization: 82, borrowAPR: 12.0 },
    { utilization: 84, borrowAPR: 15.0 },
    { utilization: 86, borrowAPR: 18.0 },
    { utilization: 88, borrowAPR: 22.0 },
    { utilization: 90, borrowAPR: 25.0 }, // Threshold 3
    { utilization: 92, borrowAPR: 35.0 },
    { utilization: 94, borrowAPR: 50.0 },
    { utilization: 96, borrowAPR: 80.0 },
    { utilization: 98, borrowAPR: 150.0 },
    { utilization: 100, borrowAPR: 300.0 }, // Threshold 4
  ];

  const chartConfig = {
    borrowAPR: {
      label: "Borrow APR (%)",
      color: "hsl(221, 83%, 53%)", // Blue color to match the image
    },
  } satisfies ChartConfig;

  return (
    <div className="p-6">
      {/* Chart Section */}
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-4">Borrow APR vs. Utilization</h3>

        {/* Chart Container */}
        <div className="h-80 bg-gray-50 rounded-lg p-4 w-full overflow-hidden">
          <ChartContainer config={chartConfig} className="w-full h-full">
            <LineChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 8,
                right: 8,
                top: 8,
                bottom: 8,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis
                dataKey="utilization"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 100]}
                ticks={[0, 25, 50, 75, 100]}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 300]}
                ticks={[0, 25, 100, 300]}
                width={60}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => `Utilization: ${value}%`}
                    formatter={(value) => [`${value}%`, "Borrow APR"]}
                  />
                }
              />
              <Line
                dataKey="borrowAPR"
                type="monotone"
                stroke="var(--color-borrowAPR)"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 4,
                  fill: "var(--color-borrowAPR)",
                }}
              />
            </LineChart>
          </ChartContainer>
        </div>

        {/* Current position indicator */}
        <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm font-medium">
              Current Position: 70.40% utilization, 9.40% borrow APR
            </span>
          </div>
        </div>
      </div>

      {/* Rates Data */}
      <div className="space-y-3">
        {ratesData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
          >
            <span className="text-sm text-gray-700">{item.label}</span>
            <span className="text-sm font-medium text-gray-900">
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rates;
