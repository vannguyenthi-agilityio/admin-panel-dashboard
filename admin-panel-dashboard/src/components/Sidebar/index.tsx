import { RefObject, memo } from "react";

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
import useOutsideClick from "@/hooks/useOutsideClick";

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
  const centerOpenClass = !isCollapse ? "justify-start" : "justify-end";
  const layoutOpenClass = !isCollapse ? "justify-between" : "justify-end";

  const transitionBgClass =
    "transition-[background-color] duration-300 ease-[cubic-bezier(0.4,0,0.6,1)] delay-20";
  const isSmallerScreenSize = isBrowser && WINDOW_INNER_WIDTH <= BREAKPOINTS.XL;

  const sideBarRef = useOutsideClick(() => {
    if (isSmallerScreenSize && !isCollapse) {
      toggleSidebar();
    }
  }) as RefObject<HTMLDivElement>;

  const handleClickSidebarItem = () => {
    if (isSmallerScreenSize) {
      toggleSidebar();
    }
  };

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
        const linkClass = `font-normal w-full flex items-center py-3 ${isCollapse ? "pr-7" : "px-7"} ${centerOpenClass}`;

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
      className={clsxMerge(
        sidebarStyles({
          size,
          isCollapse : isCollapse
        }),
        className
      )}
      >
      <div className={`${layoutOpenClass} flex items-center`}>
        <a href={ROUTES.HOME}>
          <div className="justify-normal pl-5 gap-1 flex-nowrap">
            <LogoIcon isFull={!isCollapse} width={!isCollapse? "48" : "80"}/>
          </div>
        </a>
        <div
          className="p-1 rounded-md mr-[-38px] w-[48px] cursor-pointer"
          onClick={toggleSidebar}>
          {!isCollapse ? <Button
            leftIcon={<ArrowLeftIcon className="w-[16px] h-[16px]" />}
            className="px-2.5 h-[40px] h-[40px] w-[40px] border-none shadow-sm"
          />
          :
          <Button
            leftIcon={<ArrowRightIcon className="w-[16px] h-[16px]" />}
            className="px-2.5 h-[40px] w-[40px] border-none shadow-sm"
          />
          }
        </div>
      </div>
      {ITEMS_DASHBOARD && renderListItems(ITEMS_DASHBOARD)}
      {ITEMS_SETTING &&
        <div className={isCollapse ? "mt-8" : "mt-0"}>
          {!isCollapse && <span className="uppercase pl-5 text-silver font-medium text-sm">Settings</span>}
          {renderListItems(ITEMS_SETTING)}
        </div>
      }
    </nav>
  );
};

export default memo(SideBar);
