import React, { useRef } from "react";
import * as S from "./Card.style";
import getCardTimes from "../../utils/getCardTime";
import defaultLinkImage from "../../images/defaultLinkImage.png";
import { useState } from "react";
import kebabImageSrc from "../../images/kebab.png";
import KebabMenu from "../kebabMenu/KebabMenu";

const Card = ({ link, modalComponent, setModalComponent, folders, isShared }) => {
  const { created_at, createdAt: sampleCreatedAt, url, title, imageSource: sampleImageSource, image_source } = link;
  const imageSource = sampleImageSource || image_source || defaultLinkImage;

  const { fromNow, formattedDate } = getCardTimes(sampleCreatedAt || created_at);
  const [isKebabOpen, setIsKebabOpen] = useState(false);
  const kebabButtonRef = useRef();
  return (
    <S.CardWrap>
      <S.CardImageWrap>
        <a href={url} target="_blank" rel="noopener noreferrer">
          <S.CardImage src={imageSource} alt={title} />
        </a>
        <S.StarIconButton>
          <S.StarImage />
        </S.StarIconButton>
      </S.CardImageWrap>
      <S.CardTextWrap>
        <S.TimeDiff>{fromNow}</S.TimeDiff>
        {!isShared && (
          <>
            <S.KebabButton onClick={() => setIsKebabOpen((prev) => !prev)} ref={kebabButtonRef}>
              <img src={kebabImageSrc} alt="메뉴 열기" />
            </S.KebabButton>
            <KebabMenu
              folderId={+link.id}
              isKebabOpen={isKebabOpen}
              folders={folders}
              url={url}
              modalComponent={modalComponent}
              setModalComponent={setModalComponent}
            />
          </>
        )}

        <S.CardTitle href={url} target="_blank" rel="noopener noreferrer">
          {title ?? "제목 없는 링크"}
        </S.CardTitle>
        <S.CardCreatedDate>{formattedDate}</S.CardCreatedDate>
      </S.CardTextWrap>
    </S.CardWrap>
  );
};

export default Card;
