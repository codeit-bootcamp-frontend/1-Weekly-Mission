import styled, { css } from 'styled-components';
import { COLORS } from 'styles/color';
import { onMobile, onTablet } from 'styles/mediaQuery';

export const FormContainer = styled.div<{
  $isScrolled: boolean;
  $showFooter: boolean;
}>`
  display: ${({ $isScrolled, $showFooter }) =>
    $isScrolled && $showFooter ? `none` : `flex`};
  flex-direction: column;
  align-items: center;

  padding: 6rem 32rem 9rem 32rem;

  background-color: #edf7ff;

  ${onTablet} {
    padding-right: 3.2rem;
    padding-left: 3.2rem;
  }

  ${onMobile} {
    padding-top: 2.4rem;
    padding-bottom: 4rem;
  }

  ${({ $isScrolled }) =>
    $isScrolled
      ? css`
          position: fixed;
          right: 0;
          bottom: 0;
          left: 0;
          z-index: 999;

          padding-top: 2.4rem;
          padding-bottom: 2.4rem;

          ${onMobile} {
            padding-top: 1.6rem;
            padding-bottom: 1.6rem;
          }
        `
      : css`
          position: static;
        `}
`;

export const Form = styled.form`
  position: relative;

  margin-left: -2rem;
  padding-left: 2rem;
`;

export const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 80rem;
  padding: 2.25rem 12rem 2.25rem 6rem;
  border: 0.1rem solid ${COLORS.PRIMARY};
  border-radius: 1.5rem;

  background: ${COLORS.WHITE};

  font-size: 1.6rem;
  line-height: 150%;

  gap: 0.8rem;

  ${onTablet} {
    width: 70rem;
  }

  ${onMobile} {
    width: 32.5rem;
  }
`;

export const Img = styled.img`
  position: absolute;
  top: 2.45rem;
  left: 4rem;

  width: 2rem;
  height: 2rem;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 1.6rem;
  right: 2rem;

  width: 8rem;
  padding: 1rem 1.6rem;
  border-radius: 0.8rem;

  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);

  color: #f5f5f5;

  gap: 1rem;
`;
