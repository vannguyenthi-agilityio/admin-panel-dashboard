// Types
import { ICustomerData, ICustomerTable } from "@/types";

import {
  convertDateToDateTime,
  convertDateTimeToObject,
  splitFullName
} from "@/helpers";

// Constants
import {
  FORMAT_DATE,
  STATUS
} from "@/constants";

export const formatDataTable = (data: ICustomerData[]) => {
  const dataFormat: ICustomerTable[] = [];

  data?.map((customer) => {
    dataFormat.push({
      id: customer.id,
      dateOfBirth: convertDateToDateTime(
          customer.dateOfBirth,
          FORMAT_DATE.MONTH_DAY_YEAR,
        ),
      fullName: `${customer.firstName} ${customer.lastName}`,
      email: customer.email,
      status: STATUS[0]
    });
  });
  return dataFormat;
}

export const formatCustomersData = (data: ICustomerTable[]) => {
  const dataFormat: ICustomerData[] = [];

  data?.map((customer) => {
    dataFormat.push({
       id: customer?.id,
      idNumber: Number(customer?.id),
      email: customer?.email || "",
      firstName: splitFullName(customer?.fullName).firstName.trim(),
      lastName: splitFullName(customer?.fullName).lastName.trim(),
      phoneNumber: "",
      dateOfBirth: convertDateTimeToObject(customer?.dateOfBirth || "01/01/1900"),
    });
  });
  return dataFormat;
}

export const formatCustomerTable = (customer: ICustomerData) => {
  const dataFormat: ICustomerTable = {
    id: customer.id,
    dateOfBirth: convertDateToDateTime(
      customer.dateOfBirth,
      FORMAT_DATE.MONTH_DAY_YEAR,
    ),
    fullName: `${customer.firstName} ${customer.lastName}`,
    email: customer.email,
    status: STATUS[0]
  };
  
  return dataFormat;
}

export const formatCustomerData = (customer: ICustomerTable) => {
  const dataFormat: ICustomerData = {
    id: customer?.id,
    idNumber: Number(customer?.id),
    email: customer?.email || "",
    firstName: splitFullName(customer?.fullName).firstName.trim(),
    lastName: splitFullName(customer?.fullName).lastName.trim(),
    phoneNumber: "",
    dateOfBirth: convertDateTimeToObject(customer?.dateOfBirth || "01/01/1900"),
  };
  return dataFormat;
}
