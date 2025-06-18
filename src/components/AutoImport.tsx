import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ChevronDown, FileText, Link2, Plus, Upload } from "lucide-react";

const actionCards: ActionCardProps[] = [
  {
    name: "Browse File",
    icon: <Upload className="w-6 h-6 text-gray-600" />,
    description: "Upload a transaction history file from your exchange.",
    onClick: () => console.log("Browse File clicked"),
  },
  {
    name: "Auto Import",
    icon: <Link2 className="w-6 h-6 text-gray-600" />,
    description: "Connect your account via read-only API.",
    onClick: () => console.log("Auto Import clicked"),
    badge: "Recommended",
  },
  {
    name: "Manual Input",
    icon: <FileText className="w-6 h-6 text-gray-600" />,
    description: "Add a transaction manually.",
    onClick: () => console.log("Manual Input clicked"),
  },
];

interface ActionCardProps {
  name: string;
  icon: React.ReactNode;
  description: string;
  badge?: string;
  onClick: () => void;
}

const ActionCard = ({
  name,
  icon,
  description,
  badge,
  onClick,
}: ActionCardProps) => {
  return (
    <div
      className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-gray-400 transition-colors cursor-pointer"
      onClick={onClick}
    >
      <div className="w-12 h-12 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-gray-600 text-sm leading-relaxed mb-3">
        {description}
      </p>
      {badge && (
        <span className="inline-block px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
          {badge}
        </span>
      )}
    </div>
  );
};

const AutoImport = () => {
  return (
    <div className="bg-white rounded-lg p-4 md:p-6">
      <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 md:mb-8 pb-4 border-b border-gray-200 gap-4">
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 lg:gap-6">
          <span className="text-gray-700 font-medium">0 Transactions</span>

          <div className="flex flex-col sm:flex-row gap-3">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors justify-between sm:justify-start">
                  All Years
                  <ChevronDown className="w-4 h-4" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>All Years</DropdownMenuItem>
                <DropdownMenuItem>2024</DropdownMenuItem>
                <DropdownMenuItem>2023</DropdownMenuItem>
                <DropdownMenuItem>2022</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors justify-between sm:justify-start">
                  <span className="truncate">Sort by : Descending</span>
                  <ChevronDown className="w-4 h-4 flex-shrink-0" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start">
                <DropdownMenuItem>Descending</DropdownMenuItem>
                <DropdownMenuItem>Ascending</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <button className="flex items-center justify-center gap-2 px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors w-full lg:w-auto">
          <Plus className="w-4 h-4" />
          Add Transaction
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {actionCards.map((card, index) => (
          <ActionCard
            key={index}
            name={card.name}
            icon={card.icon}
            description={card.description}
            onClick={card.onClick}
            badge={card.badge}
          />
        ))}
      </div>
    </div>
  );
};

export default AutoImport;
