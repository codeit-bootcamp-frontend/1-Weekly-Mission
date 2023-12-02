import SignHeader from "@/src/components/Sign/SignHeader";
import SignIpnut from "@/src/components/Sign/SignInput";
import SocialSign from "@/src/components/Sign/SocialSign";

function SignInPage() {
  return (
    <>
      deploy test
      <SignHeader type="signin" />
      <SignIpnut type="email" label="이메일" htmlFor="email_input" />
      <SignIpnut type="password" label="비밀번호" htmlFor="pwd_input" />
      <SocialSign message="소셜 로그인" />
    </>
  );
}

export default SignInPage;
