import Button from "../Button/Button"
import IMAGES from "../../assets/images"

import * as S from "./styles"

const Addlink = () => {
  return (
    <S.AddLinkBox>
      <S.AddLinkInputBox>
        <S.AddLinkInnerBox>
          <S.AddLinkImage src={IMAGES.link} alt="Link" />
          <S.AddLinkContentBox></S.AddLinkContentBox>
          <Button />
        </S.AddLinkInnerBox>
      </S.AddLinkInputBox>
    </S.AddLinkBox>
  )
}

export default Addlink
