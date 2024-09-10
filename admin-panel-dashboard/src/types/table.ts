import { ReactNode } from "react";

export interface IColumnType<ICustomerTable> {
  key: string;
  title: string;
  customNode?: (column: IColumnType<ICustomerTable>, item: ICustomerTable) => ReactNode;
  isSortable?: boolean;
}

export interface ICustomerTable {
  id: string | number;
  dateOfBirth?: string;
  fullName: string;
  email?: string;
  status: string;
}
