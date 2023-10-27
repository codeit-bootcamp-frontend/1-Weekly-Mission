import IMAGES from "../../assets/images.js"

import { convertCreatedAt, formatDate } from "../../utils/utils"
import useToggle from "../../hooks/useToggle"

import * as S from "./styles.js"

const CardInfo = ({ createdAt, description }) => {
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
      <S.CardDescriptionParagraph>{description}</S.CardDescriptionParagraph>
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
  const { createdAt, description, imageSource, url } = items

  return (
    <S.CardHref href={url} target="_blank" rel="noreferrer">
      <CardImage imgUrl={imageSource} />
      <CardInfo createdAt={createdAt} description={description} />
    </S.CardHref>
  )
}

export default Card
