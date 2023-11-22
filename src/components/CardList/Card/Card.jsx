import * as S from "./Card.style";
import { getTimeDifference } from 'utils/getTimeDifference';
import { formatDate } from 'utils/formatDate';
import cardImg from "assets/images/cardImg.png";
import starIcon from "assets/images/starIcon.svg";
import kebabIcon from "assets/images/kebabIcon.svg";


function Card({ item }) {
  const image = item?.image_source;
  const date = item?.created_at;
  const description = item?.description;

  return(
    <S.CardContainer>
      <S.CardImgWrapper>
        <S.CardImg src={image} alt="카드 이미지" />
      </S.CardImgWrapper>
      <S.StarIcon src={starIcon} alt="즐겨찾기"/>
      <S.CardInfo>
        <S.CardHeader>
          <S.CardCreatedAt>{getTimeDifference(date)}</S.CardCreatedAt>
          <S.KebabIcon src={kebabIcon}></S.KebabIcon>
        </S.CardHeader>
        <S.CardDescription>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed laoreet lobortis ipsum quis tincidunt. Sed sed erat nunc. 
        </S.CardDescription>
        <S.CardDate>{formatDate(date)}</S.CardDate>
      </S.CardInfo>
    </S.CardContainer>
  );
}

export default Card;