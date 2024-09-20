// Components
import IBreadcrumb from '@/components/commons/Breadcrumb';
import { NotFound } from '@/components';

const NotFoundPage = () => {

  return (
    <div className='min-h-screen mx-auto pt-[100px] px-6'>
      <h4 className="text-[20px] md:text-lg text-darker font-medium">Not Found</h4>
      <IBreadcrumb />
      <NotFound message="Page Not Found"/>
    </div>
  );
};

export default NotFoundPage;
