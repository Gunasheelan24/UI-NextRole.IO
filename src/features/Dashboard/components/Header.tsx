import { bellIcons, darkMode } from "../../../assets/png/Index";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar";
import React from "react";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  return (
    <main className="flex md:p-3 py-4 bg-[#fbfbfd] justify-between fixed z-50 w-full top-0">
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
      <section></section>
      <section className="flex gap-3 items-center">
        <Avatar className="h-9 w-9">
          <AvatarImage src={darkMode} className="p-1"></AvatarImage>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="h-9 w-9">
          <AvatarImage src={bellIcons} className="p-1"></AvatarImage>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar className="h-12 w-12">
          <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
    </main>
  );
};

export default Header;
