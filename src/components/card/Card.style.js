import styled from "styled-components";
import { RESPONSIBLE_MEDIA_QUERIES } from "../../constants/mediaQueries";
import { ReactComponent as starImage } from "../../images/star.svg";

export const CardWrap = styled.div`
  max-width: 34rem;
  text-decoration: none;
  color: #000;
  box-shadow: 0 0.5rem 2.5rem 0 rgba(0, 0, 0, 0.08);
  border-radius: 1.5rem 1.5rem 0 0;
  display: grid;
  grid-template-rows: 20rem 1fr;
  overflow: visible;
  transform-origin: center center;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    width: 100%;
    max-width: 32.5rem;
    grid-template-rows: 19.2rem 1fr;
  }
`;

export const CardImageWrap = styled.div`
  position: relative;
  border-radius: 1.5rem 1.5rem 0 0;
  overflow: hidden;
`;

export const StarIconButton = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  cursor: pointer;
`;
export const StarImage = styled(starImage)`
  ${StarIconButton}:hover & {
    path {
      fill: #6d6afe;
      stroke: white;
      fill-opacity: 1;
    }
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 1.5rem 1.5rem 0 0;
  transform-origin: center center;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.3);
    overflow: hidden;
  }
`;

export const CardTextWrap = styled.div`
  padding: 1.5rem 2rem;
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr auto;
  position: relative;
  grid-template-areas:
    "timeDiff kebabButton"
    "cardTitle cardTitle"
    "createdDate createdDate";

  ${CardWrap}:hover & {
    background-color: var(--linkbrary-zircon);
  }
`;

export const TimeDiff = styled.p`
  font-size: 1.3rem;
  color: #666;
  grid-area: timeDiff;
`;

export const CardTitle = styled.a`
  display: -webkit-box;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 3.3rem;
  font-size: 1.6rem;
  line-height: 1.6rem;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  grid-area: cardTitle;
`;

export const CardCreatedDate = styled.p`
  color: #333;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 1.4rem;
  grid-area: createdDate;
`;

export const KebabButton = styled.button`
  grid-area: kebabButton;
  cursor: pointer;
`;
