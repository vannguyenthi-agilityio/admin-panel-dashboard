import Storybook from '@storybook/react';
import { Button } from './index';

export default {
  title: 'Components/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' }
  }
} as Storybook.ComponentMeta<typeof Button>;

const Template: Storybook.ComponentStory<typeof Button> = (args) => (
  <Button label="Edit" {...args} />
);

export const Secondary = Template.bind({});
Secondary.args = {
  size: 'default',
  variant: 'colorDefault'
};

export const Transparent = Template.bind({});
Transparent.args = {
  size: 'default',
  color: 'default.red',
  bg: 'transparent',
  variant: 'border'
};

export const Cancel = Template.bind({});
Cancel.args = {
  size: 'default',
  variant: 'cancel',
  color: 'default.grey.600',
  bg: 'transparent'
};

export const Loading = Template.bind({});
Loading.args = {
  size: 'default',
  isLoading: true
};

export const Disabled = Template.bind({});
Disabled.args = {
  size: 'default',
  isDisabled: true
};
