import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { MoreHorizontal } from "lucide-react";

interface Transaction {
  date: string;
  incomeSource: string;
  account: string;
  value: number;
}

interface DesktopTransactionTableProps {
  transactions: Transaction[];
}

const DesktopTransactionTable = ({
  transactions,
}: DesktopTransactionTableProps) => {
  return (
    <div className="hidden md:block rounded-md border">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="font-semibold text-gray-700">Date</TableHead>
            <TableHead className="font-semibold text-gray-700">
              Income Source
            </TableHead>
            <TableHead className="font-semibold text-gray-700">
              Account
            </TableHead>
            <TableHead className="font-semibold text-gray-700">Value</TableHead>
            <TableHead className="font-semibold text-gray-700">
              Action
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {transactions.map((transaction, index) => (
            <TableRow key={index} className="hover:bg-gray-50">
              <TableCell className="font-medium text-gray-900 py-4">
                {transaction.date}
              </TableCell>
              <TableCell className="text-gray-700">
                {transaction.incomeSource}
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">C</span>
                  </div>
                  <span className="text-blue-600 font-medium">
                    {transaction.account}
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">₿</span>
                  </div>
                  <span className="font-medium text-gray-900">
                    +{transaction.value} BTC
                  </span>
                </div>
              </TableCell>
              <TableCell>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="p-2 hover:bg-gray-100 rounded-md">
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
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default DesktopTransactionTable;
