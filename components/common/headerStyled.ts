import { device } from "@/styles/globalStyle";
import styled from "styled-components";
import { ButtonContainer } from "@/components/button/buttonStyled";

export const HeaderContainer = styled.header<{ $isFixed: boolean }>`
  display: flex;
  background: var(--background);
  padding: 2rem 20rem;
  align-items: center;
  width: 100vw;
  box-sizing: border-box;
  position: ${(props) => (props.$isFixed ? "fixed" : "initial")};
  justify-content: center;
  min-height: 9.4rem;
  z-index: 10;

  @media all and (${device.tablet}) {
    padding: 1.8rem 3.2rem;
  }
  @media all and (${device.mobile}) {
    padding: 1.3rem 3.2rem;
    min-height: 6.3rem;
  }

  .contentContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 152rem;

    #logoImg {
      cursor: pointer;
      height: 2.4rem;

      @media all and (${device.mobile}) {
        height: 1.6rem;
        width: 8.8rem;
      }
    }

    ${ButtonContainer} {
      width: 12.8rem;

      @media all and (${device.mobile}) {
        width: 8rem;
        padding: 1rem 1.6rem;
        font-size: 1.4rem;
      }
    }
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  gap: 0.6rem;
  align-items: center;

  img {
    width: 2.8rem;
    height: 2.8rem;
    border-radius: 50%;
  }

  .profileEmail {
    color: var(--linkbrary-gray-100, #373740);
    font-size: 1.4rem;
    font-weight: 400;
    @media all and (${device.mobile}) {
      display: none;
    }
  }
`;
