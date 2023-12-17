import Layout from '@components/Layout';
import * as S from './index.style';
import Image from 'next/image';

const Home = () => {
  return (
    <Layout>
      <S.HeroHeader>
        <S.Slogan>
          <S.SloganGradient>세상의 모든 정보</S.SloganGradient>를 <br />
          쉽게 저장하고 관리해 보세요
        </S.Slogan>
        <S.Cta href='/signup'>
          <span>링크 추가하기</span>
        </S.Cta>
        <S.HeroImage>
          <Image
            width={1200}
            height={590}
            layout='intrinsic'
            src='/assets/images/screenshot/hero.png'
            alt='Linkbrary 서비스 소개'
          />
        </S.HeroImage>
      </S.HeroHeader>
      <S.Article>
        <S.Section>
          <S.Title>
            <S.Title1Gradient> 원하는 링크</S.Title1Gradient>
            를 <br /> 저장하세요
          </S.Title>
          <S.Description>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, <br />
            사고 싶은 옷, 기억하고 싶은 모든 것을 <br />한 공간에 저장하세요.
          </S.Description>
          <S.ContentImage>
            <Image
              width={550}
              height={450}
              layout='intrinsic'
              src='/assets/images/screenshot/image1.png'
              alt='링크의 내용이 담긴 카드들'
            />
          </S.ContentImage>
        </S.Section>
        <S.Section>
          <S.Title>
            링크를 폴더로 <br />
            <S.Title2Gradient>관리</S.Title2Gradient>
            하세요
          </S.Title>
          <S.Description>
            나만의 폴더를 무제한으로 만들고 <br />
            다양하게 활용할 수 있습니다.
          </S.Description>
          <S.ContentImage>
            <Image
              width={550}
              height={450}
              layout='intrinsic'
              src='/assets/images/screenshot/image2.png'
              alt='폴더 이름 변경 기능'
            />
          </S.ContentImage>
        </S.Section>
        <S.Section>
          <S.Title>
            저장한 링크를 <br />
            <S.Title3Gradient>공유</S.Title3Gradient>해 보세요
          </S.Title>
          <S.Description>
            여러 링크를 폴더에 담고 공유할 수 있습니다. <br />
            가족, 친구, 동료들에게 쉽고 빠르게 링크를 <br />
            공유해 보세요.
          </S.Description>
          <S.ContentImage>
            <Image
              width={550}
              height={450}
              layout='intrinsic'
              src='/assets/images/screenshot/image3.png'
              alt='폴더 공유 기능'
            />
          </S.ContentImage>
        </S.Section>
        <S.Section>
          <S.Title>
            저장한 링크를 <br />
            <S.Title4Gradient>검색</S.Title4Gradient>해 보세요
          </S.Title>
          <S.Description>
            중요한 정보들을 검색으로 쉽게 찾아보세요.
          </S.Description>
          <S.ContentImage>
            <Image
              width={550}
              height={450}
              layout='intrinsic'
              src='/assets/images/screenshot/image4.png'
              alt='링크 검색 기능'
            />
          </S.ContentImage>
        </S.Section>
      </S.Article>
    </Layout>
  );
};

export default Home;
