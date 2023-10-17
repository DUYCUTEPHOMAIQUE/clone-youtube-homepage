// @ts-nocheck
import React, { Children, useState } from "react";
import { Button, buttonStyles } from "./Button";
import { twMerge } from "tailwind-merge";
import {
  ChevronDown,
  ChevronUp,
  Clapperboard,
  Clock,
  Home,
  Library,
  PlaySquare,
  Repeat,
  History,
  ListVideo,
  Flame,
  Film,
  ShoppingBag,
  Podcast,
  Music2,
  Radio,
  Gamepad2,
  Newspaper,
  Trophy,
  Lightbulb,
  Shirt,
  Menu,
} from "lucide-react";
import LogoYouTube from "assets/icons/LogoYouTube";
import { playlists, subscriptions } from "data/sidebar";
import { useSidebarContext } from "contexts/SidebarContext";

export const SideBar = () => {
  const { isSmallOpen, isLargeOpen, toggle } = useSidebarContext();

  console.log("is small open", isSmallOpen, isLargeOpen);
  return (
    <>
      <aside
        className={`sticky top-0 overflow-y-auto pb-4 lg:hidden flex-col ml-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"
        }`}
      >
        <SmallBarItem Icon={Home} title="Home" url="/" />
        <SmallBarItem Icon={Repeat} title="Shorts" url="/" />
        <SmallBarItem Icon={Clapperboard} title="Subscriptions" url="/" />
        <SmallBarItem Icon={Library} title="Library" url="/" />
      </aside>
      <aside
        className={` lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2  w-56 ${
          isLargeOpen ? "lg:flex" : "lg:hidden"
        } hidden`}
      >
        <LargeSideBarSection>
          <LargeSideBarItem Icon={Home} title="Home" url="/" isActive />
          <LargeSideBarItem
            Icon={Clapperboard}
            title="ClapperBoard"
            url="/clapperBoard"
          />
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection visibleItemCount={5}>
          <LargeSideBarItem Icon={Library} title="Library" url="/library" />
          <LargeSideBarItem Icon={History} title="History" url="/history" />
          <LargeSideBarItem
            Icon={PlaySquare}
            title="Your Video"
            url="/your-video"
          />
          <LargeSideBarItem
            Icon={Clock}
            title="Watch later"
            url="/watch-later"
          />
          {playlists.map((playlist) => (
            <LargeSideBarItem
              key={playlist.id}
              Icon={ListVideo}
              title={playlist.name}
              url={`/${playlist.name}`}
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection visibleItemCount={4} title="Subscriptions">
          {subscriptions.map((subscription) => (
            <LargeSideBarItem
              key={subscription.id}
              Icon={subscription.imgUrl}
              title={subscription.channelName}
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection title="Explore" visibleItemCount={5}>
          <LargeSideBarItem Icon={Flame} title="Trending" url="/trending" />
          <LargeSideBarItem
            Icon={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSideBarItem Icon={Music2} title="Music" url="/music" />
          <LargeSideBarItem Icon={Film} title="Movies & TV" url="/movies-tv" />
          <LargeSideBarItem Icon={Radio} title="Live" url="/live" />
          <LargeSideBarItem Icon={Gamepad2} title="Gaming" url="/gaming" />
          <LargeSideBarItem Icon={Newspaper} title="News" url="/news" />
          <LargeSideBarItem Icon={Trophy} title="Sports" url="/sports" />
          <LargeSideBarItem Icon={Lightbulb} title="Learning" url="/learning" />
          <LargeSideBarItem
            Icon={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSideBarItem Icon={Podcast} title="Podcasts" url="/podcasts" />
        </LargeSideBarSection>
      </aside>
      <div
        className={`
        ${
          isSmallOpen
            ? "p-4 overflow-y-auto scrollbar-hidden fixed left-[0] top-0 w-56 h-full border-gray-900 bg-[white] ease-in-out duration-500 z-[100]"
            : "p-4 overflow-y-auto scrollbar-hidden fixed left-[-40%] top-0 w-56 h-full border-gray-900 bg-[white] ease-in-out duration-500 z-[100]"
        }
        `}
      >
        <div>
          <div className={`flex gap-4 items-center flex-shrink-0 mb-4`}>
            <Button onClick={toggle} variant="ghost" size="icon">
              <Menu />
            </Button>
            <LogoYouTube className="w-20" />
          </div>
        </div>

        <LargeSideBarSection>
          <LargeSideBarItem Icon={Home} title="Home" url="/" isActive />
          <LargeSideBarItem
            Icon={Clapperboard}
            title="ClapperBoard"
            url="/clapperBoard"
          />
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection visibleItemCount={5}>
          <LargeSideBarItem Icon={Library} title="Library" url="/library" />
          <LargeSideBarItem Icon={History} title="History" url="/history" />
          <LargeSideBarItem
            Icon={PlaySquare}
            title="Your Video"
            url="/your-video"
          />
          <LargeSideBarItem
            Icon={Clock}
            title="Watch later"
            url="/watch-later"
          />
          {playlists.map((playlist) => (
            <LargeSideBarItem
              key={playlist.id}
              Icon={ListVideo}
              title={playlist.name}
              url={`/${playlist.name}`}
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection visibleItemCount={4} title="Subscriptions">
          {subscriptions.map((subscription) => (
            <LargeSideBarItem
              key={subscription.id}
              Icon={subscription.imgUrl}
              title={subscription.channelName}
            />
          ))}
        </LargeSideBarSection>
        <hr />
        <LargeSideBarSection title="Explore" visibleItemCount={5}>
          <LargeSideBarItem Icon={Flame} title="Trending" url="/trending" />
          <LargeSideBarItem
            Icon={ShoppingBag}
            title="Shopping"
            url="/shopping"
          />
          <LargeSideBarItem Icon={Music2} title="Music" url="/music" />
          <LargeSideBarItem Icon={Film} title="Movies & TV" url="/movies-tv" />
          <LargeSideBarItem Icon={Radio} title="Live" url="/live" />
          <LargeSideBarItem Icon={Gamepad2} title="Gaming" url="/gaming" />
          <LargeSideBarItem Icon={Newspaper} title="News" url="/news" />
          <LargeSideBarItem Icon={Trophy} title="Sports" url="/sports" />
          <LargeSideBarItem Icon={Lightbulb} title="Learning" url="/learning" />
          <LargeSideBarItem
            Icon={Shirt}
            title="Fashion & Beauty"
            url="/fashion-beauty"
          />
          <LargeSideBarItem Icon={Podcast} title="Podcasts" url="/podcasts" />
        </LargeSideBarSection>
      </div>
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

export function LargeSideBarSection({
  children,
  title,
  visibleItemCount = Number.POSITIVE_INFINITY,
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const childrenArray = Children.toArray(children).flat();

  const showExpandButton = childrenArray.length > visibleItemCount;

  const visibleChildren = isExpanded
    ? childrenArray
    : childrenArray.slice(0, visibleItemCount);

  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div>
      {title && <div className="ml-4 mt-2 text-lg mb-1">{title}</div>}
      {visibleChildren}
      {showExpandButton && (
        <Button
          onClick={() => setIsExpanded((e) => !e)}
          variant="ghost"
          className="flex items-center w-full gap-4 p-3 rounded-lg"
        >
          <ButtonIcon className="w-6 h-6" />
          <div className="center font-semibold">
            {isExpanded ? "Show Less" : "Show More"}
          </div>
        </Button>
      )}
    </div>
  );
}

export function LargeSideBarItem({ Icon, title, url, isActive = false }) {
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
      {typeof Icon === "string" ? (
        <img src={Icon} className="w-6 h-6 rounded-full" alt="" />
      ) : (
        <Icon className="w-6 h-6" />
      )}
      <div className="whitespace-nowrap overflow-hidden text-ellipsis">
        {title}
      </div>
    </a>
  );
}
