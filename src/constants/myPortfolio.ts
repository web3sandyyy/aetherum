export interface PortfolioData {
  month: string;
  digitalAssets: number;
  bankingCash: number;
  investments: number;
}

export const portfolioChartData: PortfolioData[] = [
  { month: "Jan", digitalAssets: 25, bankingCash: 30, investments: 35 },
  { month: "Jan", digitalAssets: 32, bankingCash: 28, investments: 42 },
  { month: "Jan", digitalAssets: 28, bankingCash: 35, investments: 38 },
  { month: "Feb", digitalAssets: 35, bankingCash: 25, investments: 48 },
  { month: "Feb", digitalAssets: 40, bankingCash: 32, investments: 45 },
  { month: "Feb", digitalAssets: 45, bankingCash: 28, investments: 52 },
  { month: "Feb", digitalAssets: 42, bankingCash: 35, investments: 48 },
  { month: "Mar", digitalAssets: 48, bankingCash: 40, investments: 55 },
  { month: "Mar", digitalAssets: 52, bankingCash: 45, investments: 62 },
  { month: "Mar", digitalAssets: 58, bankingCash: 42, investments: 68 },
  { month: "Mar", digitalAssets: 55, bankingCash: 48, investments: 65 },
  { month: "Mar", digitalAssets: 60, bankingCash: 52, investments: 70 },
  { month: "Mar", digitalAssets: 65, bankingCash: 55, investments: 75 },
  { month: "Apr", digitalAssets: 62, bankingCash: 60, investments: 72 },
  { month: "Apr", digitalAssets: 58, bankingCash: 65, investments: 68 },
  { month: "Apr", digitalAssets: 52, bankingCash: 62, investments: 62 },
  { month: "Apr", digitalAssets: 45, bankingCash: 58, investments: 55 },
  { month: "Apr", digitalAssets: 42, bankingCash: 55, investments: 52 },
  { month: "Apr", digitalAssets: 38, bankingCash: 52, investments: 48 },
  { month: "May", digitalAssets: 35, bankingCash: 48, investments: 45 },
  { month: "May", digitalAssets: 32, bankingCash: 45, investments: 42 },
  { month: "May", digitalAssets: 28, bankingCash: 42, investments: 38 },
  { month: "May", digitalAssets: 32, bankingCash: 48, investments: 42 },
  { month: "May", digitalAssets: 38, bankingCash: 52, investments: 48 },
  { month: "May", digitalAssets: 42, bankingCash: 55, investments: 52 },
  { month: "May", digitalAssets: 48, bankingCash: 58, investments: 58 },
  { month: "Jun", digitalAssets: 52, bankingCash: 62, investments: 62 },
  { month: "Jun", digitalAssets: 48, bankingCash: 68, investments: 68 },
  { month: "Jun", digitalAssets: 45, bankingCash: 72, investments: 75 },
  { month: "Jun", digitalAssets: 42, bankingCash: 68, investments: 78 },
];

export const portfolioConfig = {
  digitalAssets: {
    label: "Digital Assets",
    color: "#3b82f6", // blue
  },
  bankingCash: {
    label: "Banking - Cash",
    color: "#f97316", // orange
  },
  investments: {
    label: "Investments",
    color: "#22c55e", // green
  },
};
