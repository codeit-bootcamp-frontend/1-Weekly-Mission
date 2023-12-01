import * as S from './Banner.style';
import Link from 'next/link';
import Image from 'next/image';
import Button from '@/components/Button';

function Banner() {
  return (
    <S.BannerContainer>
      <S.BannerInner>
        <S.Title>
          <S.TitleGradient>세상의 모든 정보</S.TitleGradient>
          를<br />
          쉽게 저장하고 관리해 보세요
        </S.Title>
        <S.Signup>
          <Link href='/signup'>
            <Button>링크 추가하기</Button>
          </Link>
        </S.Signup>
        <S.ImgContainer>
          <Image src='/images/folder-page.png' alt='링크 페이지 예시' fill />
        </S.ImgContainer>
      </S.BannerInner>
    </S.BannerContainer>
  );
}

export default Banner;
