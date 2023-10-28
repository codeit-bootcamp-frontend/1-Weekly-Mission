import styled from "styled-components"

const HeroHeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 4rem;
  padding-top: 7rem;

  @media screen and (max-width: 767px) {
    row-gap: 2.4rem;
    padding-top: 0;
  }
`

const HeroSolganHeader = styled.h1`
  text-align: center;
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 8rem;

  span {
    background-image: var(--linkbrary-slogan-gradient);
    background-clip: text;
    -webkit-background-clip: text;
    color: transparent;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 47.2rem;
    word-break: keep-all;
  }

  @media screen and (max-width: 767px) {
    font-size: 3.2rem;
    line-height: 4.2rem;
    word-break: keep-all;
    width: 23.6rem;
  }
`

const HomeTitleHeader = styled.h2`
  grid-area: title;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 5.8rem;
  letter-spacing: -0.03rem;

  @media screen and (max-width: 767px) {
    font-size: 2.4rem;
    line-height: normal;
  }
`

const HeroImage = styled.img`
  width: 120rem;
  height: 59rem;

  @media screen and (max-width: 767px) {
    width: 30.2792rem;
    height: 17.8712rem;
    flex-shrink: 0;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    width: 65rem;
    height: 38.3rem;
  }
`

const HomeArticle = styled.article`
  padding-top: 7rem;
  padding-bottom: 12rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-top: 3rem;
  }

  @media screen and (max-width: 767px) {
    padding-top: 0;
  }
`

const HomeDescriptionParagraph = styled.p`
  grid-area: description;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--linkbrary-description);
  line-height: 150%;

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`

const HomeContentImage = styled.img`
  grid-area: image;
  object-fit: cover;
  width: 100%;
`

const HomeSection = styled.section`
  display: grid;
  justify-content: center;
  column-gap: 15.7rem;
  gap: 1.9rem;
  width: 100%;
  height: 100%;
  padding: 50px 0;

  &:nth-of-type(odd) {
    grid-template:
      ". image"
      "title image"
      "description image"
      ". image"
      /29.1rem 55rem;
  }

  &:nth-of-type(even) {
    grid-template:
      "image ."
      "image title"
      "image description"
      "image ."
      /55rem 29.1rem;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    column-gap: 5.1rem;
    row-gap: 1rem;
    height: 41.5rem;
    padding: 5rem 0;

    &:nth-of-type(odd) {
      grid-template:
        ". image"
        "title image"
        "description image"
        ". image"
        /26.2rem 38.5rem;
    }

    &:nth-of-type(even) {
      grid-template:
        "image ."
        "image title"
        "image description"
        "image ."
        /38.5rem 26.2rem;
    }
  }

  @media screen and (max-width: 767px) {
    column-gap: 2.4rem;
    row-gap: 1.6rem;
    padding: 4rem 3.2rem;
    height: 100%;

    &:nth-of-type(odd) {
      grid-template:
        "title"
        "image"
        "description"
        / 1fr;
    }

    &:nth-of-type(even) {
      grid-template:
        "title"
        "image"
        "description"
        / 1fr;
    }
  }
`

const HomeGradientSpan1 = styled.span`
  background-image: var(--linkbrary-title-1-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const HomeGradientSpan2 = styled.span`
  background-image: var(--linkbrary-title-2-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const HomeGradientSpan3 = styled.span`
  background-image: var(--linkbrary-title-3-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

const HomeGradientSpan4 = styled.span`
  background-image: var(--linkbrary-title-4-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`

export {
  HeroHeaderBox,
  HeroImage,
  HeroSolganHeader,
  HomeArticle,
  HomeSection,
  HomeTitleHeader,
  HomeGradientSpan1,
  HomeGradientSpan2,
  HomeGradientSpan3,
  HomeGradientSpan4,
  HomeDescriptionParagraph,
  HomeContentImage,
}
