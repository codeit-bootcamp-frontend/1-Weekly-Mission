import styled from "styled-components";
import { device } from "../../components/styles";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  @media all and ${device.tablet} {
    min-width: calc(100vw - 6.4rem);
  }
  @media all and ${device.mobile} {
    min-width: calc(100vw - 6.4rem);
  }

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
  @media all and ${device.tablet} {
    min-width: calc(100vw - 6.4rem);
  }
  @media all and ${device.mobile} {
    min-width: calc(100vw - 6.4rem);
    padding: 0.8rem 1rem;
  }

  #linkImg {
    margin-right: 1.2rem;
    @media all and ${device.mobile} {
      width: 1.6rem;
    }
  }

  .inputContainer {
    width: 100%;
    height: 2.4rem;
    padding-top: 0.5rem;
  }

  .inputContainer::placeholder {
    color: var(--gray60);
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    @media all and ${device.mobile} {
      font-size: 1.4rem;
    }
  }

  .linkAddBtn {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 1.6rem;
    border-radius: 0.8rem;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: #f5f5f5;
    font-size: 1.4rem;
    font-weight: 600;
    cursor: pointer;
    box-sizing: content-box;
    width: 8.1rem;
    height: 1.7rem;
    max-width: 8.1rem;
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
  @media all and ${device.mobile} {
    padding: 1.3rem 1.6rem;
  }

  .inputContainer {
    width: 100%;
    height: 2.3rem;
    padding-top: 0.5rem;
    @media all and ${device.mobile} {
      height: 1.7rem;
    }
  }

  .inputContainer::placeholder {
    color: #666;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.5rem;
    @media all and ${device.mobile} {
      font-size: 1.4rem;
      line-height: 1.7rem;
    }
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
    @media all and ${device.mobile} {
      flex-wrap: wrap;
      width: calc(100vw - 6.4rem);
    }
  }

  .folderAddBtnContainer {
    display: flex;
    gap: 0.4rem;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    @media all and ${device.mobile} {
      display: none;
    }

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

export const LinkHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media all and ${device.mobile} {
    flex-direction: column;
    align-items: flex-start;
    gap: 1.2rem;
  }

  .linkTitle {
    color: #000;
    font-size: 2.4rem;
    font-weight: 600;
    letter-spacing: -0.2px;
  }
`;

export const LinkToolContainer = styled.div`
  display: ${(props) => (props.display ? "none" : "flex")};
  gap: 1.2rem;

  .linkToolItemContainer {
    display: flex;
    gap: 1.2rem;
    align-items: center;
    cursor: pointer;

    img {
      width: 1.8rem;
      height: 1.8rem;
    }

    .linkToolTitle {
      color: var(--gray60);
      font-size: 1.4rem;
      font-weight: 600;
    }
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

export const AddFloatingBtn = styled.div`
  display: none;
  @media all and ${device.mobile} {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.8rem 2.4rem;
    border-radius: 2rem;
    border: 1px solid #fff;
    background: var(--primary);
    width: fit-content;
    height: 3.7rem;
    box-sizing: border-box;
    gap: 0.4rem;
    position: fixed;
    z-index: 5;
    bottom: 10.1rem;
    margin: 0 auto;
    left: 50%;
    transform: translate(-50%, 0);

    .floatingBtnTitle {
      color: var(--gray10);
      text-align: center;
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: -0.3px;
    }
  }
`;
