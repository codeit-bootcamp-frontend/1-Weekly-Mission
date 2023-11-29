import styled from "styled-components";
import * as React from "react";

interface Prop {
  children: React.ReactNode;
}

const EmptyLinkScreen = ({ children }: Prop) => {
  return (
    <>
      <Container>
        <p>{children}</p>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  width: auto;
  height: 10rem;
  padding: 4.1rem 0px 3.5rem 0px;
  justify-content: center;
  align-items: center;
  gap: 4rem;

  p {
    text-align: center;
    font-size: 1.6rem;
    line-height: 2.4rem; /* 150% */
  }
`;

export default EmptyLinkScreen;
