import styled from "styled-components";
import bgImg from "src/assets/errorbg.png";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--Gray1);
  background-image: url(${bgImg});
  background-size: cover;
`;

export const Img = styled.img`
  width: 30rem;
  height: auto;
  padding-top: 20rem;
`;

export const H1 = styled.h1`
  padding-top: 4rem;
  color: var(--Black);
  font-size: 3rem;
  text-align: center;
  line-height: 200%;
`;
