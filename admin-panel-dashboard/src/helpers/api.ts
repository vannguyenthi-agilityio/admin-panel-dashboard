import {
  ICustomerData,
} from '@/types';

export const getUpdatedCustomer = (
  customerData: ICustomerData,
  data: ICustomerData[]
) => {
  const customerIndex = findCustomerIndexById(data, customerData.id);
  if (customerIndex !== -1) {
    const newDataUpdated = 
      data.map((customer, i) =>
        i === customerIndex ? { ...customerData
       } : customer
      );
    return newDataUpdated;
  } else {
    const newData = [...data, { ...customerData }];
    return newData;
  }
};

export const removeCutomerFromList = (
  data: ICustomerData[],
  id: string | number
) => {
  const updatedCustomers = data.filter(customer => customer.id !== id);
  return { ...data, data: updatedCustomers };
};

export const findCustomerIndexById = (
  data: ICustomerData[],
  customerId: string | number
): number => {
  return data.findIndex((customer: ICustomerData) => customer.id === customerId);
};

export const getErrorMessage = (statusCode: number, statusText: string) => {
  const errorMessage = `An error has occurred: ${statusCode} - User ${statusText}`;
  return errorMessage;
};
