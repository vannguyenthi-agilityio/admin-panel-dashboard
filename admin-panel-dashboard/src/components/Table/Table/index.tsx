// Hooks
import {
  memo,
  useCallback,
} from "react";

// Types
import { IColumnType, ICustomerTable } from "@/types";

// Components
import { TableBody, TableHeader } from "@/components/Table";

interface IPropsTable {
  data: ICustomerTable[];
  columns: IColumnType<ICustomerTable>[];
  pageSize?: number;
  className?: string;
  hasPagination?: boolean;
  total?: number;
  onActionCustomer: (customer: ICustomerTable, action: string) => void;
}

const Table = ({
  data,
  columns,
  className = "",
  onActionCustomer
}: IPropsTable) => {
  

  const handleSortingChange = useCallback(
    (key: string) => {
    console.log('key', key);
  },[]);

  return (
    <div className="w-full">
      <div
        className={`p-0 border-none ring-0 overflow-x-auto ${className}`}>
        <div className="flex flex-col items-start justify-start my-2">
          <table className="w-full" tabIndex={0} id="table">
            <TableHeader columns={columns} onSort={handleSortingChange} />
            <TableBody columns={columns} data={data} onActionCutomer={onActionCustomer}/>
          </table>
        </div>
      </div>
    </div>
  );
};

export default memo(Table);
