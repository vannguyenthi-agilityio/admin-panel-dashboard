// Constants
import {
  ITEM_BREADCRUMB_FORM
} from '@/constants';

// Features
import CustomerCreate from '@/features/CustomerCreate';

// Components
import IBreadcrumb from '@/components/commons/Breadcrumb';

const CustomerCreatePage = () => {
  return (
    <div className='min-h-screen mx-auto pt-[100px] px-6'>
      <h4 className="text-[20px] md:text-lg text-darker font-medium">Create Customer</h4>
      <IBreadcrumb itemsBreadcrumb={ITEM_BREADCRUMB_FORM} />
      <CustomerCreate />
    </div>
  );
};

export default CustomerCreatePage;
