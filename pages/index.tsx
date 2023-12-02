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
  top: 100px;
  left: 100px;
  margin: 10px;
  padding: 10px;
  border: 3px solid pink;

  font-size: 40px;
`;
