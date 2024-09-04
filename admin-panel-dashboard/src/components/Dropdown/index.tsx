
import { memo, useState, RefObject, useCallback } from "react";

// Hooks
import useOutsideClick from "@/hooks/useOutsideClick";

// Types
import { IDropdown, IListDropDown } from "@/types";

// Helpers
import { clsxMerge } from '@/helpers';

// Icons
import { ArrowDownIcon } from '@/components/Icons';

// Mocks
import { MOCK_USER_DATA , LIST_DROPDOWN_DATA} from '@/mocks';

import { dropdownStyles } from './style';

const Dropdown = (({
  className,
  user = MOCK_USER_DATA,
  listDropDown = LIST_DROPDOWN_DATA,
  hasLogOut = true,
  size,
  ...props
}: IDropdown) => {

  const [isOpenDropdown, setIsOpenDropdown] = useState(false);

  const selectRef = useOutsideClick(() => {
    setIsOpenDropdown(false);
  });

  const handleShowOptionsList = useCallback(
    () => setIsOpenDropdown(prev => !prev),
  []);

  return (
    <div
      ref={selectRef as RefObject<HTMLDivElement>}
      {...props}
    >
      <button
        onClick={handleShowOptionsList}
        data-dropdown-toggle="dropdown"
        type="button"
        className={clsxMerge(
          dropdownStyles({
            size
          }),
          className
        )}
      >
        <img className="w-7 h-7 mr-2 rounded-lg" src={user.avatar}  alt="user photo" />
        <span className="mr-2">{user.name}</span>
        <ArrowDownIcon className="mx-2"/>
      </button>
      {isOpenDropdown &&
        <div id="dropdown" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44">
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdown">
            {listDropDown?.map(
              ({
                name,
                href
              }: IListDropDown) => (
                <li>
                  <a href={href} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">{name}</a>
                </li>
              ))
            }
          </ul>
          {hasLogOut &&
            <div className="py-2">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
            </div>
          }
        </div>
      }
    </div>
  )
});

export default memo(Dropdown);
