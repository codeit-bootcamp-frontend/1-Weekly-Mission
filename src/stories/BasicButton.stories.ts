import type { Meta, StoryObj } from "@storybook/react";

import Button from "@/components/button/Basic";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    size: "large",
    label: "로그인",
  },
};

export const Secondary: Story = {
  args: {
    size: "small",
    label: "추가하기",
  },
};
