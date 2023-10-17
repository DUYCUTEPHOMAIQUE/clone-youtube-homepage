// @ts-nocheck
import React, { Children } from "react";
import { buttonStyles } from "./Button";
import { twMerge } from "tailwind-merge";
import { Clapperboard, Home, Library, Repeat } from "lucide-react";

export const SideBar = () => {
  return (
    <>
      <aside className="sticky top-0 overflow-y-auto pb-4 lg:hidden flex-col ml-1 ">
        <SmallBarItem Icon={Home} title="Home" url="/" />
        <SmallBarItem Icon={Repeat} title="Shorts" url="/" />
        <SmallBarItem Icon={Clapperboard} title="Subscriptions" url="/" />
        <SmallBarItem Icon={Library} title="Library" url="/" />
      </aside>
      <aside className=" lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 flex w-56">
        <LargeSideBarSection title="Hello Guys">
          <LargeSideBarItem Icon={Home} title="Home" url="/" isActive />
          <LargeSideBarItem Icon={Home} title="Home" url="/" />
          <LargeSideBarItem Icon={Home} title="Home" url="/" />
        </LargeSideBarSection>
      </aside>
    </>
  );
};

function SmallBarItem({ Icon, title, url }) {
  return (
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        "py-4 px-1 flex flex-col items-center rounded-lg"
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="text-sm">{title}</div>
    </a>
  );
}

function LargeSideBarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}) {
  const childrenArray = Children.toArray(children).flat();

  const visibleChildren = childrenArray.slice(0, visibleItemCount);

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
    </div>
  );
}

function LargeSideBarItem({ Icon, title, url, isActive = false }) {
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    <a
      href={url}
      className={twMerge(
        buttonStyles({ variant: "ghost" }),
        `flex items-center w-full gap-4 p-3 rounded-lg ${
          isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : ""
        }`
      )}
    >
      <Icon className="w-6 h-6" />
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
