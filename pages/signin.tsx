import { SignForm, SignHeader, SignSns } from "@/components";
import * as Styled from "@/style/SignPage.styled";

const SignIn = () => {
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
