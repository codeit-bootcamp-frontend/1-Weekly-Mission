import { BodyRegular1 } from '@/styles/typography';
import styled from 'styled-components';

const Container = styled.div`
  width: 106rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 15px 16px;

  border-radius: 10px;
  background-color: #f5f5f5;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;

  background-color: #f5f5f5;
  ${BodyRegular1};
  color: #666;
`;

export { Container, Input };
