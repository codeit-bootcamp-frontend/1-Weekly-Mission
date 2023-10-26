import styled, { css } from 'styled-components';
import { COLORS } from 'styles/palette';
import Button from 'components/Button';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;

export const InputBox = styled.div`
  position: relative;
  font-size: 1.4rem;
  font-weight: 400;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 1.2rem;
  padding: 1.8rem 1.5rem;
  outline: none;
  border: 0.1rem solid ${COLORS['LB_GRAY_20']};
  border-radius: 0.8rem;

  &:focus {
    border-color: ${COLORS['LB_PRIMARY']};
  }

  ${({ error }) => {
    error &&
      css`
        border-color: ${COLORS['LB_RED']};
      `;
  }}
`;

export const PasswordToggle = styled.button`
  position: absolute;
  top: 4.6rem;
  right: 1.5rem;
`;

export const ErrorMessage = styled.p`
  height: 1.4rem;
  margin-top: 0.6rem;
  font-size: 1.4rem;
  font-weight: 400;
  color: ${COLORS['LB_RED']};
`;

export const Submit = styled(Button)`
  padding: 1.6rem 2rem;
  font-size: 1.8rem;
`;
