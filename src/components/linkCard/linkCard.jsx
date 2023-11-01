import * as S from "./linkCard.style.js";
import noImageSrc from "assets/images/noLinkCardImage.png";
import starIconSrc from "assets/icons/star.svg";
import kebabIconSrc from "assets/icons/kebab.svg";
import { NO_SPECIAL_CHA_PATTERN } from "utils/constants.js";
import getTimeAgo from "utils/getTimeAgo.js";
import { parseISO, format } from "date-fns";
import { useState } from "react";

const LINK_ITEM_KEY = {
  createdAt: {
    linkShare: "createdAt",
    folder: "created_at",
  },
  imageSrc: {
    linkShare: "imageSource",
    folder: "image_source",
  },
};

const KEBAB_BUTTON_LIST = [
  { index: 0, title: "삭제하기" },
  { index: 1, title: "폴더에 추가" },
];

export default function LinkCard({ cardData, page }) {
  const { url, description, title } = cardData;
  const createAtKey = LINK_ITEM_KEY.createdAt[page];
  const imageSrcKey = LINK_ITEM_KEY.imageSrc[page];
  const createdAt = cardData[createAtKey];
  const imageSrc = cardData[imageSrcKey];
  const imageAlt =
    title?.split(" ")[0].replace(NO_SPECIAL_CHA_PATTERN, "") + " 대표 이미지";
  const parsedCreatedDate = format(parseISO(createdAt), "yyyy-MM-dd");

  const [isKebabOpen, setIsKebabOpen] = useState(false);

  return (
    <S.CardContainer>
      <S.BookMarkButton
        onClick={(e) => {
          e.stopPropagation();
        }}
        aria-label="링크 북마크 버튼"
      >
        <img src={starIconSrc} alt="북마크 별 아이콘" />
      </S.BookMarkButton>
      <S.CardWrapper href={url} target="_blank" rel="noopener noreferrer">
        <S.CardImageContainer>
          <S.CardImage src={imageSrc ?? noImageSrc} alt={imageAlt} />
        </S.CardImageContainer>
        <S.CardInfo>
          <S.TimeAgo>{getTimeAgo(createdAt)}</S.TimeAgo>
          <S.Description>{description}</S.Description>
          <S.CreatedDate>{parsedCreatedDate}</S.CreatedDate>
        </S.CardInfo>
      </S.CardWrapper>
      <S.KebabBox>
        <S.KebabButton
          onClick={(e) => {
            e.stopPropagation();
            setIsKebabOpen((prevState) => !prevState);
          }}
          aria-label={`${
            isKebabOpen ? "열려 있는" : "닫혀 있는"
          } 케밥 토글 버튼`}
        >
          <img src={kebabIconSrc} alt="케밥 아이콘" />
        </S.KebabButton>

        {isKebabOpen && (
          <S.KebabOptionList>
            {KEBAB_BUTTON_LIST.map((item) => {
              return (
                <S.KebabOptionItem
                  key={item.index}
                  onClick={(e) => {
                    e.stopPropagation();
                  }}
                >
                  {item.title}
                </S.KebabOptionItem>
              );
            })}
          </S.KebabOptionList>
        )}
      </S.KebabBox>
    </S.CardContainer>
  );
}
