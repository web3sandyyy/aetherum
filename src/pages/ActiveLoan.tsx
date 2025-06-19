import MetricCard, { type MetricData } from "../components/MetricCard";

// Loan metrics data
const LOAN_METRICS: MetricData[] = [
  {
    id: "aetherum-loan",
    title: "Aetherum Loan",
    value: "$750",
    chartData: [40, 45, 35, 50, 45, 40, 55, 50, 45, 40, 35, 45],
    changeType: "neutral",
  },
  {
    id: "paid",
    title: "Paid",
    value: "700",
    chartData: [30, 35, 40, 30, 45, 35, 40, 45, 35, 30, 40, 35],
    changeType: "negative",
  },
  {
    id: "due",
    title: "Due",
    value: "$50",
    chartData: [20, 25, 30, 35, 25, 30, 40, 35, 30, 25, 35, 30],
    changeType: "positive",
  },
];

// Loan details data
const LOAN_DETAILS = [
  { label: "Total Loan Value", value: "$120,000" },
  { label: "Length of Loan", value: "12 months" },
  { label: "Date of Loan Inception", value: "Jan. 01, 2025" },
  { label: "Portfolio LTV", value: "60%" },
  { label: "Payout denomination", value: "Fiat / USDC" },
  { label: "Payout to Bank account", value: "-" },
  { label: "Liquidation LTV", value: "63%" },
  { label: "Expense Ratio", value: "1%" },
];

const ActiveLoan = () => {
  return (
    <div className="w-full p-4 md:p-6 space-y-4 md:space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-lg sm:text-xl font-semibold">Active Loan</h1>
          <p className="text-gray-500 text-sm mt-1">
            Here is the active loan of yours.
          </p>
        </div>
        <div className="flex justify-end">
          <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
            Dashboard
          </button>
        </div>
      </div>

      {/* Loan Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        {LOAN_METRICS.map((metric) => (
          <MetricCard key={metric.id} metric={metric} />
        ))}
      </div>

      {/* Loan Details */}
      <div className="bg-white rounded-lg shadow-sm border p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-6">
          Loan Details
        </h2>

        <div className="space-y-4">
          {LOAN_DETAILS.map((detail, index) => (
            <div key={index} className="flex justify-between items-center">
              <span className="text-sm text-gray-600">{detail.label}:</span>
              <span className="text-sm font-medium text-gray-900">
                {detail.value}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActiveLoan;
