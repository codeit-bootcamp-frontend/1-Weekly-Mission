import styled from "styled-components";
import KakaoImage from "@/public/images/kakao.svg";
import GoogleImage from "@/public/images/google.svg";
import Link from "next/link";
import { GOOGLE_LOGIN_URL, KAKAO_LOGIN_URL } from "@/constants/constant";

interface SocialLoginProps {
  text: string;
}

const SocialLogin = ({ text }: SocialLoginProps) => {
  return (
    <StyledSocialLoginBox>
      <p>{text}</p>
      <StyledSocialLoginButtonBox>
        <StyledSocialLoginButtonImageLink href={KAKAO_LOGIN_URL}>
          <KakaoImage />
        </StyledSocialLoginButtonImageLink>
        <StyledSocialLoginButtonImageLink href={GOOGLE_LOGIN_URL}>
          <GoogleImage />
        </StyledSocialLoginButtonImageLink>
      </StyledSocialLoginButtonBox>
    </StyledSocialLoginBox>
  );
};

export default SocialLogin;

const StyledSocialLoginBox = styled.div`
  display: flex;
  width: 100%;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--linkbrary-gray-20);
  background: var(--linkbrary-gray-10);

  p {
    color: var(--linkbrary-gray-100);
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const StyledSocialLoginButtonBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const StyledSocialLoginButtonImageLink = styled(Link)`
  position: relative;
  cursor: pointer;
  transition: 0.1s ease-in-out;
  &:hover {
    transform: scale(1.1);
  }
`;
