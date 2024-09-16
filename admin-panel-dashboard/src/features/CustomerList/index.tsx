import { useEffect, useState, useCallback, useMemo, useTransition } from "react";
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

// Components
import { Table } from '@/components/Table';
import { Loading, Modal, Button, Input, Pagination } from '@/components';
import { SearchIcon } from "@/components/Icons"

// Constants
import { MESSAGES_ERROR, ROUTES, MESSAGE_GET_CUSTOMER, ACTION_TYPE } from '@/constants';

// Helpers
import { formatDataTable } from "@/helpers";

// Mocks
import { MOCK_COLUMNS, MOCK_INIT_CUSTOMER_DATA } from "@/mocks";

// Types
import { ICustomerData, FetchFunction, ICustomerTable } from "@/types";

// Hooks
import {
  useGetData,
  useActionData
} from '@/hooks';

// Context
import {
  useCustomer,
} from '@/context/customer';

// Hocs
import { TOAST_TYPE, TWithToast, withToast } from "@/hocs/withToast";

// Helpers
import { formatCustomerData } from "@/helpers";

interface SearchProps {
  field: string;
  param: string;
  valueParam: string;
  placeholder?: string;
}

const CustomerList = ({
  hasPagination,
  search= {
    field: "fullName",
    param: "page",
    valueParam: "1",
    placeholder: "Search by name",
  },
  openToast
}: TWithToast<{
  pageSize?: number;
  className?: string;
  hasPagination?: boolean;
  total?: number;
  search?: SearchProps;
}>) => {
  
  const { getData, loading } = useGetData();
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
  const pathname = usePathname() ?? "";
  let fullNameFilter = "";
  
  const [searchParams] = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams],
  );
 
  const handleReplaceURL = useCallback((params: URLSearchParams) => {
    startTransition(() => {
      navigate(`${pathname}?${params.toString()}`, { replace: true });
    });
  },
  [pathname, navigate]);

  const { setDataCustomer } = useCustomer();
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<ICustomerData>(MOCK_INIT_CUSTOMER_DATA);
  const { handleDeleteCustomer, loadingData } = useActionData(setData);
  const renderColumn = [
    ...MOCK_COLUMNS,
    {
      key: "action",
      title: "",
      isSortable: false,
    },
  ]

  const handleAddNewCustomer = () => {
    // TODO action add
    navigate(ROUTES.CREATE);
  }

  const handleActionCustomer = (customer: ICustomerTable, action: string) => {
    if (customer && action === ACTION_TYPE.EDIT) {
      // TODO action edit
      setDataCustomer(formatCustomerData(customer))
    }

    if (customer && action === ACTION_TYPE.DELETE) {
      // TODO action delete
      setShowModal(true);
      setData(formatCustomerData(customer));
    }

    if (customer && action === ACTION_TYPE.DETAIL) {
      // TODO action show detail
      setDataCustomer(formatCustomerData(customer));
    }
  };

  const handleDeletedCustomer = () => {
    handleDeleteCustomer(data);
    fetchData(getData, setCustomerData, MESSAGE_GET_CUSTOMER.FAILED);
    setShowModal(false);
  }

  const [cutomerData, setCustomerData] = useState<ICustomerData[]>([]);
  const [cutomerSearchData, setCustomerSearchData] = useState<ICustomerTable[]>(formatDataTable(cutomerData));
  
  const fetchData = async <T,>(
    database: FetchFunction<T>,
    setData: React.Dispatch<React.SetStateAction<T>>,
    message: string,
    ) => {
    try {
      const data = await database((error) =>
        openToast({
        type: TOAST_TYPE.ERROR,
        message: `${message}: ${error.message}`,
      }));
      setData(data);
    } catch (error) {
      if (error instanceof Error) {
        openToast({
          type: TOAST_TYPE.ERROR,
          message: `${message}: ${error.message}`,
        });
      } else {
        const error =new Error(MESSAGES_ERROR.UNKNOWN_ERROR);
        openToast({
          type: TOAST_TYPE.ERROR,
          message: `${message}: ${error.message}`,
        });
      }
    }
  }

  // Get data from api
  useEffect(() => {
    setCustomerSearchData(formatDataTable(cutomerData));
    fullNameFilter = searchParams.get(search.field) as string;
    if (fullNameFilter) handleSearch(fullNameFilter, cutomerData);
  }, [cutomerData, fullNameFilter]);

  useEffect(() => {
    fetchData(getData, setCustomerData, "Error get data");
  }, []);

  const handleSearch = useCallback(
    (valueFilter: string, cutomerData: ICustomerData[]) => {
      if (valueFilter) {
        params.set(search.field, valueFilter);
        params.delete("page");
        handleReplaceURL(params);
        const dataFiltered = formatDataTable(cutomerData).filter( (customer) =>
          customer.fullName
            .toString()
            .toLowerCase()
            .includes(valueFilter.toString().trim().toLowerCase()) 
        ) as ICustomerTable[];
        !isPending && setCustomerSearchData(dataFiltered);
        return;
      }
      if (fullNameFilter === "") fetchData(getData, setCustomerData, "Error get data");

      if (params.get(search.field)) {
        params.delete(search.field);
        handleReplaceURL(params);
      }
    },
    
    [handleReplaceURL, params],
  );

  const handleSearchChange = useCallback (
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const value =  event.target.value;
      handleSearch(value, cutomerData);
    },
    [handleReplaceURL, params],
  );

  return (
    <div className="flex items-center justify-center min-h-[200px] py-[20px]">
      {cutomerData.length === 0  && (loading || loadingData) ?  
        <Loading />
        :
        <div className="w-full flex flex-col">
          <div className="flex items-center justify-between flex-wrap my-4 gap-4">
            <Button
              size='small'
              label= 'New Customer'
              className='gap-x-2 min-w-[167px]'
              buttonType='blood'
              leftIcon={<span>+</span>}
              onClick={handleAddNewCustomer}
            />
            { search &&
              <Input
                placeholder='Search...'
                name='search'
                type='text'
                onChange={handleSearchChange}
                leftElement={ <SearchIcon />}
                className="max-w-[320px] lg:min-w-[320px]"
              />
            }
          </div>
          <Table
            data={cutomerSearchData}
            columns={renderColumn}
            onActionCustomer={handleActionCustomer}
          />
          {hasPagination &&
            <Pagination
              currentPage = {1}
              pageSize= {5}
              totalCount={10}
              onPageChange={ () => {}}
            />
          }
          <Modal
            isOpen={isShowModal}
            title="Confirm Delete Customer"
            labelButton="Yes"
            onClose={() => setShowModal(false)}
            onClick={handleDeletedCustomer}
            className="max-w-[500px]"
            children={<p className="py-4">Are you sure delete this customer?</p>}
          />
        </div>
      }
    </div>
  );
};

const CustomerListWithToast = withToast(CustomerList);

export default CustomerListWithToast;
