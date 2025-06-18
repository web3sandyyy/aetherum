import React from "react";

// Configuration for loan details
const LOAN_DETAILS = [
  { key: "walletScore", label: "A2 Wallet Score", value: 80, type: "number" },
  {
    key: "totalLoanAmount",
    label: "Total Loan Amount",
    value: 120000,
    type: "currency",
  },
  {
    key: "interestRate",
    label: "Interest Rate",
    value: 12,
    type: "percentage",
  },
  {
    key: "portfolioLTV",
    label: "Portfolio LTV",
    value: 60,
    type: "percentage",
  },
  {
    key: "liquidationLTV",
    label: "Liquidation LTV %",
    value: 60,
    type: "percentage",
  },
  {
    key: "managementFee",
    label: "Management Fee / Expense Ratio",
    value: 0.05,
    type: "percentage",
  },
  {
    key: "monthlyEMI",
    label: "Monthly EMI Payments",
    value: 5000,
    type: "currency_suffix",
  },
];

const LoanDetails = () => {
  const formatValue = (value: number, type: string) => {
    switch (type) {
      case "currency":
        return `$${value.toLocaleString()}`;
      case "percentage":
        return `${value}%`;
      case "currency_suffix":
        return `${value.toLocaleString()}$`;
      default:
        return value.toString();
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 w-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">Loan Details</h2>

      {/* Loan Details List */}
      <div className="space-y-4 mb-8">
        {LOAN_DETAILS.map((detail) => (
          <div key={detail.key} className="flex justify-between items-center">
            <span className="text-sm text-gray-600">{detail.label} :</span>
            <span className="text-sm font-medium text-gray-900">
              {formatValue(detail.value, detail.type)}
            </span>
          </div>
        ))}
      </div>

      {/* Apply Now Button */}
      <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
        Apply Now
      </button>
    </div>
  );
};

export default LoanDetails;
