import * as S from "./Card.style";
import noImage from "images/no-image.svg";
import { formatDate, formatTimeDiff } from "utils";

function Card({ item }) {
  const { imageSource, createdAt, title, description, url } = item;

  const moveUrl = () => {
    window.open(url);
  };

  return (
    <div onClick={moveUrl}>
      <S.ImageContainer>
        <img src={imageSource || noImage} alt={title} />
      </S.ImageContainer>
      <S.Info>
        <S.TimeDiff>{formatTimeDiff(createdAt)}</S.TimeDiff>
        <S.Description>{description}</S.Description>
        <S.Date>{formatDate(createdAt)}</S.Date>
      </S.Info>
    </div>
  );
}

export default Card;
