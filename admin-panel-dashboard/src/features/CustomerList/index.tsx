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
  MESSAGE_ADD_CUSTOMER
} from '@/constants';

// Helpers
import { formatDataTable, convertDateToDateTime } from "@/helpers";

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

  const { setDataCustomer, customerAction } = useCustomer();
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
      data && (isEdit || isCreate) && openToast(
        {
          type: data ? TOAST_TYPE.SUCCESS : TOAST_TYPE.ERROR,
          message: isEdit ? MESSAGE_EDIT_CUSTOMER.SUCCESS : MESSAGE_ADD_CUSTOMER.SUCCESS
        }
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
    setCustomerSearchData(formatDataTable(cutomerData));
    fullNameFilter = searchParams.get(search.field) as string;
    if (fullNameFilter) handleSearch(fullNameFilter, cutomerData);
  }, [cutomerData, fullNameFilter]);

  useEffect(() => {
    setCustomerSearchData(formatDataTable(cutomerData));
    itemSortBy = params.get("sortBy") as string;
    const itemOrderBy = params.get("orderBy") as DIRECTION;
    if (itemSortBy) handleSort(itemSortBy, itemOrderBy);
  }, [cutomerData, itemSortBy]);

  useEffect(() => {
    // Get data from api
    fetchData(getData, setCustomerData, MESSAGE_GET_CUSTOMER.FAILED);
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
      if (fullNameFilter === "") fetchData(getData, setCustomerData, MESSAGE_GET_CUSTOMER.FAILED);

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

  const handleSort = (key: string, ascending: DIRECTION) => {
    const storyDataCusstomer = cutomerData;
    switch (key) {
      case 'fullName':
        if (ascending === DIRECTION.DESC) {
          const sortedCusstomer = formatDataTable(storyDataCusstomer).sort((a, b) => a.fullName.localeCompare(b.fullName));
          setCustomerSearchData(sortedCusstomer);
        } else {
          const sortedCusstomer = formatDataTable(storyDataCusstomer).sort((a, b) => b.fullName.localeCompare(a.fullName));
          setCustomerSearchData(sortedCusstomer);
        }
        break;
      case 'email':
        if (ascending === DIRECTION.DESC) {
          const sortedCusstomer = storyDataCusstomer.sort((a, b) => a.email.localeCompare(b.email));
          setCustomerSearchData(formatDataTable(sortedCusstomer));
        } else {
          const sortedCusstomer = storyDataCusstomer.sort((a, b) => b.email.localeCompare(a.email));
          setCustomerSearchData(formatDataTable(sortedCusstomer));
        }
        break;
      case 'dateOfBirth':
        if (ascending === DIRECTION.DESC) {
          const sortedCusstomer = storyDataCusstomer.sort((a, b) =>
          Date.parse(convertDateToDateTime(a.dateOfBirth, FORMAT_DATE.MONTH_DAY_YEAR)) - Date.parse(convertDateToDateTime(b.dateOfBirth, FORMAT_DATE.MONTH_DAY_YEAR)));
          setCustomerSearchData(formatDataTable(sortedCusstomer));
        
        } else {
          const sortedCusstomer = storyDataCusstomer.sort((a, b) => 
          Date.parse(convertDateToDateTime(b.dateOfBirth, FORMAT_DATE.MONTH_DAY_YEAR)) - Date.parse(convertDateToDateTime(a.dateOfBirth, FORMAT_DATE.MONTH_DAY_YEAR)));
          setCustomerSearchData(formatDataTable(sortedCusstomer));
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

  const handleSortingChange = useCallback(
    (key: string) => {
      params.set("sortBy", key);

      const orderByParam =
        params.get("orderBy") === DIRECTION.DESC
          ? DIRECTION.ASC
          : DIRECTION.DESC;

      params.set("orderBy", orderByParam);
      if (cutomerData.length > 0) {
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
      {loading || loadingData ?
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
            data={cutomerSearchData.slice((currentPage - 1 )*5, currentPage * 5)}
            columns={renderColumn}
            onActionCustomer={handleActionCustomer}
            onSortFieldCustomer={handleSortingChange}
          />
          {hasPagination &&
            <Pagination
              currentPage = {currentPage}
              pageSize= {5}
              totalCount={cutomerSearchData.length}
              onPageChange={handlePageChange}
            />
          }
          <Modal
            isOpen={isShowModal}
            title="Confirm Delete Customer"
            labelButton="Yes"
            onClose={() => setShowModal(false)}
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
