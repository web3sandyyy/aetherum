import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";
import QualifiedloanValue from "../components/QualifiedloanValue";
import LoanDetails from "../components/LoanDetails";
import WalletScore from "../components/WalletScore";

// Digital assets data for collateralization table
const DIGITAL_ASSETS = [
  {
    id: 1,
    currency: "Bitcoin",
    symbol: "BTC",
    icon: "₿",
    color: "bg-orange-500",
    ltv: "$70,000",
    portfolioValue: "70%",
  },
  {
    id: 2,
    currency: "Dot",
    symbol: "DOT",
    icon: "●",
    color: "bg-pink-500",
    ltv: "$10,000",
    portfolioValue: "10%",
  },
  {
    id: 3,
    currency: "Matic",
    symbol: "MATIC",
    icon: "◆",
    color: "bg-purple-500",
    ltv: "$10,000",
    portfolioValue: "10%",
  },
  {
    id: 4,
    currency: "Matic",
    symbol: "MATIC",
    icon: "◆",
    color: "bg-purple-500",
    ltv: "$10,000",
    portfolioValue: "10%",
  },
  {
    id: 5,
    currency: "Binance",
    symbol: "BNB",
    icon: "B",
    color: "bg-yellow-500",
    ltv: "$30,000",
    portfolioValue: "30%",
  },
];

const ApproveLoan = () => {
  return (
    <div className="w-full p-4 md:p-6 space-y-4 md:space-y-8">
      {/* Header */}
      <div className="">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="flex-1">
            <h1 className="text-lg sm:text-xl font-semibold">
              Approve Loan Terms
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Please review all the terms and conditions as per below and
              approve it
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 w-full sm:w-auto">
            <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm">
              Edit Terms
            </button>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm">
              Sign this Document
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {/* Qualified Loan Value */}
        <div className="w-full">
          <QualifiedloanValue />
        </div>

        {/* Loan Details */}
        <div className="w-full">
          <LoanDetails />
        </div>

        {/* Wallet Score */}
        <div className="w-full md:col-span-2 lg:col-span-1 flex justify-center">
          <WalletScore />
        </div>
      </div>

      {/* Digital Assets Collateralized Table */}
      <div className="">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Digital Assets being collateralized
        </h2>

        <div className="border rounded-lg overflow-hidden">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-gray-100">
                <TableRow className="hover:bg-transparent">
                  <TableHead className="w-16 sm:w-20 text-center whitespace-nowrap">
                    SO No.
                  </TableHead>
                  <TableHead className="min-w-[120px]">Currency</TableHead>
                  <TableHead className="text-right whitespace-nowrap">
                    LTV
                  </TableHead>
                  <TableHead className="text-right whitespace-nowrap">
                    Portfolio Value
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {DIGITAL_ASSETS.map((asset) => (
                  <TableRow key={asset.id} className="hover:bg-gray-50">
                    <TableCell className="text-center font-medium">
                      {asset.id}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div
                          className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center text-white text-xs sm:text-sm font-bold ${asset.color} flex-shrink-0`}
                        >
                          {asset.icon}
                        </div>
                        <div className="min-w-0">
                          <div className="font-medium text-gray-900 text-sm sm:text-base truncate">
                            {asset.currency}
                          </div>
                          <div className="text-xs sm:text-sm text-gray-500">
                            {asset.symbol}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="text-right font-medium text-sm sm:text-base">
                      {asset.ltv}
                    </TableCell>
                    <TableCell className="text-right font-medium text-sm sm:text-base">
                      {asset.portfolioValue}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApproveLoan;
