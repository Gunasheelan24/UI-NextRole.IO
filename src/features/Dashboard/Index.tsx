import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

const DashboardLayout: React.FC = () => {
  return (
    <main className="grid h-screen grid-cols-[300px_1fr] grid-rows-[70px_1fr]">
      <aside className="row-span-2 border-r">
        <Sidebar />
      </aside>

      <header>
        <Header />
      </header>

      <div></div>
    </main>
  );
};

export default DashboardLayout;
