import IMAGES from "../../assets/images.js"
import * as S from "./styles.js"

const HomeSection = ({
  image_source,
  alt,
  paragraph,
  spanText,
  text2,
  text1 = "",
}) => {
  return (
    <S.HomeSection>
      <S.HomeTitleHeader>
        {text1}
        <S.HomeGradientSpan1>{spanText}</S.HomeGradientSpan1>
        {text2}
      </S.HomeTitleHeader>
      <S.HomeDescriptionParagraph>{paragraph}</S.HomeDescriptionParagraph>
      <S.HomeContentImage src={image_source} alt={alt} />
    </S.HomeSection>
  )
}

const Home = () => {
  return (
    <S.HomeArticle>
      <HomeSection
        image_source={IMAGES.image1}
        alt="링크의 내용이 담긴 카드들"
        paragraph="나중에 읽고 싶은 글, 다시 보고 싶은 영상, 사고 싶은 옷, 기억하고 싶은
        모든 것을 한 공간에 저장하세요."
        spanText=" 원하는 링크"
        text2="를 저장하세요"
      />
      <HomeSection
        image_source={IMAGES.image2}
        alt="폴더 이름 변경 가능"
        paragraph="나만의 폴더를 무제한으로 만들고 다양하게 활용할 수 있습니다."
        spanText="관리"
        text2="하세요"
        text1="링크를 폴더로"
      />
      <HomeSection
        image_source={IMAGES.image3}
        alt="폴더 공유 기능"
        paragraph="여러 링크를 폴더에 담고 공유할 수 있습니다. 가족, 친구, 동료들에게
          쉽고 빠르게 링크를 공유해 보세요."
        spanText="공유"
        text2="해 보세요"
        text1="저장한 링크를"
      />
      <HomeSection
        image_source={IMAGES.image4}
        alt="링크 검색 기능"
        paragraph="중요한 정보들을 검색으로 쉽게 찾아보세요."
        spanText="검색"
        text2="해 보세요"
        text1="저장한 링크를"
      />
    </S.HomeArticle>
  )
}

export default Home
