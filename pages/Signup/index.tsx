import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import EmailInput from "src/components/Input/EmailInput";
import PasswordCorrectInput from "src/components/Input/PasswordCorrectInput";
import PasswordInput from "src/components/Input/PasswordInput";
import AuthLayout from "src/components/Layout/AuthLayout";
import { FormValuesType } from "src/types/FormValue";

function Signup() {
  const { register } = useForm<FormValuesType>({ mode: "onBlur" });
  return (
    <>
      <EmailInput register={register} />
      <PasswordInput register={register} />
      <PasswordCorrectInput />
    </>
  );
}

export default Signup;

Signup.getLayout = (page: ReactElement) => (
  <AuthLayout
    memberStatus="이미 회원이신가요?"
    linkTitle="로그인 하기"
    link="/signin"
    submitBtnTitle="회원가입"
    submitBtnLink="/signup"
    socialBtnTitle="다른 방식으로 가입하기"
  >
    {page}
  </AuthLayout>
);
