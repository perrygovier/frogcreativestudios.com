import type { Meta, StoryObj } from "storybook-framework-qwik";
import { Header, defaultProps, type HeaderProps } from "./header";

const meta: Meta<HeaderProps> = {
  component: Header,
  parameters: { layout: 'fullscreen' },
  decorators: [
    (Story) => (
      <div style="background: #000">
        <Story />
      </div>
    ),
  ],
};

type Story = StoryObj<HeaderProps>;

export default meta;

export const Default: Story = {
  args: defaultProps,
  render: (props) => <Header {...props}>Some header</Header>,
};
