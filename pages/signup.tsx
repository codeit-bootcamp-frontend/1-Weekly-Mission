import { SignForm, SignHeader, SignSns } from "@/components";
import * as Styled from "@/style/SignPage.styled";

const SignUp = () => {
  return (
    <Styled.SignContainer>
      <SignHeader msgText="이미 회원이신가요?" linkText="로그인 하기" />
      <Styled.SignBox>
        <SignForm signUp={true} btnText="회원가입" />
        <Styled.SnsBox>
          <SignSns snsText="다른 방식으로 가입하기" />
        </Styled.SnsBox>
      </Styled.SignBox>
    </Styled.SignContainer>
  );
};

export default SignUp;
