import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const Container = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4.3rem;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS['LB_BACKGROUND']};
`;

export const Title = styled.h1`
  font-size: 4rem;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 2rem;
`;

export const HomeButton = styled.div`
  width: 20rem;
`;
