import type { Meta, StoryObj } from '@storybook/react';
import Select from '.';

const meta: Meta<typeof Select> = {
  args: {
    'aria-invalid': false,
    id: 'select-field',
    name: 'select-field'
  },
  argTypes: {
    'aria-invalid': {
      control: { type: 'boolean' },
    },
    'aria-selected': {
      control: { type: 'boolean' },
    },
    defaultValue: {
      type: 'string',
    },
    required: {
      type: 'boolean',
    },
    label: {
      type: 'string',
    },
    options: {
      control: { type: 'select' },
      options: [{
        option: {type: 'string'},
        value: {type: 'string'},
        id: {type: 'number'},
      }],
    },
  },
  component: Select,
  tags: ['autodocs'],
  title: 'Components/Commons/Select',
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithLabel: Story = {};

export const Label: Story = {
  args: {
    label: "Select Field",
  },
};

export const LabelRequired: Story = {
  args: {
    label: "Select Field",
    required: true,
  },
};

export const WithErrorMessage: Story = {
  args: {
    label: "Select Field",
    required: true,
    errorMessage: "Field is required"
  },
};
