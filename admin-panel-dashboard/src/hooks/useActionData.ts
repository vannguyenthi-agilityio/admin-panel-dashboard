import { useState } from 'react';
import {
  MESSAGE_ADD_CUSTOMER,
  MESSAGE_EDIT_CUSTOMER,
  MESSAGE_DELETE_CUSTOMER,
  MESSAGE_GET_CUSTOMER
} from '@/constants';
import {
  ICustomerData
} from '@/types';
import {
  updateToCustomer,
  addToCustomer,
  deletedCustomer,
  getedCustomer
} from '@/services';

const useActionData = (
  setData: React.Dispatch<React.SetStateAction<ICustomerData>>
) => {
  const [loadingData, setLoading] = useState(false);

  // Handle update data
  const handleAddData = async (customer: ICustomerData) => {
    setLoading(true);
    try {
      await addToCustomer(customer, setData, (error) => {
        throw new Error(error.message)}
      );
    } catch (error) {
      throw new Error(MESSAGE_ADD_CUSTOMER.FAILED)
    } finally {
      setLoading(false);
    }
  }

   // Handle update data
  const handleUpdateData = async (customer: ICustomerData) => {
    setLoading(true);
    try {
      await updateToCustomer(customer, setData, (error) => {
        throw new Error(error.message)}
      );
    } catch (error) {
      throw new Error(MESSAGE_EDIT_CUSTOMER.FAILED)
    } finally {
      setLoading(false);
    }
  }

  // Handle delete customer
  const handleDeleteCustomer = async (customer: ICustomerData) => {
    setLoading(true);
    try {
      await deletedCustomer(customer, setData, (error) => {
        throw new Error(error.message)}
      );
    } catch (error) {
      throw new Error(MESSAGE_DELETE_CUSTOMER.FAILED);
    } finally {
      setLoading(false);
    }
  }

  // Handle get customer
  const handleGetCustomer = async (id: string | number) => {
    setLoading(true);
    try {
      await getedCustomer(id,  setData, (error) => {
        throw new Error(error.message)}
      );
    } catch (error) {
      throw new Error(MESSAGE_GET_CUSTOMER.FAILED);
    } finally {
      setLoading(false);
    }
  }
  return { handleAddData, handleUpdateData, handleDeleteCustomer, handleGetCustomer, loadingData }
}

export default useActionData;
