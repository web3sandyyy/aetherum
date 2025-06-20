import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Home from "./pages/Home";
import Transactions from "./pages/Transactions";
import Collateral from "./pages/Collateral";
import "./App.css";
import Thankyou from "./pages/Thankyou";
import ApproveLoan from "./pages/ApproveLoan";
import ActiveLoan from "./pages/ActiveLoan";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileSidebar = () => {
    setIsMobileSidebarOpen(!isMobileSidebarOpen);
  };

  return (
    <Router>
      <div className="min-h-[100dvh] h-full w-full bg-white">
        <Header
          onToggleSidebar={toggleSidebar}
          onToggleMobileSidebar={toggleMobileSidebar}
        />

        <AnimatePresence>
          {isMobileSidebarOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <Sidebar isMobile={true} onClose={toggleMobileSidebar} />
            </div>
          )}
        </AnimatePresence>

        <div className="flex min-h-[calc(100dvh-59px)] h-full">
          {/* Desktop Sidebar - Always rendered but width animated */}
          <div className="hidden lg:block">
            <Sidebar isOpen={isSidebarOpen} />
          </div>

          <div className="flex-1 overflow-hidden">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/collateral" element={<Collateral />} />
              <Route path="/approve-loan" element={<ApproveLoan />} />
              <Route path="/active-loan" element={<ActiveLoan />} />
              <Route path="/thankyou" element={<Thankyou />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
