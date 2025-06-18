import { useState } from "react";
import {
  Search,
  Bell,
  PanelRight,
  CircleX,
  MessageSquare,
  ChevronDown,
  User,
  Settings,
  LogOut,
  Menu,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  onToggleSidebar: () => void;
  onToggleMobileSidebar: () => void;
}

const Header = ({ onToggleSidebar, onToggleMobileSidebar }: HeaderProps) => {
  const [searchText, setSearchText] = useState("");

  const userDetails = {
    profile: "/images/pfp.jpeg",
    name: "John Doe",
    role: "Frontend Developer",
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <div className="w-full flex justify-between items-center p-2 border-b border-gray-200">
      {/* Desktop Header */}
      <div className="hidden lg:flex items-center gap-4">
        <PanelRight
          className="h-6 w-6 cursor-pointer hover:text-gray-600 text-gray-400"
          onClick={onToggleSidebar}
        />
        <img
          src="/images/logo/logo-black.svg"
          alt="logo"
          className="h-7 w-auto"
        />
      </div>

      {/* Mobile Header */}
      <div className="flex lg:hidden items-center gap-4 p-1">
        <Menu
          className="h-6 w-6 cursor-pointer hover:text-gray-600"
          onClick={onToggleMobileSidebar}
        />
        <img
          src="/images/logo/logo-black.svg"
          alt="logo"
          className="h-7 w-auto"
        />
      </div>

      {/* Desktop Header Tools */}
      <div className="hidden lg:flex items-center gap-4">
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
        <MessageSquare className="h-10 w-10 p-2 border border-gray-200 rounded-md" />
        <Bell className="h-7 w-7" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <div className="flex items-center gap-2 ml-4 cursor-pointer hover:bg-gray-50 rounded-md">
              <img
                src={userDetails.profile}
                alt="avatar"
                className="h-8 w-8 rounded-full"
              />
              <div>
                <p className="text-sm font-medium">{userDetails.name}</p>
                <p className="text-xs text-gray-500 mt-1">{userDetails.role}</p>
              </div>
              <ChevronDown className="h-6 w-6" />
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
      </div>

      {/* Mobile - Empty div to maintain spacing */}
      <div className="lg:hidden"></div>
    </div>
  );
};

export default Header;
