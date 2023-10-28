import styled from 'styled-components';
import LinkImg from './img/link.svg';

export default function FolderHeader() {
  const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 60px 320px 90px 320px;
    flex-direction: column;
    background: #f0f6ff;
  `;
  const Input = styled.input`
    display: flex;
    width: 800px;
    padding: 16px 20px;
    flex-direction: column;
    align-items: flex-start;
    gap: 8px;
    border-radius: 15px;
    border: 1px solid #6d6afe;
    background: #fff;
    background-image: url('${LinkImg}');
    background-position: 12px 50%;
    background-repeat: no-repeat;
    background-size: 16px;
    padding-left: 40px;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;

    &::placeholder {
      color: #9fa6b2;
    }

    &:focus {
      outline: none;
    }
  `;

  const Button = styled.button`
    right: 10px;
    display: flex;
    width: 80px;
    padding: 10px 0;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 8px;
    background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
    color: #f5f5f5;
    font-family: Pretendard;
    font-size: 14px;
    font-weight: 600;
  `;
  return (
    <Div>
      <Input placeholder="링크를 추가해 보세요." />
      <Button>추가하기</Button>
    </Div>
  );
}
