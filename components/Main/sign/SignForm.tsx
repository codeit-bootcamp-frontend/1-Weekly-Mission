import { InputType, Signin } from "@/components/Main/sign/Sign.type";
import { StyledForm, SubmitButton } from "@/components/Main/sign/SignForm.styled";
import SignEmLabel from "@/components/Main/sign/SignEmLabel";
import SignPwLabel from "@/components/Main/sign/SignPwLabel";
import axios from "@/lib/axios";
import { validate_signin, validate_signup } from "@/utils/validate";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";

export default function SignForm() {
  const [isError, SetIsError] = useState(false);
  const router = useRouter();
  const signin = router.asPath === "/signin";

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputs = Array.from(document.querySelectorAll("input"));
    const ps = Array.from(document.querySelectorAll("label p"));
    for (const i in inputs) {
      const validateFunc = signin ? validate_signin : validate_signup;
      const type = inputs[i].type as InputType["type"];
      const value = inputs[i].value;

      const res = await validateFunc({ type, value });
      if (res) {
        SetIsError(true);
        ps[i].textContent = res;
        continue;
      }
      SetIsError(false);
    }

    if (!isError) {
      try {
        const postData = {
          email: inputs[0].value,
          password: inputs[1].value,
        };
        const url = signin ? "/api/sign-in" : "/api/sign-up";
        const res = await axios.post(url, postData);
        const token = res.data.data.accessToken;
        sessionStorage.setItem("accessToken", token);
        router.push(`/folder?a=${token}`, "/folder");
      } catch {
        ps.forEach((p) => (p.textContent = "계정 정보를 확인해주세요."));
      }
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SignEmLabel />
      <SignPwLabel type="password" />
      {signin ? null : <SignPwLabel type="passwordCheck" />}
      <SubmitButton>{signin ? "로그인" : "회원가입"}</SubmitButton>
    </StyledForm>
  );
}
