import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

export const StyledHeader = styled.header`
  display: grid;
  grid-template: repeat(3, auto) / 100%;
  grid-template-areas:
    "title"
    "sign"
    "img";
  place-items: center;
  gap: 4rem;
  padding-top: 4rem;

  background-color: var(--Gray1);
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 4.8rem;

  grid-area: title;

  span {
    background: linear-gradient(90deg, #6d6afe, #ff9f9f);
    color: transparent;
    -webkit-background-clip: text;
  }

  @media screen and (min-width: 768px) {
    font-size: 6.4rem;
    line-height: 8rem;
  }
`;

export const StyledLink = styled(Link)`
  width: 20rem;
  padding: 1.2rem 4rem;
  border-radius: 0.8rem;
  background-image: linear-gradient(90deg, #6d6afe, #6ae3fe);
  text-decoration: none;
  text-align: center;
  font-size: 1.4rem;
  font-weight: 600;
  color: var(--White);
  grid-area: sign;

  @media screen and (min-width: 768px) {
    width: 35rem;
    padding: 2rem 1.6rem;
    font-size: 2.4rem;
  }
`;

export const StyledImage = styled(Image)`
  width: 100%;
  height: auto;

  grid-area: img;

  @media screen and (min-width: 768px) {
    max-width: 100rem;
  }
`;
