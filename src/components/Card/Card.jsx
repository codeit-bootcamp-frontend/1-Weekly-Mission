import IMAGES from "../../assets/images.js"

import { convertCreatedAt, formatDate } from "../../utils/utils"
import useToggle from "../../hooks/useToggle"

import * as S from "./styles.js"

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
  let created_at, image_source, description, url
  if (items.createdAt) {
    created_at = items.createdAt
    image_source = items.imageSource
  } else {
    created_at = items.created_at
    image_source = items.image_source
  }

  description = items.description
  url = items.url
  return (
    <S.CardHref href={url} target="_blank" rel="noreferrer">
      <CardImage imgUrl={image_source} />
      <CardInfo createdAt={created_at} description={description} />
    </S.CardHref>
  )
}

export default Card
