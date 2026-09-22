import { bellIcons } from "../../../assets/png/Index";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar";
import React from "react";

const Header: React.FC = () => {
  return (
    <main className="flex items-center justify-between h-[53.195px] bg-[#fbfbfd]">
      <section></section>
      <section></section>
      <section className="flex gap-3">
        <Avatar>
          <AvatarImage src={bellIcons} className="p-1"></AvatarImage>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png"></AvatarImage>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </section>
    </main>
  );
};

export default Header;
