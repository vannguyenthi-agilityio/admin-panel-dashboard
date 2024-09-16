import { memo } from "react";
import { Link } from 'react-router-dom';

// Types
import { IColumnType, ICustomerTable } from "@/types";

// Helpers
import { getObjectValue } from "@/helpers";

// Constants
import { RESULT_NOT_FOUND, ROUTES, STATUS, ACTION_TYPE } from "@/constants";

// Components
import { Button } from "@/components"

import { EditIcon, ArrowUpRightIcon, DeleteIcon } from "@/components/Icons";

interface IPropsDataTableBody {
  data: ICustomerTable[];
  columns: IColumnType<ICustomerTable>[];
  onActionCutomer: (customer: ICustomerTable, action: string) => void;
}

const TableBody = ({ data, columns, onActionCutomer }: IPropsDataTableBody) => {
// const navigate = useNavigate();

  const handleEditCustomer = (customer: ICustomerTable) => {
    onActionCutomer(customer, ACTION_TYPE.EDIT);
  };

  const handleDeleteCustomer = (customer: ICustomerTable) => {
    onActionCutomer(customer, ACTION_TYPE.DELETE);
  };

  const handleDetailCustomer = (customer: ICustomerTable) => {
    onActionCutomer(customer, ACTION_TYPE.DETAIL);
  };
  
  return (
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
                  ) : 
                    column.key === 'action' ? 
                    (
                    <div className="flex gap-2">
                      <Link to={`${ROUTES.CUSTOMERS}/${id}`}>
                        <Button
                          className= 'w-[40px] h-[40px] p-0'
                          leftIcon= {<ArrowUpRightIcon />}
                          onClick={() => handleDetailCustomer(item)}
                        />
                      </Link>
                      <Link to={`${ROUTES.CUSTOMERS}/edit/${id}`}>
                        <Button
                          className= 'w-[40px] h-[40px] p-0'
                          leftIcon= {<EditIcon />}
                          onClick={() => handleEditCustomer(item)}
                        />
                      </Link>
                      <Button
                        className= 'w-[40px] h-[40px] p-0'
                        leftIcon= {<DeleteIcon />}
                        onClick={() => handleDeleteCustomer(item)}
                      />
                    </div>
                    )
                    :
                    (
                      <div className="flex items-center">
                        {column.key === "status" && (getObjectValue(item, column.key) === STATUS[0] ?  <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2" /> :
                        getObjectValue(item, column.key) === STATUS[1] ? <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2" /> : <div className="h-2.5 w-2.5 rounded-full bg-gray-500 me-2" />
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
  )
};

export default memo(TableBody);
