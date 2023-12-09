import { InputType, Signin } from "@/components/Main/sign/Sign.type";
import { StyledForm, SubmitButton } from "@/components/Main/sign/SignForm.styled";
import { validate_signin, validate_signup } from "@/utils/validate";
import SignLabel from "@/components/Main/sign/SignLabel";
import { FormEvent, useState } from "react";
import { useRouter } from "next/router";
import axios from "@/lib/axios";

export default function SignForm({ signin }: Signin) {
  const [isError, SetIsError] = useState(false);
  const router = useRouter();

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
      <SignLabel type="email" />
      <SignLabel type="password" />
      {signin || <SignLabel type="passwordCheck" />}
      <SubmitButton>{signin ? "로그인" : "회원가입"}</SubmitButton>
    </StyledForm>
  );
}
