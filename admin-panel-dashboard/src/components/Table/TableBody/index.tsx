import { memo } from "react";

// Types
import { IColumnType } from "@/types";

// Helpers
import { getObjectValue } from "@/helpers";

// Constants
import { RESULT_NOT_FOUND } from "@/constants";

interface IDataTableBody<T> {
  data: T[];
  columns: IColumnType<T>[];
}

const TableBody = <T,>({ data, columns }: IDataTableBody<T>) => (
  <tbody>
    {data.length ? (
      data.map((item, index )=> {
        const id = getObjectValue(item, "id");
        return (
          <tr key={`table-body-${id}`}>
            {columns.map(column => (
              <td
                key={`table-row-cell-${column.key}`}
                className={`px-6 py-2 border-0 border-b border-gray-100 ${index % 2 ? "bg-transparent" : "bg-greyish"}`}>
                {column.customNode ? (
                  column.customNode(column, item)
                ) : (
                  <div className="flex items-center">
                    {column.key === "status" && (getObjectValue(item, column.key) === "Approved" ?  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> :
                    getObjectValue(item, column.key) === "Rejected" ? <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" /> : <div className="h-2.5 w-2.5 rounded-full bg-gray-500 me-2" />
                      )
                    }
                    <p className="text-darker font-normal text-sm">
                      {getObjectValue(item, column.key)}
                    </p>
                  </div>
                )}
              </td>
            ))}
          </tr>
        );
      })
    ) : (
      <tr className="w-full">
        <td colSpan={10} className="h-32 text-center">
          <p className="text-xl font-semibold">
            {RESULT_NOT_FOUND}
          </p>
        </td>
      </tr>
    )}
  </tbody>
);

export default memo(TableBody) as typeof TableBody;
