import styled from 'styled-components';
import ModalFrame from './ModalFrame';

function DeleteModal({ children, data = null, onClickClose }) {
  return (
    <ModalFrame onClickClose={onClickClose}>
      <Title>{children}</Title>
      <Data>{data}</Data>
      <RedButton>삭제하기</RedButton>
    </ModalFrame>
  );
}

export default DeleteModal;

const RedButton = styled.button`
  width: 280px;
  padding: 16px 20px;
  margin-top: 24px;
  color: white;
  font-size: 1.6rem;
  font-weight: 600;
  background-color: var(--red);
  border-radius: 8px;
  border: none;
  &:hover {
    cursor: pointer;
  }
`;
const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
const Data = styled.div`
  color: var(--gray-60);
  font-size: 1.4rem;
  line-height: 2.2rem; /* 157.143% */
`;
