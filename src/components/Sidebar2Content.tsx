import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";
import { type NavItem, navigationItems } from "@/constants/sidebar";

const Sidebar2Content = () => {
  const [selectedItem, setSelectedItem] = useState<string>("digital-assets");
  const [expandedItems, setExpandedItems] = useState<string[]>([
    "banks",
    "investments",
  ]);

  // Helper function to check if item should be selected (either directly or has selected child)
  const isItemSelected = (itemId: string): boolean => {
    if (selectedItem === itemId) return true;

    // Check if any children are selected (recursively)
    const checkChildren = (items: NavItem[]): boolean => {
      for (const item of items) {
        if (item.id === itemId) return true;
        if (item.children && checkChildren(item.children)) return true;
      }
      return false;
    };

    // Check if this item has any selected descendants
    const item = navigationItems.find((item) => item.id === itemId);
    if (item?.children) {
      for (const child of item.children) {
        if (selectedItem === child.id) return true;
        if (child.children && checkChildren(child.children)) return true;
      }
    }

    return false;
  };

  const toggleExpanded = (itemId: string) => {
    setExpandedItems((prev) =>
      prev.includes(itemId)
        ? prev.filter((id) => id !== itemId)
        : [...prev, itemId]
    );
  };

  const renderNavItem = (item: NavItem, level = 0) => {
    const isExpanded = expandedItems.includes(item.id);
    const paddingLeft = level * 16;

    return (
      <div key={item.id} className="w-full">
        <div
          className={`flex items-center justify-between py-2 px-3 hover:bg-blue-50 border-l-4 cursor-pointer transition-colors ${
            isItemSelected(item.id)
              ? "bg-blue-50 border-blue-500"
              : "border-transparent"
          }`}
          style={{ paddingLeft: `${12 + paddingLeft}px` }}
          onClick={() => {
            setSelectedItem(item.id);
            if (item.hasDropdown) {
              toggleExpanded(item.id);
            }
          }}
        >
          <div className="flex items-center gap-3">
            <span className="text-blue-600">
              {React.createElement(item.icon, { className: "w-4 h-4" })}
            </span>
            <span className="text-gray-700 font-medium">{item.label}</span>
          </div>
          {item.hasDropdown && (
            <span className="text-gray-400">
              {isExpanded ? (
                <ChevronDown
                  className={`w-4 h-4 ${
                    selectedItem === item.id ? "text-blue-600" : "text-gray-400"
                  }`}
                />
              ) : (
                <ChevronRight
                  className={`w-4 h-4 ${
                    selectedItem === item.id ? "text-blue-600" : "text-gray-400"
                  }`}
                />
              )}
            </span>
          )}
        </div>

        {item.hasDropdown && isExpanded && item.children && (
          <div className="ml-4">
            {item.children.map((child: NavItem) => (
              <div key={child.id}>
                <div
                  className={`flex items-center justify-between py-2 px-3 hover:bg-gray-50 cursor-pointer transition-colors`}
                  style={{ paddingLeft: `${12 + paddingLeft + 16}px` }}
                  onClick={() => {
                    setSelectedItem(child.id);
                    if (child.children) {
                      toggleExpanded(child.id);
                    }
                  }}
                >
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-gray-600 rounded-full"></span>
                    <span className="text-gray-600 text-sm">{child.label}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    {child.status && (
                      <span className="px-1 py-0.5 text-[10px] bg-green-600 text-white rounded">
                        {child.status}
                      </span>
                    )}
                    {child.children && (
                      <span className="text-gray-400">
                        {expandedItems.includes(child.id) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        )}
                      </span>
                    )}
                  </div>
                </div>

                {child.children && expandedItems.includes(child.id) && (
                  <div className="ml-4">
                    {child.children.map((grandchild: NavItem) => (
                      <div
                        key={grandchild.id}
                        className={`flex items-center justify-between py-2 px-3 hover:bg-gray-50 cursor-pointer rounded-md transition-colors`}
                        style={{ paddingLeft: `${12 + paddingLeft + 32}px` }}
                        onClick={() => setSelectedItem(grandchild.id)}
                      >
                        <span className="text-gray-600 text-sm">
                          {grandchild.label}
                        </span>
                        {grandchild.status && (
                          <span className="px-1 py-0.5 text-[10px] bg-green-600 text-white rounded">
                            {grandchild.status}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <>
      <nav className="space-y-1">
        {navigationItems.map((item) => renderNavItem(item))}
      </nav>

      {/* Apply for Crypto Loan Button */}
      <div className="mt-8 p-4">
        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          $ Apply for Crypto Loan
        </button>
      </div>
    </>
  );
};

export default Sidebar2Content;
