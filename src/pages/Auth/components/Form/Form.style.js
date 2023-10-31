import styled from 'styled-components';
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

export const Submit = styled(Button)`
  padding: 1.6rem 2rem;
  font-size: 1.8rem;
`;
