import { InputType } from "@/components/Main/sign/Sign.type";
import SignInput from "@/components/Main/sign/SignInput";
import { StyledLabel } from "@/components/Main/sign/SignLabel.styled";
import { useState } from "react";

const TEXT = {
  email: "이메일",
  password: "비밀번호",
  passwordCheck: "비밀번호 확인",
};

export default function SignLabel({ type }: InputType) {
  const [error, setError] = useState(false);
  return (
    <StyledLabel $error={error}>
      {TEXT[type]}
      <SignInput type={type} placeholder={TEXT[type]} $error={error} setError={setError} />
    </StyledLabel>
  );
}
