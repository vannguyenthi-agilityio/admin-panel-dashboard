// Hooks
import {
  memo,
  useCallback,
} from "react";

// Icons
import { SearchIcon } from "@/components/Icons";

// Types
import { IColumnType } from "@/types";

// Components
import { TableBody, TableHeader, } from "@/components/Table";
import { Input } from "@/components";

interface ISearch {
  field: string;
  param: string;
  valueParam: string;
  placeholder?: string;
}

interface IDataTable<T> {
  data: T[];
  columns: IColumnType<T>[];
  pageSize?: number;
  className?: string;
  hasPagination?: boolean;
  total?: number;
  search?: ISearch;
}

const Table = <T,>({
  data,
  columns,
  className = "",
  search,
}: IDataTable<T>) => {

  const handleSearchChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      console.log('value', event.target.value);
  },[]);

  const handleSortingChange = useCallback(
    (key: string) => {
     console.log('key', key);
  },[]);

  return (
    <div className="w-full">
      {search && (
        <Input
          placeholder={search.placeholder}
          name='Input search'
          type='text'
          onChange={handleSearchChange}
          leftElement={ <SearchIcon />}
          className="max-w-[320px]"
        />
      )}
      <div
        className={`p-0 border-none ring-0 overflow-x-auto ${className}`}>
        <div className="flex flex-col items-start justify-start my-2">
          <table className="w-full" tabIndex={0} id="table">
            <TableHeader columns={columns} onSort={handleSortingChange} />
            <TableBody columns={columns} data={data} />
          </table>
        </div>
      </div>
    </div>
  );
};

export default memo(Table) as typeof Table;
