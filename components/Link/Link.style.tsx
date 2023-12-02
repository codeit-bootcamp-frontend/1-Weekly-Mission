import { BodyRegular1 } from '@/styles/typography';
import styled from 'styled-components';

const Container = styled.div`
  width: 80rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;

  background-color: ${props => props.theme['white']};
  border: 1px solid ${props => props.theme['primary']};
  border-radius: 15px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Input = styled.input`
  width: 100%;
  border: none;

  ${BodyRegular1}
  color: ${props => props.theme['dark_grey']}
`;

export { Container, InputContainer, Input };
