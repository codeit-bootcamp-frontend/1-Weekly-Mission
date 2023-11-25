import styled from "styled-components";
import { breakPoints } from "styles/media";
import { ReactComponent as AddIcon } from "assets/add.svg";

export const HeroContainer = styled.section`
  text-align: center;
  background-color: var(--color-primary-varient);
`;

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

export const SearchInfo = styled.p`
  margin: 0 auto;
  max-width: 1060px;
  width: 100%;
  font-size: 2rem;
  font-weight: 600;
  color: #9fa6b2;
`;

export const SearchKeyword = styled.span`
  color: var(--color-text);
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

  @media only screen and (${breakPoints.mobile}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`;

export const AddFolderBtn = styled.div`
  display: flex;
  white-space: nowrap;
  gap: 4px;
  color: var(--color-primary);
  cursor: pointer;
  transition: color 500ms ease-out;

  @media only screen and (${breakPoints.mobile}) {
    padding: 0.5rem 1.5rem;
    position: absolute;
    width: 8rem;
    bottom: 101px;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    justify-content: center;
    background: var(--color-primary);
    border-radius: 1.25rem;
    z-index: 1;
  }
`;

export const IconAdd = styled(AddIcon)`
  @media only screen and (${breakPoints.mobile}) {
    path {
      fill: white; /* path 요소에 fill 속성 적용 */
    }
  }
`;

export const SubTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`;
