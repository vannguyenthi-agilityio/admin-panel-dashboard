// Components
import { Loading } from '@/components';
import CustomerInfoForm from '@/components/Form/CustomerInfoForm';

import {
  useCustomer,
} from '@/context/customer';

const CustomerForm = () => {
  const { customerData  } = useCustomer();
  return (
    <div className="flex items-center justify-center min-h-[200px] py-[20px]">
      {!customerData ?
        <Loading />
        :
        <CustomerInfoForm customer={customerData} id={Number(customerData.id)} />
        }
    </div>
  );
};

export default CustomerForm;
