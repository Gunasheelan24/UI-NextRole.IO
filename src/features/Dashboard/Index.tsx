import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const DashboardLayout: React.FC = () => {
  return (
    <main>
      <header>
        <Header />
      </header>

      <aside className="z-20 bg-[#ffffff]">
        <Sidebar />
      </aside>
    </main>
  );
};

export default DashboardLayout;
