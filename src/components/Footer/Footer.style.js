import styled from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';
import { COLORS } from 'styles/palette';

export const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${COLORS['JULGE_BLACK']};
`;

export const FooterInner = styled.div`
  display: grid;
  justify-content: space-between;
  grid-template-columns: 18rem 11.6rem;
  grid-template-rows: 1.8rem 1.8rem;
  row-gap: 6rem;
  column-gap: auto;
  padding: 3.2rem;

  ${onTablet} {
    grid-template-columns: auto auto auto;
  }

  ${onPc} {
    grid-template-columns: auto auto auto;
  }
`;

export const Copyright = styled.section`
  font-family: Arial;
  font-size: 1.6rem;
  font-weight: 400;
  color: #676767;
  grid-column: 1;
  grid-row: 2;

  ${onTablet} {
    grid-column: 1;
    grid-row: 1;
  }

  ${onPc} {
    grid-column: 1;
    grid-row: 1;
  }
`;

export const ExtraPage = styled.section`
  display: flex;
  gap: 3rem;
  grid-column: 1;
  grid-row: 1;

  ${onTablet} {
    grid-column: 2;
    grid-row: 1;
  }

  ${onPc} {
    grid-column: 2;
    grid-row: 1;
  }
`;

export const Link = styled.a`
  font-family: Arial;
  font-size: 1.6rem;
  font-weight: 400;
  text-decoration: none;
  color: #cfcfcf;
`;

export const SNS = styled.section`
  display: flex;
  justify-content: flex-end;
  gap: 1.2rem;
  grid-column: 2;
  grid-row: 1;

  ${onTablet} {
    grid-column: 3;
    grid-row: 1;
  }

  ${onPc} {
    grid-column: 3;
    grid-row: 1;
  }
`;
