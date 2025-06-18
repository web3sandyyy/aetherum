import { Upload, Link2 } from "lucide-react";
import AutoImportTable from "@/components/AutoImportTable";
import AutoImport from "@/components/AutoImport";

function Home() {
  const isImport = true;

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Import file selected:", file.name);
    }
  };

  return (
    <div className="h-full w-full bg-gray-50">
      <div className="p-4 md:p-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 md:mb-8 gap-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <img
                src="/images/sidebar/eth.svg"
                alt="coinbase"
                className="w-8 h-8"
              />
              <h1 className="text-xl md:text-2xl font-bold text-gray-900">
                Coinbase
              </h1>
            </div>
            <p className="text-gray-400 text-sm md:text-base">
              Import all available transactions and holdings.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative">
              <input
                type="file"
                accept="image/*,.csv,.xlsx,.json"
                onChange={handleFileImport}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />
              <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
                <Upload className="w-4 h-4" />
                Import File
              </button>
            </div>

            {!isImport && (
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto">
                <Link2 className="w-4 h-4" />
                Connect API
              </button>
            )}

            {isImport && (
              <button className="flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors w-full sm:w-auto">
                <Link2 className="w-4 h-4" />
                Manage API
              </button>
            )}
            {isImport && (
              <button className="flex items-center justify-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto">
                Complete Setup
              </button>
            )}
          </div>
        </div>

        {isImport ? <AutoImportTable /> : <AutoImport />}
      </div>
    </div>
  );
}

export default Home;
