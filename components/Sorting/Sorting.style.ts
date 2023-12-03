import { BodyRegular1 } from '@/styles/typography';
import styled from 'styled-components';

interface IButton {
  clicked: boolean;
  fontColor: string;
  backgroundColor: string;
}

const Container = styled.span`
  width: 100%;
  height: 35px;
`;

const Button = styled.button<IButton>`
  white-space: nowrap;

  border: 1px solid #6d6afe;
  border-radius: 5px;
  padding: 8px 12px;
  margin-right: 12px;

  color: ${props =>
    props.clicked ? props.theme['white'] : props.theme['black']};
  border: 1px solid ${props => props.theme['primary']};
  background-color: ${props =>
    props.clicked ? props.theme['primary'] : props.theme['white']};

  color: ${props => props.fontColor};
  background-color: ${props => props.backgroundColor};

  ${BodyRegular1}
`;

export { Container, Button };
