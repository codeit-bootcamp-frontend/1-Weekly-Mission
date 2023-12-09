import styled from "styled-components";

export const Article = styled.article`
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    padding-top: 3rem;
    padding-bottom: 12rem;
  }

  @media (min-width: 1200px) {
    padding-top: 7rem;
  }
`;

export const Section = styled.section`
  display: grid;
  justify-content: center;
  row-gap: 1.6rem;
  width: 100%;
  height: fit-content;
  padding: 4rem 3.2rem;
  grid-template-areas:
    "title"
    "image"
    "description";

  &:nth-of-type(odd) {
    @media (min-width: 768px) {
      grid-template-areas:
        ". image"
        "title image"
        "description image"
        ". image";
      grid-template-columns: 26.2rem 38.5rem;
    }

    @media (min-width: 1200px) {
      grid-template-columns: 29.1rem 55rem;
    }
  }

  &:nth-of-type(even) {
    @media (min-width: 768px) {
      grid-template-areas:
        "image ."
        "image title"
        "image description"
        "image .";
      grid-template-columns: 38.5rem 26.2rem;
    }

    @media (min-width: 1200px) {
      grid-template-columns: 55rem 29.1rem;
    }
  }

  @media (min-width: 768px) {
    height: 41.5rem;
    column-gap: 5.1rem;
    row-gap: 1rem;
    padding: 5rem 0;
  }

  @media (min-width: 1200px) {
    height: 55rem;
    column-gap: 15.7rem;
  }
`;

export const Title = styled.h2`
  grid-area: title;
  font-weight: 700;
  letter-spacing: -0.03rem;
  font-size: 2.4rem;
  word-break: break-all;

  @media (min-width: 768px) {
    font-size: 4.8rem;
    line-height: 5.8rem;
  }
`;

export const TitleGradient_1 = styled.span`
  background-image: linear-gradient(117deg, #fe8a8a 2.29%, #a4ceff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
export const TitleGradient_2 = styled.span`
  background-image: linear-gradient(304deg, #6fbaff 0%, #ffd88b 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
export const TitleGradient_3 = styled.span`
  background-image: linear-gradient(133deg, #2945c7 0%, #dbe1f8 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;
export const TitleGradient_4 = styled.span`
  background-image: linear-gradient(310deg, #fe578f 0%, #68e8f9 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

export const Description = styled.p`
  grid-area: description;
  font-size: 1.5rem;
  font-weight: 500;
  color: #6b6b6b;
  line-height: 150%;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

export const LineBreak = styled.br`
  display: none;

  @media (min-width: 768px) {
    display: inline;
  }
`;

export const ContentImageBox = styled.div`
  position: relative;
  grid-area: image;
  width: 100%;
  aspect-ratio: 1/0.8;
  padding-top: 0.4rem;
  border-radius: 15px;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 38.5rem;
    height: 31.5rem;
    padding-top: 0;
  }

  @media (min-width: 1200px) {
    width: 55rem;
    height: 45rem;
  }
`;
