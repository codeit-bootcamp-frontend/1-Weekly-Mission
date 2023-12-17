import { useRouter } from "next/router";
import { SignForm, SignHeader, SignSns } from "@/components";
import { useLogin } from "@/lib/utils/AuthContext";
import { checkLocalStorage } from "@/lib/utils/localStorage";
import * as Styled from "@/style/SignPage.styled";

const SignUp = () => {
  const { isLogin } = useLogin();
  const router = useRouter();

  // Login 후 signup 페이지 접근 시, 폴더페이지로 리다이렉트
  if (isLogin || checkLocalStorage()) {
    router.push("/folder");
    return null;
  }

  return (
    <Styled.SignContainer>
      <SignHeader msgText="이미 회원이신가요?" linkText="로그인 하기" />
      <Styled.SignBox>
        <SignForm signUpPage={true} btnText="회원가입" />
        <Styled.SnsBox>
          <SignSns snsText="다른 방식으로 가입하기" />
        </Styled.SnsBox>
      </Styled.SignBox>
    </Styled.SignContainer>
  );
};

export default SignUp;
