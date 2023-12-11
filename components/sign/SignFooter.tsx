import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface FooterProps {
  text: string;
}

export default function SigninFooter({ text }: FooterProps) {
  return (
    <SigninFooterWrapper>
      <div>{text}</div>
      <div>
        <UrlButton>
          <SigninURLImageLink href="https://www.google.com">
            <Image src="/google.svg" fill alt="Google이미지" />
          </SigninURLImageLink>
          <SigninURLImageLink href="https://www.kakaocorp.com/page">
            <Image src="/kakao.svg" fill alt="KaKao이미지" />
          </SigninURLImageLink>
        </UrlButton>
      </div>
    </SigninFooterWrapper>
  );
}

const SigninFooterWrapper = styled.div`
  display: flex;
  font-size: 14px;
  width: 350px;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid #ccd5e3;
  background: #e7effb;
`;

const UrlButton = styled.button`
  display: flex;
  gap: 16px;
  border: none;
  background: #e7effb;
`;

const SigninURLImageLink = styled(Link)`
  position: relative;
  width: 42px;
  height: 42px;
`;
