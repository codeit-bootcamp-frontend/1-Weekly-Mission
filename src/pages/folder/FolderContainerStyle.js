import styled from "styled-components";
import { breakPoints } from "styles/media";

export const HeroContainer = styled.section`
  text-align: center;
  background-color: var(--color-primary-varient);
`;

// export const Wrapper = styled.section`
//   padding: 2.5rem 2rem;

//   @media only screen and (${breakPoints.tablet}) {
//     padding: 2.5rem 2rem;
//   }

//   @media only screen and (${breakPoints.mobile}) {
//     width: 100%;
//     height: 100%;
//     padding: 1.25rem 2rem;
//     gap: 2rem;
//   }
// `;

export const Contents = styled.section`
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

export const Blank = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1060px;
  width: 100%;
  margin: auto;
`;

export const AddFolderBtn = styled.div`
  display: flex;
  gap: 4px;
  color: var(--color-primary);
  cursor: pointer;
`;

export const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
