import React, { useState } from "react";
import { Line, LineChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "../ui/chart";
import { Button } from "../ui/button";

interface AdvancedProps {
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

const Advanced: React.FC<AdvancedProps> = ({ selectedAsset }) => {
  const [activePeriod, setActivePeriod] = useState("1W");

  if (!selectedAsset) {
    return (
      <div className="p-6 text-center text-gray-500">
        <p>Select a token to view advanced details</p>
      </div>
    );
  }

  // Mock financial data
  const financialData = [
    { label: "Deposits", value: "63,338,859 USDC" },
    { label: "Deposit limit", value: "90,000,000 USDC" },
    { label: "Deposits (USD)", value: "$63,327,701" },
    { label: "Deposit limit (USD)", value: "$91,000,000" },
    { label: "Borrows", value: "44,589,144 USDC" },
    { label: "Borrow limit", value: "50,000,000 USDC" },
    { label: "Borrows (USD)", value: "$44,581,289" },
    { label: "Borrow limit (USD)", value: "$51,000,000" },
    { label: "Open LTV", value: "77%" },
    { label: "Close LTV", value: "80%" },
    { label: "Max close LTV", value: "80%" },
    { label: "Borrow weight (BW)", value: "" },
    { label: "Open attributed borrow limit (USD)", value: "$0.00" },
    { label: "Close attributed borrow limit (USD)", value: "$0.00" },
    { label: "Liquidation penalty", value: "3.00%" },
    { label: "Max liquidation penalty", value: "3.00%" },
    { label: "Protocol liquidation fee", value: "1.99%" },
    { label: "Borrow fee", value: "0.00%" },
    { label: "Interest rate spread", value: "20.00%" },
    { label: "Isolated", value: "No" },
  ];

  // Generate realistic time series data based on the selected period
  const generateChartData = (period: string) => {
    const baseData = {
      "1D": [
        { time: "00:00", supplyAPR: 4.2, borrowAPR: 7.1 },
        { time: "04:00", supplyAPR: 4.1, borrowAPR: 7.0 },
        { time: "08:00", supplyAPR: 4.3, borrowAPR: 7.2 },
        { time: "12:00", supplyAPR: 4.5, borrowAPR: 7.4 },
        { time: "16:00", supplyAPR: 4.4, borrowAPR: 7.3 },
        { time: "20:00", supplyAPR: 4.6, borrowAPR: 7.5 },
        { time: "24:00", supplyAPR: 4.7, borrowAPR: 7.6 },
      ],
      "1W": [
        { time: "05/23", supplyAPR: 4.2, borrowAPR: 7.1 },
        { time: "05/24", supplyAPR: 4.1, borrowAPR: 6.9 },
        { time: "05/25", supplyAPR: 4.8, borrowAPR: 7.8 },
        { time: "05/26", supplyAPR: 4.6, borrowAPR: 8.2 },
        { time: "05/27", supplyAPR: 5.4, borrowAPR: 8.8 },
        { time: "05/28", supplyAPR: 5.8, borrowAPR: 8.4 },
        { time: "05/29", supplyAPR: 6.2, borrowAPR: 9.1 },
      ],
      "1M": [
        { time: "Week 1", supplyAPR: 3.8, borrowAPR: 6.5 },
        { time: "Week 2", supplyAPR: 4.1, borrowAPR: 6.8 },
        { time: "Week 3", supplyAPR: 4.5, borrowAPR: 7.1 },
        { time: "Week 4", supplyAPR: 5.2, borrowAPR: 7.6 },
        { time: "Week 5", supplyAPR: 6.2, borrowAPR: 8.1 },
      ],
    };

    return baseData[period as keyof typeof baseData] || baseData["1W"];
  };

  const chartData = generateChartData(activePeriod);

  const chartConfig = {
    supplyAPR: {
      label: "Supply APR",
      color: "hsl(221, 83%, 53%)", // Blue color
    },
    borrowAPR: {
      label: "Borrow APR",
      color: "hsl(25, 95%, 53%)", // Orange color
    },
  } satisfies ChartConfig;

  return (
    <div className="p-6">
      {/* Chart Section */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium">Deposit APR</h3>

          {/* Time Period Buttons */}
          <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
            {["1D", "1W", "1M"].map((period) => (
              <Button
                key={period}
                variant={activePeriod === period ? "default" : "ghost"}
                size="sm"
                onClick={() => setActivePeriod(period)}
                className="h-7 px-3 text-xs"
              >
                {period}
              </Button>
            ))}
          </div>
        </div>

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
                dataKey="time"
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                minTickGap={32}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tickMargin={8}
                tickFormatter={(value) => `${value}%`}
                domain={[0, 13.8]}
                ticks={[0, 4.6, 9.2, 13.8]}
                width={60}
              />
              <ChartTooltip
                cursor={false}
                content={
                  <ChartTooltipContent
                    labelFormatter={(value) => `Time: ${value}`}
                  />
                }
              />
              <Line
                dataKey="supplyAPR"
                type="monotone"
                stroke="var(--color-supplyAPR)"
                strokeWidth={3}
                dot={false}
                activeDot={{
                  r: 4,
                  fill: "var(--color-supplyAPR)",
                }}
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

        {/* Current values indicator */}
        <div className="mt-4 grid grid-cols-2 gap-4">
          <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <span className="text-sm font-medium">
                Supply APR: {chartData[chartData.length - 1]?.supplyAPR}%
              </span>
            </div>
          </div>
          <div className="p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
              <span className="text-sm font-medium">
                Borrow APR: {chartData[chartData.length - 1]?.borrowAPR}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Financial Data */}
      <div className="space-y-3">
        {financialData.map((item, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0"
          >
            <span className="text-sm text-gray-700">{item.label}</span>
            <span className="text-sm font-medium text-gray-900">
              {item.value || "-"}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advanced;
