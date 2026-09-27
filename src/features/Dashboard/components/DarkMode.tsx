import { lightIcons, moonIcons } from "../../../assets/png/Index";
import React, { type Dispatch, type SetStateAction } from "react";
import type { modeState } from "../types/DashboardTypes";

interface IDarkMode {
  setDarkMode: Dispatch<SetStateAction<modeState>>;
  darkMode: modeState;
}

const DarkMode: React.FC<IDarkMode> = ({ setDarkMode, darkMode }) => {
  return (
    <div
      onClick={() =>
        setDarkMode((light) => (light == "light" ? "dark" : "light"))
      }
      className="relative flex items-center h-8 w-18 rounded-full bg-muted p-1 border"
    >
      <div
        className={`absolute h-6 w-7 rounded-full bg-background shadow-sm transition-all duration-300 ${darkMode === "light" ? "left-[0.35rem]" : "left-[2.3rem]"}`}
      />

      <button className="flex-1 z-10 flex justify-center items-center">
        <img
          src={lightIcons}
          alt="Light Mode"
          className="cursor-pointer h-4 w-4"
        />
      </button>

      <button className="flex-1 z-10 flex justify-center items-center">
        <img
          src={moonIcons}
          alt="Dark Mode"
          className="cursor-pointer h-4 w-4"
        />
      </button>
    </div>
  );
};

export default DarkMode;
