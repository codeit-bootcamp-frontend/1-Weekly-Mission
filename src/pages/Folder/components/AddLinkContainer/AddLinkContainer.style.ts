import styled from 'styled-components';
import { onTablet, onPc } from '@styles/mediaQuery';
import { COLORS } from '@styles/palette';
import Button from '@components/Button';
import { zIndexStyle } from '@styles/zIndexStyle';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  padding: 2.4rem 3.2rem 4rem;
  background-color: ${COLORS.LB_BACKGROUND};

  ${onTablet} {
    padding: 6rem 3.25rem 9rem;
  }

  ${onPc} {
    padding: 6rem 0 9rem;
  }
`;

export const Inner = styled.form`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 80rem;
`;

export const Img = styled.img`
  position: absolute;
  left: 1.2rem;
`;

export const Input = styled.input`
  padding: 0.8rem 1rem 0.8rem 3.3rem;
  width: 100%;
  height: 5.3rem;
  outline: none;
  border: 0.1rem solid ${COLORS.LB_PRIMARY};
  border-radius: 1.5rem;
  font-size: 1.4rem;
  font-weight: 400;

  &::placeholder {
    color: ${COLORS.LB_GRAY_60};
  }

  ${onTablet} {
    padding: 1.6rem 2rem 1.6rem 3.3rem;
    font-size: 1.6rem;
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 1rem;
  width: 8rem;

  ${onPc} {
    width: 9rem;
  }
`;

export const SmallButton = styled(Button)`
  ${onPc} {
    padding: 1rem 1.6rem;
    font-size: 1.4rem;
  }
`;

export const FloatContainer = styled.div`
  display: flex;
  justify-content: center;
  position: fixed;
  bottom: 0;
  z-index: ${zIndexStyle.floating};
  width: 100%;
  height: 8.5rem;
  padding: 1.6rem 3.3rem;
  background-color: ${COLORS.LB_BACKGROUND};
  box-shadow: -2rem 1rem 5rem rgba(0, 0, 0, 0.4);

  ${onTablet} {
    height: 11.7rem;
    padding: 2.4rem 3.3rem;
  }

  ${onPc} {
    height: 11.7rem;
    padding: 2.4rem 3.3rem;
  }
`;
