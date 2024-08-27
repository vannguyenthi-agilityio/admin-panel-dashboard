import type { Meta, StoryObj } from "@storybook/react";

// Components
import Loading from ".";

const meta = {
  title: "Components/Commons/Loading",
  component: Loading,
  tags: ["autodocs"],
  argTypes: {
    width: { description: "Width class of loading" },
    height: { description: "Height class of loading" },
    fillColor: { description: "Color of loading" },
  },
} as Meta<typeof Loading>;

export default meta;

type Story = StoryObj<typeof meta>;

export const LoadingDefault: Story = {
  args: {},
};

export const LoadingCustomSize: Story = {
  args: {
    width: "h-[16px]",
    height: "h-[16px]",
    fillColor: "#241212",
  },
};
