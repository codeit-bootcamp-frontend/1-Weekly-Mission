import { useLogin } from "@/lib/utils/LoginContext";
import { useRouter } from "next/router";
import { SignForm, SignHeader, SignSns } from "@/components";
import * as Styled from "@/style/SignPage.styled";

const SignIn = () => {
  const { isLogin } = useLogin();
  const router = useRouter();

  // Login 후 signin 페이지 접근 시, 폴더페이지로 리다이렉트
  if (isLogin) {
    router.push("/folder");
    return null;
  }

  return (
    <Styled.SignContainer>
      <SignHeader msgText="회원이 아니신가요?" linkText="회원 가입하기" />
      <Styled.SignBox>
        <SignForm signUp={false} btnText="로그인" />
        <Styled.SnsBox>
          <SignSns snsText="소셜 로그인" />
        </Styled.SnsBox>
      </Styled.SignBox>
    </Styled.SignContainer>
  );
};

export default SignIn;
