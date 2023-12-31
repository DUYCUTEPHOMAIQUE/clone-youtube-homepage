import React, { useState } from "react";
import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import { Button } from "../components/Button";
import LogoYouTube from "assets/icons/LogoYouTube";
import { useSidebarContext } from "contexts/SidebarContext";

const PageHeader = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const { toggle } = useSidebarContext();

  return (
    <div className="flex gap-10 lg:gap-20 justify-between mb-6 mx-4 mt-2">
      <div
        className={`flex gap-4 items-center flex-shrink-0 ${
          showSearchBar ? "hidden" : ""
        }`}
      >
        <Button onClick={toggle} variant="ghost" size="icon">
          <Menu />
        </Button>
        <LogoYouTube className="w-20" />
      </div>
      <form
        className={` flex-grow justify-center gap-4 ${
          showSearchBar ? "flex" : "md:flex hidden"
        }`}
      >
        {showSearchBar && (
          <Button
            type="button"
            size="icon"
            variant="ghost"
            className="flex flex-shrink-0"
            onClick={() => {
              setShowSearchBar(false);
            }}
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input
            type="search"
            className="rounded-l-full border border-secondary-border shadow-inner shadow-secondary text-lg w-full py-1 px-4 focus:border-blue-500 outline-none"
            placeholder="Search"
          />
          <Button
            type="button"
            className="rounded-r-full  border border-secondary-border py-1 px-4"
          >
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex flex-shrink-0">
          <Mic />
        </Button>
      </form>
      <div
        className={`flex flex-shrink-0 md:gap-2 ${
          showSearchBar ? "hidden" : ""
        }`}
      >
        <Button
          onClick={() => setShowSearchBar(!showSearchBar)}
          variant="ghost"
          size="icon"
          className="md:hidden"
        >
          <Search />
        </Button>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Mic />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell />
        </Button>
        <Button variant="ghost" size="icon">
          <User />
        </Button>
      </div>
    </div>
  );
};

export default PageHeader;
