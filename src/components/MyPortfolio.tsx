
import { portfolioChartData } from "@/constants/myPortfolio";
import {
  ChartContainer,
  ChartTooltip,
  type ChartConfig,
} from "@/components/ui/chart";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const MyPortfolio = () => {
  const chartConfig = {
    digitalAssets: {
      label: "Digital Assets",
      color: "#3b82f6",
    },
    bankingCash: {
      label: "Banking - Cash",
      color: "#f97316",
    },
    investments: {
      label: "Investments",
      color: "#22c55e",
    },
  } satisfies ChartConfig;

  // Custom tooltip component
  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const total = payload.reduce(
        (sum: number, entry: any) => sum + (entry.value || 0),
        0
      );
      return (
        <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm text-gray-500 mb-2">{label}</p>
          <p className="text-lg font-semibold text-gray-900 mb-2">
            ${(total * 1000).toLocaleString()}.00
          </p>
          {payload.map((entry: any, index: number) => (
            <div key={index} className="flex items-center gap-2 text-sm">
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: entry.color }}
              ></div>
              <span className="text-gray-600">{entry.name}:</span>
              <span className="font-medium">{entry.value}</span>
            </div>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex-grow bg-white rounded-lg border border-gray-200 shadow-sm p-4 sm:p-6 overflow-hidden">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4 mb-6">
        <h2 className="text-lg font-semibold text-gray-900">My Portfolio</h2>

        {/* Legend */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <span className="text-xs sm:text-sm text-gray-600">
              Digital Assets
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <span className="text-xs sm:text-sm text-gray-600">
              Banking - Cash
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
            <span className="text-xs sm:text-sm text-gray-600">
              Investments
            </span>
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="h-48 sm:h-64 w-full overflow-hidden">
        <ChartContainer config={chartConfig} className="h-full w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={portfolioChartData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 10,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 10 }}
                tickMargin={8}
                interval="preserveStartEnd"
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "#94a3b8", fontSize: 10 }}
                tickMargin={5}
                domain={[0, 100]}
                ticks={[0, 20, 40, 60, 80, 100]}
                width={30}
              />
              <ChartTooltip content={CustomTooltip} />
              <Line
                type="monotone"
                dataKey="digitalAssets"
                stroke="#3b82f6"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#3b82f6" }}
              />
              <Line
                type="monotone"
                dataKey="bankingCash"
                stroke="#f97316"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#f97316" }}
              />
              <Line
                type="monotone"
                dataKey="investments"
                stroke="#22c55e"
                strokeWidth={2}
                dot={false}
                activeDot={{ r: 4, fill: "#22c55e" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartContainer>
      </div>
    </div>
  );
};

export default MyPortfolio;
