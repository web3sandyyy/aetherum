import React from "react";

const CRYPTO_ASSETS = [
  { symbol: "BTC", name: "Bitcoin", amount: "$70,000", logo: "₿" },
  { symbol: "ITC", name: "Ethereum", amount: "$10,000", logo: "Ξ" },
  { symbol: "MED", name: "Medcoin", amount: "$10,000", logo: "M" },
  { symbol: "ZEC", name: "Zcash", amount: "$10,000", logo: "Z" },
  { symbol: "DASH", name: "Dash", amount: "$30,000", logo: "D" },
];

const QualifiedloanValue = () => {
  return (
    <div className="lg:col-span-1 order-1 lg:order-2 bg-gray-900 text-white p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Qualified Loan Value</h3>

      <div className="space-y-3">
        {CRYPTO_ASSETS.map((asset, index) => (
          <div
            key={asset.symbol}
            className="flex items-center justify-between p-3 bg-gray-800 rounded-lg"
          >
            <div className="flex items-center space-x-3">
              <div
                className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold ${
                  index === 0
                    ? "bg-orange-500"
                    : index === 1
                    ? "bg-gray-600"
                    : index === 2
                    ? "bg-blue-500"
                    : index === 3
                    ? "bg-yellow-500"
                    : "bg-blue-400"
                }`}
              >
                {asset.logo}
              </div>
              <div>
                <div className="font-medium text-sm sm:text-base">
                  {asset.symbol}
                </div>
                <div className="text-xs text-gray-400">LTV</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-medium text-sm sm:text-base">
                {asset.amount}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4">
        <div className="text-base sm:text-lg font-semibold">
          Total Loan Value: $120,000
        </div>
      </div>
    </div>
  );
};

export default QualifiedloanValue;
