import { useState } from "react";
import { timeForToday } from "utils/moment";
import kebab from "assets/kebab.svg";
import noImageIMG from "assets/noImage.svg";
import starIMG from "assets/star.svg";
import chosenStarIMG from "assets/chosenStar.svg";
import * as Styled from "./StyledCard";

const Card = ({ data, onClick }) => {
  // const imgRef = useRef();
  const [star, setStar] = useState(false);

  const handleCardClick = () => {
    onClick(data.url);
  };

  const formatDate = (value) => {
    const date = new Date(value);
    return `${date.getFullYear()}. ${date.getMonth() + 1}. ${date.getDate()}`;
  };

  // const handleMouseEnter = () => {
  //   const $imgNode = imgRef.current;
  //   $imgNode.setAttribute("style", "transform: scale(1.3)");
  // };

  // const handleMouseLeave = () => {
  //   const $imgNode = imgRef.current;
  //   $imgNode.removeAttribute("style");
  // };

  const handleKebabClick = (e) => {
    e.stopPropagation();
  };

  const handleStarClick = (e) => {
    e.stopPropagation();
    if (star) {
      setStar(false);
    } else {
      setStar(true);
    }
  };

  return (
    <Styled.CardContainer
      onClick={handleCardClick}
      // onMouseEnter={handleMouseEnter}
      // onMouseLeave={handleMouseLeave}
    >
      <Styled.CardImgBox>
        <Styled.CardImg
          // ref={imgRef}
          src={data.image_source ? data.image_source : noImageIMG}
          alt={data.image_source ? "카드 이미지" : "이미지 없음"}
        />
      </Styled.CardImgBox>
      <Styled.InfoContainer>
        <Styled.AdditionalInfo>
          <span>{timeForToday(data.created_at)}</span>
          <Styled.Kebab
            src={kebab}
            alt="카드 설정 더보기"
            onClick={handleKebabClick}
          />
        </Styled.AdditionalInfo>
        <Styled.Description>{data.description}</Styled.Description>
        <span>{formatDate(data.created_at)}</span>
      </Styled.InfoContainer>
      <Styled.Star
        onClick={handleStarClick}
        src={star ? chosenStarIMG : starIMG}
        alt="즐겨찾기 버튼"
      />
    </Styled.CardContainer>
  );
};

export default Card;
