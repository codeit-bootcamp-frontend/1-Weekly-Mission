import { ReactElement } from "react";
import EmailInput from "src/components/Input/EmailInput";
import PasswordInput from "src/components/Input/PasswordInput";
import AuthLayout from "src/components/Layout/AuthLayout";

function Signin() {
  return (
    <>
      <EmailInput />
      <PasswordInput />
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
