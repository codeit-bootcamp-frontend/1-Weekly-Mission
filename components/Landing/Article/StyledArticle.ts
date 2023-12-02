import styled from "styled-components";

export const Article = styled.article`
  padding-top: 3rem;
  padding-bottom: 7rem;

  @media (max-width: 1199px) {
    padding-top: 3rem;
    padding-bottom: 12rem;
  }

  @media (max-width: 767px) {
    padding-top: 4rem;
  }
`;

export const Section = styled.section`
  display: grid;
  justify-content: center;
  row-gap: 1.6rem;
  width: 100%;
  height: 55rem;
  padding: 4rem 3.2rem;
  column-gap: 15.7rem;

  & :nth-of-type(odd) {
    grid-template-areas:
      ". image"
      "title image"
      "description image"
      ". image";
    grid-template-columns: 29.1rem 55rem;

    @media (max-width: 1199px) {
      grid-template-columns: 26.2rem 38.5rem;
    }

    @media (max-width: 767px) {
      grid-template-areas:
        "title"
        "image"
        "description";
    }
  }

  & :nth-of-type(even) {
    grid-template-areas:
      "image ."
      "image title"
      "image description"
      "image .";
    grid-template-columns: 55rem 29.1rem;

    @media (max-width: 1199px) {
      grid-template-columns: 38.5rem 26.2rem;
    }

    @media (max-width: 767px) {
      grid-template-areas:
        "title"
        "image"
        "description";
    }
  }

  @media (max-width: 1199px) {
    height: 41.5rem;
    column-gap: 5.1rem;
    row-gap: 1rem;
    padding: 5rem 0;
  }

  @media (max-width: 767px) {
    height: fit-content;
  }
`;

export const Title = styled.h2`
  grid-area: title;
  font-weight: 700;
  letter-spacing: -0.03rem;
  font-size: 4.8rem;
  line-height: 5.8rem;

  @media (max-width: 767px) {
    font-size: 2.4rem;
  }
`;

export const TitleGradient_1 = styled.span`
  background-image: linear-gradient(117deg, #fe8a8a 2.29%, #a4ceff 100%);
`;
export const TitleGradient_2 = styled.span`
  background-image: linear-gradient(304deg, #6fbaff 0%, #ffd88b 100%);
`;
export const TitleGradient_3 = styled.span`
  background-image: linear-gradient(133deg, #2945c7 0%, #dbe1f8 100%);
`;
export const TitleGradient_4 = styled.span`
  background-image: linear-gradient(310deg, #fe578f 0%, #68e8f9 100%);
`;

export const Description = styled.p`
  grid-area: description;
  font-size: 1.6rem;
  font-weight: 500;
  color: #6b6b6b;
  line-height: 150%;

  @media (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

export const LineBreak = styled.br`
  display: inline;

  @media (max-width: 767px) {
    display: none;
  }
`;

export const ContentImageBox = styled.div`
  position: relative;
  grid-area: image;
  width: 55rem;
  padding-top: 0.4rem;
  height: 45rem;

  @media (max-width: 1199px) {
    width: 38.5rem;
    height: 31.5rem;
    padding-top: 0;
  }

  @media (max-width: 767px) {
    width: 100%;
  }
`;
