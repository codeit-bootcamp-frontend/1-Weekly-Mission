import { styled } from 'styled-components';

const Input = styled.input`
  width: 100%;
  margin-top: 9px;
  padding: 18px 15px;
  border: 1px solid var(--grayCC);
  border-radius: 8px;
`;

function ModalInput() {
  return <Input placeholder="내용 입력" />;
}

export default ModalInput;
