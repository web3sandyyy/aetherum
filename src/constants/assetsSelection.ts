// Assets data for the selection component
export const ASSETS_DATA = [
  {
    id: "bnb",
    token: "BNB",
    symbol: "BNB",
    lastPrice: 41263.0,
    change24h: 35.74,
    marketCap: "784,393M",
    icon: "🟡", // Yellow circle
    checked: false,
  },
  {
    id: "bitcoin",
    token: "Bitcoin",
    symbol: "BTC",
    lastPrice: 41263.0,
    change24h: 35.74,
    marketCap: "784,393M",
    icon: "🟠", // Orange circle
    checked: false,
  },
  {
    id: "ethereum",
    token: "Ethereum",
    symbol: "ETH",
    lastPrice: 41263.0,
    change24h: 35.74,
    marketCap: "784,393M",
    icon: "🔵", // Blue circle
    checked: true,
  },
  {
    id: "terra",
    token: "Terra",
    symbol: "LUNA",
    lastPrice: 41263.0,
    change24h: 35.74,
    marketCap: "784,393M",
    icon: "⚫", // Black circle
    checked: false,
  },
  {
    id: "cardano",
    token: "Cardano",
    symbol: "ADA",
    lastPrice: 41263.0,
    change24h: 35.74,
    marketCap: "784,393M",
    icon: "🔵", // Blue circle
    checked: false,
  },
];

// Filter options
export const FILTER_OPTIONS = [
  { value: "all", label: "All" },
  { value: "crypto", label: "Crypto" },
  { value: "cash", label: "Cash" },
];
