import * as S from "./linkCard.style.js";
import noImageSource from "assets/images/noLinkCardImg.png";
import { NO_SPECIAL_CHA_PATTERN } from "utils/constants.js";
import getTimeAgo from "utils/getTimeAgo.js";
import { parseISO, format } from "date-fns";

const LINK_ITEM_KEY = {
  createdAt: {
    linkShare: "createdAt",
    folder: "created_at",
  },
  imageSource: {
    linkShare: "imageSource",
    folder: "image_source",
  },
};

export default function LinkCard({ cardData, page }) {
  const { url, description, title } = cardData;
  const createAtKey = LINK_ITEM_KEY.createdAt[page];
  const imageSourceKey = LINK_ITEM_KEY.imageSource[page];
  const createdAt = cardData[createAtKey];
  const imageSource = cardData[imageSourceKey];

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
