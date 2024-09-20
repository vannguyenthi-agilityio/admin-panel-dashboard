import { useEffect, useState, memo } from 'react';
import { useParams } from 'react-router-dom';

// Components
import { Loading, NotFound } from '@/components';
import CustomerInfoForm from '@/components/Form/CustomerInfoForm';

// Types
import { ICustomerData } from '@/types';

// Types
import { FORM_TYPE } from '@/constants';

// Hooks
import { useActionData } from '@/hooks';

import { MOCK_INIT_CUSTOMER_DATA } from '@/mocks';

const CustomerEditForm = () => {
  const { id } = useParams();

  const [data, setData] = useState<ICustomerData>(MOCK_INIT_CUSTOMER_DATA);

  const { handleGetCustomer, errorMessage } = useActionData(setData);

  // Get data from api
  useEffect(() => {
    if (id) handleGetCustomer(id);
  }, []);

  if (errorMessage) {
    return <NotFound message={errorMessage.toString()} />
  }

  return (
    <div className="flex items-center justify-center min-h-[200px] py-[20px]">
      {!data.id ?
        <Loading />
        :
        <CustomerInfoForm
          type={FORM_TYPE.EDIT}
          customer={data}
          id={id}
        />
        }
    </div>
  );
};

export default memo(CustomerEditForm);
