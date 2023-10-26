import styled from 'styled-components';
import { COLORS } from 'styles/palette';

export const AddLinkContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2.4rem 3.2rem 4rem;
  background-color: ${COLORS['LB_BACKGROUND']};
`;

export const Img = styled.img`
  position: absolute;
  left: 4.3rem;
`;

export const Input = styled.input`
  padding: 0.8rem 1rem 0.8rem 3.2rem;
  width: 100%;
  height: 5.3rem;
  border: 0.1rem solid ${COLORS['LB_PRIMARY']};
  border-radius: 1.5rem;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-weight: 400;

  &::placeholder {
    color: ${COLORS['LB_GRAY_60']};
  }
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 4rem;
  width: 8rem;
`;
