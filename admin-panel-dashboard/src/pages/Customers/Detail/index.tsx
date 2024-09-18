// Components
import IBreadcrumb from '@/components/commons/Breadcrumb';

// Features
import CustomerDetail from '@/features/CustomerDetail';

// Types
import { IItemBreadcrumb } from '@/types';

// Constants
import { ITEM_BREADCRUMB } from '@/constants';

const DetailPage = () => {
  const ITEM_BREADCRUMB_DETAIL: IItemBreadcrumb[] = [
    ... ITEM_BREADCRUMB,
    {
      href: '#',
      crumbName: "Detail",
      linkActiveCrumb: true,
      linkIndex: 3
    }
  ]
  return (
    <div className='min-h-screen mx-auto pt-[100px] px-6'>
      <h4 className="text-[20px] md:text-lg text-darker font-medium">Customer Detail</h4>
      <IBreadcrumb itemsBreadcrumb={ITEM_BREADCRUMB_DETAIL} />
      <CustomerDetail />
    </div>
  );
};

export default DetailPage;
