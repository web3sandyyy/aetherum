
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { MoreHorizontal } from "lucide-react";

interface Transaction {
  date: string;
  incomeSource: string;
  account: string;
  value: number;
}

interface MobileTransactionCardsProps {
  transactions: Transaction[];
}

const MobileTransactionCards = ({
  transactions,
}: MobileTransactionCardsProps) => {
  return (
    <div className="block md:hidden space-y-4">
      {transactions.map((transaction, index) => (
        <div
          key={index}
          className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="text-sm font-medium text-gray-900">
              {transaction.date}
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="p-1 hover:bg-gray-100 rounded-md">
                  <MoreHorizontal className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>View Details</DropdownMenuItem>
                <DropdownMenuItem>Edit Transaction</DropdownMenuItem>
                <DropdownMenuItem className="text-red-600">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Income Source</span>
              <span className="text-sm font-medium text-gray-900">
                {transaction.incomeSource}
              </span>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Account</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">C</span>
                </div>
                <span className="text-sm font-medium text-blue-600">
                  {transaction.account}
                </span>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-600">Value</span>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-xs font-bold">₿</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  +{transaction.value} BTC
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileTransactionCards;
