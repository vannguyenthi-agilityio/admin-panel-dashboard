import type { Meta, StoryObj } from "@storybook/react";

// Components
import CustomerEditForm from ".";

const meta: Meta<typeof CustomerEditForm> = {
  title: "Components/Form/CustomerEditForm",
  component: CustomerEditForm,
  tags: ["autodocs"],
  argTypes: {
    customer: {
      id: "1",
      firstName: "",
      lastName: "",
      idNumber: 1,
      phoneNumber: "20 7123 4567",
      dateOfBirth: { months: "", date: 0, years: 0 },
      email: "",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const UserInfoFormDefault: Story = {
  args: {
    customer: {
      id: "1",
      firstName: "",
      lastName: "",
      idNumber: 1,
      phoneNumber: "20 7123 4567",
      dateOfBirth: { months: "", date: 0, years: 0 },
      email: "",
    },
  },
};
