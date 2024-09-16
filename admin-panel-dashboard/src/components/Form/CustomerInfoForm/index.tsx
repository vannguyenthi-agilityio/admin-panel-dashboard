import { useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';

// Components
import { Button } from "@/components";
import CustomerInfo from '@/components/Form/CustomerInfo'

// Types
import { ICustomerData } from "@/types";

// Hocs
import { TOAST_TYPE, TWithToast, withToast } from "@/hocs/withToast";

// Hooks
import { useActionData } from '@/hooks';

// Constants
import { ROUTES, MESSAGE_ADD_CUSTOMER, MESSAGE_EDIT_CUSTOMER, FORM_TYPE } from '@/constants';

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
  const { handleAddData, handleUpdateData } = useActionData(setData);
  const {firstName, lastName, idNumber, dateOfBirth, phoneNumber, email} = customer;
  const [isLoading, setIsLoading] = useState(false);

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

  const hanleDiscardChange = () => {
    reset({ ...MOCK_INIT_CUSTOMER_DATA })
  }

  const hanleCancelEdit = () => {
    navigate(ROUTES.CUSTOMERS);
  }

  const onSubmit = useCallback(
    async (data: ICustomerData) => {
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
      } else {
        handleAddData(newData);
      }

      setIsLoading(true);

      reset(data);

      setIsLoading(false);

      openToast({
        type: data ? TOAST_TYPE.SUCCESS : TOAST_TYPE.ERROR,
        message: data
          ? isEdit ? MESSAGE_EDIT_CUSTOMER.SUCCESS : MESSAGE_ADD_CUSTOMER.SUCCESS
          : isEdit ? MESSAGE_EDIT_CUSTOMER.FAILED : MESSAGE_ADD_CUSTOMER.FAILED,
      });
      navigate(ROUTES.CUSTOMERS);
    },
    [id, openToast, reset],
  );

  return (
    <>
      {isLoading && (
        <div className="opacity-25 fixed inset-0 z-20 bg-black cursor-not-allowed" />
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
                buttonType={`${!formState.isDirty || isLoading ? "disabled" : "secondary"}`}
              />
              <Button
                onClick={hanleDiscardChange}
                label="Discard Changes"
                buttonType={`${!formState.isDirty || isLoading ? "disabled" : "outline"}`}
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

export default CustomerInfoFormWithToast;
