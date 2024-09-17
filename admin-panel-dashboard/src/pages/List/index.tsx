// Features
import CustomerList from '@/features/CustomerList';

// Components
import IBreadcrumb from '@/components/commons/Breadcrumb';

const CustomerListPage = () => {
  return (
    <div className='min-h-screen mx-auto pt-[100px] px-6'>
      <h4 className="text-[20px] md:text-lg text-darker font-medium">Customers' List</h4>
      <IBreadcrumb />
      <CustomerList
        hasPagination
        search={{
          field: "fullName",
          param: "page",
          valueParam: "1",
          placeholder: "Search by name",
        }}
      />
    </div>
  );
};

export default CustomerListPage;
