import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { Button } from "../ui/button";

interface ObjectsProps {
  selectedAsset?: {
    id: string;
    token: string;
    symbol: string;
    lastPrice: number;
    change24h: number;
    marketCap: string;
    icon: string;
    checked: boolean;
  } | null;
}

const Objects: React.FC<ObjectsProps> = ({ selectedAsset }) => {
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = async (text: string, fieldName: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(fieldName);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // Mock data based on the selected asset
  const getObjectData = () => {
    if (!selectedAsset) return null;

    return {
      coin: `0xdba3...00a7:usdc:${selectedAsset.symbol}`,
      lendingMarket: `0x8403...ece1`,
      reserve: `0xd388...2c15`,
      oracle: `Oracle${selectedAsset.symbol}/USD`,
      priceIdentifier: `0xeaa0...c94a`,
      admin: `0xbff...3c25`,
      adminCap: `0xf7a4...5927`,
    };
  };

  const objectData = getObjectData();

  if (!selectedAsset || !objectData) {
    return (
      <div className="p-6 text-center text-gray-500">
        <p>Select a token to view object details</p>
      </div>
    );
  }

  const dataFields = [
    { label: "Coin", value: objectData.coin, key: "coin" },
    {
      label: "Lending market",
      value: objectData.lendingMarket,
      key: "lendingMarket",
    },
    { label: "Reserve", value: objectData.reserve, key: "reserve" },
    { label: "Oracle", value: objectData.oracle, key: "oracle" },
    {
      label: "Price identifier",
      value: objectData.priceIdentifier,
      key: "priceIdentifier",
    },
    { label: "Admin", value: objectData.admin, key: "admin" },
    { label: "Admin cap", value: objectData.adminCap, key: "adminCap" },
  ];

  return (
    <div className="p-6 space-y-4">
      {dataFields.map((field) => (
        <div
          key={field.key}
          className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
        >
          <div className="flex-1">
            <label className="text-sm font-medium text-gray-700 block mb-1">
              {field.label}
            </label>
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-900 font-mono break-all">
                {field.value}
              </span>
              <div className="flex items-center gap-2 ml-4">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy(field.value, field.key)}
                  className="h-8 w-8 p-0 hover:bg-gray-100"
                >
                  {copiedField === field.key ? (
                    <Check className="h-4 w-4 text-green-600" />
                  ) : (
                    <Copy className="h-4 w-4 text-gray-400" />
                  )}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0 hover:bg-gray-100"
                >
                  <svg
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Objects;
