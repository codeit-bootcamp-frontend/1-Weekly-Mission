import inputImg from "../../assets/link.svg"
import S from "../styled"

function HeaderSearch() {
  return (
    <S.HeaderSearch>
      <S.Input placeholder="링크를 추가해보세요." />
      <S.InputWrapper>
        <S.InputImg src={inputImg} />
        <S.InputButton>추가하기</S.InputButton>
      </S.InputWrapper>
    </S.HeaderSearch>
  )
}

export default HeaderSearch