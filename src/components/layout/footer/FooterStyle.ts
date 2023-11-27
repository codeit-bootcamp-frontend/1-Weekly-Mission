import styled from "styled-components";
import { breakPoints } from "styles/media";

export const Wrapper = styled.div`
  height: 160px;
  background-color: var(--color-black);
`;

export const Contact = styled.div`
  height: 100%;
  padding: 2rem 6.5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 1920px;
  margin: auto;

  @media only screen and (${breakPoints.tablet}) {
    max-width: none;
  }

  @media only screen and (${breakPoints.mobile}) {
    height: 100%;
    padding: 2rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const Rights = styled.div`
  color: #676767;

  @media only screen and (${breakPoints.mobile}) {
    grid-row: 5;
    grid-column: 1 / 2;
  }
`;

export const Policy = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  @media only screen and (${breakPoints.mobile}) {
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    justify-content: flex-start;
    align-items: baseline;
  }
`;

export const Info = styled.span`
  color: #cfcfcf;
  text-decoration: none;
`;

export const Links = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 12px;

  @media only screen and (${breakPoints.mobile}) {
    grid-column: 2 / 3;
    align-items: baseline;
  }
`;
