import styled from "styled-components";

export const Container = styled.div`
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

export const H1 = styled.h1`
  padding-top: 4rem;
  color: var(--Black);
  font-size: 3rem;
  text-align: center;
  line-height: 200%;
`;
