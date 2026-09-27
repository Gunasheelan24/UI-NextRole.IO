import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { motion } from "framer-motion";
import type { PopupState } from "./types/DashboardTypes";
import Dashboard from "./components/Dashboard";

const DashboardLayout: React.FC = () => {
  const [isSideBarActive, setSideBarActive] = useState<PopupState>("open");
  const [profilePopupStatus, setProfilePopupStatus] =
    useState<PopupState>("open");

  return (
    <main className="flex h-screen">
      <motion.aside
        animate={{
          width: isSideBarActive === "open" ? 260 : 60,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="overflow-hidden border-r shrink-0"
      >
        <Sidebar
          setSideBarStatus={setSideBarActive}
          sideBarState={isSideBarActive}
          setProfilePopupStatus={setProfilePopupStatus}
        />
      </motion.aside>

      <section className="flex-1 flex flex-col">
        <Header
          profilePopupStatus={profilePopupStatus}
          setProfilePopupStatus={setProfilePopupStatus}
          setSideBarActive={setSideBarActive}
        />

        <main className="flex-1 p-4 bg-[#f6f5fa]">
          <Dashboard lightMode="true" />
        </main>
      </section>
    </main>
  );
};

export default DashboardLayout;
