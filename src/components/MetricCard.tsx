import React from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "./ui/chart";

export interface MetricData {
  id: string;
  title: string;
  value: string;
  chartData: number[];
  changeType?: "positive" | "negative" | "neutral";
  change?: string;
}

interface MetricCardProps {
  metric: MetricData;
  getChartColor?: (id: string, changeType?: string) => string;
}

const MetricCard: React.FC<MetricCardProps> = ({ metric, getChartColor }) => {
  const defaultGetChartColor = (changeType?: string) => {
    if (changeType === "positive") return "#22c55e"; // green
    if (changeType === "negative") return "#ef4444"; // red
    return "#3b82f6"; // blue for neutral
  };

  const chartColor = getChartColor
    ? getChartColor(metric.id, metric.changeType)
    : defaultGetChartColor(metric.changeType);

  // Transform chart data for recharts
  const chartData = metric.chartData.map((value, index) => ({
    index,
    value,
  }));

  const chartConfig = {
    value: {
      label: metric.title,
      color: chartColor,
    },
  } satisfies ChartConfig;

  return (
    <div className="p-4 bg-white border border-gray-200 shadow rounded-lg flex flex-col md:flex-row md:items-center gap-4">
      <div>
        <h3 className="text-sm font-medium text-gray-600 mb-1 whitespace-nowrap">
          {metric.title}
        </h3>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-semibold text-gray-900">
            {metric.value}
          </span>
          {metric.change && (
            <span
              className={`text-[10px] font-medium px-1.5 py-0.5 rounded-md ${
                metric.changeType === "positive"
                  ? "text-green-600 bg-green-100"
                  : "text-red-600 bg-red-100"
              }`}
            >
              {metric.change}
            </span>
          )}
        </div>
      </div>

      <div className="w-full h-12 overflow-hidden">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient
                  id={`gradient-${metric.id}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={chartColor} stopOpacity={0.4} />
                  <stop offset="100%" stopColor={chartColor} stopOpacity={0} />
                </linearGradient>
              </defs>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="line" />}
              />
              <Area
                dataKey="value"
                type="natural"
                fill={`url(#gradient-${metric.id})`}
                stroke={chartColor}
                strokeWidth={2}
              />
            </AreaChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default MetricCard;
