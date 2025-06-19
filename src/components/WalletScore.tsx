import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const WalletScore = ({ css }: { css?: string }) => {
  const score = 80;
  const maxScore = 100;
  const percentage = (score / maxScore) * 100;

  // Data for the pie chart (semicircle)
  const data = [
    { name: "progress", value: percentage },
    { name: "remaining", value: 100 - percentage },
  ];

  // Colors for the progress indicator
  const COLORS = ["#3b82f6", "#374151"]; // Blue for progress, dark gray for remaining

  return (
    <div className={`bg-gray-900 rounded-lg p-4 sm:p-6 text-white w-full flex flex-col min-h-0 ${css}`}>
      {/* Header */}
      <div className="mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-semibold mb-1">
          Aetherum A<sup className="text-xs sm:text-sm">2</sup> Wallet
        </h2>
        <h3 className="text-lg sm:text-xl font-semibold">Score</h3>
      </div>

      {/* Progress Circle using Recharts */}
      <div className="flex justify-center items-center flex-grow">
        <div className="relative w-full h-20 sm:h-28 overflow-hidden">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={0}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>

          {/* Score Text Overlay */}
          <div className="absolute inset-0 flex items-end justify-center pb-1 sm:pb-2">
            <div className="text-center">
              <span className="text-2xl sm:text-4xl font-bold text-white">
                {score}
              </span>
              <span className="text-xs sm:text-sm text-gray-400 ml-1">
                / {maxScore}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalletScore;
