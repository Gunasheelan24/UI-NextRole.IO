import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import { motion } from "framer-motion";
import type { PopupState } from "./types/DashboardTypes";
import Stepper from "./components/Stepper";

const DashboardLayout: React.FC = () => {
  const [isSideBarActive, setSideBarActive] = useState<PopupState>("close");
  const [profilePopupStatus, setProfilePopupStatus] =
    useState<PopupState>("open");
  const [pageStep, setPageSteps] = useState<number>(0);

  return (
    <main className="flex h-screen">
      <motion.aside
        animate={{
          width: isSideBarActive === "close" ? 59 : 259,
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

        {/* bg-[#f6f5fa] */}
        <main className="flex-1 p-4">
          <Stepper />
        </main>
      </motion.section>
    </main>
  );
};

export default DashboardLayout;
