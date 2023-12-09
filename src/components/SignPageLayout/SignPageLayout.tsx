import { ReactNode } from 'react';
import * as S from './SignPageLayout.style';
import Link from 'next/link';
import SocialBox from '@components/SocialBox';

interface Props {
  children?: ReactNode;
  page: 'signin' | 'signup';
}

const SignPageLayout = ({ children, page }: Props) => {
  return (
    <S.Container>
      <S.Header>
        <Link href='/'>
          <S.Logo
            src='/assets/images/logo.svg'
            alt='홈으로 연결된 Linkbrary 로고'
          />
        </Link>
        <S.Recommendation>
          {page === 'signin' ? (
            <>
              <p>회원이 아니신가요?</p>
              <S.RecommendationLink href='/signup'>
                회원 가입하기
              </S.RecommendationLink>
            </>
          ) : (
            <>
              <p>이미 회원이신가요?</p>
              <S.RecommendationLink href='/signin'>
                로그인 하기
              </S.RecommendationLink>
            </>
          )}
        </S.Recommendation>
      </S.Header>
      <S.Main>
        {children}
        <SocialBox page={page} />
      </S.Main>
    </S.Container>
  );
};

export default SignPageLayout;
