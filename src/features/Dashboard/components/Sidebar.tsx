import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";
import {
  BadgeCheck,
  FilePlusCorner,
  LayoutDashboard,
  ListSortDescending,
  LogOut,
  Mails,
  PanelRightOpen,
  Plus,
  Settings,
} from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <main className="relative h-full w-full border-r">
      <section className="flex items-center justify-between w-full border-b pt-1 px-3 h-[81px]">
        <div>
          <section className="flex flex-col items-center">
            <div className="flex items-center gap-1">
              <p className="md:text-2xl text-xl font-bold tracking-tight">
                <span>Next</span>
                <span className="text-primary">Role</span>
              </p>

              {/* Premium Accent Dot */}
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

            <p className="text-[0.8rem] text-muted-foreground -mt-0.5">
              Build Today. Land Tomorrow.
            </p>
          </section>
        </div>
        <PanelRightOpen className="text-[#897ad4] hover:text-[#5a41d5] cursor-pointer" />
      </section>

      <section className="absolute mt-5 px-3 font-inter w-full">
        <div>
          <h1 className="text-sm text-[#c4c2d6]">MAIN</h1>

          <Button
            variant="ghost"
            className="justify-start w-full mt-1 cursor-pointer"
          >
            <LayoutDashboard />
            Overview
          </Button>
        </div>

        <div>
          <h1 className="text-sm text-[#c4c2d6] mt-4">Resume</h1>

          <Button
            variant="ghost"
            className="justify-start w-full mt-1 cursor-pointer"
          >
            <FilePlusCorner />
            Create New Resume
          </Button>

          <Button
            variant="ghost"
            className="justify-start w-full mt-1 hover:bg-transparent"
          >
            <ListSortDescending />
            Your Resume
          </Button>

          <ol className="pl-4 flex flex-col gap-1 w-full mt-2">
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
          <h1 className="text-sm text-[#c4c2d6] mt-3">Tools</h1>

          <Button
            variant="ghost"
            className="justify-start w-full mt-1 cursor-pointer"
          >
            <BadgeCheck />
            ATS Score Check
          </Button>
          <Button
            variant="ghost"
            className="justify-start w-full mt-1 cursor-pointer"
          >
            <Mails />
            Cover Letter
          </Button>
        </div>
      </section>

      <section className="absolute w-full bottom-3 px-2 border-t-1 pt-5">
        <Button className="w-full mb-2 cursor-pointer" variant="outline">
          <Settings />
          Setting
        </Button>
        <Button
          variant="outline"
          className="w-full border-0 text-red-900 font-medium cursor-pointer"
        >
          <LogOut />
          Log Out
        </Button>
      </section>
    </main>
  );
};

export default Sidebar;
