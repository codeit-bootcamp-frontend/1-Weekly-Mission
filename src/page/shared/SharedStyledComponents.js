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
  margin: 6rem auto 9rem;
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
  min-width: 106rem;

  .noLinkContainer {
    color: #000;
    width: 100%;
    padding: 4.1rem auto 3.9rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }
`;

export const AddLinkInputContainer = styled.div`
  width: 100%;
  min-width: 80rem;
  display: flex;
  padding: 1.6rem 2rem;
  border-radius: 1.5rem;
  background: #fff;
  align-items: center;
  box-sizing: border-box;
  border: 1px solid var(--primary);
  align-items: center;

  #linkImg {
    width: 1.6rem;
    margin-right: 1.2rem;
  }

  .inputContainer {
    width: 100%;
    height: 2.4rem;
  }

  .inputContainer::placeholder {
    color: var(--gray60);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
  }

  .linkAddBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9rem;
    height: 3.7rem;
    box-sizing: border-box;
    padding: 1rem 1.6rem;
    border-radius: 0.8rem;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: #f5f5f5;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
  }
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
  align-items: center;

  .inputContainer {
    width: 100%;
    height: 2.3rem;
  }

  .inputContainer::placeholder {
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

export const FolderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .folderBtnContainer {
    display: flex;
    gap: 0.8rem;
  }

  .folderAddBtnContainer {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    jusitfy-content: center;
    cursor: pointer;

    .folderAddTitle {
      color: #6d6afe;
      text-align: center;
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: -0.3px;
    }

    .folderAddIcon {
      width: 1.6rem;
    }
  }
`;

export const FolderBtnItemContainer = styled.div`
  display: flex;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 1px solid var(--primary);
  cursor: pointer;
  background: ${(props) => (props.isSelected ? `var(--primary)` : "#fff")};
  color: ${(props) => (props.isSelected ? `#fff` : "#000")};
  font-size: 1.6rem;
  font-weight: 400;
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
