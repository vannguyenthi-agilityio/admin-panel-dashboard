import { ReactNode, createContext, useContext, useMemo, useState } from "react";

// Types
import { ICustomerData } from '@/types';

// Mocks
import { MOCK_INIT_CUSTOMER_DATA } from '@/mocks';

// Constants
import { MESSAGES_ERROR } from '@/constants';

export interface Customer {
  customerData: ICustomerData;
  isEdit: boolean;
}

interface ICustomerContext extends Customer {
  setDataCustomer: (customerData: ICustomerData) => void;
  setShowEditForm: (isEdit: boolean) => void;
}

const initialCustomer: ICustomerContext = {
  customerData: MOCK_INIT_CUSTOMER_DATA,
  setDataCustomer: () => {},
  isEdit: false,
  setShowEditForm: () => {}
};

const CustomerContext = createContext<ICustomerContext>(initialCustomer);

export const CustomerProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [customerData, setDataCustomer] = useState<ICustomerData>(MOCK_INIT_CUSTOMER_DATA);

  const [isEdit, setShowEditForm] = useState<boolean>(false);

  const values = useMemo(() => (
    { customerData, setDataCustomer, isEdit, setShowEditForm }
  ), [customerData, isEdit]);

  return (
    <CustomerContext.Provider value={values}>{children}</CustomerContext.Provider>
  );
};

export const useCustomer = () => {
  const context = useContext(CustomerContext);

  if (!context) {
    throw new Error(MESSAGES_ERROR.CUSTOMER_CONTEXT_ERROR);
  }

  return context;
};
