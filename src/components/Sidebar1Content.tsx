import { useState } from "react";
import { RefreshCcw, Ellipsis, RotateCcw, Unplug, Plus } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidbarCards1, SidbarCards2 } from "@/constants/sidebar";

const ConnectionCard = ({
  image,
  name,
  isConnected,
}: {
  image: string;
  name: string;
  isConnected: boolean;
}) => {
  return (
    <div className="bg-gray-50 p-2 rounded-xl px-3 flex items-center w-full h-full gap-2">
      <img src={image} alt={name} className="w-8 h-8" />
      <div className="flex-grow">
        <p className=" font-medium ">{name}</p>
        <p className="text-sm  text-gray-400">
          {isConnected ? "Connected" : "Not connected"}
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Ellipsis className="w-4 h-4 text-gray-600 cursor-pointer hover:text-white" />
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-40">
          <DropdownMenuItem className="cursor-pointer">
            <RotateCcw className="mr-2 h-4 w-4" />
            <span>Reconnect</span>
          </DropdownMenuItem>
          <DropdownMenuItem className="cursor-pointer text-red-600">
            <Unplug className="mr-2 h-4 w-4" />
            <span>Disconnect</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

const Sidebar1Content = () => {
  const [isRotating, setIsRotating] = useState(false);

  const handleSync = () => {
    console.log("Syncing...");
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  return (
    <div className="p-4">
      <div>
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">Your accounts</p>
          </div>
          <div
            className="flex gap-2 items-center cursor-pointer"
            onClick={handleSync}
          >
            <RefreshCcw
              className={`h-4 w-4 text-blue-600 transition-transform duration-500 ${
                isRotating ? "rotate-360" : "rotate-0"
              }`}
            />
            <p className="text-blue-600 text-sm">Sync</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {SidbarCards1.map((card) => (
            <ConnectionCard key={card.name} {...card} />
          ))}
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-lg font-semibold">Linked Bank Accounts</p>
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          {SidbarCards2.map((card) => (
            <ConnectionCard key={card.name} {...card} />
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 flex flex-col items-center bg-gray-50 rounded-xl">
        <div className="w-10 h-10 mb-2 p-2 rounded-full flex items-center justify-center border border-dashed border-gray-400">
          <Plus className="w-6 h-6" />
        </div>
        <p className="text-sm font-medium text-gray-400">Add New Account</p>
      </div>
    </div>
  );
};

export default Sidebar1Content;
