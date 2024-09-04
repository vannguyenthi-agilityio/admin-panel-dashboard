
import { memo, forwardRef } from "react";

// Types
import { IBreadcrumb, IItemBreadcrumb } from "@/types";

// Helpers
import { clsxMerge } from '@/helpers';

// Constants
import { ITEM_BREADCRUMB } from '@/constants';

import { breadcrumbStyles } from './style';

const Breadcrumb =  forwardRef<HTMLElement, IBreadcrumb>(
  ({ 
    className,
    size,
    itemsBreadcrumb = ITEM_BREADCRUMB,
    ...props }, ref) => (
    <nav
      aria-label="Breadcrumb"
      ref={ref}
      {...props}
    >
      <ol className="inline-flex items-center">
        {itemsBreadcrumb?.map(
          ({
            href,
            crumbName,
            linkIndex,
            linkActiveCrumb,
            iconElement
          }: IItemBreadcrumb) => (
              <li
                className={clsxMerge(
                  breadcrumbStyles({ 
                    size,
                    activeLink: linkActiveCrumb
                  }),
                  className
                )}
                 key={linkIndex}
              >
                <a href={href} className="inline-flex items-center font-normal hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                  {iconElement && iconElement}
                  {crumbName}
                </a>
                {itemsBreadcrumb.length !== linkIndex && (
                  <span className="mx-2 text-gray-400">&#47;</span>
                )}
              </li>
            )
          )
        }
      </ol>
    </nav>
  )
);

Breadcrumb.displayName = "Breadcrumb";
export default memo(Breadcrumb);
