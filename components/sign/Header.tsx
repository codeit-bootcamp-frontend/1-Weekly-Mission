import styled from 'styled-components';
import Link from 'next/link';
import Logo from '@/components/common/Logo';

interface Props {
  type: 'signin' | 'signup';
}

export default function Header({ type }: Props) {
  return (
    <Container>
      <Logo width={210.6} height={38} />
      <Wrapper>
        <Description>이미 회원이신가요?</Description>
        {type === 'signup' ? <Go href="/signin">로그인 하기</Go> : <Go href="/signup">회원가입 하기</Go>}
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 218px;

  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const Description = styled.div`
  font-size: 1.6rem;
  line-height: 150%;
`;

const Go = styled(Link)`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--primary-color);
`;
