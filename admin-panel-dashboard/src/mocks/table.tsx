// Types
import { IColumnType, ICustomerTable } from "@/types";

export const MOCK_CUSTOMER: ICustomerTable[] = [
  {
    id: 1,
    dateOfBirth: "06/18/1978",
    status: 'Approved',
    email: "test@gmail.com",
    fullName: "Alyvia Kelley",
  },
  {
    id: 2,
    dateOfBirth: "09/18/1983",
    status: 'Rejected',
    email: "jaiden.n@gmail.com",
    fullName: "Jaiden Nixon",
  },
  {
    id: 3,
    dateOfBirth: "10/18/1988",
    status: 'Blocked',
    email: "me@clayton.com",
    fullName: "Jaiden Nixon",
  }
];

export const MOCK_COLUMNS: IColumnType<ICustomerTable>[] = [
  {
    key: "id",
    title: "#",
  },
  {
    key: "fullName",
    title: "Full Name",
    isSortable: true,
  },
  {
    key: "status",
    title: "Status",
    isSortable: false,
  },
  {
    key: "email",
    title: "E-Mail",
    isSortable: true,
  },
  {
    key: "dateOfBirth",
    title: "Date of Birth",
    isSortable: true,
  },
];
