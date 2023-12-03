import { Caption2 } from '@/styles/typography';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 32px 104px 62px;
  margin-top: 60px;

  background-color: ${props => props.theme['black']};
`;

const LinkContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px;
`;

const Text = styled.div`
  color: #676767;
  ${Caption2}
`;

const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 12px;
`;

export { Container, LinkContainer, Text, IconContainer };
