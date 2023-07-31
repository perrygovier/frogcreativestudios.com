import type { Meta, StoryObj } from "storybook-framework-qwik";
import { defaultProps, type HeroProps } from "./hero";
import Hero from "./hero";

const meta: Meta<HeroProps> = {
  component: Hero,
};

type Story = StoryObj<HeroProps>;

export default meta;

export const Primary: Story = {
  args: defaultProps,
  render: (props) => <Hero {...props}><h1>Something important</h1></Hero>,
};
