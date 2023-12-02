import { Signin } from "@/components/Main/sign/Sign.type";
import { StyledForm, SubmitButton } from "@/components/Main/sign/SignForm.styled";
import SignLabel from "@/components/Main/sign/SignLabel";

export default function SignForm({ signin }: Signin) {
  return (
    <StyledForm>
      <SignLabel type="email" />
      <SignLabel type="password" />
      {signin || <SignLabel type="passwordCheck" />}
      <SubmitButton>{signin ? "로그인" : "회원가입"}</SubmitButton>
    </StyledForm>
  );
}
