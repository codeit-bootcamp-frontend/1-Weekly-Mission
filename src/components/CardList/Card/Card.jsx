import * as S from "./Card.style";
import noImage from "images/no-image.svg";
import star from "images/star.svg";
import kebab from "images/kebab.svg";
import { formatDate, formatTimeDiff } from "utils";

function Card({ item }) {
  const { image_source, created_at, title, description, url } = item;

  const timeDiff = formatTimeDiff(created_at);
  const date = formatDate(created_at);

  const moveUrl = () => {
    window.open(url);
  };

  return (
    <div onClick={moveUrl}>
      <S.ImageContainer>
        <S.Image src={image_source ?? noImage} alt={title} />
        <S.StarButton src={star} alt="별모양 버튼" />
      </S.ImageContainer>
      <S.Info>
        <S.KebabButton src={kebab} alt="케밥 버튼" />
        <S.TimeDiff>{timeDiff}</S.TimeDiff>
        <S.Description>{description}</S.Description>
        <S.Date>{date}</S.Date>
      </S.Info>
    </div>
  );
}

export default Card;
