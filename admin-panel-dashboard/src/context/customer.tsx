import { ReactNode, createContext, useContext, useMemo, useState } from "react";

// Types
import { ICustomerData } from '@/types';

// Mocks
import { MOCK_INIT_CUSTOMER_DATA } from '@/mocks';

// Constants
import { MESSAGES_ERROR, ACTION_TYPE } from '@/constants';

export interface Customer {
  customerData: ICustomerData;
  customerAction: ACTION_TYPE;
}

interface ICustomerContext extends Customer {
  setDataCustomer: (customerData: ICustomerData) => void;
  setActionCustomer: (customerAction: ACTION_TYPE) => void;
}

const initialCustomer: ICustomerContext = {
  customerData: MOCK_INIT_CUSTOMER_DATA,
  setDataCustomer: () => {},
  setActionCustomer: () => {},
  customerAction: ACTION_TYPE.DETAIL
};

const CustomerContext = createContext<ICustomerContext>(initialCustomer);

export const CustomerProvider = ({
  children,
}: {
  children?: ReactNode;
}) => {
  const [customerData, setDataCustomer] = useState<ICustomerData>(MOCK_INIT_CUSTOMER_DATA);
  const [customerAction, setActionCustomer] = useState<ACTION_TYPE>(ACTION_TYPE.DETAIL);

  const values = useMemo(() => (
    { customerData, setDataCustomer, customerAction, setActionCustomer }
  ), [customerData, customerAction]);

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
