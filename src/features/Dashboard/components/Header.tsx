import DarkMode from "./DarkMode";
import { cn } from "cn";
import React, { useState, type Dispatch, type SetStateAction } from "react";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../../components/ui/avatar";
import { Bell, ChevronDown, UserPen } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { bellIcons } from "../../../assets/png/Index";
import { Card, CardContent, CardHeader } from "../../../components/ui/card";
import type { modeState, PopupState } from "../types/DashboardTypes";
import { Input } from "../../../components/ui/input";

interface IHeader {
  profilePopupStatus: PopupState;
  setProfilePopupStatus: Dispatch<SetStateAction<PopupState>>;
  setSideBarActive: Dispatch<SetStateAction<PopupState>>;
}

const Header: React.FC<IHeader> = ({
  profilePopupStatus,
  setProfilePopupStatus,
  setSideBarActive,
}) => {
  const [darkMode, setDarkMode] = useState<modeState>("light");

  return (
    <main
      onClick={() => {
        setSideBarActive("close");
        setProfilePopupStatus((prev) => (prev == "open" ? "close" : "open"));
      }}
      className="flex md:p-3 py-4 justify-between items-center h-[65px] bg-white shadow-sm relative select-none"
    >
      <section>
        <Input
          placeholder="Search here..."
          type="text"
          id="search"
          className="w-130 bg-white rounded-sm"
        />
      </section>
      <section className="flex items-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          className=" hover:bg-[#e6defa] hidden sm:block"
        >
          <img src={bellIcons} alt="Notifications" className="h-5 w-5" />
        </Button>

        <div className="hidden sm:block">
          <DarkMode setDarkMode={setDarkMode} darkMode={darkMode} />
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

          <ChevronDown
            className={cn(
              "h-4 sm:hidden inline-block  w-4 text-muted-foreground",
            )}
          />
        </div>
      </section>
      <section
        className={cn(
          "absolute sm:hidden top-18 right-2 w-full flex justify-end items-end",
          profilePopupStatus == "open" ? "hidden" : "visble",
        )}
      >
        <Card className="w-70 rounded-md">
          <CardHeader className="flex justify-between mb-3">
            <DarkMode setDarkMode={setDarkMode} darkMode={darkMode} />

            <Button variant="outline">
              <UserPen className="text0 rounded-full" />
              Edit
            </Button>
          </CardHeader>
          <CardContent className="flex flex-col items-center">
            <div className="relative">
              <Avatar className="h-17 w-17 z-0">
                <AvatarImage src="https://images.unsplash.com/photo-1634595477722-7bc68dd410fd?q=80&w=1064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                <AvatarFallback>BG</AvatarFallback>
              </Avatar>
            </div>

            <div className="mb-4">
              <p className="font-medium text-center mt-2 text-md text-muted-foreground">
                Bella Grace
              </p>
              <p className="text-xs text-center text-muted-foreground">
                Software Developer
              </p>
            </div>

            <div className="w-full flex justify-between mb-2">
              <Card className="w-full cursor-pointer">
                <CardContent className="flex justify-between">
                  <section className="text-center">
                    <p className="text-base">10</p>
                    <h1 className="text-[0.7rem] text-muted-foreground font-bold">
                      Resume
                    </h1>
                  </section>
                  <section className="text-center">
                    <p className="text-base">94%</p>
                    <h1 className="text-[0.7rem] text-muted-foreground font-bold">
                      Best Score
                    </h1>
                  </section>
                  <section className="text-center">
                    <p className="text-base">10</p>
                    <h1 className="text-[0.7rem] text-muted-foreground font-bold">
                      Total Edit
                    </h1>
                  </section>
                </CardContent>
              </Card>
            </div>

            <div className="w-full mt-2">
              <Button
                variant="ghost"
                className="w-full bg-[#f2f5f7] cursor-pointer"
              >
                <Bell />
                Notification
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  );
};

export default Header;
