import styled from 'styled-components';
import { COLORS } from '@/styles/palettes';

export const InputFormContainer = styled.div`
  width: 100%;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 1.2rem;
  font-size: 1.4rem;

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1.8rem 1.5rem;
  border-width: 0.1rem;
  border-style: solid;
  border-color: &{({isError})} ${COLORS.PRIMARY};
  border-radius: 0.8rem;
`;

export const ErrorText = styled.p`
  color: ${COLORS.RED};
  margin-top: 6px;

  /* Linkbrary/body2-regular */
  font-family: Pretendard;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
