import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";
import GoogleImg from "@/src/image/google.svg";
import KakaoImg from "@/src/image/kakaotalk.svg";
import { ReactNode } from "react";

interface SocialProps {
  children: ReactNode;
}

const Social = ({ children }: SocialProps) => {
  return (
    <Wrapper>
      <SocialSign>{children}</SocialSign>
      <Links>
        <SocialLink href="https://www.google.com/">
          <Image src={GoogleImg} alt="구글 로고" />
        </SocialLink>

        <SocialLink href="https://www.kakaocorp.com/page/">
          <Image src={KakaoImg} alt="카카오 로고" />
        </SocialLink>
      </Links>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 40rem;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.2rem 2.4rem;

  border-radius: 0.8rem;
  border: 0.1rem solid var(--gray30);
  background: var(--gray40);
`;

const SocialSign = styled.p`
  color: var(--gray10);

  font-size: 1.4rem;
  font-weight: 400;
`;

const Links = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.6rem;
`;

const SocialLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 4.2rem;
  height: 4.2rem;
`;

// const LinkImg = styled(Image)``;
export default Social;
