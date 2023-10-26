import styled from 'styled-components';
import { onPc } from 'styles/mediaQuery';
import { COLORS, GRADIENTS } from 'styles/palette';

const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.6rem;
  width: 100%;
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

export default Button;
