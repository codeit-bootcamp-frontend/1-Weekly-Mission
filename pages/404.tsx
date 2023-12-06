import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Page Not Found</title>
      </Head>
      <H1>페이지가 존재하지 않아요! 홈으로 돌아가주세요</H1>
      <LinkBox href="/">home</LinkBox>
    </>
  );
}

const H1 = styled.h1`
  font-size: 2rem;
`;

const LinkBox = styled(Link)`
  position: relative;
  top: 5rem;
  left: 10rem;
  margin: 1rem;
  padding: 1rem;
  border: 0.3rem solid pink;

  font-size: 4rem;
`;
