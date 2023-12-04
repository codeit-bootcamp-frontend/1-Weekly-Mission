import * as S from "@/components/featureList/FeatureList.style";
import feature1Img from "@/images/Intro/feature1.png";
import feature2Img from "@/images/Intro/feature2.png";
import feature3Img from "@/images/Intro/feature3.png";
import feature4Img from "@/images/Intro/feature4.png";
import FeatureArticle from "../featureItem/FeatureArticle";

const articles = [
  {
    title: (
      <>
        <span>원하는 링크</span>를 <br />
        저장하세요.
      </>
    ),
    description: (
      <>
        나중에 읽고 싶은 글, 다시 보고 싶은 영상,
        <br /> 사고 싶은 옷, 기억하고 싶은 모든 것을
        <br /> 한 공간에 저장하세요.
      </>
    ),
    imageSrc: feature1Img.src,
    alt: "링크 저장 예시 이미지",
  },
  {
    title: (
      <>
        링크를 폴더로
        <br /> <span>관리</span>하세요
      </>
    ),
    description: (
      <>
        나만의 폴더를 무제한으로 만들고
        <br /> 다양하게 활용할 수 있습니다.
      </>
    ),
    imageSrc: feature2Img.src,
    alt: "링크 저장 예시 이미지",
  },
  {
    title: (
      <>
        저장한 링크를
        <br /> <span>공유</span>해 보세요.
      </>
    ),
    description: (
      <>
        여러 링크를 폴더에 담고 공유할 수<br className="not-pc-br" /> 있습니다. <br className="pc-br" />
        가족, 친구, 동료들에게 쉽고
        <br className="not-pc-br" /> 빠르게 링크를
        <br className="pc-br" /> 공유해 보세요.
      </>
    ),
    imageSrc: feature3Img.src,
    alt: "링크 저장 예시 이미지",
  },
  {
    title: (
      <>
        저장한 링크를
        <br /> <span> 검색</span>해 보세요.
      </>
    ),
    description: (
      <>
        중요한 정보들을 검색으로 쉽게
        <br className="not-pc-br" /> 찾아보세요.
      </>
    ),
    imageSrc: feature4Img.src,
    alt: "링크 저장 예시 이미지",
  },
];

const FeatureList = () => {
  return (
    <S.ArticleWrap>
      {articles.map((article, i) => (
        <FeatureArticle
          key={"article" + i + 1}
          title={article.title}
          description={article.description}
          imageSrc={article.imageSrc}
          alt={article.alt}
          idx={i + 1}
        />
      ))}
    </S.ArticleWrap>
  );
};

export default FeatureList;
