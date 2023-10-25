import styled from 'styled-components';
import linkImg from '../assets/images/link.svg';
import Button from './Button';

const InputContainer = styled.div`
  background-color: #f0f6ff;
  padding: 60px 32px;
  width: 100%;
`;

const InputBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 800px;
  margin: auto;
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  background-color: #ffffff;
  @media (max-width: 767px) {
    padding: 8px 10px;
  }
`;

const Input = styled.input`
  display: block;
  border: none;
  outline: none;
  width: 90%;
  margin-left: 12px;
`;

const LinkAddButton = styled(Button)`
  flex-shrink: 0;
  padding: 10px 16px;
  border-radius: 8px;
  font-size: 14px;
`;

export default function LinkAdd() {
  return (
    <InputContainer>
      <InputBox>
        <img src={linkImg} alt='링크' />
        <Input type='text' placeholder='링크를 추가해 보세요' />
        <LinkAddButton type={'추가하기'}></LinkAddButton>
      </InputBox>
    </InputContainer>
  );
}
