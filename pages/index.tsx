import HeroContainer from "@/components/HeroContainer";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import { UserDataProps } from "@/lib/Type";
import Image from "next/image";
import styled from "styled-components";

export default function Home({ userData }: UserDataProps) {
  return (
    <>
      <Header userData={userData}></Header>
      <HeroContainer></HeroContainer>
      <Container>
        <Section>
          <Title>
            <S_Title
              gradient={"linear-gradient(117deg, #fe8a8a 2.29%, #a4ceff 100%)"}
            >
              원하는 링크
            </S_Title>
            를 <Br />
            저장하세요
          </Title>
          <Description>
            나중에 읽고 싶은 글, 다시 보고 싶은 영상, <Br />
            사고 싶은 옷, 기억하고 싶은 모든 것을 <Br />한 공간에 저장하세요.
          </Description>
          <S_Image src="/images/image1.png" alt="링크 저장 기능" />
        </Section>

        <Section>
          <Title>
            링크를 폴더로 <Br />
            <S_Title
              gradient={"linear-gradient(304deg, #6fbaff 0%, #ffd88b 100%)"}
            >
              관리
            </S_Title>
            하세요
          </Title>
          <Description>
            나만의 폴더를 무제한으로 만들고 <Br />
            다양하게 활용할 수 있습니다.
          </Description>
          <S_Image src="/images/image2.png" alt="폴더로 링크관리 기능" />
        </Section>

        <Section>
          <Title>
            저장한 링크를 <Br />
            <S_Title
              gradient={"linear-gradient(133deg, #2945c7 0%, #dbe1f8 100%)"}
            >
              공유
            </S_Title>
            해 보세요
          </Title>
          <Description>
            여러 링크를 폴더에 담고 공유할 수 있습니다.
            <Br />
            가족, 친구, 동료들에게 쉽고 빠르게 링크를 <Br />
            공유해 보세요.
          </Description>
          <S_Image src="/images/image3.png" alt="폴더공유 기능" />
        </Section>

        <Section>
          <Title>
            저장한 링크를 <Br />
            <S_Title
              gradient={"linear-gradient(310deg, #fe578f 0%, #68e8f9 100%)"}
            >
              검색
            </S_Title>
            해 보세요
          </Title>
          <Description>중요한 정보들을 검색으로 쉽게 찾아보세요.</Description>
          <S_Image src="/images/image4.png" alt="링크검색 기능" />
        </Section>
      </Container>
      <Footer></Footer>
    </>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  padding-bottom: 4rem;

  @media (min-width: 768px) {
    padding-top: 3rem;
    padding-bottom: 12rem;
  }

  @media (min-width: 1200px) {
    max-width: 192rem;
    padding-top: 7rem;
    padding-bottom: 12rem;
  }
`;

const Section = styled.section`
  width: 100%;
  max-width: 100rem;

  display: grid;
  justify-content: center;
  column-gap: 15.7rem;
  row-gap: 1rem;

  height: fit-content;
  padding: 4rem 3.2rem;

  @media (min-width: 768px) {
    height: 41.5rem;
    row-gap: 1rem;
    padding: 5rem 3.2rem;
    column-gap: 5rem;
  }

  @media (min-width: 1200px) {
    height: 55rem;
    padding: 5rem 0;
    column-gap: 15rem;
  }

  &:nth-of-type(even) {
    grid-template-areas:
      "title"
      "image"
      "description";

    @media (min-width: 768px) {
      grid-template-areas:
        "image ."
        "image title"
        "image description"
        "image .";
      grid-template-columns: 38.5.5rem 26.2rem;
    }

    @media (min-width: 1200px) {
      grid-template-columns: 55rem 29.1rem;
    }
  }

  &:nth-of-type(odd) {
    grid-template-areas:
      "title"
      "image"
      "description";

    @media (min-width: 768px) {
      grid-template-areas:
        ". image"
        "title image"
        "description image"
        ". image";
      grid-template-columns: 26.2rem 38.5rem;
    }

    @media (min-width: 1200px) {
      grid-template-columns: 29.1rem 55rem;
    }
  }
`;

const Title = styled.h2`
  grid-area: title;
  font-size: 2.4rem;
  font-weight: 700;
  line-height: 5.8rem;
  letter-spacing: -0.03rem;

  @media (min-width: 768px) {
    font-size: 4.8rem;
  }
`;

const S_Title = styled.span<{ gradient: string }>`
  color: transparent;
  background-clip: text;
  -webkit-background-clip: text;

  background: ${({ gradient }) => gradient};
`;

const Br = styled.br`
  display: none;
  @media (min-width: 768px) {
    display: inline;
  }
`;

const Description = styled.p`
  grid-area: description;
  font-weight: 500;
  color: #6b6b6b;
  line-height: 150%;

  font-size: 1.5rem;

  @media (min-width: 768px) {
    font-size: 1.6rem;
  }
`;

const S_Image = styled(Image)`
  grid-area: image;
  width: 100%;
  height: fit-content;

  @media (min-width: 768px) {
    width: 38.5rem;
  }
  @media (min-width: 1200px) {
    width: 55rem;
  }
`;
