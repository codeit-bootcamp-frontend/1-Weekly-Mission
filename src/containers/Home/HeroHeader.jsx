import { Link } from "react-router-dom"
import IMAGES from "../../assets/images"
import Button from "../../components/Button/Button"
import * as S from "./styles.js"

const HeroHeader = () => {
  return (
    <S.HeroHeaderBox>
      <S.HeroSolganHeader>
        <S.HeroSloganSpan>세상의 모든 정보</S.HeroSloganSpan>
        를
        <br />
        쉽게 저장하고 관리해 보세요
      </S.HeroSolganHeader>
      <Link to="signup">
        <Button size="long" text="링크 추가하기"></Button>
      </Link>
      <S.HeroImage src={IMAGES.hero} alt="Linkbrary 서비스 소개" />
    </S.HeroHeaderBox>
  )
}

export default HeroHeader
