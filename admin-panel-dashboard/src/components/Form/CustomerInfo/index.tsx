import { memo } from "react";
import { Control, Controller } from "react-hook-form";

// Constants
import {
  REGEX,
  MESSAGES_ERROR,
  MESSAGES_WARNING,
  NUMBER_REGEX,
  PREFIX_PHONE_NUMBER
} from "@/constants";

// Components
import {
  Input,
  BirthDayField,
} from "@/components";

// Types
import { ICustomerData } from "@/types";

// Helper
import { validateBirthDate, formatPhoneNumber } from "@/helpers";

// Icons
import { UKIcon } from "@/components/Icons";

interface ICustomerInfo {
  control: Control<ICustomerData>;
}

const CustomerInfo = ({ control }: ICustomerInfo) => (
  <div className="grid grid-cols-1 items-start bg-white rounded-lg shadow-box-icon-default auto-rows-min h-full">
    <Controller
      name="firstName"
      control={control}
      rules={{
        required: MESSAGES_ERROR.FIELD_REQUIRED,
        minLength: {
          value: 2,
          message: MESSAGES_ERROR.MIN_LENGTH_2,
        },
        pattern: {
          value: REGEX.NAME,
          message: MESSAGES_ERROR.NAME_INVALID,
        },
      }}
      render={({
        field: { value, onChange, onBlur, ...rest },
        fieldState: { error },
      }) => (
        <div className="min-h-[90px] w-full">
          <Input
            type="text"
            id="first-name"
            data-testid="first-name"
            label="First Name"
            required={true}
            errorMessage={error?.message}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...rest }
          />
        </div>
      )}
    />

    <Controller
      name="lastName"
      control={control}
      rules={{
        required: MESSAGES_ERROR.FIELD_REQUIRED,
        minLength: {
          value: 2,
          message: MESSAGES_ERROR.MIN_LENGTH_2,
        },
        pattern: {
          value: REGEX.NAME,
          message: MESSAGES_ERROR.NAME_INVALID,
        },
      }}
      render={({ field: { value, onChange, onBlur, ...rest }, fieldState: { error } }) => (
        <div className="min-h-[90px] w-full">
          <Input
            type="text"
            id="last-name"
            data-testid="last-name"
            label="Last Name"
            required={true}
            errorMessage={error?.message}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            {...rest}
          />
        </div>
      )}
    />

    <Controller
      name="idNumber"
      control={control}
      rules={{
        required: MESSAGES_ERROR.FIELD_REQUIRED,

        pattern: {
          value: NUMBER_REGEX,
          message: MESSAGES_ERROR.ID_NUMBER_INVALID,
        },
      }}
      render={({ field: { value, onChange, onBlur, ...rest }, fieldState: { error } }) => {
        return(
          <div className="min-h-[90px] w-full">
            <Input
              id="id-number"
              data-testid="id-number"
              label="ID Number"
              required={true}
              errorMessage={error?.message}
              value={value}
              onChange={onChange}
              onBlur={onBlur}
              {...rest}
            />
            {!error?.message && (
              <p className="pt-1 text-xs text-seldom">
                {MESSAGES_WARNING.ID_NUMBER}
              </p>
            )}
          </div>
        )
      }}
    />
    <Controller
        control={control}
        name="dateOfBirth"
        rules={{
          validate: validateBirthDate,
        }}
        render={({ field: { value, onChange }, fieldState: { error } }) => {
          return (
          <div className="w-full min-h-[90px] my-3">
            <BirthDayField
              required
              value={value}
              onChange={onChange}
              errorMessage={error?.message}
            />
          </div>)
        }}
      />
    <Controller
      control={control}
      rules={{
        pattern: {
          value: REGEX.PHONE_NUMBER,
          message: MESSAGES_ERROR.INVALID_PHONE_NUMBER,
        },
      }}
      name="phoneNumber"
      render={({ field: { value, onChange, onBlur, ...rest }, fieldState: { error } }) => {
        const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
          const valuePhone = event.target.value;
          const phoneValueFormatter = formatPhoneNumber(valuePhone);
          onChange(phoneValueFormatter);
        };

        return (
          <div className="min-h-[90px] col-span-1">
            <Input
              type="text"
              contentPrefix={PREFIX_PHONE_NUMBER}
              className="pl-[60px]"
              label="Phone number"
              id="phoneNumber"
              leftElement={<UKIcon className="h-4 w-4" />}
              value={value}
              errorMessage={error?.message}
              onChange={handleChange}
              onBlur={onBlur}
              {...rest}
            />
          </div>
        );
      }}
    />
    <Controller
      control={control}
      rules={{
        required: MESSAGES_ERROR.FIELD_REQUIRED,
        pattern: {
          value: REGEX.EMAIL,
          message: MESSAGES_ERROR.EMAIL_INVALID,
        },
      }}
      name="email"
      render={({ field: { value, onChange, onBlur, ...rest }, fieldState: { error } }) => (
        <div className="min-h-[90px] w-full">
          <Input
            label="Email"
            id="email"
            required={true}
            value={value}
            errorMessage={error?.message}
            onChange={onChange}
            onBlur={onBlur}
            {...rest}
          />
        </div>
      )}
    />
  </div>
);

export default memo(CustomerInfo);
