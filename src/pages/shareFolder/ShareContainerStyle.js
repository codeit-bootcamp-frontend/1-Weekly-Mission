import styled from "styled-components";
import { breakPoints } from "styles/media";

export const HeroContainer = styled.section`
  text-align: center;
  background-color: var(--color-primary-varient);
`;

export const Contents = styled.div`
  padding: 2.5rem 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: auto;

  @media only screen and (${breakPoints.tablet}) {
    padding: 2.5rem 2rem;
  }

  @media only screen and (${breakPoints.mobile}) {
    width: 100%;
    height: 100%;
    padding: 1.25rem 2rem;
    gap: 2rem;
  }
`;
