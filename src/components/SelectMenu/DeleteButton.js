import { styled } from 'styled-components';

const Delete = styled.button`
  box-shadow: 0px 2px 8px 0px rgba(51, 50, 54, 0.1);
  border: 0;
  background-color: #fff;
  padding: 7px 12px;
  font-size: 14px;

  &:hover {
    background-color: var(--grayE7);
    color: var(--primary);
  }
`;

function DeleteButton() {
  return <Delete>삭제하기</Delete>;
}

export default DeleteButton;
