import Head from "next/head";
import * as React from "react";
import styled from "styled-components";
import GlobalStyle from "../styles/global-styles";

export default function Home() {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <>
        <GlobalStyle />
        <LinkContainer>
          <Button href="/shared" as="a">
            Shared
          </Button>
          <Button href="/folder" as="a">
            Folder
          </Button>
        </LinkContainer>
      </>
    </>
  );
}

const LinkContainer = styled.div`
  width: 100vm;
  justify-content: center;
  display: flex;
  gap: 5rem;
  margin: 10rem;
`;

const Button = styled.button`
  display: flex;
  padding: 1rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.8rem;
  background: var(--graBlueToSkyBlue);
  color: var(--grayLight);
  font-size: 1.4rem;
  font-weight: 600;
  border: 0;

  &:hover {
    text-decoration: underline;
  }
`;
