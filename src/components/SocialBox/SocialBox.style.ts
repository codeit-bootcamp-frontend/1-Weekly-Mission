import { COLORS } from '@styles/color';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.2rem 2.4rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${COLORS.GRAY_20};
  background: ${COLORS.GRAY_10};
`;

export const P = styled.p`
  font-size: 1.4rem;
  color: ${COLORS.GRAY_100};
`;

export const Links = styled.div`
  display: flex;
  gap: 1.6rem;
`;
