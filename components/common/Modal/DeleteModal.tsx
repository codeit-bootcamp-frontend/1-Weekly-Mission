import styled from 'styled-components';
import ModalFrame from './ModalFrame';
import Button from '../Button';

interface Props {
  title: string;
  data: string;
  onClickClose: () => void;
}

function DeleteModal({ title, data = '', onClickClose }: Props) {
  return (
    <ModalFrame onClickClose={onClickClose}>
      <Title>{title}</Title>
      <Data>{data}</Data>
      <Button type="delete">삭제하기</Button>
    </ModalFrame>
  );
}

export default DeleteModal;

const Title = styled.div`
  font-size: 2rem;
  font-weight: 700;
`;
const Data = styled.div`
  color: var(--gray-60);
  font-size: 1.4rem;
  line-height: 2.2rem; /* 157.143% */
`;
