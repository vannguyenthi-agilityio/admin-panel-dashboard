// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import TableHeader from ".";

// Mocks
import { MOCK_COLUMNS } from "@/mocks";

const meta: Meta<typeof TableHeader> = {
  title: "Components/Table/TableHeader",
  tags: ["autodocs"],
  component: TableHeader,
  argTypes: {
    onSort: { description: "funct sort of table" },
    columns: { description: "columns of header table" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns: MOCK_COLUMNS,
    onSort: () => {},
  },
};
