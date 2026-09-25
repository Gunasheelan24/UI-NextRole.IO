import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { cn } from "cn";

const DashboardLayout: React.FC = () => {
  const [isSideBarActive, setSideBarActive] = useState<boolean>(true);

  return (
    <main
      className={cn(
        "grid h-screen grid-rows-[1fr_1fr]",
        isSideBarActive ? "grid-cols-[260px_1fr]" : "grid-cols-[1fr]",
      )}
    >
      <aside className={cn("", isSideBarActive ? "row-span-2" : "hidden")}>
        <Sidebar setSideBarActive={setSideBarActive} />
      </aside>

      <header>
        <Header />
      </header>

      <div></div>
    </main>
  );
};

export default DashboardLayout;
