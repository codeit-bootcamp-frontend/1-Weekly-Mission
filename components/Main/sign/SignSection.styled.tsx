import styled from "styled-components";

export const StyledSection = styled.section`
  display: grid;
  grid-template: 1fr auto 1fr / 1fr;
  grid-template-areas:
    "logo logo"
    "form form"
    "sns sns";
  row-gap: 3rem;
  width: 100vw;
  height: 100vh;
  background-color: var(--Gray1);
  color: var(--Black);
  padding: 12rem 3.2rem 24rem;

  @media screen and (min-width: 768px) {
    padding: 20rem 0rem 29rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 25rem 0 25rem;
  }
`;
