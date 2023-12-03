import Link from "next/link";
import logo from "src/assets/icons/logo.svg";
import SocialButton from "src/components/Button/SocialButton";
import SubmitButton from "src/components/Button/SubmitButton";
import Icon from "src/components/Icon";
import Input from "src/components/Input";
import theme from "src/styles/Theme/theme";
import styled from "styled-components";

function Signin() {
  return (
    <StyledWrapper>
      <Icon src={logo} alt="로고" width={210} height={38} />
      <StyledLinkWrapper>
        <span>회원이 아니신가요?</span>
        <StyledLink href="/Signup">회원 가입하기</StyledLink>
      </StyledLinkWrapper>

      <StyledInputWrapper>
        <div>
          <Input
            label="이메일"
            type="text"
            error={true}
            errorMessage="에러메세지"
          />
          <Input label="비밀번호" type="password" error={false} />
        </div>
        <SubmitButton name="로그인" link="/" />
        <SocialButton title="소셜 로그인" />
      </StyledInputWrapper>
    </StyledWrapper>
  );
}

export default Signin;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: ${theme.color.blueBackground};
`;

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  font-size: 13px;
  margin: 12px 0;
`;

const StyledLink = styled(Link)`
  color: ${theme.color.primary};
`;

const StyledInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
