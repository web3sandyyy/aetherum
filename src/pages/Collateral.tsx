import AssetsSelection from "@/components/AssetsSelection";
import CollateralLoan from "../components/CollateralLoan";
import LoanDetails from "@/components/LoanDetails";
import LoanCalculation from "@/components/LoanCalculation";

const Collateral = () => {
  return (
    <div className="h-full w-full bg-gray-50 p-4 md:p-6 flex flex-col md:gap-6 gap-4">
      <CollateralLoan />
      <AssetsSelection />
      <div className="flex flex-col md:flex-row gap-4 md:gap-6">
        <LoanCalculation />
        <LoanDetails />
      </div>
    </div>
  );
};

export default Collateral;
