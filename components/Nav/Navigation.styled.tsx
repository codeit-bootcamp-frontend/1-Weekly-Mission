import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import styled from "styled-components";

export const Background = styled.div`
  position: absolute;
  background-color: var(--Gray1);
  width: 100%;
  height: 9rem;
`;

interface Inav {
  $page: string;
}

export const Nav = styled.nav<Inav>`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: "logo sign";
  align-items: center;
  position: ${({ $page }) => ($page === "folder" ? `relative` : `sticky`)};
  top: 0;
  z-index: ${({ $page }) => ($page === "folder" ? `0` : `2`)};
  background-color: var(--Gray1-80);
  padding: 1.6rem 3.2rem;
  height: 9rem;

  @media screen and (min-width: 768px) {
    grid-template-columns: calc(50vw - 40rem) 1fr 1fr calc(50vw - 40rem);
    grid-template-areas: ". logo sign .";
  }

  @media screen and (min-width: 1200px) {
    padding: 2rem 20rem;
    grid-template-columns: calc(50vw - 96rem) 1fr 1fr calc(50vw - 96rem);
    grid-template-areas: ". logo sign .";
  }

  a:nth-child(2) {
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
  }
`;
