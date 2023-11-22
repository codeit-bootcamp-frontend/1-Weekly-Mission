import * as S from "./Card.style";
import { getTimeDifference } from 'utils/getTimeDifference';
import { formatDate } from 'utils/formatDate';

function Card({ item }) {
  const image = item?.image_source;
  const date = item?.created_at;
  const description = item?.description;

  return(
    <S.CardContainer>
      <S.CardImgWrapper>{image}</S.CardImgWrapper>
      <S.CardInfo>
        <S.CardCreatedAt>{getTimeDifference(date)}</S.CardCreatedAt>
        <S.CardDescription>{description}</S.CardDescription>
        <S.CardDate>{formatDate(date)}</S.CardDate>
      </S.CardInfo>
    </S.CardContainer>
  );
}

export default Card;