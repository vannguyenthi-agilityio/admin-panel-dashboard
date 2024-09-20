import type { Meta, StoryObj } from '@storybook/react';

// Components
import NotFound from './';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta : Meta<typeof NotFound> = {
  title: 'Components/Header',
  component: NotFound,
  tags: ['autodocs'],
  argTypes: {
    className: { description: "Class name taiwind to style for text page, type is string" },
    message: { description: "Message content to show on page, type is string" },
    size: { description: "Size text, padding to style on page, type is SIZE_TYPE: xs, sm, md, lg" }
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Default: Story = {
  args: {},
};
