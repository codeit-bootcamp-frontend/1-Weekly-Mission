import { FeatureItemGradients } from "@/constants/constants";
import { RESPONSIBLE_MEDIA_QUERIES } from "@/constants/mediaQueries";
import styled from "styled-components";

export const Article = styled.article<{ $isOdd: boolean }>`
  display: grid;
  margin: 0 auto;
  padding: 5rem 0;
  gap: 15.7rem;
  grid-template-columns: ${({ $isOdd }) => ($isOdd ? "29.1rem 55rem" : "55rem 29.1rem")};
  justify-content: center;
  align-items: center;
  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    padding: 5rem 25rem 5rem;
    gap: 5.1rem;
    grid-template-columns: ${({ $isOdd }) => ($isOdd ? "26.2rem 38.5rem" : "38.5rem 26.2rem")};
  }
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    display: grid;
    padding: 4rem 3.2rem;
    grid-template-areas:
      "article__title"
      "article__image"
      "article__description";
    gap: 1.6rem;
    justify-content: center;
    grid-template-columns: none;
  }
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    display: contents;
  }
`;

export const Title = styled.h2<{ $idx: number }>`
  color: #000;
  font-family: Pretendard;
  font-size: 4.8rem;
  font-weight: 700;
  & br {
    display: block;
  }
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    padding-bottom: 0.25rem;
    font-size: 2.4rem;
    grid-area: article__title;
    & br {
      display: none;
    }
  }
  & span {
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-image: ${({ $idx }) => FeatureItemGradients[String($idx)] || "none"};
  }
`;

export const Description = styled.p`
  color: #6b6b6b;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 150%;
  & br {
    display: block;
  }
  & .not-pc-br {
    display: none;
  }

  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    & .pc-br {
      display: none;
    }
    & .not-pc-br {
      display: block;
    }
  }

  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    font-size: 1.5rem;
    word-break: keep-all;
    grid-area: article__description;
    & br,
    .not-pc-br {
      display: none;
    }
  }
`;

export const FeatureImageContainer = styled.div`
  width: 100%;
  position: relative;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    grid-area: article__image;
  }
`;
