import { MESSAGES_ERROR } from '@/constants';
import {
  ICustomerData,
} from '@/types';
import {
  updateCustomer,
  addCustomer,
  deleteCustomer,
  getCustomer
} from './helper';

// Handle update data
export const updateToCustomer = async (
  customerData: ICustomerData,
  setDataCustomer: React.Dispatch<React.SetStateAction<ICustomerData>>,
  onError: (error: Error) => void
) => {
  try {
    // Call the helper function to update
    const response = await updateCustomer(customerData);
    response ? setDataCustomer(response) : (() => { throw new Error('Fail update')})();
  } catch (error) {
    if (error instanceof Error) {
      onError(error);
    } else {
      onError(new Error(MESSAGES_ERROR.UNKNOWN_ERROR));
    }
  }
};

// Handle add data
export const addToCustomer = async (
  customerData: ICustomerData,
  setDataCustomer: React.Dispatch<React.SetStateAction<ICustomerData>>,
  onError: (error: Error) => void
) => {
  try {

    // Call the helper function to adđ
    const response = await addCustomer(customerData);
    response ? setDataCustomer(response) : (() => { throw new Error('Fail update')})();
  } catch (error) {
    if (error instanceof Error) {
      onError(error);
    } else {
      onError(new Error(MESSAGES_ERROR.UNKNOWN_ERROR));
    }
  }
};

// Handle delete customer
export const deletedCustomer = async (
  cumtomerData: ICustomerData,
  setDataCustomer: React.Dispatch<React.SetStateAction<ICustomerData>>,
  onError: (error: Error) => void
) => {
  try {
    const response = await deleteCustomer(cumtomerData);
      response ? setDataCustomer(response)  : (() => { throw new Error('Fail delete')})();
    
  } catch (error) {
    if (error instanceof Error) {
      onError(error);
    } else {
      onError(new Error(MESSAGES_ERROR.UNKNOWN_ERROR));
    }
  }
};

// Handle get from cart
export const getedCustomer = async (
  id: string | number,
  setDataCustomer: React.Dispatch<React.SetStateAction<ICustomerData>>,
  onError: (error: Error) => void
) => {
  try {
    const response = await getCustomer(id);
    response ? setDataCustomer(response)  : (() => { throw new Error('Fail get')})();
    
  } catch (error) {
    if (error instanceof Error) {
      onError(error);
    } else {
      onError(new Error(MESSAGES_ERROR.UNKNOWN_ERROR));
    }
  }
};
