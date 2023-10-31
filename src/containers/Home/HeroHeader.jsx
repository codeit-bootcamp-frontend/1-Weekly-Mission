import IMAGES from "../../assets/images"
import LinkButton from "../../components/Button/LinkButton"
import * as S from "./styles.js"

const HeroHeader = () => {
  return (
    <S.HeroHeaderBox>
      <S.HeroSolganHeader>
        <span>세상의 모든 정보</span>
        를
        <br />
        쉽게 저장하고 관리해 보세요
      </S.HeroSolganHeader>
      <LinkButton to="signup" size="long" text="링크 추가하기"></LinkButton>
      <S.HeroImage src={IMAGES.hero} alt="Linkbrary 서비스 소개" />
    </S.HeroHeaderBox>
  )
}

export default HeroHeader
