import Image from "next/image";
import styled from "styled-components";

interface Section {
  reverse?: boolean;
}

export const StyledSection = styled.section<Section>`
  display: grid;
  grid-template: repeat(3, auto) / 100%;
  grid-template-areas:
    "title"
    "img"
    "text";
  place-items: start;
  row-gap: 2rem;
  padding: 4rem 3.2rem;

  @media screen and (min-width: 768px) {
    grid-template: auto auto / calc(50vw - 41rem) ${({ reverse }) => (reverse ? "1fr 30rem" : "30rem 1fr")} calc(50vw - 41rem);
    grid-template-areas: ${({ reverse }) => (reverse ? "'. img title .' '. img text .'" : "'. title img .' '. text  img .'")};
    row-gap: 1rem;
  }

  @media screen and (min-width: 1200px) {
    grid-template: auto auto / calc(50vw - 50rem) ${({ reverse }) => (reverse ? "1fr 30rem" : "30rem 1fr")} calc(50vw - 50rem);
    grid-template-areas: ${({ reverse }) => (reverse ? "'. img title .' '. img text .'" : "'. title img .' '. text  img .'")};
  }
`;

export const StyledImage = styled(Image)<Section>`
  width: 100%;
  height: auto;

  grid-area: img;

  @media screen and (min-width: 768px) {
    justify-self: end;
    width: 38.5rem;
    height: 31.5rem;

    ${({ reverse }) => reverse && "justify-self: start;"}
  }

  @media screen and (min-width: 1200px) {
    width: 55rem;
    height: 45rem;
  }
`;

export type Text = "link" | "folder" | "share" | "search";

interface Ititle {
  contents: Text;
}

export const Title = styled.h2<Ititle>`
  font-size: 3.2rem;
  font-weight: 700;

  grid-area: title;

  span {
    ${({ contents }) => {
      switch (contents) {
        case "link":
          return "background: linear-gradient(90deg, #fe8a8a, #a4ceff); color: transparent; -webkit-background-clip: text;";
        case "folder":
          return "background: linear-gradient(270deg, #6fbaff, #ffd88b); color: transparent; -webkit-background-clip: text;";
        case "share":
          return "background: linear-gradient(270deg, #fe578f, #68e8f9); color: transparent; -webkit-background-clip: text";
        case "search":
          return "background: linear-gradient(180deg, #6d7ccd, rgba(82, 133, 130, 0.22)); color: transparent; -webkit-background-clip: text;";
      }
    }};
  }

  @media screen and (min-width: 768px) {
    font-size: 4.8rem;
    font-weight: 700;
    align-self: self-end;
  }
`;

export const Text = styled.p`
  font-size: 2rem;
  font-weight: 500;
  line-height: 150%;
  color: var(--Gray5);
  grid-area: text;
`;
