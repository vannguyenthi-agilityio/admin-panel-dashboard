// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableBody from ".";

// Mocks
import { MOCK_CUSTOMER, MOCK_COLUMNS } from "@/mocks";

// Types
import { IColumnType } from "@/types";

const meta: Meta<typeof TableBody> = {
  title: "Components/Table/TableBody",
  tags: ["autodocs"],
  component: TableBody,
  argTypes: {
    data: { description: "data of body table" },
    columns: { description: "columns of table" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: MOCK_CUSTOMER,
    columns: MOCK_COLUMNS,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: MOCK_COLUMNS,
  },
};
