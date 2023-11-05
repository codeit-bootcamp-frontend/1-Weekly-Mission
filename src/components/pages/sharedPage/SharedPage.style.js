import styled from "styled-components";
import { RESPONSIBLE_MEDIA_QUERIES } from "../../../constants/mediaQueries";

export const SharedPageWrap = styled.section`
  background-color: var(--linkbrary-white);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 3.2rem 10rem 3.2rem;
  gap: 4rem;
`;

export const SharedPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: 100%;
  max-width: 106rem;

  ${RESPONSIBLE_MEDIA_QUERIES.tablet} {
    max-width: 70rem;
  }

  ${RESPONSIBLE_MEDIA_QUERIES.mobile} {
    display: grid;
    gap: 2rem;
    max-width: 32.5rem;
    width: 100%;
  }
`;
