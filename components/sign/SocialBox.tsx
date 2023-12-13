import styled from 'styled-components';
import Link from 'next/link';
import Image from 'next/image';
import { SNS_LOGIN_LIST } from '@/lib/constants/default';

interface Props {
  type: 'signin' | 'signup';
}

export default function SocialBox({ type }: Props) {
  return (
    <Container>
      {type === 'signup' ? '다른 방식으로 가입하기' : '소셜 로그인'}
      <IconWrapper>
        {SNS_LOGIN_LIST.map(({ alt, src, url }) => (
          <Link key={alt} href={url}>
            <Image src={src} alt={alt} width={42} height={42} />
          </Link>
        ))}
      </IconWrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  padding: 12px 24px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  border-radius: 8px;
  border: 1px solid var(--gray-20);
  background-color: var(--gray-10);

  font-size: 1.4rem;
`;

const IconWrapper = styled.div`
  width: 100px;

  display: flex;
  justify-content: space-between;
`;
