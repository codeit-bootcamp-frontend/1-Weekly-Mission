import styled from "styled-components";
import {
  RESPONSIBLE_SIZE_TABLET,
  RESPONSIBLE_SIZE_MOBILE,
} from "utils/constants";

export const LinkCardListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 33.5rem;
  gap: 2rem 2.5rem;
  width: 100%;

  @media screen and (${RESPONSIBLE_SIZE_TABLET}) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2.4rem 2.5rem;
  }

  @media screen and (${RESPONSIBLE_SIZE_MOBILE}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;
