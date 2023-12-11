import styled from 'styled-components';

interface SignButtonProps {
  text: string;
  check: number;
}

export default function SignButton({ text, check }: SignButtonProps) {
  return (
    <>
      <Button disabled={check !== 0 ? true : false} checkColor={check}>
        {check === 0 ? text : '이메일 중복 확인 먼저 하세요'}
      </Button>
    </>
  );
}

const Button = styled.button<{ checkColor: number }>`
  width: 100%;
  margin-top: 30px;
  font-size: 18px;
  color: #f5f5f5;
  font-weight: 600;
  border: none;
  padding: 16px 20px;
  border-radius: 8px;
  background: ${(props) =>
    props.checkColor === 0
      ? 'linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%)'
      : '#808080'};
  cursor: pointer;
`;
