import { DefaultBtnContainer } from "@/components/button/DefaultButton";
import { device } from "@/styles/globalStyle";
import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Section = styled.section`
  display: flex;
  width: 99.8rem;
  justify-content: space-between;
  padding-top: 7rem;

  @media all and (${device.tablet}) {
    width: 69.8rem;
  }

  @media all and (${device.mobile}) {
    width: 100%;
    flex-direction: column;
    box-sizing: border-box;
  }
`;

export const NoDisplayInPcBr = styled.br`
  display: none;

  @media all and (${device.tablet}) {
    display: block;
  }

  @media all and (${device.mobile}) {
    display: block;
  }
`;

export const TopWrapper = styled(Wrapper)`
  background: var(--background);
  width: 100vw;
`;

export const TopSection = styled(Section)`
  flex-direction: column;
  padding-top: 7rem;
  background: var(--background);
  width: 100%;
  gap: 4rem;
  align-items: center;
  margin-top: 9.4rem;

  @media all and (${device.tablet}) {
    padding-top: 3.9rem;
  }

  @media all and (${device.mobile}) {
    margin-top: 6.3rem;
    padding: 2.8rem 3.2rem 0;
    gap: 2.4rem;
  }

  .mainTitle {
    color: #000;
    font-size: 6.4rem;
    font-weight: 700;
    line-height: 8rem;
    text-align: center;

    @media all and (${device.mobile}) {
      font-size: 3.2rem;
      line-height: 4.2rem;
    }

    span {
      background: linear-gradient(91deg, var(--primary) 17.28%, #ff9f9f 74.98%);
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }

  .imgContainer {
    position: relative;
    width: 120rem;
    height: 59rem;

    @media all and (${device.tablet}) {
      width: 69.8rem;
      height: 34.3rem;
    }

    @media all and (${device.mobile}) {
      width: 32.5rem;
      height: 16rem;
    }
  }

  ${DefaultBtnContainer} {
    width: 35rem;

    @media all and (${device.mobile}) {
      width: 20rem;
    }
  }
`;

export const ContentWrapper = styled(Wrapper)`
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media all and (${device.tablet}) {
    padding-top: 3rem;
  }

  @media all and (${device.mobile}) {
    padding-top: 0;

    ${Section}:nth-of-type(2n) {
      flex-direction: column-reverse;
    }
  }

  ${Section}:nth-of-type(1) span {
    background-image: linear-gradient(96deg, #fe8a8a 1.72%, #a4ceff 74.97%);
  }

  ${Section}:nth-of-type(2) span {
    background-image: linear-gradient(277deg, #6fbaff 59.22%, #ffd88b 93.66%);
  }

  ${Section}:nth-of-type(3) span {
    background-image: linear-gradient(
      99deg,
      #6d7ccd 69.76%,
      rgba(82, 136, 133, 0.22) 92.69%
    );
  }

  ${Section}:nth-of-type(4) {
    margin-bottom: 12rem;

    @media all and (${device.mobile}) {
      margin-bottom: 4rem;
    }

    span {
      background-image: linear-gradient(
        271deg,
        #fe578f -40.84%,
        #68e8f9 27.18%
      );
    }
  }
`;

export const ContentSection = styled(Section)`
  padding: 5rem 0;
  align-items: center;

  @media all and (${device.mobile}) {
    padding: 4rem 3.2rem;
  }

  .imgContainer {
    width: 55rem;
    height: 45rem;
    position: relative;

    @media all and (${device.tablet}) {
      width: 38.5rem;
      height: 31.5rem;
    }

    @media all and (${device.mobile}) {
      width: 32.5rem;
      height: 26.6rem;
    }
  }
`;

export const SectionTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 29.1rem;
  gap: 1rem;

  @media all and (${device.tablet}) {
    width: 26.2rem;
  }

  @media all and (${device.mobile}) {
    width: 100%;
    margin-bottom: 2.4rem;
  }

  .sectionTitle {
    color: #000;
    font-size: 4.8rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -0.3px;

    @media all and (${device.mobile}) {
      font-size: 2.4rem;
      line-height: 2.4rem;

      br {
        display: none;
      }
    }

    span {
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
      font-size: 4.8rem;
      font-weight: 700;
      line-height: 4.8rem;

      @media all and (${device.mobile}) {
        font-size: 2.4rem;
        line-height: 2.4rem;
      }
    }
  }

  .sectionSubTitle {
    color: #6b6b6b;
    font-size: 1.6rem;
    font-weight: 500;
    line-height: 150%;

    @media all and (${device.mobile}) {
      font-size: 1.5rem;

      br {
        display: none;
      }
    }
  }
`;
