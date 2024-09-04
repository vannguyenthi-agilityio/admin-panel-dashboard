import { RefObject, memo } from "react";

// Components
import { Button } from "@/components";

// Constants
import {
  ROUTES,
  BREAKPOINTS
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
  isCollapse = true,
  toggleSidebar,
  className,
  size,
  pathname,
}: ISidebar) => {
  const hiddenOpenClass = !isCollapse && "hidden";
  const centerOpenClass = isCollapse ?  "justify-start" : "justify-end";
  const transitionBgClass =
    "transition-[background-color] duration-300 ease-[cubic-bezier(0.4,0,0.6,1)] delay-20";
  const isSmallerScreenSize = isBrowser && window.innerWidth <= BREAKPOINTS.XL;

  const sideBarRef = useOutsideClick(() => {
    if (isSmallerScreenSize && isCollapse) {
      toggleSidebar();
    }
  });

  const handleClickSidebarItem = () => {
    if (isSmallerScreenSize) {
      toggleSidebar();
    }
  };

  return (
    <nav
      ref={sideBarRef as RefObject<HTMLDivElement>}
      className={clsxMerge(
        sidebarStyles({
          size,
          isCollapse
        }),
        className
      )}
      >
      <div className={`${isCollapse ? "justify-between" : "justify-end"} flex items-center`}>
        <a href="/">
          <div className="justify-normal pl-5 gap-1 flex-nowrap">
            <LogoIcon isFull={isCollapse} width={isCollapse? "80" : "48"}/>
          </div>
        </a>
        <div
          className="p-1 rounded-md mr-[-38px] w-[48px] cursor-pointer"
          onClick={toggleSidebar}>
          {isCollapse ? <Button
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
      <ul>
        {ITEMS_DASHBOARD.map(({ label, icon, href }) => {
          const isActive = href === pathname;
          const itemBackground = isActive
            ? "bg-primary hover:!bg-primary"
            : "hover:bg-none";

          const menuItemClass = [
            `tremor-ListItem-root w-full flex justify-between items-center truncate text-tremor-default !p-0 leading-[26px] rounded-md my-[3px] text-center `,
            `${itemBackground} `,
            `!p-0 leading-[26px] mt-1 rounded-md `,
            `${transitionBgClass} `,
          ].join("");
          const linkClass = `font-normal w-full flex items-center py-3 px-7 ${centerOpenClass}`;

          return (
            <li
              key={label}
              className={menuItemClass}
              onClick={handleClickSidebarItem}>
              <a className={linkClass} href={href}>
                {icon}
                {isCollapse && <span className={`${hiddenOpenClass} pl-2 text-white`}>{label}</span>}
              </a>
            </li>
          );
        })}
      </ul>
      {ITEMS_SETTING &&
        <>
          <span className="uppercase pl-5 text-silver font-medium text-sm">Settings</span>
          <ul>
            {ITEMS_SETTING.map(({ label, icon, href }) => {
              const isActive = href === pathname;
              const itemBackground = isActive
                ? "bg-primary hover:bg-primary"
                : "hover:bg-none";

              const menuItemClass = [
                `tremor-ListItem-root w-full flex justify-between items-center truncate text-tremor-default !p-0 leading-[26px] rounded-md my-[3px] text-center`,
                `${itemBackground} `,
                `p-0 leading-[26px] mt-1 rounded-md `,
                `${transitionBgClass} `,
              ].join("");
              const linkClass = `font-normal w-full flex items-center py-3 px-7 ${centerOpenClass}`;

              return (
                <li
                  key={label}
                  className={menuItemClass}
                  onClick={handleClickSidebarItem}>
                  <a className={linkClass} href={href}>
                    {icon}
                    {isCollapse && <span className={`${hiddenOpenClass} pl-2 text-white`}>{label}</span>}
                  </a>
                </li>
              );
            })}
          </ul>
        </>
      }
    </nav>
  );
};

export default memo(SideBar);
