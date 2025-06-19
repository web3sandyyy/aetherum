import React, { useState } from "react";
import { Search, Ellipsis } from "lucide-react";
import { Button } from "./ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { ASSETS_DATA } from "../constants/assetsSelection";
import Objects from "./assetSelectionTabs/Objects";
import Advanced from "./assetSelectionTabs/Advanced";
import Rates from "./assetSelectionTabs/Rates";

interface AssetType {
  id: string;
  token: string;
  symbol: string;
  lastPrice: number;
  change24h: number;
  marketCap: string;
  icon: string;
  checked: boolean;
}

const AssetsSelection = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeFilter, setActiveFilter] = useState("all");
  const [assetsData, setAssetsData] = useState(ASSETS_DATA);
  const [selectedAsset, setSelectedAsset] = useState<AssetType | null>(null);
  const [activeTab, setActiveTab] = useState("objects");

  // Filter assets based on search term and active filter
  const filteredAssets = assetsData.filter((asset) => {
    const matchesSearch =
      asset.token.toLowerCase().includes(searchTerm.toLowerCase()) ||
      asset.symbol.toLowerCase().includes(searchTerm.toLowerCase());

    if (activeFilter === "checked") {
      return matchesSearch && asset.checked;
    } else if (activeFilter === "unChecked") {
      return matchesSearch && !asset.checked;
    }

    return matchesSearch;
  });

  const handleCheckboxChange = (assetId: string) => {
    setAssetsData((prev) =>
      prev.map((asset) =>
        asset.id === assetId ? { ...asset, checked: !asset.checked } : asset
      )
    );
  };

  const handleRowClick = (asset: AssetType) => {
    setSelectedAsset(asset);
    setActiveTab("objects");
  };

  const formatPrice = (price: number) => {
    return `$${price.toLocaleString("en-US", { minimumFractionDigits: 2 })}`;
  };

  const formatMarketCap = (marketCap: string) => {
    return `$${marketCap}`;
  };

  const formatChange = (change: number) => {
    return `+${change}%`;
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "advanced":
        return <Advanced selectedAsset={selectedAsset} />;
      case "rates":
        return <Rates selectedAsset={selectedAsset} />;
      case "objects":
      default:
        return <Objects selectedAsset={selectedAsset} />;
    }
  };

  return (
    <div className="w-full mx-auto space-y-4">
      {/* Search and Filters */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="flex items-center gap-4">
          <h2 className="text-lg font-medium text-gray-900">Assets</h2>

          <div className="relative flex-1 max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <input
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Button
              variant={activeFilter === "all" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("all")}
              className="h-8"
            >
              All
            </Button>
            <Button
              variant={activeFilter === "checked" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("checked")}
              className="h-8"
            >
              Checked
            </Button>
            <Button
              variant={activeFilter === "unChecked" ? "default" : "outline"}
              size="sm"
              onClick={() => setActiveFilter("unChecked")}
              className="h-8"
            >
              UnChecked
            </Button>
          </div>

          {/* All Accounts Selector */}
          <div className="flex items-center gap-2">
            <div className="flex items-center">
              <span className="mr-2">🔄</span>
              <span className="text-sm">All Accounts</span>
            </div>
            <Button variant="ghost" size="sm">
              <Ellipsis className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Assets Table */}
      <div className="border rounded-lg overflow-hidden">
        <Table>
          <TableHeader className="bg-gray-200 rounded-t-lg">
            <TableRow className="hover:bg-transparent">
              <TableHead className="w-12">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    setAssetsData((prev) =>
                      prev.map((asset) => ({ ...asset, checked: isChecked }))
                    );
                  }}
                />
              </TableHead>
              <TableHead>Token</TableHead>
              <TableHead>Symbol</TableHead>
              <TableHead className="text-right">Last Price</TableHead>
              <TableHead className="text-right">24H Change</TableHead>
              <TableHead className="text-right">Market Cap</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAssets.map((asset) => (
              <TableRow
                key={asset.id}
                className={`hover:bg-gray-50 cursor-pointer ${
                  selectedAsset?.id === asset.id
                    ? "bg-blue-50 border-l-4 border-l-blue-500"
                    : ""
                }`}
                onClick={() => handleRowClick(asset)}
              >
                <TableCell>
                  <input
                    type="checkbox"
                    checked={asset.checked}
                    onChange={(e) => {
                      e.stopPropagation();
                      handleCheckboxChange(asset.id);
                    }}
                    className="rounded border-gray-300"
                  />
                </TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{asset.icon}</span>
                    <span className="font-medium">{asset.token}</span>
                  </div>
                </TableCell>
                <TableCell>
                  <span className="text-gray-600">{asset.symbol}</span>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatPrice(asset.lastPrice)}
                </TableCell>
                <TableCell className="text-right">
                  <span className="text-green-600 bg-green-50 px-2 py-1 rounded text-sm font-medium">
                    {formatChange(asset.change24h)}
                  </span>
                </TableCell>
                <TableCell className="text-right font-medium">
                  {formatMarketCap(asset.marketCap)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Selected Asset Details */}
      {selectedAsset && (
        <div className="border rounded-lg overflow-hidden bg-white">
          {/* Tabs */}
          <div className="border-b border-gray-200">
            <div className="flex">
              <Button
                variant={activeTab === "advanced" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("advanced")}
                className="rounded-none border-r border-gray-200 h-12"
              >
                Advanced
              </Button>
              <Button
                variant={activeTab === "rates" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("rates")}
                className="rounded-none border-r border-gray-200 h-12"
              >
                Rates
              </Button>
              <Button
                variant={activeTab === "objects" ? "default" : "ghost"}
                size="sm"
                onClick={() => setActiveTab("objects")}
                className="rounded-none h-12"
              >
                Objects
              </Button>
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white">{renderTabContent()}</div>
        </div>
      )}
    </div>
  );
};

export default AssetsSelection;
