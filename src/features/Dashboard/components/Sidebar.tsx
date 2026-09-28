import React, { type Dispatch, type SetStateAction } from "react";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
import { cn } from "cn";
import {
  BadgeCheck,
  FilePlusCorner,
  LayoutDashboard,
  ListSortDescending,
  LogOut,
  Mails,
  Menu,
  PanelRightOpen,
  Plus,
  Settings,
} from "lucide-react";
import type { PopupState } from "../types/DashboardTypes";
export interface ISideBar {
  setSideBarStatus: Dispatch<SetStateAction<PopupState>>;
  setProfilePopupStatus: Dispatch<SetStateAction<PopupState>>;
  sideBarState: string;
}

const Sidebar: React.FC<ISideBar> = ({
  setSideBarStatus,
  sideBarState,
  setProfilePopupStatus,
}) => {
  return (
    <main className={cn("relative h-screen")}>
      <section className="flex items-center justify-between w-full pt-1 px-3 h-[81px]">
        <motion.div
          animate={{
            opacity: sideBarState === "open" ? 1 : 0,
          }}
          transition={{
            duration: 0.15,
          }}
          className="overflow-hidden"
        >
          <section className="flex flex-col items-start">
            <div className="flex items-center gap-1">
              <p className="md:text-2xl text-xl font-bold tracking-tight whitespace-nowrap">
                <span>Next</span>
                <span className="text-primary">Role</span>
              </p>

              <motion.div
                className="h-4 w-4 mt-1 rounded-full bg-primary"
                animate={{
                  scale: [1, 1.25, 1],
                  opacity: [0.7, 1, 0.7],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            <p className="text-[0.8rem] text-muted-foreground whitespace-nowrap">
              Build Today. Land Tomorrow.
            </p>
          </section>
        </motion.div>
        {sideBarState == "open" ? (
          <PanelRightOpen
            onClick={(event) => {
              event.stopPropagation();
              setSideBarStatus("close");
            }}
            className="text-[#897ad4] hover:text-[#5a41d5] cursor-pointer"
          />
        ) : (
          <Menu
            size={"20px"}
            onClick={() => {
              setProfilePopupStatus("open");
              setSideBarStatus("open");
            }}
            className="ms-2 hover:text-[#5a41d5] cursor-pointer absolute"
          />
        )}
      </section>

      <section className="absolute mt-5 px-3 font-inter w-full">
        <div>
          <h1
            className={cn(
              "text-sm text-[#c4c2d6]",
              sideBarState == "open" ? "visible" : "hidden",
            )}
          >
            MAIN
          </h1>

          <Button
            variant="ghost"
            className="justify-start w-full mt-1 cursor-pointer bg-[#f5f5f5]"
          >
            <LayoutDashboard />
            <p
              className={cn("", sideBarState == "open" ? "visible" : "hidden")}
            >
              Overview
            </p>
          </Button>
        </div>

        <div>
          <h1
            className={cn(
              "text-sm text-[#c4c2d6]",
              sideBarState == "open" ? "visible" : "hidden",
            )}
          >
            Resume
          </h1>

          <Button
            variant="ghost"
            className="justify-start w-full mt-1 cursor-pointer"
          >
            <FilePlusCorner />
            <p
              className={cn("", sideBarState == "open" ? "visible" : "hidden")}
            >
              Create New Resume
            </p>
          </Button>

          <Button
            variant="ghost"
            className="justify-start w-full mt-1 hover:bg-transparent"
          >
            <ListSortDescending />
            <p
              className={cn("", sideBarState == "open" ? "visible" : "hidden")}
            >
              Your Resume
            </p>
          </Button>

          <ol
            className={cn(
              "pl-4 flex flex-col gap-1 w-full mt-2",
              sideBarState == "open" ? "visible" : "hidden",
            )}
          >
            <li className="flex items-center gap-2 relative">
              <Button
                variant="ghost"
                className="w-full justify-start bg-[#afadbe]"
              >
                <div className="h-2 w-2 rounded-full bg-[#9385d7]" />
                guna_frontend_zoho
              </Button>
            </li>

            <li className="flex items-center gap-2 relative">
              <Button variant="ghost" className="w-full justify-start">
                <div className="h-2 w-2 rounded-full bg-[#c4c2d6]" />
                guna_backend_zoho
              </Button>
            </li>

            <li className="flex items-center gap-2 relative text-muted-foreground border-dotted border-3 rounded-md">
              <Button variant="ghost" className="w-full justify-start">
                <Plus className="h-1 w-1" />
                Add resume
              </Button>
            </li>
          </ol>
        </div>

        <div>
          <h1
            className={cn(
              "text-sm text-[#c4c2d6]",
              sideBarState == "open" ? "visible" : "hidden",
            )}
          >
            Tools
          </h1>

          <Button
            variant="ghost"
            className="justify-start w-full mt-1 cursor-pointer"
          >
            <BadgeCheck />
            <p
              className={cn("", sideBarState == "open" ? "visible" : "hidden")}
            >
              ATS Score Check
            </p>
          </Button>
          <Button
            variant="ghost"
            className="justify-start w-full mt-1 cursor-pointer"
          >
            <Mails />
            <p
              className={cn("", sideBarState == "open" ? "visible" : "hidden")}
            >
              Cover Letter
            </p>
          </Button>
        </div>
      </section>

      <section className="absolute w-full bottom-3 px-2 border-t-1 pt-5">
        <Button className="w-full mb-2 cursor-pointer" variant="outline">
          <Settings />
          <p className={cn("", sideBarState == "open" ? "visible" : "hidden")}>
            Setting
          </p>
        </Button>
        <Button
          variant="outline"
          className="w-full border-0 text-red-9502 font-medium cursor-pointer"
        >
          <LogOut />
          <p className={cn("", sideBarState == "open" ? "visible" : "hidden")}>
            Log Out
          </p>
        </Button>
      </section>
    </main>
  );
};

export default Sidebar;
