import IMAGES from "../../assets/images.js"

import { convertCreatedAt, formatDate } from "../../utils/utils"
import useToggle from "../../hooks/useToggle"

import {
  CardCreatedAtParagraph,
  CardDescriptionParagraph,
  CardHref,
  CardImageContainerBox,
  CardInfoBox,
  CardInfoInnerBox,
  CardKebabImage,
  CardStarImage,
  CardStyledImage,
  CardTimeDiffParagraph,
} from "./styles.js"

const CardInfo = ({ createdAt, description }) => {
  const handleKebabClick = (e) => {
    e.preventDefault()
  }

  return (
    <CardInfoBox>
      <CardInfoInnerBox>
        <CardTimeDiffParagraph>
          {convertCreatedAt(createdAt)}
        </CardTimeDiffParagraph>
        <CardKebabImage
          src={IMAGES.kebab}
          alt="더보기"
          onClick={handleKebabClick}
        />
      </CardInfoInnerBox>
      <CardDescriptionParagraph>{description}</CardDescriptionParagraph>
      <CardCreatedAtParagraph>{formatDate(createdAt)}</CardCreatedAtParagraph>
    </CardInfoBox>
  )
}

const CardImage = ({ imgUrl }) => {
  const [isLiked, setIsLiked] = useToggle(false)

  const handleStarClick = (e) => {
    e.preventDefault()
    setIsLiked(isLiked)
  }
  return (
    <CardImageContainerBox>
      <CardStyledImage src={imgUrl || IMAGES.noImage} alt="카드" />
      <CardStarImage
        src={isLiked ? IMAGES.filledStar : IMAGES.emptyStar}
        alt="star"
        onClick={handleStarClick}
      />
    </CardImageContainerBox>
  )
}

const Card = ({ items }) => {
  const { createdAt, description, imageSource, url } = items

  return (
    <CardHref href={url} target="_blank" rel="noreferrer">
      <CardImage imgUrl={imageSource} />
      <CardInfo createdAt={createdAt} description={description} />
    </CardHref>
  )
}

export default Card
