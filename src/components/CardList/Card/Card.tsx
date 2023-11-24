import * as S from "./Card.style";
import { useState } from "react";
import { getTimeDifference } from 'utils/getTimeDifference';
import { formatDate } from 'utils/formatDate';
import starIcon from "assets/images/starIcon.svg";
import kebabIcon from "assets/images/kebabIcon.svg";
import noImg from "assets/images/noImg.svg";
import SelectMenu from 'components/SelectMenu/SelectMenu';


function Card({ item }) {
  const [showSelectMenu, setShowSelectMenu] = useState(false);

  const openSelectMenu = () => {
    setShowSelectMenu(true);
  }

  // const closeSelectMenu = () => {
  //   setShowSelectMenu(false);
  // }

  const image = item?.image_source;
  const date = item?.created_at;
  const description = item?.description;

  return(
    <S.CardContainer>
      <S.CardImgWrapper>
        {image ?
          <S.CardImg src={image} alt="카드 이미지" />
        : <S.CardImg src={noImg} alt="이미지 없음" />
        }
      </S.CardImgWrapper>
      <S.StarIcon src={starIcon} alt="즐겨찾기"/>
      <S.CardInfo>
        <S.CardHeader>
          <S.CardCreatedAt>{getTimeDifference(date)}</S.CardCreatedAt>
          <S.KebabIcon onClick={openSelectMenu} src={kebabIcon} alt="추가 메뉴 더보기" />
          {showSelectMenu && <SelectMenu />}
        </S.CardHeader>
        <S.CardDescription>{description}</S.CardDescription>
        <S.CardDate>{formatDate(date)}</S.CardDate>
      </S.CardInfo>
    </S.CardContainer>
  );
}

export default Card;