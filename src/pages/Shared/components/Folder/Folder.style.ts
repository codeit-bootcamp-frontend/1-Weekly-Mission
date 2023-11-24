import styled from 'styled-components';
import { onPc } from '@styles/mediaQuery';

export const ContentContainer = styled.section`
  padding: 2rem 3.2rem;

  ${onPc} {
    margin: 0 auto;
    width: 115rem;
  }
`;
