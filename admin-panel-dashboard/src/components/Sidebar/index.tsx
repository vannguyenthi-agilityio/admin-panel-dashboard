import { RefObject, memo, useEffect } from "react";

// Components
import { Button } from "@/components";

// Constants
import {
  ROUTES,
  BREAKPOINTS,
  WINDOW_INNER_WIDTH
} from "@/constants";

// Icons
import { ArrowRightIcon, ArrowLeftIcon, LogoIcon } from "@/components/Icons";

// Styles
import { sidebarStyles } from './style';

// Helpers
import { isBrowser, clsxMerge } from "@/helpers";

// Hooks
import { useOutsideClick, useScreenSize } from "@/hooks";

// Types
import { ISidebar } from "@/types";

import {
  HomeIcon,
  SettingIcon,
  HelpIcon,
  UserIcon,
  ClockIcon,
  MailIcon
} from '@/components/Icons';

const ITEMS_DASHBOARD = [
  { icon: <HomeIcon />, label: "Dashboard", href: ROUTES.HOME },
  { icon: <UserIcon />, label: "Custommers", href: ROUTES.CUSTOMERS },
  { icon: <ClockIcon />, label: "Analytics", href: ROUTES.ANALYTICS },
];

const ITEMS_SETTING = [
  { icon: <MailIcon stroke="white" />, label: "Messages", href: ROUTES.MESSAGES },
  { icon: <SettingIcon />, label: "Setting", href: ROUTES.SETTINGS },
  { icon: <HelpIcon />, label: "Help centre", href: ROUTES.HELP_CENTRE },
];

const SideBar = ({
  isCollapse = false,
  toggleSidebar,
  className,
  size,
  pathname,
}: ISidebar) => {
  const screenSize = useScreenSize();
  const screenSmall = screenSize === "md" || screenSize === "sm";
  const screenLarge = screenSize === "lg" || screenSize === "xl"
  const centerOpenClass = !isCollapse ? "justify-start" : "justify-center";
  const layoutOpenClass = !isCollapse ? "justify-between" : "justify-center";
  const layoutLogoClass = !isCollapse ? "pl-5" : "pl-0";

  const transitionBgClass =
    "transition-[background-color] duration-300 ease-[cubic-bezier(0.4,0,0.6,1)] delay-20";
  const isSmallerScreenSize = isBrowser && WINDOW_INNER_WIDTH <= BREAKPOINTS.XL;

  const sideBarRef = useOutsideClick(() => {
    if (screenLarge && isCollapse) {
      toggleSidebar();
    }
  }) as RefObject<HTMLDivElement>;

  const handleClickSidebarItem = () => {
    if (isSmallerScreenSize) {
      toggleSidebar();
    }
  };

  useEffect(() => {
    if (screenSmall && !isCollapse) {
      toggleSidebar();
    } else if (screenLarge && isCollapse) {
      toggleSidebar();
    }
  }, [screenSize]);

  const renderListItems = (data: typeof ITEMS_SETTING | typeof ITEMS_DASHBOARD) => (
    <ul>
      {data.map(({ label, icon, href }) => {
        const isActive = href === pathname;
        const itemBackground = isActive
          ? "bg-silver hover:bg-darker"
          : "hover:bg-none";

        const menuItemClass = clsxMerge(
          `w-full flex justify-between items-center truncate p-0 leading-[26px] rounded-md my-[3px] text-center mt-1`,
          `${itemBackground} `,
          `${transitionBgClass} `,
        );
        const linkClass = `font-normal w-full flex items-center py-3 ${isCollapse ? "pr-0" : "px-7"} ${centerOpenClass}`;

        return (
          <li
            key={label}
            className={menuItemClass}
            onClick={handleClickSidebarItem}>
            <a className={linkClass} href={href}>
              {icon}
              {!isCollapse && <span className={`pl-2 text-white`}>{label}</span>}
            </a>
          </li>
        ) 
      })}
    </ul>
 );

  return (
    <nav
      ref={sideBarRef}
      className=" h-full z-50 fixed top-0 left-0 min-h-[calc(100vh)]"
      >
      <div
        className={`${isCollapse ? "left-[20px] sm:left-[80px]" : "left-[240px]"} p-1 rounded-md absolute top-[16px] z-20 w-[48px] cursor-pointer`}
        onClick={toggleSidebar}>
        {!isCollapse ? <Button
          leftIcon={<ArrowLeftIcon className="w-[16px] h-[16px]" />}
          className="px-2.5 h-[40px] h-[40px] w-[40px] md:border-none shadow-sm"
        />
        :
        <Button
          leftIcon={<ArrowRightIcon className="w-[16px] h-[16px]" />}
          className="px-2.5 h-[40px] w-[40px] md:border-none shadow-sm"
        />
        }
      </div>
      <div className={clsxMerge(
        sidebarStyles({
          size,
          isCollapse : isCollapse
        }),
        ` delay-10 duration-300 ${isCollapse ? "hidden sm:block" : "block"}`,
        className
      )}>
        <div className={`${layoutOpenClass} flex items-center`}>
          <a href={ROUTES.HOME}>
            <div className={`justify-normal gap-1 flex-nowrap mb-8 ${layoutLogoClass}`}>
              <LogoIcon isFull={!isCollapse} width={!isCollapse? "80" : "48"}/>
            </div>
          </a>
        </div>
        {ITEMS_DASHBOARD && renderListItems(ITEMS_DASHBOARD)}
        {ITEMS_SETTING &&
          <div className={isCollapse ? "mt-8" : "mt-0"}>
            {!isCollapse && <span className="uppercase pl-5 text-silver font-medium text-sm">Settings</span>}
            {renderListItems(ITEMS_SETTING)}
          </div>
        }
      </div>
    </nav>
  );
};

export default memo(SideBar);
