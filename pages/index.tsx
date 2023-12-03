import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Linkbrary</title>
      </Head>
      <LinkBox href="shared">shared</LinkBox>
      <LinkBox href="folder">folder</LinkBox>
    </>
  );
}

const LinkBox = styled(Link)`
  position: relative;
  top: 10rem;
  left: 10rem;
  margin: 1rem;
  padding: 1rem;
  border: 0.3rem solid pink;

  font-size: 4rem;
`;
