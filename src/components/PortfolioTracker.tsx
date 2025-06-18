import { portfolioMetrics, type PortfolioMetric } from "@/constants/portfolio";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

const PortfolioTracker = () => {
  const MetricCard = ({ metric }: { metric: PortfolioMetric }) => {
    const getChartColor = (id: string, changeType?: string) => {
      if (changeType === "positive") return "#22c55e"; // green
      if (changeType === "negative") return "#ef4444"; // red
      if (id === "market-value" || id === "cash") return "#3b82f6"; // blue
      return "#22c55e"; // default green
    };

    // Transform chart data for recharts
    const chartData = metric.chartData.map((value, index) => ({
      index,
      value,
    }));

    const chartConfig = {
      value: {
        label: metric.title,
        color: getChartColor(metric.id, metric.changeType),
      },
    } satisfies ChartConfig;

    return (
      <div className="p-4 border border-gray-200 shadow rounded-lg flex items-center gap-4">
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
                    ? "text-green-600 bg-green-100 "
                    : "text-red-600 bg-red-100 "
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
                    <stop
                      offset="0%"
                      stopColor={getChartColor(metric.id, metric.changeType)}
                      stopOpacity={0.4}
                    />
                    <stop
                      offset="100%"
                      stopColor={getChartColor(metric.id, metric.changeType)}
                      stopOpacity={0}
                    />
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
                  stroke={getChartColor(metric.id, metric.changeType)}
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </ChartContainer>
        </div>
      </div>
    );
  };

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 mb-1">
            Portfolio Tracker
          </h1>
          <p className="text-sm text-gray-400">
            View a Complete Breakdown of Assets By Wallet.
          </p>
        </div>
        <button className=" px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto">
          Apply for Loan
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hide-scrollbar overflow-auto">
        {portfolioMetrics.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioTracker;
