import { RESPONSIBLE_MEDIA_QUERIES } from "@/constants/mediaQueries";
import { ArticleProps, ArticleTitleProps } from "@/types/type";
import styled from "styled-components";

// export const ArticleEven = styled(Article)`
//   grid-template-columns: 55rem 29.1rem;

//   ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
//     grid-template-columns: 38.5rem 26.2rem;
//   }
//   ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
//     grid-template-columns: none;
//   }
// `;

export const Article = styled.article<ArticleProps>`
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

export const Title = styled.h2<ArticleTitleProps>`
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
    background-image: ${({ $idx }) => {
      switch ($idx) {
        case 1:
          return "linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%)";
        case 2:
          return "linear-gradient(277deg, #6fbaff -7.78%, #ffd88b 93.66%)";
        case 3:
          return "linear-gradient(99deg, #6d7ccd 25.76%, rgba(82, 136, 133, 0.22) 135.69%)";
        case 4:
          return "linear-gradient(271deg, #fe578f -185.84%, #68e8f9 107.18%)";
        default:
          return "none";
      }
    }};
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
