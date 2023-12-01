import styled from 'styled-components';
import { onTablet, onPc } from '@/styles/mediaQuery';
import { COLORS } from '@/styles/palette';

export const Form = styled.form`
  position: relative;
  width: 100%;
  height: 4.3rem;

  ${onTablet} {
    height: 5.4rem;
  }

  ${onPc} {
    height: 5.4rem;
  }
`;

export const Input = styled.input`
  padding: 1.5rem 1.6rem 1.5rem 5rem;
  width: 100%;
  height: 100%;
  outline: none;
  border: 0.1rem solid ${COLORS.GREY_LIGHT};
  border-radius: 1rem;
  background-color: ${COLORS.GREY_LIGHT};
  font-size: 1.4rem;
  font-weight: 400;
  line-height: 1.5;

  &:active {
    border-color: ${COLORS.LB_PRIMARY};
  }
  &:focus {
    border-color: ${COLORS.LB_PRIMARY};
  }

  ${onTablet} {
    font-size: 1.6rem;
  }

  ${onPc} {
    font-size: 1.6rem;
  }
`;

export const Icon = styled.img`
  position: absolute;
  top: 50%;
  left: 1.8rem;
  transform: translateY(-50%);
`;

export const Reset = styled.button`
  position: absolute;
  top: 50%;
  right: 1.6rem;
  transform: translateY(-50%);
  background: transparent;
`;
