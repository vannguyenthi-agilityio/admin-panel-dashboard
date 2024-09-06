import { ReactNode } from "react";

export interface IColumnType<T> {
  key: string;
  title: string;
  customNode?: (column: IColumnType<T>, item: T) => ReactNode;
  isSortable?: boolean;
}
