import Input from '@/components/Input';
import Link from 'next/link';
import styled from 'styled-components';

const Div = styled.div`
  background: #f0f6ff;
  padding: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const StyledLink = styled(Link)`
  color: #f5f5f5;
  font-family: Pretendard;
  font-size: 18px;
  font-weight: 600;
  width: 128px;
  padding: 16px 0;
  border: none;
  border-radius: 8px;
  text-align: center;
  background: linear-gradient(91deg, #6d6afe 0.12%, #6ae3fe 101.84%);
  text-decoration: none;
`;

export default function HomePage() {
  return (
    <>
      <Div>
        <StyledLink href={'/sharedPage'}>sharedPage</StyledLink>
        <StyledLink href={'/folderPage'}>folderPage</StyledLink>
      </Div>
      <Input />
    </>
  );
}
