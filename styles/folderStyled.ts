import styled from "styled-components";
import { device } from "@/styles/globalStyle";
import { ButtonContainer } from "@/components/button/Button";
import { InputContainer } from "@/components/input/Input";
import { ContentContainer } from "./sharedStyled";
import { Section } from "@/components/common/commonStyled";

export const FolderSection = styled(Section)`
  min-height: calc(100vh - 46.5rem);
`;

export const FolderContentContainer = styled(ContentContainer)`
  margin: 4rem auto 6rem;
  gap: 4rem;
  min-width: 106rem;
  @media all and (${device.tablet}) {
    min-width: calc(100vw - 6.4rem);
  }
  @media all and (${device.mobile}) {
    min-width: calc(100vw - 6.4rem);
  }

  .noLinkContainer {
    color: #000;
    width: 100%;
    padding: 4.1rem 0 3.9rem;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 400;
    line-height: 2.4rem;
    @media all and (${device.mobile}) {
      font-size: 1.4rem;
    }
  }
`;

export const AddLinkInputContainer = styled.div`
  position: relative;

  ${InputContainer} {
    min-width: 80rem;
    padding: 1.6rem 2rem;
    border-radius: 1.5rem;
    background: #fff;
    border: 1px solid var(--primary);
    @media all and (${device.tablet}) {
      min-width: calc(100vw - 6.4rem);
    }
    @media all and (${device.mobile}) {
      min-width: calc(100vw - 6.4rem);
      padding: 0.8rem 1rem;
    }

    .inputIcon {
      margin-right: 1.2rem;
      @media all and (${device.mobile}) {
        width: 1.6rem;
      }
    }

    .inputContainer {
      height: 2.4rem;
    }

    .inputContainer::placeholder {
      color: var(--gray60);
      line-height: 2.4rem;
    }
  }

  ${ButtonContainer} {
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
    width: 8.1rem;
    position: absolute;
    transform: translate(0%, -50%);
    right: 2rem;
    top: 50%;
    @media all and (${device.mobile}) {
      height: 3.7rem;
      right: 1rem;
    }
  }
`;

export const FolderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .folderBtnContainer {
    display: flex;
    gap: 0.8rem;
    @media all and (${device.mobile}) {
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

    @media all and (${device.mobile}) {
      display: none;
    }

    .folderAddTitle {
      color: #6d6afe;
      text-align: center;
      font-size: 1.6rem;
      font-weight: 500;
      letter-spacing: -0.3px;
      @media all and (${device.mobile}) {
        font-size: 1.4rem;
      }
    }

    .folderAddIcon {
      width: 1.6rem;
    }
  }
`;

export const FolderBtnItemContainer = styled.div<{ $isSelected: boolean }>`
  display: flex;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  border-radius: 0.5rem;
  border: 1px solid var(--primary);
  cursor: pointer;
  background: ${(props) => (props.$isSelected ? `var(--primary)` : "#fff")};
  color: ${(props) => (props.$isSelected ? `#fff` : "#000")};
  font-size: 1.6rem;
  font-weight: 400;
`;

export const LinkHeaderContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  @media all and (${device.mobile}) {
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

export const LinkToolContainer = styled.div<{ $display: boolean }>`
  display: ${(props) => (props.$display ? "none" : "flex")};
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
