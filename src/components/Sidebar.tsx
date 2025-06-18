import { useState } from "react";
import { motion } from "framer-motion";
import {
  RefreshCcw,
  Ellipsis,
  RotateCcw,
  Unplug,
  Plus,
  X,
  Search,
  Bell,
  CircleX,
  MessageSquare,
  ChevronDown,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const SidbarCards1 = [
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

const SidbarCards2 = [
  {
    image: "/images/sidebar/americanBank.svg",
    name: "American Card",
    isConnected: true,
  },
];

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
    <div className="bg-gray-600 p-2 rounded-xl px-3 flex items-center w-full h-full gap-2">
      <img src={image} alt={name} className="w-8 h-8" />
      <div className="flex-grow">
        <p className=" font-medium text-white">{name}</p>
        <p className="text-sm font-medium text-gray-200">
          {isConnected ? "Connected" : "Not connected"}
        </p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Ellipsis className="w-4 h-4 text-gray-200 cursor-pointer hover:text-white" />
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

interface SidebarProps {
  isMobile?: boolean;
  onClose?: () => void;
  isOpen?: boolean;
}

const Sidebar = ({
  isMobile = false,
  onClose,
  isOpen = true,
}: SidebarProps) => {
  const [isRotating, setIsRotating] = useState(false);
  const [searchText, setSearchText] = useState("");

  const userDetails = {
    profile: "/images/pfp.jpeg",
    name: "John Doe",
    role: "Frontend Developer",
  };

  const handleSync = () => {
    setIsRotating(true);
    setTimeout(() => {
      setIsRotating(false);
    }, 500);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  const sidebarVariants = {
    hidden: {
      x: "-100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
    exit: {
      x: "-100%",
      opacity: 0,
      transition: {
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      },
    },
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const SidebarContent = () => (
    <>
      {/* Mobile Header Section */}
      {isMobile && (
        <>
          <div className="w-full flex justify-between items-center p-4 border-b border-gray-200">
            <div className="flex items-center gap-4">
              <img
                src="/images/logo/logo-black.svg"
                alt="logo"
                className="h-6 w-auto"
              />
            </div>
            <button onClick={onClose}>
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Mobile Header Tools */}
          <div className="p-4 border-b border-gray-200">
            <div className="flex flex-col gap-2">
              <div className="flex items-center border border-gray-200 rounded-md px-3">
                <Search className="h-6 w-6" />
                <input
                  type="text"
                  placeholder="Search"
                  value={searchText}
                  onChange={(e) => setSearchText(e.target.value)}
                  className="w-full p-2 focus:outline-none"
                />
                <CircleX
                  className={`h-6 w-6 cursor-pointer hover:text-gray-600 ${
                    searchText ? "opacity-100" : "opacity-0"
                  }`}
                  onClick={clearSearch}
                />
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 rounded-md p-2 w-full">
                    <img
                      src={userDetails.profile}
                      alt="avatar"
                      className="h-8 w-8 rounded-full"
                    />
                    <div>
                      <p className="text-sm font-medium">{userDetails.name}</p>
                      <p className="text-xs text-gray-500 mt-1">
                        {userDetails.role}
                      </p>
                    </div>
                    <ChevronDown className="h-6 w-6 ml-auto" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem className="cursor-pointer">
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Settings</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem className="cursor-pointer">
                    <MessageSquare className="mr-2 h-4 w-4" />
                    <span>Support</span>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem className="cursor-pointer text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <div className="flex items-center gap-4">
                <MessageSquare className="h-10 w-10 p-2 border border-gray-200 rounded-md" />
                <Bell className="h-6 w-6" />
              </div>
            </div>
          </div>
        </>
      )}

      {/* Sidebar Content */}
      <div
        className={`p-4 ${
          isMobile ? "overflow-y-auto h-[calc(100%-200px)]" : ""
        }`}
      >
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
                  isRotating ? "rotate-180" : ""
                }`}
              />
              <p className="text-blue-600">Sync</p>
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
    </>
  );

  if (isMobile) {
    return (
      <>
        <motion.div
          className="absolute inset-0 bg-black/30"
          variants={overlayVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        />
        <motion.div
          className="fixed left-0 top-0 h-full w-80 bg-white shadow-xl z-10"
          variants={sidebarVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <SidebarContent />
        </motion.div>
      </>
    );
  }

  return (
    <motion.div
      className="min-h-full bg-white border-r border-gray-200 overflow-hidden"
      initial={{
        width: isOpen ? 300 : 0,
        x: isOpen ? 0 : -300,
      }}
      animate={{
        width: isOpen ? 300 : 0,
        x: isOpen ? 0 : -300,
      }}
      transition={{
        type: "spring" as const,
        stiffness: 300,
        damping: 30,
      }}
    >
      <div className="w-[300px]">
        <SidebarContent />
      </div>
    </motion.div>
  );
};

export default Sidebar;
