import styled from 'styled-components'
import { COLORS } from './palettes';

export const Section = styled.section`
  display: flex;
  padding: 60px 199px 90px 200px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  background: ${COLORS.BACKGROUND};
`;

export const Main = styled.main`
  border: 1px solid #000;
  width: 100%
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  `;
  
  export const Container = styled.div`
  border: 1px solid #000;
  max-width: 106rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin: 0 auto;
`;