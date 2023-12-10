import SignEmLabel from "@/components/Main/sign/SignEmLabel";
import { StyledForm, SubmitButton } from "@/components/Main/sign/SignForm.styled";
import SignPwLabel from "@/components/Main/sign/SignPwLabel";
import useInputAllBlur from "@/hooks/useInputAllBlur";
import { NextRouter, useRouter } from "next/router";
import { FormEvent } from "react";
import axios from "@/lib/axios";

export default function SignForm() {
  const { inputRef, allBlur } = useInputAllBlur();
  const router = useRouter();
  const signin = router.asPath === "/signin";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const isError = await allBlur();

    if (!isError) {
      postSignData(e.target, signin, router);
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SignEmLabel ref={inputRef} />
      <SignPwLabel ref={inputRef} type="password" />
      {signin ? null : <SignPwLabel ref={inputRef} type="passwordCheck" />}
      <SubmitButton>{signin ? "로그인" : "회원가입"}</SubmitButton>
    </StyledForm>
  );
}

const postSignData = async (obj: EventTarget, signin: boolean, router: NextRouter) => {
  try {
    const postData = new FormData(obj as HTMLFormElement);
    const email = postData.get("email");
    const password = postData.get("password");

    const url = signin ? "/api/sign-in" : "/api/sign-up";
    const res = await axios.post(url, { email, password });
    const { accessToken, refreshToken } = res.data.data;
    document.cookie = `accessToken=${accessToken}`;
    document.cookie = `refreshToken=${refreshToken}`;

    router.push(`/folder`);
  } catch {
    alert("아이디 또는 비밀번호가 일치하지 않습니다. 다시 입력해주세요.");
  }
};
