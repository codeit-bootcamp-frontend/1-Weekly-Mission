import Button from "../Button/Button"
import IMAGES from "../../assets/images"

import * as S from "./styles"

const Addlink = () => {
  return (
    <S.AddLinkOuterBox>
      <S.AddLinkBox>
        <S.AddLinkInputBox>
          <S.AddLinkInputInnerBox>
            <S.AddLinkImage src={IMAGES.link} alt="Link" />
            <S.AddLinkContentInput placeholder="링크를 추가해 보세요" />
          </S.AddLinkInputInnerBox>
          <Button size="short" text="추가하기" />
        </S.AddLinkInputBox>
      </S.AddLinkBox>
    </S.AddLinkOuterBox>
  )
}

export default Addlink
