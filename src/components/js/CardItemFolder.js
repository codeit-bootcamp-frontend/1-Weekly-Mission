import { useState } from "react";
import styled from "styled-components";
import noImage from "../../Assets/noImage.png";
import starIcon from "../../Assets/star.svg";
import kebabIcon from "../../Assets/kebab.svg";
import KebabButtonMenu from "./KebabButtonMenu";
import { RowContainer } from "./Container";
import getTimeDiff from "../../utils/utilTimeDiff";

const CardLink = styled.div`
  cursor: pointer;
  pointer-events: auto;
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  width: 100%;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
`;

const CardInformation = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10px;
  padding: 15px 20px;
`;

const Time = styled.div`
  color: #666;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const Description = styled.p`
  overflow: hidden;
  height: 49px;
  /* 2줄이상 긴텍스트 생략 */
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  /*  */
  color: #000;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
`;

const Day = styled.div`
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  color: #333;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  position: relative;
  border-radius: 15px;
  width: 340px;
  box-shadow: 0px 5px 25px 0px rgba(0, 0, 0, 0.08);

  &:hover ${CardImage} {
    transform: scale(130%);
    transition: 1s;
  }

  &:hover ${CardInformation} {
    background-color: var(--bg);
  }

  @media screen and (max-width: 770px) {
    width: 325px;
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  position: relative;
`;

const BookmarkButton = styled.img`
  width: 34px;
  height: 34px;
  position: absolute;
  top: 15px;
  right: 15px;
  z-index: 2;
`;

const KebabButton = styled.img`
  width: 21px;
  height: 17px;
  z-index: 2;
  pointer-events: auto;
`;

/* 각 카드 컴포넌트 */
function CardItem({ item }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = (e) => {
    e.stopPropagation();
    setIsMenuOpen(!isMenuOpen);
  };

  const handleCardClick = () => {
    const URL = item.url;
    window.open(URL);
  };

  /* 이미지 스타일 함수 */
  const imgStyle = {
    backgroundImage: `url('${item.image_source}')`,
  };

  const nowDate = getTimeDiff(new Date(item.created_at));
  const createdDate = item.created_at.split("T")[0].split("-").join(".");

  return (
    <CardLink $url={item.url} onClick={handleCardClick}>
      <CardWrapper>
        <BookmarkButton src={starIcon} alt="bookmark_icon" />
        {isMenuOpen && <KebabButtonMenu />}
        <CardImageWrapper>
          {!item.image_source ? (
            <img className="logoImg" src={noImage} alt={noImage} />
          ) : (
            <CardImage style={imgStyle}></CardImage>
          )}
        </CardImageWrapper>
        <CardInformation>
          <RowContainer>
            <Time>{nowDate}</Time>
            <KebabButton
              src={kebabIcon}
              alt="kebabButton"
              onClick={handleToggleMenu}
            />
          </RowContainer>
          <Description>{item.description}</Description>
          <Day className="day">{createdDate}</Day>
        </CardInformation>
      </CardWrapper>
    </CardLink>
  );
}

export default CardItem;
