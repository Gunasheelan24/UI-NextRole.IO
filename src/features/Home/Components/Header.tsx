import React from "react";
import { motion } from "framer-motion";
import { Button } from "../../../components/ui/button";

const Header: React.FC = () => {
  const heroLink = [
    { label: "Features" },
    { label: "How it works" },
    { label: "Pricing" },
  ];
  return (
    <main className="flex p-3 bg-[#fbfbfd] fixed z-50 w-full">
      <div className="pl-4 pt-1">
        <section className="flex flex-col items-center">
          <div className="flex items-center gap-1">
            <p className="text-2xl font-bold tracking-tight">
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

      <section className="flex-1 flex items-center justify-center">
        <ul className="flex gap-7 text-muted-foreground">
          {heroLink.map(({ label }, index) => (
            <li key={index}>{label}</li>
          ))}
        </ul>
      </section>

      <section className="flex gap-2 items-center justify-end">
        <Button
          variant="outline"
          className="px-5 py-4 text-muted-foreground font-normal cursor-pointer rounded-xl"
        >
          Log in
        </Button>
        <Button
          variant="default"
          className="bg-black font-normal text-md px-5 py-4 rounded-xl cursor-pointer"
        >
          Try for free
        </Button>
      </section>
    </main>
  );
};

export default Header;
