import styled from 'styled-components';
import { onTablet, onPc } from 'styles/mediaQuery';
import { COLORS } from 'styles/palette';

export const SearchBarContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input`
  padding: 1.5rem 1.6rem 1.5rem 5rem;
  width: 100%;
  border: none;
  border-radius: 1rem;
  background-color: ${COLORS['GREY_LIGHT']};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;

  ${onTablet} {
    font-size: 1.6rem;
  }

  ${onPc} {
    font-size: 1.6rem;
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 1.7rem;
  left: 1.8rem;
`;
