import {
  Search,
  Bell,
  PanelRight,
  CircleX,
  MessageSquare,
  ChevronDown,
} from "lucide-react";

const Header = () => {
  const userDetails = {
    profile: "/images/pfp.jpeg",
    name: "John Doe",
    role: "Frontend Developer",
  };

  return (
    <div className="w-full flex justify-between items-center p-2 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <PanelRight className="h-6 w-6" />
        <img
          src="/images/logo/logo-black.svg"
          alt="logo"
          className="h-7 w-auto"
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center border border-gray-200 rounded-md px-3">
          <Search className="h-6 w-6" />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 focus:outline-none"
          />
          <CircleX className="h-6 w-6" />
        </div>
        <MessageSquare className="h-10 w-10 p-2 border border-gray-200 rounded-md" />
        <Bell className="h-8 w-8" />

        <div className="flex items-center gap-2 ml-4">
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
      </div>
    </div>
  );
};

export default Header;
