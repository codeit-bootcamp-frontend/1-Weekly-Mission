import styled from "styled-components";
import { device } from "../../components/styles";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding-top: 9.4rem; */
`;

export const Section = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.bg || `var(--background)`};
`;

export const ContentContainer = styled.div`
  margin: 2rem auto 6rem;
  display: flex;
  flex-direction: column;
  width: fit-content;
  align-items: center;
  justify-content: center;

  #userProfile {
    border-radius: 4.7rem;
    width: 6rem;
    height: 6rem;
    margin-bottom: 1.2rem;
  }
  #userName {
    color: #000;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    margin-bottom: 2rem;
  }

  #folderName {
    color: #000;
    font-size: 4rem;
    font-weight: 600;
  }
`;

export const FolderContentContainer = styled(ContentContainer)`
  margin: 4rem auto 6rem;
  gap: 4rem;
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
  padding: 1.5rem 1.6rem;
  border-radius: 1rem;
  background: #f5f5f5;
  align-items: center;
  box-sizing: border-box;

  #searchContainer {
    width: 100%;
    height: 2.3rem;
  }

  #searchContainer::placeholder {
    color: #666;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
  }

  #searchImg {
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export const CardContainer = styled.div`
  gap: 4rem;
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(3, 1fr);
  @media all and ${device.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }
  @media all and ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
  }
`;
