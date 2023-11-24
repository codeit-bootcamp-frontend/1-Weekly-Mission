import * as S from './Banner.style';
import { Link } from 'react-router-dom';
import Button from '@components/Button';
import FOLDER_PAGE_EXAMPLE from '@assets/images/folder-page.png';

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
          <Link to='/signup'>
            <Button>링크 추가하기</Button>
          </Link>
        </S.Signup>
        <S.ImgContainer>
          <S.Img src={FOLDER_PAGE_EXAMPLE} alt='링크 페이지 예시' />
        </S.ImgContainer>
      </S.BannerInner>
    </S.BannerContainer>
  );
}

export default Banner;
