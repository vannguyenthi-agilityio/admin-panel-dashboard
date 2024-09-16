// Types
import { ICustomerData } from "@/types";

export const MOCK_CUSTOMER_DATA: ICustomerData = {
  id: 1,
  idNumber: 123,
  email: "test@gmail.com",
  firstName: "Alyvia",
  lastName: "Kelley",
  phoneNumber: "20 1234 4567",
  dateOfBirth: {months: '', date: 1, years: 1}
}

export const MOCK_INIT_CUSTOMER_DATA: ICustomerData = {
  id: "",
  idNumber: 0,
  email: "",
  firstName: "",
  lastName: "",
  phoneNumber: "",
  dateOfBirth: {months: '', date: 0, years: 0}
}
