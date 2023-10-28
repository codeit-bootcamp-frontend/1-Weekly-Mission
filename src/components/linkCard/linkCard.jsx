import * as S from "./linkCard.style.js";
import noImageSource from "assets/images/noLinkCardImg.png";
import { NO_SPECIAL_CHA_PATTERN } from "utils/constants.js";
import getTimeAgo from "utils/getTimeAgo.js";
import { parseISO, format } from "date-fns";

export default function LinkCardComponent({ cardData }) {
  const { createdAt, url, description, title, imageSource } = cardData;

  const imageAlt =
    title?.split(" ")[0].replace(NO_SPECIAL_CHA_PATTERN, "") + " 대표 이미지";

  const parsedCreatedDate = format(parseISO(createdAt), "yyyy-MM-dd");

  return (
    <S.CardContainer>
      <S.CardWrapper
        href={url}
        target="_blank"
        alt=""
        rel="noopener noreferrer"
      >
        <S.CardImageContainer>
          <S.CardImage src={imageSource ?? noImageSource} alt={imageAlt} />
        </S.CardImageContainer>
        <S.CardInfo>
          <S.TimeAgo>{getTimeAgo(createdAt)}</S.TimeAgo>
          <S.Description>{description}</S.Description>
          <S.CreatedDate>{parsedCreatedDate}</S.CreatedDate>
        </S.CardInfo>
      </S.CardWrapper>
    </S.CardContainer>
  );
}
