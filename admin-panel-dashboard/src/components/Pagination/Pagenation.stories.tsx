// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Pagination from ".";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  tags: ["autodocs"],
  component: Pagination,
  argTypes: {
    currentPage: { description: "Current page of pagination" },
    pageSize: { description: "Items quantity on 1 page of pagination" },
    totalCount: { description: "Total item of pagination" },
    onPageChange: { description: "Handle change page of pagination" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    currentPage: 1,
    pageSize: 5,
    totalCount: 40,
    onPageChange: () => {},
  },
};
