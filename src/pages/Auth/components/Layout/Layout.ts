import styled from 'styled-components';
import { COLORS } from '@styles/palette';

export const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${COLORS.LB_BACKGROUND};
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 3rem;
  width: 100%;
  max-width: 46.4rem;
  padding: 0 3.2rem;
`;
