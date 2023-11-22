import * as S from "./Card.style";
import { getTimeDifference } from 'utils/getTimeDifference';
import { formatDate } from 'utils/formatDate';
import cardImg from "assets/images/cardImg.png";
import starIcon from "assets/images/starIcon.svg";
import kebabIcon from "assets/images/kebabIcon.svg";
import noImg from "assets/images/noImg.svg";


function Card({ item }) {
  const image = item?.image_source;
  const date = item?.created_at;
  const description = item?.description;

  return(
    <S.CardContainer>
      <S.CardImgWrapper>
        {image ?
          <S.CardImg src={image} alt="카드 이미지" />
        : <S.CardImg src={noImg} alt="이미지 없음" />
        }
      </S.CardImgWrapper>
      <S.StarIcon src={starIcon} alt="즐겨찾기"/>
      <S.CardInfo>
        <S.CardHeader>
          <S.CardCreatedAt>{getTimeDifference(date)}</S.CardCreatedAt>
          <S.KebabIcon src={kebabIcon}></S.KebabIcon>
        </S.CardHeader>
        <S.CardDescription>{description}</S.CardDescription>
        <S.CardDate>{formatDate(date)}</S.CardDate>
      </S.CardInfo>
    </S.CardContainer>
  );
}

export default Card;