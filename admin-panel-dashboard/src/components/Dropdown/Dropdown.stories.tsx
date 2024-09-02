import type { Meta, StoryObj } from '@storybook/react';

// Constants
//import { ICON_ITEM_BREADCRUMB } from '@/constants';

// Components
import Dropdown from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta : Meta<typeof Dropdown> = {
  title: 'Components/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    user: { description: "Info of user" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};

export const NotLogOut: Story = {
  args: {
    hasLogOut: false
  },
};
