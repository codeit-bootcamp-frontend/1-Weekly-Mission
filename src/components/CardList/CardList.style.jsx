import styled from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';

export const CardListContainer = styled.ul`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  margin: 0 auto;
  padding-top: 3.2rem;

  ${onTablet} {
    grid-template-columns: auto auto;
    grid-auto-rows: auto;
    gap: 2.5rem;
    padding-top: 4rem;
  }

  ${onPc} {
    grid-template-columns: auto auto auto;
    grid-auto-rows: auto;
    gap: 2.5rem 2rem;
    padding-top: 4rem;
  }
`;
