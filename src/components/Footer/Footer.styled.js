import styled, { css } from "styled-components";

export const S = {};

S.Footer = styled.footer`
  display: grid;
  grid-template: 1fr 1fr / 1fr 1fr;
  grid-template-areas:
    "info sns"
    "copy .";
  row-gap: 6rem;
  margin-top: 4rem;
  padding: 3.2rem;
  background: var(--Black);

  @media screen and (min-width: 768px) {
    grid-template: 1fr / 1fr 1fr 1fr;
    grid-template-areas: "copy info sns";
    padding: 3.2rem 10rem 11.2rem;
  }

  @media screen and (min-width: 1200px) {
    grid-template: 1fr / calc(50vw - 96rem) 1fr 1fr 1fr calc(50vw - 96rem);
    grid-template-areas: ". copy info sns .";
    padding: 3.2rem 10rem 11.2rem;
  }
`

const divFooter = css`
  display: flex;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  color: var(--Gray5);
`

S.DivCopy = styled.div`
  ${divFooter};
  align-self: center;
  grid-area: copy;
`

S.DivInfo = styled.div`
  ${divFooter};
  grid-area: info;
  gap: 3rem;

  & a {
    color: var(--Gray3);
  }
`

S.DivSns = styled.div`
  ${divFooter};
  gap: 1.2rem;
  justify-self: end;
  grid-area: sns;
`