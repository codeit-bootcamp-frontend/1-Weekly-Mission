import styled from "styled-components";
import { onMobile } from "styles/mediaQuery";

export const Container = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.4rem;
  gap: 0.6rem;
`;

export const Img = styled.img`
  width: 2.8rem;
  height: 2.8rem;
  border-radius: 99rem;
`;

export const P = styled.p`
  ${onMobile} {
    display: none;
  }
`;
