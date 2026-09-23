import React, { useState } from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { bellIcons, lightIcons, moonIcons } from "../../../assets/png/Index";

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState<string>("light");

  return (
    <main className="flex md:p-3 py-4 justify-between fixed z-50 w-full top-0 bg-[#fefefe] shadow">
      <section>
        <div className="pl-4 pt-1">
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
      </section>
      <section></section>
      <section className="flex items-center gap-4">
        <Button variant="ghost" size="icon" className=" hover:bg-[#e6defa]">
          <img src={bellIcons} alt="Notifications" className="h-5 w-5" />
        </Button>

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
            <img src={lightIcons} alt="Light Mode" className="h-4 w-4" />
          </button>

          <button className="flex-1 z-10 flex justify-center items-center">
            <img src={moonIcons} alt="Dark Mode" className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center gap-3 rounded-xl px-3 py-2 hover:bg-accent cursor-pointer">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://images.unsplash.com/photo-1634595477722-7bc68dd410fd?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
            <AvatarFallback>BG</AvatarFallback>
          </Avatar>

          <div className="flex flex-col">
            <span className="font-medium text-sm text-foreground">
              Bella Grace
            </span>
            <span className="text-xs text-muted-foreground">
              Software Developer
            </span>
          </div>

          <ChevronDown className="h-4 w-4 text-muted-foreground" />
        </div>
      </section>
    </main>
  );
};

export default Header;
