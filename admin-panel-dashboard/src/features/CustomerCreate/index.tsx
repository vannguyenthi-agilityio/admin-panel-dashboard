import { memo } from 'react';

// Components
import CustomerInfoForm from '@/components/Form/CustomerInfoForm';

import {
  MOCK_INIT_CUSTOMER_DATA,
} from '@/mocks';

const CustomerCreateForm = () => {

  return (
    <div className="flex items-center justify-center min-h-[200px] py-[20px]">
      <CustomerInfoForm
        customer={MOCK_INIT_CUSTOMER_DATA}
      />
    </div>
  );
};

export default memo(CustomerCreateForm);
