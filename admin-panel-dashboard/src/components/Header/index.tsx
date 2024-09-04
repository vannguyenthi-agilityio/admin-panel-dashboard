
import { memo, forwardRef } from "react";

// Types
import { IHeader } from "@/types";

// Icons
import { MailIcon, BellIcon } from "@/components/Icons";

// Helpers
import { clsxMerge } from '@/helpers';

// Components
import { 
  Dropdown,
  Button
} from '@/components'

import { headerStyles } from './style';

const Header =  forwardRef<HTMLDivElement, IHeader>(
  ({ 
    className,
    size,
    ...props }, ref) => (
    <div
      aria-label="Header"
      ref={ref}
      {...props}
      className={clsxMerge(
        headerStyles({ 
          size,
        }),
        className
      )}
    >
      <Button
        leftIcon={<BellIcon className="w-[16px] h-[16px]"/>}
        rightIcon={<div className="absolute block w-3 h-3 bg-red-500 border-2 border-white rounded-full top-1 right-2 dark:border-gray-900" />}
        className="px-2.5 h-[40px] relative"
      />
      <Button
        leftIcon={<MailIcon className="w-[16px] h-[16px]"/>}
        className="px-2.5 h-[40px]"
      />
      <Dropdown />
    </div>
  )
);

Header.displayName = "Header";
export default memo(Header);
