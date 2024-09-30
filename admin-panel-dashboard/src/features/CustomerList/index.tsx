import { useEffect, useState, useCallback, useMemo, useTransition, memo } from "react";
import { useSearchParams, useLocation, useNavigate } from 'react-router-dom';

// Components
import { Table } from '@/components/Table';
import { Loading, Modal, Button, Input, Pagination, NotFound } from '@/components';
import { SearchIcon } from "@/components/Icons"

// Constants
import {
  MESSAGES_ERROR,
  ROUTES,
  MESSAGE_GET_CUSTOMER,
  ACTION_TYPE,
  DIRECTION,
  FORMAT_DATE,
  MESSAGES_WARNING,
  MESSAGE_EDIT_CUSTOMER,
  MESSAGE_ADD_CUSTOMER,
  MESSAGE_DELETE_CUSTOMER
} from '@/constants';

// Helpers
import { formatDataTable, convertDateToDateTime, formatCustomerData } from "@/helpers";

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

interface SearchProps {
  field: string;
  param: string;
  valueParam: string;
  placeholder?: string;
}

const CustomerList = ({
  hasPagination = false,
  search = {
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
  const [customerFetchData, setCustomerFetchData] = useState<ICustomerData[]>([]);
  const [pageSize, setPageSize] = useState<number>(5);
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();
  const usePathname = () => {
    const location = useLocation();
    return location.pathname;
  }
  const pathname = usePathname() ?? "";
  let fullNameFilter = "";
  let itemSortBy = "";
  
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

  const { setDataCustomer, customerAction, setActionCustomer } = useCustomer();
  const [isShowModal, setShowModal] = useState<boolean>(false);
  const [data, setData] = useState<ICustomerData>(MOCK_INIT_CUSTOMER_DATA);
  const { handleDeleteCustomer, loadingData, errorMessage } = useActionData(setData);
  const renderColumn = [
    ...MOCK_COLUMNS,
    {
      key: "action",
      title: "",
      isSortable: false,
    },
  ]
  const currentPage = parseInt(params.get("page") ?? "1");
  const isEdit = customerAction ===  ACTION_TYPE.EDIT;
  const isCreate = customerAction === ACTION_TYPE.CREATE;
  const isDelete = customerAction === ACTION_TYPE.DELETE;
  const [customersData, setCustomersData] = useState<ICustomerTable[]>(formatDataTable(customerFetchData));
  const totalCustomers = customersData.length;
  const dataCustomers = customersData.slice((currentPage - 1 ) * pageSize, currentPage * pageSize);

  const handleAddNewCustomer = () => {
    // TODO action add
    navigate(ROUTES.CREATE);
  }

  const handleActionCustomer = (customer: ICustomerTable, action: string) => {
    if (customer && action === ACTION_TYPE.EDIT) {
      // TODO action edit
      setDataCustomer(formatCustomerData(customer));
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
    !loadingData && setShowModal(false);
  }

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
      data && ((isEdit || isCreate || isDelete) && !loadingData) && openToast(
        {
          type: data ? TOAST_TYPE.SUCCESS : TOAST_TYPE.ERROR,
          message: isEdit ? MESSAGE_EDIT_CUSTOMER.SUCCESS : isCreate ? MESSAGE_ADD_CUSTOMER.SUCCESS : MESSAGE_DELETE_CUSTOMER.SUCCESS
        },
        () => {
          setActionCustomer(ACTION_TYPE.DETAIL);
        },
      );
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

  useEffect(() => {
    if (!totalCustomers) setCustomersData(formatDataTable(customerFetchData));
    fullNameFilter = searchParams.get(search.field) as string;
    if (fullNameFilter) handleSearch(fullNameFilter, customerFetchData);

    itemSortBy = params.get("sortBy") as string;
    const itemOrderBy = params.get("orderBy") as DIRECTION;
    if (itemSortBy) handleSort(itemSortBy, itemOrderBy);
  }, [customerFetchData]);

  useEffect(() => {
    if (isDelete) {
      params.delete(search.field);
      params.delete("page");
      handleReplaceURL(params);
    }
    if ((isDelete || isEdit) && !loadingData) {
      fetchData(getData, setCustomerFetchData, MESSAGE_GET_CUSTOMER.FAILED);
      setCustomersData(formatDataTable(customerFetchData));
    }
  }, [loadingData]);

  useEffect(() => {
    if (customerFetchData.length === 0 && (!isEdit || !isDelete)) {
      // Get data from api
      fetchData(getData, setCustomerFetchData, MESSAGE_GET_CUSTOMER.FAILED);
    }
    formatDataTable(customerFetchData) !== customersData && setCustomersData(formatDataTable(customerFetchData));
  }, [customerFetchData]);

  const handleSearch = useCallback(
    (valueFilter: string, customerFetchData: ICustomerData[]) => {
      if (valueFilter) {
        params.set(search.field, valueFilter);
        params.delete("page");
        handleReplaceURL(params);
        const dataFiltered = formatDataTable(customerFetchData).filter( (customer) =>
          customer.fullName
            .toString()
            .toLowerCase()
            .includes(valueFilter.toString().trim().toLowerCase()) 
        ) as ICustomerTable[];
        !isPending && setCustomersData(dataFiltered);
        return;
      }
      if (fullNameFilter === "") {
        fetchData(getData, setCustomerFetchData, MESSAGE_GET_CUSTOMER.FAILED);
        setCustomersData(formatDataTable(customerFetchData));
      }

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
      handleSearch(value, customerFetchData);
    },
    [handleReplaceURL, params],
  );

  const handleSort = (key: string, ascending: DIRECTION) => {
    const storyDataCusstomer = customerFetchData;
    switch (key) {
      case 'fullName':
        if (ascending === DIRECTION.DESC) {
          const sortedCusstomer = formatDataTable(storyDataCusstomer).sort((a, b) => a.fullName.localeCompare(b.fullName));
          setCustomersData(sortedCusstomer);
        } else {
          const sortedCusstomer = formatDataTable(storyDataCusstomer).sort((a, b) => b.fullName.localeCompare(a.fullName));
          setCustomersData(sortedCusstomer);
        }
        break;
      case 'email':
        if (ascending === DIRECTION.DESC) {
          const sortedCusstomer = storyDataCusstomer.sort((a, b) => a.email.localeCompare(b.email));
          setCustomersData(formatDataTable(sortedCusstomer));
        } else {
          const sortedCusstomer = storyDataCusstomer.sort((a, b) => b.email.localeCompare(a.email));
          setCustomersData(formatDataTable(sortedCusstomer));
        }
        break;
      case 'dateOfBirth':
        if (ascending === DIRECTION.DESC) {
          const sortedCusstomer = storyDataCusstomer.sort((a, b) =>
          Date.parse(convertDateToDateTime(a.dateOfBirth, FORMAT_DATE.MONTH_DAY_YEAR)) - Date.parse(convertDateToDateTime(b.dateOfBirth, FORMAT_DATE.MONTH_DAY_YEAR)));
          setCustomersData(formatDataTable(sortedCusstomer));
        
        } else {
          const sortedCusstomer = storyDataCusstomer.sort((a, b) => 
          Date.parse(convertDateToDateTime(b.dateOfBirth, FORMAT_DATE.MONTH_DAY_YEAR)) - Date.parse(convertDateToDateTime(a.dateOfBirth, FORMAT_DATE.MONTH_DAY_YEAR)));
          setCustomersData(formatDataTable(sortedCusstomer));
        }
        break;
      default:
        break;
    }
  }

  const handlePageChange = useCallback(
    (page: number) => {
      if (page === 1) {
        params.delete("page");
      } else {
        params.set("page", `${page}`);
      }

      handleReplaceURL(params);
    },
    [handleReplaceURL, params],
  );

  const handlePageSizeChange = useCallback(
    (pageSize: number) => {
      if (params.get("page")){
        params.delete("page");
        handleReplaceURL(params);
      };
      setPageSize(pageSize);
    },
    [handleReplaceURL, params, totalCustomers],
  );

  const handleSortingChange = useCallback(
    (key: string) => {
      params.set("sortBy", key);

      const orderByParam =
        params.get("orderBy") === DIRECTION.DESC
          ? DIRECTION.ASC
          : DIRECTION.DESC;

      params.set("orderBy", orderByParam);
      if (customerFetchData.length > 0) {
        handleSort(key, orderByParam);
      } 
      handleReplaceURL(params);
    },
    [handleReplaceURL, params],
  );

  if (errorMessage) {
    return <NotFound message={errorMessage} />
  }

  return (
    <div className="flex items-center justify-center min-h-[200px] py-[20px]">
      {loading?
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
                placeholder={search.placeholder}
                name='search'
                type='text'
                onChange={handleSearchChange}
                leftElement={ <SearchIcon />}
                className="max-w-[320px] lg:min-w-[320px]"
              />
            }
          </div>
          <Table
            data={dataCustomers}
            columns={renderColumn}
            onActionCustomer={handleActionCustomer}
            onSortFieldCustomer={handleSortingChange}
          />
          {hasPagination &&
            <Pagination
              currentPage = {currentPage}
              pageSize= {pageSize}
              totalCount={customersData.length}
              onPageChange={handlePageChange}
              onPageSizeChange={handlePageSizeChange}
            />
          }
          <Modal
            isOpen={isShowModal || loadingData}
            title="Confirm Delete Customer"
            labelButton="Yes"
            onClose={() => setShowModal(false)}
            isDisable={loadingData}
            onClick={handleDeletedCustomer}
            className="max-w-[500px]"
            children={<p className="py-4">{MESSAGES_WARNING.CONFIRM_DELETE}</p>}
          />
        </div>
      }
    </div>
  );
};

const CustomerListWithToast = withToast(CustomerList);

export default memo(CustomerListWithToast);
