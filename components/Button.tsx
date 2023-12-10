import styled from 'styled-components';

interface SignButtonProps {
  text: string;
  check: number;
}

export default function SignButton({ text, check }: SignButtonProps) {
  return (
    <>
      <Button disabled={check !== 0 ? true : false}>{text}</Button>
    </>
  );
}

const Button = styled.button`
  width: 100%;
  margin-top: 30px;
  font-size: 18px;
  color: #f5f5f5;
  font-weight: 600;
  border: none;
  padding: 16px 20px;
  border-radius: 8px;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  cursor: pointer;
`;
