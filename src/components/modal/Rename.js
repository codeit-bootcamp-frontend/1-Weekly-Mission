import styled from 'styled-components';
import Button from '../common/Button';

export default function Rename() {
  return (
    <>
      <Input type='text' />
      <ModalButton type='변경하기'></ModalButton>
    </>
  );
}

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
