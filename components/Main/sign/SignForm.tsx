import { InputType, Signin } from "@/components/Main/sign/Sign.type";
import { StyledForm, SubmitButton } from "@/components/Main/sign/SignForm.styled";
import SignLabel from "@/components/Main/sign/SignLabel";
import { validate_signin, validate_signup } from "@/utils/validate";
import axios from "@/lib/axios";
import { useRouter } from "next/router";

let isError = false;

export default function SignForm({ signin }: Signin) {
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputs = Array.from(document.querySelectorAll("input"));
    const ps = Array.from(document.querySelectorAll("label p"));
    for (const i in inputs) {
      const validateFunc = signin ? validate_signin : validate_signup;
      const type = inputs[i].type as InputType["type"];
      const value = inputs[i].value;

      const res = await validateFunc({ type, value });
      if (res) {
        isError = true;
        ps[i].textContent = res;
        continue;
      }
      isError = false;
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
        router.push("/folder");
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
