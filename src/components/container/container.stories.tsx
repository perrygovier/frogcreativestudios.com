import type { Meta, StoryObj } from "storybook-framework-qwik";
import { defaultProps, type ContainerProps } from "./container";
import Container from "./container";

const meta: Meta<ContainerProps> = {
  component: Container,
};

type Story = StoryObj<ContainerProps>;

export default meta;

export const Primary: Story = {
  args: defaultProps,
  render: (props) => <Container {...props}><h1>Some Container</h1></Container>,
};
