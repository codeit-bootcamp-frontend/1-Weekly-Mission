import Image from "next/image";
import Link from "next/link";
import styled, { keyframes } from "styled-components";

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

export const CutLine = styled.div`
  height: 3rem;
  border: 0.1rem solid var(--White);
`;

const fadein = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

export const WrapperLink = styled.div`
  grid-area: sign;
  cursor: pointer;

  display: flex;
  justify-content: space-around;
  align-items: center;

  width: 20rem;
  height: 6rem;
  border-radius: 0.8rem;

  background-image: linear-gradient(90deg, #6d6afe, #6ae3fe);
  color: var(--White);
  font-size: 2rem;
  font-weight: 600;

  transition: 0.5s;

  button {
    border-radius: 0.8rem;
    font-size: 2rem;
    font-weight: 600;
    color: var(--White);

    @media screen and (min-width: 768px) {
      font-size: 2.4rem;
    }
  }

  button,
  ${CutLine} {
    display: none;
  }

  &:focus-within {
    width: 30rem;
    padding: 0 1rem;

    transition: 0.5s;

    p {
      display: none;
    }
    button,
    ${CutLine} {
      display: block;
      animation: ${fadein} 1s;
    }
  }

  @media screen and (min-width: 768px) {
    width: 35rem;
    padding: 2rem 1.6rem;
    font-size: 2.4rem;

    &:focus-within {
      width: 45rem;
    }
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
