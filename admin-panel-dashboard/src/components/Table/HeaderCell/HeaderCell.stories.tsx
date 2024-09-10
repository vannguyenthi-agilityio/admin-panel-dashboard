// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import HeaderCell from ".";

const meta: Meta<typeof HeaderCell> = {
  title: "Components/Table/HeaderCell",
  tags: ["autodocs"],
  component: HeaderCell,
  argTypes: {
    title: {
      description: "Title of header cell content",
    },
    isSortable: {
      description: "Have or not isSortable by set it as true or false",
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const HeaderCellHaveSortIncrease: Story = {
  args: {
    title: "Customer",
    isSortable: true,
  },
};
export const HeaderCellHaveNoSort: Story = {
  args: {
    title: "Customer",
    isSortable: false,
  },
};
