import MyPortfolio from "../components/MyPortfolio";
import PortfolioTracker from "../components/PortfolioTracker";
import WalletScore from "../components/WalletScore";

function Home() {
  return (
    <div className="h-full w-full bg-gray-50 p-6 flex flex-col gap-6">
      <PortfolioTracker />
      <div className="flex flex-col md:flex-row gap-6">
        <MyPortfolio />
        <WalletScore />
      </div>
    </div>
  );
}

export default Home;
