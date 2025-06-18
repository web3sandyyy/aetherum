import React, { useState } from "react";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

// Configuration arrays
const LOAN_LENGTHS = [
  { value: "6", label: "6 months" },
  { value: "12", label: "12 months" },
  { value: "18", label: "18 months" },
  { value: "24", label: "24 months" },
  { value: "36", label: "36 months" },
];

const DENOMINATIONS = [
  { value: "USDC", label: "USDC" },
  { value: "USDT", label: "USDT" },
  { value: "DAI", label: "DAI" },
  { value: "USD", label: "USD" },
];

const BANK_ACCOUNTS = [
  { value: "american-bank", label: "American Bank" },
  { value: "chase-bank", label: "Chase Bank" },
  { value: "bank-of-america", label: "Bank of America" },
  { value: "wells-fargo", label: "Wells Fargo" },
];

const LoanCalculation = () => {
  const [loanLength, setLoanLength] = useState("12");
  const [loanDate, setLoanDate] = useState<Date | undefined>(
    new Date("2025-03-19")
  );
  const [denomination, setDenomination] = useState("USDC");
  const [bankAccount, setBankAccount] = useState("american-bank");

  return (
    <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-6 w-full">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        Loan Calculation
      </h2>

      {/* Length of Loan */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Length of Loan (Months)
        </label>
        <Select value={loanLength} onValueChange={setLoanLength}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select loan length" />
          </SelectTrigger>
          <SelectContent>
            {LOAN_LENGTHS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Date of Loan Inception */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Date of Loan Inception
        </label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className={cn(
                "w-full justify-start text-left font-normal",
                !loanDate && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {loanDate ? format(loanDate, "dd-MMMM-yyyy") : "Pick a date"}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0">
            <Calendar
              mode="single"
              selected={loanDate}
              onSelect={setLoanDate}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>

      {/* Payout Denomination */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Payout Denomination
        </label>
        <Select value={denomination} onValueChange={setDenomination}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select denomination" />
          </SelectTrigger>
          <SelectContent>
            {DENOMINATIONS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Select Bank Account */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Select Bank Account
        </label>
        <Select value={bankAccount} onValueChange={setBankAccount}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select bank account" />
          </SelectTrigger>
          <SelectContent>
            {BANK_ACCOUNTS.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Calculate Button */}
      <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
        Calculate Loan
      </button>
    </div>
  );
};

export default LoanCalculation;
