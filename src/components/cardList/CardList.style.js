import styled from "styled-components";
import { RESPONSIBLE_MEDIA_QUERIES } from "../../constants/mediaQueries";

export const CardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 34rem);
  justify-content: center;
  gap: 2rem;

  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    grid-template-columns: repeat(2, 34rem);
    gap: 2.4rem;
  }
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    grid-template-columns: minmax(auto, 32.5rem);
    gap: 2rem;
    position: relative;
    grid-area: cardList;
  }
`;

export const EmptyListMessage = styled.div`
  display: grid;
  justify-content: center;
  font-size: 1.6rem;
  padding: 4.1rem 0 3.5rem 0;
  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    font-size: 1.4rem;
    grid-area: cardList;
  }
`;
