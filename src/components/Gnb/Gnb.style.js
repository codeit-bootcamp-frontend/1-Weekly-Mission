import styled from "styled-components";
import { COLORS } from "styles/palette";


export const Container = styled.div`
  width: 100%;
  padding: 1.3rem 3.2rem;
  background-color: ${COLORS.BACKGROUND};
`;

export const Wrapper = styled.div`
  min-width: 32.6rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.div`
  width: 8.8rem;
  height: 1.6rem;
`;
