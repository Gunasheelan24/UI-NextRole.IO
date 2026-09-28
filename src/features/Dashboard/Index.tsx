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
          width: isSideBarActive === "open" ? 259 : 59,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="fixed left-0 top-0 h-screen overflow-hidden border-r bg-white z-50"
      >
        <Sidebar
          setSideBarStatus={setSideBarActive}
          sideBarState={isSideBarActive}
          setProfilePopupStatus={setProfilePopupStatus}
        />
      </motion.aside>

      {/* <section className="flex-1 flex flex-col">
        <Header
          profilePopupStatus={profilePopupStatus}
          setProfilePopupStatus={setProfilePopupStatus}
          setSideBarActive={setSideBarActive}
        />

        <main className="flex-1 p-4 bg-[#f6f5fa]">
          <Dashboard lightMode="true" />
        </main>
      </section> */}
      <motion.section
        animate={{
          marginLeft: isSideBarActive === "open" ? 259 : 59,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className="flex flex-col min-h-screen w-screen"
      >
        <Header
          profilePopupStatus={profilePopupStatus}
          setProfilePopupStatus={setProfilePopupStatus}
          setSideBarActive={setSideBarActive}
        />

        <main className="flex-1 p-4 bg-[#f6f5fa]">
          <Dashboard lightMode="true" />
        </main>
      </motion.section>
    </main>
  );
};

export default DashboardLayout;
