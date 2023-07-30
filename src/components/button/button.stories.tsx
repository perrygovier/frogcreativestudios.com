import type { Meta, StoryObj } from "storybook-framework-qwik";
import { type ButtonProps } from "./button";
import Button from "./button";

const meta: Meta<ButtonProps> = {
  component: Button,
};

type Story = StoryObj<ButtonProps>;

export default meta;

export const Primary: Story = {
  args: {
    href: "",
  },
  render: (props) => <Button {...props}>Some button</Button>,
};
