import * as S from "./SampleCard.style";
import noImage from "images/no-image.svg";
import star from "images/star.svg";
import kebab from "images/kebab.svg";
import { formatDate, formatTimeDiff } from "utils/format";

function SampleCard({ item }) {
  const { imageSource, createdAt, title, description, url } = item;

  const moveUrl = () => {
    window.open(url);
  };

  return (
    <div onClick={moveUrl}>
      <S.ImageContainer>
        <S.Image src={imageSource ?? noImage} alt={title} />
        <S.StarButton src={star} alt="별모양 버튼" />
      </S.ImageContainer>
      <S.Info>
        <S.KebabButton src={kebab} alt="케밥 버튼" />
        <S.TimeDiff>{formatTimeDiff(createdAt)}</S.TimeDiff>
        <S.Description>{description}</S.Description>
        <S.Date>{formatDate(createdAt)}</S.Date>
      </S.Info>
    </div>
  );
}

export default SampleCard;
