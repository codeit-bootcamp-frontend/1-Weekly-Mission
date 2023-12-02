import { InputType } from "@/components/Main/sign/Sign.type";
import { StyledLabel } from "@/components/Main/sign/SignLabel.styled";

const TEXT = {
  email: "이메일",
  password: "비밀번호",
  passwordCheck: "비밀번호 확인",
};

export default function SignLabel({ type }: InputType) {
  return <StyledLabel>{TEXT[type]}</StyledLabel>;
}
