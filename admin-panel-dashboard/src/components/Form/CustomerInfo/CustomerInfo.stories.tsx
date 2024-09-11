import type { Meta, StoryObj } from "@storybook/react";

// Libs
import { useForm } from "react-hook-form";

// Components
import CustomerInfo from ".";

// Types
import { ICustomerData } from "@/types";

const meta: Meta<typeof CustomerInfo> = {
  title: "Components/Form/CustomerForm",
  component: CustomerInfo,
  tags: ["autodocs"],
  argTypes: {
    control: {
      description:
        "This is control from useForm of react-hook-form with type ICustomerData({firstName: string, lastName: string, idNumber: number, dateOfBirth: object, phoneNumber: string})",
    }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

const CustomerInfoProvider = () => {
  const {
    control,
  } = useForm<ICustomerData>({
    defaultValues: {
      firstName: "Andrew",
      lastName: "Bachmaga",
      idNumber: 1234567890,
      email: "jone@gmail.com",
      dateOfBirth: { months: "", date: 0, years: 0 },
      phoneNumber: "20 7123 4567"
    },
  });

  return <CustomerInfo control={control}  />;
};

export const Default: Story = {
  render: () => <CustomerInfoProvider />,
};
