/* 로그인 페이지 */

import SignLayout from "@/components/sign/SignLayout/SignLayout";
import SigninForm from "@/components/sign/SignForm/SigninForm";

function SignInPage() {
  return (
    <>
      <SignLayout type="signin">
        <SigninForm />
      </SignLayout>
    </>
  );
}

export default SignInPage;
