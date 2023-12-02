import { device } from "@/styles/globalStyle";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 9.4rem;

  @media all and (${device.mobile}) {
    margin-top: 6.3rem;
  }
`;

export const Section = styled.div<{ $bg: string }>`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: ${(props) => props.$bg};
`;
