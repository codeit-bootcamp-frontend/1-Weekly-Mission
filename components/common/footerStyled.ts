import { device } from "@/styles/globalStyle";
import styled from "styled-components";

export const FooterWrapper = styled.footer`
  background: var(--black);
  width: 100%;
  display: flex;
  padding: 3.2rem 10.4rem 6.4rem;
  align-items: center;
  box-sizing: border-box;
  justify-content: center;

  @media all and (${device.mobile}) {
    padding: 3.2rem;
  }

  .contnetContainer {
    height: 6.4rem;
    align-items: flex-start;
    max-width: 171.2rem;
    display: flex;
    width: 100%;
    justify-content: space-between;

    @media all and (${device.mobile}) {
      height: 9.6rem;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    .footerItem {
      font-family: Arial;
      font-size: 1.6rem;
      font-weight: 400;
      line-height: 1.6rem;
    }

    .leftItem {
      color: #676767;
      text-align: center;

      @media all and (${device.mobile}) {
        text-align: start;
        order: 3;
        align-self: flex-end;
      }
    }
  }
`;

export const CenterItemContainer = styled.div`
  display: flex;
  gap: 3rem;

  .footerItem {
    color: #cfcfcf;
  }
`;

export const SnsItemContainer = styled.div`
  display: flex;
  gap: 1.2rem;

  @media all and (${device.mobile}) {
    justify-content: flex-end;
  }

  Link {
    height: 2rem;

    img {
      cursor: pointer;
    }
  }
`;
