import { StaticImageData } from "next/image";
import Image from "next/image";
import styled from "styled-components";

import image1 from "@/public/images/image1.png";
import image2 from "@/public/images/image2.png";
import image3 from "@/public/images/image3.png";
import image4 from "@/public/images/image4.png";

interface HomeSectionProps {
  image_source: StaticImageData;
  alt: string;
  paragraph: string;
  spanText: string;
  text2: string;
  text1?: string;
}

const HomeSection = ({
  image_source,
  alt,
  paragraph,
  spanText,
  text2,
  text1 = "",
}: HomeSectionProps) => {
  return (
    <StyledHomeSection>
      <StyledHomeTitleHeader>
        {text1}
        <StyledHomeGradientSpan>{spanText}</StyledHomeGradientSpan>
        {text2}
      </StyledHomeTitleHeader>
      <StyledHomeDescriptionParagraph>
        {paragraph}
      </StyledHomeDescriptionParagraph>
      <StyledHomeContentImage
        src={image_source}
        fill
        objectFit="cover"
        alt={alt}
      />
    </StyledHomeSection>
  );
};

const Home = () => {
  return (
    <StyledHomeArticle>
      <HomeSection
        image_source={image1}
        alt="링크의 내용이 담긴 카드들"
        paragraph="나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
        모든 것을 한 공간에 저장하세요."
        spanText=" 원하는 링크"
        text2="를 저장하세요"
      />
      <HomeSection
        image_source={image2}
        alt="폴더 이름 변경 가능"
        paragraph="나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다."
        spanText="관리"
        text2="하세요"
        text1="링크를 폴더로"
      />
      <HomeSection
        image_source={image3}
        alt="폴더 공유 기능"
        paragraph="여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
          쉽고 빠르게 링크를 공유해 보세요."
        spanText="공유"
        text2="해 보세요"
        text1="저장한 링크를"
      />
      <HomeSection
        image_source={image4}
        alt="링크 검색 기능"
        paragraph="중요한 정보들을 검색으로 쉽게 찾아보세요."
        spanText="검색"
        text2="해 보세요"
        text1="저장한 링크를"
      />
    </StyledHomeArticle>
  );
};

export default Home;

const StyledHomeSection = styled.section`
  position: relative;
  display: grid;
  justify-content: center;
  column-gap: 15.7rem;
  width: 100%;
  height: 100%;
  padding: 50px 0;

  &:nth-of-type(odd) {
    grid-template:
      ". image"
      "title image"
      "description image"
      ". image"
      /29.1rem 55rem;
  }

  &:nth-of-type(even) {
    grid-template:
      "image ."
      "image title"
      "image description"
      "image ."
      /55rem 29.1rem;
  }

  @media (min-width: 768px) and (max-width: 1199px) {
    column-gap: 5.1rem;
    row-gap: 1rem;
    height: 41.5rem;
    padding: 5rem 0;

    &:nth-of-type(odd) {
      grid-template:
        ". image"
        "title image"
        "description image"
        ". image"
        /26.2rem 38.5rem;
    }

    &:nth-of-type(even) {
      grid-template:
        "image ."
        "image title"
        "image description"
        "image ."
        /38.5rem 26.2rem;
    }
  }

  @media screen and (max-width: 767px) {
    column-gap: 2.4rem;
    row-gap: 1.6rem;
    padding: 4rem 3.2rem;
    height: 100%;

    &:nth-of-type(odd) {
      grid-template:
        "title"
        "image"
        "description"
        / 1fr;
    }

    &:nth-of-type(even) {
      grid-template:
        "title"
        "image"
        "description"
        / 1fr;
    }
  }
`;

const StyledHomeTitleHeader = styled.h2`
  grid-area: title;
  font-size: 4.8rem;
  font-weight: 700;
  line-height: 5.8rem;
  letter-spacing: -0.03rem;

  @media screen and (max-width: 767px) {
    font-size: 2.4rem;
    line-height: normal;
  }
`;

const StyledHomeGradientSpan = styled.span`
  background-image: var(--linkbrary-title-1-gradient);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
`;

const StyledHomeDescriptionParagraph = styled.p`
  grid-area: description;
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--linkbrary-description);
  line-height: 150%;
  word-break: keep-all;

  @media screen and (max-width: 767px) {
    font-size: 1.5rem;
  }
`;

const StyledHomeContentImage = styled(Image)`
  grid-area: image;
`;

const StyledHomeArticle = styled.article`
  padding-top: 7rem;
  padding-bottom: 12rem;

  @media (min-width: 768px) and (max-width: 1199px) {
    padding-top: 3rem;
  }

  @media screen and (max-width: 767px) {
    padding-top: 0;
  }
`;
