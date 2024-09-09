import { memo } from "react";

// Components
import { Button } from "@/components";

// Icons
import { SortIcon } from "@/components/Icons";

export interface IHeaderCell {
  title: string;
  isSortable: boolean;
}

const HeaderCell = ({
  title,
  isSortable,
}: IHeaderCell) => (
  <div className="flex items-center w-full">
    <div className="text-sm font-normal text-darker">
      {title}
    </div>
    {isSortable && (
      <Button
        buttonType='transprent'
        className='w-[16px] h-[16px] p-0 ml-2'
        aria-label="Arrow Sort"
        leftIcon={<SortIcon />}
      />
    )}
  </div>
);

export default memo(HeaderCell);
