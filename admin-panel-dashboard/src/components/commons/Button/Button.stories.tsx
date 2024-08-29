import type { Meta, StoryObj } from '@storybook/react';
import Button from './';
import {
  PrevIcon,
  NextIcon,
  DeleteIcon,
  EditIcon,
  SortIcon,
  MailIcon,
  HelpIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  ArrowUpRightIcon
} from '@/components/Icons';
import { COLOR } from '@/constants';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Components/Commons/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {},
} as Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    label: 'Cancel',
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const Secondary: Story = {
  args: {
    label: 'Create',
    buttonType: 'secondary',
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const Pagination: Story = {
  args: {
    label: '2',
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const PaginationActive: Story = {
  args: {
    label: '1',
    size: 'small',
    className: 'w-[40px] h-[40px]',
    buttonType: 'blood',
  },
};

export const PaginationPrev: Story = {
  args: {
    rounded: 'lg',
    size: 'small',
    className: 'w-[40px] h-[40px]',
    buttonType: 'disabled',
    leftIcon: <PrevIcon />,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const PaginationNext: Story = {
  args: {
    rounded: 'lg',
    size: 'small',
    className: 'w-[40px] h-[40px]',
    leftIcon: <NextIcon stroke = {COLOR.SECONDARY[200]}/>,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const ArrowRightWithIcon: Story = {
  args: {
    size: 'small',
    className: 'w-[40px] h-[40px] p-0',
    leftIcon: <ArrowRightIcon />,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const ArrowUpRightWithIcon: Story = {
  args: {
    size: 'small',
    className: 'w-[40px] h-[40px] p-0',
    leftIcon: <ArrowUpRightIcon />,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const ArrowLeftWithIcon: Story = {
  args: {
    size: 'small',
    className: 'w-[40px] h-[40px] p-0',
    leftIcon: <ArrowLeftIcon />,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const DeleteWithIcon: Story = {
  args: {
    className: 'w-[40px] h-[40px] p-0',
    leftIcon: <DeleteIcon />,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const EditWithIcon: Story = {
  args: {
    className: 'w-[40px] h-[40px] p-0',
    leftIcon: <EditIcon />,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const HelpWithIcon: Story = {
  args: {
    className: 'w-[40px] h-[40px] p-0 bg-black',
    leftIcon: <HelpIcon />,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const SortWithIcon: Story = {
  args: {
    className: 'w-[40px] h-[40px] p-0',
    leftIcon: <SortIcon />,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const MailWithIcon: Story = {
  args: {
    className: 'w-[40px] h-[40px] p-0',
    leftIcon: <MailIcon />,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};

export const Disabled: Story = {
  args: {
    label: 'Create',
    buttonType: 'disabled',
  },
};

export const SmallWithIcon: Story = {
  args: {
    size: 'small',
    label: 'New Customer',
    className: 'gap-x-2',
    buttonType: 'blood',
    leftIcon: <span>+</span>,
    onClick: () => {
      window.console.log('Button clicked!');
    },
  },
};
