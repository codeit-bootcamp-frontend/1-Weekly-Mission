import LoginLayout from "@/components/LoginLayout/LoginLayout";
import LoginInput from "@/components/LoginInput/LoginInput";

const signUp = {
  p: "이미 회원이신가요?",
  link: "로그인 하기",
  href: "/signup",
  button: "회원가입",
  text: "다른 방식으로 가입하기",
};

export default function SignUp() {
  return (
    <LoginLayout data={signUp}>
      <LoginInput type="비밀번호 확인" />
    </LoginLayout>
  );
}
