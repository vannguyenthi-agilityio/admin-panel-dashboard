// Libs
import type { Meta, StoryObj } from "@storybook/react";

// Components
import Modal from ".";

const meta: Meta<typeof Modal> = {
  title: "Components/Modal",
  tags: ["autodocs"],
  component: Modal,
  argTypes: {
    isOpen: { description: "isOpen modal type is boolean"},
    onClose: { description: "funct close modal type is void"},
    children: { description: "body modal type is ReactNode"},
    showIconClose: { description: "check to show close icon type is boolean"},
    labelButton: { description: "label text to show button in footer of modal type is string"},
    title: { description: "title of modal type is string"},
    className: { description: "custom class for modal type is string"},
    size: { description: "custom size padding, text size for modal with option type: 'xs' | 'sm' | 'md' | 'lg'"},
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <p className="py-4"> Modal body text goes here.</p>
  },
};
