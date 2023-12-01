import { StyledForm, SubmitButton } from "@/components/Main/sign/SignForm.styled";
import SignLabel from "@/components/Main/sign/SignLabel";
import Image from "next/image";

interface ISignForm {
  signin?: boolean;
}

export default function SignForm({ signin }: ISignForm) {
  return (
    <StyledForm>
      <SignLabel type="email" />
      <SignLabel type="password" />
      {signin || <SignLabel type="passwordCheck" />}
      <SubmitButton>{signin ? "로그인" : "회원가입"}</SubmitButton>
    </StyledForm>
  );
}
