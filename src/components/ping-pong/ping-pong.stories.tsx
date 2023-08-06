import type { Meta, StoryObj } from "storybook-framework-qwik";
import { defaultProps, type PingPongProps } from "./ping-pong";
import PingPong from "./ping-pong";

const meta: Meta<PingPongProps> = {
  component: PingPong,
};

type Story = StoryObj<PingPongProps>;

export default meta;

export const Primary: Story = {
  args: defaultProps,
  render: (props) => <PingPong {...props}><h1>Something important</h1></PingPong>,
};
