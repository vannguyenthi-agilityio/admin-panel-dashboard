import type { Meta, StoryObj } from '@storybook/react';

// Components
import Toast from './';
import {CloseIcon} from '@/components/Icons';

// Types
import { TOAST_TYPE } from '@/types';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta : Meta<typeof Toast> = {
  title: 'Components/Commons/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Success: Story = {
  args: {
    message: "The new customer’s record is created successfully."
  },
};

export const Error: Story = {
  args: {
    toastType: TOAST_TYPE.ERROR,
    iconElement: <CloseIcon />,
    hasIconClose: true,
    message: "The new customer’s record is created error."
  },
};

export const Warning: Story = {
  args: {
    toastType: TOAST_TYPE.WARNING,
    iconElement: <CloseIcon />,
    hasIconClose: true,
    message: "The new customer’s record is created error."
  },
};
