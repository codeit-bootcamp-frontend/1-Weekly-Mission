import logoImg from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { styled } from "styled-components";

export default function ErrorPage() {
  return (
    <Container>
      <Link href="/">
        <Image width={300} src={logoImg} alt="로고 이미지" />
      </Link>
      <H1>
        찾는 페이지가 존재하지 않습니다.
        <br />
        로고를 눌러 홈페이지로 돌아가세요.
      </H1>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding-top: 20rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Gray1);
  background-image: url("/errorbg.png");
  background-size: cover;
`;

const H1 = styled.h1`
  padding-top: 4rem;
  color: var(--Black);
  font-size: 3rem;
  text-align: center;
  line-height: 200%;
`;
