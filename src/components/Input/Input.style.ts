import styled, { css } from 'styled-components';
import { COLORS } from '@/styles/palette';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  position: relative;
`;

export const Input = styled.input<{ $error: boolean }>`
  width: 100%;
  padding: 1.8rem 1.5rem;
  border-radius: 0.8rem;
  border: 0.1rem solid ${COLORS.LB_GRAY_20};
  background: ${COLORS.LB_WHITE};
  outline: none;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.4rem;
  color: ${COLORS.LB_GRAY_100};

  &:placeholder {
    color: ${COLORS.LB_GRAY_60};
  }

  &:focus {
    ${({ $error }) =>
      !$error &&
      css`
        border-color: ${COLORS.LB_PRIMARY};
      `}
  }

  ${({ $error }) =>
    $error &&
    css`
      border-color: ${COLORS.LB_RED};
    `}
`;

export const ErrorMessage = styled.div`
  height: 1.7rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${COLORS.LB_RED};
`;

export const Toggle = styled.button`
  position: absolute;
  right: 1.5rem;
  top: 2.3rem;
`;
