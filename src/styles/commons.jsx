import styled from 'styled-components';
import { onPc } from './mediaQuery';
import { COLORS, GRADIENTS } from './palette';

export const Button = styled.a`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.6rem;

  border-radius: 0.8rem;
  background: ${GRADIENTS['LB_GRAD']};
  font-size: 1.4rem;

  font-weight: 600;
  color: ${COLORS['GREY_LIGHT']};

  ${onPc} {
    padding: 1.6rem 2rem;
    font-size: 1.8rem;
  }
`;

export const Ally = styled.h1`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;
