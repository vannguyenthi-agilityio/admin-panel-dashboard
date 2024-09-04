import type { Meta, StoryObj } from '@storybook/react';

// Constants
import { ICON_ITEM_BREADCRUMB } from '@/constants';

// Components
import Breadcrumb from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta : Meta<typeof Breadcrumb> = {
  title: 'Components/Commons/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    itemsBreadcrumb: { description: "content item of Breadcrumb with type ITEM_BREADCRUMB" },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};


export const BreadCrumWithIcon: Story = {
  args: {
    itemsBreadcrumb : ICON_ITEM_BREADCRUMB
  },
};
