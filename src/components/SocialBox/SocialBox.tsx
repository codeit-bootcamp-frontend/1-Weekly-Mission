import Link from 'next/link';
import * as S from './SocialBox.style';

interface Props {
  page: 'signin' | 'signup';
}

function SocialBox({ page }: Props) {
  return (
    <S.Container>
      <S.P>{page === 'signin' ? '소셜 로그인' : '다른 방식으로 가입하기'}</S.P>
      <S.Links>
        <Link
          href='https://www.google.com/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='/assets/images/sns/google.svg'
            alt='google 홈페이지로 연결된 google 로고'
          />
        </Link>
        <Link
          href='https://www.kakaocorp.com/page/'
          target='_blank'
          rel='noopener noreferrer'>
          <img
            src='/assets/images/sns/kakaotalk.svg'
            alt='kakaotalk 홈페이지로 연결된 kakaotalk 로고'
          />
        </Link>
      </S.Links>
    </S.Container>
  );
}

export default SocialBox;
