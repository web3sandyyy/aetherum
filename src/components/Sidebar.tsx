import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
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
import Sidebar1Content from "./Sidebar1Content";
import Sidebar2Content from "./Sidebar2Content";
import { userDetails } from "@/constants/sidebar";

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
  const location = useLocation();
  const [searchText, setSearchText] = useState("");

  const clearSearch = () => {
    setSearchText("");
  };

  // Show Sidebar2 on home page, Sidebar1 on transactions page
  const shouldShowSidebar2 = location.pathname === "/";

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

  const HeaderDetails = () => (
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
                <p className="text-xs text-gray-500 mt-1">{userDetails.role}</p>
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
  );

  const SidebarContent = () => (
    <div className="h-full overflow-y-auto hide-scrollbar">
      {/* Mobile Header Section */}
      {isMobile && (
        <>
          <div className="sticky bg-white top-0 z-10 w-full flex justify-between items-center p-4 border-b border-gray-200">
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
          <HeaderDetails />
        </>
      )}
      {shouldShowSidebar2 ? <Sidebar2Content /> : <Sidebar1Content />}
    </div>
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
      className="h-[calc(100dvh-59px)] sticky top-[59px] z-10 bg-white border-r border-gray-200 overflow-hidden"
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
