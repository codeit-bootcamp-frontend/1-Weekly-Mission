import styled from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';

export const CardListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  padding: 4rem 3.2rem 8rem;
  width: 100%;

  ${onTablet} {
    gap: 10rem;
    padding: 8rem 0rem 17rem;
  }

  ${onPc} {
    gap: 10rem;
    padding: 12rem 0rem 17rem;
  }
`;
