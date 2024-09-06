import { memo } from "react";

// Hooks
import usePagination, { DOTS } from "@/hooks/usePagination";

// Helps
import { clsxMerge } from '@/helpers';

// Icons
import { PrevIcon, NextIcon } from "@/components/Icons";

// Components
import { Button, Select } from "@/components";

// Constants
import { PAGINATION } from "@/constants";

// Styles
import { paginationStyles } from './style';

interface PaginationProps {
  onPageChange: (page: number) => void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className?: string;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
  size
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const onClickNextButton = () => {
    onPageChange(currentPage + 1);
  };

  const onClickPreviousButton = () => {
    onPageChange(currentPage - 1);
  };

  const onChangeTotalItemsPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onPageChange(Number(event.target.value));
  }

  const paginationRangeLength = paginationRange.length;
  const showItemsPagination = paginationRangeLength > 1;
  const lastPage = paginationRange[paginationRangeLength - 1];
  const lastItemCurrentPage =
    currentPage * pageSize >= totalCount ? totalCount : currentPage * pageSize;
  const totalItems = totalCount < pageSize ? pageSize : lastItemCurrentPage;
  return (
    <div className={clsxMerge(
      paginationStyles({
        size
      }),
      className)}
    >
      {showItemsPagination && (
        <div className="w-full flex gap-2 justify-center md:justify-end items-center md:m-0">
          <Button
            className={`w-[40px] h-[40px] ${
              currentPage === 1 ? "bg-gray-200 border-none" : ""
            }`}
            aria-label="Previous page button"
            data-testid="prev-page-button"
            onClick={onClickPreviousButton}
            disabled={currentPage === 1}
            leftIcon={<PrevIcon />}
          />

          {paginationRange.map((pageNumber, index) => {
            const isActivePage = currentPage === pageNumber;
            const baseClasses = "hover:bg-gray-100";
            const paginationClasses = clsxMerge(baseClasses, {
              "text-tertiary":
                !isActivePage,
            });

            if (pageNumber === DOTS) {
              return (
                <span
                  className="text-tertiary"
                  key={`${index}-${pageNumber}`}
                >
                  {DOTS}
                </span>
              );
            }

            return (
              <Button
                className={`${paginationClasses} ${isActivePage ? "text-black border-blue-500" : "text-darker"}`}
                aria-label={"Page button " + pageNumber}
                key={`${index}-${pageNumber}`}
                disabled={currentPage === pageNumber}
                onClick={() => onPageChange(pageNumber as number)}
                label={pageNumber.toString()}
              />
            );
          })}

          <Button
            className={`w-[40px] h-[40px] ${
              currentPage === lastPage ? "bg-gray-200 border-none" : ""
            }`}
            aria-label="Next page button"
            data-testid="next-page-button"
            onClick={onClickNextButton}
            disabled={currentPage === lastPage}
            leftIcon={<NextIcon />}
          />
        </div>
      )}
      <div className="flex w-full items-center ml-3 max-w-[200px]">
        <Select
          options={PAGINATION}
          onChange={onChangeTotalItemsPage}
          defaultValue={totalItems}
        />
        <span className="ml-2 text-darker">/Page</span>
      </div>
    </div>
  );
};

export default memo(Pagination);
