import type { Meta, StoryObj } from '@storybook/react';
import Input from '.';

import {
  MailIcon,
} from '@/components/Icons';

const meta: Meta<typeof Input> = {
  args: {
    'aria-invalid': false,
    disabled: false,
    id: 'input-field',
    name: 'input-field',
    label: 'Input Field',
    type: 'text',
  },
  argTypes: {
    'aria-invalid': {
      control: { type: 'boolean' },
    },
    'aria-selected': {
      control: { type: 'boolean' },
    },
    borderHide: {
      type: 'boolean',
    },
    defaultValue: {
      type: 'string',
    },
    disabled: {
      type: 'boolean',
    },
    leftElement: {
      table: { disable: true },
    },
    rightElement: {
      table: { disable: true },
    },
    placeholder: {
      type: 'string',
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password'],
    },
  },
  component: Input,
  tags: ['autodocs'],
  title: 'Components/Commons/Input',
};

export default meta;
type Story = StoryObj<typeof Input>;

export const WithLabel: Story = {};

export const WithoutLabel: Story = {
  args: {
    label: undefined,
  },
};

export const WithoutBorder: Story = {
  args: {
    borderHide: true,
  },
};

export const Text: Story = {
  args: {
    defaultValue: 'Text',
    type: 'text',
  },
};

export const Email: Story = {
  args: {
    defaultValue: 'example@site.com',
    type: 'email',
  },
};

export const Password: Story = {
  args: {
    defaultValue: 'password',
    type: 'password'
  },
};

export const Disabled: Story = {
  args: {
    defaultValue: undefined,
    disabled: true,
  },
};

export const WithPlaceholder: Story = {
  args: {
    label: undefined,
    placeholder: 'Search...',
    leftElement: <MailIcon />,
  },
};

export const ErrorWithValue: Story = {
  args: {
    'aria-invalid': true,
    defaultValue: 'Value',
  },
};

export const ErrorWithoutValue: Story = {
  args: {
    'aria-invalid': true,
  },
};

export const WithLeftElementAndLabel: Story = {
  args: {
    leftElement: <MailIcon className="h-4 w-4" />,
  },
};

export const WithLeftElementAndWithoutLabel: Story = {
  args: {
    label: undefined,
    leftElement: <MailIcon className="h-4 w-4" />,
    placeholder: 'Email',
  },
};

export const WithRightElementAndLabel: Story = {
  args: {
    rightElement: <MailIcon className="h-4 w-4" />,
  },
};

export const WithRightElementAndWithoutLabel: Story = {
  args: {
    label: undefined,
    rightElement: <MailIcon className="h-4 w-4" />,
    placeholder: 'Email',
  },
};

export const ErrorInput: Story = {
  args: {
    type: 'text',
    name: 'Error input',
    errorMessage: 'Error message',
  },
};

