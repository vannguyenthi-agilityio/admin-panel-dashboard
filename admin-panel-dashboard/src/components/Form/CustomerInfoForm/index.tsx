import { useCallback, useState, memo } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

// Components
import { Button, Loading } from "@/components";
import CustomerInfo from '@/components/Form/CustomerInfo'

// Types
import { ICustomerData } from "@/types";

// Constants
import { ACTION_TYPE } from "@/constants";

// Hocs
import { TWithToast, withToast } from "@/hocs/withToast";

// Hooks
import { useActionData } from '@/hooks';

// Helper
import { debounce } from "@/helpers";

// Context
import {
  useCustomer,
} from '@/context/customer';

// Constants
import { ROUTES, FORM_TYPE } from '@/constants';

// Mocks
import { MOCK_INIT_CUSTOMER_DATA } from '@/mocks';

const CustomerInfoForm = ({
  customer,
  id,
  type,
  openToast
}: TWithToast<{
  customer: ICustomerData;
  type?: FORM_TYPE;
  id?: string | number;
}>) => {
  const navigate = useNavigate();

  const isEdit = type === FORM_TYPE.EDIT;
  const isDetail = type === FORM_TYPE.DETAIL;
  const [data, setData] = useState<ICustomerData>((isEdit || isDetail) ? customer : MOCK_INIT_CUSTOMER_DATA);
  const { handleAddData, handleUpdateData, loadingData } = useActionData(setData);
  const { setActionCustomer } = useCustomer();
  const {firstName, lastName, idNumber, dateOfBirth, phoneNumber, email} = customer;
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formHandler = useForm<ICustomerData>({
    defaultValues: {
      ...data,
      firstName: firstName,
      lastName: lastName,
      idNumber: idNumber,
      dateOfBirth: dateOfBirth,
      phoneNumber: phoneNumber,
      email: email,
    },
    mode: "onBlur",
  });

  const { handleSubmit, formState, control, reset } = formHandler;
  const isDisable = !formState.isDirty || !formState.isValid || isLoading;

  const hanleDiscardChange = () => {
    reset({ ...customer });
  }

  const hanleCancelEdit = () => {
    navigate(ROUTES.CUSTOMERS);
  }

  const onSubmit = useCallback(
    async (data: ICustomerData) => {
      setIsLoading(true);
      const newData = {
        id: data?.id,
        idNumber: data?.idNumber,
        email: data?.email,
        firstName: data?.firstName.trim(),
        lastName: data?.lastName.trim(),
        phoneNumber: data?.phoneNumber?.trim(),
        dateOfBirth: data?.dateOfBirth,
      };
      if (isEdit) {
        handleUpdateData(newData);
        setActionCustomer(ACTION_TYPE.EDIT);
      } else {
        handleAddData(newData);
        setActionCustomer(ACTION_TYPE.CREATE);
      }
      reset(data);
      
      debounce(() => {
        setIsLoading(false);
        navigate(ROUTES.CUSTOMERS);
      })();
    },
    [id, openToast, reset],
  );

  return (
    <>
      {(isLoading || loadingData) && (
        <div className="opacity-25 absolute inset-0 z-20 cursor-not-allowed flex justify-center items-center"><Loading /></div>
      )}
      <FormProvider {...formHandler as any}>
        <form
          id="edit-customer-form"
          onSubmit={handleSubmit(onSubmit)}
          className="relative w-full">
          <CustomerInfo
            control={control}
            type={type}
          />
          {!isDetail && 
            <div className="w-full flex gap-2 justify-end mt-6 mb-4">
              <Button
                label={`${isEdit ? 'Edit' : 'Create'}`}
                type="submit"
                buttonType={isDisable ? "disabled" : "secondary"}
              />
              <Button
                onClick={hanleDiscardChange}
                label="Discard Changes"
                buttonType={!formState.isDirty || isLoading ? "disabled" : "outline"}
              />
              <Button
                label="Cancel"
                onClick={hanleCancelEdit}
                disabled={isLoading}
              />
            </div>
          }
        </form>
      </FormProvider>
    </>
  );
};

const CustomerInfoFormWithToast = withToast(CustomerInfoForm);

export default memo(CustomerInfoFormWithToast);
