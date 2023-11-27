import styled from 'styled-components';
import Button from '../common/Button';

const ModalButton = styled(Button)`
  border-radius: 9px;
  width: 280px;
  padding: 16px 20px;
`;

const Input = styled.input`
  outline: none;
  padding: 18px 15px;
  width: 280px;
  border: 1px solid var(--linkbrary-gray-20);
  border-radius: 8px;
  margin: 24px 0 15px;
  &:focus {
    border-color: var(--linkbrary-primary-color);
  }
`;

const SubTitle = styled.div`
  color: var(--linkbrary-gray-60);
  font-size: 14px;
  margin: 8px 0 24px;
`;

export { ModalButton, Input, SubTitle };
