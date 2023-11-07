import styled from 'styled-components';
import ModalFrame from './ModalFrame';
import BlueBtn from '../Button/BlueBtn';

function InputModal({ title, btn, onClickClose }) {
  return (
    <ModalFrame onClickClose={onClickClose}>
      <Title>{title}</Title>
      <Input placeholder="내용 입력" />
      <BlueBtn type="modal">{btn}</BlueBtn>
    </ModalFrame>
  );
}

export default InputModal;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;

const Input = styled.input`
  padding: 18px 15px;
  margin-top: 24px;
  width: 100%;
  border-radius: 8px;
  border: 1px solid var(--gray-20);
  background: white;
  font-size: 1.6rem;
  line-height: 2.4rem;
  outline: none;
  &::placeholder {
    color: var(--gray-60);
  }
  &:focus {
    border: 1px solid var(--primary-color);
  }
`;
