// Constants
import {
  ITEM_BREADCRUMB_EDIT_FORM
} from '@/constants';

// Features
import CustomerEdit from '@/features/CustomerEdit';

// Components
import IBreadcrumb from '@/components/commons/Breadcrumb';

const CustomerEditPage = () => {
  return (
    <div className='min-h-screen mx-auto pt-[100px] px-6'>
      <h4 className="text-[20px] md:text-lg text-darker font-medium">Edit Customer</h4>
      <IBreadcrumb itemsBreadcrumb={ITEM_BREADCRUMB_EDIT_FORM} />
      <CustomerEdit />
    </div>
  );
};

export default CustomerEditPage;
