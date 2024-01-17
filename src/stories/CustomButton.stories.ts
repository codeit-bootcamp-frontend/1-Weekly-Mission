import { CustomButton } from "@/components/story/CustomButton";
import { userEvent, within } from "@storybook/test";

export default {
  title: "Test/CustomButton", // 스토리북에서 컴포넌트가 들어있는 경로
  component: CustomButton,
  args: {
    label: "Button", // 공통 속성은 한번만 적용하면 됨
  },
  parameters: {
    // 공통 파라비터도 한번만 적용하면 됨
    backgrounds: {
      values: [
        { name: "blue", value: "blue" },
        { name: "pink", value: "pink" },
      ],
    },
  },
};

export const Solid = {
  args: {
    variant: "solid",
  },
  //   parameters: {
  //     backgrounds: {
  //       values: [
  //         { name: "blue", value: "blue" },
  //         { name: "pink", value: "pink" },
  //       ],
  //     },
  //   },
};

export const Outline = {
  args: {
    variant: "outline",
    // label: "Button",
  },
};

export const Small = {
  args: {
    size: "sm",
  },
};

export const Medium = {
  args: {
    size: "md",
  },
};

export const Large = {
  args: {
    size: "lg",
  },
};

export const ClickTestButton = {
  args: {
    variant: "outline",
    label: "Click",
  },
  play: async ({ canvasElement }: any) => {
    const canvas = within(canvasElement); // canvasElement를 root요소로 할당
    const primaryButton = await canvas.getByRole("button", {
      // getByRole 부분은 canvas로부터 button을 가져오고,
      name: /Click/i, // 버튼의 이름이 Click 이라는 문자열을 포함하는 버튼을 가져옴
    });
    // 사용자 클릭 이벤트 발생
    await userEvent.click(primaryButton);
  },
};
