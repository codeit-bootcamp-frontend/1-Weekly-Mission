import styled from "styled-components";

export const S = {};

S.SignButton = styled.a`
  width: 8.5rem;
  grid-area: sign;
  justify-self: end;
  padding: 1rem 2rem;
  border-radius: 0.8rem;
  background-image: linear-gradient(90deg, #6d6afe, #6ae3fe);
  color: var(--White);
  text-decoration: none;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;

  @media screen and (min-width: 768px) {
    padding: 1.2rem 1.6rem;
    font-size: 1.8rem;
    width: 11rem;
  }
`