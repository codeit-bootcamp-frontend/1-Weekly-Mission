import SignHeader from "@/src/components/Sign/SignHeader";
import SignIpnut from "@/src/components/Sign/SignInput";
import SocialSign from "@/src/components/Sign/SocialSign";

function SignUpPage() {
  return (
    <>
      <SignHeader type="signup" />
      <SignIpnut type="email" label="이메일" htmlFor="email_input" />
      <SignIpnut type="password" label="비밀번호" htmlFor="pwd_input" />
      <SignIpnut
        type="password"
        label="비밀번호 확인"
        htmlFor="pwd_check_input"
      />
      <SocialSign message="다른 방식으로 가입하기" />
    </>
  );
}

export default SignUpPage;
