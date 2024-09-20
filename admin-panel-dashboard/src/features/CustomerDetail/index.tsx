import { useEffect, useState, memo } from "react";
import { useParams } from 'react-router-dom';

// Types
import { ICustomerData } from "@/types";

// Constants
import { FORM_TYPE } from "@/constants";

// Mocks
import { MOCK_INIT_CUSTOMER_DATA } from "@/mocks";

// Components
import { Loading, NotFound } from '@/components';
import CustomerInfoForm from '@/components/Form/CustomerInfoForm';

// Hooks
import { useActionData } from '@/hooks';

const CustomerDetail = () => {

  const { id } = useParams();

  const [data, setData] = useState<ICustomerData>(MOCK_INIT_CUSTOMER_DATA);

  const { handleGetCustomer, errorMessage } = useActionData(setData);

  // Get data from api
  useEffect(() => {
    if(id) handleGetCustomer(id);
  }, []);

  if (errorMessage) {
    return <NotFound message={errorMessage.toString()} />
  }

  return (
    <div className="w-full flex items-center justify-center min-h-[200px] py-[20px]">
      {!data.id ?
        <Loading />
        :
          <CustomerInfoForm type={FORM_TYPE.DETAIL} customer={data} id={id} />
        }
    </div>
  );
};

export default memo(CustomerDetail);
