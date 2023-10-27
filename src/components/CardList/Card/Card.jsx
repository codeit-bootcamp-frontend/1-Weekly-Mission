import * as S from "./Card.style";
import noImage from "images/no-image.svg";
import star from "images/star.svg";
import kebab from "images/kebab.svg";
import { formatDate, formatTimeDiff } from "utils";

function Card({ item }) {
  const { image_source, created_at, title, description, url } = item;

  const moveUrl = () => {
    window.open(url);
  };

  return (
    <div onClick={moveUrl}>
      <S.ImageContainer>
        <S.Image src={image_source || noImage} alt={title} />
        <S.StarButton src={star} alt="별모양 버튼" />
      </S.ImageContainer>
      <S.Info>
        <S.KebabButton src={kebab} alt="케밥 버튼" />
        <S.TimeDiff>{formatTimeDiff(created_at)}</S.TimeDiff>
        <S.Description>{description}</S.Description>
        <S.Date>{formatDate(created_at)}</S.Date>
      </S.Info>
    </div>
  );
}

export default Card;
