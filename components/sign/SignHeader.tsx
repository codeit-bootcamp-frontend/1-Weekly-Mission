import { SignHeaderMsg } from '@/constant/constants';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

interface SigninHeaderProps {
  text: string;
  linktext: string;
}

export default function SigninHeader({ text, linktext }: SigninHeaderProps) {
  return (
    <SigninHeaderWrapper>
      <LinkbraryLink href={'/'}>
        <Image src="/linkbrary.svg" fill alt="Linkbrary" priority />
      </LinkbraryLink>
      <SigninDiv>
        <div>{text}</div>
        <HeaderLink
          href={text === SignHeaderMsg.noMember ? '/signup' : '/signin'}
        >
          {linktext}
        </HeaderLink>
      </SigninDiv>
    </SigninHeaderWrapper>
  );
}

const SigninHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const SigninDiv = styled.div`
  display: flex;
  gap: 10px;
`;

const HeaderLink = styled(Link)`
  color: var(--linkbrary-primary-color, #6d6afe);
  font-weight: 600;
  text-decoration: underline;
  text-underline-position: under;
`;

const LinkbraryLink = styled(Link)`
  position: relative;
  width: 211px;
  height: 38px;
`;
