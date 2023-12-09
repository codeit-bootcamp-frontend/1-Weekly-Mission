import { COLORS } from '@styles/color';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Input = styled.input<{ $error: boolean; $passwordType: boolean }>`
  display: flex;
  width: 100%;
  padding: 1.8rem 1.5rem;
  padding-right: ${({ $passwordType }) =>
    $passwordType ? '4.1rem' : '1.5rem'};
  justify-content: center;
  align-items: center;
  border-radius: 0.8rem;
  border: 0.1rem solid
    ${({ $error }) => ($error ? `${COLORS.RED}` : `${COLORS.GRAY_20}`)};
  background: ${COLORS.WHITE};
  font-size: 1.6rem;
  color: ${COLORS.GRAY_100};
  line-height: 2.4rem;

  &:focus {
    border-color: ${COLORS.PRIMARY};
  }
`;

export const Button = styled.img`
  position: absolute;
  right: 1.5rem;
  top: 2.2rem;
  cursor: pointer;
`;

export const ErrorMessage = styled.span`
  color: ${COLORS.RED};
  font-size: 1.4rem;
`;
