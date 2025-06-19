import { portfolioMetrics } from "@/constants/portfolio";
import MetricCard, { type MetricData } from "./MetricCard";

const PortfolioTracker = () => {
  const getPortfolioChartColor = (id: string, changeType?: string) => {
    if (changeType === "positive") return "#22c55e"; // green
    if (changeType === "negative") return "#ef4444"; // red
    if (id === "market-value" || id === "cash") return "#3b82f6"; // blue
    return "#22c55e"; // default green
  };

  return (
    <div className="">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start mb-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-900 mb-1">
            Portfolio Tracker
          </h1>
          <p className="text-sm text-gray-400">
            View a Complete Breakdown of Assets By Wallet.
          </p>
        </div>
        <button className="mt-4 md:mt-0 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors w-full sm:w-auto">
          Apply for Loan
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 hide-scrollbar overflow-auto">
        {portfolioMetrics.map((metric) => (
          <MetricCard
            key={metric.id}
            metric={metric as MetricData}
            getChartColor={getPortfolioChartColor}
          />
        ))}
      </div>
    </div>
  );
};

export default PortfolioTracker;
