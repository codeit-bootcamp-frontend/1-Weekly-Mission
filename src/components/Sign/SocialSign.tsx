import { SignGooGleIcon, SignKaKaoIcon } from "@/public/assets";
import Link from "next/link";
import styled from "styled-components";
import { SignType } from "./SignHead";

export function SocialSign({ type }: { type: SignType }) {
  return (
    <MobileGrid>
      <Container>
        <Text>{type === "로그인" ? "소셜 로그인" : "다른 방식으로 가입하기"}</Text>
        <SocialIcons>
          <Link target="_blank" href="https://www.google.com/" rel="noopener noreferrer">
            <SignGooGleIcon alt={`구글 아이디를 이용하여 ${type}`} />
          </Link>
          <Link target="_blank" href="https://www.kakaocorp.com/page/" rel="noopener noreferrer">
            <SignKaKaoIcon alt={`카카오톡 아이디를 이용하여 ${type}`} />
          </Link>
        </SocialIcons>
      </Container>
    </MobileGrid>
  );
}

const MobileGrid = styled.div`
  display: grid;
  grid-template-columns: minmax(29rem, 40rem);
  justify-content: center;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  width: 400px;
  padding: 12px 24px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--gray60);
  background: var(--gray10);

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const SocialIcons = styled.section`
  display: flex;
  align-items: flex-start;
  gap: 16px;
`;

const Icon = styled.img`
  width: 42px;
  height: 42px;
`;

const Text = styled.p`
  font-size: 1.4rem;
`;
