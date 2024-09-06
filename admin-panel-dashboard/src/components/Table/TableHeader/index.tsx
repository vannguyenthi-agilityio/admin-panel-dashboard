import { memo } from "react";

// Components
import HeaderCell from "../HeaderCell";

// Types
import { IColumnType } from "@/types";

interface IDataTableHeader<T> {
  columns: IColumnType<T>[];
  onSort: (key: string) => void;
}

const TableHeader = <T,>({
  columns,
  onSort,
}: IDataTableHeader<T>) => (
  <thead>
    <tr>
      {columns.map(({ key, title, isSortable = false }) => {
        const handleClick = () => {
          isSortable && onSort(key);
        };

        return (
          <th
            data-testid={`header-cell-${title}`}
            onClick={handleClick}
            key={key}
            className={`px-6 py-2 leading-[17px] tracking-[0.2px] ${
              isSortable ? "cursor-pointer" : "cursor-default"
            }`}>
            <HeaderCell
              title={title}
              isSortable={isSortable}
            />
          </th>
        );
      })}
    </tr>
  </thead>
);

export default memo(TableHeader) as typeof TableHeader;
