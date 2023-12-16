import Link from 'next/link';
import Image from 'next/image';
import { Layout } from '@/src/components';
import HeaderImage from '@/src/assets/headerImage.png';
import ArticleImage1 from '@/src/assets/image1.png';
import ArticleImage2 from '@/src/assets/image2.png';
import ArticleImage3 from '@/src/assets/image3.png';
import ArticleImage4 from '@/src/assets/image4.png';
import { ThemeProvider } from 'styled-components';
import { theme } from '@/src/styles/theme';
import * as Style from '@/src/styles/index.style';

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout >
        <Style.HeaderContainer>
          <Style.HeaderBox>
            <h1>
              <span>세상의 모든 정보</span>를<br /> 쉽게 저장하고 관리해 보세요
            </h1>
            <Link className="link" href="/signin">
              <Style.LinkAddButton>링크 추가하기</Style.LinkAddButton>
            </Link>
            <Style.ImageBox>
              <Image
                fill
                src={HeaderImage}
                alt="Linkbrary 서비스 소개"
                priority
              />
            </Style.ImageBox>
          </Style.HeaderBox>
        </Style.HeaderContainer>

        <Style.Article>
          <div className="section right">
            <h2 className="title">
              <span className="gra-title background-clip-text">원하는 링크</span>
              를<Style.Br /> 저장하세요
            </h2>
            <span className="description">
              나중에 읽고 싶은 글, 다시 보고 싶은 영상,
              <Style.Br /> 사고 싶은 옷, 기억하고 싶은 모든 것을
              <Style.Br /> 한 공간에 저장하세요.
            </span>
            <Image
              className="article-image"
              src={ArticleImage1}
              alt="원하는 링크를 저장하는 모습의 사진"
            />
          </div>
          <div className="section left">
            <h2 className="title">
              링크를 폴더로
              <Style.Br />
              <span className="gra-title background-clip-text"> 관리</span>
              하세요
            </h2>
            <span className="description">
              나만의 폴더를 무제한으로 만들고
              <Style.Br />
              다양하게 활용할 수 있습니다.
            </span>
            <Image
              className="article-image"
              src={ArticleImage2}
              alt="폴더 이름 변경하기 사진"
            />
          </div>
          <div className="section right">
            <h2 className="title">
              저장한 링크를
              <Style.Br />{' '}
              <span className="gra-title background-clip-text">공유</span>해
              보세요
            </h2>
            <span className="description">
              여러 링크를 폴더에 담고 공유할 수 있습니다.
              <Style.Br />
              가족, 친구, 동료들에게 쉽고 빠르게 링크를
              <Style.Br />
              공유해 보세요.
            </span>
            <Image
              className="article-image"
              src={ArticleImage3}
              alt="폴더 공유하기 팝업창"
            />
          </div>
          <div className="section left">
            <h2 className="title">
              저장한 링크를
              <Style.Br />
              <span className="gra-title background-clip-text"> 검색</span>해
              보세요
            </h2>
            <span className="description">
              중요한 정보들을 검색으로 쉽게 찾아보세요.
            </span>
            <Image
              className="article-image"
              src={ArticleImage4}
              alt="코드잇으로 검색한 결과입니다 사진"
            />
          </div>
        </Style.Article>
      </Layout>
    </ThemeProvider>
  );
}
