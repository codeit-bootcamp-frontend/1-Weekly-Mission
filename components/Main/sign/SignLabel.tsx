import { InputType } from "@/components/Main/sign/Sign.type";
import { ErrorText, Input, OnOffButton, StyledLabel } from "@/components/Main/sign/SignLabel.styled";
import Image from "next/image";

const TEXT = {
  email: "이메일",
  password: "비밀번호",
  passwordCheck: "비밀번호 확인",
};

export default function SignLabel({ type }: InputType) {
  return (
    <StyledLabel>
      {TEXT[type]}
      <Input autoComplete="" type={`${type === "email" ? "email" : "password"}`} name={`${type}`} />
      {type === "passwordCheck" ? (
        <OnOffButton type="button">
          <Image width={16} height={16} id="imgPw" src="index/sign-eye-off.svg" alt="가려진 비밀번호 보여주기" />
        </OnOffButton>
      ) : null}
      <ErrorText />
    </StyledLabel>
  );
}
