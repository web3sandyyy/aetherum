export interface PortfolioMetric {
  id: string;
  title: string;
  value: string;
  change?: string;
  changeType?: "positive" | "negative";
  chartData: number[];
}

export const portfolioMetrics: PortfolioMetric[] = [
  {
    id: "market-value",
    title: "Market Value",
    value: "$750",
    chartData: [100, 140, 85, 160, 95, 180, 110, 200, 130, 175, 145, 210],
  },
  {
    id: "cost-basis",
    title: "Cost Basis",
    value: "$850",
    change: "+$100",
    changeType: "positive",
    chartData: [120, 90, 150, 110, 170, 95, 190, 130, 210, 115, 185, 160],
  },
  {
    id: "invested-amount",
    title: "Invested Amount",
    value: "$100",
    change: "13.33%",
    changeType: "positive",
    chartData: [80, 110, 70, 135, 85, 160, 100, 180, 120, 200, 105, 230],
  },
  {
    id: "cash",
    title: "Cash",
    value: "$750",
    chartData: [200, 170, 230, 190, 250, 180, 270, 210, 290, 220, 310, 240],
  },
  {
    id: "total-returns",
    title: "Total Returns",
    value: "$100",
    change: "13.33%",
    changeType: "positive",
    chartData: [50, 80, 40, 100, 65, 120, 75, 140, 90, 160, 105, 180],
  },
];
