import type { Meta, StoryObj } from "storybook-framework-qwik";
import { type FooterProps } from "./footer";
import Footer from "./footer";

const meta: Meta<FooterProps> = {
  component: Footer,
};

type Story = StoryObj<FooterProps>;

export default meta;

export const Primary: Story = {
  args: {
    href: "",
  },
  render: (props) => <Footer {...props}>Some button</Footer>,
};
