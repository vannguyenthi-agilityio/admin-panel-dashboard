import type { Meta, StoryObj } from "@storybook/react";

// Components
import BirthDayField from ".";
import { MESSAGES_ERROR } from "@/constants";

const meta: Meta<typeof BirthDayField> = {
  title: "Components/Form/BirthDayField",
  component: BirthDayField,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: { months: "", date: 0, years: 0 },
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const FieldWithErrorMessage: Story = {
  args: {
    errorMessage: MESSAGES_ERROR.FIELD_REQUIRED,
  },
};
