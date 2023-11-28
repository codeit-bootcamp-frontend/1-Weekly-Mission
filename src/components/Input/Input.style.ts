import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const InputContainer = styled.div`
  width: 100%;
`;

export const Input = styled.input`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1.8rem 1.5rem;
  border-radius: 8px;
  border-width: 0.1rem;
  border-style: solid;
  border-color: COLORS.GRAY_300;
  background: ${COLORS.WHITE};

  &:active, &:focus {
    border-color: ${COLORS.PRIMARY};
  }
`;

export const InputError = styled.p`
  display: none;
`;
