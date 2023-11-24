import styled from "styled-components";

export const Backgorund = styled.div`
  position: absolute;
  background-color: var(--Gray1);
  width: 100%;
  height: 7rem;
`;

export const Nav = styled.nav`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "logo sign";
  align-items: center;
  position: ${({ page }) => (page === "folder" ? `relative` : `sticky`)};
  top: 0;
  z-index: ${({ page }) => (page === "folder" ? `0` : `2`)};
  background-color: var(--Gray1-80);
  padding: 1.6rem 3.2rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: calc(50vw - 40rem) 1fr 1fr calc(50vw - 40rem);
    grid-template-areas: ". logo sign .";
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 20rem;
    grid-template-columns: calc(50vw - 96rem) 1fr 1fr calc(50vw - 96rem);
    grid-template-areas: ". logo sign .";
  }
`;
