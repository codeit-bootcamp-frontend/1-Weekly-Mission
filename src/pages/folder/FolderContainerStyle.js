import styled from "styled-components";
import { breakPoints } from "styles/media";

export const HeroContainer = styled.section`
  text-align: center;
  background-color: var(--color-primary-varient);
`;

export const Wrapper = styled.section`
  padding: 2.5rem 2rem;

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

export const Contents = styled.div`
  padding: 2.5rem 2rem;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  margin: auto;

  /* @media only screen and (${breakPoints.tablet}) {
    padding: 2.5rem 2rem;
  }

  @media only screen and (${breakPoints.mobile}) {
    width: 100%;
    height: 100%;
    padding: 1.25rem 2rem;
    gap: 2rem;
  } */
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1060px;
  width: 100%;
  margin: auto;
`;

export const ButtonContainer = styled.ul`
  display: flex;
  gap: 8px;
`;

export const AddFolderBtn = styled.div`
  display: flex;
  gap: 4px;
  color: var(--color-primary);
  cursor: pointer;
`;
