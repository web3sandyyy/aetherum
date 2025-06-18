import {
  Wallet,
  Building2,
  TrendingUp,
  Clock,
  FileText,
  Eye,
} from "lucide-react";

export const SidbarCards1 = [
  {
    image: "/images/sidebar/eth.svg",
    name: "Coinbase",
    isConnected: false,
  },
  {
    image: "/images/sidebar/metamask.svg",
    name: "Metamask",
    isConnected: false,
  },
];

export const SidbarCards2 = [
  {
    image: "/images/sidebar/americanBank.svg",
    name: "American Card",
    isConnected: true,
  },
];

export const userDetails = {
  profile: "/images/pfp.jpeg",
  name: "John Doe",
  role: "Frontend Developer",
};

export interface NavItem {
  id: string;
  label: string;
  icon?: any;
  hasDropdown?: boolean;
  isExpanded?: boolean;
  status?: "Coming Soon";
  children?: NavItem[];
}

export const navigationItems: NavItem[] = [
  {
    id: "digital-assets",
    label: "Digital Assets",
    icon: Wallet,
    hasDropdown: true,
    children: [
      { id: "coinbase", label: "Coinbase" },
      { id: "metamask", label: "MetaMask" },
    ],
  },
  {
    id: "banks",
    label: "Banks",
    icon: Building2,
    hasDropdown: true,
    children: [
      { id: "american-bank", label: "American Bank" },
      { id: "chase", label: "Chase" },
      {
        id: "bank-of-america",
        label: "Bank of America",
        children: [
          { id: "checking", label: "Checking", status: "Coming Soon" },
          { id: "savings", label: "Savings", status: "Coming Soon" },
          { id: "loans", label: "Loans", status: "Coming Soon" },
        ],
      },
    ],
  },
  {
    id: "investments",
    label: "Investments",
    icon: TrendingUp,
    hasDropdown: true,
    children: [
      {
        id: "charles-schwab",
        label: "Charles Schwab",
        children: [
          { id: "stocks", label: "Stocks", status: "Coming Soon" },
          { id: "bonds", label: "Bonds", status: "Coming Soon" },
        ],
      },
      { id: "robinhood", label: "Robinhood" },
      { id: "merrill-lynch", label: "Merrill Lynch" },
      { id: "e-trade", label: "E-Trade" },
    ],
  },
  {
    id: "coming-soon",
    label: "Coming Soon Features",
    icon: Clock,
    hasDropdown: true,
    children: [
      { id: "payments-wallet", label: "Payments / Wallet Transfers" },
      {
        id: "real-world-asset",
        label: "Real World Asset (RWA) Tokenization",
      },
      { id: "trading", label: "Trading" },
      { id: "tax", label: "Tax" },
      { id: "claims-process", label: "Claims Process" },
      { id: "fraud-detection", label: "Fraud Detection" },
    ],
  },
  {
    id: "watchlist",
    label: "Watchlist",
    icon: Eye,
  },
  {
    id: "news",
    label: "News",
    icon: FileText,
  },
];
