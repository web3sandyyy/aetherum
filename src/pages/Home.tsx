import MyPortfolio from "../components/MyPortfolio";
import PortfolioTracker from "../components/PortfolioTracker";

function Home() {
  return (
    <div className="h-full w-full bg-gray-50 p-6 flex flex-col gap-6">
      <PortfolioTracker />
      <MyPortfolio />
    </div>
  );
}

export default Home;
