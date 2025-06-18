import React, { useState } from "react";
import { Info, Calendar } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar as CalendarComponent } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import type { DateRange } from "react-day-picker";
import {
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  ComposedChart,
} from "recharts";
import QualifiedloanValue from "./QualifiedloanValue";

// Configuration arrays
const TIME_PERIODS = [
  { value: "12month", label: "12 month" },
  { value: "30days", label: "30 days" },
  { value: "7days", label: "7 days" },
  { value: "24hours", label: "24 hours" },
];

// Mock chart data matching the image pattern
const CHART_DATA = [
  { month: "", value: 15000, grayBar: 38000, blueBar: 12000 },
  { month: "", value: 12000, grayBar: 32000, blueBar: 8000 },
  { month: "", value: 18000, grayBar: 45000, blueBar: 15000 },
  { month: "", value: 14000, grayBar: 41000, blueBar: 11000 },
  { month: "", value: 22000, grayBar: 38000, blueBar: 18000 },
  { month: "", value: 16000, grayBar: 35000, blueBar: 13000 },
  { month: "", value: 12000, grayBar: 32000, blueBar: 9000 },
  { month: "", value: 14000, grayBar: 33000, blueBar: 11000 },
  { month: "", value: 18000, grayBar: 35000, blueBar: 15000 },
  { month: "", value: 25000, grayBar: 48000, blueBar: 22000 },
  { month: "", value: 32000, grayBar: 38000, blueBar: 28000 },
  { month: "", value: 28000, grayBar: 42000, blueBar: 24000 },
  { month: "", value: 35000, grayBar: 45000, blueBar: 30000 },
  { month: "", value: 38000, grayBar: 48000, blueBar: 33000 },
  { month: "", value: 42000, grayBar: 50000, blueBar: 37000 },
  { month: "", value: 36000, grayBar: 46000, blueBar: 31000 },
  { month: "", value: 32000, grayBar: 42000, blueBar: 27000 },
  { month: "", value: 35000, grayBar: 44000, blueBar: 30000 },
  { month: "", value: 38000, grayBar: 46000, blueBar: 33000 },
  { month: "", value: 45000, grayBar: 52000, blueBar: 40000 },
  { month: "", value: 48560, grayBar: 55000, blueBar: 43000 },
];

const CollateralLoan = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("12month");
  const [dateRange, setDateRange] = useState<DateRange | undefined>();

  interface TooltipPayload {
    value: number;
    dataKey?: string;
  }

  const CustomTooltip = ({
    active,
    payload,
  }: {
    active?: boolean;
    payload?: TooltipPayload[];
  }) => {
    if (active && payload && payload.length) {
      const lineValue = payload.find((p) => p.dataKey === "value")?.value;
      return (
        <div className="bg-gray-800 text-white p-2 rounded shadow-lg border border-gray-600 text-center">
          <p className="text-xs text-gray-300">Current Value</p>
          <p className="text-sm font-semibold text-yellow-400">
            ${lineValue?.toLocaleString()}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="w-full space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
            Collateralized Loan
          </h1>
          <p className="text-gray-600 text-sm sm:text-base">
            Select the digital assets you would like to collateralize.
          </p>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white px-4 sm:px-6 py-2 self-start">
          Apply Now
        </Button>
      </div>

      {/* Main Content */}
      <div className="bg-gray-900 rounded-xl p-4 sm:p-6 text-white">
        {/* Portfolio Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold">My Portfolio</h2>
            <Info className="w-4 h-4 text-gray-400" />
          </div>

          {/* Time Period Buttons */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
            <div className="flex rounded-lg border border-gray-700 divide-x divide-gray-700 w-full sm:w-auto">
              {TIME_PERIODS.map((period) => (
                <button
                  key={period.value}
                  onClick={() => setSelectedPeriod(period.value)}
                  className={`px-2 sm:px-3 py-2 text-xs transition-colors flex-1 sm:flex-none ${
                    selectedPeriod === period.value
                      ? " text-white"
                      : "text-gray-400 hover:text-white"
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>

            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  size="sm"
                  className={cn(
                    "bg-transparent border-gray-700 text-white w-full sm:w-auto justify-start text-left font-normal",
                    !dateRange?.from && "text-gray-400"
                  )}
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  {dateRange?.from ? (
                    dateRange.to ? (
                      <>
                        {format(dateRange.from, "LLL dd, y")} -{" "}
                        {format(dateRange.to, "LLL dd, y")}
                      </>
                    ) : (
                      format(dateRange.from, "LLL dd, y")
                    )
                  ) : (
                    <span>Select dates</span>
                  )}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <CalendarComponent
                  initialFocus
                  mode="range"
                  defaultMonth={dateRange?.from}
                  selected={dateRange}
                  onSelect={setDateRange}
                  numberOfMonths={2}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        {/* Portfolio Values */}
        <div className="flex flex-col sm:flex-row items-start sm:items-baseline gap-4 sm:gap-6 mb-6 sm:mb-8">
          <div>
            <div className="text-2xl sm:text-3xl font-bold">$159,461.50</div>
            <div className="text-sm text-cyan-500">● Market Value</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold">$4,461.50</div>
            <div className="text-sm text-gray-400">● Cost Basis</div>
          </div>
        </div>

        {/* Chart and Loan Value Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2 self-end">
            <div className="relative h-64 sm:h-80">
              {/* Gray bars background */}
              <ResponsiveContainer width="100%" height="100%">
                <ComposedChart data={CHART_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={false}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fill: "oklch(71.5% 0.143 215.221)", fontSize: 11 }}
                    tickFormatter={(value) => `${value / 1000}k`}
                    domain={[0, 60000]}
                    ticks={[0, 10000, 20000, 30000, 40000, 50000, 60000]}
                  />
                  <Bar
                    dataKey="grayBar"
                    fill="#99a1af"
                    opacity={0.6}
                    radius={[5, 5, 0, 0]}
                  />
                </ComposedChart>
              </ResponsiveContainer>

              {/* Blue bars and line overlay */}
              <div className="absolute inset-0">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart data={CHART_DATA}>
                    <XAxis
                      dataKey="month"
                      axisLine={false}
                      tickLine={false}
                      tick={false}
                    />
                    <YAxis
                      axisLine={false}
                      tickLine={false}
                      tick={false}
                      domain={[0, 60000]}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar
                      dataKey="blueBar"
                      fill="oklch(71.5% 0.143 215.221)"
                      opacity={1}
                      radius={[5, 5, 0, 0]}
                    />
                    <Area
                      type="monotone"
                      dataKey="value"
                      stroke="#fbbf24"
                      strokeWidth={2}
                      fill="none"
                      dot={{ fill: "#fbbf24", strokeWidth: 0, r: 3 }}
                      activeDot={{ r: 4, fill: "#fbbf24" }}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Qualified Loan Value Section */}
          <QualifiedloanValue />
        </div>
      </div>
    </div>
  );
};

export default CollateralLoan;
