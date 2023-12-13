import { NavLogo } from "@/public/assets";
import Link from "next/link";
import styled from "styled-components";

export type SignType = "로그인" | "회원가입";

export function SignHeader({ type }: { type: SignType }) {
  return (
    <HeadSection>
      <NavLogo alt="홈페이지 로고: 클릭 시 메인화면으로 이동" />
      <MoveToSign>
        <p>{type === "로그인" ? "회원이 아니신가요?" : "이미 회원이신가요?"}</p>
        <Link href={type === "로그인" ? "/signUp" : "/signIn"}>
          {type === "로그인" ? "회원가입하기" : "로그인하기"}
        </Link>
      </MoveToSign>
    </HeadSection>
  );
}

const HeadSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
`;

const MoveToSign = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  font-size: 1.6rem;

  a {
    color: var(--primary);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`;
