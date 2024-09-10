// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Table from ".";

// Mocks
import { MOCK_CUSTOMER, MOCK_COLUMNS } from "@/mocks";

const meta: Meta<typeof Table> = {
  title: "Components/Table/Table",
  tags: ["autodocs"],
  component: Table,
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
    search: {
      field: "id",
      param: "page",
      valueParam: "1",
      placeholder: "Search..."
    },
    columns: MOCK_COLUMNS,
  },
};

export const Empty: Story = {
  args: {
    data: [],
    columns: MOCK_COLUMNS,
  },
};
