import styled from 'styled-components'
import { COLORS } from './palettes';

export const Section = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 60px 199px 90px 200px;
  background: ${COLORS.BACKGROUND};
`;

export const Main = styled.div`
  width: 100%
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  padding: 4rem 0
`;

export const Container = styled.div`
  width: 106rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin: 0 auto;
`;
