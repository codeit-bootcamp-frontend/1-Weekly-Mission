import { convertCreatedAt, formatDate } from "../../utils/utils"
import useToggle from "../../hooks/useToggle"
import IMAGES from "../../assets/images.js"
import * as S from "./styles.js"
import { useState } from "react"

const SelectMenu = () => {
  const [isHover, setIsHover] = useState(false)
  const handleMouseEnter = () => setIsHover(true)

  const handleMouseLeave = () => setIsHover(false)

  let boxStyle = {
    color: isHover ? "var(--linkbrary-primary-color)" : "#000",
    background: isHover
      ? "var(--linkbrary-gray-10)"
      : "var(--gray-light-gray-00)",
  }
  return (
    <S.SelectMenuBox>
      <S.SelectMenuInnerBox>
        <S.SelectMenuButtonBox
          style={boxStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <p>삭제하기</p>
        </S.SelectMenuButtonBox>
        <S.SelectMenuButtonBox
          style={boxStyle}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}>
          <p>폴더에 추가</p>
        </S.SelectMenuButtonBox>
      </S.SelectMenuInnerBox>
    </S.SelectMenuBox>
  )
}

const CardInfo = ({ createdAt, description }) => {
  let text
  if (description === null || description === undefined || description === "") {
    text = "내용 없음"
  } else {
    text = description
  }

  const handleKebabClick = (e) => {
    e.preventDefault()
  }

  return (
    <S.CardInfoBox>
      <S.CardInfoInnerBox>
        <S.CardTimeDiffParagraph>
          {convertCreatedAt(createdAt)}
        </S.CardTimeDiffParagraph>
        <S.CardKebabImage
          src={IMAGES.kebab}
          alt="더보기"
          onClick={handleKebabClick}
        />
        {/* 삭제하기/폴더 추가 Modal 제작 중 */}
        {null && <SelectMenu />}
      </S.CardInfoInnerBox>
      <S.CardDescriptionParagraph>{text}</S.CardDescriptionParagraph>
      <S.CardCreatedAtParagraph>
        {formatDate(createdAt)}
      </S.CardCreatedAtParagraph>
    </S.CardInfoBox>
  )
}

const CardImage = ({ imgUrl }) => {
  const [isLiked, setIsLiked] = useToggle(false)

  const handleStarClick = (e) => {
    e.preventDefault()
    setIsLiked(isLiked)
  }
  return (
    <S.CardImageContainerBox>
      <S.CardStyledImage src={imgUrl || IMAGES.noImage} alt="카드" />
      <S.CardStarImage
        src={isLiked ? IMAGES.filledStar : IMAGES.emptyStar}
        alt="star"
        onClick={handleStarClick}
      />
    </S.CardImageContainerBox>
  )
}

const Card = ({ items }) => {
  // 기존 코드 - SAMPLE 데이터를 받을 때 데이터 구조가 달라 if - els문으로 처리
  // const { created_at, description, image_source, url } = items

  const image_source = items.createdAt ? items.imageSource : items.image_source
  const created_at = items.createdAt ? items.createdAt : items.created_at
  const description = items.description
  const url = items.url
  return (
    <S.CardHref href={url} target="_blank" rel="noreferrer">
      <CardImage imgUrl={image_source} />
      <CardInfo createdAt={created_at} description={description} />
    </S.CardHref>
  )
}

export default Card
