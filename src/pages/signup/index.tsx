/* 회원가입 페이지 */

import SignupForm from "@/components/sign/SignForm/SignupForm";
import SignLayout from "@/components/sign/SignLayout/SignLayout";

function SignUpPage() {
  return (
    <>
      <SignLayout type="signup">
        <SignupForm />
      </SignLayout>
    </>
  );
}

export default SignUpPage;
