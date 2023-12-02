import { RESPONSIBLE_MEDIA_QUERIES } from "@/constants/mediaQueries";
import Image from "next/image";
import styled from "styled-components";
import logoImg from "@/images/logo.svg";
import Link from "next/link";
import { Button } from "@/components/button/Button.style";

export const AuthWrap = styled.div`
  height: 100vh;
  display: flex;
  padding: 23.8rem 3.2rem 11.6rem;
  background-color: var(--linkbrary-zircon);
  justify-content: center;
  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    padding: 20rem 3.2rem 17.7rem;
  }
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    padding: 12rem 3.2rem 11.9rem;
  }
`;

export const Auth = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  flex: 0 1 40rem;
`;

export const AuthForm = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 2.4rem;
`;

export const AuthHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.8rem;
`;

export const LogoLink = styled(Link)`
  height: 3.8rem;
`;

export const HeaderText = styled.p`
  color: #000;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
`;

export const HeaderLink = styled(Link)`
  color: var(--linkbrary-primary-color);
  text-decoration: underline;
  font-family: Pretendard;
  font-weight: 600;
  line-height: normal;
  font-style: normal;
`;

export const LogoImage = styled(logoImg)`
  width: 21rem;
  height: 3.8rem;
`;

export const AuthButton = styled(Button)`
  margin: 0.6rem 0 0.2rem;
  width: 100%;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    height: 5.4rem;
    font-size: 1.8rem;
  }
`;

export const AuthFooter = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 3.2rem;
`;
export const AuthSocialWrap = styled.div`
  display: flex;
  padding: 1.2rem 2.4rem;
  border: 0.1rem solid var(--linkbrary-gray-20);
  background: var(--linkbrary-gray-10);
  justify-content: space-between;
  align-items: center;
  border-radius: 0.8rem;
  font-size: 1.4rem;
  font-weight: 400;
  font-family: Pretendard;
`;

export const AuthSocial = styled.div`
  display: flex;
  gap: 1.6rem;
`;

export const SocialLink = styled(Link)`
  width: 4.2rem;
  height: 4.2rem;
`;

export const SocialText = styled.p`
  color: var(--linkbrary-gray-100);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const SocialImage = styled(Image)`
  display: inline-block;
  position: relative;
  width: 100%;
`;
