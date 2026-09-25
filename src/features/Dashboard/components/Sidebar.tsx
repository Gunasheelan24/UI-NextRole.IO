import React from "react";
import { Button } from "../../../components/ui/button";
import { LogOut, Settings } from "lucide-react";

const Sidebar: React.FC = () => {
  return (
    <main className="relative h-screen w-72 border-r">
      <section className="absolute"></section>
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
