import { COLORS } from '@/styles/palettes';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  padding: 33px 200px 32px 200px;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  align-self: stretch;
  background: ${COLORS.BACKGROUND};
`;

export const Wrapper = styled.div`
  // border: 1px solid #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`; 