import styled from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';

export const CardListContainer = styled.ul`
  display: grid;
  gap: 2rem;
  margin: 0 auto;
  padding-top: 3.2rem;

  ${onTablet} {
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 2.5rem;
    padding-top: 4rem;
  }

  ${onPc} {
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 1fr;
    gap: 2.5rem 2rem;
    padding-top: 4rem;
  }
`;
