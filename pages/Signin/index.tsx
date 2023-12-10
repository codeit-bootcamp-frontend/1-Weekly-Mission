import { ReactElement } from "react";
import { useForm } from "react-hook-form";
import EmailInput from "src/components/Input/EmailInput";
import PasswordInput from "src/components/Input/PasswordInput";
import AuthLayout from "src/components/Layout/AuthLayout";
import { FormValuesType } from "src/types/FormValue";

function Signin() {
  const { register } = useForm<FormValuesType>({ mode: "onBlur" });
  return (
    <>
      <EmailInput register={register} />
      <PasswordInput register={register} />
    </>
  );
}

export default Signin;

Signin.getLayout = (page: ReactElement) => (
  <AuthLayout
    memberStatus="회원이 아니신가요?"
    linkTitle="회원 가입하기"
    link="/signup"
    submitBtnTitle="로그인"
    submitBtnLink="/"
    socialBtnTitle="소셜 로그인"
  >
    {page}
  </AuthLayout>
);
