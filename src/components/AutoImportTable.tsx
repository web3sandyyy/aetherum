import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import transactions from "@/constants/transactions";
import DesktopTransactionTable from "./DesktopTransactionTable";
import MobileTransactionCards from "./MobileTransactionCards";

const AutoImportTable = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder, setSortOrder] = useState("Descending");
  const [selectedYear, setSelectedYear] = useState("All Years");

  const itemsPerPage = 10;

  // Filter transactions by year
  const filteredTransactions = transactions.filter((transaction) => {
    if (selectedYear === "All Years") return true;
    return transaction.date.includes(selectedYear);
  });

  // Sort transactions
  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return sortOrder === "Descending"
      ? dateB.getTime() - dateA.getTime()
      : dateA.getTime() - dateB.getTime();
  });

  // Pagination logic
  const totalPages = Math.ceil(sortedTransactions.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentTransactions = sortedTransactions.slice(startIndex, endIndex);

  const goToPage = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  const getVisiblePages = () => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) {
      rangeWithDots.push(1, "...");
    } else {
      rangeWithDots.push(1);
    }

    rangeWithDots.push(...range);

    if (currentPage + delta < totalPages - 1) {
      rangeWithDots.push("...", totalPages);
    } else {
      if (totalPages > 1) rangeWithDots.push(totalPages);
    }

    return rangeWithDots;
  };

  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 md:mb-8 pb-4 border-b border-gray-200 gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
          <span className="text-gray-700 font-medium">
            {sortedTransactions.length} Transactions
          </span>

          <div className="flex flex-col sm:flex-row gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors justify-between sm:justify-start">
                  {selectedYear}
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setSelectedYear("All Years")}>
                  All Years
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedYear("2024")}>
                  2024
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedYear("2023")}>
                  2023
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSelectedYear("2022")}>
                  2022
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors justify-between sm:justify-start">
                  <span className="truncate">Sort by : {sortOrder}</span>
                  <ChevronDown className="w-4 h-4 flex-shrink-0" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem onClick={() => setSortOrder("Descending")}>
                  Descending
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortOrder("Ascending")}>
                  Ascending
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors w-full lg:w-auto">
          <Plus className="w-4 h-4" />
          Add Transaction
        </button>
      </div>

      {/* Desktop Table Component */}
      <DesktopTransactionTable transactions={currentTransactions} />

      {/* Mobile Cards Component */}
      <MobileTransactionCards transactions={currentTransactions} />

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between pt-6 gap-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <ChevronLeft className="w-4 h-4" />
          Prev
        </button>

        <div className="flex items-center gap-1 sm:gap-2 flex-wrap justify-center">
          {getVisiblePages().map((page, index) => (
            <React.Fragment key={index}>
              {page === "..." ? (
                <span className="px-2 sm:px-3 py-2 text-sm text-gray-500">
                  ...
                </span>
              ) : (
                <button
                  onClick={() => typeof page === "number" && goToPage(page)}
                  className={`px-2 sm:px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  {page}
                </button>
              )}
            </React.Fragment>
          ))}
        </div>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-500 hover:text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Next
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};

export default AutoImportTable;
