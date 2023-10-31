import styled from "styled-components";
import { breakPoints } from "styles/media";

export const Cards = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  row-gap: 1.5rem;
  column-gap: 1.25rem;
  margin: auto;

  @media only screen and (${breakPoints.tabletNarrowWidth}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (${breakPoints.mobile}) {
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;
